"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const menuItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/servicios/desarrollo-web-madrid", label: "Diseño Web" },
  { href: "/servicios/automatizacion", label: "Automatización" },
  { href: "/servicios/seo", label: "SEO" },
  { href: "/#contact", label: "Contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      data-track="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text" onClick={closeMenu}>
          Digital Leveling
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
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

        <div className="hidden md:block">
          <Link href="/#contact" data-cta="diagnostico" className="btn-primary !px-5 !py-2.5 text-sm lg:text-base">
            Solicitar diagnóstico
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm md:hidden border-b border-gray-800"
            >
              <div className="flex flex-col space-y-4 p-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-yellow-400 transition-colors duration-300 py-1"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    href="/#contact"
                    data-cta="diagnostico"
                    className="btn-primary text-center block"
                    onClick={closeMenu}
                  >
                    Solicitar diagnóstico gratuito
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
