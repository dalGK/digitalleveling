import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Cpu, LineChart, Shield, Rocket, Database, Layers } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-dlgold" />,
      title: "Desarrollo Web",
      description:
        "Sitios y aplicaciones web de alto rendimiento con las últimas tecnologías y enfoque en experiencia de usuario.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-dlgold" />,
      title: "Cloud Computing",
      description:
        "Soluciones en la nube escalables y seguras para optimizar operaciones y reducir costos de infraestructura.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-dlgold" />,
      title: "Automatización",
      description: "Automatización de procesos empresariales para aumentar eficiencia y reducir errores humanos.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-dlgold" />,
      title: "Analítica de Datos",
      description:
        "Transformación de datos en insights accionables con visualizaciones avanzadas y dashboards personalizados.",
    },
    {
      icon: <Shield className="h-10 w-10 text-dlgold" />,
      title: "Ciberseguridad",
      description: "Protección integral contra amenazas digitales con soluciones proactivas y auditorías de seguridad.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-dlgold" />,
      title: "Transformación Digital",
      description: "Estrategias completas para evolucionar negocios tradicionales hacia modelos digitales innovadores.",
    },
    {
      icon: <Database className="h-10 w-10 text-dlgold" />,
      title: "Gestión de Datos",
      description: "Soluciones de almacenamiento, procesamiento y análisis de datos optimizadas para cada necesidad.",
    },
    {
      icon: <Layers className="h-10 w-10 text-dlgold" />,
      title: "Consultoría Tecnológica",
      description:
        "Asesoramiento experto para implementar las mejores soluciones tecnológicas según objetivos de negocio.",
    },
  ]

  return (
    <section id="servicios" className="w-full py-20 bg-dlgray/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dlgold">Nuestros Servicios</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Soluciones digitales completas diseñadas para impulsar la innovación y el crecimiento de su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none bg-dlgray shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-white/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

