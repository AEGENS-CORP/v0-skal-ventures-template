import Link from "next/link"

type TocItem = {
  id: string
  label: string
  href?: string
}

type TocProps = {
  title?: string
  items: TocItem[]
}

export const AeToc = ({ title = "Sommaire", items }: TocProps) => {
  if (!items.length) {
    return null
  }

  return (
    <nav className="ae-toc" aria-label={title}>
      <h2>{title}</h2>
      <ul className="ae-list">
        {items.map((item) => {
          const href = item.href ?? `#${item.id}`
          return (
            <li key={item.id}>
              <Link href={href}>{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
