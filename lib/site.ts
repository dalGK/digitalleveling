export const SITE_URL = "https://digitalleveling.com"

export const contact = {
  email: "leveling.digi@gmail.com",
  phoneDisplay: "+34 614 473 197",
  phoneE164: "+34614473197",
  whatsappNumber: "34614473197",
  street: "Calle General Ricardos",
  postalCode: "28025",
  city: "Madrid",
  country: "España",
  hours: "Lun - Vie, 9:00 - 18:00",
}

export function whatsappUrl(message = "Hola, me interesa una consulta gratuita") {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const CONSULTATION_URL = whatsappUrl()

// Datos del titular para las páginas legales (LSSI / RGPD).
// TODO: completar con los datos reales del titular antes de considerar las páginas legales definitivas.
export const legal = {
  owner: "[Nombre y apellidos o razón social del titular]",
  taxId: "[NIF/CIF]",
  address: `${contact.street}, ${contact.postalCode} ${contact.city}, ${contact.country}`,
  email: contact.email,
  lastUpdated: "15 de octubre de 2026",
}
