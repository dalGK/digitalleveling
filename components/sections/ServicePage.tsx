"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface Feature {
  icon: string
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ServicePageProps {
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  description: string
  features: Feature[]
  faqs: FAQ[]
  price: string
  ctaText: string
  relatedServices: { href: string; label: string }[]
}

export default function ServicePage({
  badge,
  title,
  titleHighlight,
  subtitle,
  description,
  features,
  faqs,
  price,
  ctaText,
  relatedServices,
}: ServicePageProps) {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              {badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {title} <span className="gradient-text">{titleHighlight}</span>
            </h1>
            <p className="text-xl text-yellow-400 font-semibold mb-4">{subtitle}</p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/34614473197?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                🚀 {ctaText}
              </a>
              <a
                href="https://wa.me/34614473197?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg"
              >
                💬 Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price Banner */}
      <section className="py-8 bg-yellow-400/10 border-y border-yellow-400/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">{price}</p>
          <p className="text-gray-400 text-sm mt-1">Sin permanencia · Presupuesto personalizado gratuito</p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            ¿Qué incluye el <span className="gradient-text">servicio</span>?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <div className="text-5xl mb-5">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            Preguntas <span className="gradient-text">Frecuentes</span>
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold mb-3 text-yellow-400">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-gray-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Otros <span className="gradient-text">servicios</span> que te pueden interesar
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="px-6 py-3 glass-effect rounded-full text-gray-300 hover:text-yellow-400 hover:border-yellow-400/50 border border-transparent transition-all duration-300"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="gradient-text">empezar</span>?
            </h2>
            <p className="text-gray-300 text-xl mb-10">
              Cuéntanos tu proyecto y te respondemos en menos de 24 horas con una propuesta personalizada.
            </p>
            <a
              href="https://wa.me/34614473197?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              🚀 Solicitar presupuesto por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
