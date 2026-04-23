import Link from "next/link"
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-6">Digital Leveling</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos ideas en experiencias digitales excepcionales. Especializados en desarrollo web y consultoría digital para empresas que buscan destacar en el mundo online.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com/digitalleveling", label: "Facebook" },
                { icon: Linkedin, href: "https://linkedin.com/company/digital-leveling", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/digitalleveling", label: "Instagram" },
              ].map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 group"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Servicios</h4>
            <ul className="space-y-3">
              {[
                { href: "/servicios/desarrollo-web-madrid", label: "Desarrollo Web Madrid" },
                { href: "/servicios/ecommerce", label: "E-commerce y Tiendas Online" },
                { href: "/servicios/aplicaciones-web", label: "Aplicaciones Web" },
                { href: "/servicios/marketing-digital", label: "Marketing Digital" },
                { href: "/servicios/consultoria-digital", label: "Consultoría Digital" },
                { href: "/servicios/gestion-redes-sociales", label: "Redes Sociales" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-400">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">leveling.digi@gmail.com</p>
                  <p className="text-gray-500 text-sm">Respuesta en 24h</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">+34 614 47 31 97</p>
                  <p className="text-gray-500 text-sm">Lun - Vie, 9:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">Madrid, España</p>
                  <p className="text-gray-500 text-sm">Madrid - CP 28025</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/*<div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">
              Mantente al día con las últimas <span className="gradient-text">tendencias digitales</span>
            </h4>
            <p className="text-gray-400 mb-6">
              Recibe tips, casos de estudio y novedades del mundo del desarrollo web directamente en tu inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder-gray-400"
              />
              <button className="btn-primary whitespace-nowrap">
                <Mail className="w-4 h-4 inline-block mr-2" /> Suscribirse
              </button>
            </div>
          </div>
        </div>
        */}
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Digital Leveling. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {[
                { href: "/privacidad", label: "Política de Privacidad" },
                { href: "/terminos", label: "Términos de Servicio" },
                { href: "/cookies", label: "Cookies" },
                { href: "/sitemap.xml", label: "Sitemap" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
