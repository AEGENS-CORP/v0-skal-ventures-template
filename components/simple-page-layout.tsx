import type { ReactNode } from "react"
import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs"

type SimplePageLayoutProps = {
  title: string
  description?: ReactNode
  breadcrumbs?: BreadcrumbItem[]
  children: ReactNode
}

export const SimplePageLayout = ({ title, description, breadcrumbs, children }: SimplePageLayoutProps) => {
  return (
    <main className="text-white min-h-screen pt-56 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">{title}</h1>
          {description && <div className="ae-muted text-center text-lg md:text-xl">{description}</div>}
        </div>
        <div className="ae-stack">{children}</div>
      </div>
    </main>
  )
}
