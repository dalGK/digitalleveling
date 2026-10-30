import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const optionalText = (max: number) => z.string().trim().max(max).optional().default("")

const contactSchema = z.object({
  source: optionalText(100),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: optionalText(40),
  company: optionalText(150),
  service: optionalText(150),
  budget: optionalText(100),
  message: optionalText(5000),
  // Campos extra de formularios específicos (consulta personalizada, solicitud de servicio...)
  details: z.record(z.string().max(100), z.string().max(5000)).optional().default({}),
  consent: z.literal(true),
  // Honeypot: debe llegar vacío
  website: optionalText(200),
})

// Límite sencillo en memoria por IP (por instancia): suficiente para frenar envíos repetidos
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function row(label: string, value: string) {
  if (!value) return ""
  return `<tr><td valign="top" style="padding:4px 12px 4px 0;white-space:nowrap;"><b>${escapeHtml(label)}:</b></td><td style="white-space:pre-line;">${escapeHtml(value)}</td></tr>`
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, error: "too_many_requests" }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, error: "invalid_json" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "invalid_data" }, { status: 400 })
  }

  const data = parsed.data

  // Si un bot rellena el honeypot, respondemos OK pero no enviamos nada
  if (data.website) {
    return NextResponse.json({ success: true })
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const subjectName = data.name.replace(/[\r\n]+/g, " ")
  const detailRows = Object.entries(data.details)
    .map(([label, value]) => row(label, value))
    .join("")

  try {
    await transporter.sendMail({
      from: `"Digital Leveling" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      replyTo: data.email,
      subject: `🚀 Nuevo contacto${data.source ? ` (${data.source})` : ""}: ${subjectName}`,
      html: `
        <div style="background:#fff; border-radius:12px; font-family:sans-serif; max-width:560px; margin:auto; border:1px solid #eee; box-shadow:0 4px 16px #0001;">
          <div style="background:#ffd600;padding:20px 40px;border-radius:12px 12px 0 0;text-align:center;">
            <h2 style="margin:0;color:#222">🚀 Nuevo contacto desde la web</h2>
          </div>
          <div style="padding:32px;">
            <p style="margin:0 0 16px 0; color:#222">¡Tienes un nuevo lead! Aquí tienes los datos:</p>
            <table style="width:100%;color:#222;">
              ${row("📍 Formulario", data.source)}
              ${row("👤 Nombre", data.name)}
              ${row("📧 Email", data.email)}
              ${row("📱 Teléfono", data.phone)}
              ${row("🏢 Empresa", data.company)}
              ${row("🔧 Servicio", data.service)}
              ${row("💸 Presupuesto", data.budget)}
              ${detailRows}
              ${row("📝 Mensaje", data.message)}
              ${row("✅ Consentimiento RGPD", `Aceptado el ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}`)}
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
    console.error("Error enviando email de contacto:", error)
    return NextResponse.json({ success: false, error: "send_failed" }, { status: 500 })
  }
}
