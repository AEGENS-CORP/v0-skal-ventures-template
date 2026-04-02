import { notFound } from "next/navigation"
import { DetailPageView } from "@/components/site/detail-page-view"
import {
  FaqCombienTempsCadrageMeta,
  FaqCombienTempsCadragePage,
} from "@/components/site/faq-combien-temps-cadrage-page"
import {
  FaqDiagnosticOperationnelMeta,
  FaqDiagnosticOperationnelPage,
} from "@/components/site/faq-quand-faire-diagnostic-operationnel-page"
import {
  FaqQueContientCahierDesChargesMeta,
  FaqQueContientCahierDesChargesPage,
} from "@/components/site/faq-que-contient-cahier-des-charges-page"
import {
  FaqQuandFautIlPilotageExterneMeta,
  FaqQuandFautIlPilotageExternePage,
} from "@/components/site/faq-quand-faut-il-pilotage-externe-page"
import {
  FaqPeutOnLancerProjetSansCahierDesChargesMeta,
  FaqPeutOnLancerProjetSansCahierDesChargesPage,
} from "@/components/site/faq-peut-on-lancer-projet-sans-cahier-des-charges-page"
import {
  FaqFautIlConsulterPrestatairesAvantCadrerBesoinMeta,
  FaqFautIlConsulterPrestatairesAvantCadrerBesoinPage,
} from "@/components/site/faq-faut-il-consulter-prestataires-avant-cadrer-besoin-page"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, faqPages, findDetailPage } from "@/lib/ae-content"

const hub = hubPages.faq
const CUSTOM_FAQ_PAGES = {
  "combien-de-temps-prend-un-cadrage-de-projet": {
    component: FaqCombienTempsCadragePage,
    metaTitle: FaqCombienTempsCadrageMeta.title,
    metaDescription: FaqCombienTempsCadrageMeta.description,
  },
  "que-contient-un-cahier-des-charges": {
    component: FaqQueContientCahierDesChargesPage,
    metaTitle: FaqQueContientCahierDesChargesMeta.title,
    metaDescription: FaqQueContientCahierDesChargesMeta.description,
  },
  "peut-on-lancer-un-projet-sans-cahier-des-charges": {
    component: FaqPeutOnLancerProjetSansCahierDesChargesPage,
    metaTitle: FaqPeutOnLancerProjetSansCahierDesChargesMeta.title,
    metaDescription: FaqPeutOnLancerProjetSansCahierDesChargesMeta.description,
  },
  "faut-il-consulter-des-prestataires-avant-de-cadrer-le-besoin": {
    component: FaqFautIlConsulterPrestatairesAvantCadrerBesoinPage,
    metaTitle: FaqFautIlConsulterPrestatairesAvantCadrerBesoinMeta.title,
    metaDescription: FaqFautIlConsulterPrestatairesAvantCadrerBesoinMeta.description,
  },
  "quand-faut-il-un-pilotage-externe": {
    component: FaqQuandFautIlPilotageExternePage,
    metaTitle: FaqQuandFautIlPilotageExterneMeta.title,
    metaDescription: FaqQuandFautIlPilotageExterneMeta.description,
  },
  "quand-faire-un-diagnostic-operationnel": {
    component: FaqDiagnosticOperationnelPage,
    metaTitle: FaqDiagnosticOperationnelMeta.title,
    metaDescription: FaqDiagnosticOperationnelMeta.description,
  },
} as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const slugs = new Set(faqPages.map((page) => page.slug))
  for (const slug of Object.keys(CUSTOM_FAQ_PAGES)) {
    slugs.add(slug)
  }
  return Array.from(slugs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_FAQ_PAGES[slug as keyof typeof CUSTOM_FAQ_PAGES]
  if (customPage) {
    return createPageMetadata({
      title: customPage.metaTitle,
      path: `${hub.path}/${slug}`,
      description: customPage.metaDescription,
    })
  }

  const page = findDetailPage("faq", slug)
  if (!page) {
    return createPageMetadata({ title: hub.label, path: hub.path, description: hub.metaDescription })
  }

  return createPageMetadata({
    title: page.metaTitle,
    path: `${hub.path}/${page.slug}`,
    description: page.metaDescription,
  })
}

export default async function FaqDetailPage({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_FAQ_PAGES[slug as keyof typeof CUSTOM_FAQ_PAGES]
  if (customPage) {
    const CustomComponent = customPage.component
    return <CustomComponent />
  }

  const page = findDetailPage("faq", slug)
  if (!page) {
    notFound()
  }

  return <DetailPageView hubLabel={hub.label} hubPath={hub.path} page={page} />
}
