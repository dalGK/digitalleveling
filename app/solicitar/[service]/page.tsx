import { notFound } from "next/navigation"
import ServiceRequest from "@/components/sections/ServiceRequest"

interface ServiceRequestPageProps {
  params: Promise<{
    service: string
  }>
}

const serviceNames = {
  "web-development": "Desarrollo Web",
  ecommerce: "E-commerce",
  "web-app": "Aplicación Web",
  marketing: "Marketing Digital",
  consulting: "Consultoría Digital",
  "social-media": "Gestión de Redes Sociales",
}

export function generateStaticParams() {
  return Object.keys(serviceNames).map((service) => ({ service }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: ServiceRequestPageProps) {
  const { service } = await params
  const serviceName = serviceNames[service as keyof typeof serviceNames] || "Servicio"

  return {
    title: `Solicitar ${serviceName}`,
    description: `Solicita nuestro servicio de ${serviceName}. Formulario personalizado con propuesta detallada.`,
  }
}

export default async function ServiceRequestPage({ params }: ServiceRequestPageProps) {
  const { service } = await params
  if (!(service in serviceNames)) notFound()
  return <ServiceRequest serviceType={service} />
}
