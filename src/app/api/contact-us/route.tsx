import { NextRequest, NextResponse } from "next/server";
import aj from "../../lib/aj";
import DataForm from "form-data";
import Mailgun from "mailgun.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email")!;

  const decision = await aj.protect(req, { email });
  if (decision.isDenied()) {
    if (decision.reason.isShield()) {
      console.log("Suspicious action detected!");
      return NextResponse.json(
        { error: "Suspicious action detected!" },
        { status: 403 },
      );
    }
    if (decision.reason.isBot()) {
      console.log("Looks like you might be a bot!");
      return NextResponse.json(
        { error: "Looks like you might be a bot!" },
        { status: 403 },
      );
    }
  }
  return NextResponse.json({ data: "Hello World!" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  const decision = await aj.protect(request, { email });
  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      const resetTime = decision.reason.resetTime;
      if (!resetTime) {
        return NextResponse.json(
          { error: "Too many requests. Try again later." },
          { status: 429 },
        );
      }

      const remainingTime = Math.max(
        0,
        Math.floor((resetTime.getTime() - Date.now()) / 1000),
      );
      const timeUnit = remainingTime > 60 ? "minutes" : "seconds";
      const timeValue =
        timeUnit === "minutes" ? Math.ceil(remainingTime / 60) : remainingTime;

      return NextResponse.json(
        { error: `Too many requests. Try again in ${timeValue} ${timeUnit}.` },
        { status: 429 },
      );
    }

    if (decision.reason.isEmail()) {
      const errorType = decision.reason.emailTypes;
      if (errorType.includes("INVALID")) {
        return NextResponse.json(
          { error: "Invalid email format. Check your spelling." },
          { status: 400 },
        );
      } else if (errorType.includes("DISPOSABLE")) {
        return NextResponse.json(
          { error: "Disposable email address. Check your spelling." },
          { status: 400 },
        );
      } else if (errorType.includes("NO_MX_RECORDS")) {
        return NextResponse.json(
          { error: "Email without an MX record. Check your spelling." },
          { status: 400 },
        );
      } else {
        return NextResponse.json(
          { error: "Invalid email. Check your spelling." },
          { status: 400 },
        );
      }
    }
  }

  const checkEmailExists = async (email: string) => {
    const contact = await prisma.contactUsList.findUnique({
      where: { email },
    });
    return !!contact;
  };

  const handleFormSubmission = async (
    name: string,
    email: string,
    message: string,
  ) => {
    const emailExists = await checkEmailExists(email);

    if (emailExists) {
      return NextResponse.json(
        {
          error:
            "Contact email already received. Expect a reply within 24 hours.",
        },
        { status: 500 },
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (message.length > 300) {
      return NextResponse.json(
        {
          error:
            "Message too long. Max length is 300 characters. Consider sending email instead",
        },
        { status: 400 },
      );
    }

    try {
      await prisma.contactUsList.create({
        data: { name, email, message },
      });
    } catch (error) {
      console.error("Error inserting into contact_us_list:", error);
      return NextResponse.json(
        { error: "Failed to submit the form" },
        { status: 500 },
      );
    }

    // Send email to admin
    const mailgun = new Mailgun(DataForm);
    const mg = mailgun.client({
      username: "api",
      key: API_KEY,
    });
    const data = {
      from: "Contact Form <no-reply@mg.j88moja.tech>",
      to: "ntobekos@j88moja.tech",
      subject: "Contact Form Submission",
      text: `Hello Jobe,

You have a new contact form submission. Here are the details:
Name: ${name}
Email: ${email}
Message: ${message}
Date: ${new Date().toLocaleString("en-ZA")}

Thank you for your time.
`,
      html: `
      <h1 style="font-size: 1.5rem; font-weight: 700;">Hello Jobe</h1>
      <p style="font-size: 1rem; font-weight: 400;">You have a new contact form submission. Here are the details:</p>
      <ul style="font-size: 1rem; font-weight: 400;">
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Message: ${message}</li>
        <li>Date: ${new Date().toLocaleString("en-ZA")}</li>
      </ul>
      <p>Thank you for your time.</p>
    `,
    };
    await mg.messages.create(DOMAIN, data);

    return NextResponse.json({ data: "Success" }, { status: 200 });
  };

  return await handleFormSubmission(name, email, message);
}
