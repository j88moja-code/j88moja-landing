import DataForm from "form-data";
import Mailgun from "mailgun.js";

/**
 * Email through Mailgun. Everything comes from environment variables, so
 * addresses can change without touching code:
 *
 *   MAILGUN_API_KEY   Mailgun API key
 *   MAILGUN_DOMAIN    sending domain, e.g. mg.j88moja.tech
 *   MAILGUN_URL       optional; https://api.eu.mailgun.net for an EU account
 *   MAIL_FROM         optional; default "FibreMate <no-reply@MAILGUN_DOMAIN>"
 *   NOTIFY_EMAIL      where new contact messages and demo requests are sent
 *                     (several addresses: separate with commas)
 */

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const FROM = process.env.MAIL_FROM || `FibreMate <no-reply@${DOMAIN}>`;

export const NOTIFY_EMAIL = (process.env.NOTIFY_EMAIL || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/** Escape text before putting it in an email's HTML (stops injected links or markup). */
export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendMail(opts: {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}) {
  if (!API_KEY || !DOMAIN) throw new Error("Mailgun is not configured (MAILGUN_API_KEY / MAILGUN_DOMAIN)");
  const mg = new Mailgun(DataForm).client({
    username: "api",
    key: API_KEY,
    ...(process.env.MAILGUN_URL ? { url: process.env.MAILGUN_URL } : {}),
  });
  return mg.messages.create(DOMAIN, {
    from: FROM,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
    ...(opts.replyTo ? { "h:Reply-To": opts.replyTo } : {}),
  });
}

/** Simple branded wrapper for the HTML emails. */
export const emailLayout = (body: string) => `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1D2430">
  <p style="font-size:20px;font-weight:700;margin:0 0 16px">Fibre<span style="color:#4A6CF7">Mate</span></p>
  ${body}
  <p style="color:#5B6274;font-size:12px;margin-top:32px">FibreMate by J88Moja Systems</p>
</div>`;

export const now = () => new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" });
