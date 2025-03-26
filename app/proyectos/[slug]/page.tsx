import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/lib/projects-data"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          href="/#portafolio"
          className="inline-flex items-center text-white hover:text-dlgold transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al portafolio
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div>
            <div className="mb-6">
              <Badge className="mb-4 bg-dlgold text-dlblack">{project.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-white/80 text-lg mb-6">{project.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-dlgold mb-3">Desafío</h2>
              <p className="text-white/80 mb-6">{project.challenge}</p>

              <h2 className="text-xl font-semibold text-dlgold mb-3">Solución</h2>
              <p className="text-white/80 mb-6">{project.solution}</p>

              <h2 className="text-xl font-semibold text-dlgold mb-3">Resultados</h2>
              <ul className="space-y-2 text-white/80 mb-6">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-dlgold flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-dlgold mb-3">Tecnologías utilizadas</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-dlgold/50 text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="bg-dlgold text-dlblack hover:bg-dlgold/90">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver proyecto en vivo
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-dlgray/20 pt-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Más proyectos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevProject && (
              <Link href={`/proyectos/${prevProject.slug}`} className="group">
                <div className="flex items-center p-4 bg-dlgray rounded-lg transition-colors hover:bg-dlgray/80">
                  <ChevronLeft className="h-6 w-6 text-dlgold mr-4" />
                  <div>
                    <p className="text-white/60 text-sm">Proyecto anterior</p>
                    <p className="text-white font-medium group-hover:text-dlgold transition-colors">
                      {prevProject.title}
                    </p>
                  </div>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link href={`/proyectos/${nextProject.slug}`} className="group md:ml-auto">
                <div className="flex items-center p-4 bg-dlgray rounded-lg transition-colors hover:bg-dlgray/80">
                  <div className="text-right">
                    <p className="text-white/60 text-sm">Proyecto siguiente</p>
                    <p className="text-white font-medium group-hover:text-dlgold transition-colors">
                      {nextProject.title}
                    </p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-dlgold ml-4" />
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Interesado en un proyecto similar?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Podemos ayudarle a desarrollar una solución personalizada adaptada a las necesidades específicas de su
            empresa.
          </p>
          <Link href="/#contacto">
            <Button className="bg-dlgold text-dlblack hover:bg-dlgold/90">Contactar ahora</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

