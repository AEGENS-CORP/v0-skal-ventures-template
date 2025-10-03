"use client"

import { useEffect } from "react"

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")

export function HeadingIdProvider() {
  useEffect(() => {
    const selector = "h2, h3"
    const headings = document.querySelectorAll<HTMLElement>(selector)

    headings.forEach((heading) => {
      if (heading.id) return
      const text = heading.textContent?.trim()
      if (!text) return
      const slug = slugify(text)
      if (!slug) return
      heading.id = slug
    })
  }, [])

  return null
}
