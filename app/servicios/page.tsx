import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Servicios de Diseño Web y SEO para Empresas en España",
  description:
    "Diseño web, SEO, aplicaciones a medida, e-commerce y marketing digital para empresas en España. Agencia digital con foco en resultados y proyectos internacionales. Presupuesto gratuito.",
  alternates: {
    canonical: "https://digitalleveling.com/servicios",
  },
  openGraph: {
    title: "Servicios de Diseño Web y SEO para Empresas | Digital Leveling",
    description:
      "Diseño web profesional, SEO y soluciones digitales para empresas en España e internacionalmente.",
    url: "https://digitalleveling.com/servicios",
  },
}

const primaryServices = [
  {
    href: "/servicios/desarrollo-web-madrid",
    icon: "🌐",
    badge: "Servicio Principal",
    title: "Diseño y Desarrollo Web",
    description:
      "Páginas web profesionales, rápidas y diseñadas para convertir. Construidas con Next.js y React, optimizadas para Google desde el primer día.",
    price: "Desde 300€",
    tags: ["Next.js", "React", "SEO Incluido", "Responsivo"],
  },
  {
    href: "/servicios/seo",
    icon: "🔍",
    badge: "Servicio Principal",
    title: "SEO y Posicionamiento Web",
    description:
      "Estrategias SEO para aparecer en los primeros resultados de Google y atraer clientes de forma orgánica. Auditoría, técnica, contenidos y reporting mensual.",
    price: "Desde 300€/mes",
    tags: ["Auditoría SEO", "SEO Técnico", "Contenidos", "Reporting"],
  },
]

const specializedService = {
  href: "/servicios/aplicaciones-web",
  icon: "⚙️",
  badge: "Solución Especializada",
  title: "Aplicaciones Web a Medida",
  description:
    "Plataformas digitales, herramientas internas, SaaS y automatizaciones desarrolladas a medida para los procesos específicos de tu negocio. Para proyectos que van más allá de una web.",
  price: "Desde 1.000€",
  tags: ["Desarrollo a Medida", "SaaS", "Integraciones API", "Paneles de Gestión"],
}

const moreServices = [
  {
    href: "/servicios/ecommerce",
    icon: "🛒",
    title: "E-commerce y Tiendas Online",
    description: "Tiendas online con gestión de inventario, pagos seguros y panel de administración.",
    price: "Desde 1.000€",
    tags: ["Tienda Online", "Pagos", "Inventario", "Analytics"],
  },
  {
    href: "/servicios/marketing-digital",
    icon: "📈",
    title: "Marketing Digital",
    description: "Google Ads, Facebook Ads y email marketing para aumentar tu visibilidad y ventas.",
    price: "Desde 300€/mes",
    tags: ["Google Ads", "Facebook Ads", "Email", "Social"],
  },
  {
    href: "/servicios/consultoria-digital",
    icon: "🚀",
    title: "Consultoría Digital",
    description: "Auditoría web, estrategia SEO, hoja de ruta tecnológica y definición de KPIs.",
    price: "Desde 300€",
    tags: ["Auditoría", "Estrategia", "KPIs", "Hoja de Ruta"],
  },
  {
    href: "/servicios/gestion-redes-sociales",
    icon: "📲",
    title: "Gestión de Redes Sociales",
    description: "Community management, contenido creativo y publicidad social para crecer tu marca.",
    price: "Desde 100€/mes",
    tags: ["Instagram", "Community", "Contenido", "Ads"],
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
              Diseño Web y SEO{" "}
              <span className="gradient-text">para Empresas</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Webs profesionales, posicionamiento en Google y soluciones digitales a medida para negocios en España
              e internacionalmente.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="mb-6">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-8 text-center">
              Servicios Principales
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {primaryServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="glass-effect rounded-2xl p-8 card-hover group block border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl">{service.icon}</div>
                    <span className="text-xs bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full font-semibold border border-yellow-400/30">
                      {service.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
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
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8 text-center mt-16">
              Solución Especializada
            </p>
            <Link
              href={specializedService.href}
              className="glass-effect rounded-2xl p-8 card-hover group block border border-gray-700/30 hover:border-yellow-400/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{specializedService.icon}</div>
                    <span className="text-xs bg-gray-700/50 text-gray-400 px-3 py-1 rounded-full border border-gray-600/30">
                      {specializedService.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                    {specializedService.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{specializedService.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex flex-wrap gap-2 mb-4 justify-end">
                    {specializedService.tags.map((tag, i) => (
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
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-10 text-center">
              Más Servicios
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {moreServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="glass-effect rounded-xl p-6 card-hover group block"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
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
              💬 Consulta Personalizada Gratuita
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
