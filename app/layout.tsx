import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Leveling | Servicios Informáticos",
  description:
    "Empresa especializada en desarrollo web, cloud computing, automatización y consultoría tecnológica. Transformamos digitalmente a nuestros clientes con soluciones innovadoras.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geist.className} dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'