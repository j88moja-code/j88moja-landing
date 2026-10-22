import DataForm from "form-data";
import Mailgun from "mailgun.js";

/**
 * Email for the website forms. Two providers are supported; whichever has a
 * key set is used (Resend first). Change provider in Vercel, not in code.
 *
 *   Resend (recommended):  RESEND_API_KEY
 *   Mailgun:               MAILGUN_API_KEY, MAILGUN_DOMAIN,
 *                          MAILGUN_URL (only for EU accounts: https://api.eu.mailgun.net)
 *
 *   MAIL_FROM     sender, on a domain verified with the provider,
 *                 e.g. "FibreMate <no-reply@mail.j88moja.tech>"
 *   NOTIFY_EMAIL  who receives new messages and demo requests (commas for several)
 */

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "";
const FROM =
  process.env.MAIL_FROM ||
  `FibreMate <no-reply@${MAILGUN_DOMAIN || "example.com"}>`;

export const NOTIFY_EMAIL = (process.env.NOTIFY_EMAIL || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/** Escape text before putting it in an email's HTML (stops injected links or markup). */
export const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

type Mail = {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

/** Resend's REST API: one HTTPS call, no extra library needed. */
async function sendWithResend(m: Mail) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: Array.isArray(m.to) ? m.to : [m.to],
      subject: m.subject,
      text: m.text,
      html: m.html,
      ...(m.replyTo ? { reply_to: m.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend ${res.status}: ${detail}`);
  }
  return res.json();
}

async function sendWithMailgun(m: Mail) {
  const mg = new Mailgun(DataForm).client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "",
    ...(process.env.MAILGUN_URL ? { url: process.env.MAILGUN_URL } : {}),
  });
  return mg.messages.create(MAILGUN_DOMAIN, {
    from: FROM,
    to: m.to,
    subject: m.subject,
    text: m.text,
    html: m.html,
    ...(m.replyTo ? { "h:Reply-To": m.replyTo } : {}),
  });
}

export async function sendMail(m: Mail) {
  if (Array.isArray(m.to) ? m.to.length === 0 : !m.to) {
    throw new Error("No recipient: set NOTIFY_EMAIL");
  }
  if (process.env.RESEND_API_KEY) return sendWithResend(m);
  if (process.env.MAILGUN_API_KEY && MAILGUN_DOMAIN) return sendWithMailgun(m);
  throw new Error(
    "No email provider configured: set RESEND_API_KEY (or the Mailgun settings)",
  );
}

/** Simple branded wrapper for the HTML emails. */
export const emailLayout = (body: string) => `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1D2430">
  <p style="font-size:20px;font-weight:700;margin:0 0 16px">Fibre<span style="color:#4A6CF7">Mate</span></p>
  ${body}
  <p style="color:#5B6274;font-size:12px;margin-top:32px">FibreMate by J88Moja Systems</p>
</div>`;

export const now = () =>
  new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" });
