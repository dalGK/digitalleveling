"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const categories = ["Todos", "E-commerce", "Corporativo", "Aplicaciones", "Landing Pages"]

const projects = [
  {
    id: "techstore",
    title: "TechStore Pro",
    description: "E-commerce completo con más de 10,000 productos y sistema de gestión avanzado.",
    image: "/placeholder.svg?height=400&width=600&text=TechStore+E-commerce",
    category: "E-commerce",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    link: "#",
    featured: true,
  },
  {
    id: "financeapp",
    title: "FinanceApp Dashboard",
    description: "Aplicación web para gestión financiera con analytics en tiempo real.",
    image: "/placeholder.svg?height=400&width=600&text=Finance+Dashboard",
    category: "Aplicaciones",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
    featured: true,
  },
  {
    id: "medicorp",
    title: "MediCorp Website",
    description: "Sitio corporativo para empresa médica con sistema de citas online.",
    image: "/placeholder.svg?height=400&width=600&text=Medical+Corporate",
    category: "Corporativo",
    tech: ["Next.js", "Sanity CMS", "Framer Motion"],
    link: "#",
    featured: false,
  },
  {
    id: "fooddelivery",
    title: "FoodDelivery App",
    description: "Aplicación de delivery con geolocalización y pagos integrados.",
    image: "/placeholder.svg?height=400&width=600&text=Food+Delivery",
    category: "Aplicaciones",
    tech: ["React Native", "Firebase", "Stripe"],
    link: "#",
    featured: false,
  },
  {
    id: "startuplanding",
    title: "StartupLanding",
    description: "Landing page de alta conversión para startup tecnológica.",
    image: "/placeholder.svg?height=400&width=600&text=Startup+Landing",
    category: "Landing Pages",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
    featured: false,
  },
  {
    id: "luxurybrand",
    title: "LuxuryBrand Store",
    description: "E-commerce premium con experiencia de compra personalizada.",
    image: "/placeholder.svg?height=400&width=600&text=Luxury+Store",
    category: "E-commerce",
    tech: ["Next.js", "Shopify", "Three.js"],
    link: "#",
    featured: true,
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-gray-900/50">
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
              💼 Nuestro Portfolio
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Proyectos que <span className="gradient-text">Inspiran</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cada proyecto es una historia de éxito. Descubre cómo hemos transformado ideas en experiencias digitales
            excepcionales
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
              onClick={() => setActiveCategory(category)}
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

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group relative ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={false}
                  >
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
                        onClick={() => window.open(`/proyecto/${project.id}`, "_blank")}
                      >
                        👀 Ver Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm"
                      >
                        📱 Detalles
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Destacado
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-yellow-400 text-sm font-semibold">{project.category}</span>
                    <Link
                      href={`/proyecto/${project.id}`}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      🔗
                    </Link>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Te gusta lo que ves?</h3>
            <p className="text-gray-300 mb-6">
              Estos son solo algunos ejemplos. Cada proyecto es único y personalizado según las necesidades del cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/34614473197?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                🚀 Crear Mi Proyecto
              </a>
              <Link href="/#portfolio" className="btn-secondary">
                📋 Ver Más Proyectos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
