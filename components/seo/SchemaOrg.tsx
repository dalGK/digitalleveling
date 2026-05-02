export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://digitalleveling.com/#organization",
    name: "Digital Leveling",
    url: "https://digitalleveling.com",
    logo: {
      "@type": "ImageObject",
      url: "https://digitalleveling.com/logo.png",
      width: 200,
      height: 60,
    },
    description:
      "Agencia de diseño web y SEO para empresas en España. Creamos páginas web profesionales y estrategias de posicionamiento para negocios que quieren captar más clientes. Trabajamos en España e internacionalmente.",
    foundingDate: "2020",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+34-614-473-197",
        contactType: "customer service",
        email: "leveling.digi@gmail.com",
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
      streetAddress: "General Ricardos",
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
    image: "https://digitalleveling.com/og-image.jpg",
    url: "https://digitalleveling.com",
    telephone: "+34614473197",
    email: "leveling.digi@gmail.com",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    description:
      "Agencia de diseño web y SEO para empresas en España. Páginas web profesionales, posicionamiento en Google y soluciones digitales a medida.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "General Ricardos",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tiempo toma desarrollar un sitio web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio básico toma 2-3 semanas, mientras que proyectos más complejos pueden tomar 6-8 semanas. Te proporcionamos un cronograma detallado antes de comenzar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta hacer una página web en Madrid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El precio de una página web en Madrid depende de la complejidad. Un sitio web profesional básico comienza desde 300€, una tienda online desde 1.000€ y aplicaciones web personalizadas desde 1.000€. Ofrecemos planes de pago flexibles.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tecnologías utilizan para el desarrollo web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Utilizamos las tecnologías más modernas: React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, y muchas más. Somos especialistas en Next.js para sitios web ultrarrápidos y optimizados para SEO.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen soporte después del lanzamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutamente. Todos nuestros planes incluyen soporte post-lanzamiento. Además, ofrecemos planes de mantenimiento mensual para actualizaciones, backups y soporte continuo.",
        },
      },
      {
        "@type": "Question",
        name: "¿El sitio web será optimizado para móviles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, todos nuestros sitios web son completamente responsivos y optimizados para móviles. Utilizamos un enfoque mobile-first para garantizar una experiencia perfecta en todos los dispositivos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Incluyen SEO en sus servicios de desarrollo web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, todos nuestros sitios web incluyen SEO técnico (meta tags, estructura, velocidad, Schema markup). También ofrecemos servicios de SEO avanzado para maximizar tu visibilidad en Google.",
        },
      },
      {
        "@type": "Question",
        name: "¿Trabajáis con clientes fuera de España?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, trabajamos con clientes de todo el mundo. Además de nuestro mercado principal en España, tenemos experiencia en proyectos internacionales y nos adaptamos a diferentes zonas horarias e idiomas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Pueden trabajar con mi presupuesto limitado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entendemos que cada negocio tiene diferentes necesidades y presupuestos. Ofrecemos soluciones escalables y planes de pago flexibles. Contáctanos para discutir opciones personalizadas.",
        },
      },
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://digitalleveling.com/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
