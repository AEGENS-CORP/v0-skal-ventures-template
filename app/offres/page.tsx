import { OffresHubMeta, OffresHubPage } from "@/components/site/offres-hub-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: OffresHubMeta.title,
  path: "/offres",
  description: OffresHubMeta.description,
})

export default function offresHubPage() {
  return <OffresHubPage />
}
