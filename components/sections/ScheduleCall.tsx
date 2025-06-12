"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Calendar, Clock, Video, Phone, MessageSquare, CheckCircle, ExternalLink } from "lucide-react"

export default function ScheduleCall() {
  const [selectedType, setSelectedType] = useState("video")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    urgency: "",
    description: "",
  })

  // Tu URL real de Calendly
  const CALENDLY_URL = "https://calendly.com/leveling-digi/30min"

  const callTypes = [
    {
      id: "video",
      name: "Videollamada",
      icon: Video,
      description: "Reunión por Google Meet",
      duration: "30 min",
    },
    
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: "Consulta Gratuita",
      description: "Sin costo ni compromiso",
    },
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description: "Confirmación automática",
    },
    {
      icon: Calendar,
      title: "Google Meet Incluido",
      description: "Link automático al confirmar",
    },
  ]

  const handleDirectBooking = () => {
    // Abrir tu Calendly directamente
    window.open(CALENDLY_URL, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirigir a Calendly con parámetros pre-llenados
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      a1: formData.company, // Campo personalizado para empresa
      a2: formData.description, // Campo personalizado para descripción
    })

    window.open(`${CALENDLY_URL}?${params.toString()}`, "_blank")
  }

  return (
    <section className="section-padding bg-gray-900/50">
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
              📅 Agendar Llamada
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Agenda tu <span className="gradient-text">Consulta Gratuita</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Conversemos sobre tu proyecto sin compromiso. Te ayudamos a definir la mejor estrategia para tu negocio
            digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Benefits & Direct Booking */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Direct Booking Card */}
            <div className="glass-effect rounded-3xl p-8 mb-8 text-center">
              <div className="text-6xl mb-6">📅</div>
              <h3 className="text-2xl font-bold mb-4">Reserva Directa</h3>
              <p className="text-gray-300 mb-6">
                Haz clic aquí para acceder directamente a nuestro calendario y elegir el horario que mejor te convenga.
              </p>

              <motion.button
                onClick={handleDirectBooking}
                className="btn-primary text-xl px-8 py-4 w-full mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5 inline-block mr-2" />
                Agendar en Calendly
                <ExternalLink className="w-4 h-4 inline-block ml-2" />
              </motion.button>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-black/30 rounded-xl p-3">
                  <div className="text-yellow-400 font-bold">30 min</div>
                  <div className="text-xs text-gray-400">Duración</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3">
                  <div className="text-yellow-400 font-bold">Google Meet</div>
                  <div className="text-xs text-gray-400">Plataforma</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3">
                  <div className="text-yellow-400 font-bold">Gratis</div>
                  <div className="text-xs text-gray-400">Costo</div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">¿Qué incluye la consulta?</h3>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-yellow-400 p-3 rounded-xl">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}

              <div className="glass-effect rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4">En esta llamada hablaremos sobre:</h4>
                <ul className="space-y-3">
                  {[
                    "Tus objetivos y necesidades específicas",
                    "Análisis de tu situación actual",
                    "Propuesta de soluciones personalizadas",
                    "Cronograma y presupuesto estimado",
                    "Próximos pasos y plan de acción",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Alternative Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">O completa este formulario</h3>
              <p className="text-center text-gray-400 mb-8">
                Completa tus datos y serás redirigido a Calendly con la información pre-cargada
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Call Type Selection */}
                <div>
                  <label className="block text-sm font-medium mb-4">Tipo de reunión preferida</label>
                  <div className="grid grid-cols-1 gap-3">
                    {callTypes.map((type) => {
                      const IconComponent = type.icon
                      return (
                        <motion.button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            selectedType === type.id
                              ? "border-yellow-400 bg-yellow-400/10"
                              : "border-gray-700 hover:border-gray-600"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-3">
                            <IconComponent className="w-5 h-5 text-yellow-400" />
                            <div>
                              <h4 className="font-semibold">{type.name}</h4>
                              <p className="text-sm text-gray-400">{type.description}</p>
                              <span className="text-xs text-yellow-400">{type.duration}</span>
                            </div>
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      placeholder="+34 614 47 31 97"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      placeholder="Tu empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                    Cuéntanos brevemente sobre tu proyecto
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors resize-none text-white"
                    placeholder="Describe tu proyecto, objetivos, presupuesto estimado, etc."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5 inline-block mr-2" />
                  Continuar en Calendly
                </motion.button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-400 mb-4">¿Prefieres contacto directo?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/34614473197?text=Hola!%20Me%20gustaría%20agendar%20una%20consulta%20gratuita%20para%20mi%20proyecto%20digital."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm flex items-center justify-center"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Directo
                  </a>
                  <a
                    href="mailto:leveling.digi@gmail.com?subject=Consulta%20Gratuita&body=Hola!%20Me%20gustaría%20agendar%20una%20consulta%20gratuita%20para%20discutir%20mi%20proyecto%20digital."
                    className="btn-ghost text-sm flex items-center justify-center"
                  >
                    📧 Email Directo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
