// app/api/contact/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

// Validation schema
const contactSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string(),
  message: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: 'Validation échouée' }, { status: 400 });
  }

  const { firstname, lastname, email, phone, company, projectType, message } = result.data;
  const fullName = `${firstname} ${lastname}`;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Optional: Verify transporter configuration
  try {
    await transporter.verify();
  } catch (err) {
    return NextResponse.json(
      { error: 'Erreur de configuration du serveur mail', details: err },
      { status: 500 }
    );
  }

  // Build email content
  const htmlMessage = `
    <h2>Nouveau message de ${fullName}</h2>
    <p><strong>Email :</strong> ${email}</p>
    ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
    ${company ? `<p><strong>Organisation :</strong> ${company}</p>` : ''}
    <p><strong>Type de projet :</strong> ${projectType}</p>
    <p><strong>Détails :</strong><br/>${message}</p>
  `;

  const mailOptions: Mail.Options = {
    from: `"Contact ēdev" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Message de ${fullName}`,
    text: message,
    html: htmlMessage,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email envoyé avec succès' });
  } catch (err) {
    return NextResponse.json({ error: 'Échec de l’envoi de l’email', details: err }, { status: 500 });
  }
}
