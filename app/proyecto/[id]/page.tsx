import ProjectDetails from "@/components/sections/ProjectDetails"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: ProjectPageProps) {
  const projectNames = {
    techstore: "TechStore Pro - E-commerce Tecnológico",
    financeapp: "FinanceApp Dashboard - Gestión Financiera",
    medicorp: "MediCorp Website - Portal Médico",
    fooddelivery: "FoodDelivery App - Aplicación de Delivery",
    startuplanding: "StartupLanding - Landing Page de Conversión",
    luxurybrand: "LuxuryBrand Store - E-commerce Premium",
  }

  const projectName = projectNames[params.id as keyof typeof projectNames] || "Proyecto"

  return {
    title: `${projectName} - Digital Leveling`,
    description: `Caso de estudio detallado: ${projectName}. Descubre cómo desarrollamos este proyecto exitoso.`,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectDetails projectId={params.id as any} />
}
