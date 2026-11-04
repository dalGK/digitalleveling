import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Stats from "@/components/sections/Stats"
import Services from "@/components/sections/Services"
import AutomationDemos from "@/components/sections/AutomationDemos"
import Collaborator from "@/components/sections/Collaborator"
import Process from "@/components/sections/Process"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"
import CTA from "@/components/sections/CTA"
import FAQSchema from "@/components/seo/FAQSchema"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
}

// Portfolio y Testimonials siguen fuera hasta tener proyectos y opiniones reales.
// Stats muestra solo puntos verificables, sin cifras ni valoraciones.
export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <Stats />
      <Services />
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
