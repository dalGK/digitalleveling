import type { Metadata } from "next"
import ServicePage from "@/components/sections/ServicePage"

export const metadata: Metadata = {
  title: "Desarrollo de Aplicaciones Web en Madrid | PWA y Web Apps",
  description:
    "Desarrollamos aplicaciones web progresivas (PWA) en Madrid. Apps web que funcionan como nativas: offline, push notifications, instalables. Para empresas en España y Latinoamérica. Presupuesto gratis.",
  keywords: [
    "aplicaciones web madrid",
    "desarrollo aplicaciones web madrid",
    "pwa madrid",
    "web app madrid",
    "aplicacion web profesional",
    "desarrollo software web madrid",
    "aplicaciones web next.js",
    "apps web empresas",
    "desarrollo web a medida madrid",
  ],
  alternates: {
    canonical: "https://digitalleveling.com/servicios/aplicaciones-web",
  },
  openGraph: {
    title: "Desarrollo de Aplicaciones Web en Madrid | Digital Leveling",
    description:
      "Aplicaciones web progresivas (PWA) que funcionan como nativas. Offline, push notifications e instalables. Para empresas en España y Latinoamérica.",
    url: "https://digitalleveling.com/servicios/aplicaciones-web",
  },
}

const features = [
  {
    icon: "📱",
    title: "Progressive Web App (PWA)",
    description:
      "Apps instalables en cualquier dispositivo que funcionan sin conexión. La mejor experiencia de usuario sin necesidad de App Store.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description:
      "Notificaciones push nativas para re-enganchar a tus usuarios. Mayor retención y engagement sin coste adicional.",
  },
  {
    icon: "⚡",
    title: "Offline Mode",
    description:
      "Funcionalidad completa sin internet mediante Service Workers. Tus usuarios siempre pueden acceder a tu app.",
  },
  {
    icon: "🔐",
    title: "Autenticación Segura",
    description:
      "Login social (Google, Facebook), JWT, OAuth2, autenticación de dos factores y gestión de sesiones segura.",
  },
  {
    icon: "🗄️",
    title: "Base de Datos en Tiempo Real",
    description:
      "Datos sincronizados en tiempo real entre usuarios. Perfecto para dashboards, chats, sistemas de gestión y más.",
  },
  {
    icon: "🔗",
    title: "Integración con APIs",
    description:
      "Conexión con cualquier servicio externo: CRMs, ERPs, pasarelas de pago, servicios de terceros y APIs propias.",
  },
  {
    icon: "📊",
    title: "Dashboard y Analíticas",
    description:
      "Paneles de control personalizados con métricas de negocio en tiempo real. Toma decisiones basadas en datos.",
  },
  {
    icon: "🌍",
    title: "Multiidioma y Multirregión",
    description:
      "Aplicaciones preparadas para escalar internacionalmente. Soporte para múltiples idiomas y monedas.",
  },
  {
    icon: "🚀",
    title: "Escalabilidad Cloud",
    description:
      "Arquitectura en AWS, Vercel o Google Cloud que escala automáticamente según la demanda. Sin límites de crecimiento.",
  },
]

const faqs = [
  {
    question: "¿Qué diferencia hay entre una web y una aplicación web?",
    answer:
      "Una web presenta información estática o semi-dinámica. Una aplicación web es interactiva, tiene funcionalidades complejas (login, gestión de datos, procesos) y está orientada a que los usuarios realicen tareas específicas dentro de ella.",
  },
  {
    question: "¿Cuánto cuesta desarrollar una aplicación web?",
    answer:
      "El precio depende de la complejidad funcional. Una app web básica comienza desde 1.000€, aplicaciones con funcionalidades medias desde 3.000€ y plataformas complejas desde 8.000€. Enviamos presupuesto detallado gratis.",
  },
  {
    question: "¿Una PWA puede reemplazar una app móvil nativa?",
    answer:
      "Para muchos casos de uso sí: puede instalarse, funcionar offline, enviar notificaciones push y tener acceso a funciones del dispositivo. Tiene la ventaja de no requerir pasar por las tiendas de apps y funciona en iOS y Android.",
  },
  {
    question: "¿Pueden desarrollar un SaaS?",
    answer:
      "Sí. Tenemos experiencia desarrollando plataformas SaaS con modelo de suscripción, multi-tenant, paneles de administración y facturación automática. Contáctanos para valorar tu idea.",
  },
  {
    question: "¿Cuánto tiempo tarda el desarrollo?",
    answer:
      "Una aplicación web básica: 4-6 semanas. Una app con funcionalidades medias: 2-4 meses. Plataformas complejas: 4-8 meses. Usamos metodología ágil con entregas parciales para que veas el progreso.",
  },
]

export default function AplicacionesWebPage() {
  return (
    <ServicePage
      badge="📱 Aplicaciones Web Madrid"
      title="Desarrollo de Aplicaciones Web"
      titleHighlight="a Medida"
      subtitle="PWA · Offline · Push Notifications · Tiempo Real"
      description="Desarrollamos aplicaciones web progresivas que funcionan como apps nativas. Desde SaaS hasta dashboards empresariales. Para empresas en Madrid, España y Latinoamérica."
      features={features}
      faqs={faqs}
      price="Desde 1.000€ · Presupuesto personalizado en 24 horas"
      ctaText="Hablar sobre mi app"
      relatedServices={[
        { href: "/servicios/desarrollo-web-madrid", label: "🌐 Desarrollo Web" },
        { href: "/servicios/ecommerce", label: "🛒 E-commerce" },
        { href: "/servicios/consultoria-digital", label: "🚀 Consultoría Digital" },
        { href: "/servicios/marketing-digital", label: "📈 Marketing Digital" },
      ]}
    />
  )
}
