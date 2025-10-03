import { BASE_URL } from "./site-structure"

export const slugifyHeading = (value: string) => {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

export const buildBreadcrumbJsonLd = (
  items: { label: string; href?: string }[],
  currentPath: string,
) => {
  if (!items.length) {
    return null
  }

  const canonicalItems = items.map((item, index) => {
    const position = index + 1
    const targetPath = item.href ?? currentPath

    return {
      "@type": "ListItem",
      position,
      name: item.label,
      item: new URL(targetPath, BASE_URL).toString(),
    }
  })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: canonicalItems,
  }
}

export const buildServiceJsonLd = ({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: "Skal Ventures",
    url: BASE_URL,
  },
  url: new URL(path, BASE_URL).toString(),
})

export const buildFaqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
})
