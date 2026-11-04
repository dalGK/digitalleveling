import type { Metadata } from "next"
import { OG_IMAGE } from "@/lib/site"
import ServicePage from "@/components/sections/ServicePage"

export const metadata: Metadata = {
  title: "Automatización de WhatsApp y Reservas Online",
  description:
    "Automatizamos WhatsApp y las reservas de tu negocio: respuestas a preguntas frecuentes, solicitudes de cita y confirmaciones automáticas. Diagnóstico gratuito en Madrid y toda España.",
  alternates: {
    canonical: "https://digitalleveling.com/servicios/automatizacion",
  },
  openGraph: {
    title: "Automatización de WhatsApp y Reservas Online | Digital Leveling",
    description:
      "Respuestas automáticas en WhatsApp, reservas online y confirmaciones sin llamadas. Para negocios que quieren atender mejor y ahorrar tiempo.",
    url: "https://digitalleveling.com/servicios/automatizacion",
    images: [OG_IMAGE],
  },
}

const features = [
  {
    icon: "💬",
    title: "Respuestas automáticas en WhatsApp",
    description:
      "Horarios, precios, ubicación, servicios: las preguntas de siempre se responden al momento, también fuera de horario.",
  },
  {
    icon: "🗓️",
    title: "Solicitud de cita por WhatsApp",
    description:
      "El cliente pide cita en la misma conversación y tú recibes la solicitud ordenada, con los datos que necesitas.",
  },
  {
    icon: "🙋",
    title: "Paso a una persona cuando hace falta",
    description:
      "Si la consulta no es de las habituales, la conversación pasa a tu equipo con todo el contexto. Nadie se queda sin respuesta.",
  },
  {
    id: "reservas",
    icon: "📅",
    title: "Sistema de reservas online",
    description:
      "Tus clientes reservan desde tu web cuando les viene bien, solo en los huecos que tienes libres. Sin llamadas ni mensajes de ida y vuelta.",
  },
  {
    icon: "✅",
    title: "Confirmaciones y recordatorios",
    description:
      "Cada reserva recibe su confirmación automática y un recordatorio antes de la cita, para reducir olvidos y huecos vacíos.",
  },
  {
    icon: "🔧",
    title: "Adaptado a tu forma de trabajar",
    description:
      "Partimos de cómo atiendes hoy a tus clientes y automatizamos solo lo que te ahorra tiempo de verdad.",
  },
]

const faqs = [
  {
    question: "¿Qué tipo de negocios pueden automatizar WhatsApp y las reservas?",
    answer:
      "Cualquier negocio que reciba muchas consultas repetidas o trabaje con citas: clínicas, centros de estética, talleres, academias, restaurantes, despachos o servicios a domicilio, entre otros.",
  },
  {
    question: "¿Necesito WhatsApp Business?",
    answer:
      "Sí. Trabajamos sobre WhatsApp Business y, cuando la automatización lo requiere, sobre la plataforma oficial de WhatsApp para empresas, que puede tener costes de Meta según el volumen de mensajes. Te los explicamos antes de empezar.",
  },
  {
    question: "¿La automatización sustituye la atención personal?",
    answer:
      "No. Se encarga de lo repetitivo para que tú dediques tu tiempo a lo que importa. Cuando una consulta lo necesita, pasa a una persona de tu equipo.",
  },
  {
    question: "¿Puedo conectar las reservas con el calendario que ya uso?",
    answer:
      "En la mayoría de casos, sí. En el diagnóstico revisamos las herramientas que usas y te proponemos la integración más sencilla.",
  },
  {
    question: "¿Cuánto cuesta automatizar WhatsApp o las reservas?",
    answer:
      "Depende de lo que haya que automatizar y de las herramientas que ya tengas. Tras un diagnóstico gratuito te enviamos una propuesta por escrito con alcance y presupuesto, sin compromiso.",
  },
]

export default function AutomatizacionPage() {
  return (
    <ServicePage
      path="/servicios/automatizacion"
      serviceName="Automatización de WhatsApp"
      badge="⚙️ Automatización"
      title="Automatización de WhatsApp"
      titleHighlight="y reservas online"
      subtitle="Respuestas automáticas · Solicitud de citas · Reservas · Confirmaciones"
      description="Tus clientes preguntan, reservan y reciben confirmación sin que tengas que estar pendiente del móvil. Automatizamos la atención repetitiva de tu negocio para que ganes tiempo y no pierdas oportunidades."
      features={features}
      faqs={faqs}
      price="Presupuesto a medida · Diagnóstico gratuito"
      ctaText="Pedir presupuesto"
      relatedServices={[
        { href: "/servicios/desarrollo-web-madrid", label: "🌐 Diseño y Desarrollo Web" },
        { href: "/servicios/aplicaciones-web", label: "⚙️ Aplicaciones Web a Medida" },
        { href: "/servicios/seo", label: "🔍 SEO y Posicionamiento" },
      ]}
    />
  )
}
