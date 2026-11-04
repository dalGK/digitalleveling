"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface AutomationFlow {
  icon: string
  title: string
  description: string
  steps: string[]
  // available: el servicio se ofrece hoy. comingSoon: aún no se ofrece.
  status: "available" | "comingSoon"
  // Enlace a una demo real cuando exista; mientras tanto se muestra "Demo en preparación"
  demoUrl?: string
}

const flows: AutomationFlow[] = [
  {
    icon: "📅",
    title: "Reservas inteligentes",
    description: "Tu cliente reserva cuando le viene bien y recibe la confirmación al momento, sin llamadas.",
    steps: ["El cliente elige día y hora", "Se bloquea el hueco en tu agenda", "Recibe confirmación y recordatorio"],
    status: "available",
  },
  {
    icon: "💬",
    title: "WhatsApp automatizado",
    description: "Respuestas inmediatas a las preguntas de siempre y solicitudes de cita ordenadas.",
    steps: ["Llega un mensaje fuera de horario", "Se responden las dudas frecuentes", "Se recoge la petición de cita"],
    status: "available",
  },
  {
    icon: "📇",
    title: "Seguimiento comercial",
    description: "Cada nuevo contacto queda registrado y con su siguiente paso asignado.",
    steps: ["Entra un nuevo contacto", "Se registra en el CRM", "Se programa el seguimiento"],
    status: "comingSoon",
  },
]

export default function AutomationDemos() {
  return (
    <section id="automatizaciones" data-track="demos" className="section-padding bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ⚙️ Automatizaciones
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Tu negocio atendiendo <span className="gradient-text">aunque no estés</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Así funcionan algunas de las automatizaciones que implantamos. Se adaptan a tus herramientas y a tu forma de
            trabajar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flows.map((flow, index) => (
            <motion.article
              key={flow.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect rounded-2xl p-8 flex flex-col ${flow.status === "comingSoon" ? "opacity-75" : ""}`}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-4xl" aria-hidden="true">
                  {flow.icon}
                </span>
                {flow.status === "available" ? (
                  <span className="text-xs px-3 py-1 rounded-full font-semibold bg-yellow-400/20 text-yellow-400 border border-yellow-400/30">
                    Disponible
                  </span>
                ) : (
                  <span className="text-xs px-3 py-1 rounded-full font-semibold bg-gray-700/50 text-gray-400 border border-gray-600/30">
                    Próximamente
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-3">{flow.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{flow.description}</p>

              <ol className="space-y-3 mb-6">
                {flow.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-auto pt-4 border-t border-gray-800 text-sm">
                {flow.demoUrl ? (
                  <a href={flow.demoUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                    Ver demo →
                  </a>
                ) : (
                  <span className="text-gray-500">Ejemplo ilustrativo · Demo en preparación</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/servicios/automatizacion" className="text-yellow-400 hover:underline font-semibold">
            Cómo automatizamos WhatsApp y reservas →
          </Link>
        </div>
      </div>
    </section>
  )
}
