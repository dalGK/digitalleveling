import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

type Entry = { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }

const routes: Entry[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/servicios", priority: 0.9, changeFrequency: "weekly" },
  { path: "/servicios/desarrollo-web-madrid", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/seo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/automatizacion", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/ecommerce", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/aplicaciones-web", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicios/marketing-digital", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicios/consultoria-digital", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicios/gestion-redes-sociales", priority: 0.7, changeFrequency: "monthly" },
  { path: "/agendar-llamada", priority: 0.7, changeFrequency: "monthly" },
  { path: "/consulta-personalizada", priority: 0.6, changeFrequency: "monthly" },
  { path: "/trabajar-juntos", priority: 0.6, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
