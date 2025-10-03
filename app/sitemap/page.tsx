import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { htmlSitemapEntries } from "@/lib/ae-content"

export const metadata = createPageMetadata({
  title: "Plan du site — Option A",
  path: "/sitemap",
  description: "Page en construction.",
})

export default function SitemapPage() {
  return (
    <SimplePageLayout
      title="Plan du site — Option A"
      description="Liste alphabétique des pages actuellement structurées."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Plan du site" },
      ]}
    >
      <ul className="ae-list">
        {htmlSitemapEntries.map((route) => (
          <li key={route}>
            <Link href={route}>{route}</Link>
          </li>
        ))}
      </ul>
    </SimplePageLayout>
  )
}
