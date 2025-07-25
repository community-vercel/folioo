import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message, organization = 'Not provided' } = await request.json();

    // Server-side validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Name, email, and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return new Response(JSON.stringify({ message: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 100);
    const sanitizedPhone = phone ? phone.trim().slice(0, 20) : 'Not provided';
    const sanitizedOrganization = organization.trim().slice(0, 100);
    const sanitizedMessage = message.trim().slice(0, 1000);

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: sanitizedEmail,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      text: `
        Name: ${sanitizedName}
        Email: ${sanitizedEmail}
        Phone: ${sanitizedPhone}
        Organization: ${sanitizedOrganization}
        Message: ${sanitizedMessage}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone}</p>
        <p><strong>Organization:</strong> ${sanitizedOrganization}</p>
        <p><strong>Message:</strong> ${sanitizedMessage}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}