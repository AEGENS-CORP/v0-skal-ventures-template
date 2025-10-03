import type { Metadata } from "next"
import { BASE_URL } from "./site-structure"
import { aeIndexablePaths } from "./ae-site-structure"

type MetadataParams = {
  title: string
  description?: string
  path: string
}

export const createPageMetadata = ({ title, description, path }: MetadataParams): Metadata => {
  const allowIndex = process.env.SEO_INDEX_ALL === "true" || aeIndexablePaths.has(path)

  const metaDescription = description ?? "Contenu à venir."
  const canonical = new URL(path, BASE_URL).toString()
  const isHome = path === "/"
  const fullTitle = `${title} | Aegens`

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical,
      languages: {
        "fr-FR": canonical,
      },
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical,
      locale: "fr_FR",
      siteName: "Aegens",
      type: isHome ? "website" : "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
    },
    robots: allowIndex
      ? undefined
      : {
          index: false,
          follow: false,
        },
  }
}
