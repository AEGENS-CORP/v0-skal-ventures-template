import { notFound } from "next/navigation"
import { DetailPageView } from "@/components/site/detail-page-view"
import {
  RessourceCadrerProjetMeta,
  RessourceCadrerProjetPage,
} from "@/components/site/ressources-cadrer-projet-page"
import {
  RessourceCdcFonctionnelMeta,
  RessourceCdcFonctionnelPage,
} from "@/components/site/ressources-cdc-fonctionnel-page"
import {
  RessourcePilotageProjetPmeMeta,
  RessourcePilotageProjetPmePage,
} from "@/components/site/ressources-pilotage-projet-pme-page"
import {
  RessourceChoisirPrestataireMeta,
  RessourceChoisirPrestatairePage,
} from "@/components/site/ressources-choisir-prestataire-page"
import {
  RessourceStructurerBesoinMeta,
  RessourceStructurerBesoinPage,
} from "@/components/site/ressources-structurer-besoin-page"
import {
  RessourceCadrageVsGestionMeta,
  RessourceCadrageVsGestionPage,
} from "@/components/site/ressources-cadrage-vs-gestion-page"
import {
  RessourceCdcVsExpressionMeta,
  RessourceCdcVsExpressionPage,
} from "@/components/site/ressources-cdc-vs-expression-page"
import {
  RessourceAuditOrganisationnelVsSiMeta,
  RessourceAuditOrganisationnelVsSiPage,
} from "@/components/site/ressources-audit-organisationnel-vs-si-page"
import {
  RessourceAmoeMoeMoaMeta,
  RessourceAmoeMoeMoaPage,
} from "@/components/site/ressources-amoe-moe-moa-page"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, ressourcesPages, findDetailPage } from "@/lib/ae-content"

const hub = hubPages.ressources
const CUSTOM_RESSOURCES = {
  "comment-cadrer-un-projet-industriel": {
    component: RessourceCadrerProjetPage,
    metaTitle: RessourceCadrerProjetMeta.title,
    metaDescription: RessourceCadrerProjetMeta.description,
  },
  "comment-rediger-un-cahier-des-charges-fonctionnel": {
    component: RessourceCdcFonctionnelPage,
    metaTitle: RessourceCdcFonctionnelMeta.title,
    metaDescription: RessourceCdcFonctionnelMeta.description,
  },
  "comment-piloter-un-projet-industriel-en-pme": {
    component: RessourcePilotageProjetPmePage,
    metaTitle: RessourcePilotageProjetPmeMeta.title,
    metaDescription: RessourcePilotageProjetPmeMeta.description,
  },
  "comment-choisir-un-prestataire-pour-un-projet-industriel": {
    component: RessourceChoisirPrestatairePage,
    metaTitle: RessourceChoisirPrestataireMeta.title,
    metaDescription: RessourceChoisirPrestataireMeta.description,
  },
  "comment-structurer-un-besoin-avant-consultation": {
    component: RessourceStructurerBesoinPage,
    metaTitle: RessourceStructurerBesoinMeta.title,
    metaDescription: RessourceStructurerBesoinMeta.description,
  },
  "cadrage-vs-gestion-de-projet": {
    component: RessourceCadrageVsGestionPage,
    metaTitle: RessourceCadrageVsGestionMeta.title,
    metaDescription: RessourceCadrageVsGestionMeta.description,
  },
  "cahier-des-charges-vs-expression-de-besoin": {
    component: RessourceCdcVsExpressionPage,
    metaTitle: RessourceCdcVsExpressionMeta.title,
    metaDescription: RessourceCdcVsExpressionMeta.description,
  },
  "audit-organisationnel-vs-audit-si": {
    component: RessourceAuditOrganisationnelVsSiPage,
    metaTitle: RessourceAuditOrganisationnelVsSiMeta.title,
    metaDescription: RessourceAuditOrganisationnelVsSiMeta.description,
  },
  "amoe-moe-moa-quelle-difference": {
    component: RessourceAmoeMoeMoaPage,
    metaTitle: RessourceAmoeMoeMoaMeta.title,
    metaDescription: RessourceAmoeMoeMoaMeta.description,
  },
} as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ressourcesPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_RESSOURCES[slug as keyof typeof CUSTOM_RESSOURCES]
  if (customPage) {
    return createPageMetadata({
      title: customPage.metaTitle,
      path: `${hub.path}/${slug}`,
      description: customPage.metaDescription,
    })
  }

  const page = findDetailPage("ressources", slug)
  if (!page) {
    return createPageMetadata({ title: hub.label, path: hub.path, description: hub.metaDescription })
  }

  return createPageMetadata({
    title: page.metaTitle,
    path: `${hub.path}/${page.slug}`,
    description: page.metaDescription,
  })
}

export default async function RessourcesDetailPage({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_RESSOURCES[slug as keyof typeof CUSTOM_RESSOURCES]
  if (customPage) {
    const CustomComponent = customPage.component
    return <CustomComponent />
  }

  const page = findDetailPage("ressources", slug)
  if (!page) {
    notFound()
  }

  return <DetailPageView hubLabel={hub.label} hubPath={hub.path} page={page} />
}
