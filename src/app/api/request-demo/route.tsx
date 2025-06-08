import { NextRequest, NextResponse } from "next/server";
import arcjet from "../../lib/arcjet";
import DataForm from "form-data";
import Mailgun from "mailgun.js";
import prisma from "../../lib/prisma";
import { v4 as uuidv4 } from "uuid";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email")!;

  const decision = await arcjet.protect(req, { email });
  if (decision.isDenied()) {
    if (decision.reason.isShield()) {
      return NextResponse.json({ error: "Suspicious action detected!" }, { status: 403 });
    }
    if (decision.reason.isBot()) {
      return NextResponse.json({ error: "Looks like you might be a bot!" }, { status: 403 });
    }
  }

  return NextResponse.json({ data: "Hello World!" });
}

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  const decision = await arcjet.protect(req, { email });
  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      const resetTime = decision.reason.resetTime;
      const remaining = resetTime ? Math.floor((resetTime.getTime() - Date.now()) / 1000) : 60;
      const unit = remaining > 60 ? "minutes" : "seconds";
      const time = unit === "minutes" ? Math.ceil(remaining / 60) : remaining;

      return NextResponse.json(
        { error: `Too many requests. Try again in ${time} ${unit}.` },
        { status: 429 }
      );
    }

    if (decision.reason.isEmail()) {
      const types = decision.reason.emailTypes;
      if (types.includes("INVALID")) {
        return NextResponse.json({ error: "Invalid email format. Check your spelling." }, { status: 400 });
      }
      if (types.includes("DISPOSABLE")) {
        return NextResponse.json({ error: "Disposable email address. Check your spelling." }, { status: 400 });
      }
      if (types.includes("NO_MX_RECORDS")) {
        return NextResponse.json({ error: "Email without an MX record. Check your spelling." }, { status: 400 });
      }

      return NextResponse.json({ error: "Invalid email. Check your spelling." }, { status: 400 });
    }
  }

  try {
    // Check if email already exists in confirmed requests
    const existing = await prisma.demoRequest.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Email already exists. Please try again." }, { status: 400 });
    }

    const token = uuidv4();

    // Create pending request
    await prisma.pendingDemoRequest.create({
      data: {
        name,
        email,
        token,
      },
    });

    // Send confirmation email
    const mailgun = new Mailgun(DataForm);
    const mg = mailgun.client({ username: "api", key: API_KEY });

    const confirmationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm?token=${token}`;

    await mg.messages.create(DOMAIN, {
      from: "Request CMOOS Demo <no-reply@mg.j88moja.tech>",
      to: email,
      subject: "Confirm CMOOS Demo Request",
      text: `
Hello ${name},

Thank you for your interest in CMOOS. Please confirm your request by clicking on the link below:

${confirmationUrl}

Thanks,
J88Moja Systems`,
      html: `
<h1>Hello ${name}</h1>
<p>Thank you for your interest in CMOOS. Please confirm your request by clicking on the link below:</p>
<p><a href="${confirmationUrl}" style="background-color:#38b2ac;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;">Confirm Request</a></p>
<p>Thanks,<br/>J88Moja Systems</p>`,
    });

    return NextResponse.json({ data: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Request submission error:", error);
    return NextResponse.json({ error: "Server error. Try again later." }, { status: 500 });
  }
}
