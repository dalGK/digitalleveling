import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Stats from "@/components/sections/Stats"
import Services from "@/components/sections/Services"
import SectorSolutions from "@/components/sections/SectorSolutions"
import AutomationDemos from "@/components/sections/AutomationDemos"
import Collaborator from "@/components/sections/Collaborator"
import Process from "@/components/sections/Process"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"
import CTA from "@/components/sections/CTA"
import FAQSchema from "@/components/seo/FAQSchema"
import { homeSeo, OG_IMAGE, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: homeSeo.title },
  description: homeSeo.description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Digital Leveling",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [OG_IMAGE.url],
  },
}

// Portfolio y Testimonials siguen fuera hasta tener proyectos y opiniones reales.
// Stats muestra solo puntos verificables, sin cifras ni valoraciones.
export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <Stats />
      <Services />
      <SectorSolutions />
      <AutomationDemos />
      <About />
      <Process />
      <FAQ />
      <FAQSchema />
      <CTA />
      <Contact />
      <Collaborator />
    </main>
  )
}
