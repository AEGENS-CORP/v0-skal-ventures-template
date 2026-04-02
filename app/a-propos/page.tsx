import { AProposHubMeta, AProposHubPage } from "@/components/site/a-propos-hub-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: AProposHubMeta.title,
  path: "/a-propos",
  description: AProposHubMeta.description,
})

export default function a_proposHubPage() {
  return <AProposHubPage />
}
