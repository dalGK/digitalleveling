import type { Metadata } from "next"
import LegalPage from "@/components/legal/LegalPage"
import { legal, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal y condiciones de uso del sitio web de Digital Leveling.",
  alternates: { canonical: `${SITE_URL}/aviso-legal` },
  // TODO: quitar noindex cuando las páginas tengan los datos reales del titular
  robots: { index: false, follow: true },
}

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso Legal">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
      </p>
      <ul>
        <li>
          <strong>Titular:</strong> {legal.owner}
        </li>
        <li>
          <strong>Nombre comercial:</strong> Digital Leveling
        </li>
        <li>
          <strong>NIF:</strong> {legal.taxId}
        </li>
        <li>
          <strong>Domicilio:</strong> {legal.address}
        </li>
        <li>
          <strong>Email:</strong> <a href={`mailto:${legal.email}`}>{legal.email}</a>
        </li>
        <li>
          <strong>Sitio web:</strong> {SITE_URL}
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web ofrece información sobre los servicios de diseño web, desarrollo de aplicaciones, SEO y
        marketing digital de Digital Leveling, así como medios para contactar y solicitar presupuesto. El acceso y uso
        del sitio atribuye la condición de usuario e implica la aceptación de este aviso legal.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del sitio y a no emplearlos para
        actividades ilícitas, contrarias a la buena fe o que puedan dañar los sistemas del titular o de terceros, ni
        para enviar comunicaciones no solicitadas a través de los formularios.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos del sitio (textos, diseño, logotipos, código y demás elementos) son titularidad de Digital
        Leveling o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o
        transformación sin autorización expresa, salvo para uso personal y privado.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños derivados de interrupciones del servicio, errores técnicos o del
        uso indebido del sitio por parte de los usuarios. La información publicada tiene carácter orientativo; los
        precios y condiciones definitivos de cada servicio se fijan en el presupuesto correspondiente.
      </p>

      <h2>6. Enlaces externos</h2>
      <p>
        El sitio puede contener enlaces a sitios de terceros (por ejemplo, WhatsApp o plataformas de reserva de
        citas). Digital Leveling no controla ni se responsabiliza de sus contenidos ni de sus políticas de privacidad.
      </p>

      <h2>7. Protección de datos</h2>
      <p>
        El tratamiento de los datos personales que facilites a través del sitio se describe en la{" "}
        <a href="/privacidad">política de privacidad</a>.
      </p>

      <h2>8. Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los
        juzgados y tribunales que correspondan conforme a la normativa vigente.
      </p>
    </LegalPage>
  )
}
