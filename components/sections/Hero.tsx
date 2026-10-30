"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { CONSULTATION_URL } from "@/lib/site"

// Constelación de nodos conectados, dibujada en canvas para no re-renderizar React en cada frame
const ConstellationEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const maxDistance = 150
    let width = 0
    let height = 0
    let frame = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const nodeCount = width < 768 ? 7 : 12
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      phase: i * 0.6,
    }))

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(254, 199, 63, ${0.4 * (1 - distance / maxDistance) * 0.6})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.shadowColor = "rgba(254, 199, 63, 0.6)"
      ctx.shadowBlur = 10
      for (const node of nodes) {
        const pulse = (Math.sin(time / 320 + node.phase) + 1) / 2
        ctx.fillStyle = `rgba(254, 199, 63, ${0.6 + pulse * 0.4})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 4 * (1 + pulse * 0.2), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0
    }

    const step = (time: number) => {
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x <= 0 || node.x >= width) node.vx = -node.vx
        if (node.y <= 0 || node.y >= height) node.vy = -node.vy
        node.x = Math.max(0, Math.min(width, node.x))
        node.y = Math.max(0, Math.min(height, node.y))
      }
      draw(time)
      frame = requestAnimationFrame(step)
    }

    if (reduceMotion) {
      draw(0)
    } else {
      frame = requestAnimationFrame(step)
    }

    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
    }
  }, [reduceMotion])

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />
}

const words = ["crece online", "posiciona en Google", "capta más clientes", "escala su negocio"]

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    // Actualiza el brillo vía CSS variables, sin pasar por el estado de React
    const handleMouseMove = (e: MouseEvent) => {
      glowRef.current?.style.setProperty("--mx", `${e.clientX}px`)
      glowRef.current?.style.setProperty("--my", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute inset-0 opacity-20 hidden md:block"
        style={{
          background:
            "radial-gradient(600px at var(--mx, 50%) var(--my, 50%), rgba(254, 199, 63, 0.15), transparent 80%)",
        }}
      />

      {/* Constelaciones Conectadas */}
      <ConstellationEffect />

      <div className="container mx-auto px-4 text-center z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-2 rounded-full text-sm font-semibold border border-yellow-400/30">
            Diseño Web · SEO · Aplicaciones a Medida
          </span>
        </motion.div>

        {/* El h1 se renderiza visible desde el servidor para no retrasar el LCP */}
        <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-tight">
          <span className="gradient-text text-shadow">Diseño Web</span>
          <br />
          <span className="text-white">y SEO para</span>
          <br />
          <span className="gradient-text">Empresas</span>
        </h1>

        <p className="text-lg md:text-xl text-yellow-400 font-semibold mb-4" aria-live="polite">
          Tu negocio{" "}
          <motion.span
            key={currentWord}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            {words[currentWord]}
          </motion.span>
        </p>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Creamos páginas web profesionales y estrategias SEO para negocios que quieren captar más clientes.
          Trabajamos con empresas en España e internacionalmente.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <a href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
            Consulta Gratuita
          </a>
          <Link href="/#services" className="btn-secondary text-lg">
            Ver Servicios
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-yellow-400 text-3xl"
          >
            <Link href="/#about" aria-label="Ir a la sección Sobre nosotros">
              ↓
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
