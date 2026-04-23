import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Servicios de Desarrollo Web y Marketing Digital en Madrid",
  description:
    "Desarrollo web, e-commerce, aplicaciones web, marketing digital y consultoría en Madrid. Agencia digital para empresas en España y Latinoamérica. Presupuesto gratuito.",
  alternates: {
    canonical: "https://digitalleveling.com/servicios",
  },
  openGraph: {
    title: "Servicios de Desarrollo Web y Marketing Digital | Digital Leveling Madrid",
    description:
      "Desarrollo web, e-commerce, aplicaciones web y marketing digital para empresas en España y Latinoamérica.",
    url: "https://digitalleveling.com/servicios",
  },
}

const services = [
  {
    href: "/servicios/desarrollo-web-madrid",
    icon: "🌐",
    title: "Desarrollo Web en Madrid",
    description: "Sitios web profesionales con Next.js y React. Rápidos, SEO-optimizados y responsivos.",
    price: "Desde 300€",
    tags: ["Next.js", "React", "SEO", "Responsivo"],
  },
  {
    href: "/servicios/ecommerce",
    icon: "🛒",
    title: "E-commerce y Tiendas Online",
    description: "Tiendas online completas con gestión de inventario, pagos seguros y panel de administración.",
    price: "Desde 1.000€",
    tags: ["Tienda Online", "Pagos", "Inventario", "Analytics"],
  },
  {
    href: "/servicios/aplicaciones-web",
    icon: "📱",
    title: "Aplicaciones Web",
    description: "Apps web progresivas (PWA) que funcionan como aplicaciones nativas en cualquier dispositivo.",
    price: "Desde 1.000€",
    tags: ["PWA", "Offline", "Push", "App Store"],
  },
  {
    href: "/servicios/marketing-digital",
    icon: "📈",
    title: "Marketing Digital",
    description: "Google Ads, Facebook Ads, email marketing y redes sociales para aumentar tus ventas.",
    price: "Desde 300€/mes",
    tags: ["Google Ads", "Facebook Ads", "Email", "Social"],
  },
  {
    href: "/servicios/consultoria-digital",
    icon: "🚀",
    title: "Consultoría Digital",
    description: "Estrategia personalizada: auditoría web, plan SEO, hoja de ruta tecnológica y KPIs.",
    price: "Desde 300€",
    tags: ["Auditoría", "SEO", "Estrategia", "KPIs"],
  },
  {
    href: "/servicios/gestion-redes-sociales",
    icon: "📲",
    title: "Gestión de Redes Sociales",
    description: "Community management, contenido creativo y publicidad social para crecer tu marca online.",
    price: "Desde 100€/mes",
    tags: ["Instagram", "Community", "Contenido", "Ads"],
  },
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden pt-24">
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🛠️ Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Servicios de <span className="gradient-text">Desarrollo Web</span>
              <br />y Marketing Digital en Madrid
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Soluciones digitales completas para empresas en España y Latinoamérica. Desde el diseño hasta el
              posicionamiento en Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="glass-effect rounded-2xl p-8 card-hover group block"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
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

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">¿Necesitas algo diferente?</p>
            <Link href="/consulta-personalizada" className="btn-primary text-lg">
              💬 Consulta Personalizada Gratuita
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
