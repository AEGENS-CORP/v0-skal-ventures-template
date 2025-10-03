import Link from "next/link"

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold">Page introuvable</h1>
        <p className="text-white/70">Contenu à venir.</p>
        <Link className="underline" href="/">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
