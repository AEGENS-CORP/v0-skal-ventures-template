import { HubPageView } from "@/components/site/hub-page-view"
import { createPageMetadata } from "@/lib/metadata"
import { hubPages, expertisesPages } from "@/lib/ae-content"

const hub = hubPages.expertises

export const metadata = createPageMetadata({
  title: hub.metaTitle,
  path: hub.path,
  description: hub.metaDescription,
})

export default function expertisesHubPage() {
  const cards = expertisesPages.map((page) => ({
    href: `${hub.path}/${page.slug}`,
    title: page.title,
    description: page.intro,
  }))

  return <HubPageView hub={hub} cards={cards} />
}
