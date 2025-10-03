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
    <nav aria-label="Fil d'Ariane" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link className="hover:text-white transition-colors" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white" : undefined}>{item.label}</span>
              )}
              {!isLast && <span className="text-white/40">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

