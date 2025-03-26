import Hero from "@/components/hero"
import Services from "@/components/services"
import Technologies from "@/components/technologies"
import Testimonials from "@/components/testimonials"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Contact from "@/components/contact"
import Features from "@/components/features"
import Sustainability from "@/components/sustainability"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Services />
      <Technologies />
      <Testimonials />
      <Portfolio />
      <About />
      <Features />
      <Sustainability />
      <Contact />
    </main>
  )
}

