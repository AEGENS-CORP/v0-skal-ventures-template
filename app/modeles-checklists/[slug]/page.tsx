import { notFound, redirect } from "next/navigation"
import {
  ModeleExempleCdcMeta,
  ModeleExempleCdcPage,
} from "@/components/site/modeles-exemple-cdc-page"
import {
  ModeleChecklistCadrageMeta,
  ModeleChecklistCadragePage,
} from "@/components/site/modeles-checklist-cadrage-page"
import {
  ModeleChecklistConsultationMeta,
  ModeleChecklistConsultationPage,
} from "@/components/site/modeles-checklist-consultation-page"
import {
  ModeleMatriceCriteresMeta,
  ModeleMatriceCriteresPage,
} from "@/components/site/modeles-matrice-criteres-page"
import {
  ModeleTrameDiagnosticMeta,
  ModeleTrameDiagnosticPage,
} from "@/components/site/modeles-trame-diagnostic-operationnel-page"
import {
  ModeleExempleRoadmapMeta,
  ModeleExempleRoadmapPage,
} from "@/components/site/modeles-exemple-roadmap-page"
import { ModelesChecklistsHubMeta } from "@/components/site/modeles-checklists-hub-page"
import { createPageMetadata } from "@/lib/metadata"

const MODEL_CHECKLIST_ALIASES = {} as const

const CUSTOM_MODEL_PAGES = {
  "exemple-cahier-des-charges-fonctionnel": {
    component: ModeleExempleCdcPage,
    metaTitle: ModeleExempleCdcMeta.title,
    metaDescription: ModeleExempleCdcMeta.description,
  },
  "checklist-cadrage-projet-industriel": {
    component: ModeleChecklistCadragePage,
    metaTitle: ModeleChecklistCadrageMeta.title,
    metaDescription: ModeleChecklistCadrageMeta.description,
  },
  "checklist-consultation-prestataires": {
    component: ModeleChecklistConsultationPage,
    metaTitle: ModeleChecklistConsultationMeta.title,
    metaDescription: ModeleChecklistConsultationMeta.description,
  },
  "matrice-criteres-choix-solution-ou-prestataire": {
    component: ModeleMatriceCriteresPage,
    metaTitle: ModeleMatriceCriteresMeta.title,
    metaDescription: ModeleMatriceCriteresMeta.description,
  },
  "trame-diagnostic-operationnel": {
    component: ModeleTrameDiagnosticPage,
    metaTitle: ModeleTrameDiagnosticMeta.title,
    metaDescription: ModeleTrameDiagnosticMeta.description,
  },
  "exemple-roadmap-projet": {
    component: ModeleExempleRoadmapPage,
    metaTitle: ModeleExempleRoadmapMeta.title,
    metaDescription: ModeleExempleRoadmapMeta.description,
  },
} as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const customSlugs = Object.keys(CUSTOM_MODEL_PAGES)
  const aliasSlugs = Object.keys(MODEL_CHECKLIST_ALIASES)
  const slugs = [...new Set([...customSlugs, ...aliasSlugs])]
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_MODEL_PAGES[slug as keyof typeof CUSTOM_MODEL_PAGES]
  if (customPage) {
    return createPageMetadata({
      title: customPage.metaTitle,
      path: `/modeles-checklists/${slug}`,
      description: customPage.metaDescription,
    })
  }

  return createPageMetadata({
    title: ModelesChecklistsHubMeta.title,
    path: "/modeles-checklists",
    description: ModelesChecklistsHubMeta.description,
  })
}

export default async function ModelesChecklistsAliasPage({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_MODEL_PAGES[slug as keyof typeof CUSTOM_MODEL_PAGES]
  if (customPage) {
    const CustomComponent = customPage.component
    return <CustomComponent />
  }

  const target = MODEL_CHECKLIST_ALIASES[slug as keyof typeof MODEL_CHECKLIST_ALIASES]
  if (!target) {
    notFound()
  }

  redirect(target)
}
