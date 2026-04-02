import type { DetailPage } from "@/content/site/types"

export const DETAIL_PAGE_TEMPLATE: DetailPage = {
  slug: "slug-page",
  title: "Titre de page",
  intro: "Intro courte qui répond en une phrase.",
  metaTitle: "Meta title (55-65 caractères)",
  metaDescription: "Meta description claire (140-160 caractères).",
  sections: [
    {
      title: "Section 1",
      text: "Texte principal de la section.",
      bullets: ["Point 1", "Point 2", "Point 3"],
      layout: "default",
    },
    {
      title: "Section 2",
      text: "Texte complémentaire.",
      bullets: ["Point A", "Point B"],
      layout: "checklist",
    },
  ],
  relatedPaths: ["/offres/diagnostic-fonctionnement-operationnel-pme-industrielle", "/contact"],
  template: "standard",
}
