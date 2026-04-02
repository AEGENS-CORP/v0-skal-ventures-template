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
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors duration-300"
                  aria-label={`Aller à ${item.label}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white font-medium" : ""}>{item.label}</span>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
