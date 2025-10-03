"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { BASE_URL } from "@/lib/site-structure"
import {
  aeFaqItems,
  aeResourcesSections,
  aeServicesSections,
  aeSolutionsSections,
  aeTariffPlans,
  buildAeBreadcrumbs,
} from "@/lib/ae-site-structure"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aegens",
  url: BASE_URL,
  logo: `${BASE_URL}/logo-nouveau.png`,
  sameAs: ["https://www.linkedin.com"],
}

const websiteJsonLd = {
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

const serialize = (data: unknown) => JSON.stringify(data, null, 2)

export function StructuredData() {
  const pathname = usePathname() ?? "/"

  const jsonLdPayloads = useMemo(() => {
    const entries: Array<Record<string, unknown>> = []

    if (pathname === "/") {
      entries.push(organizationJsonLd, websiteJsonLd)
    }

    const breadcrumbs = buildAeBreadcrumbs(pathname)

    if (breadcrumbs.length > 1) {
      entries.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item) => ({
          "@type": "ListItem",
          position: item.position,
          name: item.name,
          item: item.item,
        })),
      })
    }

    if (pathname === "/services") {
      entries.push({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Services Aegens",
        itemListElement: aeServicesSections.map((section, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: section.title,
          item: new URL(`/services#${section.id}`, BASE_URL).toString(),
        })),
      })

      aeServicesSections.forEach((section) => {
        entries.push({
          "@context": "https://schema.org",
          "@type": "Service",
          name: section.title,
          description: section.summary,
          provider: {
            "@type": "Organization",
            name: "Aegens",
            url: BASE_URL,
          },
          areaServed: {
            "@type": "Country",
            name: "France",
          },
          url: new URL(`/services#${section.id}`, BASE_URL).toString(),
        })
      })
    }

    if (pathname === "/solutions") {
      entries.push({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Solutions Aegens",
        itemListElement: aeSolutionsSections.map((section, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: section.title,
          item: new URL(`/solutions#${section.id}`, BASE_URL).toString(),
        })),
      })

      aeSolutionsSections.forEach((section) => {
        entries.push({
          "@context": "https://schema.org",
          "@type": "Service",
          name: section.title,
          description: section.summary,
          provider: {
            "@type": "Organization",
            name: "Aegens",
            url: BASE_URL,
          },
          areaServed: {
            "@type": "Country",
            name: "France",
          },
          url: new URL(`/solutions#${section.id}`, BASE_URL).toString(),
        })
      })
    }

    if (pathname === "/ressources") {
      entries.push({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Ressources IA",
        itemListElement: aeResourcesSections.map((section, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: section.title,
          item: new URL(`/ressources#${section.id}`, BASE_URL).toString(),
        })),
      })
    }

    if (pathname === "/tarifs") {
      entries.push({
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Catalogue des offres IA",
        itemListElement: aeTariffPlans.map((plan, index) => ({
          "@type": "Offer",
          position: index + 1,
          name: plan.name,
          description: plan.summary,
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            price: 0,
          },
          url: new URL(`/tarifs#${plan.id}`, BASE_URL).toString(),
        })),
      })
    }

    if (pathname === "/faq") {
      entries.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: aeFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
