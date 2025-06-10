"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "María González",
    position: "CEO, TechStart",
    company: "TechStart Solutions",
    image: "/placeholder.svg?height=80&width=80&text=MG",
    rating: 5,
    text: "Digital Leveling transformó completamente nuestra presencia online. El equipo es profesional, creativo y siempre cumple con los plazos. Nuestras ventas aumentaron un 300% después del lanzamiento.",
    project: "E-commerce Platform",
  },
  {
    name: "Carlos Rodríguez",
    position: "Fundador",
    company: "InnovateLab",
    image: "/placeholder.svg?height=80&width=80&text=CR",
    rating: 5,
    text: "Increíble atención al detalle y comprensión de nuestras necesidades. La aplicación web que desarrollaron superó todas nuestras expectativas. Definitivamente los recomiendo.",
    project: "Web Application",
  },
  {
    name: "Ana Martínez",
    position: "Directora Marketing",
    company: "FashionBrand",
    image: "/placeholder.svg?height=80&width=80&text=AM",
    rating: 5,
    text: "El diseño de nuestra nueva web es simplemente espectacular. Cada detalle fue pensado para mejorar la experiencia del usuario. El ROI ha sido excepcional.",
    project: "Corporate Website",
  },
  {
    name: "Luis Fernández",
    position: "CTO",
    company: "DataCorp",
    image: "/placeholder.svg?height=80&width=80&text=LF",
    rating: 5,
    text: "Profesionalismo de primer nivel. Entregaron un dashboard complejo en tiempo récord y con una calidad impecable. Su soporte post-lanzamiento es excepcional.",
    project: "Analytics Dashboard",
  },
  {
    name: "Sofia Herrera",
    position: "Gerente General",
    company: "EcoSolutions",
    image: "/placeholder.svg?height=80&width=80&text=SH",
    rating: 5,
    text: "Trabajar con Digital Leveling fue una experiencia fantástica. No solo crearon una web hermosa, sino que también nos educaron sobre mejores prácticas digitales. Muy recomendados.",
    project: "Sustainable Business Site",
  },
  {
    name: "Roberto Silva",
    position: "Director",
    company: "MedCenter",
    image: "/placeholder.svg?height=80&width=80&text=RS",
    rating: 5,
    text: "La plataforma de telemedicina que desarrollaron ha revolucionado nuestra práctica. Interfaz intuitiva, segura y escalable. Pacientes y doctores están encantados.",
    project: "Telemedicine Platform",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
              💬 Testimonios
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Lo que Dicen Nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Estas son sus experiencias reales
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              {/* Quote Icon */}
              <motion.div
                className="text-6xl text-yellow-400/30 mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                "
              </motion.div>

              {/* Testimonial Text */}
              <motion.p
                className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {testimonials[currentTestimonial].text}
              </motion.p>

              {/* Rating */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-2xl"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </motion.div>

              {/* Client Info */}
              <motion.div
                className="flex items-center justify-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400 font-bold text-xl">
                  {testimonials[currentTestimonial].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-400">{testimonials[currentTestimonial].position}</p>
                  <p className="text-yellow-400 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
              </motion.div>

              {/* Project Tag */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
                  📁 {testimonials[currentTestimonial].project}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-yellow-400 w-8" : "bg-gray-600 hover:bg-gray-500"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-6 h-full card-hover relative overflow-hidden">
                {/* Background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm italic">
                    "{testimonial.text.substring(0, 120)}..."
                  </p>

                  {/* Client */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400 font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-gray-400 text-xs">{testimonial.position}</p>
                      <p className="text-yellow-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h3>
            <p className="text-gray-300 mb-6">Únete a nuestros clientes satisfechos y transforma tu negocio digital</p>
            <button className="btn-primary text-lg">🚀 Comenzar Mi Proyecto</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
