"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react"
import { contact, whatsappUrl } from "@/lib/site"
import ContactForm from "@/components/forms/ContactForm"

// Lo que ocurre después de escribirnos: compromisos verificables en lugar de cifras sin respaldo
const nextSteps = [
  { title: "Te respondemos", description: "En menos de 24 horas laborables, por el medio que prefieras." },
  { title: "Diagnóstico gratuito", description: "Una llamada para entender tu negocio y qué te conviene de verdad." },
  { title: "Propuesta clara", description: "Por escrito, con alcance, plazos y presupuesto. Sin compromiso." },
]

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: contact.phoneDisplay,
      description: "Escríbenos directamente",
      action: whatsappUrl(),
    },
    {
      icon: Mail,
      title: "Email",
      value: contact.email,
      description: "Respuesta en 24 horas laborables",
      action: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: contact.phoneDisplay,
      description: contact.hours,
      action: `tel:${contact.phoneE164}`,
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: contact.addressDisplay,
      description: "Trabajamos en remoto con toda España",
      action: `https://maps.google.com/?q=${encodeURIComponent(`${contact.postalCode} ${contact.city}`)}`,
    },
  ]

  return (
    <section id="contact" data-track="contact" className="section-padding bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            📞 Contacto
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Solicita tu <span className="gradient-text">diagnóstico gratuito</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cuéntanos qué necesitas en un par de frases. Te diremos qué haríamos en tu caso y cuánto costaría, sin
            compromiso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <div className="glass-effect rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Cuéntanos sobre tu proyecto</h3>
              <ContactForm source="Formulario de contacto (home)" />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <div className="glass-effect rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Qué pasa después</h3>
              <ol className="space-y-5">
                {nextSteps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <h3 className="text-xl font-bold mb-4">¿Prefieres otro canal?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method) => {
                const IconComponent = method.icon
                return (
                  <a
                    key={method.title}
                    href={method.action}
                    target={method.action.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-effect rounded-2xl hover:border-yellow-400/40 border border-transparent transition-colors group"
                  >
                    <div className="bg-yellow-400 p-3 rounded-xl shrink-0">
                      <IconComponent aria-hidden="true" className="text-black w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold group-hover:text-yellow-400 transition-colors">{method.title}</h4>
                      <p className="text-gray-300 text-sm break-words">{method.value}</p>
                      <p className="text-gray-400 text-xs">{method.description}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
