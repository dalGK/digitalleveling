import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BackgroundEffects from "@/components/ui/BackgroundEffects"
import ScrollToTop from "@/components/ui/ScrollToTop"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Leveling - Subir de nivel tu negocio en internet",
  description: "Desarrollo web profesional y consultoría digital para hacer crecer tu negocio online",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} bg-black text-white`}>
        <BackgroundEffects />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
