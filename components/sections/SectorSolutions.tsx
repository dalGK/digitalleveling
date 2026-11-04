"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CalendarCheck, Check } from "lucide-react"
import { sectorSolutions } from "@/lib/site"

export default function SectorSolutions() {
  return (
    <section id="soluciones" data-track="sectores" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Soluciones <span className="gradient-text">por sector</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Paquetes pensados para el día a día de cada tipo de negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          {sectorSolutions.map((solution) => {
            const isExternal = solution.href.startsWith("http")
            return (
              <motion.article
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 sm:p-8 border border-yellow-400/20 flex flex-col gap-6"
              >
                <div className="flex items-start gap-4">
                  <CalendarCheck className="w-12 h-12 shrink-0 text-yellow-400" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <ul className="flex flex-wrap gap-2" aria-label="Sectores">
                      {solution.sectors.map((sector) => (
                        <li
                          key={sector}
                          className="text-sm bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20"
                        >
                          {sector}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="flex items-center gap-2 text-lg text-gray-200">
                  <Check className="w-5 h-5 shrink-0 text-yellow-400" aria-hidden="true" />
                  {solution.offer}
                </p>

                {isExternal ? (
                  <a
                    href={solution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta={`sector-${solution.id}`}
                    className="btn-primary text-center self-stretch sm:self-start"
                  >
                    {solution.ctaLabel}
                  </a>
                ) : (
                  <Link
                    href={solution.href}
                    data-cta={`sector-${solution.id}`}
                    className="btn-primary text-center self-stretch sm:self-start"
                  >
                    {solution.ctaLabel}
                  </Link>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
