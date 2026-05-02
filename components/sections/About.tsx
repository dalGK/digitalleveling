"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
                Sobre Digital Leveling
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Especialistas en <span className="gradient-text">Diseño Web y SEO</span> para Negocios
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ayudamos a negocios y marcas a crecer en internet diseñando webs profesionales y desarrollando
              estrategias SEO que generan resultados reales. Trabajamos con empresas en España y con clientes
              de todo el mundo.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: "🌐",
                  title: "Webs que Posicionan y Convierten",
                  description:
                    "Cada web que creamos está diseñada para aparecer en Google y transformar visitas en clientes.",
                },
                {
                  icon: "🔍",
                  title: "SEO Basado en Datos",
                  description:
                    "Estrategias SEO con análisis de competencia, keywords y resultados medibles mes a mes.",
                },
                {
                  icon: "🤝",
                  title: "Relación Directa y Sin Burocracia",
                  description:
                    "Trato directo con quien trabaja tu proyecto. Sin intermediarios, con respuesta garantizada en 24h.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              
              <a
                href="https://wa.me/34614473197?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                📞 Consulta Gratuita
              </a>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="glass-effect rounded-2xl p-8 floating"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: "🌍", label: "España + Internacional", value: "Alcance" },
                    { icon: "⚡", label: "Next.js & React", value: "Stack" },
                    { icon: "🔍", label: "SEO Avanzado", value: "Posicionamiento" },
                    { icon: "💬", label: "Respuesta 24h", value: "Soporte" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-black/30 rounded-xl"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="text-xs font-bold gradient-text mb-1 uppercase tracking-wide">{item.value}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
