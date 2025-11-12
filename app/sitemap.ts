import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/site-structure"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL

  // Main pages
  const routes = [
    "",
    "/services",
    "/services/audit",
    "/services/assistant-ia-metier",
    "/services/analyse-reporting",
    "/services/automatisation",
    "/services/vente-gestion",
    "/a-propos",
    "/contact",
    "/etudes-de-cas",
    "/plan-du-site",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ]

  // City pages
  const cities = [
    "/ville/la-roche-sur-yon",
    "/ville/la-rochelle",
    "/ville/niort",
    "/ville/nantes",
    "/ville/poitiers",
    "/ville/angouleme",
  ]

  const allRoutes = [...routes, ...cities]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/ville") ? 0.7 : 0.8,
  }))
}
