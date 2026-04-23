import type { Metadata } from "next"
import CustomConsultation from "@/components/sections/CustomConsultation"

export const metadata: Metadata = {
  title: "Consultoría Digital Personalizada en Madrid | Estrategia Web",
  description:
    "Consultoría digital personalizada para tu negocio. Auditoría web, estrategia SEO, plan de marketing y hoja de ruta tecnológica. Especialistas en Madrid y Latinoamérica.",
  alternates: {
    canonical: "https://digitalleveling.com/consulta-personalizada",
  },
  openGraph: {
    title: "Consultoría Digital Personalizada | Digital Leveling Madrid",
    description:
      "Consultoría digital personalizada: auditoría web, estrategia SEO y plan de marketing para tu negocio en España y Latinoamérica.",
    url: "https://digitalleveling.com/consulta-personalizada",
  },
}

export default function ConsultaPersonalizadaPage() {
  return <CustomConsultation />
}
