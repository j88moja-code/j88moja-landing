import { NextRequest, NextResponse } from "next/server";
import arcjet from "../../lib/arcjet";
import DataForm from "form-data";
import Mailgun from "mailgun.js";
import supabase from "../../lib/superbase";
import { v4 as uuidv4 } from "uuid";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email")!;

  const decision = await arcjet.protect(req, { email });
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

export async function POST(req: NextRequest) {
  const data = await req.json();

  const email = data.email;
  const name = data.name;

  const decision = await arcjet.protect(req, { email });
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
    const { data, error } = await supabase
      .from("demo_requests")
      .select("*")
      .eq("email", email);

    if (error) {
      console.log("Error checking email:" + error);
      return false;
    }

    return data.length > 0;
  };

  const handleFormSubmission = async (name: string, email: string) => {
    const emailExists = await checkEmailExists(email);

    if (emailExists) {
      // console.log("Email already exists. Please try again.");
      return NextResponse.json(
        { error: "Email already exists. Please try again." },
        { status: 500 },
      );
    } else {
      const token = uuidv4();

      const { error } = await supabase
        .from("pending_demo_request")
        .insert([{ name, email, token }]);

      if (error) {
        // console.log("Database error:" + error.message);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
      }

      // Send email
      const mailgun = new Mailgun(DataForm);
      const mg = mailgun.client({
        username: "api",
        key: API_KEY,
      });
      const messageData = {
        from: "Request CMOOS Demo <no-reply@mg.j88moja.tech>",
        to: email,
        subject: "Confirm CMOOS Demo Request",
        text: `
            Hello ${name},
            Thank you for your interest in CMOOS. Please confirm your request by clicking on the link below:
            ${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm?token=${token}
            Thanks,
            J88Moja Systems`,
        html: `
            <h1 style="font-size: 1.5rem; font-weight: 700;">Hello ${name}</h1>
            <p style="font-size: 1.125rem; color: #4a5568;">Thank you for your interest in CMOOS. Please confirm your request by clicking on the link below:</p>
            <p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm?token=${token}" style="display: block; width: 100%; font-size: 16px; background-color: #38b2ac; color: #ffffff; padding: 0.5rem; border-radius: 0.25rem; text-align: center; text-decoration: none; transition: background-color 0.2s;">Confirm Request</a></p>
            <p style="font-size: 1.120rem; color: #4a5568;">Thanks, </p>
            <p style="font-size: 1.120rem; color: #4a5568;">J88Moja Systems</p>
      `,
      };

      await mg.messages.create(DOMAIN, messageData);
      // await sendRequestADemoEmail(name, email, token);
      return NextResponse.json({ data: "Success" }, { status: 200 });
    }
  };

  return await handleFormSubmission(name, email);
}
