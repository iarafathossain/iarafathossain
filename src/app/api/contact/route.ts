import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json();

    if (!name || !email || !message || !subject) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!email.includes("@")) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Arafat Hossain <arafat24official@gmail.com>",
      to: [process.env.PERSONAL_RECEIVER_EMAIL || "arafat24official@gmail.com"],
      replyTo: email,
      subject: `Portfolio Contact Form: ${subject}`,
      html: EmailTemplate({
        name,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true });
  } catch (catchError) {
    console.error("Server Error:", catchError);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
