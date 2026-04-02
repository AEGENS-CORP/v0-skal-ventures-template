import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/site-structure"
import { optionAPages } from "@/lib/ae-content"

const getPathDepth = (path: string) => path.split("/").filter(Boolean).length

const getPriority = (path: string) => {
  if (path === "/") return 1
  if (path === "/offres") return 0.95
  if (path.startsWith("/offres/")) return 0.9
  if (path === "/modeles-checklists") return 0.9
  if (path.startsWith("/modeles-checklists/")) return 0.86
  if (path === "/secteurs" || path === "/problematiques" || path === "/ressources") return 0.88
  if (getPathDepth(path) === 1) return 0.82
  return 0.76
}

const getChangeFrequency = (path: string): MetadataRoute.Sitemap[number]["changeFrequency"] => {
  if (path === "/") return "weekly"
  if (getPathDepth(path) === 1) return "weekly"
  return "monthly"
}

export default function sitemap(): MetadataRoute.Sitemap {
  const uniquePages = Array.from(
    new Map(
      optionAPages
        .filter((page) => page.indexable !== false)
        .map((page) => [page.path, page]),
    ).values(),
  )

  const lastModified = new Date()

  return uniquePages
    .filter((page) => page.indexable !== false)
    .map((page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified,
      changeFrequency: getChangeFrequency(page.path),
      priority: getPriority(page.path),
    }))
}
