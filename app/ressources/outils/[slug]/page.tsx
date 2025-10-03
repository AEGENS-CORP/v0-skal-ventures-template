import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import { outils, outilsMap } from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  return outils.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const outil = outilsMap.get(params.slug)
  if (!outil) {
    return {}
  }

  return createPageMetadata({
    title: outil.title,
    path: `/ressources/outils/${outil.slug}`,
    description: "Contenu à venir.",
  })
}

export default function OutilPage({ params }: { params: { slug: string } }) {
  const outil = outilsMap.get(params.slug)

  if (!outil) {
    notFound()
  }

  const canonicalPath = `/ressources/outils/${outil.slug}`

  return (
    <SimplePageLayout
      title={outil.title}
      description="Contenu à venir."
      path={canonicalPath}
      dataEntity="resource-tool"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Outils", href: "/ressources/outils" },
        { label: outil.title },
      ]}
    >
      <p>
        Retour à la liste des <Link className="underline" href="/ressources/outils">Outils</Link>.
      </p>
      <p>Contenu à venir.</p>
      <LinkSection
        title="Ressources associées"
        links={[
          { href: "/services", label: "Voir les services" },
          { href: "/faq", label: "Consulter la FAQ" },
        ]}
      />
      <p>
        Fin de la fiche outil. Retour aux <Link className="underline" href="/ressources/outils">Outils</Link> ou <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}

