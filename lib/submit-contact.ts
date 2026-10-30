export interface ContactPayload {
  source: string
  name: string
  email: string
  phone?: string
  company?: string
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
    return Boolean(result.success)
  } catch {
    return false
  }
}
