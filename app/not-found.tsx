import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-dlgold">404</h1>
        <h2 className="text-2xl font-semibold text-white">Página no encontrada</h2>
        <p className="text-white/70">Lo sentimos, la página que está buscando no existe o ha sido movida.</p>
        <Link href="/">
          <Button className="bg-dlgold text-dlblack hover:bg-dlgold/90">
            <Home className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-0 geometric-pattern opacity-20"></div>
        <div className="text-9xl font-bold text-dlgold opacity-10">404</div>
      </div>
    </div>
  )
}

