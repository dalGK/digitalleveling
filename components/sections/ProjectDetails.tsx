"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Calendar, Users, Code, Zap, Shield, Smartphone, Clock, CheckCircle } from "lucide-react"

const projects = {
  techstore: {
    title: "TechStore Pro",
    subtitle: "E-commerce Tecnológico Avanzado",
    category: "E-commerce",
    client: "TechStore Solutions",
    duration: "8 semanas",
    team: "4 desarrolladores",
    year: "2024",
    description:
      "Plataforma de e-commerce completa para venta de productos tecnológicos con más de 10,000 productos, sistema de gestión avanzado, múltiples métodos de pago y panel administrativo completo.",
    challenge:
      "El cliente necesitaba una plataforma robusta que pudiera manejar un gran volumen de productos y transacciones, con un sistema de inventario en tiempo real y múltiples integraciones de pago.",
    solution:
      "Desarrollamos una solución escalable usando Next.js con un backend robusto, implementando cache inteligente, optimización de imágenes automática y un sistema de gestión de inventario en tiempo real.",
    results: [
      "300% aumento en ventas online",
      "50% reducción en tiempo de carga",
      "99.9% uptime desde el lanzamiento",
      "40% aumento en conversión",
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Redis", "AWS"],
    features: [
      {
        icon: Code,
        title: "Arquitectura Escalable",
        description: "Sistema diseñado para crecer con el negocio",
      },
      {
        icon: Zap,
        title: "Performance Optimizada",
        description: "Carga ultra-rápida con técnicas avanzadas",
      },
      {
        icon: Shield,
        title: "Seguridad Avanzada",
        description: "Protección completa de datos y transacciones",
      },
      {
        icon: Smartphone,
        title: "Mobile-First",
        description: "Experiencia perfecta en todos los dispositivos",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=TechStore+Homepage",
      "/placeholder.svg?height=400&width=600&text=Product+Catalog",
      "/placeholder.svg?height=400&width=600&text=Shopping+Cart",
      "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
    ],
    liveUrl: "https://techstore-demo.vercel.app",
    githubUrl: "https://github.com/digitalleveling/techstore",
  },
  financeapp: {
    title: "FinanceApp Dashboard",
    subtitle: "Plataforma de Gestión Financiera",
    category: "Aplicación Web",
    client: "FinTech Innovations",
    duration: "12 semanas",
    team: "6 desarrolladores",
    year: "2024",
    description:
      "Aplicación web completa para gestión financiera empresarial con analytics en tiempo real, reportes automáticos, integración bancaria y dashboard interactivo para toma de decisiones.",
    challenge:
      "Crear una plataforma que pudiera procesar grandes volúmenes de datos financieros en tiempo real, con visualizaciones complejas y mantener la seguridad de datos sensibles.",
    solution:
      "Implementamos una arquitectura de microservicios con React y D3.js para visualizaciones, PostgreSQL para datos estructurados y Redis para cache de alta velocidad.",
    results: [
      "80% reducción en tiempo de análisis",
      "95% precisión en predicciones",
      "60% aumento en productividad",
      "100% cumplimiento normativo",
    ],
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    features: [
      {
        icon: Code,
        title: "Analytics Avanzado",
        description: "Visualizaciones interactivas en tiempo real",
      },
      {
        icon: Zap,
        title: "Procesamiento Rápido",
        description: "Análisis de millones de transacciones",
      },
      {
        icon: Shield,
        title: "Seguridad Bancaria",
        description: "Cumple con estándares PCI DSS",
      },
      {
        icon: Smartphone,
        title: "Dashboard Móvil",
        description: "Acceso completo desde cualquier dispositivo",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Finance+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Analytics+Charts",
      "/placeholder.svg?height=400&width=600&text=Reports+Section",
      "/placeholder.svg?height=400&width=600&text=Mobile+App",
    ],
    liveUrl: "https://financeapp-demo.vercel.app",
    githubUrl: "https://github.com/digitalleveling/financeapp",
  },
  medicorp: {
    title: "MediCorp Website",
    subtitle: "Portal Médico Corporativo",
    category: "Sitio Corporativo",
    client: "MediCorp Healthcare",
    duration: "6 semanas",
    team: "3 desarrolladores",
    year: "2024",
    description:
      "Sitio web corporativo para empresa médica con sistema de citas online, portal de pacientes, información de servicios y blog médico integrado.",
    challenge:
      "Desarrollar una plataforma que cumpliera con regulaciones médicas (HIPAA), fuera accesible para todos los usuarios y permitiera gestión eficiente de citas médicas.",
    solution:
      "Creamos un sitio con Next.js optimizado para SEO médico, sistema de citas integrado con calendario, portal seguro para pacientes y CMS personalizado para contenido médico.",
    results: [
      "200% aumento en citas online",
      "90% reducción en llamadas telefónicas",
      "150% mejora en SEO médico",
      "98% satisfacción de pacientes",
    ],
    technologies: ["Next.js", "Sanity CMS", "Framer Motion", "Tailwind", "Vercel"],
    features: [
      {
        icon: Code,
        title: "Sistema de Citas",
        description: "Reservas online automatizadas",
      },
      {
        icon: Zap,
        title: "Portal Pacientes",
        description: "Acceso seguro a información médica",
      },
      {
        icon: Shield,
        title: "Cumplimiento HIPAA",
        description: "Seguridad de datos médicos",
      },
      {
        icon: Smartphone,
        title: "Accesibilidad Web",
        description: "Cumple estándares WCAG 2.1",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Medical+Homepage",
      "/placeholder.svg?height=400&width=600&text=Appointment+System",
      "/placeholder.svg?height=400&width=600&text=Patient+Portal",
      "/placeholder.svg?height=400&width=600&text=Medical+Blog",
    ],
    liveUrl: "https://medicorp-demo.vercel.app",
    githubUrl: "https://github.com/digitalleveling/medicorp",
  },
  fooddelivery: {
    title: "FoodDelivery App",
    subtitle: "Aplicación de Delivery Gastronómico",
    category: "Aplicación Móvil",
    client: "QuickEats",
    duration: "10 semanas",
    team: "5 desarrolladores",
    year: "2024",
    description:
      "Aplicación completa de delivery de comida con geolocalización en tiempo real, múltiples métodos de pago, sistema de tracking de pedidos y panel para restaurantes.",
    challenge:
      "Crear una app que manejara múltiples restaurantes, tracking en tiempo real de repartidores, optimización de rutas y sincronización entre clientes, restaurantes y delivery.",
    solution:
      "Desarrollamos una PWA con React Native, implementando geolocalización avanzada, WebSockets para tracking en tiempo real y algoritmos de optimización de rutas.",
    results: [
      "500% aumento en pedidos",
      "30% reducción en tiempo de entrega",
      "95% satisfacción del cliente",
      "40 restaurantes integrados",
    ],
    technologies: ["React Native", "Firebase", "Stripe", "Google Maps", "WebSocket"],
    features: [
      {
        icon: Code,
        title: "Tracking en Tiempo Real",
        description: "Seguimiento preciso de pedidos",
      },
      {
        icon: Zap,
        title: "Optimización de Rutas",
        description: "Entrega más rápida y eficiente",
      },
      {
        icon: Shield,
        title: "Pagos Seguros",
        description: "Múltiples métodos de pago",
      },
      {
        icon: Smartphone,
        title: "App Nativa",
        description: "Experiencia móvil optimizada",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Food+App+Home",
      "/placeholder.svg?height=400&width=600&text=Restaurant+Menu",
      "/placeholder.svg?height=400&width=600&text=Order+Tracking",
      "/placeholder.svg?height=400&width=600&text=Payment+Screen",
    ],
    liveUrl: "https://fooddelivery-demo.vercel.app",
    githubUrl: "https://github.com/digitalleveling/fooddelivery",
  },
  startuplanding: {
    title: "StartupLanding",
    subtitle: "Landing Page de Alta Conversión",
    category: "Landing Page",
    client: "InnovateTech Startup",
    duration: "3 semanas",
    team: "2 desarrolladores",
    year: "2024",
    description:
      "Landing page optimizada para conversión de startup tecnológica con A/B testing integrado, formularios inteligentes y analytics avanzados.",
    challenge:
      "Crear una landing page que maximizara las conversiones, fuera extremadamente rápida y permitiera testing continuo de diferentes variantes.",
    solution:
      "Desarrollamos una landing page con Next.js optimizada para Core Web Vitals, implementando A/B testing nativo, formularios con validación inteligente y analytics detallados.",
    results: [
      "400% aumento en conversiones",
      "95+ puntuación en PageSpeed",
      "60% reducción en bounce rate",
      "300% aumento en leads calificados",
    ],
    technologies: ["Next.js", "Tailwind", "Framer Motion", "Vercel Analytics"],
    features: [
      {
        icon: Code,
        title: "A/B Testing Nativo",
        description: "Optimización continua de conversiones",
      },
      {
        icon: Zap,
        title: "Carga Ultra-Rápida",
        description: "Optimizada para Core Web Vitals",
      },
      {
        icon: Shield,
        title: "SEO Avanzado",
        description: "Optimización completa para buscadores",
      },
      {
        icon: Smartphone,
        title: "Mobile-First",
        description: "Diseño responsivo perfecto",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Startup+Landing",
      "/placeholder.svg?height=400&width=600&text=Features+Section",
      "/placeholder.svg?height=400&width=600&text=Pricing+Plans",
      "/placeholder.svg?height=400&width=600&text=Contact+Form",
    ],
    liveUrl: "https://startuplanding-demo.vercel.app",
    githubUrl: "https://github.com/digitalleveling/startuplanding",
  },
  luxurybrand: {
    title: "LuxuryBrand Store",
    subtitle: "E-commerce Premium de Lujo",
    category: "E-commerce Premium",
    client: "Luxury Fashion House",
    duration: "14 semanas",
    team: "7 desarrolladores",
    year: "2024",
    description:
      "E-commerce premium para marca de lujo con experiencia de compra personalizada, realidad aumentada, concierge virtual y sistema de membresías exclusivas.",
    challenge:
      "Crear una experiencia de compra digital que reflejara el lujo y exclusividad de la marca, con funcionalidades avanzadas como AR y personalización AI.",
    solution:
      "Desarrollamos una plataforma premium con Next.js, Three.js para experiencias 3D, AI para recomendaciones personalizadas y AR para prueba virtual de productos.",
    results: [
      "250% aumento en ticket promedio",
      "80% reducción en devoluciones",
      "95% satisfacción VIP",
      "150% aumento en membresías",
    ],
    technologies: ["Next.js", "Three.js", "Shopify Plus", "AI/ML", "AR.js"],
    features: [
      {
        icon: Code,
        title: "Experiencia 3D/AR",
        description: "Prueba virtual de productos",
      },
      {
        icon: Zap,
        title: "AI Personalizado",
        description: "Recomendaciones inteligentes",
      },
      {
        icon: Shield,
        title: "Concierge Virtual",
        description: "Atención personalizada 24/7",
      },
      {
        icon: Smartphone,
        title: "Membresías VIP",
        description: "Sistema de exclusividad",
      },
    ],
    images: [
      "/placeholder.svg?height=400&width=600&text=Luxury+Store",
      "/placeholder.svg?height=400&width=600&text=3D+Product+View",
      "/placeholder.svg?height=400&width=600&text=VIP+Section",
      "/placeholder.svg?height=400&width=600&text=AR+Try+On",
    ],
    liveUrl: "https://luxurybrand-demo.vercel.app",
    githubUrl: "https://github.com/digitalleveling/luxurybrand",
  },
}

interface ProjectDetailsProps {
  projectId: keyof typeof projects
}

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const [activeImage, setActiveImage] = useState(0)
  const project = projects[projectId]

  if (!project) {
    return <div>Proyecto no encontrado</div>
  }

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{project.title}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">{project.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>{project.team}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
          </div>
        </motion.div>

        {/* Main Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-6">
            <Image
              src={project.images[activeImage] || "/placeholder.svg"}
              alt={`${project.title} - Vista ${activeImage + 1}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-center space-x-4">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === index ? "border-yellow-400" : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <Image
                  src={project.images[index] || "/placeholder.svg"}
                  alt={`Vista ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Descripción del Proyecto</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">El Desafío</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">La Solución</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Características Principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="glass-effect rounded-2xl p-6">
                      <IconComponent className="w-8 h-8 text-yellow-400 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Información del Proyecto</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Cliente</span>
                  <p className="font-semibold">{project.client}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Duración</span>
                  <p className="font-semibold">{project.duration}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Equipo</span>
                  <p className="font-semibold">{project.team}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Año</span>
                  <p className="font-semibold">{project.year}</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  <ExternalLink className="w-4 h-4 inline-block mr-2" />
                  Ver Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 text-center"
                >
                  <Github className="w-4 h-4 inline-block mr-2" />
                  Código
                </a>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Resultados Obtenidos</h3>
              <div className="space-y-3">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-effect rounded-2xl p-8 text-center"
            >
              <h3 className="text-xl font-bold mb-4">¿Te gusta este proyecto?</h3>
              <p className="text-gray-300 mb-6 text-sm">Podemos crear algo similar o mejor para tu negocio</p>
              <button className="btn-primary w-full">🚀 Comenzar Mi Proyecto</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
