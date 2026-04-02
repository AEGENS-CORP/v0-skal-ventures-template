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

export function ContentSections({ sections, related }: ContentSectionsProps) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {sections.map((section, index) => (
          <article key={section.title} className={`ae-surface ae-industrial-block ${getToneClass(index)} rounded-2xl p-6 sm:p-7 md:p-9`}>
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
        <aside className="ae-surface-strong ae-industrial-block rounded-2xl p-5 sm:p-6">
          <h2 className="ae-heading text-xl sm:text-2xl font-bold mb-4">Aller plus loin</h2>
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
