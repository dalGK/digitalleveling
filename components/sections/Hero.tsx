"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

// Componente para las constelaciones conectadas
const ConstellationEffect = () => {
  const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number }>>([])
  const [connections, setConnections] = useState<Array<{ from: number; to: number; opacity: number }>>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Establecer dimensiones solo en el cliente
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    // Solo crear nodos cuando tenemos las dimensiones
    if (dimensions.width === 0 || dimensions.height === 0) return

    // Crear nodos iniciales
    const initialNodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))
    setNodes(initialNodes)

    const animateNodes = () => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          const newX = node.x + node.vx
          const newY = node.y + node.vy
          let newVx = node.vx
          let newVy = node.vy

          // Rebotar en los bordes
          if (newX <= 0 || newX >= dimensions.width) newVx = -newVx
          if (newY <= 0 || newY >= dimensions.height) newVy = -newVy

          return {
            ...node,
            x: Math.max(0, Math.min(dimensions.width, newX)),
            y: Math.max(0, Math.min(dimensions.height, newY)),
            vx: newVx,
            vy: newVy,
          }
        }),
      )
    }

    const updateConnections = () => {
      setNodes((currentNodes) => {
        const newConnections: Array<{ from: number; to: number; opacity: number }> = []
        const maxDistance = 150

        for (let i = 0; i < currentNodes.length; i++) {
          for (let j = i + 1; j < currentNodes.length; j++) {
            const dx = currentNodes[i].x - currentNodes[j].x
            const dy = currentNodes[i].y - currentNodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < maxDistance) {
              const opacity = 1 - distance / maxDistance
              newConnections.push({
                from: i,
                to: j,
                opacity: opacity * 0.6,
              })
            }
          }
        }

        setConnections(newConnections)
        return currentNodes
      })
    }

    const interval = setInterval(() => {
      animateNodes()
      updateConnections()
    }, 50)

    return () => clearInterval(interval)
  }, [dimensions])

  // No renderizar nada hasta tener las dimensiones
  if (dimensions.width === 0 || dimensions.height === 0) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {/* Conexiones */}
        {connections.map((connection, index) => {
          const fromNode = nodes[connection.from]
          const toNode = nodes[connection.to]
          if (!fromNode || !toNode) return null

          return (
            <motion.line
              key={`${connection.from}-${connection.to}-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(254, 199, 63, 0.4)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: connection.opacity }}
              transition={{ duration: 0.3 }}
            />
          )
        })}
      </svg>

      {/* Nodos */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            left: node.x - 4,
            top: node.y - 4,
            boxShadow: "0 0 10px rgba(254, 199, 63, 0.6)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: node.id * 0.2,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const words = ["Innovador", "Profesional", "Exitoso", "Digital"]
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/leveling-digi/30min", "_blank")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(254, 199, 63, 0.15), transparent 80%)`,
        }}
      />

      {/* Constelaciones Conectadas */}
      <ConstellationEffect />

      <div className="container mx-auto px-4 text-center z-10 pt-20">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block bg-yellow-400/20 text-yellow-400 px-6 py-2 rounded-full text-sm font-semibold border border-yellow-400/30">
              🚀 Transformamos tu presencia digital
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text text-shadow">Subir de nivel</span>
            <br />
            <span className="text-white">tu negocio</span>
            <br />
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="gradient-text"
            >
              {words[currentWord]}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Desarrollo web de vanguardia, consultoría digital estratégica y soluciones tecnológicas que impulsan el
            crecimiento exponencial de tu empresa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button onClick={handleCalendlyClick} className="btn-primary text-lg">
              🚀 Agendar Llamada
            </button>
            {/* <Link href="/#portfolio" className="btn-secondary text-lg">
            👀 Ver Proyectos
          </Link>*/}
           
          </motion.div>

          {/* Stats Preview */}
          {/*
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "100+", label: "Proyectos" },
            { number: "50+", label: "Clientes" },
            { number: "5★", label: "Rating" },
            { number: "24/7", label: "Soporte" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        */}
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
            className="text-yellow-400 text-3xl cursor-pointer"
          >
            <Link href="/#about">↓</Link>
          </motion.div>
        </motion.div>
      </div>
    </section >
  )
}
