import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import prisma from "../../lib/prisma";
import { protect } from "../../lib/protect";
import { emailLayout, escapeHtml, sendMail } from "../../lib/mail";
import { SITE_URL } from "@/lib/site";

/**
 * Demo request, step 1: save it as unconfirmed and email the person a
 * confirmation link. You're only notified once they click it (step 2 is
 * /api/confirm), so mistyped or fake addresses never reach you.
 */
export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  if (!name || !email) {
    return NextResponse.json({ error: "Please enter your name and email." }, { status: 400 });
  }

  const blocked = await protect(req, email);
  if (blocked) return blocked;

  try {
    const already = await prisma.demoRequest.findFirst({
      where: { email, confirmedAt: { not: null } },
    });
    if (already) {
      return NextResponse.json({
        data: "We already have your demo request. We'll be in touch shortly.",
      });
    }

    const token = uuidv4();
    await prisma.demoRequest.create({ data: { name, email, token } });

    const link = `${SITE_URL}/api/confirm?token=${token}`;
    await sendMail({
      to: email,
      subject: "Confirm your FibreMate demo request",
      text: `Hello ${name},\n\nThanks for your interest in FibreMate. Please confirm your demo request by opening this link:\n\n${link}\n\nIf you didn't ask for a demo, you can ignore this email.\n\nNtobeko Sithole\nJ88Moja Systems`,
      html: emailLayout(`
        <p>Hello ${escapeHtml(name)},</p>
        <p>Thanks for your interest in FibreMate. Please confirm your demo request:</p>
        <p><a href="${link}" style="display:inline-block;background:#4A6CF7;color:#fff;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:600">Confirm my demo request</a></p>
        <p style="color:#5B6274">If you didn't ask for a demo, you can ignore this email.</p>
        <p>Ntobeko Sithole<br/>J88Moja Systems</p>`),
    });

    return NextResponse.json({ data: "Check your inbox for a confirmation link." });
  } catch (err) {
    console.error("Demo request error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}
