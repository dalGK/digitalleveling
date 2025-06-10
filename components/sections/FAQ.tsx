"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio básico toma 2-3 semanas, mientras que proyectos más complejos pueden tomar 6-8 semanas. Te proporcionamos un cronograma detallado antes de comenzar.",
    category: "Desarrollo",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Utilizamos las tecnologías más modernas y confiables: React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, y muchas más. Elegimos la tecnología más adecuada para cada proyecto específico.",
    category: "Tecnología",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Absolutamente. Todos nuestros planes incluyen soporte post-lanzamiento. Además, ofrecemos planes de mantenimiento mensual para actualizaciones, backups y soporte continuo.",
    category: "Soporte",
  },
  {
    question: "¿Pueden trabajar con mi presupuesto limitado?",
    answer:
      "Entendemos que cada negocio tiene diferentes necesidades y presupuestos. Ofrecemos soluciones escalables y planes de pago flexibles. Contáctanos para discutir opciones personalizadas.",
    category: "Precios",
  },
  {
    question: "¿El sitio web será optimizado para móviles?",
    answer:
      "Sí, todos nuestros sitios web son completamente responsivos y optimizados para móviles. Utilizamos un enfoque 'mobile-first' para garantizar una experiencia perfecta en todos los dispositivos.",
    category: "Desarrollo",
  },
  {
    question: "¿Incluyen SEO en sus servicios?",
    answer:
      "Sí, todos nuestros sitios web incluyen SEO básico (meta tags, estructura, velocidad). También ofrecemos servicios de SEO avanzado como servicio adicional para maximizar tu visibilidad en buscadores.",
    category: "SEO",
  },
  {
    question: "¿Puedo actualizar el contenido yo mismo?",
    answer:
      "Sí, desarrollamos sitios web con paneles de administración intuitivos que te permiten actualizar contenido fácilmente. También proporcionamos capacitación para que puedas gestionar tu sitio de forma independiente.",
    category: "Gestión",
  },
  {
    question: "¿Trabajan con clientes internacionales?",
    answer:
      "Sí, trabajamos con clientes de todo el mundo. Tenemos experiencia en proyectos internacionales y podemos adaptarnos a diferentes zonas horarias y requisitos específicos de cada región.",
    category: "Internacional",
  },
  {
    question: "¿Qué pasa si no estoy satisfecho con el resultado?",
    answer:
      "Ofrecemos garantía de satisfacción de 30 días. Si no estás completamente satisfecho con el resultado, trabajaremos contigo para hacer las correcciones necesarias o te devolvemos tu dinero.",
    category: "Garantía",
  },
]

const categories = ["Todos", "Desarrollo", "Diseño", "Precios", "Soporte", "SEO"]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const filteredFAQs = activeCategory === "Todos" ? faqs : faqs.filter((faq) => faq.category === activeCategory)

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
              ❓ Preguntas Frecuentes
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Resolvemos Tus <span className="gradient-text">Dudas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y procesos
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category ? "bg-yellow-400 text-black" : "bg-white/10 text-white hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div layout className="max-w-4xl mx-auto">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="glass-effect rounded-2xl overflow-hidden">
                <motion.button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-yellow-400 text-xl">{openFAQ === index ? "−" : "+"}</span>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </div>
                  <span className="text-yellow-400 text-sm bg-yellow-400/20 px-3 py-1 rounded-full">
                    {faq.category}
                  </span>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-800">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
