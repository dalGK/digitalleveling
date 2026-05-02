"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicios/desarrollo-web-madrid", label: "Desarrollo Web" },
    { href: "/servicios/seo", label: "SEO" },
    { href: "/servicios/aplicaciones-web", label: "Aplicaciones" },
    { href: "/#contact", label: "Contacto" },
  ]

  const handleCalendlyClick = () => {
    window.open("https://wa.me/34614473197?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita", "_blank")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Digital Leveling
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-yellow-400 transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <button onClick={handleCalendlyClick} className="btn-ghost">
            Consulta Gratis
          </button>
          <Link href="/servicios" className="btn-primary">
            Ver Servicios
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm md:hidden border-b border-gray-800"
          >
            <div className="flex flex-col space-y-4 p-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <button onClick={handleCalendlyClick} className="btn-ghost text-center">
                  Consulta Gratis
                </button>
                <Link href="/servicios" className="btn-primary text-center">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
