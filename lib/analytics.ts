// Medición de interacciones y conversiones.
// Los eventos se envían a GA4 solo si está configurado (NEXT_PUBLIC_GA_MEASUREMENT_ID) y el usuario
// ha aceptado las cookies de analítica; en cualquier otro caso trackEvent no hace nada.

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""

export const CONSENT_STORAGE_KEY = "dl-cookie-consent"
export type ConsentValue = "granted" | "denied"

// Interacciones: indican interés, no un contacto confirmado.
// Conversiones: generate_lead solo se envía cuando el servidor confirma que el formulario se entregó.
export type AnalyticsEvent =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "booking_click"
  | "cta_click"
  | "generate_lead"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}

export function readConsent(): ConsentValue | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return value === "granted" || value === "denied" ? value : null
  } catch {
    return null
  }
}

export function saveConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
  } catch {
    // Sin almacenamiento disponible: la elección solo dura esta visita
  }
}
