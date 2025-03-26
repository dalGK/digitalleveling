import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Leaf, Zap, Recycle } from "lucide-react"

export default function Sustainability() {
  const sustainabilityMetrics = [
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Huella de Carbono",
      description: "Nuestro sitio web está optimizado para minimizar el consumo energético y reducir emisiones de CO2.",
      value: 85,
      label: "Eficiencia Energética",
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      title: "Optimización de Recursos",
      description: "Implementamos técnicas avanzadas para reducir el consumo de recursos del servidor y del cliente.",
      value: 92,
      label: "Eficiencia de Recursos",
    },
    {
      icon: <Recycle className="h-8 w-8 text-blue-500" />,
      title: "Prácticas Sostenibles",
      description: "Nuestro enfoque de desarrollo sigue principios de sostenibilidad digital y mejora continua.",
      value: 78,
      label: "Sostenibilidad Digital",
    },
  ]

  return (
    <section id="sostenibilidad" className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sostenibilidad Digital</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprometidos con prácticas digitales sostenibles y respetuosas con el medio ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sustainabilityMetrics.map((metric, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4">{metric.icon}</div>
                <CardTitle>{metric.title}</CardTitle>
                <CardDescription>{metric.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-sm font-medium">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-background rounded-lg p-6 shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Nuestro Compromiso con la Sostenibilidad</h3>
          <p className="text-muted-foreground mb-4">
            En Digital Leveling, creemos que la tecnología debe ser una fuerza positiva para el planeta. Nuestro enfoque
            de desarrollo sostenible incluye:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Optimización de código para reducir el consumo energético</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Uso de servidores con energías renovables</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Implementación de técnicas de carga eficiente y bajo consumo</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Diseño consciente que prioriza la eficiencia y durabilidad</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

