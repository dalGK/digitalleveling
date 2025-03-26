"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Digital Leveling transformó completamente nuestra infraestructura tecnológica. Ahora operamos con mayor eficiencia y nuestros clientes disfrutan de una experiencia digital excepcional.",
      author: "María Rodríguez",
      position: "CTO, Empresa Financiera",
      avatar: "/placeholder.svg?height=100&width=100",
      metrics: { efficiency: "+45%", costs: "-30%", satisfaction: "+60%" },
    },
    {
      quote:
        "La implementación de soluciones de automatización desarrolladas por Digital Leveling nos permitió reducir costos operativos y mejorar la precisión de nuestros procesos.",
      author: "Carlos Méndez",
      position: "Director de Operaciones, Manufactura",
      avatar: "/placeholder.svg?height=100&width=100",
      metrics: { productivity: "+38%", errors: "-75%", roi: "280%" },
    },
    {
      quote:
        "El equipo de Digital Leveling entendió perfectamente nuestras necesidades y desarrolló una solución a medida que superó todas nuestras expectativas. Su enfoque en la innovación es incomparable.",
      author: "Laura Sánchez",
      position: "CEO, Startup Tecnológica",
      avatar: "/placeholder.svg?height=100&width=100",
      metrics: { growth: "+120%", timeToMarket: "-50%", userBase: "+85%" },
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Historias de éxito y transformación digital de empresas que confiaron en nosotros.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-10 pb-6">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary rounded-full p-3">
                <Quote className="h-6 w-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl text-center mb-8">"{testimonials[current].quote}"</blockquote>

              <div className="flex flex-wrap justify-center gap-6 mb-6">
                {Object.entries(testimonials[current].metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-3xl font-bold text-primary">{value}</p>
                    <p className="text-sm text-muted-foreground capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col items-center pb-8">
              <Avatar className="h-16 w-16 mb-4">
                <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                <AvatarFallback>
                  {testimonials[current].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="font-semibold">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].position}</p>
              </div>
            </CardFooter>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 p-0 rounded-full ${index === current ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
              />
            ))}
            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

