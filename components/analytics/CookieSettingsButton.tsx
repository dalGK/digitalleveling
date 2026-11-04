"use client"

import { GA_MEASUREMENT_ID } from "@/lib/analytics"
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/components/analytics/Analytics"

// Permite cambiar o retirar el consentimiento en cualquier momento (solo existe si hay analítica)
export default function CookieSettingsButton() {
  if (!GA_MEASUREMENT_ID) return null
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
    >
      Configurar cookies
    </button>
  )
}
