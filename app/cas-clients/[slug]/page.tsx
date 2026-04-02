import { notFound } from "next/navigation"
import { DetailPageView } from "@/components/site/detail-page-view"
import {
  CasClientDiagnosticCadrageMeta,
  CasClientDiagnosticCadragePage,
} from "@/components/site/cas-client-diagnostic-cadrage-page"
import {
  CasClientPilotageMiseEnOeuvreMeta,
  CasClientPilotageMiseEnOeuvrePage,
} from "@/components/site/cas-client-pilotage-mise-en-oeuvre-page"
import {
  CasClientReductionRessaisiesMeta,
  CasClientReductionRessaisiesPage,
} from "@/components/site/cas-client-reduction-ressaisies-page"
import {
  CasClientStructurationBesoinMeta,
  CasClientStructurationBesoinPage,
} from "@/components/site/cas-client-structuration-besoin-page"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, casClientsPages, findDetailPage } from "@/lib/ae-content"

const hub = hubPages["cas-clients"]
const CUSTOM_CAS_CLIENTS = {
  "diagnostic-et-cadrage-dun-projet-industriel": {
    component: CasClientDiagnosticCadragePage,
    metaTitle: CasClientDiagnosticCadrageMeta.title,
    metaDescription: CasClientDiagnosticCadrageMeta.description,
  },
  "pilotage-de-mise-en-oeuvre-dun-projet-operationnel": {
    component: CasClientPilotageMiseEnOeuvrePage,
    metaTitle: CasClientPilotageMiseEnOeuvreMeta.title,
    metaDescription: CasClientPilotageMiseEnOeuvreMeta.description,
  },
  "reduction-des-ressaisies-et-clarification-des-methodes": {
    component: CasClientReductionRessaisiesPage,
    metaTitle: CasClientReductionRessaisiesMeta.title,
    metaDescription: CasClientReductionRessaisiesMeta.description,
  },
  "structuration-dun-besoin-avant-consultation": {
    component: CasClientStructurationBesoinPage,
    metaTitle: CasClientStructurationBesoinMeta.title,
    metaDescription: CasClientStructurationBesoinMeta.description,
  },
} as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return casClientsPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_CAS_CLIENTS[slug as keyof typeof CUSTOM_CAS_CLIENTS]
  if (customPage) {
    const baseMeta = createPageMetadata({
      title: customPage.metaTitle,
      path: `${hub.path}/${slug}`,
      description: customPage.metaDescription,
    })
    return {
      ...baseMeta,
      title: { absolute: customPage.metaTitle },
      openGraph: {
        ...(baseMeta.openGraph ?? {}),
        title: customPage.metaTitle,
      },
      twitter: {
        ...(baseMeta.twitter ?? {}),
        title: customPage.metaTitle,
      },
    }
  }

  const page = findDetailPage("cas-clients", slug)
  if (!page) {
    return createPageMetadata({ title: hub.label, path: hub.path, description: hub.metaDescription })
  }

  return createPageMetadata({
    title: page.metaTitle,
    path: `${hub.path}/${page.slug}`,
    description: page.metaDescription,
  })
}

export default async function CasClientsDetailPage({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_CAS_CLIENTS[slug as keyof typeof CUSTOM_CAS_CLIENTS]
  if (customPage) {
    const CustomComponent = customPage.component
    return <CustomComponent />
  }

  const page = findDetailPage("cas-clients", slug)
  if (!page) {
    notFound()
  }

  return <DetailPageView hubLabel={hub.label} hubPath={hub.path} page={page} />
}
