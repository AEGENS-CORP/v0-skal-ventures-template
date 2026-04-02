import { notFound } from "next/navigation"
import { DetailPageView } from "@/components/site/detail-page-view"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, expertisesPages, findDetailPage } from "@/lib/ae-content"

const hub = hubPages.expertises

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return expertisesPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const page = findDetailPage("expertises", slug)
  if (!page) {
    return createPageMetadata({ title: hub.label, path: hub.path, description: hub.metaDescription })
  }

  return createPageMetadata({
    title: page.metaTitle,
    path: `${hub.path}/${page.slug}`,
    description: page.metaDescription,
  })
}

export default async function ExpertisesDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = findDetailPage("expertises", slug)
  if (!page) {
    notFound()
  }

  return <DetailPageView hubLabel={hub.label} hubPath={hub.path} page={page} />
}
