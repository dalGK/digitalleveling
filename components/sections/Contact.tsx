"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          phone:   formData.phone,
          company: formData.company,
          service: formData.service,
          budget:  formData.budget,
          message: formData.message,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "leveling.digi@gmail.com",
      description: "Respuesta en 24 horas",
      action: "mailto:leveling.digi@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 614 473 197",
      description: "Lun - Vie, 9:00 - 18:00",
      action: "tel:+34614473197",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+34 614 473 197",
      description: "Respuesta inmediata",
      action: "https://wa.me/+34614473197",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Madrid, España",
      description: "General ricardos 28025",
      action: "https://maps.google.com/?q=Madrid+España",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
              📞 Contacto
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ¿Tienes una idea? ¿Necesitas ayuda con tu presencia digital? Estamos aquí para convertir tu visión en
            realidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Múltiples formas de contactarnos</h3>

            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <motion.a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-6 p-6 glass-effect rounded-2xl card-hover group"
                  >
                    <div className="bg-yellow-400 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-black w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1 group-hover:text-yellow-400 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-gray-300 font-medium">{method.value}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                    <div className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                  </motion.a>
                )
              })}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h4 className="text-xl font-bold mb-6 text-center">¿Por qué elegirnos?</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "24h", label: "Respuesta" },
                  { number: "150+", label: "Proyectos" },
                  { number: "98%", label: "Satisfacción" },
                  { number: "5★", label: "Rating" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Cuéntanos sobre tu proyecto</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="+34 614 473 197"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Tu empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                    >
                      <option value="">Seleccionar servicio</option>
                      <option value="web-development">Desarrollo Web</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="web-app">Aplicación Web</option>
                      <option value="marketing">Marketing Digital</option>
                      <option value="consulting">Consultoría Digital</option>
                      <option value="social-media">Gestión de Redes Sociales</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Presupuesto estimado
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                    >
                      <option value="">Seleccionar rango</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                      <option value="to-discuss">A discutir</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors resize-none text-white placeholder-gray-400"
                    placeholder="Describe tu proyecto, objetivos, funcionalidades que necesitas, etc."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? "Enviando..." : "🚀 Enviar Mensaje"}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-400/20 border border-green-400/30 rounded-xl"
                  >
                    <p className="text-green-400 font-semibold">
                      ✅ ¡Mensaje enviado correctamente! Te contactaremos en menos de 24 horas.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-red-400/20 border border-red-400/30 rounded-xl"
                  >
                    <p className="text-red-400 font-semibold">
                      ❌ Error al enviar el mensaje. Por favor, intenta nuevamente.
                    </p>
                  </motion.div>
                )}
              </form>

              <div className="mt-8 text-center text-sm text-gray-400">
                <p>Al enviar este formulario, aceptas nuestros términos de servicio y política de privacidad.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
