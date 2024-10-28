// app/api/subscribe/route.js
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

// Configure the transporter with environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "", 10) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const POST = async (req: Request) => {
  try {
    const { email } = await req.json();

    // Validate the email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create a new subscriber
    // const subscriber = {
    //   id: uuidv4(),
    //   email,
    //   subscribedAt: new Date(),
    // };

    // Save the subscriber to the database (replace with actual DB code)
    // Example: await database.saveSubscriber(subscriber);

    // Send a welcome email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Welcome to our newsletter!",
      text: "Thanks for subscribing!",
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
