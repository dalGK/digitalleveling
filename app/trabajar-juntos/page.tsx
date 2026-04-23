import type { Metadata } from "next"
import WorkTogether from "@/components/sections/WorkTogether"

export const metadata: Metadata = {
  title: "Planes y Precios de Desarrollo Web | Trabajar Juntos",
  description:
    "Planes de desarrollo web desde 300€. Soluciones escalables para startups, pymes y empresas en España y Latinoamérica. Elige el plan perfecto para tu negocio.",
  alternates: {
    canonical: "https://digitalleveling.com/trabajar-juntos",
  },
  openGraph: {
    title: "Planes y Precios de Desarrollo Web | Digital Leveling",
    description:
      "Planes de desarrollo web desde 300€. Soluciones para startups, pymes y empresas en España y Latinoamérica.",
    url: "https://digitalleveling.com/trabajar-juntos",
  },
}

export default function TrabajarJuntosPage() {
  return <WorkTogether />
}
