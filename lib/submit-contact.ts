import { trackEvent } from "@/lib/analytics"

export interface ContactPayload {
  source: string
  name: string
  email?: string
  phone?: string
  company?: string
  business?: string
  service?: string
  budget?: string
  message?: string
  details?: Record<string, string>
  consent: boolean
  website: string
}

export async function submitContact(payload: ContactPayload): Promise<boolean> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const result = await response.json()
    const ok = Boolean(result.success)
    // Conversión real: solo cuando el servidor confirma el envío
    if (ok) trackEvent("generate_lead", { form: payload.source, service: payload.service ?? "" })
    return ok
  } catch {
    return false
  }
}
