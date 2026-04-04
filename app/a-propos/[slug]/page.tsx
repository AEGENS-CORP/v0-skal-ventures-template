import { notFound } from "next/navigation"
import { DetailPageView } from "@/components/site/detail-page-view"
import { NotreApprocheMeta, NotreApprochePage } from "@/components/site/a-propos-notre-approche-page"
import { NotreExperienceMeta, NotreExperiencePage } from "@/components/site/a-propos-notre-experience-page"
import { QuiNousSommesMeta, QuiNousSommesPage } from "@/components/site/a-propos-qui-nous-sommes-page"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, aProposPages, findDetailPage } from "@/lib/ae-content"

const hub = hubPages["a-propos"]
const CUSTOM_A_PROPOS = {
  "qui-nous-sommes": {
    component: QuiNousSommesPage,
    metaTitle: QuiNousSommesMeta.title,
    metaDescription: QuiNousSommesMeta.description,
  },
  "notre-approche": {
    component: NotreApprochePage,
    metaTitle: NotreApprocheMeta.title,
    metaDescription: NotreApprocheMeta.description,
  },
  "notre-experience": {
    component: NotreExperiencePage,
    metaTitle: NotreExperienceMeta.title,
    metaDescription: NotreExperienceMeta.description,
  },
} as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return aProposPages.filter((page) => page.slug !== "notre-methode").map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_A_PROPOS[slug as keyof typeof CUSTOM_A_PROPOS]
  if (customPage) {
    return createPageMetadata({
      title: customPage.metaTitle,
      path: `${hub.path}/${slug}`,
      description: customPage.metaDescription,
    })
  }

  const page = findDetailPage("a-propos", slug)
  if (!page) {
    return createPageMetadata({ title: hub.label, path: hub.path, description: hub.metaDescription })
  }

  return createPageMetadata({
    title: page.metaTitle,
    path: `${hub.path}/${page.slug}`,
    description: page.metaDescription,
  })
}

export default async function AProposDetailPage({ params }: PageProps) {
  const { slug } = await params
  const customPage = CUSTOM_A_PROPOS[slug as keyof typeof CUSTOM_A_PROPOS]
  if (customPage) {
    const CustomComponent = customPage.component
    return <CustomComponent />
  }

  const page = findDetailPage("a-propos", slug)
  if (!page) {
    notFound()
  }

  return <DetailPageView hubLabel={hub.label} hubPath={hub.path} page={page} />
}
