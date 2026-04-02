"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { BASE_URL } from "@/lib/site-structure"
import { NAP, optionAPages, faqPages, ressourcesPages, hubPages } from "@/lib/ae-content"

const serialize = (data: unknown) => JSON.stringify(data)
const pageLabelMap = new Map(optionAPages.map((page) => [page.path, page.label]))

const resolveLabel = (path: string) => pageLabelMap.get(path) ?? path.split("/").filter(Boolean).at(-1) ?? "Page"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: NAP.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logo-global.png`,
  email: NAP.email,
  telephone: NAP.phone,
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: NAP.name,
  url: BASE_URL,
  inLanguage: "fr-FR",
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: NAP.name,
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.address,
    addressLocality: NAP.city,
    postalCode: NAP.postalCode,
    addressCountry: "FR",
  },
  telephone: NAP.phone,
  email: NAP.email,
}

const buildBreadcrumbList = (path: string) => {
  const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "")
  const items: Array<{ "@type": "ListItem"; position: number; name: string; item: string }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: BASE_URL,
    },
  ]

  if (cleanPath === "/") {
    return items
  }

  let current = ""
  const segments = cleanPath.split("/").filter(Boolean)
  for (const segment of segments) {
    current += `/${segment}`
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name: resolveLabel(current),
      item: new URL(current, BASE_URL).toString(),
    })
  }

  return items
}

const buildHomeFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est votre intervention type ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous intervenons en trois étapes : diagnostic du fonctionnement opérationnel, cadrage de projet puis pilotage de mise en œuvre.",
      },
    },
    {
      "@type": "Question",
      name: "À qui s'adresse votre offre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous travaillons avec des PME industrielles qui veulent clarifier un besoin, structurer un projet et sécuriser l'exécution.",
      },
    },
  ],
})

const buildFaqSchemaForPath = (path: string) => {
  if (path === hubPages.faq.path) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqPages.map((page) => ({
        "@type": "Question",
        name: page.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: page.intro,
        },
      })),
    }
  }

  if (path.startsWith(`${hubPages.faq.path}/`)) {
    const slug = path.replace(`${hubPages.faq.path}/`, "")
    const page = faqPages.find((item) => item.slug === slug)
    if (!page) {
      return null
    }

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: page.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: page.intro,
          },
        },
      ],
    }
  }

  return null
}

const buildArticleSchemaForPath = (path: string) => {
  if (!path.startsWith(`${hubPages.ressources.path}/`)) {
    return null
  }

  const slug = path.replace(`${hubPages.ressources.path}/`, "")
  const resource = ressourcesPages.find((page) => page.slug === slug)
  if (!resource) {
    return null
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.metaDescription,
    author: {
      "@type": "Organization",
      name: NAP.name,
    },
    publisher: {
      "@type": "Organization",
      name: NAP.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo-global.png`,
      },
    },
    mainEntityOfPage: new URL(path, BASE_URL).toString(),
    inLanguage: "fr-FR",
  }
}

const buildProfileSchemaForPath = (path: string) => {
  if (path !== "/a-propos/qui-nous-sommes") {
    return null
  }

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Organization",
      name: NAP.name,
      url: BASE_URL,
      description:
        "Diagnostic, cadrage et pilotage de projets pour PME industrielles avec une approche orientée terrain et exécution.",
    },
  }
}

export function StructuredData() {
  const pathname = usePathname() ?? "/"
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "")

  const jsonLdPayloads = useMemo(() => {
    const entries: Array<Record<string, unknown>> = []

    if (normalizedPath === "/") {
      entries.push(organizationJsonLd, webSiteJsonLd, buildHomeFaqSchema())
    }

    if (normalizedPath === "/contact") {
      entries.push(localBusinessJsonLd)
    }

    const faqSchema = buildFaqSchemaForPath(normalizedPath)
    if (faqSchema) {
      entries.push(faqSchema)
    }

    const articleSchema = buildArticleSchemaForPath(normalizedPath)
    if (articleSchema) {
      entries.push(articleSchema)
    }

    const profileSchema = buildProfileSchemaForPath(normalizedPath)
    if (profileSchema) {
      entries.push(profileSchema)
    }

    entries.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: buildBreadcrumbList(normalizedPath),
    })

    return entries
  }, [normalizedPath])

  return (
    <>
      {jsonLdPayloads.map((entry, index) => (
        <script
          key={`${normalizedPath}-${index}`}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: serialize(entry) }}
        />
      ))}
    </>
  )
}
