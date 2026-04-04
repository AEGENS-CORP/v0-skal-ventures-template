import Link from "next/link"
import { ArrowUpRight, Compass } from "lucide-react"

type HubQuickSommaireItem = {
  href: string
  title: string
  summary: string
}

type HubQuickSommaireProps = {
  title?: string
  subtitle?: string
  items: HubQuickSommaireItem[]
  seeAlsoItems?: HubQuickSommaireItem[]
}

export function HubQuickSommaire({
  title = "Sommaire rapide",
  subtitle = "Accédez rapidement aux pages de cette section.",
  items,
  seeAlsoItems = [],
}: HubQuickSommaireProps) {
  if (!items.length) return null

  return (
    <section className="ae-surface ae-industrial-block relative overflow-hidden rounded-[24px] border border-white/14 bg-[linear-gradient(165deg,rgba(18,22,26,0.92),rgba(8,10,12,0.96))] p-5 sm:p-6 md:p-7">
      <div className="relative mx-auto max-w-[980px] space-y-2.5">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-[#2ad38b]/35 bg-[#2ad38b]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9fe2c3]">
          <Compass className="size-3.5" />
          Navigation rapide
        </p>
        <h2 className="ae-heading text-xl sm:text-2xl md:text-[1.72rem] font-bold leading-tight">{title}</h2>
        <p className="ae-text-soft max-w-3xl text-sm sm:text-base leading-relaxed">{subtitle}</p>

        <div className="mt-5 space-y-3">
          <h3 className="ae-heading text-base sm:text-lg font-semibold text-white/92">Dans cette section</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-xl border border-white/12 bg-[linear-gradient(160deg,rgba(24,29,34,0.92),rgba(11,13,16,0.94))] p-4 transition-all duration-200 hover:-translate-y-[1px] hover:border-[#2ad38b]/65"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-6 items-center gap-1 rounded-full border border-[#2ad38b]/35 bg-[#2ad38b]/14 px-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#b7f3d8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/16 bg-white/6 text-white/82 transition-colors duration-200 group-hover:border-[#2ad38b]/45 group-hover:text-[#dbffed]">
                    <ArrowUpRight className="size-3" />
                  </span>
                </div>
                <span className="mt-2.5 block text-sm sm:text-[0.95rem] font-semibold leading-tight text-white group-hover:text-[#f3fff9]">
                  {item.title}
                </span>
                <span className="mt-1.5 block text-xs sm:text-sm leading-relaxed text-white/72">{item.summary}</span>
              </Link>
            ))}
          </div>
        </div>

        {seeAlsoItems.length ? (
          <div className="mt-5 space-y-3 rounded-xl border border-white/10 bg-black/24 p-4 sm:p-5">
            <h3 className="ae-heading text-base sm:text-lg font-semibold text-white/92">Voir aussi</h3>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {seeAlsoItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-white/10 bg-black/25 px-3.5 py-2.5 text-sm text-white/85 hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
