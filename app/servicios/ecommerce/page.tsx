import type { Metadata } from "next"
import ServicePage from "@/components/sections/ServicePage"

export const metadata: Metadata = {
  title: "Tienda Online y E-commerce en Madrid | Vende por Internet",
  description:
    "Creamos tiendas online profesionales en Madrid. E-commerce con carrito inteligente, pasarela de pago segura, gestión de inventario y panel de administración. Desde 1.000€. Presupuesto gratis.",
  keywords: [
    "tienda online madrid",
    "ecommerce madrid",
    "crear tienda online madrid",
    "desarrollo ecommerce madrid",
    "vender por internet madrid",
    "tienda online profesional",
    "ecommerce next.js",
    "ecommerce españa",
    "montar tienda online",
    "presupuesto tienda online",
  ],
  alternates: {
    canonical: "https://digitalleveling.com/servicios/ecommerce",
  },
  openGraph: {
    title: "Tienda Online y E-commerce en Madrid | Digital Leveling",
    description:
      "Tiendas online profesionales con carrito, pagos seguros y gestión de inventario. Empieza a vender por internet desde 1.000€.",
    url: "https://digitalleveling.com/servicios/ecommerce",
  },
}

const features = [
  {
    icon: "🛒",
    title: "Carrito Inteligente",
    description:
      "Carrito de compra optimizado para conversión. Recuperación de carritos abandonados, descuentos y cupones.",
  },
  {
    icon: "💳",
    title: "Pagos Seguros",
    description:
      "Integración con Stripe, PayPal, Redsys y transferencia bancaria. Pagos en múltiples monedas para mercados internacionales.",
  },
  {
    icon: "📦",
    title: "Gestión de Inventario",
    description:
      "Control de stock en tiempo real, alertas de bajo inventario, variantes de producto y gestión de almacén.",
  },
  {
    icon: "📊",
    title: "Panel de Administración",
    description: "Dashboard completo para gestionar pedidos, clientes, productos y analíticas de ventas desde un solo lugar.",
  },
  {
    icon: "🚚",
    title: "Envíos y Logística",
    description:
      "Integración con empresas de transporte, cálculo automático de envíos, seguimiento de pedidos y etiquetas.",
  },
  {
    icon: "🔍",
    title: "SEO para E-commerce",
    description:
      "Schema markup de productos, URLs amigables, rich snippets en Google Shopping y optimización de fichas de producto.",
  },
  {
    icon: "📱",
    title: "Mobile Commerce",
    description:
      "Experiencia de compra perfecta en móvil. El 60% de las compras online se hacen desde el teléfono.",
  },
  {
    icon: "📧",
    title: "Email Marketing Integrado",
    description:
      "Automatizaciones de bienvenida, carritos abandonados, recomendaciones de productos y campañas de fidelización.",
  },
  {
    icon: "📈",
    title: "Analytics de Ventas",
    description:
      "Google Analytics 4, seguimiento de conversiones, embudos de compra y reportes de rendimiento del e-commerce.",
  },
]

const faqs = [
  {
    question: "¿Cuánto cuesta crear una tienda online en Madrid?",
    answer:
      "El precio de una tienda online depende del número de productos y funcionalidades. Una tienda básica comienza desde 1.000€, una tienda con catálogo grande y funciones avanzadas desde 3.000€. Siempre enviamos presupuesto detallado gratis.",
  },
  {
    question: "¿Puedo gestionar mi tienda yo mismo?",
    answer:
      "Sí. Desarrollamos un panel de administración intuitivo donde puedes añadir productos, gestionar pedidos, ver estadísticas y actualizar precios sin conocimientos técnicos. También te formamos en su uso.",
  },
  {
    question: "¿Qué pasarela de pago integran?",
    answer:
      "Integramos Stripe (tarjeta de crédito/débito), PayPal, Redsys (para España) y transferencia bancaria. Si necesitas otra pasarela específica, lo valoramos sin problema.",
  },
  {
    question: "¿Mi tienda aparecerá en Google Shopping?",
    answer:
      "Sí. Configuramos el feed de productos para Google Merchant Center, implementamos Schema markup de producto y optimizamos las fichas para aparecer en Google Shopping y búsquedas de producto.",
  },
  {
    question: "¿Pueden migrar mi tienda existente?",
    answer:
      "Sí, realizamos migraciones desde WooCommerce, Shopify, PrestaShop y otras plataformas, conservando productos, clientes, pedidos e historial.",
  },
]

export default function EcommercePage() {
  return (
    <ServicePage
      badge="🛒 E-commerce Madrid"
      title="Tienda Online Profesional"
      titleHighlight="en Madrid"
      subtitle="Carrito · Pagos Seguros · Inventario · Google Shopping"
      description="Creamos tiendas online que venden. E-commerce completo con carrito inteligente, pasarela de pago segura, gestión de inventario y panel de administración. Para empresas en Madrid, España y Latinoamérica."
      features={features}
      faqs={faqs}
      price="Desde 1.000€ · Presupuesto personalizado en 24 horas"
      ctaText="Crear mi tienda online"
      relatedServices={[
        { href: "/servicios/desarrollo-web-madrid", label: "🌐 Desarrollo Web" },
        { href: "/servicios/marketing-digital", label: "📈 Marketing Digital" },
        { href: "/servicios/gestion-redes-sociales", label: "📲 Redes Sociales" },
        { href: "/servicios/consultoria-digital", label: "🚀 Consultoría Digital" },
      ]}
    />
  )
}
