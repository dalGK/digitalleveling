"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const mainServices = [
  {
    id: "web",
    icon: "🌐",
    badge: "Servicio Principal",
    title: "Diseño y Desarrollo Web",
    description:
      "Páginas web profesionales, rápidas y optimizadas para convertir visitas en clientes. Diseño a medida con tecnología de primer nivel.",
    features: ["Diseño UI/UX Profesional", "Next.js & React", "SEO Técnico Incluido", "Optimizado para Conversión"],
    price: "Desde 300€",
    href: "/servicios/desarrollo-web-madrid",
  },
  {
    id: "seo",
    icon: "🔍",
    badge: "Servicio Principal",
    title: "SEO y Posicionamiento Web",
    description:
      "Estrategias SEO para que tu negocio aparezca primero en Google y capte clientes de forma orgánica y sostenida.",
    features: ["Auditoría SEO Completa", "SEO Técnico", "Contenidos SEO", "Informes Mensuales"],
    price: "Desde 300€/mes",
    href: "/servicios/seo",
  },
  {
    id: "apps",
    icon: "⚙️",
    badge: "Solución Especializada",
    title: "Aplicaciones Web a Medida",
    description:
      "Plataformas digitales, herramientas internas, SaaS y automatizaciones diseñadas para los procesos específicos de tu negocio.",
    features: ["Desarrollo a Medida", "Integraciones API", "Panel de Gestión", "Escalabilidad Cloud"],
    price: "Desde 1.000€",
    href: "/servicios/aplicaciones-web",
  },
]

const secondaryServices = [
  { href: "/servicios/ecommerce", label: "🛒 E-commerce" },
  { href: "/servicios/marketing-digital", label: "📈 Marketing Digital" },
  { href: "/servicios/consultoria-digital", label: "🚀 Consultoría Digital" },
  { href: "/servicios/gestion-redes-sociales", label: "📲 Gestión de Redes Sociales" },
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
              🛠️ Servicios
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Diseño Web, SEO y{" "}
            <span className="gradient-text">Soluciones Digitales</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nuestro foco es tu crecimiento online: webs que posicionan, estrategias SEO que generan tráfico y
            soluciones a medida para proyectos más complejos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
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
              <Link href={service.href} className="block h-full">
                <div className="glass-effect rounded-2xl p-8 h-full card-hover relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        className="text-6xl"
                        animate={hoveredIndex === index ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          service.badge === "Servicio Principal"
                            ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                            : "bg-gray-700/50 text-gray-400 border border-gray-600/30"
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>

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
                      <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6 font-semibold">Más servicios</p>
          <div className="flex flex-wrap justify-center gap-3">
            {secondaryServices.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="px-5 py-2 glass-effect rounded-full text-gray-400 hover:text-yellow-400 hover:border-yellow-400/40 border border-gray-700/50 transition-all duration-300 text-sm"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">¿Tienes un proyecto diferente o necesitas algo a medida?</p>
          <a
            href="https://wa.me/34614473197?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            💬 Consulta Personalizada Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  )
}
