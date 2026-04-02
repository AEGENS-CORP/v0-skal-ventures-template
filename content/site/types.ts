export const SEO_INDEX_ALL = false as const

export type AePage = {
  path: string
  label: string
  indexable?: boolean
}

export type HubKey =
  | "offres"
  | "problematiques"
  | "expertises"
  | "secteurs"
  | "ressources"
  | "cas-clients"
  | "a-propos"
  | "faq"

export type HubPage = {
  key: HubKey
  path: `/${HubKey}`
  label: string
  title: string
  intro: string
  metaTitle: string
  metaDescription: string
}

export type ContentSection = {
  title: string
  text: string
  bullets?: string[]
  layout?: "default" | "cards" | "checklist" | "timeline"
  emphasis?: string
}

export type DetailPage = {
  slug: string
  title: string
  intro: string
  metaTitle: string
  metaDescription: string
  sections: ContentSection[]
  relatedPaths: string[]
  template?: "standard" | "dense" | "conversion"
}

export type DetailPagesByHub = Record<HubKey, DetailPage[]>

export type AeNavLink = {
  label: string
  href: string
}
