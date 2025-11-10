import Link from "next/link"

export type BreadcrumbItem = {
  label: string
  href?: string
}

export const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  if (!items.length) {
    return null
  }

  return (
    <nav aria-label="Fil d'Ariane" className="ae-breadcrumbs">
      
    </nav>
  )
}
