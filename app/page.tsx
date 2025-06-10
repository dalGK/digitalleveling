import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Process from "@/components/sections/Process"
import Portfolio from "@/components/sections/Portfolio"
import Testimonials from "@/components/sections/Testimonials"
import Stats from "@/components/sections/Stats"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"
import CTA from "@/components/sections/CTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Process />
      {/*<Stats />*/}
      {/* <Portfolio />*/}
      {/* <Testimonials >*/}
      <FAQ />
      <CTA />
      <Contact />
    </main>
  )
}
