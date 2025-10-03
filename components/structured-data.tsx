"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { BASE_URL } from "@/lib/site-structure"
import {
  faqItems,
  offerCatalog,
  optionAPages,
  resourcesSections,
  servicesSections,
  solutionsSections,
} from "@/lib/ae-content"

const serialize = (data: unknown) => JSON.stringify(data, null, 2)

const pathLabelMap = new Map(optionAPages.map((page) => [page.path, page.label]))

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aegens",
  url: BASE_URL,
  logo: `${BASE_URL}/logo-nouveau.png`,
  sameAs: ["https://www.linkedin.com/company/aegens"],
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

const buildBreadcrumbList = (path: string) => {
  const list = [
    {
      "@type": "ListItem" as const,
      position: 1,
      name: "Accueil",
      item: BASE_URL,
    },
  ]

  if (path !== "/") {
    const canonical = new URL(path, BASE_URL).toString()
    list.push({
      "@type": "ListItem",
      position: 2,
      name: pathLabelMap.get(path) ?? "Page",
      item: canonical,
    })
  }

  return list
}

const buildServicesSchemas = () => {
  const base = new URL("/services", BASE_URL).toString()

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesSections.map((section, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: section.title,
      url: `${base}#${section.id}`,
    })),
  }

  const services = servicesSections.map((section) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: section.title,
    description: section.description,
    provider: {
      "@type": "Organization",
      name: "Aegens",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    url: `${base}#${section.id}`,
  }))

  return [itemList, ...services]
}

const buildSolutionsSchemas = () => {
  const base = new URL("/solutions", BASE_URL).toString()

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: solutionsSections.map((section, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: section.title,
      url: `${base}#${section.id}`,
    })),
  }

  const services = solutionsSections.map((section) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: section.title,
    description: section.description,
    provider: {
      "@type": "Organization",
      name: "Aegens",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    url: `${base}#${section.id}`,
  }))

  return [itemList, ...services]
}

const buildResourcesSchemas = () => {
  const base = new URL("/ressources", BASE_URL).toString()

  return [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: resourcesSections.map((section, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: section.title,
        url: `${base}#${section.id}`,
      })),
    },
  ]
}

const buildTarifsSchemas = () => {
  const base = new URL("/tarifs", BASE_URL).toString()

  return [
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Catalogue tarifaire Aegens",
      itemListElement: offerCatalog.map((offer, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: offer.title,
        description: offer.description,
        url: `${base}#${offer.id}`,
        priceCurrency: "EUR",
        price: "0",
        itemOffered: {
          "@type": "Service",
          name: offer.title,
        },
      })),
    },
  ]
}

const buildFaqSchemas = () => [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
]

const pageSchemas: Record<string, () => Array<Record<string, unknown>>> = {
  "/": () => [organizationJsonLd, webSiteJsonLd],
  "/services": buildServicesSchemas,
  "/solutions": buildSolutionsSchemas,
  "/ressources": buildResourcesSchemas,
  "/tarifs": buildTarifsSchemas,
  "/faq": buildFaqSchemas,
}

export function StructuredData() {
  const pathname = usePathname() ?? "/"
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "")

  const jsonLdPayloads = useMemo(() => {
    const builder = pageSchemas[normalizedPath]
    const entries: Array<Record<string, unknown>> = builder ? builder() : []

    if (normalizedPath !== "/") {
      entries.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: buildBreadcrumbList(normalizedPath),
      })
    }

    return entries
  }, [normalizedPath])

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
