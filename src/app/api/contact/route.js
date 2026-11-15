import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, category, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { message: "Please complete your name, email and project description." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_TO_EMAIL || "kennymichael322@gmail.com";

    if (!gmailUser || !gmailAppPassword) {
      return Response.json(
        {
          message:
            "The contact form email service is awaiting Gmail setup. Please contact me directly by WhatsApp or email.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword.replace(/\s/g, ""),
      },
    });

    await transporter.sendMail({
      from: `DE_ANIMATOR Website <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New DE_ANIMATOR inquiry — ${category || "Project"}`,
      text: `Name: ${name}
Email: ${email}
Category: ${category || "Not specified"}
Budget: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}

Project details:
${message}`,
    });

    return Response.json({
      message: "Thanks — your project inquiry has been sent. I’ll be in touch.",
    });
  } catch (error) {
    console.error("DE_ANIMATOR contact form email error:", error);
    return Response.json(
      { message: "Email could not be sent right now. Please try again later." },
      { status: 502 }
    );
  }
}
