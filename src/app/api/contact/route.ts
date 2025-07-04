// app/api/contact/route.ts
import {type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const contactSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string(),
  message: z.string()
})

export async function POST(request: NextRequest) {
  
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Validation échouée' }, { status: 400 })
    }

    const { firstname, lastname, email, phone, company, projectType, message } = result.data
    const fullName = `${firstname} ${lastname}`

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
     /* host: "smtp.gmail.com",
      port: 465,
      secure: true,
      */
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Contenu HTML de l’email
    const htmlMessage = `
      <h2>Nouveau message de ${fullName}</h2>
      <p><strong>Email :</strong> ${email}</p>
      ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Organisation :</strong> ${company}</p>` : ''}
      <p><strong>Type de projet :</strong> ${projectType}</p>
      <p><strong>Détails :</strong><br/>${message}</p>
    `

    const mailOptions: Mail.Options = {
      from: `"Contact ēdev" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Message de ${fullName}`,
      text: message,
      html: htmlMessage
    };

    const sendMailPromise = () => {
      new Promise<string>((resolve, reject) => {
        transporter.sendMail(mailOptions, function(err){
          if(!err){
            resolve('Email sent');
          }else {
            reject(err.message)
          }
        });
      });
    }

    try{
      await sendMailPromise();
      return NextResponse.json({message : 'Email sent'})
    }
    catch (err){
      return NextResponse.json({error : err}, {status: 500})
    }

}
