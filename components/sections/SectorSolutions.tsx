"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { sectorSolutions } from "@/lib/site"

// Banda destacada: una oferta concreta por sector, sin sección con título grande
export default function SectorSolutions() {
  return (
    <section id="soluciones" data-track="sectores" className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4 max-w-5xl space-y-6">
        {sectorSolutions.map((solution, index) => {
          const isExternal = solution.href.startsWith("http")
          const cta = (
            <>
              {solution.ctaLabel} <ArrowRight className="inline w-5 h-5 ml-1 -mt-0.5" aria-hidden="true" />
            </>
          )
          const ctaClass = "btn-primary text-center whitespace-nowrap w-full md:w-auto shrink-0"
          return (
            <motion.article
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 via-black to-black p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-10"
            >
              <div>
                {index === 0 && (
                  <h2 className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-3">
                    Soluciones por sector
                  </h2>
                )}
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{solution.title}</h3>
                <p className="text-lg text-gray-200 mb-3">{solution.offer}</p>
                <p className="text-sm text-gray-400">{solution.sectors.join(" · ")}</p>
              </div>

              <div className="mt-6 md:mt-0">
                {isExternal ? (
                  <a
                    href={solution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta={`sector-${solution.id}`}
                    className={ctaClass}
                  >
                    {cta}
                  </a>
                ) : (
                  <Link href={solution.href} data-cta={`sector-${solution.id}`} className={ctaClass}>
                    {cta}
                  </Link>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
