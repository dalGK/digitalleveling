"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/projects-data"

export default function Portfolio() {
  const categories = ["Todos", "Desarrollo Web", "Cloud", "Automatización", "Analítica"]
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portafolio" className="w-full py-20 bg-dlblack">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dlgold">Nuestro Portafolio</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Proyectos destacados que demuestran nuestra experiencia y capacidad de innovación.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`mb-2 ${
                activeCategory === category
                  ? "bg-dlgold text-dlblack hover:bg-dlgold/90"
                  : "border-dlgold/50 text-white hover:bg-dlgold/10 hover:text-dlgold"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-dlgray shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/proyectos/${project.slug}`}>
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/20 text-white">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-white/20 text-white">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>
                    <Badge className="bg-dlgold/20 text-dlgold border-dlgold/30">{project.category}</Badge>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <Link href="#contacto">
            <Button className="bg-dlgold text-dlblack hover:bg-dlgold/90">Discutir su proyecto</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

