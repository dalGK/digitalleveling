"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"

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

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Actualiza el brillo vía CSS variables, sin pasar por el estado de React
    const handleMouseMove = (e: MouseEvent) => {
      glowRef.current?.style.setProperty("--mx", `${e.clientX}px`)
      glowRef.current?.style.setProperty("--my", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" data-track="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            Diseño web · Automatización · SEO
          </span>
        </motion.div>

        {/* El h1 se renderiza visible desde el servidor para no retrasar el LCP */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto text-balance">
          <span className="text-white">Diseño web y sistemas de reservas </span>
          <span className="gradient-text text-shadow">para negocios en Madrid</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Webs rápidas que convierten visitas en clientes y citas. Programadas a medida, no montadas con plantillas.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-6 max-w-sm sm:max-w-none mx-auto"
        >
          <Link href="/#contact" data-cta="diagnostico" className="btn-primary text-lg text-center">
            Solicitar diagnóstico gratuito
          </Link>
          <Link href="/#services" className="btn-secondary text-lg text-center">
            Explorar soluciones
          </Link>
        </motion.div>

        <p className="text-sm text-gray-400 mb-16">Sin compromiso · Respuesta en 24 h laborables · Madrid y toda España</p>

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
            <Link href="/#services" aria-label="Ir a la sección de soluciones">
              ↓
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
