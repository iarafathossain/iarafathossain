import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, subject } = await request.json();
  console.log("Received contact form data:", { name, email, subject, message });

  const { error } = await resend.emails.send({
    from: "Iarafat Hossain <noreply@iarafathossain.me>",
    to: ["arafat24official@gmail.com"],
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
    return Response.json({ error }, { status: 400 });
  }

  return Response.json({ success: true });
}
