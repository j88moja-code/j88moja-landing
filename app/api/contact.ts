import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // Implement your form submission logic here (e.g., send an email, save to a database)
      console.log("Form data received:", { name, email, message });

      // Respond with success
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing form data:", error);
      res.status(500).json({ message: "Error sending message" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
