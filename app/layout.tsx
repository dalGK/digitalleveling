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

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalleveling.com"),
  title: {
    default: "Diseño Web y SEO para Empresas en España | Digital Leveling",
    template: "%s | Digital Leveling",
  },
  description:
    "Agencia de diseño web y SEO para empresas en España. Creamos páginas web profesionales optimizadas para posicionar en Google y captar clientes. Trabajamos con negocios en España e internacionalmente.",
  keywords: [
    "diseño web españa",
    "desarrollo web españa",
    "seo españa",
    "agencia seo españa",
    "páginas web para empresas",
    "desarrollo web para negocios",
    "seo para empresas",
    "diseño web profesional",
    "agencia web españa",
    "posicionamiento web españa",
    "crear pagina web empresa",
    "diseño web madrid",
    "desarrollo web madrid",
    "agencia digital españa",
    "aplicaciones web a medida",
    "digital leveling",
  ],
  authors: [{ name: "Digital Leveling", url: "https://digitalleveling.com" }],
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
    url: "https://digitalleveling.com",
    siteName: "Digital Leveling",
    title: "Diseño Web y SEO para Empresas en España | Digital Leveling",
    description:
      "Agencia de diseño web y SEO para empresas en España. Páginas web profesionales optimizadas para Google. Proyectos en España e internacionalmente.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Leveling - Diseño Web y SEO para Empresas en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalleveling",
    creator: "@digitalleveling",
    title: "Diseño Web y SEO para Empresas en España | Digital Leveling",
    description:
      "Agencia de diseño web y SEO para empresas en España. Páginas web profesionales optimizadas para posicionar en Google.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://digitalleveling.com",
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
        <SchemaOrg />
        <BackgroundEffects />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  )
}
