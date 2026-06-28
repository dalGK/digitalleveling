"use client"

import { motion } from "framer-motion"

const services = [
  { icon: "📱", label: "Móviles", desc: "iPhone, Samsung, Xiaomi..." },
  { icon: "💻", label: "Ordenadores", desc: "PC, Mac y portátiles" },
  { icon: "🎮", label: "Consolas", desc: "PS5, Xbox, Switch" },
  { icon: "🕹️", label: "Mandos", desc: "Drift, botones, joystick" },
  { icon: "🛴", label: "Patinetes", desc: "Xiaomi y otras marcas" },
  { icon: "⌚", label: "Smartwatches", desc: "Apple Watch, Galaxy..." },
  { icon: "🤖", label: "Robots Aspirador", desc: "Roomba, Xiaomi..." },
]

export default function Collaborator() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Fondos animados */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-yellow-400/8 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/25 px-5 py-2 rounded-full text-sm font-semibold mb-8">
            🤝 Colaboración Oficial
          </span>

          {/* Digital Leveling × Doctor Voltio */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 flex-wrap">
            <span className="text-xl sm:text-3xl font-black text-yellow-400 tracking-tight">
              Digital Leveling
            </span>
            <motion.span
              className="text-2xl sm:text-4xl font-black text-white/30"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ×
            </motion.span>
            <span className="text-xl sm:text-3xl font-black text-blue-400 tracking-tight">
              Doctor Voltio
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Reparamos tu tecnología.{" "}
            <span className="text-yellow-400 font-semibold">Impulsamos tu negocio.</span>
          </p>
        </motion.div>

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Glow border */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-yellow-400/20 via-blue-500/50 to-yellow-400/20 blur-sm" />

          <div className="relative bg-gray-950/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/8">

            {/* Top bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/8 bg-gradient-to-r from-blue-950/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-400/30">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-none">Doctor Voltio</p>
                  <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mt-1">
                    Reparación y Tecnología · Madrid
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-green-400 text-xs font-semibold hidden sm:block">Disponible</span>
              </div>
            </div>

            {/* Servicios */}
            <div className="p-6 sm:p-8">
              <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-5">
                ¿Qué reparan?
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center text-center gap-2 bg-white/4 hover:bg-blue-400/8 border border-white/8 hover:border-blue-400/30 rounded-2xl px-3 py-4 transition-all duration-200 cursor-default"
                  >
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-white text-sm font-semibold leading-tight">{service.label}</span>
                    <span className="text-gray-500 text-xs leading-tight">{service.desc}</span>
                  </motion.div>
                ))}
              </div>

              {/* Info + CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t border-white/8">
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://wa.me/34624984107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    <span>📲</span>
                    <span>+34 624 984 107</span>
                  </a>
                  <span className="flex items-center gap-2 text-gray-500 text-xs">
                    <span>📍</span>
                    Paseo de los Artilleros 17 posterior, 28032 Madrid
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="https://wa.me/34624984107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 hover:border-green-400/50 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  >
                    📲 WhatsApp
                  </a>
                  <a
                    href="https://doctorvoltio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:border-blue-400/50 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  >
                    ⚡ Ver su web
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
