import supabase from "./superbase";
import { NextResponse } from "next/server";

import DataForm from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export async function handleConfirmation(req) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    console.log("Invalid token");
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }

  const { data: record, error } = await supabase
    .from("pending_demo_request")
    .select("*")
    .eq("token", token)
    .single();

  if (error || !record) {
    console.log("Token not found");
    return NextResponse.json({ error: "Token not found" }, { status: 404 });
  }

  // Insert confirmed record into the "demo_requests" table
  const { error: insertError } = await supabase
    .from("demo_requests")
    .insert([{ name: record.name, email: record.email }]);

  if (insertError) {
    console.error("Error inserting into demo_requests:", insertError);
    return NextResponse.json(
      { error: "Failed to confirm the request" },
      { status: 500 },
    );
  }

  // Delete the record from the "pending_demo_request" table
  await supabase.from("pending_demo_request").delete().eq("token", token);

  // Send email to admin with confirmation
  const mailgun = new Mailgun(DataForm);
  const mg = mailgun.client({
    username: "api",
    key: API_KEY,
  });
  const messageData = {
    from: "Request CMOOS Demo <no-reply@mg.j88moja.tech>",
    to: "ntobekos@j88moja.tech",
    subject: "CMOOS Demo Request",
    text: `Hello Jobe,

        There is a new submission from your CMOOS Demo Request. Here are the details:

        Name: ${record.name}
        Email: ${record.email}
        Time: ${new Date().toLocaleString("en-ZA")},
        `,
    html: `
        <style>
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
          }
          p {
            font-size: 1.125rem;
            color: #4a5568;
          }
        </style>

        <h1 style="font-size: 1.5rem; font-weight: 700;">Hello Jobe</h1>
        <p style="font-size: 1.125rem; color: #4a5568;">There is a new submission from your CMOOS Demo Request. Here are the details:</p>
        <p style="font-size: 1.125rem; color: #4a5568;">Name: ${record.name}</p>
        <p style="font-size: 1.125rem; color: #4a5568;">Email: ${record.email}</p>
        <p style="font-size: 1.125rem; color: #4a5568;">Time: ${new Date().toLocaleString("en-ZA")}</p>
        <p style="font-size: 1.120rem; color: #4a5568;">Thank you for your time.</p>
        `,
  };
  await mg.messages.create(DOMAIN, messageData);

  // Redirect to a confirmation page or homepage with a success message and show a toast notification to the user
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation/?approved=true`,
  );
}
