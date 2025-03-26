"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Calculator, Calendar, LineChart, ShieldCheck, Smartphone } from "lucide-react"

export default function Features() {
  const [activeTab, setActiveTab] = useState("chatbot")

  const features = [
    {
      id: "chatbot",
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Chatbot IA",
      description:
        "Asistente virtual inteligente para atención inicial a visitantes y resolución de consultas frecuentes.",
      image: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Atención 24/7 a visitantes y clientes",
        "Respuestas personalizadas basadas en comportamiento",
        "Integración con sistemas de tickets y CRM",
        "Análisis de sentimiento y derivación a agentes humanos",
      ],
    },
    {
      id: "calculator",
      icon: <Calculator className="h-10 w-10 text-primary" />,
      title: "Calculadora ROI",
      description:
        "Herramienta interactiva para calcular el retorno de inversión de nuestros servicios de automatización.",
      image: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Estimación precisa de costos y beneficios",
        "Visualización de ahorros a corto y largo plazo",
        "Comparativas con soluciones tradicionales",
        "Personalización según industria y tamaño de empresa",
      ],
    },
    {
      id: "dashboard",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Dashboard Demo",
      description: "Visualización interactiva de datos empresariales para demostrar nuestras capacidades analíticas.",
      image: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Visualización de KPIs en tiempo real",
        "Filtros interactivos y drill-down de datos",
        "Alertas y notificaciones configurables",
        "Exportación de informes y compartición segura",
      ],
    },
    {
      id: "calendar",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Reserva de Consultas",
      description: "Sistema integrado para agendar consultas iniciales con nuestros especialistas.",
      image: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Selección de fecha y hora según disponibilidad",
        "Confirmación automática por email y SMS",
        "Recordatorios programados",
        "Integración con calendarios corporativos",
      ],
    },
    {
      id: "security",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Demo Ciberseguridad",
      description: "Demostración en vivo de nuestras capacidades en protección y detección de amenazas.",
      image: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Análisis de vulnerabilidades en tiempo real",
        "Simulación de ataques controlados",
        "Estrategias de mitigación y respuesta",
        "Evaluación de madurez en seguridad",
      ],
    },
    {
      id: "ar",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Realidad Aumentada",
      description: "Visualización de soluciones tecnológicas en el entorno real del cliente mediante RA.",
      image: "/placeholder.svg?height=600&width=800",
      benefits: [
        "Visualización de equipos y soluciones a escala real",
        "Interacción con componentes virtuales",
        "Simulación de flujos de trabajo optimizados",
        "Experiencia inmersiva sin instalaciones complejas",
      ],
    },
  ]

  const currentFeature = features.find((f) => f.id === activeTab) || features[0]

  return (
    <section id="caracteristicas" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Características Avanzadas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nuestras herramientas interactivas y demostraciones que muestran nuestras capacidades tecnológicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="border-none shadow-md h-full">
              <CardHeader>
                <CardTitle>Nuestras Herramientas</CardTitle>
                <CardDescription>Seleccione una característica para explorar en detalle</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="chatbot" orientation="vertical" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="flex flex-col h-auto w-full space-y-2">
                    {features.map((feature) => (
                      <TabsTrigger key={feature.id} value={feature.id} className="justify-start w-full">
                        <div className="flex items-center">
                          <div className="mr-3">{feature.icon}</div>
                          <div className="text-left">
                            <p className="font-medium">{feature.title}</p>
                          </div>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="border-none shadow-md h-full">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="mb-2">{currentFeature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{currentFeature.title}</h3>
                    <p className="text-muted-foreground mb-6">{currentFeature.description}</p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold">Beneficios:</h4>
                      <ul className="space-y-2">
                        {currentFeature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button>Solicitar Demostración</Button>
                  </div>

                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={currentFeature.image || "/placeholder.svg"}
                      alt={currentFeature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

