import type { ReactNode } from "react"
import Link from "next/link"
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { highlightImportantWords } from "@/components/site/highlight-important-words"

type PageFrameProps = {
  title: string
  intro: string
  breadcrumbs?: BreadcrumbItem[]
  cta?: {
    label: string
    href: string
  }
  children: ReactNode
}

export function PageFrame({ title, intro, breadcrumbs, cta, children }: PageFrameProps) {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">{breadcrumbs && <Breadcrumbs items={breadcrumbs} />}</div>
      </div>

      <section className="relative z-10 pt-10 sm:pt-12 md:pt-14 pb-8 sm:pb-10 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="relative z-10 max-w-5xl space-y-6">
              <h1 className="ae-hero-title break-words text-[clamp(2rem,4.2vw,4rem)] font-extrabold leading-[1.02] text-balance">
                {highlightImportantWords(title, "title")}
              </h1>
              <p className="ae-hero-intro text-lg sm:text-xl leading-relaxed max-w-4xl">{highlightImportantWords(intro)}</p>
              {cta ? (
                <div className="pt-1">
                  <Button asChild size="lg" className="h-14 rounded-[14px] px-8 text-base sm:text-lg font-semibold">
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">{children}</div>
      </section>
    </div>
  )
}
