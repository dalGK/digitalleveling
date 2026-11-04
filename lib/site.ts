export const SITE_URL = "https://digitalleveling.com"

// Imagen para compartir en redes. Hay que incluirla en cada openGraph de página:
// Next.js no hereda las imágenes del layout cuando una página define su propio openGraph.
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1731,
  height: 909,
  alt: "Digital Leveling: diseño web, SEO y automatización para negocios",
}

export const contact = {
  email: "leveling.digi@gmail.com",
  phoneDisplay: "+34 614 473 197",
  phoneE164: "+34614473197",
  whatsappNumber: "34614473197",
  street: "Calle General Ricardos",
  postalCode: "28025",
  city: "Madrid",
  country: "España",
  hours: "Lun - Vie, 9:00 - 18:00",
}

export function whatsappUrl(message = "Hola, me gustaría solicitar un diagnóstico gratuito para mi negocio.") {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const CONSULTATION_URL = whatsappUrl()

// Mensaje inicial de WhatsApp según el servicio desde el que escribe el visitante
export function serviceWhatsappUrl(service: string) {
  return whatsappUrl(`Hola, me interesa ${service}. ¿Podemos hablar de mi caso?`)
}

export interface ServiceItem {
  label: string
  href?: string
  // Precios ya publicados en las páginas de servicio; no añadir nuevos sin aprobación
  price?: string
  // Servicios que todavía no se ofrecen: se muestran como "Próximamente", sin enlace ni promesa
  comingSoon?: boolean
}

export interface ServiceGroup {
  id: string
  icon: string
  title: string
  description: string
  items: ServiceItem[]
}

// Catálogo agrupado: fuente única para la home, el footer y el selector del formulario
export const serviceGroups: ServiceGroup[] = [
  {
    id: "presencia",
    icon: "🌐",
    title: "Presencia digital",
    description: "Una web rápida y profesional que explica bien lo que haces y aparece cuando te buscan.",
    items: [
      { label: "Diseño y desarrollo web", href: "/servicios/desarrollo-web-madrid", price: "Desde 300€" },
      { label: "Tiendas online", href: "/servicios/ecommerce", price: "Desde 1.000€" },
      { label: "SEO y posicionamiento", href: "/servicios/seo", price: "Desde 300€/mes" },
    ],
  },
  {
    id: "automatizacion",
    icon: "⚙️",
    title: "Automatización e IA",
    description: "Menos tareas repetitivas: tus clientes reservan, preguntan y reciben respuesta sin que estés pendiente.",
    items: [
      { label: "Automatización de WhatsApp", href: "/servicios/automatizacion" },
      { label: "Sistemas de reservas", href: "/servicios/automatizacion#reservas" },
      { label: "Aplicaciones a medida", href: "/servicios/aplicaciones-web", price: "Desde 1.000€" },
      { label: "Asistentes de IA", comingSoon: true },
    ],
  },
  {
    id: "captacion",
    icon: "📈",
    title: "Captación y crecimiento",
    description: "Más contactos cualificados desde Google y un seguimiento ordenado de cada oportunidad.",
    items: [
      { label: "SEO local", href: "/servicios/seo" },
      { label: "Campañas de Google Ads", href: "/servicios/marketing-digital" },
      { label: "Optimización de conversiones", href: "/servicios/consultoria-digital" },
      { label: "CRM y seguimiento comercial", comingSoon: true },
    ],
  },
]

export const availableServices = serviceGroups.flatMap((group) =>
  group.items.filter((item) => !item.comingSoon).map((item) => item.label),
)

// Datos del titular para las páginas legales (LSSI / RGPD).
// TODO: completar con los datos reales del titular antes de considerar las páginas legales definitivas.
export const legal = {
  owner: "[Nombre y apellidos o razón social del titular]",
  taxId: "[NIF/CIF]",
  address: `${contact.street}, ${contact.postalCode} ${contact.city}, ${contact.country}`,
  email: contact.email,
  lastUpdated: "15 de octubre de 2026",
}
