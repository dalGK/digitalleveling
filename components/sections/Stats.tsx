"use client"

import { motion } from "framer-motion"
import { Code2, MessagesSquare, CalendarCheck, Clock } from "lucide-react"

// Solo afirmaciones verificables: nada de cifras de proyectos, satisfacción o valoraciones sin respaldo
const highlights = [
  { icon: Code2, title: "Desarrollo a medida", text: "Next.js y React, sin plantillas" },
  { icon: MessagesSquare, title: "Trato directo", text: "Hablas con quien programa tu web" },
  { icon: CalendarCheck, title: "Reservas y automatización", text: "Calendarios, recordatorios y paneles propios" },
  { icon: Clock, title: "Respuesta en 24 h", text: "Por WhatsApp o email" },
]

export default function Stats() {
  return (
    <section aria-label="Por qué trabajar con Digital Leveling" className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 border border-yellow-400/10 flex items-start gap-4"
            >
              <Icon className="w-8 h-8 shrink-0 text-yellow-400" strokeWidth={1.75} aria-hidden="true" />
              <div>
                <p className="font-bold text-white mb-1">{title}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
