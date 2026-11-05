import { notFound } from "next/navigation"
import ProjectDetails from "@/components/sections/ProjectDetails"
import type { ComponentProps } from "react"
import { features } from "@/lib/site"

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const projectNames = {
    techstore: "TechStore Pro - E-commerce Tecnológico",
    financeapp: "FinanceApp Dashboard - Gestión Financiera",
    medicorp: "MediCorp Website - Portal Médico",
    fooddelivery: "FoodDelivery App - Aplicación de Delivery",
    startuplanding: "StartupLanding - Landing Page de Conversión",
    luxurybrand: "LuxuryBrand Store - E-commerce Premium",
  }

  const projectName = projectNames[id as keyof typeof projectNames] || "Proyecto"

  return {
    title: projectName,
    description: `Caso de estudio detallado: ${projectName}. Descubre cómo desarrollamos este proyecto exitoso.`,
    // Proyectos de ejemplo: no indexar hasta sustituirlos por casos reales
    robots: { index: false, follow: true },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  if (!features.showExampleProjects) notFound()
  const { id } = await params
  return <ProjectDetails projectId={id as ComponentProps<typeof ProjectDetails>["projectId"]} />
}
