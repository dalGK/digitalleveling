import { contact } from "@/lib/site"

export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://digitalleveling.com/#organization",
    name: "Digital Leveling",
    url: "https://digitalleveling.com",
    logo: {
      "@type": "ImageObject",
      url: "https://digitalleveling.com/apple-icon",
      width: 180,
      height: 180,
    },
    description:
      "Agencia de diseño web y SEO para empresas en España. Creamos páginas web profesionales y estrategias de posicionamiento para negocios que quieren captar más clientes. Trabajamos en España e internacionalmente.",
    foundingDate: "2020",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phoneE164,
        contactType: "customer service",
        email: contact.email,
        availableLanguage: ["Spanish", "English"],
        areaServed: ["ES", "GB", "US", "FR", "DE", "IT", "MX", "AR", "CO"],
      },
    ],
    sameAs: [
      "https://facebook.com/digitalleveling",
      "https://linkedin.com/company/digital-leveling",
      "https://instagram.com/digitalleveling",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      addressLocality: "Madrid",
      postalCode: "28025",
      addressCountry: "ES",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://digitalleveling.com/#localbusiness",
    name: "Digital Leveling",
    image: "https://digitalleveling.com/og-image.png",
    url: "https://digitalleveling.com",
    telephone: contact.phoneE164,
    email: contact.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    description:
      "Agencia de diseño web y SEO para empresas en España. Páginas web profesionales, posicionamiento en Google y soluciones digitales a medida.",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      addressLocality: "Madrid",
      addressRegion: "Comunidad de Madrid",
      postalCode: "28025",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.3953,
      longitude: -3.7176,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: "https://maps.google.com/?q=General+Ricardos+Madrid+28025",
    areaServed: [
      {
        "@type": "Country",
        name: "España",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "France",
      },
      {
        "@type": "Country",
        name: "Mexico",
      },
    ],
    serviceType: [
      "Diseño Web",
      "Desarrollo Web",
      "SEO",
      "Posicionamiento Web",
      "Aplicaciones Web a Medida",
      "E-commerce",
      "Marketing Digital",
      "Consultoría Digital",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://digitalleveling.com/#website",
    url: "https://digitalleveling.com",
    name: "Digital Leveling",
    description: "Agencia de diseño web y SEO para empresas en España e internacionalmente",
    publisher: {
      "@id": "https://digitalleveling.com/#organization",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
