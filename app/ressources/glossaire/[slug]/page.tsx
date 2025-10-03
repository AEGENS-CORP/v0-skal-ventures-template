import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import { glossaire, glossaireMap } from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  return glossaire.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = glossaireMap.get(params.slug)
  if (!entry) {
    return {}
  }

  return createPageMetadata({
    title: entry.title,
    path: `/ressources/glossaire/${entry.slug}`,
    description: "Contenu à venir.",
  })
}

export default function GlossaireEntryPage({ params }: { params: { slug: string } }) {
  const entry = glossaireMap.get(params.slug)

  if (!entry) {
    notFound()
  }

  return (
    <SimplePageLayout
      title={entry.title}
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Glossaire", href: "/ressources/glossaire" },
        { label: entry.title },
      ]}
    >
      <p>
        Retour au <Link className="underline" href="/ressources/glossaire">Glossaire</Link>.
      </p>
      <p>Contenu à venir.</p>
      <LinkSection
        title="Ressources associées"
        links={[
          { href: "/ressources/guides", label: "Voir les guides" },
          { href: "/faq", label: "Consulter la FAQ" },
        ]}
      />
      <p>
        Fin de la définition. Retour au <Link className="underline" href="/ressources/glossaire">Glossaire</Link> ou <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}
