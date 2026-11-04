"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { GA_MEASUREMENT_ID, readConsent, saveConsent, trackEvent, type AnalyticsEvent, type ConsentValue } from "@/lib/analytics"

export const OPEN_COOKIE_SETTINGS_EVENT = "dl:open-cookie-settings"

function eventForHref(href: string): AnalyticsEvent | null {
  if (href.startsWith("https://wa.me/")) return "whatsapp_click"
  if (href.startsWith("tel:")) return "phone_click"
  if (href.startsWith("mailto:")) return "email_click"
  if (href.startsWith("https://cal.com/")) return "booking_click"
  return null
}

// Un único listener mide los clics en WhatsApp, teléfono, email y reservas de toda la web.
// La ubicación sale del atributo data-track más cercano (p. ej. "hero", "header") o de la ruta.
function useClickTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]")
      if (!link) return
      const href = link.getAttribute("href") ?? ""
      const location = link.closest("[data-track]")?.getAttribute("data-track") ?? window.location.pathname
      const event = eventForHref(href)
      if (event) {
        trackEvent(event, { link_location: location, page_path: window.location.pathname })
      } else if (link.hasAttribute("data-cta")) {
        trackEvent("cta_click", {
          cta: link.getAttribute("data-cta") ?? "",
          link_location: location,
          page_path: window.location.pathname,
        })
      }
    }
    document.addEventListener("click", handleClick, { capture: true })
    return () => document.removeEventListener("click", handleClick, { capture: true })
  }, [])
}

export default function Analytics() {
  useClickTracking()
  const [consent, setConsent] = useState<ConsentValue | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    const stored = readConsent()
    setConsent(stored)
    setShowBanner(stored === null)

    const openSettings = () => setShowBanner(true)
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
  }, [])

  // Sin ID de GA4 no se carga nada ni se muestra el banner: la web no usa cookies de analítica
  if (!GA_MEASUREMENT_ID) return null

  const choose = (value: ConsentValue) => {
    saveConsent(value)
    setShowBanner(false)
    if (value === "denied" && consent === "granted") {
      // Retirar el consentimiento requiere recargar para descargar gtag
      window.location.reload()
      return
    }
    setConsent(value)
  }

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Preferencias de cookies"
          className="fixed bottom-4 inset-x-4 md:left-auto md:right-6 md:max-w-md z-[60] glass-effect bg-black/90 rounded-2xl p-5 border border-gray-700 shadow-2xl"
        >
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Usamos cookies de analítica (Google Analytics) para saber cómo se usa la web y mejorarla. Solo se activan si
            las aceptas.{" "}
            <Link href="/cookies" className="text-yellow-400 underline hover:text-yellow-300">
              Más información
            </Link>
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => choose("denied")} className="btn-ghost text-sm py-2.5">
              Rechazar
            </button>
            <button type="button" onClick={() => choose("granted")} className="btn-ghost text-sm py-2.5">
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
