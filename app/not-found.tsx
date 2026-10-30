import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24 text-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-[12rem] md:text-[20rem] font-bold text-yellow-400/5 select-none pointer-events-none"
      >
        404
      </div>

      <div className="relative space-y-6 max-w-md">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <h2 className="text-2xl font-semibold text-white">Página no encontrada</h2>
        <p className="text-gray-300">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/" className="btn-primary inline-flex items-center justify-center">
            <Home aria-hidden="true" className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <Link href="/servicios" className="btn-secondary">
            Ver servicios
          </Link>
        </div>
      </div>
    </main>
  )
}
