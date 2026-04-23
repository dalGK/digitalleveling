import type { Metadata } from "next"
import ServicePage from "@/components/sections/ServicePage"

export const metadata: Metadata = {
  title: "Marketing Digital en Madrid | Google Ads, Facebook Ads y SEO",
  description:
    "Agencia de marketing digital en Madrid. Google Ads, Facebook Ads, email marketing y SEO para aumentar ventas online. Gestión de campañas para empresas en España y Latinoamérica. Desde 300€/mes.",
  keywords: [
    "marketing digital madrid",
    "agencia marketing digital madrid",
    "google ads madrid",
    "facebook ads madrid",
    "publicidad online madrid",
    "sem madrid",
    "agencia publicidad digital madrid",
    "marketing online españa",
    "campañas google ads españa",
    "agencia ppc madrid",
  ],
  alternates: {
    canonical: "https://digitalleveling.com/servicios/marketing-digital",
  },
  openGraph: {
    title: "Marketing Digital en Madrid | Google Ads y Facebook Ads | Digital Leveling",
    description:
      "Agencia de marketing digital en Madrid. Google Ads, Facebook Ads, email marketing y SEO para aumentar tus ventas online.",
    url: "https://digitalleveling.com/servicios/marketing-digital",
  },
}

const features = [
  {
    icon: "🔍",
    title: "Google Ads (SEM)",
    description:
      "Campañas de búsqueda, display, shopping y YouTube Ads. Gestión orientada a ROI máximo con optimización continua.",
  },
  {
    icon: "📘",
    title: "Facebook e Instagram Ads",
    description:
      "Campañas de captación y retargeting en Meta. Segmentación avanzada para llegar a tu cliente ideal en España y Latinoamérica.",
  },
  {
    icon: "📧",
    title: "Email Marketing",
    description:
      "Automatizaciones de captación, nurturing y fidelización. Secuencias de bienvenida, carros abandonados y newsletters.",
  },
  {
    icon: "🎯",
    title: "Estrategia y Funnel",
    description:
      "Diseño completo del embudo de ventas: captación, consideración, conversión y fidelización. Todo orientado a resultados.",
  },
  {
    icon: "📊",
    title: "Analítica y Reporting",
    description:
      "Reportes mensuales claros con métricas de negocio: coste por lead, ROI, ROAS y evolución de las campañas.",
  },
  {
    icon: "🔁",
    title: "Retargeting",
    description:
      "Impacta a usuarios que ya visitaron tu web. Campañas de remarketing en Google y Meta para recuperar clientes potenciales.",
  },
  {
    icon: "🌐",
    title: "SEO On-Page y Técnico",
    description:
      "Optimización de contenidos, estructura, velocidad y Schema markup para mejorar el posicionamiento orgánico en Google.",
  },
  {
    icon: "🤝",
    title: "Landing Pages de Conversión",
    description:
      "Creamos páginas de aterrizaje optimizadas para convertir el tráfico de tus campañas en leads y ventas.",
  },
  {
    icon: "📱",
    title: "Marketing en LinkedIn",
    description:
      "Campañas B2B en LinkedIn para empresas que buscan clientes corporativos. Lead Gen Forms y sponsored content.",
  },
]

const faqs = [
  {
    question: "¿Cuánto presupuesto necesito para empezar con Google Ads?",
    answer:
      "El presupuesto mínimo recomendado para Google Ads es de 300-500€/mes en inversión publicitaria, más la gestión. Con menos presupuesto los resultados son muy limitados. Lo ideal para ver resultados consistentes es partir de 500-1.000€/mes en inversión.",
  },
  {
    question: "¿Cuándo veré resultados con el marketing digital?",
    answer:
      "Google Ads y Facebook Ads pueden generar leads desde la primera semana. El SEO requiere 3-6 meses para ver resultados significativos. El email marketing funciona desde el primer envío con una lista existente.",
  },
  {
    question: "¿Trabajan con negocios de Latinoamérica?",
    answer:
      "Sí. Gestionamos campañas para México, Argentina, Colombia, Chile, Perú y toda Latinoamérica. Conocemos los matices de cada mercado y adaptamos las estrategias a cada país.",
  },
  {
    question: "¿Qué incluye la gestión mensual?",
    answer:
      "Gestión y optimización continua de campañas, creación de anuncios, tests A/B, ajuste de pujas, análisis de competidores y reporte mensual de resultados con métricas claras de negocio.",
  },
  {
    question: "¿Hay permanencia mínima en el servicio?",
    answer:
      "No exigimos permanencia. Recomendamos al menos 3 meses para ver resultados optimizados, pero si no estás satisfecho puedes cancelar en cualquier momento.",
  },
]

export default function MarketingDigitalPage() {
  return (
    <ServicePage
      badge="📈 Marketing Digital Madrid"
      title="Marketing Digital"
      titleHighlight="en Madrid"
      subtitle="Google Ads · Facebook Ads · SEO · Email Marketing"
      description="Aumentamos tus ventas con estrategias de marketing digital basadas en datos. Campañas de Google Ads, Meta Ads y SEO para empresas en Madrid, España y toda Latinoamérica."
      features={features}
      faqs={faqs}
      price="Desde 300€/mes · Sin permanencia · Resultados medibles"
      ctaText="Quiero más ventas"
      relatedServices={[
        { href: "/servicios/desarrollo-web-madrid", label: "🌐 Desarrollo Web" },
        { href: "/servicios/ecommerce", label: "🛒 E-commerce" },
        { href: "/servicios/gestion-redes-sociales", label: "📲 Redes Sociales" },
        { href: "/servicios/consultoria-digital", label: "🚀 Consultoría Digital" },
      ]}
    />
  )
}
