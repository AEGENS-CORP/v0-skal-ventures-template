import {
  ModelesChecklistsHubMeta,
  ModelesChecklistsHubPage,
} from "@/components/site/modeles-checklists-hub-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: ModelesChecklistsHubMeta.title,
  path: "/modeles-checklists",
  description: ModelesChecklistsHubMeta.description,
})

export default function ModelesChecklistsPage() {
  return <ModelesChecklistsHubPage />
}
