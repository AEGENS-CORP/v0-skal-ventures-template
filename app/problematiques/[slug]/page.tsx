import { notFound } from "next/navigation"
import { DetailPageView } from "@/components/site/detail-page-view"
import {
  ProblematiquePertesTempsMeta,
  ProblematiquePertesTempsPage,
} from "@/components/site/problematique-pertes-temps-page"
import {
  ProblematiqueRessaisiesMeta,
  ProblematiqueRessaisiesPage,
} from "@/components/site/problematique-ressaisies-excel-mails-page"
import {
  ProblematiqueProjetMalCadreMeta,
  ProblematiqueProjetMalCadrePage,
} from "@/components/site/problematique-projet-mal-cadre-page"
import {
  ProblematiqueBesoinMalDefiniMeta,
  ProblematiqueBesoinMalDefiniPage,
} from "@/components/site/problematique-besoin-mal-defini-page"
import {
  ProblematiqueChoisirSolutionMeta,
  ProblematiqueChoisirSolutionPage,
} from "@/components/site/problematique-choisir-solution-page"
import {
  ProblematiqueOrganisationInefficaceMeta,
  ProblematiqueOrganisationInefficacePage,
} from "@/components/site/problematique-organisation-inefficace-page"
import {
  ProblematiqueManqueVisibiliteProcessusMeta,
  ProblematiqueManqueVisibiliteProcessusPage,
} from "@/components/site/problematique-manque-visibilite-processus-page"
import {
  ProblematiqueMethodesNonHarmoniseesMeta,
  ProblematiqueMethodesNonHarmoniseesPage,
} from "@/components/site/problematique-methodes-travail-non-harmonisees-page"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, problematiquesPages, findDetailPage } from "@/lib/ae-content"

const hub = hubPages.problematiques
const CUSTOM_PROBLEMATIQUES = {
  "pertes-de-temps-entre-services-industrie": {
    component: ProblematiquePertesTempsPage,
    metaTitle: ProblematiquePertesTempsMeta.title,
    metaDescription: ProblematiquePertesTempsMeta.description,
  },
  "ressaisies-excel-mails-pme-industrielle": {
    component: ProblematiqueRessaisiesPage,
    metaTitle: ProblematiqueRessaisiesMeta.title,
    metaDescription: ProblematiqueRessaisiesMeta.description,
  },
  "projet-industriel-mal-cadre": {
    component: ProblematiqueProjetMalCadrePage,
    metaTitle: ProblematiqueProjetMalCadreMeta.title,
    metaDescription: ProblematiqueProjetMalCadreMeta.description,
  },
  "besoin-mal-defini-avant-consultation-prestataires": {
    component: ProblematiqueBesoinMalDefiniPage,
    metaTitle: ProblematiqueBesoinMalDefiniMeta.title,
    metaDescription: ProblematiqueBesoinMalDefiniMeta.description,
  },
  "choisir-solution-ou-prestataire-industriel": {
    component: ProblematiqueChoisirSolutionPage,
    metaTitle: ProblematiqueChoisirSolutionMeta.title,
    metaDescription: ProblematiqueChoisirSolutionMeta.description,
  },
  "organisation-entre-services-inefficace": {
    component: ProblematiqueOrganisationInefficacePage,
    metaTitle: ProblematiqueOrganisationInefficaceMeta.title,
    metaDescription: ProblematiqueOrganisationInefficaceMeta.description,
  },
  "manque-de-visibilite-sur-les-processus": {
    component: ProblematiqueManqueVisibiliteProcessusPage,
    metaTitle: ProblematiqueManqueVisibiliteProcessusMeta.title,
    metaDescription: ProblematiqueManqueVisibiliteProcessusMeta.description,
  },
  "methodes-de-travail-non-harmonisees": {
    component: ProblematiqueMethodesNonHarmoniseesPage,
    metaTitle: ProblematiqueMethodesNonHarmoniseesMeta.title,
    metaDescription: ProblematiqueMethodesNonHarmoniseesMeta.description,
  },
} as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return problematiquesPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_PROBLEMATIQUES[slug as keyof typeof CUSTOM_PROBLEMATIQUES]
  if (customPage) {
    return createPageMetadata({
      title: customPage.metaTitle,
      path: `${hub.path}/${slug}`,
      description: customPage.metaDescription,
    })
  }

  const page = findDetailPage("problematiques", slug)
  if (!page) {
    return createPageMetadata({ title: hub.label, path: hub.path, description: hub.metaDescription })
  }

  return createPageMetadata({
    title: page.metaTitle,
    path: `${hub.path}/${page.slug}`,
    description: page.metaDescription,
  })
}

export default async function ProblematiquesDetailPage({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_PROBLEMATIQUES[slug as keyof typeof CUSTOM_PROBLEMATIQUES]
  if (customPage) {
    const CustomComponent = customPage.component
    return <CustomComponent />
  }

  const page = findDetailPage("problematiques", slug)
  if (!page) {
    notFound()
  }

  return <DetailPageView hubLabel={hub.label} hubPath={hub.path} page={page} />
}
