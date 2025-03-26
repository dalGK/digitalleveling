"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Lightbulb, GraduationCap, Rocket, Target } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("nosotros")

  const timelineEvents = [
    {
      year: "2018",
      title: "Fundación",
      description:
        "Digital Leveling nace con la misión de transformar empresas a través de soluciones digitales innovadoras.",
    },
    {
      year: "2019",
      title: "Primeros Proyectos",
      description: "Completamos con éxito nuestros primeros proyectos de transformación digital para clientes locales.",
    },
    {
      year: "2020",
      title: "Expansión de Servicios",
      description: "Ampliamos nuestra oferta para incluir soluciones cloud y automatización de procesos.",
    },
    {
      year: "2021",
      title: "Reconocimiento Internacional",
      description: "Nuestro trabajo es reconocido internacionalmente, comenzando operaciones en nuevos mercados.",
    },
    {
      year: "2022",
      title: "Innovación Continua",
      description: "Lanzamos nuestro laboratorio de innovación para explorar tecnologías emergentes.",
    },
    {
      year: "2023",
      title: "Presente y Futuro",
      description: "Continuamos creciendo y evolucionando, siempre a la vanguardia de la transformación digital.",
    },
  ]

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de resolver problemas y crear valor.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Colaboración",
      description: "Trabajamos estrechamente con nuestros clientes para entender sus necesidades y objetivos.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excelencia",
      description: "Nos comprometemos con los más altos estándares de calidad en todo lo que hacemos.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Aprendizaje",
      description: "Invertimos continuamente en el desarrollo de nuestras habilidades y conocimientos.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Impacto",
      description: "Nos enfocamos en generar resultados tangibles y medibles para nuestros clientes.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Agilidad",
      description: "Nos adaptamos rápidamente a los cambios y evolucionamos constantemente.",
    },
  ]

  return (
    <section id="nosotros" className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conozca más sobre Digital Leveling, nuestra historia, valores y visión para el futuro.
          </p>
        </div>

        <Tabs defaultValue="nosotros" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="nosotros">Nuestra Historia</TabsTrigger>
            <TabsTrigger value="valores">Valores</TabsTrigger>
            <TabsTrigger value="equipo">Nuestro Equipo</TabsTrigger>
          </TabsList>

          <TabsContent value="nosotros" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Historia</h3>
                <p className="text-muted-foreground mb-6">
                  Digital Leveling nació con la visión de transformar la manera en que las empresas adoptan y aprovechan
                  la tecnología. Desde nuestros inicios, nos hemos dedicado a crear soluciones digitales innovadoras que
                  impulsan el crecimiento y la eficiencia de nuestros clientes.
                </p>
                <div className="space-y-6">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center font-bold">
                          {event.year}
                        </div>
                        {index < timelineEvents.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                      </div>
                      <div className="pb-6">
                        <h4 className="text-lg font-semibold">{event.title}</h4>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Digital Leveling Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="valores" className="mt-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="mb-4">{value.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="equipo" className="mt-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Nuestro Equipo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={`Team Member ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold">Nombre Apellido</h4>
                  <p className="text-primary font-medium mb-2">Cargo / Posición</p>
                  <p className="text-muted-foreground text-sm">
                    Breve descripción sobre la experiencia y especialidad de este miembro del equipo.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

