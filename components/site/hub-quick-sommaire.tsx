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
}

export function HubQuickSommaire({
  title = "Sommaire rapide",
  subtitle = "Accédez rapidement aux pages de cette section.",
  items,
}: HubQuickSommaireProps) {
  if (!items.length) return null

  return (
    <section className="ae-surface ae-industrial-block relative overflow-hidden rounded-[24px] border border-white/14 bg-[linear-gradient(165deg,rgba(18,22,26,0.92),rgba(8,10,12,0.96))] p-5 sm:p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute -top-24 right-[-3.5rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(42,211,139,0.18),rgba(0,0,0,0))]" />
        <div className="absolute -bottom-24 left-[-4rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(129,145,160,0.2),rgba(0,0,0,0))]" />
      </div>

      <div className="relative space-y-2.5">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-[#2ad38b]/35 bg-[#2ad38b]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9fe2c3]">
          <Compass className="size-3.5" />
          Navigation rapide
        </p>
        <h2 className="ae-heading text-xl sm:text-2xl md:text-[1.72rem] font-bold leading-tight">{title}</h2>
        <p className="ae-text-soft max-w-3xl text-sm sm:text-base leading-relaxed">{subtitle}</p>
      </div>

      <div className="relative mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(160deg,rgba(24,29,34,0.92),rgba(11,13,16,0.94))] p-4 shadow-[0_12px_26px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#2ad38b]/65 hover:shadow-[0_16px_32px_rgba(0,0,0,0.36)]"
          >
            <span className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_12%_8%,rgba(42,211,139,0.3),transparent_52%)]" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#2ad38b] to-[#8ef0c2] transition-transform duration-300 group-hover:scale-x-100" />

            <div className="relative flex items-start justify-between gap-3">
              <span className="inline-flex h-7 items-center gap-1.5 rounded-full border border-[#2ad38b]/35 bg-[#2ad38b]/18 px-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#b7f3d8]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/16 bg-white/6 text-white/82 transition-colors duration-200 group-hover:border-[#2ad38b]/45 group-hover:text-[#dbffed]">
                <ArrowUpRight className="size-3.5" />
              </span>
            </div>

            <span className="relative mt-3 block text-[1rem] font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-[#f3fff9]">
              {item.title}
            </span>
            <span className="relative mt-2 block text-sm leading-relaxed text-white/72">{item.summary}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
