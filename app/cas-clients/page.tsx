import { CasClientsHubMeta, CasClientsHubPage } from "@/components/site/cas-clients-hub-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: CasClientsHubMeta.title,
  path: "/cas-clients",
  description: CasClientsHubMeta.description,
})

export default function cas_clientsHubPage() {
  return <CasClientsHubPage />
}
