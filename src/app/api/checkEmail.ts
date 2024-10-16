"use server";

import prisma from "@/app/api/lib/db";

export async function checkEmail(email: string) {
  try {
    // Check if the email exists in J88MojaContactList
    const existingContact = await prisma.j88MojaContactList.findUnique({
      where: {
        email: email,
      },
    });

    // Check if the email exists in RequestCMOOSDemo
    const existingRequest = await prisma.requestCMOOSDemo.findUnique({
      where: {
        email: email,
      },
    });

    // If email exists in either model, return success as false
    if (existingContact || existingRequest) {
      return { success: false, message: "Email already exists" };
    }

    // If email is not found, return success as true
    return { success: true, message: "Email is available" };
  } catch (error) {
    console.error("Error checking email:", error);
    return { success: false, message: "Internal server error" };
  }
}
