"use client"

import { motion } from "framer-motion"

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
              Tecnología al servicio de <span className="gradient-text">tu negocio</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ayudamos a negocios a conseguir más clientes y a ahorrar tiempo con webs profesionales, SEO y
              automatizaciones útiles. Trabajamos desde Madrid con empresas de toda España y de otros países.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "🌐",
                  title: "Webs que Posicionan y Convierten",
                  description:
                    "Cada web que creamos está diseñada para aparecer en Google y transformar visitas en clientes.",
                },
                {
                  icon: "🔍",
                  title: "Automatizaciones que Ahorran Tiempo",
                  description:
                    "WhatsApp y reservas que funcionan solos, para que dediques tu tiempo a atender a tus clientes.",
                },
                {
                  icon: "🤝",
                  title: "Relación Directa y Sin Burocracia",
                  description:
                    "Trato directo con quien trabaja tu proyecto. Sin intermediarios y con respuesta en menos de 24 h laborables.",
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
                    { icon: "⚙️", label: "WhatsApp y reservas", value: "Automatización" },
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
