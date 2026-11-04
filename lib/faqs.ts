export interface FAQItem {
  question: string
  answer: string
  category: string
}

// Fuente única: se usa en la sección FAQ visible y en el Schema FAQPage de la home
export const faqs: FAQItem[] = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio básico toma 2-3 semanas, mientras que proyectos más complejos pueden tomar 6-8 semanas. Te proporcionamos un cronograma detallado antes de comenzar.",
    category: "Desarrollo",
  },
  {
    question: "¿Cuánto cuesta hacer una página web?",
    answer:
      "El precio depende de la complejidad. Un sitio web profesional básico comienza desde 300€, una tienda online desde 1.000€ y las aplicaciones web personalizadas desde 1.000€. Ofrecemos planes de pago flexibles.",
    category: "Precios",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Utilizamos las tecnologías más modernas y confiables: React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, y muchas más. Elegimos la tecnología más adecuada para cada proyecto específico.",
    category: "Tecnología",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Absolutamente. Todos nuestros planes incluyen soporte post-lanzamiento. Además, ofrecemos planes de mantenimiento mensual para actualizaciones, backups y soporte continuo.",
    category: "Soporte",
  },
  {
    question: "¿Pueden trabajar con mi presupuesto limitado?",
    answer:
      "Entendemos que cada negocio tiene diferentes necesidades y presupuestos. Ofrecemos soluciones escalables y planes de pago flexibles. Contáctanos para discutir opciones personalizadas.",
    category: "Precios",
  },
  {
    question: "¿El sitio web será optimizado para móviles?",
    answer:
      "Sí, todos nuestros sitios web son completamente responsivos y optimizados para móviles. Utilizamos un enfoque 'mobile-first' para garantizar una experiencia perfecta en todos los dispositivos.",
    category: "Desarrollo",
  },
  {
    question: "¿Incluyen SEO en sus servicios?",
    answer:
      "Sí, todos nuestros sitios web incluyen SEO básico (meta tags, estructura, velocidad). También ofrecemos servicios de SEO avanzado como servicio adicional para maximizar tu visibilidad en buscadores.",
    category: "SEO",
  },
  {
    question: "¿Puedo actualizar el contenido yo mismo?",
    answer:
      "Sí, desarrollamos sitios web con paneles de administración intuitivos que te permiten actualizar contenido fácilmente. También proporcionamos capacitación para que puedas gestionar tu sitio de forma independiente.",
    category: "Gestión",
  },
  {
    question: "¿Trabajan con clientes internacionales?",
    answer:
      "Sí, trabajamos con clientes de todo el mundo. Tenemos experiencia en proyectos internacionales y podemos adaptarnos a diferentes zonas horarias y requisitos específicos de cada región.",
    category: "Internacional",
  },
  {
    question: "¿Qué pasa si no estoy satisfecho con el resultado?",
    answer:
      "Antes de empezar acordamos por escrito qué incluye el proyecto. Durante el diseño tienes rondas de revisión incluidas y no pasamos a desarrollo hasta que apruebes el diseño.",
    category: "Proceso",
  },
  {
    question: "¿Qué podéis automatizar en mi negocio?",
    answer:
      "Hoy automatizamos la atención por WhatsApp (respuestas a preguntas frecuentes y solicitudes de cita) y las reservas online con confirmación automática. En el diagnóstico gratuito vemos qué tareas repetitivas te hacen perder más tiempo.",
    category: "Automatización",
  },
]
