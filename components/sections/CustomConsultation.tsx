"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Brain, Target, Lightbulb, TrendingUp, CheckCircle } from "lucide-react"
import { budgetRanges, contact } from "@/lib/site"
import { submitContact } from "@/lib/submit-contact"
import ConsentFields, { PrivacyNotice } from "@/components/forms/ConsentFields"

export default function CustomConsultation() {
  const [selectedConsultationType, setSelectedConsultationType] = useState("strategy")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    currentSituation: "",
    goals: "",
    challenges: "",
    timeline: "",
    budget: "",
    consultationType: "strategy",
  })

  const consultationTypes = [
    {
      id: "strategy",
      name: "Estrategia Digital",
      icon: Brain,
      price: "A medida",
      duration: "2-3 sesiones",
      description: "Definimos tu estrategia digital completa",
      includes: [
        "Análisis de situación actual",
        "Definición de objetivos",
        "Estrategia de crecimiento",
        "Plan de implementación",
        "KPIs y métricas",
      ],
    },
    {
      id: "technical",
      name: "Consultoría Técnica",
      icon: Target,
      price: "A medida",
      duration: "1-2 sesiones",
      description: "Soluciones técnicas específicas",
      includes: [
        "Auditoría técnica",
        "Arquitectura de sistemas",
        "Optimización de performance",
        "Recomendaciones de stack",
        "Plan de migración",
      ],
    },
    {
      id: "growth",
      name: "Soporte IT",
      icon: TrendingUp,
      price: "A medida",
      description: "Estrategias de crecimiento acelerado",
      includes: [
        "Análisis de funnel",
        "Estrategias de adquisición",
        "Optimización de conversión",
        "Experimentos A/B",
        "Métricas de crecimiento",
      ],
    },
    {
      id: "innovation",
      name: "Innovación Digital",
      icon: Lightbulb,
      price: "A medida",
      duration: "4-5 sesiones",
      description: "Innovación y transformación digital",
      includes: [
        "Análisis de tendencias",
        "Oportunidades de innovación",
        "Roadmap de transformación",
        "Tecnologías emergentes",
        "Ventaja competitiva",
      ],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Análisis Inicial",
      description: "Evaluamos tu situación actual y objetivos",
      icon: Target,
    },
    {
      step: "02",
      title: "Investigación",
      description: "Analizamos tu mercado y competencia",
      icon: Brain,
    },
    {
      step: "03",
      title: "Estrategia",
      description: "Desarrollamos un plan personalizado",
      icon: Lightbulb,
    },
    {
      step: "04",
      title: "Implementación",
      description: "Te guiamos en la ejecución",
      icon: TrendingUp,
    },
  ]

  const selectedType = consultationTypes.find((type) => type.id === selectedConsultationType)

  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const ok = await submitContact({
      source: "Consulta personalizada",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: selectedType ? `Consultoría: ${selectedType.name}` : "Consultoría",
      budget: formData.budget,
      details: {
        Sector: formData.industry,
        "Situación actual": formData.currentSituation,
        Objetivos: formData.goals,
        Desafíos: formData.challenges,
        Plazo: formData.timeline,
      },
      consent,
      website,
    })
    setSubmitStatus(ok ? "success" : "error")
    setIsSubmitting(false)
  }

  return (
    <section className="section-padding bg-black">
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
              🧠 Consultoría Personalizada
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Consultoría <span className="gradient-text">Estratégica</span> Personalizada
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Obtén asesoramiento experto adaptado a las necesidades específicas de tu negocio. Desde estrategia digital
            hasta implementación técnica.
          </p>
        </motion.div>

        {/* Consultation Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Tipos de Consultoría</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultationTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <motion.button
                  key={type.id}
                  onClick={() => {
                    setSelectedConsultationType(type.id)
                    setFormData({ ...formData, consultationType: type.id })
                  }}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selectedConsultationType === type.id
                      ? "border-yellow-400 bg-yellow-400/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <IconComponent className="w-8 h-8 text-yellow-400 mb-4" />
                  <h4 className="text-lg font-bold mb-2">{type.name}</h4>
                  <p className="text-gray-300 text-sm mb-3">{type.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-yellow-400 font-bold">{type.price}</span>
                    <span className="text-gray-400">{type.duration}</span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Selected Consultation Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {selectedType && (
              <div className="glass-effect rounded-3xl p-8 mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-yellow-400 p-3 rounded-xl">
                    <selectedType.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedType.name}</h3>
                    <p className="text-gray-400">{selectedType.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-black/30 rounded-xl">
                    <div className="text-2xl font-bold gradient-text">{selectedType.price}</div>
                    <div className="text-sm text-gray-400">Precio base</div>
                  </div>
                  <div className="text-center p-4 bg-black/30 rounded-xl">
                    <div className="text-2xl font-bold gradient-text">{selectedType.duration}</div>
                    <div className="text-sm text-gray-400">Duración</div>
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-4">¿Qué incluye?</h4>
                <div className="space-y-3">
                  {selectedType.includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Nuestro Proceso</h3>
              <div className="space-y-6">
                {process.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <IconComponent className="w-5 h-5 text-yellow-400" />
                          <h4 className="text-lg font-bold">{step.title}</h4>
                        </div>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                      {index < process.length - 1 && (
                        <div className="absolute left-5 mt-10 w-0.5 h-6 bg-yellow-400/30" />
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Solicitar Consultoría Personalizada</h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative">
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
                      placeholder="+34 600 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      placeholder="Tu empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2">
                    Industria/Sector
                  </label>
                  <select
                    id="industry"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  >
                    <option value="">Seleccionar industria</option>
                    <option value="Tecnología">Tecnología</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Salud">Salud</option>
                    <option value="Finanzas">Finanzas</option>
                    <option value="Educación">Educación</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufactura">Manufactura</option>
                    <option value="Servicios">Servicios</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentSituation" className="block text-sm font-medium mb-2">
                    Situación actual de tu negocio *
                  </label>
                  <textarea
                    id="currentSituation"
                    rows={3}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors resize-none text-white"
                    placeholder="Describe la situación actual de tu negocio, desafíos principales, etc."
                    value={formData.currentSituation}
                    onChange={(e) => setFormData({ ...formData, currentSituation: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium mb-2">
                    Objetivos que quieres alcanzar *
                  </label>
                  <textarea
                    id="goals"
                    rows={3}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors resize-none text-white"
                    placeholder="¿Qué objetivos específicos quieres lograr? ¿Cuál es tu visión?"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="challenges" className="block text-sm font-medium mb-2">
                    Principales desafíos
                  </label>
                  <textarea
                    id="challenges"
                    rows={3}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors resize-none text-white"
                    placeholder="¿Cuáles son los principales obstáculos que enfrentas?"
                    value={formData.challenges}
                    onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Timeline deseado
                    </label>
                    <select
                      id="timeline"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option value="">Seleccionar plazo</option>
                      <option value="Inmediato (esta semana)">Inmediato (esta semana)</option>
                      <option value="Corto plazo (1 mes)">Corto plazo (1 mes)</option>
                      <option value="Mediano plazo (3 meses)">Mediano plazo (3 meses)</option>
                      <option value="Largo plazo (6+ meses)">Largo plazo (6+ meses)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Presupuesto para consultoría
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="">Seleccionar rango</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <ConsentFields
                  consent={consent}
                  onConsentChange={setConsent}
                  website={website}
                  onWebsiteChange={setWebsite}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? "Enviando..." : "🧠 Solicitar Consultoría Personalizada"}
                </motion.button>

                {submitStatus === "success" && (
                  <p role="status" className="text-center p-4 bg-green-400/20 border border-green-400/30 rounded-xl text-green-400 font-semibold">
                    ✅ ¡Solicitud enviada! Te contactaremos en 24 horas para agendar tu primera sesión.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p role="alert" className="text-center p-4 bg-red-400/20 border border-red-400/30 rounded-xl text-red-400 font-semibold">
                    ❌ No se pudo enviar. Inténtalo de nuevo o escríbenos a{" "}
                    <a href={`mailto:${contact.email}`} className="underline">
                      {contact.email}
                    </a>
                    .
                  </p>
                )}

                {submitStatus === "idle" && (
                  <p className="text-center text-sm text-gray-400">
                    Te contactaremos en 24 horas para agendar tu primera sesión de consultoría
                  </p>
                )}
              </form>
              <PrivacyNotice />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
