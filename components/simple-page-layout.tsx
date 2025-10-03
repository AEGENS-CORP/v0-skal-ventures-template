import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs"

type SimplePageLayoutProps = {
  title: string
  description?: ReactNode
  breadcrumbs?: BreadcrumbItem[]
  children: ReactNode
}

export const SimplePageLayout = ({ title, description, breadcrumbs, children }: SimplePageLayoutProps) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-44 pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <div className="space-y-4">
            <h1 className="text-4xl">{title}</h1>
            {description && <div className="ae-muted">{description}</div>}
          </div>
          <div className="ae-stack">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
