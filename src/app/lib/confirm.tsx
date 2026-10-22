import { NextResponse } from "next/server";
import prisma from "./prisma";
import { NOTIFY_EMAIL, emailLayout, escapeHtml, now, sendMail } from "./mail";
import { SITE_URL } from "@/lib/site";

/**
 * Demo request, step 2: the person clicked the link in their email.
 * Mark the request confirmed, notify NOTIFY_EMAIL, and show the thank-you page.
 */
export async function handleConfirmation(req: Request) {
  const token = new URL(req.url).searchParams.get("token");
  const done = (ok: boolean) => NextResponse.redirect(`${SITE_URL}/confirmation?approved=${ok}`);
  if (!token) return done(false);

  try {
    const request = await prisma.demoRequest.findUnique({ where: { token } });
    if (!request) return done(false);
    if (request.confirmedAt) return done(true); // link clicked twice: no second email

    await prisma.demoRequest.update({ where: { token }, data: { confirmedAt: new Date() } });

    await sendMail({
      to: NOTIFY_EMAIL,
      replyTo: request.email,
      subject: `Demo request: ${request.name}`,
      text: `New confirmed demo request\n\nName: ${request.name}\nEmail: ${request.email}\nConfirmed: ${now()}\n\nReply to this email to contact them.`,
      html: emailLayout(`
        <h2 style="font-size:18px">New confirmed demo request</h2>
        <p><b>Name:</b> ${escapeHtml(request.name)}<br/><b>Email:</b> ${escapeHtml(request.email)}<br/><b>Confirmed:</b> ${now()}</p>
        <p style="color:#5B6274">Reply to this email to contact them.</p>`),
    });

    return done(true);
  } catch (err) {
    console.error("Demo confirmation error:", err);
    return done(false);
  }
}
