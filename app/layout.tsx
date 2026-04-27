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
    default: "Agencia de Desarrollo Web en Madrid | Digital Leveling",
    template: "%s | Digital Leveling",
  },
  description:
    "Agencia de desarrollo web en Madrid especializada en Next.js, React y e-commerce. Diseño web profesional, marketing digital y consultoría para empresas en España y Latinoamérica. Desde 300€.",
  keywords: [
    "desarrollo web madrid",
    "agencia desarrollo web madrid",
    "diseño web madrid",
    "crear pagina web madrid",
    "empresa desarrollo web españa",
    "agencia digital madrid",
    "desarrollo web profesional",
    "consultoría digital madrid",
    "tienda online madrid",
    "ecommerce madrid",
    "next.js madrid",
    "diseño web profesional españa",
    "agencia marketing digital madrid",
    "desarrollo aplicaciones web",
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
    alternateLocale: ["es_MX", "es_AR", "es_CO"],
    url: "https://digitalleveling.com",
    siteName: "Digital Leveling",
    title: "Agencia de Desarrollo Web en Madrid | Digital Leveling",
    description:
      "Agencia de desarrollo web en Madrid especializada en Next.js, React y e-commerce. Diseño web profesional, marketing digital y consultoría para empresas en España y Latinoamérica.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Leveling - Agencia de Desarrollo Web en Madrid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digitalleveling",
    creator: "@digitalleveling",
    title: "Agencia de Desarrollo Web en Madrid | Digital Leveling",
    description:
      "Agencia de desarrollo web en Madrid especializada en Next.js, React y e-commerce. Diseño web profesional para España y Latinoamérica.",
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
