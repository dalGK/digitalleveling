import type { Metadata } from "next"
import { OG_IMAGE } from "@/lib/site"
import ServicePage, { type ServiceFeature } from "@/components/sections/ServicePage"

export const metadata: Metadata = {
  title: "Gestión de Redes Sociales en Madrid | Community Manager",
  description:
    "Agencia de gestión de redes sociales en Madrid. Community management y contenido creativo para Instagram, Facebook y LinkedIn para empresas en España y Latinoamérica. Presupuesto a medida.",
  keywords: [
    "gestión redes sociales madrid",
    "community manager madrid",
    "agencia redes sociales madrid",
    "gestionar instagram empresa madrid",
    "social media manager madrid",
    "agencia social media madrid",
    "marketing redes sociales madrid",
    "contenido redes sociales empresa",
    "gestión instagram madrid",
    "community management madrid",
  ],
  alternates: {
    canonical: "https://digitalleveling.com/servicios/gestion-redes-sociales",
  },
  openGraph: {
    title: "Gestión de Redes Sociales en Madrid | Community Manager | Digital Leveling",
    description:
      "Community management profesional en Madrid. Contenido creativo para Instagram, Facebook y LinkedIn para empresas.",
    url: "https://digitalleveling.com/servicios/gestion-redes-sociales",
    images: [OG_IMAGE],
  },
}

const features: ServiceFeature[] = [
  {
    icon: "camera",
    title: "Contenido Creativo",
    description:
      "Diseño de posts, Reels, Stories y carruseles con identidad de marca consistente. Calendario editorial mensual.",
  },
  {
    icon: "message",
    title: "Community Management",
    description:
      "Gestión de comentarios, mensajes directos y menciones. Construcción de comunidad y relación con tus seguidores.",
  },
  {
    icon: "bar-chart",
    title: "Analítica y Reportes",
    description:
      "Informes mensuales de alcance, engagement, crecimiento de seguidores y rendimiento de cada publicación.",
  },
  {
    icon: "target",
    title: "Estrategia de Contenidos",
    description:
      "Plan editorial mensual alineado con tus objetivos de negocio. Contenido que genera engagement y convierte.",
  },
  {
    icon: "clapperboard",
    title: "Video y Reels",
    description:
      "Producción de contenido en video para Reels, TikTok y YouTube Shorts. El formato con mayor alcance orgánico.",
  },
  {
    icon: "link",
    title: "LinkedIn para B2B",
    description:
      "Estrategia de contenidos y networking en LinkedIn para empresas que buscan clientes corporativos.",
  },
  {
    icon: "calendar",
    title: "Planificación y Scheduling",
    description:
      "Programación automática de publicaciones en los mejores horarios según tu audiencia y plataforma.",
  },
  {
    icon: "earth",
    title: "Adaptación LATAM",
    description:
      "Contenido adaptado a cada mercado latinoamericano: México, Argentina, Colombia, Chile y más.",
  },
]

const faqs = [
  {
    question: "¿Cuántas publicaciones incluye el servicio?",
    answer:
      "Depende del plan. El plan básico incluye 12 publicaciones/mes (3 por semana). El plan avanzado incluye publicaciones diarias + Stories. Personalizamos el volumen según tus necesidades y presupuesto.",
  },
  {
    question: "¿Crean el contenido o solo lo publican?",
    answer:
      "Creamos el contenido completo: texto, diseño gráfico, edición de video y hashtags. Nos encargamos de todo para que tú te centres en tu negocio. Solo necesitamos aprobación antes de publicar.",
  },
  {
    question: "¿Gestionan TikTok?",
    answer:
      "Sí, también gestionamos TikTok. Es la red con mayor crecimiento orgánico actualmente. Podemos adaptar el contenido de Instagram Reels para TikTok y viceversa.",
  },
  {
    question: "¿Cuánto tarda en verse crecimiento en seguidores?",
    answer:
      "Con una estrategia consistente, en los primeros 3 meses se ve crecimiento notorio en engagement y seguidores. El crecimiento acelerado se logra combinando contenido orgánico con publicidad pagada.",
  },
  {
    question: "¿Puedo aprobar el contenido antes de publicarlo?",
    answer:
      "Sí. Te enviamos el calendario de contenido con anticipación para tu revisión y aprobación. Puedes solicitar cambios antes de que se publique.",
  },
]

export default function GestionRedesSocialesPage() {
  return (
    <ServicePage
      path="/servicios/gestion-redes-sociales"
      serviceName="Gestión de redes sociales"
      badge="Redes Sociales Madrid"
      title="Gestión de Redes Sociales"
      titleHighlight="Profesional"
      subtitle="Community Manager · Contenido · Instagram · LinkedIn"
      description="Gestionamos tus redes sociales con estrategia y creatividad. Community management, contenido de calidad y estrategia para empresas en Madrid, España y Latinoamérica."
      features={features}
      faqs={faqs}
      price="Presupuesto a medida · Sin permanencia mínima"
      ctaText="Gestionar mis redes"
      relatedServices={[
        { href: "/servicios/marketing-digital", label: "Marketing Digital" },
        { href: "/servicios/desarrollo-web-madrid", label: "Desarrollo Web" },
        { href: "/servicios/ecommerce", label: "E-commerce" },
        { href: "/servicios/consultoria-digital", label: "Consultoría Digital" },
      ]}
    />
  )
}
