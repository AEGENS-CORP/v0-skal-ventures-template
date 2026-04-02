import { notFound } from "next/navigation"
import { DetailPageView } from "@/components/site/detail-page-view"
import { OffreDiagnosticPage } from "@/components/site/offres-diagnostic-page"
import { OffreCadragePage } from "@/components/site/offres-cadrage-page"
import { OffrePilotagePage } from "@/components/site/offres-pilotage-page"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, offresPages, findDetailPage } from "@/lib/ae-content"

const hub = hubPages.offres

const CUSTOM_OFFRES = {
  "diagnostic-fonctionnement-operationnel-pme-industrielle": {
    component: OffreDiagnosticPage,
    metaTitle: "Diagnostic du fonctionnement opérationnel | AEGENS",
    metaDescription:
      "AEGENS accompagne l’industrie, la logistique et le retail dans l’analyse du fonctionnement opérationnel, l’identification des points de blocage et la structuration des priorités d’action.",
  },
  "cadrage-projet-industriel-cahier-des-charges": {
    component: OffreCadragePage,
    metaTitle: "Cadrage de projet industriel et cahier des charges | AEGENS",
    metaDescription:
      "AEGENS accompagne l’industrie, la logistique et le retail dans le cadrage de projet, la structuration du besoin et la rédaction d’un cahier des charges exploitable.",
  },
  "pilotage-mise-en-oeuvre-projet-industriel": {
    component: OffrePilotagePage,
    metaTitle: "Pilotage de mise en œuvre de projet | AEGENS",
    metaDescription:
      "AEGENS accompagne l’industrie, la logistique et le retail dans le pilotage de mise en œuvre, la coordination des acteurs et le suivi structuré des projets.",
  },
} as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return offresPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  const customOffre = CUSTOM_OFFRES[slug as keyof typeof CUSTOM_OFFRES]
  if (customOffre) {
    return createPageMetadata({
      title: customOffre.metaTitle,
      path: `/offres/${slug}`,
      description: customOffre.metaDescription,
    })
  }

  const page = findDetailPage("offres", slug)
  if (!page) {
    return createPageMetadata({ title: hub.label, path: hub.path, description: hub.metaDescription })
  }

  return createPageMetadata({
    title: page.metaTitle,
    path: `${hub.path}/${page.slug}`,
    description: page.metaDescription,
  })
}

export default async function OffreDetailPage({ params }: PageProps) {
  const { slug } = await params

  const customOffre = CUSTOM_OFFRES[slug as keyof typeof CUSTOM_OFFRES]
  if (customOffre) {
    const CustomComponent = customOffre.component
    return <CustomComponent />
  }

  const page = findDetailPage("offres", slug)
  if (!page) {
    notFound()
  }

  return <DetailPageView hubLabel={hub.label} hubPath={hub.path} page={page} />
}
