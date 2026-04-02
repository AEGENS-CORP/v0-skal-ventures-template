import { notFound } from "next/navigation"
import { DetailPageView } from "@/components/site/detail-page-view"
import {
  SecteurAgroalimentaireMeta,
  SecteurAgroalimentairePage,
} from "@/components/site/secteur-agroalimentaire-page"
import {
  SecteurPlasturgieMeta,
  SecteurPlasturgiePage,
} from "@/components/site/secteur-plasturgie-page"
import {
  SecteurMetalMecaniqueMeta,
  SecteurMetalMecaniquePage,
} from "@/components/site/secteur-metal-mecanique-page"
import {
  SecteurSousTraitanceIndustrielleMeta,
  SecteurSousTraitanceIndustriellePage,
} from "@/components/site/secteur-sous-traitance-industrielle-page"
import {
  SecteurIndustrieProcessMeta,
  SecteurIndustrieProcessPage,
} from "@/components/site/secteur-industrie-de-process-page"
import {
  SecteurLogistiqueMeta,
  SecteurLogistiquePage,
} from "@/components/site/secteur-logistique-page"
import { SecteurRetailMeta, SecteurRetailPage } from "@/components/site/secteur-retail-page"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, secteursPages, findDetailPage } from "@/lib/ae-content"

const hub = hubPages.secteurs
const CUSTOM_SECTEURS = {
  agroalimentaire: {
    component: SecteurAgroalimentairePage,
    metaTitle: SecteurAgroalimentaireMeta.title,
    metaDescription: SecteurAgroalimentaireMeta.description,
  },
  plasturgie: {
    component: SecteurPlasturgiePage,
    metaTitle: SecteurPlasturgieMeta.title,
    metaDescription: SecteurPlasturgieMeta.description,
  },
  "metal-mecanique": {
    component: SecteurMetalMecaniquePage,
    metaTitle: SecteurMetalMecaniqueMeta.title,
    metaDescription: SecteurMetalMecaniqueMeta.description,
  },
  "sous-traitance-industrielle": {
    component: SecteurSousTraitanceIndustriellePage,
    metaTitle: SecteurSousTraitanceIndustrielleMeta.title,
    metaDescription: SecteurSousTraitanceIndustrielleMeta.description,
  },
  "industrie-de-process": {
    component: SecteurIndustrieProcessPage,
    metaTitle: SecteurIndustrieProcessMeta.title,
    metaDescription: SecteurIndustrieProcessMeta.description,
  },
  logistique: {
    component: SecteurLogistiquePage,
    metaTitle: SecteurLogistiqueMeta.title,
    metaDescription: SecteurLogistiqueMeta.description,
  },
  retail: {
    component: SecteurRetailPage,
    metaTitle: SecteurRetailMeta.title,
    metaDescription: SecteurRetailMeta.description,
  },
} as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const slugs = new Set(secteursPages.map((page) => page.slug))
  for (const slug of Object.keys(CUSTOM_SECTEURS)) {
    slugs.add(slug)
  }
  return Array.from(slugs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_SECTEURS[slug as keyof typeof CUSTOM_SECTEURS]
  if (customPage) {
    return createPageMetadata({
      title: customPage.metaTitle,
      path: `${hub.path}/${slug}`,
      description: customPage.metaDescription,
    })
  }

  const page = findDetailPage("secteurs", slug)
  if (!page) {
    return createPageMetadata({ title: hub.label, path: hub.path, description: hub.metaDescription })
  }

  return createPageMetadata({
    title: page.metaTitle,
    path: `${hub.path}/${page.slug}`,
    description: page.metaDescription,
  })
}

export default async function SecteursDetailPage({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_SECTEURS[slug as keyof typeof CUSTOM_SECTEURS]
  if (customPage) {
    const CustomComponent = customPage.component
    return <CustomComponent />
  }

  const page = findDetailPage("secteurs", slug)
  if (!page) {
    notFound()
  }

  return <DetailPageView hubLabel={hub.label} hubPath={hub.path} page={page} />
}
