/**
 * ZeptoMail Integration
 *
 * Handles newsletter subscriptions via ZeptoMail (Zoho).
 * Configure your API key in environment variables:
 *   ZEPTO_API_KEY=<your-key>
 *   ZEPTO_BOUNCE_ADDRESS=<bounce-address>
 *   ZEPTO_FROM_EMAIL=<from-email>
 *   ZEPTO_FROM_NAME=<from-name>
 */

const ZEPTO_API_URL = "https://api.zeptomail.com/v1.1";

interface ZeptoSendOptions {
  to: { email: string; name?: string }[];
  subject: string;
  htmlBody: string;
  textBody?: string;
}

/**
 * Send an email via ZeptoMail API
 */
export async function sendEmail(options: ZeptoSendOptions) {
  const apiKey = process.env.ZEPTO_API_KEY;
  if (!apiKey) throw new Error("ZEPTO_API_KEY not configured");

  const fromEmail = process.env.ZEPTO_FROM_EMAIL || "noreply@dailynaijatrivia.com";
  const fromName = process.env.ZEPTO_FROM_NAME || "Daily Naija Trivia";
  const bounceAddress = process.env.ZEPTO_BOUNCE_ADDRESS || `bounce@${fromEmail.split("@")[1]}`;

  const payload = {
    bounce_address: bounceAddress,
    from: { address: fromEmail, name: fromName },
    to: options.to.map((recipient) => ({
      email_address: {
        address: recipient.email,
        name: recipient.name || "",
      },
    })),
    subject: options.subject,
    htmlbody: options.htmlBody,
    textbody: options.textBody || "",
  };

  const response = await fetch(`${ZEPTO_API_URL}/email`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Zoho-encrtoken ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(`ZeptoMail error: ${response.status} ${JSON.stringify(error)}`);
  }

  return response.json();
}

/**
 * Send a welcome email to a new newsletter subscriber
 */
export async function sendWelcomeEmail(email: string, name?: string) {
  return sendEmail({
    to: [{ email, name }],
    subject: "Welcome to Daily Naija Trivia! 🇳🇬",
    htmlBody: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #0A0A0B; color: #F5F5F7;">
        <h1 style="font-size: 28px; margin-bottom: 16px; color: #14B85C;">Welcome to Daily Naija Trivia!</h1>
        <p style="font-size: 16px; line-height: 1.6; color: #A1A1AA;">
          You've joined the movement to celebrate and preserve Nigerian culture through fun, competitive trivia.
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #A1A1AA;">
          We'll keep you posted on app updates, new trivia packs, and exclusive content.
        </p>
        <div style="margin-top: 32px; padding: 20px; background: #111113; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
          <p style="font-size: 14px; color: #D4A017; margin: 0;">Stay tuned — something amazing is coming! 🎉</p>
        </div>
        <p style="margin-top: 32px; font-size: 12px; color: #71717A;">
          © ${new Date().getFullYear()} Daily Naija Trivia. All rights reserved.
        </p>
      </div>
    `,
    textBody: `Welcome to Daily Naija Trivia! You've joined the movement to celebrate Nigerian culture through fun, competitive trivia. Stay tuned!`,
  });
}
