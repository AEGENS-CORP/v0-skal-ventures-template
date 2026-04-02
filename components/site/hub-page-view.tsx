import type { HubPage } from "@/lib/ae-content"
import { PageFrame } from "@/components/site/page-frame"
import { HubCards } from "@/components/site/hub-cards"

type HubPageViewProps = {
  hub: HubPage
  cards: Array<{
    href: string
    title: string
    description: string
  }>
}

export function HubPageView({ hub, cards }: HubPageViewProps) {
  return (
    <PageFrame
      title={hub.title}
      intro={hub.intro}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: hub.label },
      ]}
      cta={{ label: "Parlons de votre projet", href: "/contact" }}
    >
      <HubCards cards={cards} />
    </PageFrame>
  )
}
