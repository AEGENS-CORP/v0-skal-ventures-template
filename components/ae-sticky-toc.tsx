import Link from "next/link"

interface AeStickyTocProps {
  title: string
  items: { id: string; label: string }[]
}

export const AeStickyToc = ({ title, items }: AeStickyTocProps) => {
  if (items.length === 0) {
    return null
  }

  return (
    <aside className="ae-sticky-toc" aria-label={title}>
      <h2>{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
