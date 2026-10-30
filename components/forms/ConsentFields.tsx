import { contact } from "@/lib/site"

interface ConsentFieldsProps {
  consent: boolean
  onConsentChange: (value: boolean) => void
  website: string
  onWebsiteChange: (value: string) => void
}

// Casilla de consentimiento RGPD + honeypot anti-spam, comunes a todos los formularios
export default function ConsentFields({ consent, onConsentChange, website, onWebsiteChange }: ConsentFieldsProps) {
  return (
    <>
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website">No rellenes este campo</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => onWebsiteChange(e.target.value)}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={consent}
          onChange={(e) => onConsentChange(e.target.checked)}
          required
          className="mt-1 h-5 w-5 shrink-0 accent-yellow-400 cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
          Consiento el tratamiento de mis datos para responder a mi solicitud. *
        </label>
      </div>
    </>
  )
}

export function PrivacyNotice() {
  return (
    <p className="mt-8 text-xs text-gray-400 leading-relaxed">
      Responsable: Digital Leveling. Finalidad: responder a tu solicitud. Legitimación: tu consentimiento.
      Destinatarios: no se cederán datos a terceros salvo obligación legal. Derechos: acceso, rectificación, supresión
      y otros, escribiendo a {contact.email}.
    </p>
  )
}
