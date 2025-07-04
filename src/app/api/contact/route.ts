// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// 🧪 Schéma de validation des données avec Zod
const contactSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string(),
  message: z.string()
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Validation échouée' }, { status: 400 })
    }

    const { firstname, lastname, email, phone, company, projectType, message } = result.data
    const fullName = `${firstname} ${lastname}`

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    //  Vérifie la configuration SMTP (optionnel mais utile en dev)
    await transporter.verify()

    // Contenu HTML de l’email
    const htmlMessage = `
      <h2>Nouveau message de ${fullName}</h2>
      <p><strong>Email :</strong> ${email}</p>
      ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Organisation :</strong> ${company}</p>` : ''}
      <p><strong>Type de projet :</strong> ${projectType}</p>
      <p><strong>Détails :</strong><br/>${message}</p>
    `

    // Envoi de l’email
    await transporter.sendMail({
      from: `"Contact ēdev" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Message de ${fullName}`,
      text: message,
      html: htmlMessage
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Erreur dans /api/contact:', err)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}
