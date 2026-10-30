"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { faqs } from "@/lib/faqs"

const categories = ["Todos", ...Array.from(new Set(faqs.map((faq) => faq.category)))]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const filteredFAQs = activeCategory === "Todos" ? faqs : faqs.filter((faq) => faq.category === activeCategory)

  return (
    <section className="section-padding bg-black">
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
              ❓ Preguntas Frecuentes
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Resolvemos Tus <span className="gradient-text">Dudas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y procesos
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => {
                setActiveCategory(category)
                setOpenFAQ(null)
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category ? "bg-yellow-400 text-black" : "bg-white/10 text-white hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div layout className="max-w-4xl mx-auto">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="glass-effect rounded-2xl overflow-hidden">
                <motion.button
                  type="button"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-yellow-400 text-xl" aria-hidden="true">{openFAQ === index ? "−" : "+"}</span>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </div>
                  <span className="hidden sm:inline text-yellow-400 text-sm bg-yellow-400/20 px-3 py-1 rounded-full shrink-0 ml-4">
                    {faq.category}
                  </span>
                </motion.button>

                <motion.div
                  id={`faq-panel-${index}`}
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-800">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
