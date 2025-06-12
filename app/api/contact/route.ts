import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, company, service, budget, message } = body

  // Configura el transporter con tus credenciales SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Digital Leveling" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL, // Tu correo destino
      subject: `🚀 Nuevo proyecto: ${name}`,
      html: `
        <div style="background:#fff; border-radius:12px; font-family:sans-serif; max-width:520px; margin:auto; border:1px solid #eee; box-shadow:0 4px 16px #0001;">
          <div style="background:#ffd600;padding:20px 40px;border-radius:12px 12px 0 0;text-align:center;">
            <h2 style="margin:0;color:#222">🚀 Nuevo proyecto desde la web</h2>
          </div>
          <div style="padding:32px;">
            <p style="margin:0 0 16px 0; color:#222">¡Tienes un nuevo lead! Aquí tienes los datos:</p>
            <table style="width:100%;color:#222;">
              <tr><td><b>👤 Nombre:</b></td><td>${name}</td></tr>
              <tr><td><b>📧 Email:</b></td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td><b>📱 Teléfono:</b></td><td>${phone}</td></tr>
              <tr><td><b>🏢 Empresa:</b></td><td>${company}</td></tr>
              <tr><td><b>🔧 Servicio:</b></td><td>${service}</td></tr>
              <tr><td><b>💸 Presupuesto:</b></td><td>${budget}</td></tr>
              <tr>
                <td valign="top"><b>📝 Mensaje:</b></td>
                <td style="white-space:pre-line;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background:#222; color:#fff; text-align:center; font-size:13px; padding:18px 8px; border-radius:0 0 12px 12px;">
            <span>Enviado desde <a href="https://digitalleveling.com" style="color:#ffd600">digitalleveling.com</a></span>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: error }, { status: 500 })
  }
}
