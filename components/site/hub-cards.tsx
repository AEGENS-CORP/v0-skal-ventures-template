import Link from "next/link"
import { highlightImportantWords } from "@/components/site/highlight-important-words"

type HubCard = {
  href: string
  title: string
  description: string
}

type HubCardsProps = {
  cards: HubCard[]
}

const toneCycle = ["ae-tone-silver", "ae-tone-gold", "ae-tone-silver"] as const
const getToneClass = (index: number) => toneCycle[index % toneCycle.length]

export function HubCards({ cards }: HubCardsProps) {
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <Link
          key={card.href}
          href={card.href}
          className={`group block ae-surface ae-industrial-block ${getToneClass(index)} rounded-2xl p-6 sm:p-7 min-h-[200px]`}
        >
          <h2 className="ae-heading text-lg sm:text-xl md:text-2xl font-bold group-hover:text-white text-balance">
            {highlightImportantWords(card.title, "title")}
          </h2>
          <p className="ae-text mt-3 text-base leading-relaxed">{highlightImportantWords(card.description)}</p>
        </Link>
      ))}
    </div>
  )
}
