import ServiceRequest from "@/components/sections/ServiceRequest"

interface ServiceRequestPageProps {
  params: {
    service: string
  }
}

export function generateMetadata({ params }: ServiceRequestPageProps) {
  const serviceNames = {
    "web-development": "Desarrollo Web",
    ecommerce: "E-commerce",
    "web-app": "Aplicación Web",
    marketing: "Marketing Digital",
    consulting: "Consultoría Digital",
    "social-media": "Gestión de Redes Sociales",
  }

  const serviceName = serviceNames[params.service as keyof typeof serviceNames] || "Servicio"

  return {
    title: `Solicitar ${serviceName} - Digital Leveling`,
    description: `Solicita nuestro servicio de ${serviceName}. Formulario personalizado con propuesta detallada.`,
  }
}

export default function ServiceRequestPage({ params }: ServiceRequestPageProps) {
  return <ServiceRequest serviceType={params.service} />
}
