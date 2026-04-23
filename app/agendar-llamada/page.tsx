import type { Metadata } from "next"
import ScheduleCall from "@/components/sections/ScheduleCall"

export const metadata: Metadata = {
  title: "Agendar Llamada Gratuita | Consulta tu Proyecto Web",
  description:
    "Agenda una llamada gratuita con nuestro equipo de desarrollo web en Madrid. Sin compromiso. Analizamos tu proyecto y te proponemos la mejor solución digital.",
  alternates: {
    canonical: "https://digitalleveling.com/agendar-llamada",
  },
  openGraph: {
    title: "Agendar Llamada Gratuita | Digital Leveling",
    description: "Reserva tu consulta gratuita con la agencia de desarrollo web Digital Leveling. Madrid.",
    url: "https://digitalleveling.com/agendar-llamada",
  },
}

export default function AgendarLlamadaPage() {
  return <ScheduleCall />
}
