import { ProblematiquesHubMeta, ProblematiquesHubPage } from "@/components/site/problematiques-hub-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: ProblematiquesHubMeta.title,
  path: "/problematiques",
  description: ProblematiquesHubMeta.description,
})

export default function problematiquesHubPage() {
  return <ProblematiquesHubPage />
}
