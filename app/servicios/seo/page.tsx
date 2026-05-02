import type { Metadata } from "next"
import ServicePage from "@/components/sections/ServicePage"

export const metadata: Metadata = {
  title: "SEO para Empresas en España | Posicionamiento Web en Google",
  description:
    "Servicio SEO para empresas en España. Auditoría SEO, posicionamiento web, SEO técnico, contenidos y link building para que tu negocio aparezca primero en Google. Presupuesto gratuito.",
  keywords: [
    "seo españa",
    "agencia seo españa",
    "seo para empresas",
    "posicionamiento web españa",
    "posicionamiento en google españa",
    "seo madrid",
    "seo para negocios",
    "auditoria seo",
    "consultoria seo",
    "seo tecnico",
    "agencia posicionamiento web",
    "mejorar posicionamiento google",
  ],
  alternates: {
    canonical: "https://digitalleveling.com/servicios/seo",
  },
  openGraph: {
    title: "SEO para Empresas en España | Digital Leveling",
    description:
      "Servicios SEO profesionales para empresas en España. Posicionamos tu web en Google con estrategias basadas en datos y resultados medibles.",
    url: "https://digitalleveling.com/servicios/seo",
  },
}

const features = [
  {
    icon: "🔍",
    title: "Auditoría SEO Completa",
    description:
      "Análisis técnico y de contenido de tu web. Detectamos errores, oportunidades y prioridades para mejorar tu posicionamiento en Google desde el primer día.",
  },
  {
    icon: "⚡",
    title: "SEO Técnico",
    description:
      "Optimización de velocidad, Core Web Vitals, estructura de URLs, datos estructurados y rastreabilidad para que Google indexe correctamente cada página de tu web.",
  },
  {
    icon: "✍️",
    title: "Estrategia de Contenidos",
    description:
      "Investigación de palabras clave, planificación editorial y contenido optimizado para posicionar en Google y convertir al lector en cliente.",
  },
  {
    icon: "🔗",
    title: "Link Building",
    description:
      "Construcción de autoridad web con enlaces de calidad. Estrategias naturales que incrementan la relevancia de tu dominio ante Google.",
  },
  {
    icon: "📍",
    title: "SEO Local",
    description:
      "Posicionamiento para búsquedas locales en España. Optimización de Google Business Profile, consistencia NAP y presencia en directorios relevantes.",
  },
  {
    icon: "🌍",
    title: "SEO Internacional",
    description:
      "Estrategias para posicionarte en mercados internacionales. Implementación de hreflang, estructura multiidioma y optimización por país o región.",
  },
  {
    icon: "📊",
    title: "Análisis de Competencia",
    description:
      "Estudiamos a tus competidores para detectar sus debilidades y las oportunidades que puedes aprovechar para superarlos en los resultados de búsqueda.",
  },
  {
    icon: "📈",
    title: "Informes Mensuales",
    description:
      "Reporting claro con posiciones, tráfico orgánico, conversiones y evolución. Siempre sabes qué estamos haciendo y qué resultados estamos generando.",
  },
  {
    icon: "🎯",
    title: "Optimización de Conversión",
    description:
      "El tráfico solo tiene valor si convierte. Combinamos SEO con principios de UX y CRO para que las visitas orgánicas se transformen en clientes.",
  },
]

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el SEO en dar resultados?",
    answer:
      "El SEO es una inversión a medio-largo plazo. Las mejoras técnicas tienen impacto relativamente rápido (semanas). Las posiciones para keywords competitivas suelen consolidarse entre los 3 y 6 meses. Para sectores muy competitivos, un posicionamiento sólido requiere entre 6 y 12 meses de trabajo constante.",
  },
  {
    question: "¿Cuánto cuesta el SEO para una empresa en España?",
    answer:
      "Nuestros servicios SEO empiezan desde 300€/mes para proyectos pequeños con alcance local. Estrategias más completas con contenidos, link building y reporting detallado van de 500€ a 1.500€/mes según la competencia del sector y los objetivos de posicionamiento.",
  },
  {
    question: "¿Qué diferencia hay entre SEO y SEM (Google Ads)?",
    answer:
      "El SEO es posicionamiento orgánico: apareces en Google sin pagar por cada clic. El SEM son anuncios de pago que generan tráfico inmediato pero cesan cuando paras la inversión. El SEO tiene un coste constante pero genera tráfico duradero y acumulativo. La combinación estratégica de ambos es frecuentemente la más efectiva.",
  },
  {
    question: "¿Pueden hacer SEO si mi web está en WordPress, Shopify u otra plataforma?",
    answer:
      "Sí. Trabajamos con cualquier plataforma: WordPress, Shopify, Next.js, Wix, Squarespace o webs personalizadas. Adaptamos la estrategia técnica a las posibilidades de cada sistema sin necesidad de migraciones.",
  },
  {
    question: "¿Garantizan aparecer en la primera posición de Google?",
    answer:
      "Ninguna agencia seria puede garantizar posiciones concretas, ya que Google utiliza más de 200 factores en su algoritmo. Lo que garantizamos es una metodología basada en datos, transparencia total sobre el trabajo realizado y resultados medibles y crecientes a lo largo del tiempo.",
  },
  {
    question: "¿Trabajáis el SEO para negocios fuera de España?",
    answer:
      "Sí. Además de nuestro enfoque principal en España, desarrollamos estrategias de SEO internacional para clientes que quieren posicionarse en otros mercados. Implementamos hreflang, estructuras multipaís y estrategias de contenido adaptadas a cada mercado objetivo.",
  },
]

export default function SEOPage() {
  return (
    <ServicePage
      badge="🔍 SEO para Empresas"
      title="SEO y Posicionamiento Web"
      titleHighlight="para Empresas en España"
      subtitle="Auditoría SEO · SEO Técnico · Contenidos · Link Building · Reporting Mensual"
      description="Posicionamos tu negocio en los primeros resultados de Google con estrategias SEO basadas en datos y orientadas a resultados. Trabajamos con empresas en España y con clientes internacionales."
      features={features}
      faqs={faqs}
      price="Desde 300€/mes · Presupuesto personalizado en 24 horas"
      ctaText="Solicitar auditoría SEO gratuita"
      relatedServices={[
        { href: "/servicios/desarrollo-web-madrid", label: "🌐 Diseño y Desarrollo Web" },
        { href: "/servicios/aplicaciones-web", label: "⚙️ Aplicaciones Web a Medida" },
        { href: "/servicios/consultoria-digital", label: "🚀 Consultoría Digital" },
        { href: "/servicios/marketing-digital", label: "📈 Marketing Digital" },
      ]}
    />
  )
}
