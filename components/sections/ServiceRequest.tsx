"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, Clock, Users, Zap, Shield, Code } from "lucide-react"

interface ServiceRequestProps {
  serviceType: string
}

export default function ServiceRequest({ serviceType }: ServiceRequestProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    timeline: "",
    budget: "",
    features: [] as string[],
    priority: "standard",
  })

  const serviceDetails = {
    "web-development": {
      title: "Desarrollo Web Completo",
      description: "Sitios web modernos, rápidos y optimizados",
      basePrice: "600€",
      duration: "2-6 semanas",
      features: [
        "Diseño responsive",
        "Optimización SEO",
        "Panel de administración",
        "Formularios de contacto",
        "Integración redes sociales",
        "Analytics integrado",
        "Certificado SSL",
        "Hosting incluido (3 meses)",
      ],
    },
    ecommerce: {
      title: "E-commerce Avanzado",
      description: "Tiendas online completas con gestión integral",
      basePrice: "1,000€",
      duration: "4-8 semanas",
      features: [
        "Catálogo de productos",
        "Carrito de compras",
        "Múltiples métodos de pago",
        "Gestión de inventario",
        "Panel administrativo",
        "Sistema de envíos",
        "Reportes de ventas",
        "Integración contable",
      ],
    },
    "web-app": {
      title: "Aplicación Web",
      description: "Apps web progresivas y escalables",
      basePrice: "1000€",
      duration: "6-12 semanas",
      features: [
        "Aplicación web progresiva (PWA)",
        "Base de datos personalizada",
        "Sistema de usuarios",
        "Dashboard interactivo",
        "API REST personalizada",
        "Notificaciones push",
        "Modo offline",
        "Escalabilidad cloud",
      ],
    },
    marketing: {
      title: "Marketing Digital",
      description: "Estrategias completas de marketing online",
      basePrice: "300€",
      duration: "Mensual",
      features: [
        "Estrategia de contenido",
        "Gestión Google Ads",
        "Campañas Facebook/Instagram",
        "Email marketing",
        "SEO y posicionamiento",
        "Analytics y reportes",
        "Optimización conversiones",
        "Consultoría mensual",
      ],
    },
    consulting: {
      title: "Consultoría Digital",
      description: "Asesoramiento estratégico personalizado",
      basePrice: "300€",
      duration: "1-4 semanas",
      features: [
        "Auditoría digital completa",
        "Estrategia personalizada",
        "Plan de implementación",
        "Análisis de competencia",
        "Recomendaciones técnicas",
        "Roadmap de crecimiento",
        "Sesiones de mentoría",
        "Documentación detallada",
      ],
    },
    "social-media": {
      title: "Gestión de Redes Sociales",
      description: "Administración completa de redes sociales",
      basePrice: "100€",
      duration: "Mensual",
      features: [
        "Gestión de contenido",
        "Diseño gráfico",
        "Community management",
        "Estrategia de hashtags",
        "Análisis de métricas",
        "Publicidad social",
        "Influencer marketing",
        "Reportes mensuales",
      ],
    },
  }

  const service = serviceDetails[serviceType as keyof typeof serviceDetails]

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío
    console.log("Solicitud de servicio:", { serviceType, ...formData })
  }

  if (!service) {
    return <div>Servicio no encontrado</div>
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
              📋 Solicitar Servicio
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">{service.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{service.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-gray-400">Desde {service.basePrice}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>Equipo dedicado</span>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-bold mb-4">¿Qué incluye?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Entrega Rápida",
                  description: "Cumplimos con los plazos establecidos",
                },
                {
                  icon: Shield,
                  title: "Garantía Incluida",
                  description: "30 días de garantía en todos nuestros servicios",
                },
                {
                  icon: Code,
                  title: "Código Limpio",
                  description: "Desarrollo con las mejores prácticas",
                },
              ].map((benefit, index) => {
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
                      <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Solicitar {service.title}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      ¿Cuándo necesitas el proyecto?
                    </label>
                    <select
                      id="timeline"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option value="">Seleccionar plazo</option>
                      <option value="urgent">Urgente (1-2 semanas)</option>
                      <option value="normal">Normal (1 mes)</option>
                      <option value="flexible">Flexible (2+ meses)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Presupuesto estimado
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
                  <label className="block text-sm font-medium mb-4">Funcionalidades adicionales</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Blog integrado",
                      "Multiidioma",
                      "Chat en vivo",
                      "Reservas online",
                      "Pagos online",
                      "App móvil",
                      "API personalizada",
                      "Integración CRM",
                    ].map((feature) => (
                      <label key={feature} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400"
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium mb-2">
                    Describe tu proyecto *
                  </label>
                  <textarea
                    id="projectDescription"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors resize-none text-white"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos, funcionalidades específicas, etc."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-4">Prioridad del proyecto</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "standard", name: "Estándar", description: "Desarrollo normal" },
                      { id: "priority", name: "Prioritario", description: "+20% costo" },
                      { id: "express", name: "Express", description: "+50% costo" },
                    ].map((priority) => (
                      <motion.button
                        key={priority.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, priority: priority.id })}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                          formData.priority === priority.id
                            ? "border-yellow-400 bg-yellow-400/10"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <h4 className="font-semibold text-sm">{priority.name}</h4>
                        <p className="text-xs text-gray-400">{priority.description}</p>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 Solicitar {service.title}
                </motion.button>

                <p className="text-center text-sm text-gray-400">
                  Te contactaremos en menos de 24 horas con una propuesta personalizada
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
