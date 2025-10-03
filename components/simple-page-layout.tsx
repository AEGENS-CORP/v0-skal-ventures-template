import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs"
import { slugifyHeading } from "@/lib/seo-utils"

type SimplePageLayoutProps = {
  title: string
  description?: ReactNode
  breadcrumbs?: BreadcrumbItem[]
  path: string
  dataEntity?: string
  children: ReactNode
}

export const SimplePageLayout = ({
  title,
  description,
  breadcrumbs,
  path,
  dataEntity,
  children,
}: SimplePageLayoutProps) => {
  const headingId = slugifyHeading(title)

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-36 pb-20" data-entity={dataEntity} data-page-path={path}>
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} currentPath={path} />}
          <div className="space-y-4">
            <h1 id={headingId} className="text-4xl font-bold">
              {title}
            </h1>
            {description && <div className="text-white/80">{description}</div>}
          </div>
          <div className="space-y-6 text-white/90">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

