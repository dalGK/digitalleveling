"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { availableServices, contact, whatsappUrl } from "@/lib/site"
import { submitContact } from "@/lib/submit-contact"
import ConsentFields, { PrivacyNotice } from "@/components/forms/ConsentFields"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^\+?[\d\s().-]{9,20}$/

type Field = "name" | "contactInfo" | "message" | "consent"
type Errors = Partial<Record<Field, string>>

const emptyForm = { name: "", contactInfo: "", business: "", service: "", message: "" }

interface ContactFormProps {
  // Identifica el formulario en el email y en la analítica (p. ej. "Home" o "Servicio: SEO")
  source: string
  defaultService?: string
}

function validate(data: typeof emptyForm, consent: boolean): Errors {
  const errors: Errors = {}
  if (!data.name.trim()) errors.name = "Dinos tu nombre."
  const info = data.contactInfo.trim()
  if (!info) errors.contactInfo = "Necesitamos un email o un teléfono para responderte."
  else if (info.includes("@") ? !EMAIL_RE.test(info) : !PHONE_RE.test(info))
    errors.contactInfo = "Revisa el email o el teléfono: parece incompleto."
  if (data.message.trim().length < 10) errors.message = "Cuéntanos en una o dos frases qué necesitas."
  if (!consent) errors.consent = "Marca la casilla para que podamos responderte."
  return errors
}

const inputClass =
  "w-full px-4 py-3 bg-black/50 border rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder-gray-400"

export default function ContactForm({ source, defaultService = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({ ...emptyForm, service: defaultService })
  const [errors, setErrors] = useState<Errors>({})
  const [consent, setConsent] = useState(false)
  // Honeypot anti-spam: campo oculto que solo rellenan los bots
  const [website, setWebsite] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name as Field]) setErrors({ ...errors, [name]: undefined })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(formData, consent)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }

    setIsSubmitting(true)
    const info = formData.contactInfo.trim()
    const ok = await submitContact({
      source,
      name: formData.name,
      email: info.includes("@") ? info : "",
      phone: info.includes("@") ? "" : info,
      business: formData.business,
      service: formData.service,
      message: formData.message,
      consent,
      website,
    })
    if (ok) {
      setSubmitStatus("success")
      setFormData({ ...emptyForm, service: defaultService })
      setConsent(false)
    } else {
      setSubmitStatus("error")
    }
    setIsSubmitting(false)
  }

  // Si falla el envío, el visitante puede mandar lo mismo por WhatsApp sin volver a escribirlo
  const fallbackUrl = whatsappUrl(
    `Hola, soy ${formData.name}. ${formData.service ? `Me interesa: ${formData.service}. ` : ""}${formData.message}`,
  )

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-2 text-sm text-red-400">
        {errors[field]}
      </p>
    ) : null

  const borderFor = (field: Field) => (errors[field] ? "border-red-400" : "border-gray-700")

  if (submitStatus === "success") {
    return (
      <div role="status" className="text-center p-8 bg-green-400/10 border border-green-400/30 rounded-2xl">
        <p className="text-2xl mb-3" aria-hidden="true">
          ✅
        </p>
        <p className="text-green-400 font-semibold text-lg mb-2">Hemos recibido tu solicitud</p>
        <p className="text-gray-300">Te respondemos en menos de 24 horas laborables. Gracias por contar con nosotros.</p>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-5 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`${inputClass} ${borderFor("name")}`}
              placeholder="Tu nombre"
            />
            {fieldError("name")}
          </div>

          <div>
            <label htmlFor="contactInfo" className="block text-sm font-medium mb-2">
              Email o teléfono *
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              autoComplete="email"
              value={formData.contactInfo}
              onChange={handleChange}
              aria-invalid={Boolean(errors.contactInfo)}
              aria-describedby={errors.contactInfo ? "contactInfo-error" : undefined}
              className={`${inputClass} ${borderFor("contactInfo")}`}
              placeholder="tu@email.com o 600 000 000"
            />
            {fieldError("contactInfo")}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="business" className="block text-sm font-medium mb-2">
              Tipo de negocio
            </label>
            <input
              type="text"
              id="business"
              name="business"
              autoComplete="organization"
              value={formData.business}
              onChange={handleChange}
              className={`${inputClass} border-gray-700`}
              placeholder="Clínica, restaurante, tienda…"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              ¿Qué te interesa?
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${inputClass} border-gray-700`}
            >
              <option value="">Aún no lo sé</option>
              {availableServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Cuéntanos brevemente tu proyecto *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClass} ${borderFor("message")} resize-none`}
            placeholder="Qué necesitas y, si lo tienes, para cuándo."
          />
          {fieldError("message")}
        </div>

        <div>
          <ConsentFields
            consent={consent}
            onConsentChange={(value) => {
              setConsent(value)
              if (value) setErrors({ ...errors, consent: undefined })
            }}
            website={website}
            onWebsiteChange={setWebsite}
          />
          {fieldError("consent")}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? "Enviando…" : "Solicitar diagnóstico gratuito"}
        </motion.button>

        {submitStatus === "error" && (
          <div role="alert" className="text-center p-4 bg-red-400/10 border border-red-400/30 rounded-xl">
            <p className="text-red-400 font-semibold mb-2">No hemos podido enviar tu solicitud.</p>
            <p className="text-gray-300 text-sm">
              Vuelve a intentarlo, o{" "}
              <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">
                envíanosla por WhatsApp
              </a>{" "}
              o a{" "}
              <a href={`mailto:${contact.email}`} className="text-yellow-400 underline">
                {contact.email}
              </a>
              .
            </p>
          </div>
        )}
      </form>

      <PrivacyNotice />
    </>
  )
}
