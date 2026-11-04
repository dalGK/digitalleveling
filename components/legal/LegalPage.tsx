import Link from "next/link"
import { legal } from "@/lib/site"

interface LegalPageProps {
  title: string
  children: React.ReactNode
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto glass-effect rounded-3xl p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
          <p className="text-sm text-gray-400 mb-10">Última actualización: {legal.lastUpdated}</p>
          <div className="legal-content space-y-6 text-gray-300 leading-relaxed">{children}</div>
          <nav aria-label="Páginas legales" className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/aviso-legal" className="text-yellow-400 hover:underline">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="text-yellow-400 hover:underline">
              Política de privacidad
            </Link>
            <Link href="/cookies" className="text-yellow-400 hover:underline">
              Política de cookies
            </Link>
          </nav>
        </article>
      </div>
    </main>
  )
}
