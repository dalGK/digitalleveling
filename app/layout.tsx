import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BackgroundEffects from "@/components/ui/BackgroundEffects"
import ScrollToTop from "@/components/ui/ScrollToTop"
import SchemaOrg from "@/components/seo/SchemaOrg"
import WhatsAppButton from "@/components/ui/WhatsAppButton"
import MotionProvider from "@/components/MotionProvider"
import Analytics from "@/components/analytics/Analytics"
import { homeSeo, OG_IMAGE, SITE_URL } from "@/lib/site"

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" })

// Valores por defecto alineados con la home; cada página puede definir los suyos
const defaultTitle = homeSeo.title
const defaultDescription = homeSeo.description

// El canonical se define en cada página: uno global aquí se heredaría en rutas sin canonical propio.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Digital Leveling",
  },
  description: defaultDescription,
  authors: [{ name: "Digital Leveling", url: SITE_URL }],
  creator: "Digital Leveling",
  publisher: "Digital Leveling",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Digital Leveling",
    title: defaultTitle,
    description: defaultDescription,
    images: [OG_IMAGE],
  },
  // Sin título propio: X/Twitter usa og:title y og:description de cada página
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} bg-black text-white`}>
        <MotionProvider>
          <SchemaOrg />
          <BackgroundEffects />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
          <Analytics />
        </MotionProvider>
      </body>
    </html>
  )
}
