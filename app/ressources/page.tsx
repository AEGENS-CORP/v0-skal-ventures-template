import Link from "next/link"
import { createPageMetadata } from "@/lib/metadata"
import { SimplePageLayout } from "@/components/simple-page-layout"

const sections = [
  { href: "/blog", label: "Blog" },
  { href: "/ressources/guides", label: "Guides" },
  { href: "/ressources/question-hub-ia", label: "Question-Hub IA" },
  { href: "/ressources/comparatifs", label: "Comparatifs" },
  { href: "/ressources/glossaire", label: "Glossaire" },
  { href: "/ressources/outils", label: "Outils" },
  { href: "/ressources/calculateur-roi", label: "Calculateur ROI" },
]

export const metadata = createPageMetadata({
  title: "Ressources",
  path: "/ressources",
  description: "Contenu à venir.",
})

export default function RessourcesPage() {
  return (
    <SimplePageLayout
      title="Ressources"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {section.label}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}

