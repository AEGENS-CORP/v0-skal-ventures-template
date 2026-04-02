import { FaqHubMeta, FaqHubPage } from "@/components/site/faq-hub-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: FaqHubMeta.title,
  path: "/faq",
  description: FaqHubMeta.description,
})

export default function faqHubPage() {
  return <FaqHubPage />
}
