import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { getAllRoutes } from "@/lib/site-structure"

const routes = getAllRoutes().sort((a, b) => a.localeCompare(b))

export const metadata = createPageMetadata({
  title: "Plan du site",
  path: "/sitemap",
  description: "Contenu à venir.",
})

export default function SitemapPage() {
  return (
    <SimplePageLayout
      title="Plan du site"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Plan du site" },
      ]}
    >
      <p>Contenu à venir.</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {routes.map((route) => (
          <li key={route}>
            <Link className="underline" href={route}>
              {route}
            </Link>
          </li>
        ))}
      </ul>
    </SimplePageLayout>
  )
}
