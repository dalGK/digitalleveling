"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Análisis",
    description: "Analizamos tu negocio, objetivos y audiencia para crear una estrategia personalizada.",
    icon: "🔍",
    duration: "1-2 días",
  },
  {
    number: "02",
    title: "Planificación",
    description: "Diseñamos la arquitectura, wireframes y plan de desarrollo detallado.",
    icon: "📋",
    duration: "3-5 días",
  },
  {
    number: "03",
    title: "Diseño",
    description: "Creamos interfaces atractivas y experiencias de usuario excepcionales.",
    icon: "🎨",
    duration: "1 semana",
  },
  {
    number: "04",
    title: "Desarrollo",
    description: "Construimos tu proyecto con código limpio y las mejores prácticas.",
    icon: "⚡",
    duration: "2 semana",
  },
  {
    number: "05",
    title: "Testing",
    description: "Realizamos pruebas exhaustivas para garantizar calidad y rendimiento.",
    icon: "🧪",
    duration: "3-5 días",
  },
  {
    number: "06",
    title: "Lanzamiento",
    description: "Desplegamos tu proyecto y te acompañamos en el proceso de lanzamiento.",
    icon: "🚀",
    duration: "1-2 días",
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-gray-900/30">
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
              ⚙️ Nuestro Proceso
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Cómo <span className="gradient-text">Trabajamos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Un proceso probado y eficiente que garantiza resultados excepcionales en cada proyecto
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/20 via-yellow-400 to-yellow-400/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-8 text-center card-hover relative overflow-hidden group">
                  {/* Background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  <div className="relative z-10">
                    {/* Step Number */}
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 text-black rounded-full text-2xl font-bold mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>

                    <div className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
                      ⏱️ {step.duration}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/10 to-transparent" />
                </div>

                {/* Connection dots for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-400/20 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
            <p className="text-gray-300 mb-6">
              Agenda una consulta gratuita y descubre cómo podemos transformar tu idea en realidad
            </p>
            <Link href="/agendar-llamada" className="btn-primary text-lg">
              📅 Agendar Consulta Gratis
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
