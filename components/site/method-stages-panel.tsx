import Image from "next/image"
import { ServiceStageAnimation } from "@/components/site/service-stage-animation"

type MethodStagesPanelProps = {
  compact?: boolean
  className?: string
}

const stages = [
  {
    key: "audit" as const,
    step: "Étape 1",
    title: "Diagnostic",
    text: "Comprendre la situation et les priorités.",
  },
  {
    key: "automatisation" as const,
    step: "Étape 2",
    title: "Cadrage",
    text: "Structurer les besoins et la feuille de route.",
  },
  {
    key: "pilotage" as const,
    step: "Étape 3",
    title: "Pilotage",
    text: "Suivre l'exécution avec méthode.",
  },
]

export function MethodStagesPanel({ compact = false, className = "" }: MethodStagesPanelProps) {
  return (
    <div className={`relative rounded-[20px] border border-white/14 bg-black/55 p-4 sm:p-5 ${className}`}>
      <div className="pointer-events-none absolute -top-4 -right-4 h-24 w-24 rounded-full border border-emerald-300/25 blur-[1px]" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-emerald-300/20 blur-[2px]" />

      <div className="relative z-10 mb-4 flex items-center justify-between">
        <p className="text-xs tracking-[0.06em] uppercase font-semibold text-white/85">Méthode de mission</p>
        <Image src="/logo-global.png" alt="AE" width={26} height={26} className="opacity-95" />
      </div>

      <div className="relative z-10 grid gap-3">
        {stages.map((stage, idx) => (
          <article key={stage.key} className={idx === 0 ? "space-y-2" : "space-y-2 border-t border-white/10 pt-3"}>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-[11px] font-semibold text-white/60">{stage.step}</span>
              <h3 className="text-[1.02rem] sm:text-lg font-semibold tracking-[-0.02em] text-white leading-tight">{stage.title}</h3>
            </div>
            <p className="text-sm text-white/82 leading-relaxed">{stage.text}</p>
            <ServiceStageAnimation type={stage.key} compact={compact} />
          </article>
        ))}
      </div>
    </div>
  )
}
