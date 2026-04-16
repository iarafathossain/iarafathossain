interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps): string {
  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const currentDate = new Date().toLocaleString();

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height: 1.6; color: #333;">
      <!-- Header -->
      <div style="background-color: #0f172a; color: #fff; padding: 40px 20px; text-align: center; border-bottom: 4px solid #3b82f6;">
        <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 700; letter-spacing: -0.02em;">New Message Received</h1>
        <p style="margin: 0; font-size: 14px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 0.05em;">From your portfolio contact form</p>
      </div>

      <!-- Main Content -->
      <div style="padding: 40px 20px; max-width: 600px; margin: 0 auto;">
        <!-- Sender Info -->
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin-bottom: 32px;">
          <p style="margin: 0 0 16px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">From</p>
          <h2 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 600; color: #1e293b;">${name}</h2>
          <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${email}</a>
        </div>

        <!-- Subject -->
        <div style="margin-bottom: 32px;">
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Subject</p>
          <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #1e293b; border-left: 4px solid #3b82f6; padding-left: 16px;">${subject}</h3>
        </div>

        <!-- Message -->
        <div style="margin-bottom: 32px;">
          <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Message</p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; color: #334155; font-size: 14px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">${escapedMessage}</div>
        </div>

        <!-- CTA -->
        <div style="background-color: #3b82f6; border-radius: 8px; padding: 3px; margin-bottom: 32px;">
          <a href="mailto:${email}" style="display: block; background-color: #3b82f6; color: #fff; text-decoration: none; padding: 16px 24px; border-radius: 6px; font-weight: 600; font-size: 14px; text-align: center;">Reply to ${name}</a>
        </div>

        <!-- Metadata -->
        <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; font-size: 12px; color: #64748b;">
          <p style="margin: 0 0 8px 0;"><strong>Replied by:</strong> Portfolio Contact System</p>
          <p style="margin: 0;"><strong>Timestamp:</strong> ${currentDate}</p>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #f1f5f9; border-top: 1px solid #e2e8f0; padding: 24px 20px; text-align: center; font-size: 12px; color: #64748b;">
        <p style="margin: 0 0 12px 0;">This is an automated email from your portfolio contact form.</p>
        <p style="margin: 0; font-size: 11px; color: #94a3b8;">© 2026 Ia Raf Ath Hossain. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
}
