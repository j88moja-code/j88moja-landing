import { NextRequest, NextResponse } from "next/server";
import arcjet from "./arcjet";

/**
 * Arcjet checks shared by the forms: bots, abuse, too many requests, and
 * fake or disposable email addresses. Returns an error response to send
 * back, or null when the request may go ahead.
 */
export async function protect(req: NextRequest, email: string): Promise<NextResponse | null> {
  const decision = await arcjet.protect(req, { email });
  if (!decision.isDenied()) return null;

  if (decision.reason.isRateLimit()) {
    const reset = decision.reason.resetTime;
    const secs = reset ? Math.max(0, Math.floor((reset.getTime() - Date.now()) / 1000)) : 60;
    const wait = secs > 60 ? `${Math.ceil(secs / 60)} minutes` : `${secs} seconds`;
    return NextResponse.json({ error: `Too many requests. Try again in ${wait}.` }, { status: 429 });
  }
  if (decision.reason.isEmail()) {
    const types = decision.reason.emailTypes;
    const error = types.includes("DISPOSABLE")
      ? "Please use a work or personal email, not a disposable one."
      : "That email address doesn't look right. Check your spelling.";
    return NextResponse.json({ error }, { status: 400 });
  }
  return NextResponse.json({ error: "Request blocked. If this is a mistake, email us directly." }, { status: 403 });
}
