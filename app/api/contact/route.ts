import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'bishwa@techunterhub.com',
        pass: 'July2002@27',
      },
    });

    const mailOptionsToSelf = {
      from: 'bishwa@techunterhub.com ',
      to: 'bishwa@techunterhub.com', 
      subject: `Contact Form Submission: ${subject}`,
      text: `Message from ${email}:\n\n${message}`,
      html: `<p>Message from <strong>${email}</strong>:</p><p>${message}</p>`,
  };

  const mailOptionsToUser = {
      from: 'bishwa@techunterhub.com',
      to: email,
      subject: 'Thank you for contacting us!',
      text: `Dear ${email},\n\nThank you for reaching out! We will get back to you soon.\n\nBest regards,\nTravelers Himalaya`,
      html: `<p>Dear <strong>${email}</strong>,</p><p>Thank you for reaching out! We will get back to you soon.</p><p>Best regards,<br/>Travelers Himalaya</p>`,
  };

  await Promise.all([
    transporter.sendMail(mailOptionsToSelf),
    transporter.sendMail(mailOptionsToUser),
  ])
    return new Response(
      JSON.stringify({
        error: false,
        emailSent: true,
        message: 'Email sent successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: true,
        emailSent: false,
        message:'Email sending failed'+ error,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
