import Link from "next/link"
import type { ContentSection } from "@/lib/ae-content"
import { highlightImportantWords } from "@/components/site/highlight-important-words"

type RelatedLink = {
  href: string
  label: string
}

type ContentSectionsProps = {
  sections: ContentSection[]
  related?: RelatedLink[]
}

const toneCycle = ["ae-tone-silver", "ae-tone-silver", "ae-tone-silver"] as const
const getToneClass = (index: number) => toneCycle[index % toneCycle.length]
const buildSectionId = (title: string, index: number) => {
  const normalized = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  return `section-${normalized || "partie"}-${index + 1}`
}

export function ContentSections({ sections, related }: ContentSectionsProps) {
  const sectionEntries = sections.map((section, index) => ({
    section,
    id: buildSectionId(section.title, index),
    index,
  }))

  return (
    <div className="space-y-8">
      {sectionEntries.length > 1 ? (
        <aside className="ae-surface-strong ae-industrial-block mx-auto max-w-[980px] rounded-2xl p-5 sm:p-6">
          <h2 className="ae-heading text-xl sm:text-2xl font-bold mb-1">Sommaire de cette page</h2>
          <p className="ae-text-soft text-sm sm:text-base mb-4">
            Accès direct aux sections de cette page.
          </p>
          <ol className="grid gap-3 sm:gap-3.5 lg:grid-cols-2">
            {sectionEntries.map((entry) => (
              <li key={entry.id}>
                <Link
                  href={`#${entry.id}`}
                  className="block rounded-lg border border-white/12 bg-black/30 px-4 py-3 ae-text text-sm sm:text-base hover:text-white transition-colors duration-300"
                >
                  {highlightImportantWords(entry.section.title)}
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      ) : null}

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {sectionEntries.map(({ section, id, index }) => (
          <article
            key={id}
            id={id}
            className={`ae-surface ae-industrial-block ${getToneClass(index)} rounded-2xl p-6 sm:p-7 md:p-9 scroll-mt-28`}
          >
            <h2 className="ae-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-balance">
              {highlightImportantWords(section.title, "title")}
            </h2>
            <p className="ae-text text-base md:text-[1.04rem] leading-relaxed">{highlightImportantWords(section.text)}</p>
            {section.bullets?.length ? (
              <ul className="mt-4 space-y-2.5 ae-text-soft text-base">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="ae-icon-accent mt-1">•</span>
                    <span>{highlightImportantWords(bullet)}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      {related?.length ? (
        <aside className="ae-surface-strong ae-industrial-block mx-auto max-w-[980px] rounded-2xl p-5 sm:p-6">
          <h2 className="ae-heading text-xl sm:text-2xl font-bold mb-1">Voir aussi</h2>
          <p className="ae-text-soft text-sm sm:text-base mb-4">
            Pages complémentaires liées au sujet.
          </p>
          <div className="grid gap-3 lg:grid-cols-2">
            {related.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`ae-text ae-industrial-block ${getToneClass(index)} text-sm sm:text-base hover:text-white transition-colors duration-300 border border-white/12 rounded-lg px-4 py-3 bg-black/35`}
              >
                {highlightImportantWords(link.label)}
              </Link>
            ))}
          </div>
        </aside>
      ) : null}
    </div>
  )
}
