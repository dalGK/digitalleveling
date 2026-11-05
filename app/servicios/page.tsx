import type { Metadata } from "next"
import { OG_IMAGE } from "@/lib/site"
import Link from "next/link"
import BrandIcon, { type IconName } from "@/components/ui/BrandIcon"

interface ServiceCard {
  href: string
  icon: IconName
  badge?: string
  title: string
  description: string
  price: string
  tags?: string[]
}

export const metadata: Metadata = {
  title: "Servicios de Diseño Web, SEO y Automatización para Empresas",
  description:
    "Diseño web, SEO, automatización de WhatsApp y reservas, aplicaciones a medida, tiendas online y Google Ads para empresas en España. Diagnóstico y presupuesto gratuitos.",
  alternates: {
    canonical: "https://digitalleveling.com/servicios",
  },
  openGraph: {
    title: "Servicios de Diseño Web y SEO para Empresas | Digital Leveling",
    description:
      "Diseño web profesional, SEO y soluciones digitales para empresas en España e internacionalmente.",
    url: "https://digitalleveling.com/servicios",
    images: [OG_IMAGE],
  },
}

const primaryServices: ServiceCard[] = [
  {
    href: "/servicios/desarrollo-web-madrid",
    icon: "globe",
    badge: "Servicio Principal",
    title: "Diseño y Desarrollo Web",
    description:
      "Páginas web profesionales, rápidas y diseñadas para convertir. Construidas con Next.js y React, optimizadas para Google desde el primer día.",
    price: "Desde 300€",
    tags: ["Next.js", "React", "SEO Incluido", "Responsivo"],
  },
  {
    href: "/servicios/seo",
    icon: "search",
    badge: "Servicio Principal",
    title: "SEO y Posicionamiento Web",
    description:
      "Estrategias SEO para ganar visibilidad en Google y atraer clientes de forma orgánica. Auditoría, técnica, contenidos y reporting mensual.",
    price: "Desde 300€/mes",
    tags: ["Auditoría SEO", "SEO Técnico", "Contenidos", "Reporting"],
  },
  {
    href: "/servicios/automatizacion",
    icon: "settings",
    badge: "Automatización",
    title: "Automatización de WhatsApp y Reservas",
    description:
      "Respuestas automáticas a las preguntas frecuentes, solicitudes de cita y reservas online con confirmación. Atiende mejor a tus clientes y gana tiempo.",
    price: "Presupuesto a medida",
    tags: ["WhatsApp", "Reservas", "Confirmaciones", "Recordatorios"],
  },
]

const specializedService: ServiceCard = {
  href: "/servicios/aplicaciones-web",
  icon: "settings",
  badge: "Solución Especializada",
  title: "Aplicaciones Web a Medida",
  description:
    "Plataformas digitales, herramientas internas, SaaS y automatizaciones desarrolladas a medida para los procesos específicos de tu negocio. Para proyectos que van más allá de una web.",
  price: "Desde 1.000€",
  tags: ["Desarrollo a Medida", "SaaS", "Integraciones API", "Paneles de Gestión"],
}

const moreServices: ServiceCard[] = [
  {
    href: "/servicios/ecommerce",
    icon: "shopping-cart",
    title: "E-commerce y Tiendas Online",
    description: "Tiendas online con gestión de inventario, pagos seguros y panel de administración.",
    price: "Desde 1.000€",
    tags: ["Tienda Online", "Pagos", "Inventario", "Analytics"],
  },
  {
    href: "/servicios/marketing-digital",
    icon: "trending-up",
    title: "Marketing Digital",
    description: "Campañas de Google Ads, email marketing y landing pages para conseguir más contactos y ventas.",
    price: "Desde 300€/mes",
    tags: ["Google Ads", "Email", "Landing Pages", "Analítica"],
  },
  {
    href: "/servicios/consultoria-digital",
    icon: "rocket",
    title: "Consultoría Digital",
    description: "Auditoría web, estrategia SEO, hoja de ruta tecnológica y definición de KPIs.",
    price: "Desde 300€",
    tags: ["Auditoría", "Estrategia", "KPIs", "Hoja de Ruta"],
  },
  {
    href: "/servicios/gestion-redes-sociales",
    icon: "share",
    title: "Gestión de Redes Sociales",
    description: "Community management y contenido creativo para hacer crecer tu marca en redes.",
    price: "Presupuesto a medida",
    tags: ["Instagram", "Community", "Contenido", "Estrategia"],
  },
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden pt-24">
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Servicios
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Diseño Web, SEO y Automatización{" "}
              <span className="gradient-text">para Empresas</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Webs profesionales, posicionamiento en Google y automatizaciones que ahorran tiempo a negocios en
              Madrid, el resto de España e internacionalmente.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="mb-6">
            <h2 className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-8 text-center">
              Servicios Principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {primaryServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="glass-effect rounded-2xl p-8 card-hover group block border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <BrandIcon name={service.icon} className="w-14 h-14" />
                    <span className="text-xs bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full font-semibold border border-yellow-400/30">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags?.map((tag, i) => (
                      <span key={i} className="text-xs bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold gradient-text">{service.price}</span>
                    <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Servicio Especializado */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8 text-center mt-16">
              Solución Especializada
            </h2>
            <Link
              href={specializedService.href}
              className="glass-effect rounded-2xl p-8 card-hover group block border border-gray-700/30 hover:border-yellow-400/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <BrandIcon name={specializedService.icon} />
                    <span className="text-xs bg-gray-700/50 text-gray-400 px-3 py-1 rounded-full border border-gray-600/30">
                      {specializedService.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                    {specializedService.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{specializedService.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex flex-wrap gap-2 mb-4 justify-end">
                    {specializedService.tags?.map((tag, i) => (
                      <span key={i} className="text-xs bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xl font-bold gradient-text mb-2">{specializedService.price}</div>
                  <span className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    Ver detalles →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Más Servicios */}
          <div className="border-t border-gray-800 pt-16">
            <h2 className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-10 text-center">
              Más Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {moreServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="glass-effect rounded-xl p-6 card-hover group block"
                >
                  <div className="mb-4">
                    <BrandIcon name={service.icon} className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <span className="text-sm font-bold gradient-text">{service.price}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">¿Necesitas algo diferente o tienes un proyecto específico?</p>
            <Link href="/consulta-personalizada" className="btn-primary text-lg">
              Consulta Personalizada Gratuita
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
