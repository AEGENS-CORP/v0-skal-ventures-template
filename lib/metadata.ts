import type { Metadata } from "next"
import { BASE_URL } from "./site-structure"
import { SEO_INDEX_ALL, indexablePaths } from "./ae-content"

type MetadataParams = {
  title: string
  description?: string
  path: string
}

export const createPageMetadata = ({ title, description, path }: MetadataParams): Metadata => {
  const allowIndex =
    process.env.SEO_INDEX_ALL === "true" || SEO_INDEX_ALL || indexablePaths.has(path)

  const metaDescription = description ?? "Page en construction."
  const canonical = new URL(path, BASE_URL).toString()
  const ogImage = new URL("/logo-global.png", BASE_URL).toString()
  const isHome = path === "/"
  const cleanTitle = title.replace(/\s*\|\s*AEGENS?$/i, "").trim()
  const brandedTitle = `${cleanTitle} | AEGENS`

  return {
    title: cleanTitle,
    description: metaDescription,
    alternates: {
      canonical,
      languages: {
        "fr-FR": canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title: brandedTitle,
      description: metaDescription,
      url: canonical,
      locale: "fr_FR",
      siteName: "AEGENS",
      type: isHome ? "website" : "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: brandedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: allowIndex
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: false,
        },
  }
}
