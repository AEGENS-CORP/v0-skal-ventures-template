import Link from "next/link"
import { buildAeBreadcrumbs } from "@/lib/ae-site-structure"

interface AeBreadcrumbsProps {
  pathname: string
}

export const AeBreadcrumbs = ({ pathname }: AeBreadcrumbsProps) => {
  const items = buildAeBreadcrumbs(pathname)

  if (items.length <= 1) {
    return null
  }

  return (
    <nav className="ae-breadcrumbs" aria-label="Fil d'Ariane">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        if (isLast) {
          return (
            <span key={item.position} aria-current="page">
              {item.name}
            </span>
          )
        }

        return (
          <span key={item.position} className="flex items-center gap-2">
            <Link href={item.item}>{item.name}</Link>
            <span aria-hidden="true">/</span>
          </span>
        )
      })}
    </nav>
  )
}
