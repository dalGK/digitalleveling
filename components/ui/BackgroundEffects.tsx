"use client"

import { useEffect, useState } from "react"

type Particle = {
  left: number
  top: number
  duration: number
  delay: number
}

// Todo con animaciones CSS (compositor) en lugar de framer-motion: no ocupa el hilo principal
// y se desactiva solo con prefers-reduced-motion (ver globals.css).
export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const count = window.innerWidth < 768 ? 12 : 20
    setParticles(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
      })),
    )
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
      {/* Gradient Orbs */}
      <div className="bg-orb bg-orb-1 absolute top-20 left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="bg-orb bg-orb-2 absolute top-1/2 right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl hidden md:block" />
      <div className="bg-orb bg-orb-3 absolute bottom-20 left-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl hidden md:block" />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <div
          key={i}
          className="bg-particle absolute w-1 h-1 bg-yellow-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(254, 199, 63, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(254, 199, 63, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
