import Link from "next/link"
import { slugifyHeading } from "@/lib/seo-utils"

export type LinkItem = {
  href: string
  label: string
}

export const LinkSection = ({ title, links }: { title: string; links: LinkItem[] }) => {
  if (!links.length) {
    return null
  }

  const headingId = slugifyHeading(title)

  return (
    <section className="space-y-3" data-section={headingId}>
      <h2 id={headingId} className="text-xl font-semibold text-white">
        {title}
      </h2>
      <ul className="list-disc space-y-1 pl-6 text-white/80">
        {links.map((link) => (
          <li key={`${title}-${link.href}`}>
            <Link className="hover:text-white transition" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

