import { SecteursHubMeta, SecteursHubPage } from "@/components/site/secteurs-hub-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: SecteursHubMeta.title,
  path: "/secteurs",
  description: SecteursHubMeta.description,
})

export default function secteursHubPage() {
  return <SecteursHubPage />
}
