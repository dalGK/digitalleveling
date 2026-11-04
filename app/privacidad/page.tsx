import type { Metadata } from "next"
import LegalPage from "@/components/legal/LegalPage"
import { legal, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo trata Digital Leveling los datos personales que nos facilitas a través de la web.",
  alternates: { canonical: `${SITE_URL}/privacidad` },
  // TODO: quitar noindex cuando las páginas tengan los datos reales del titular
  robots: { index: false, follow: true },
}

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad">
      <p>
        Esta política explica cómo tratamos los datos personales que nos facilitas a través de este sitio web, conforme
        al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los
        derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> {legal.owner} (Digital Leveling)
        </li>
        <li>
          <strong>NIF:</strong> {legal.taxId}
        </li>
        <li>
          <strong>Domicilio:</strong> {legal.address}
        </li>
        <li>
          <strong>Email de contacto:</strong> <a href={`mailto:${legal.email}`}>{legal.email}</a>
        </li>
      </ul>

      <h2>2. Qué datos tratamos</h2>
      <p>
        Los datos que introduces en nuestros formularios (nombre, email, teléfono, empresa y la información sobre tu
        proyecto) y los que nos facilites si nos escribes por email o WhatsApp. No recogemos datos especialmente
        protegidos ni datos de menores de 14 años.
      </p>

      <h2>3. Finalidad</h2>
      <ul>
        <li>Responder a tus consultas y solicitudes de presupuesto.</li>
        <li>Gestionar la relación comercial si llegas a contratar alguno de nuestros servicios.</li>
      </ul>
      <p>No enviamos comunicaciones comerciales sin tu consentimiento ni elaboramos perfiles automatizados.</p>

      <h2>4. Legitimación</h2>
      <ul>
        <li>
          <strong>Consentimiento</strong> (art. 6.1.a RGPD), que otorgas al marcar la casilla del formulario y que
          puedes retirar en cualquier momento.
        </li>
        <li>
          <strong>Ejecución de un contrato o medidas precontractuales</strong> (art. 6.1.b RGPD) cuando solicitas un
          presupuesto o contratas un servicio.
        </li>
      </ul>

      <h2>5. Conservación</h2>
      <p>
        Conservaremos tus datos mientras sea necesario para atender tu solicitud y, si hay relación comercial, durante
        el tiempo que exijan las obligaciones legales (fiscales y mercantiles). Las consultas que no deriven en una
        contratación se eliminarán como máximo un año después del último contacto.
      </p>

      <h2>6. Destinatarios y encargados del tratamiento</h2>
      <p>No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio utilizamos proveedores que actúan como encargados del tratamiento:</p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> (alojamiento web).
        </li>
        <li>
          <strong>Google LLC</strong> (servicio de correo electrónico con el que recibimos los formularios).
        </li>
      </ul>
      <p>
        Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo; en ese caso lo hacen al
        amparo del Marco de Privacidad de Datos UE-EE. UU. o de cláusulas contractuales tipo aprobadas por la Comisión
        Europea. Si nos contactas por WhatsApp, ese servicio se rige además por la política de privacidad de WhatsApp.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad, así como retirar tu consentimiento, escribiendo a{" "}
        <a href={`mailto:${legal.email}`}>{legal.email}</a>. Si consideras que no hemos atendido correctamente tu
        solicitud, puedes presentar una reclamación ante la{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          Agencia Española de Protección de Datos
        </a>
        .
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a pérdida, uso indebido o
        acceso no autorizado. Toda la comunicación con el sitio se realiza mediante conexión cifrada (HTTPS).
      </p>
    </LegalPage>
  )
}
