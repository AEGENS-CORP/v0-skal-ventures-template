"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { BASE_URL } from "@/lib/site-structure"
import { optionAPages, NAP } from "@/lib/ae-content"

const serialize = (data: unknown) => JSON.stringify(data, null, 2)

const pathLabelMap = new Map(optionAPages.map((page) => [page.path, page.label]))

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: NAP.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logo-nouveau.png`,
  image: `${BASE_URL}/logo-nouveau.png`,
  telephone: NAP.phone,
  email: NAP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.address,
    addressLocality: NAP.city,
    postalCode: NAP.postalCode,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "46.6667",
    longitude: "-1.2833",
  },
  areaServed: NAP.areaServed.map((area) => ({
    "@type": "City",
    name: area,
  })),
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: NAP.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logo-nouveau.png`,
  sameAs: ["https://www.linkedin.com/company/aegens"],
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: NAP.name,
  url: BASE_URL,
  inLanguage: "fr-FR",
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

const buildFaqSchemas = () => [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels services proposez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons trois services principaux : l'automatisation IA pour optimiser vos processus métier, les assistants IA métier personnalisés disponibles 24/7, et l'analyse & reporting IA pour transformer vos données en décisions.",
        },
      },
      {
        "@type": "Question",
        name: "Dans quelles régions intervenez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basés en Vendée à La Chaize-le-Vicomte, nous intervenons principalement dans les régions Pays de la Loire et Nouvelle-Aquitaine : La Roche-sur-Yon, La Rochelle, Niort, Nantes, Poitiers et leurs environs.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps prend un projet IA ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La durée varie selon la complexité du projet. Un projet d'automatisation simple peut être déployé en 2-4 semaines, tandis qu'un assistant IA métier complet nécessite généralement 1-3 mois incluant la formation et l'intégration.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le coût d'un projet IA ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs sont adaptés à chaque projet. Nous proposons des solutions sur mesure qui s'ajustent à votre budget et à vos objectifs. Contactez-nous pour un devis personnalisé.",
        },
      },
    ],
  },
]

const pageSchemas: Record<string, () => Array<Record<string, unknown>>> = {
  "/": () => [localBusinessJsonLd, organizationJsonLd, webSiteJsonLd, ...buildFaqSchemas()],
  "/services": () => [localBusinessJsonLd],
  "/services/automatisation": () => [localBusinessJsonLd],
  "/services/assistant-ia-metier": () => [localBusinessJsonLd],
  "/services/analyse-reporting": () => [localBusinessJsonLd],
  "/etudes-de-cas": () => [localBusinessJsonLd],
  "/a-propos": () => [localBusinessJsonLd],
  "/contact": () => [localBusinessJsonLd],
  "/ville/la-roche-sur-yon": () => [localBusinessJsonLd],
  "/ville/la-rochelle": () => [localBusinessJsonLd],
  "/ville/niort": () => [localBusinessJsonLd],
  "/ville/nantes": () => [localBusinessJsonLd],
  "/ville/poitiers": () => [localBusinessJsonLd],
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
