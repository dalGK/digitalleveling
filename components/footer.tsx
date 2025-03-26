import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-dlblack border-t border-dlgray/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-dlgold">DIGITAL LEVELING</span>
            </div>
            <p className="text-dllightgray mb-4">
              Servicios informáticos de vanguardia para transformar digitalmente su negocio.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-dlgold mr-2" />
                <span className="text-white">España, Madrid</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-dlgold mr-2" />
                <a href="mailto:Leveling.digi@gmail.com" className="text-white hover:text-dlgold transition-colors">
                  Leveling.digi@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-dlgold mr-2" />
                <a href="tel:+34614473197" className="text-white hover:text-dlgold transition-colors">
                  +34 614 47 31 97
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-dllightgray hover:text-dlgold transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dllightgray hover:text-dlgold transition-colors">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dllightgray hover:text-dlgold transition-colors">
                  Automatización
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dllightgray hover:text-dlgold transition-colors">
                  Analítica de Datos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dllightgray hover:text-dlgold transition-colors">
                  Ciberseguridad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-dllightgray hover:text-dlgold transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-dllightgray hover:text-dlgold transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#portafolio" className="text-dllightgray hover:text-dlgold transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-dllightgray hover:text-dlgold transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-dllightgray hover:text-dlgold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="text-dllightgray">
                <span className="font-medium">Lunes - Viernes:</span> 9:00 - 18:00
              </li>
              <li className="text-dllightgray">
                <span className="font-medium">Sábado:</span> 10:00 - 14:00
              </li>
              <li className="text-dllightgray">
                <span className="font-medium">Domingo:</span> Cerrado
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dlgray/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dllightgray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Digital Leveling. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-dllightgray hover:text-dlgold transition-colors text-sm">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-dllightgray hover:text-dlgold transition-colors text-sm">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

