import type { Metadata } from "next"
import { OG_IMAGE } from "@/lib/site"
import ServicePage, { type ServiceFeature } from "@/components/sections/ServicePage"

export const metadata: Metadata = {
  title: "Diseño y Desarrollo Web en Madrid",
  description:
    "Diseño y desarrollo web profesional en Madrid. Webs a medida con Next.js y React, optimizadas para SEO y conversión, con trato directo con quien programa tu web. Desde 300€.",
  keywords: [
    "diseño web españa",
    "desarrollo web españa",
    "páginas web para empresas",
    "diseño web profesional",
    "desarrollo web madrid",
    "diseño web madrid",
    "crear página web empresa",
    "agencia web españa",
    "next.js españa",
    "web profesional negocio",
  ],
  alternates: {
    canonical: "https://digitalleveling.com/servicios/desarrollo-web-madrid",
  },
  openGraph: {
    title: "Diseño y Desarrollo Web en Madrid | Digital Leveling",
    description:
      "Diseño y desarrollo web a medida en Madrid con Next.js y React. Webs rápidas, responsivas y optimizadas para posicionar en Google. Desde 300€.",
    url: "https://digitalleveling.com/servicios/desarrollo-web-madrid",
    images: [OG_IMAGE],
  },
}

const features: ServiceFeature[] = [
  {
    icon: "zap",
    title: "Velocidad y Performance",
    description:
      "Sitios web ultrarrápidos con Next.js que cargan en menos de 1 segundo. Core Web Vitals optimizados para Google.",
  },
  {
    icon: "smartphone",
    title: "Diseño Responsivo Mobile-First",
    description:
      "Tu web perfecta en cualquier dispositivo: móvil, tablet y escritorio. Más del 70% del tráfico viene de móvil.",
  },
  {
    icon: "search",
    title: "SEO Técnico Incluido",
    description:
      "Estructura semántica, meta tags, Schema markup, sitemap y robots.txt configurados desde el primer día.",
  },
  {
    icon: "palette",
    title: "Diseño UI/UX Profesional",
    description:
      "Interfaces modernas, atractivas y orientadas a la conversión. Tu web como herramienta de ventas, no solo presencia.",
  },
  {
    icon: "lock",
    title: "Seguridad y HTTPS",
    description: "SSL, protección contra ataques, copias de seguridad automáticas y actualizaciones de seguridad.",
  },
  {
    icon: "bar-chart",
    title: "Analytics y Seguimiento",
    description:
      "Integración con Google Analytics 4, Search Console y herramientas de seguimiento de conversiones.",
  },
  {
    icon: "hammer",
    title: "Panel de Administración",
    description:
      "Actualiza tu contenido de forma autónoma con un CMS intuitivo. Sin conocimientos técnicos necesarios.",
  },
  {
    icon: "rocket",
    title: "Despliegue y Hosting",
    description: "Deploy en Vercel o AWS con CDN global. Tu web disponible 24/7 con uptime del 99.9%.",
  },
  {
    icon: "handshake",
    title: "Soporte Post-Lanzamiento",
    description:
      "30 días de soporte incluido tras el lanzamiento. Planes de mantenimiento mensual disponibles.",
  },
]

const faqs = [
  {
    question: "¿Cuánto cuesta hacer una página web en Madrid?",
    answer:
      "El precio depende de la complejidad. Una landing page o web corporativa básica comienza desde 300€, un sitio web completo con varias páginas desde 800€ y proyectos personalizados desde 1.500€. Te enviamos un presupuesto exacto y sin compromiso.",
  },
  {
    question: "¿Cuánto tiempo tarda el desarrollo de una web?",
    answer:
      "Una landing page sencilla: 1-2 semanas. Un sitio web corporativo completo: 3-4 semanas. Un proyecto con funcionalidades complejas: 6-10 semanas. Siempre te damos un cronograma detallado antes de empezar.",
  },
  {
    question: "¿Usan WordPress o desarrollan a medida?",
    answer:
      "Desarrollamos principalmente con Next.js y React (tecnología de vanguardia), que ofrece mucho mejor performance y SEO que WordPress. Para clientes que necesitan editar contenido frecuentemente, podemos integrar un CMS headless como Sanity o Contentful.",
  },
  {
    question: "¿El sitio web aparecerá en Google?",
    answer:
      "Todos nuestros sitios incluyen SEO técnico básico: estructura correcta, meta tags, Schema markup, sitemap, velocidad optimizada. Esto da la base para posicionar. Para campañas de posicionamiento avanzadas, ofrecemos servicios SEO adicionales.",
  },
  {
    question: "¿Ofrecen mantenimiento y actualizaciones?",
    answer:
      "Sí. Todos los proyectos incluyen 30 días de soporte gratuito. Después ofrecemos planes de mantenimiento mensual desde 50€/mes que incluyen actualizaciones, backups, monitoreo y soporte.",
  },
]

export default function DesarrolloWebMadridPage() {
  return (
    <ServicePage
      path="/servicios/desarrollo-web-madrid"
      serviceName="Diseño y desarrollo web"
      badge="Diseño y Desarrollo Web"
      title="Diseño y desarrollo web"
      titleHighlight="en Madrid"
      subtitle="Next.js · React · Diseño Responsivo · SEO Técnico Incluido"
      description="Creamos páginas web rápidas, modernas y optimizadas para Google. Desde landing pages hasta sitios corporativos completos. Trabajamos con empresas en España e internacionalmente."
      features={features}
      faqs={faqs}
      price="Desde 300€ · Presupuesto personalizado en 24 horas"
      ctaText="Solicitar presupuesto gratuito"
      relatedServices={[
        { href: "/servicios/seo", label: "SEO y Posicionamiento Web" },
        { href: "/servicios/aplicaciones-web", label: "Aplicaciones Web a Medida" },
        { href: "/servicios/ecommerce", label: "E-commerce" },
        { href: "/servicios/marketing-digital", label: "Marketing Digital" },
      ]}
    />
  )
}
