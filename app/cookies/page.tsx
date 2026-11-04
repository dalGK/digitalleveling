import type { Metadata } from "next"
import LegalPage from "@/components/legal/LegalPage"
import { legal, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Información sobre el uso de cookies en el sitio web de Digital Leveling.",
  alternates: { canonical: `${SITE_URL}/cookies` },
  // TODO: quitar noindex cuando las páginas tengan los datos reales del titular
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies">
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información sobre tu
        visita. Tecnologías similares, como el almacenamiento local, se rigen por las mismas normas.
      </p>

      <h2>2. Cookies que utiliza este sitio</h2>
      <p>
        Este sitio <strong>no utiliza cookies de analítica, publicidad ni seguimiento</strong>, ni propias ni de
        terceros. Por ese motivo no mostramos un banner de consentimiento.
      </p>
      <p>
        Solo podrían utilizarse cookies técnicas estrictamente necesarias para el funcionamiento del sitio, que están
        exentas de consentimiento según el artículo 22.2 de la LSSI-CE.
      </p>

      <h2>3. Servicios de terceros</h2>
      <p>
        Si haces clic en enlaces externos (por ejemplo, WhatsApp o la plataforma de reserva de llamadas), saldrás de
        este sitio y esos servicios podrán instalar sus propias cookies conforme a sus políticas, que te recomendamos
        consultar.
      </p>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador (Chrome, Firefox,
        Safari, Edge, etc.).
      </p>

      <h2>5. Cambios en esta política</h2>
      <p>
        Si en el futuro incorporamos herramientas de analítica u otras cookies no técnicas, actualizaremos esta
        política y solicitaremos tu consentimiento previo. Para cualquier duda, escríbenos a{" "}
        <a href={`mailto:${legal.email}`}>{legal.email}</a>.
      </p>
    </LegalPage>
  )
}
