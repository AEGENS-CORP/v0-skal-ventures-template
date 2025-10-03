import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Blog",
  path: "/blog",
  description: "Contenu à venir.",
})

export default function BlogPage() {
  return (
    <SimplePageLayout
      title="Blog"
      description="Contenu à venir."
      path="/blog"
      dataEntity="blog"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Blog" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Retrouvez toutes nos ressources dans la section <Link className="underline" href="/ressources">Ressources</Link>.
      </p>
      <p>
        Pour toute question, consultez la <Link className="underline" href="/faq">FAQ</Link> ou <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}

