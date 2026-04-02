import { RessourcesHubMeta, RessourcesHubPage } from "@/components/site/ressources-hub-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: RessourcesHubMeta.title,
  path: "/ressources",
  description: RessourcesHubMeta.description,
})

export default function ressourcesHubPage() {
  return <RessourcesHubPage />
}
