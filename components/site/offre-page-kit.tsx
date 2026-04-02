import type { ReactNode } from "react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"

export const inlineSeoLinkClass =
  "ae-inline-seo-link font-semibold !text-[#07bc7d] underline !decoration-[#07bc7d]/70 underline-offset-4 transition-colors hover:!text-[#34e0a0] hover:!decoration-[#34e0a0]"

export const primaryButtonClass =
  "h-14 rounded-[14px] px-7 text-base font-semibold !text-zinc-950 hover:!text-zinc-950"

export const darkButtonClass =
  "h-14 rounded-[14px] px-7 text-base font-semibold border-white/25 bg-black/35 !text-white hover:bg-black/45"

export type OfferBreadcrumbItem = {
  label: string
  href?: string
}

export type OfferCta = {
  label: string
  href: string
}

export type OfferHeroProps = {
  title: string
  supportText: ReactNode
  paragraphs?: ReactNode[]
  asideTitle: string
  asideItems: string[]
  primaryCta: OfferCta
  secondaryCta?: OfferCta
}

export type OfferCardItem = {
  title: string
  text: ReactNode
}

export function SeoInlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={inlineSeoLinkClass}>
      {children}
    </Link>
  )
}

export function OffrePageLayout({
  breadcrumbs,
  children,
}: {
  breadcrumbs: OfferBreadcrumbItem[]
  children: ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">{children}</div>
      </main>
    </div>
  )
}

export function OffreHero({ title, supportText, paragraphs = [], asideTitle, asideItems, primaryCta, secondaryCta }: OfferHeroProps) {
  return (
    <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
      <div className="grid gap-6 lg:grid-cols-[1.22fr_0.78fr] lg:gap-8 items-start">
        <div className="rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8 space-y-5">
          <h1 className="ae-hero-title text-[clamp(1.95rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
            {title}
          </h1>

          <p className="ae-text text-lg sm:text-xl leading-relaxed max-w-3xl">{supportText}</p>

          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="ae-surface ae-industrial-block rounded-2xl border border-white/14 bg-black/30 p-5 sm:p-6">
          <h2 className="ae-heading text-xl font-bold mb-4">{asideTitle}</h2>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
            {asideItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-6 rounded-2xl border border-white/14 bg-black/30 p-4 sm:p-5">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className={primaryButtonClass}>
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta ? (
            <Button asChild size="lg" className={darkButtonClass}>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export function OffreSection({
  id,
  title,
  intro,
  children,
  surface = "default",
}: {
  id: string
  title: string
  intro?: ReactNode
  children?: ReactNode
  surface?: "default" | "strong"
}) {
  return (
    <section
      className={`${surface === "strong" ? "ae-surface-strong" : "ae-surface"} ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10`}
      aria-labelledby={id}
    >
      <div className="space-y-5">
        <h2 id={id} className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          {title}
        </h2>
        {intro ? <p className="ae-text text-base sm:text-lg leading-relaxed">{intro}</p> : null}
        {children}
      </div>
    </section>
  )
}

export function OffreCardsGrid({
  cards,
  columns = 3,
}: {
  cards: OfferCardItem[]
  columns?: 2 | 3
}) {
  const gridClass = columns === 2 ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
  return (
    <div className={gridClass}>
      {cards.map((card) => (
        <article key={card.title} className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
          <h3 className="ae-heading text-lg sm:text-xl font-semibold leading-tight">{card.title}</h3>
          <p className="ae-text mt-2.5 text-sm sm:text-base leading-relaxed">{card.text}</p>
        </article>
      ))}
    </div>
  )
}

export function OffreFinalCta({
  id,
  title,
  text,
  primaryCta,
  secondaryCta,
}: {
  id: string
  title: string
  text: ReactNode
  primaryCta: OfferCta
  secondaryCta?: OfferCta
}) {
  return (
    <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby={id}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
        <div className="space-y-3">
          <h2 id={id} className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h2>
          <p className="ae-text text-base sm:text-lg leading-relaxed">{text}</p>
        </div>

        <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
          <div className="grid gap-3">
            <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
