export const projects = [
  {
    slug: "plataforma-ecommerce",
    title: "Plataforma E-commerce",
    description:
      "Plataforma de comercio electrónico con arquitectura headless y experiencia personalizada para una tienda de moda premium.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Desarrollo Web",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Sanity.io", "Vercel"],
    challenge:
      "El cliente necesitaba una plataforma de comercio electrónico que ofreciera una experiencia de usuario excepcional, con tiempos de carga rápidos y una gestión de contenido flexible. Su plataforma anterior sufría problemas de rendimiento y limitaba su capacidad para personalizar la experiencia de compra.",
    solution:
      "Desarrollamos una plataforma e-commerce con arquitectura headless utilizando Next.js para el frontend y Sanity.io como CMS. Implementamos Stripe para procesamiento de pagos y diseñamos una interfaz de usuario personalizada con Tailwind CSS. La plataforma se desplegó en Vercel para garantizar un rendimiento óptimo y escalabilidad.",
    results: [
      "Aumento del 45% en la tasa de conversión",
      "Reducción del 60% en el tiempo de carga de páginas",
      "Incremento del 30% en el valor medio del carrito de compra",
      "Mejora significativa en la experiencia de usuario, reflejada en un aumento del NPS de 65 a 85",
    ],
  },
  {
    slug: "migracion-nube",
    title: "Migración a la Nube",
    description:
      "Migración completa de infraestructura on-premise a soluciones cloud nativas para una empresa de servicios financieros.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Cloud",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"],
    challenge:
      "Una empresa de servicios financieros operaba con infraestructura on-premise obsoleta que generaba altos costos de mantenimiento, problemas de escalabilidad y limitaciones para implementar nuevas funcionalidades. Necesitaban modernizar su infraestructura sin interrumpir sus operaciones diarias.",
    solution:
      "Diseñamos e implementamos una estrategia de migración por fases a AWS, utilizando Terraform para infraestructura como código. Containerizamos las aplicaciones con Docker y desplegamos en Kubernetes para orquestar los contenedores. Implementamos pipelines de CI/CD para automatizar el despliegue y las pruebas.",
    results: [
      "Reducción del 40% en costos de infraestructura",
      "Mejora del 99.99% en disponibilidad del sistema",
      "Reducción del tiempo de despliegue de nuevas funcionalidades de semanas a horas",
      "Escalabilidad automática para manejar picos de demanda sin intervención manual",
    ],
  },
  {
    slug: "automatizacion-procesos",
    title: "Automatización de Procesos",
    description:
      "Sistema de automatización para optimizar flujos de trabajo en manufactura para una empresa industrial.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Automatización",
    technologies: ["Python", "Node.js", "RPA", "IoT", "Azure"],
    challenge:
      "Una empresa de manufactura enfrentaba ineficiencias en sus procesos de producción y control de calidad. Los procesos manuales generaban errores, retrasos y costos elevados. Necesitaban automatizar sus flujos de trabajo para mejorar la eficiencia y reducir errores.",
    solution:
      "Desarrollamos un sistema integral de automatización utilizando tecnologías RPA (Robotic Process Automation) para tareas administrativas y sensores IoT para monitoreo en tiempo real de la producción. Implementamos algoritmos en Python para análisis de datos y predicción de mantenimiento, y creamos dashboards en tiempo real con Node.js.",
    results: [
      "Reducción del 75% en errores de producción",
      "Aumento del 38% en productividad",
      "Ahorro anual de más de 500.000€ en costos operativos",
      "Predicción de fallos de equipamiento con 92% de precisión, reduciendo el tiempo de inactividad",
    ],
  },
  {
    slug: "dashboard-analitico",
    title: "Dashboard Analítico",
    description:
      "Dashboard interactivo para visualización y análisis de datos empresariales en tiempo real para una cadena de retail.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Analítica",
    technologies: ["React", "D3.js", "GraphQL", "PostgreSQL", "AWS"],
    challenge:
      "Una cadena de retail con múltiples tiendas carecía de visibilidad en tiempo real sobre su rendimiento. Los informes manuales eran lentos, propensos a errores y no permitían tomar decisiones ágiles basadas en datos actualizados.",
    solution:
      "Diseñamos un dashboard analítico interactivo utilizando React y D3.js para visualizaciones avanzadas. Implementamos una API GraphQL para consultas eficientes de datos y PostgreSQL como base de datos. El sistema se integró con los sistemas de punto de venta existentes para proporcionar análisis en tiempo real.",
    results: [
      "Visibilidad en tiempo real del rendimiento de todas las tiendas",
      "Reducción del 85% en el tiempo dedicado a generar informes",
      "Identificación de oportunidades de venta cruzada que aumentaron los ingresos en un 15%",
      "Optimización de inventario que redujo los costos de almacenamiento en un 25%",
    ],
  },
  {
    slug: "aplicacion-web-progresiva",
    title: "Aplicación Web Progresiva",
    description:
      "PWA con funcionalidad offline y experiencia similar a aplicaciones nativas para una empresa de servicios de campo.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Desarrollo Web",
    technologies: ["React", "Workbox", "IndexedDB", "Firebase", "Material UI"],
    challenge:
      "Una empresa con técnicos de campo necesitaba una aplicación que funcionara en áreas con conectividad limitada. Sus técnicos perdían tiempo y eficiencia al no poder acceder a información crítica cuando estaban en zonas sin cobertura.",
    solution:
      "Desarrollamos una Aplicación Web Progresiva (PWA) con capacidades offline utilizando React y Workbox. Implementamos IndexedDB para almacenamiento local de datos y sincronización en segundo plano cuando se recupera la conexión. Firebase se utilizó para la autenticación y almacenamiento en la nube.",
    results: [
      "Funcionalidad completa incluso sin conexión a internet",
      "Reducción del 60% en el tiempo de completar formularios de servicio",
      "Aumento del 40% en el número de servicios completados por día",
      "Mejora significativa en la satisfacción de los técnicos y clientes",
    ],
  },
  {
    slug: "plataforma-iot",
    title: "Plataforma IoT",
    description: "Sistema de monitoreo y control para dispositivos IoT industriales en una planta de producción.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Automatización",
    technologies: ["MQTT", "Node.js", "InfluxDB", "Grafana", "Docker"],
    challenge:
      "Una planta de producción industrial carecía de visibilidad sobre el rendimiento de sus equipos y consumo energético. Necesitaban un sistema para monitorear en tiempo real sus máquinas y optimizar su funcionamiento.",
    solution:
      "Implementamos una red de sensores IoT conectados mediante el protocolo MQTT. Desarrollamos un backend en Node.js para procesar y almacenar los datos en InfluxDB (base de datos de series temporales). Creamos dashboards personalizados con Grafana para visualizar métricas clave y configuramos alertas automáticas para condiciones anómalas.",
    results: [
      "Reducción del 30% en el consumo energético",
      "Detección temprana de fallos que evitó paradas no programadas",
      "Aumento del 25% en la vida útil de los equipos gracias al mantenimiento predictivo",
      "ROI del 280% en el primer año de implementación",
    ],
  },
]

