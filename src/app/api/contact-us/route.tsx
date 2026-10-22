import { NextRequest, NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import { protect } from "../../lib/protect";
import { NOTIFY_EMAIL, emailLayout, escapeHtml, now, sendMail } from "../../lib/mail";

const MAX_MESSAGE = 1000;

/**
 * Contact form: saves the message, then emails it to NOTIFY_EMAIL with
 * Reply-To set to the sender, so you can answer straight from your inbox.
 */
export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: `Please keep your message under ${MAX_MESSAGE} characters, or email us directly.` },
      { status: 400 }
    );
  }

  const blocked = await protect(req, email);
  if (blocked) return blocked;

  try {
    await prisma.contactMessage.create({ data: { name, email, message } });
  } catch (err) {
    // Saving failed, but still try to email it so the message isn't lost
    console.error("Could not save contact message:", err);
  }

  try {
    await sendMail({
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `New contact form message\n\nName: ${name}\nEmail: ${email}\nTime: ${now()}\n\n${message}\n\nReply to this email to answer ${name} directly.`,
      html: emailLayout(`
        <h2 style="font-size:18px">New contact form message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}<br/><b>Email:</b> ${escapeHtml(email)}<br/><b>Time:</b> ${now()}</p>
        <p style="white-space:pre-wrap;background:#F3F4F7;padding:12px;border-radius:6px">${escapeHtml(message)}</p>
        <p style="color:#5B6274">Reply to this email to answer ${escapeHtml(name)} directly.</p>`),
    });
  } catch (err) {
    console.error("Could not send contact notification:", err);
    return NextResponse.json(
      { error: "Your message couldn't be sent right now. Please try again in a few minutes." },
      { status: 502 }
    );
  }

  return NextResponse.json({ data: "Thank you. We'll get back to you within one working day." });
}
