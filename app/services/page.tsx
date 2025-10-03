import Link from "next/link"
import { createPageMetadata } from "@/lib/metadata"
import { services } from "@/lib/site-structure"
import { SimplePageLayout } from "@/components/simple-page-layout"

export const metadata = createPageMetadata({
  title: "Services",
  path: "/services",
  description: "Contenu à venir.",
})

export default function ServicesPage() {
  return (
    <SimplePageLayout
      title="Services"
      description="Contenu à venir."
      path="/services"
      dataEntity="service-overview"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Services" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {service.title}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}

