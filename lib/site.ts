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
  // Única dirección pública de la web (sin calle). La del colaborador solo va en su bloque.
  postalCode: "28025",
  city: "Madrid",
  country: "España",
  addressDisplay: "Madrid, España (28025)",
  hours: "Lun - Vie, 9:00 - 18:00",
}

export interface SocialLink {
  id: "instagram" | "facebook" | "linkedin" | "twitter"
  label: string
  href: string
  enabled: boolean
}

// Redes sociales: solo se muestran (footer) y se declaran (schema sameAs) las que tienen enabled: true
export const socialLinks: SocialLink[] = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/digitalleveling.tech/", enabled: true },
  // Desactivadas: el titular confirmó el 05/11/2026 que estas cuentas no existen
  { id: "facebook", label: "Facebook", href: "https://facebook.com/digitalleveling", enabled: false },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/digital-leveling", enabled: false },
  { id: "twitter", label: "X (Twitter)", href: "", enabled: false },
]

export const activeSocialLinks = socialLinks.filter((link) => link.enabled && link.href)

// Rangos de presupuesto de los formularios (el valor se envía tal cual a /api/contact)
export const budgetRanges = ["Menos de 500 €", "500 – 1.500 €", "1.500 – 3.000 €", "Más de 3.000 €", "A valorar"]

// Interruptores de contenido: ocultan sin borrar el código
export const features = {
  // Los precios "Desde X €" se muestran solo en las páginas de servicio, no en la home
  showPricesOnHome: false,
  // Servicios que aún no se ofrecen (Asistentes de IA, CRM, demos "Próximamente")
  showComingSoon: false,
}

// SEO de la home: title, description y sus variantes para redes
export const homeSeo = {
  title: "Diseño Web en Madrid para Negocios | Digital Leveling",
  description:
    "Webs profesionales y sistemas de reservas para negocios en Madrid. Desarrollo a medida, SEO incluido y trato directo con quien programa tu web.",
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

export interface SectorSolution {
  id: string
  title: string
  sectors: string[]
  offer: string
  ctaLabel: string
  href: string
}

// Soluciones por sector (home)
export const sectorSolutions: SectorSolution[] = [
  {
    id: "cita-previa",
    title: "Webs para negocios con cita previa",
    sectors: ["Barberías y peluquerías", "Clínicas estéticas", "Centros de belleza"],
    offer: "Web + reservas online + recordatorios automáticos",
    ctaLabel: "Ver solución",
    // TODO: apuntar a "/soluciones/barberias-madrid" cuando exista la página
    href: whatsappUrl("Hola, tengo un negocio con cita previa y me interesa una web con reservas"),
  },
]

// Datos del titular para las páginas legales (LSSI / RGPD).
// TODO: completar con los datos reales del titular antes de considerar las páginas legales definitivas.
export const legal = {
  owner: "[Nombre y apellidos o razón social del titular]",
  taxId: "[NIF/CIF]",
  // TODO: la LSSI exige el domicilio completo del titular; completarlo junto con el nombre y el NIF
  address: contact.addressDisplay,
  email: contact.email,
  lastUpdated: "15 de octubre de 2026",
}
