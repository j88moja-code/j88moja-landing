import prisma from "./prisma";
import { NextResponse } from "next/server";
import DataForm from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function handleConfirmation(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }

  try {
    const record = await prisma.pendingDemoRequest.findUnique({
      where: { token },
    });

    if (!record) {
      return NextResponse.json({ error: "Token not found" }, { status: 404 });
    }

    await prisma.demoRequest.create({
      data: { name: record.name, email: record.email },
    });

    await prisma.pendingDemoRequest.delete({ where: { token } });

    const mailgun = new Mailgun(DataForm);
    const mg = mailgun.client({ username: "api", key: API_KEY });

    await mg.messages.create(DOMAIN, {
      from: "Request CMOOS Demo <no-reply@mg.j88moja.tech>",
      to: "ntobekos@j88moja.tech",
      subject: "CMOOS Demo Request",
      text: `New demo request:\nName: ${record.name}\nEmail: ${record.email}\nTime: ${new Date().toLocaleString("en-ZA")}`,
      html: `<h1>Hello Jobe</h1><p>Name: ${record.name}</p><p>Email: ${record.email}</p><p>Time: ${new Date().toLocaleString("en-ZA")}</p>`,
    });

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation/?approved=true`,
    );
  } catch (err) {
    console.error("Error handling confirmation:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
