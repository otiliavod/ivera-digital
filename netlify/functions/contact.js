const nodemailer = require("nodemailer");

function isEmail(v = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Missing required fields." }),
      };
    }

    if (!isEmail(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Invalid email address." }),
      };
    }

    // Transport (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true", // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name}${company ? ` (${company})` : ""}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company || "-"}\n\n` +
        `Message:\n${message}\n`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: "Server error." }),
    };
  }
};
