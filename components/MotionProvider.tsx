"use client"

import { MotionConfig } from "framer-motion"

// Respeta la preferencia del sistema "reducir movimiento" en todas las animaciones de framer-motion
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
