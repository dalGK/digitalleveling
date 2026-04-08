"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const services = [
  {
    id: "web-development",
    icon: "🌐",
    title: "Desarrollo Web Completo",
    description: "Sitios web modernos, rápidos y optimizados con las últimas tecnologías.",
    features: ["React & Next.js", "Diseño Responsivo", "SEO Optimizado", "Performance 100%"],
    price: "Desde 300",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-commerce Avanzado",
    description: "Tiendas online completas con gestión de inventario y pagos integrados.",
    features: ["Carrito Inteligente", "Pagos Seguros", "Panel Admin", "Analytics"],
    price: "Desde 1000€",
  },
  {
    id: "web-app",
    icon: "📱",
    title: "Aplicaciones Web",
    description: "Apps web progresivas que funcionan como aplicaciones nativas.",
    features: ["PWA", "Offline Mode", "Push Notifications", "App Store Ready"],
    price: "Desde $1,000",
  },
  {
    id: "marketing",
    icon: "📈",
    title: "Marketing Digital",
    description: "Estrategias de marketing digital completas para aumentar tu visibilidad y conversiones online.",
    features: ["Google Ads", "Facebook Ads", "Email Marketing", "Social Media"],
    price: "Desde $300",
  },
  {
    id: "consulting",
    icon: "🚀",
    title: "Consultoría Digital",
    description: "Estrategias personalizadas para optimizar tu presencia digital.",
    features: ["Auditoría Web", "Estrategia SEO", "Plan Marketing", "KPIs"],
    price: "Desde $300",
  },
  {
    id: "social-media",
    icon: "📲",
    title: "Gestión de Redes Sociales",
    description: "Administración completa de tus redes sociales para aumentar engagement y ventas.",
    features: ["Contenido Creativo", "Community Management", "Analytics", "Publicidad Social"],
    price: "Desde $100",
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="section-padding bg-black">
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
              🛠️ Nuestros Servicios
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Soluciones <span className="gradient-text">Digitales Completas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Desde el concepto hasta el lanzamiento, ofrecemos servicios integrales para transformar tu visión en
            realidad digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full card-hover relative overflow-hidden">
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-6"
                    animate={hoveredIndex === index ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <span className="text-yellow-400 mr-2">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold gradient-text">{service.price}</span>
                   
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">¿No encuentras lo que buscas?</p>
          <Link href="/agendar-llamada" className="btn-primary text-lg">
            💬 Consulta Personalizada
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
