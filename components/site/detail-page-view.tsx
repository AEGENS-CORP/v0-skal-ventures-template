import { PageFrame } from "@/components/site/page-frame"
import { ContentSections } from "@/components/site/content-sections"
import { getPageLabel, type DetailPage } from "@/lib/ae-content"

type DetailPageViewProps = {
  hubLabel: string
  hubPath: string
  page: DetailPage
}

export function DetailPageView({ hubLabel, hubPath, page }: DetailPageViewProps) {
  const related = page.relatedPaths.map((path) => ({
    href: path,
    label: getPageLabel(path),
  }))

  return (
    <PageFrame
      title={page.title}
      intro={page.intro}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: hubLabel, href: hubPath },
        { label: page.title },
      ]}
      cta={{ label: "Échanger sur votre situation", href: "/contact" }}
    >
      <ContentSections sections={page.sections} related={related} />
    </PageFrame>
  )
}
