import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    /**
     * ZeptoMail integration
     *
     * Uncomment the lines below once you've configured your
     * ZEPTO_API_KEY in .env.local:
     *
     * import { sendWelcomeEmail } from "@/lib/zepto";
     * await sendWelcomeEmail(email);
     */

    // For now, just log the subscription
    console.log(`[Newsletter] New subscriber: ${email}`);

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Newsletter] Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
