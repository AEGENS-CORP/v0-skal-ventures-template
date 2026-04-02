import { Activity, Brain, CheckCircle2, Eye, Radar, Zap } from "lucide-react"

type ServiceStageAnimationProps = {
  type: "audit" | "pilotage" | "automatisation"
  compact?: boolean
}

const pilotageMetrics = [
  { value: "92%", label: "Jalons", icon: Radar },
  { value: "14", label: "Actions", icon: Activity },
  { value: "5", label: "Risques", icon: CheckCircle2 },
]

export function ServiceStageAnimation({ type, compact = false }: ServiceStageAnimationProps) {
  const rootClass = compact
    ? "relative w-full min-h-[8.6rem] rounded-xl border border-white/12 bg-black/45 p-3 overflow-hidden"
    : "relative w-full min-h-[10rem] rounded-xl border border-white/12 bg-black/45 p-4 overflow-hidden"

  if (type === "automatisation") {
    return (
      <div className={rootClass}>
        <div className="relative z-10 h-full flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-[0.06em] uppercase text-white/78">Automatisation</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/35 bg-emerald-400/12 px-2 py-0.5 text-[10px] font-semibold text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
              Actif
            </span>
          </div>

          <div className="relative flex items-center justify-between px-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/8 border border-white/14">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/8 border border-white/14">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/8 border border-white/14">
              <CheckCircle2 className="h-4 w-4 text-white" />
            </div>

            <div className="pointer-events-none absolute left-[13%] right-[13%] top-1/2 -translate-y-1/2 h-px bg-white/25" />
            <div className="pointer-events-none absolute left-[13%] right-[13%] top-1/2 -translate-y-1/2">
              <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(0,214,152,0.75)] animate-workflow-packet-simple-horizontal" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-white/72">
              <span>Progression</span>
              <span className="text-emerald-200 font-semibold">78%</span>
            </div>
            <div className="relative h-2 rounded-full bg-white/9 border border-white/14 overflow-hidden">
              <div className="h-full w-[78%] bg-gradient-to-r from-emerald-300/80 via-emerald-200 to-emerald-300/75" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "pilotage") {
    return (
      <div className={rootClass}>
        <div className="relative z-10 h-full flex flex-col gap-3">
          <div className="text-[10px] font-semibold tracking-[0.06em] uppercase text-white/78">Pilotage</div>

          <div className="grid grid-cols-3 gap-1.5">
            {pilotageMetrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div key={metric.label} className="rounded-md border border-white/14 bg-white/[0.05] p-1.5">
                  <div className="text-[12px] font-semibold text-emerald-200 leading-none">{metric.value}</div>
                  <div className="mt-1 flex items-center gap-1 text-[9px] text-white/70">
                    <Icon className="h-2.5 w-2.5" />
                    <span>{metric.label}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="rounded-md border border-white/12 bg-white/[0.04] p-1.5">
            <svg viewBox="0 0 100 24" className="h-7 w-full" aria-hidden>
              <polyline
                points="2,17 14,16 27,12 39,13 52,8 64,10 77,5 98,8"
                fill="none"
                stroke="rgba(102,236,185,0.95)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-line-draw-premium"
              />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={rootClass}>
      <div className="relative z-10 h-full flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-[0.06em] uppercase text-white/78">Audit</span>
          <span className="text-[10px] text-white/66">Diagnostic</span>
        </div>

        <div className="relative flex-1 min-h-[68px] flex items-center justify-center">
          <div className="absolute inset-[10px] rounded-full border border-white/18 animate-scan-rotate-fast-premium" />
          <div
            className="absolute inset-[18px] rounded-full border border-white/12 animate-scan-rotate-reverse-premium"
            style={{ animationDuration: "2.3s" }}
          />
          <div className="relative h-8 w-8 rounded-full bg-white/10 border border-white/16 flex items-center justify-center">
            <Eye className="h-4 w-4 text-white" />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-white/72">
            <span>Constat formalisé</span>
            <span className="font-semibold text-emerald-200">72%</span>
          </div>
          <div className="h-2 rounded-full bg-white/9 border border-white/14 overflow-hidden">
            <div className="h-full w-[72%] bg-gradient-to-r from-emerald-300/80 via-emerald-200 to-emerald-300/75" />
          </div>
        </div>
      </div>
    </div>
  )
}
