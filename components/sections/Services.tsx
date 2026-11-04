"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { serviceGroups } from "@/lib/site"

const moreServices = [
  { href: "/servicios/consultoria-digital", label: "Consultoría digital" },
  { href: "/servicios/gestion-redes-sociales", label: "Gestión de redes sociales" },
]

export default function Services() {
  return (
    <section id="services" data-track="services" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🛠️ Soluciones
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Todo lo que tu negocio necesita <span className="gradient-text">para crecer online</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tres áreas, un solo equipo. Empezamos por lo que más impacto tenga en tu negocio y lo ampliamos cuando
            tenga sentido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 h-full flex flex-col border border-yellow-400/10"
            >
              <div className="text-5xl mb-6" aria-hidden="true">
                {group.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{group.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{group.description}</p>

              <ul className="space-y-1 mt-auto">
                {group.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between gap-3 py-2.5 px-3 -mx-3 rounded-lg text-gray-200 hover:bg-white/5 hover:text-yellow-400 transition-colors group"
                      >
                        <span className="flex items-center">
                          <span className="text-yellow-400 mr-2" aria-hidden="true">
                            ✓
                          </span>
                          {item.label}
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-yellow-400 whitespace-nowrap">
                          {item.price ?? "Ver más"} <span aria-hidden="true">→</span>
                        </span>
                      </Link>
                    ) : (
                      <span className="flex items-center justify-between gap-3 py-2.5 text-gray-500">
                        <span className="flex items-center">
                          <span className="mr-2" aria-hidden="true">
                            ○
                          </span>
                          {item.label}
                        </span>
                        <span className="text-xs bg-gray-700/50 text-gray-400 px-2.5 py-1 rounded-full border border-gray-600/30 whitespace-nowrap">
                          Próximamente
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            También ofrecemos{" "}
            {moreServices.map((s, i) => (
              <span key={s.href}>
                {i > 0 && " y "}
                <Link href={s.href} className="text-gray-300 underline decoration-gray-600 hover:text-yellow-400">
                  {s.label.toLowerCase()}
                </Link>
              </span>
            ))}
            . ¿No sabes por dónde empezar?
          </p>
          <Link href="/#contact" data-cta="diagnostico" className="btn-primary text-base sm:text-lg">
            Solicitar diagnóstico gratuito
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
