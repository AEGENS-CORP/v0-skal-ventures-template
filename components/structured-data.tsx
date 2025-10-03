"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import {
  BASE_URL,
  services as servicesCatalog,
  casUsage as casUsageCatalog,
  sectors as sectorsCatalog,
} from "@/lib/site-structure"

const capitalize = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

const resolveRouteTitle = (segment: string, parent?: string): string => {
  const slug = segment.replace(/\/$/, "")

  if (!parent) {
    switch (slug) {
      case "services":
        return "Services"
      case "secteurs":
        return "Secteurs"
      case "cas-usage":
        return "Cas d'usage"
      case "ressources":
        return "Ressources"
      case "blog":
        return "Blog"
      case "faq":
        return "FAQ"
      default:
        return capitalize(slug.replace(/-/g, " "))
    }
  }

  if (parent === "services") {
    const service = servicesCatalog.find((item) => item.slug === slug)
    if (service) return service.title
  }

  if (parent === "cas-usage") {
    const cas = casUsageCatalog.find((item) => item.slug === slug)
    if (cas) return cas.title
  }

  if (parent === "secteurs") {
    const sector = sectorsCatalog.find((item) => item.slug === slug)
    if (sector) return sector.title
  }

  return capitalize(slug.replace(/-/g, " "))
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aegens",
  url: BASE_URL,
  logo: `${BASE_URL}/logo-nouveau.png`,
  sameAs: [
    "https://www.linkedin.com",
  ],
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aegens",
  url: BASE_URL,
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/recherche?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

const buildBreadcrumbList = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean)
  const items: { position: number; name: string; item: string }[] = []

  items.push({ position: 1, name: "Accueil", item: BASE_URL })

  segments.forEach((segment, index) => {
    const parent = index > 0 ? segments[index - 1] : undefined
    const name = resolveRouteTitle(segment, parent)
    const path = segments.slice(0, index + 1).join("/")
    const url = new URL(`/${path}`, BASE_URL).toString()

    items.push({
      position: index + 2,
      name,
      item: url,
    })
  })

  return items
}

const serialize = (data: unknown) => JSON.stringify(data, null, 2)

export function StructuredData() {
  const pathname = usePathname() ?? "/"

  const jsonLdPayloads = useMemo(() => {
    const entries: Array<Record<string, unknown>> = [organizationJsonLd, webSiteJsonLd]
    const breadcrumbList = buildBreadcrumbList(pathname)

    if (breadcrumbList.length > 1) {
      entries.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbList.map((item) => ({
          "@type": "ListItem",
          position: item.position,
          name: item.name,
          item: item.item,
        })),
      })
    }

    const segments = pathname.split("/").filter(Boolean)

    if (segments[0] === "services" && segments[1]) {
      const service = servicesCatalog.find((item) => item.slug === segments[1])
      const serviceUrl = new URL(pathname, BASE_URL).toString()

      entries.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service?.title ?? "Service d'accompagnement IA",
        description: service?.description ?? "Service proposé par Aegens, spécialiste de l'intelligence artificielle.",
        provider: {
          "@type": "Organization",
          name: "Aegens",
          url: BASE_URL,
        },
        areaServed: {
          "@type": "Country",
          name: "France",
        },
        url: serviceUrl,
      })
    }

    if (pathname === "/faq") {
      entries.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Comment Aegens accompagne les projets d'intelligence artificielle ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Les experts Aegens assurent un accompagnement personnalisé à chaque étape du projet, de l'idéation au déploiement.",
            },
          },
        ],
      })
    }

    return entries
  }, [pathname])

  return (
    <>
      {jsonLdPayloads.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: serialize(entry) }}
        />
      ))}
    </>
  )
}
