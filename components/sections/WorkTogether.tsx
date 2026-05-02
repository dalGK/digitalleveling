"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, Clock, Users, Target, CheckCircle, ArrowRight } from "lucide-react"

export default function WorkTogether() {
  const [selectedPlan, setSelectedPlan] = useState("standard")

  const plans = [
    {
      id: "basic",
      name: "Proyecto Básico",
      price: "$1,500",
      duration: "2-3 semanas",
      description: "Perfecto para pequeñas empresas que necesitan presencia digital",
      features: [
        "Sitio web responsive (hasta 5 páginas)",
        "Optimización SEO básica",
        "Formulario de contacto",
        "Integración redes sociales",
        "1 mes de soporte gratuito",
      ],
      popular: false,
    },
    {
      id: "standard",
      name: "Proyecto Estándar",
      price: "$3,500",
      duration: "4-6 semanas",
      description: "La opción más popular para empresas en crecimiento",
      features: [
        "Sitio web completo (hasta 10 páginas)",
        "Sistema de gestión de contenido",
        "E-commerce básico (hasta 50 productos)",
        "Optimización SEO avanzada",
        "Analytics y métricas",
        "Blog integrado",
        "3 meses de soporte gratuito",
        "Capacitación incluida",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Proyecto Premium",
      price: "$7,500",
      duration: "8-12 semanas",
      description: "Solución completa para empresas establecidas",
      features: [
        "Aplicación web completa",
        "E-commerce avanzado (productos ilimitados)",
        "Panel de administración personalizado",
        "Integraciones API múltiples",
        "Sistema de usuarios y roles",
        "Optimización de performance",
        "6 meses de soporte gratuito",
        "Mantenimiento mensual incluido",
      ],
      popular: false,
    },
  ]

  const process = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Analizamos tus necesidades y objetivos",
      duration: "1 día",
      icon: Target,
    },
    {
      step: "02",
      title: "Propuesta Detallada",
      description: "Creamos un plan personalizado para tu proyecto",
      duration: "2-3 días",
      icon: Users,
    },
    {
      step: "03",
      title: "Desarrollo",
      description: "Construimos tu proyecto con actualizaciones semanales",
      duration: "2-12 semanas",
      icon: Clock,
    },
    {
      step: "04",
      title: "Lanzamiento",
      description: "Desplegamos y te capacitamos en el uso",
      duration: "1-2 días",
      icon: CheckCircle,
    },
  ]

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
              🤝 Trabajemos Juntos
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Elige el Plan <span className="gradient-text">Perfecto</span> para tu Proyecto
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ofrecemos soluciones escalables adaptadas a cada etapa de tu negocio. Desde startups hasta empresas
            establecidas.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass-effect rounded-3xl p-8 card-hover ${
                plan.popular ? "border-2 border-yellow-400" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                    ⭐ Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold gradient-text mb-2">{plan.price}</div>
                <p className="text-gray-400 text-sm mb-4">{plan.duration}</p>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "btn-primary"
                    : "border-2 border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Seleccionar Plan
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Nuestro Proceso de Trabajo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="glass-effect rounded-2xl p-6 mb-4">
                    <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <IconComponent className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                    <span className="text-yellow-400 text-xs">{step.duration}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-yellow-400" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Agenda una consulta gratuita de 30 minutos y descubre cómo podemos ayudarte a alcanzar tus objetivos
              digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/34614473197?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 Consulta Gratuita por WhatsApp
              </motion.a>
              <motion.button
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 Hablar por WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
