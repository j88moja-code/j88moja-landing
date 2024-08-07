"use server";

import prisma from "./lib/db";
import DataForm from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
export async function postContactUsData(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const position = formData.get("position");
  const message = formData.get("message");
  const mailgun = new Mailgun(DataForm);
  const mg = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: "Contact Form <no-reply@mg.j88moja.tech>",
    to: "ntobekos@j88moja.tech",
    subject: "Contact Form Submission",
    text: `Hello,

        You have a new contact form submission. Here are the details:

        Name: ${name}
        Email: ${email}
        Position: ${position}
        Message: ${message}`,
    html: `
      <p>Hello There,</p>
      <p>You have a new contact form submission. Here are the details:</p>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Position: ${position}</li>
        <li>Message: ${message}</li>
      </ul>
      <p>Thank you for your time.</p>
      <p>The Contact Form Team</p>
    `,
  };

  if (!name || !email || !position || !message) {
    throw new Error("Missing required field");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
    throw new Error("Invalid email address");
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof position !== "string" ||
    typeof message !== "string"
  ) {
    throw new Error("Invalid data type");
  }

  if (
    name.length === 0 ||
    email.length === 0 ||
    position.length === 0 ||
    message.length === 0
  ) {
    throw new Error("Missing required field");
  }

  if (name.length > 40) {
    throw new Error("Full Name is too long");
  }

  if (message.length > 288) {
    throw new Error("Message is too long");
  }

  if (position.length > 32) {
    throw new Error("Position is too long");
  }

  try {
    await prisma.contactUs.create({
      data: {
        fullName: name.toString(),
        email: email.toString(),
        position: position.toString(),
        message: message.toString(),
      },
    });

    await mg.messages.create(DOMAIN, messageData);

    return { success: true };
  } catch (error) {
    console.log(error);

    return { success: false };
  }
}

export async function postCMOOSMailingListData(formData: FormData) {
  const email = formData.get("email");
  const mailgun = new Mailgun(DataForm);
  const mg = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: "CMOOS Mailing List <no-reply@mg.j88moja.tech>",
    to: "ntobekos@j88moja.tech",
    subject: "CMOOS Mailing List Submission",
    text: `Hello There,

        There is a new submission from your CMOOS Mailing List. Here are the details:

        Email: ${email},
        Time: ${new Date().toLocaleString("en-ZA")},
        `,
    html: `
      <p>Hello There,</p>
      <p>There is a new submission from your CMOOS Mailing List. Here are the details:</p>
      <ul>
        <li>Email: ${email}</li>
        <li>Time: ${new Date().toLocaleString("en-ZA")}</li>
      </ul>
      <p>Thank you for your time.</p>
      <p>The CMOOS Mailing List Team</p>
    `,
  };

  if (!email) {
    throw new Error("Missing required field");
  }

  if (typeof email !== "string") {
    throw new Error("Invalid data type");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
    throw new Error("Invalid email address");
  }

  if (email.length === 0) {
    throw new Error("Missing required field");
  }

  if (email.length > 40) {
    throw new Error("Email is too long");
  }

  try {
    await prisma.cMOOSMailingList.create({
      data: {
        email: email.toString(),
      },
    });

    await mg.messages.create(DOMAIN, messageData);

    return { success: true };
  } catch (error) {
    console.log(error);

    return { success: false };
  }
}
