// functions/contact.js
import nodemailer from 'nodemailer'

export async function handler(event) {
  const { name, email, message } = JSON.parse(event.body)

  // Configura tu cuenta SMTP gratuita (por ejemplo Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,      // tu correo Gmail
      pass: process.env.SMTP_PASS       // tu app password de Gmail
    }
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: 'Mensaje desde portafolio',
      text: message
    })
    return { statusCode: 200, body: 'Mensaje enviado' }
  } catch (err) {
    return { statusCode: 500, body: 'Error enviando: ' + err.message }
  }
}
