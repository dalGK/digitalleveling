import type { Metadata } from "next"
import ServicePage from "@/components/sections/ServicePage"

export const metadata: Metadata = {
  title: "Consultoría Digital en Madrid | Estrategia Web y SEO para Empresas",
  description:
    "Consultoría digital profesional en Madrid. Auditoría web, estrategia SEO, plan de marketing digital y hoja de ruta tecnológica para empresas en España y Latinoamérica. Desde 300€.",
  keywords: [
    "consultoría digital madrid",
    "consultoria digital empresas madrid",
    "consultoria seo madrid",
    "auditoria web madrid",
    "estrategia digital madrid",
    "consultoria marketing digital madrid",
    "asesoría digital madrid",
    "transformacion digital madrid",
    "plan marketing digital madrid",
    "consultor digital madrid",
  ],
  alternates: {
    canonical: "https://digitalleveling.com/servicios/consultoria-digital",
  },
  openGraph: {
    title: "Consultoría Digital en Madrid | Auditoría Web y Estrategia SEO | Digital Leveling",
    description:
      "Consultoría digital profesional en Madrid. Auditoría web, estrategia SEO y plan de marketing para empresas en España y Latinoamérica.",
    url: "https://digitalleveling.com/servicios/consultoria-digital",
  },
}

const features = [
  {
    icon: "🔍",
    title: "Auditoría Web Completa",
    description:
      "Análisis técnico, SEO, UX y conversión de tu web actual. Identificamos todos los problemas y oportunidades de mejora.",
  },
  {
    icon: "📊",
    title: "Estrategia SEO",
    description:
      "Investigación de palabras clave, análisis de competencia, plan de contenidos y hoja de ruta para posicionar en Google.",
  },
  {
    icon: "🎯",
    title: "Plan de Marketing Digital",
    description:
      "Estrategia integral: canales de captación, presupuesto, KPIs, métricas y plan de acción para los próximos 12 meses.",
  },
  {
    icon: "🗺️",
    title: "Hoja de Ruta Tecnológica",
    description:
      "Definición de la arquitectura tecnológica ideal para tu negocio: stack, integraciones, escalabilidad y costes.",
  },
  {
    icon: "📈",
    title: "Análisis de Competencia",
    description:
      "Benchmarking detallado: qué están haciendo tus competidores en SEO, ads, contenido y redes sociales.",
  },
  {
    icon: "💡",
    title: "CRO y Optimización de Conversión",
    description:
      "Análisis de embudos, pruebas A/B, mapas de calor y recomendaciones para convertir más visitantes en clientes.",
  },
  {
    icon: "🔢",
    title: "Definición de KPIs",
    description:
      "Establecemos métricas de negocio claras: coste de adquisición, LTV, tasa de conversión y objetivos medibles.",
  },
  {
    icon: "🤝",
    title: "Acompañamiento Continuo",
    description:
      "Reuniones de seguimiento mensuales, revisión de resultados y ajuste de estrategia según la evolución del negocio.",
  },
  {
    icon: "🌍",
    title: "Estrategia Internacional",
    description:
      "Plan de expansión digital para mercados de España y Latinoamérica con adaptación local para cada país.",
  },
]

const faqs = [
  {
    question: "¿Qué incluye una auditoría web?",
    answer:
      "Analizamos SEO técnico, velocidad, estructura de URLs, meta tags, contenido, experiencia de usuario, conversión, analítica, presencia en redes sociales y estrategia de la competencia. Entregamos un informe detallado con prioridades de acción.",
  },
  {
    question: "¿Para qué tipo de empresa es la consultoría digital?",
    answer:
      "Para cualquier empresa que quiera mejorar su presencia online: startups que necesitan estrategia desde cero, pymes que quieren crecer digitalmente y empresas consolidadas que quieren optimizar sus resultados.",
  },
  {
    question: "¿Cuánto dura el proceso de consultoría?",
    answer:
      "Una sesión de consultoría puntual: 1-2 horas. Una auditoría completa con informe: 1 semana. Un plan estratégico completo: 2-3 semanas. También ofrecemos acompañamiento mensual continuo.",
  },
  {
    question: "¿Trabajan con empresas de Latinoamérica?",
    answer:
      "Sí. Trabajamos con empresas de México, Argentina, Colombia, Chile y toda Latinoamérica. La consultoría es 100% remota y adaptamos las estrategias al mercado de cada país.",
  },
  {
    question: "¿Implementan las recomendaciones o solo las dan?",
    answer:
      "Podemos hacer solo la consultoría estratégica, o también implementar las recomendaciones. Muchos clientes contratan primero la consultoría y luego nos encargan el desarrollo o las campañas de marketing.",
  },
]

export default function ConsultoriaDigitalPage() {
  return (
    <ServicePage
      badge="🚀 Consultoría Digital Madrid"
      title="Consultoría Digital"
      titleHighlight="para Empresas"
      subtitle="Auditoría Web · Estrategia SEO · Plan Marketing · KPIs"
      description="Transformamos la presencia digital de tu empresa con estrategia, datos y experiencia. Auditoría web completa, plan de marketing y hoja de ruta tecnológica para Madrid, España y Latinoamérica."
      features={features}
      faqs={faqs}
      price="Desde 300€ · Primera sesión de diagnóstico gratuita"
      ctaText="Solicitar diagnóstico gratis"
      relatedServices={[
        { href: "/servicios/desarrollo-web-madrid", label: "🌐 Desarrollo Web" },
        { href: "/servicios/marketing-digital", label: "📈 Marketing Digital" },
        { href: "/servicios/ecommerce", label: "🛒 E-commerce" },
        { href: "/servicios/gestion-redes-sociales", label: "📲 Redes Sociales" },
      ]}
    />
  )
}
