import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "DPA",
  path: "/dpa",
  description: "Contenu à venir.",
})

export default function DpaPage() {
  return (
    <SimplePageLayout
      title="DPA"
      description="Contenu à venir."
      path="/dpa"
      dataEntity="legal"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "DPA" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Consultez également notre <Link className="underline" href="/conditions-generales">conditions générales</Link>.
      </p>
    </SimplePageLayout>
  )
}

