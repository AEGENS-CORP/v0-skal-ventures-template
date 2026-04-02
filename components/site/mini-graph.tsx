import { cn } from "@/lib/utils"

type MiniGraphVariant = "trend" | "bars" | "flow"
type MiniGraphTone = "silver" | "gold" | "bronze"

type MiniGraphProps = {
  variant?: MiniGraphVariant
  tone?: MiniGraphTone
  className?: string
}

export function MiniGraph({ variant = "trend", tone = "silver", className }: MiniGraphProps) {
  if (variant === "bars") {
    return (
      <div className={cn("ae-mini-graph", className)} data-tone={tone} data-model="bars" aria-hidden="true">
        <svg viewBox="0 0 120 52" className="h-full w-full">
          <g className="ae-graph-grid">
            <line x1="4" y1="46" x2="116" y2="46" />
            <line x1="4" y1="28" x2="116" y2="28" />
            <line x1="4" y1="10" x2="116" y2="10" />
          </g>
          <path d="M14 34 L35 30 L56 27 L78 21 L104 16" className="ae-graph-line ae-graph-line-soft" />
          <rect x="18" y="20" width="10" height="26" rx="2" className="ae-graph-bar ae-graph-bar-1" />
          <rect x="40" y="16" width="10" height="30" rx="2" className="ae-graph-bar ae-graph-bar-2" />
          <rect x="62" y="12" width="10" height="34" rx="2" className="ae-graph-bar ae-graph-bar-3" />
          <rect x="84" y="8" width="10" height="38" rx="2" className="ae-graph-bar ae-graph-bar-4" />
          <rect x="6" y="8" width="20" height="38" rx="6" className="ae-graph-sweep" />
        </svg>
      </div>
    )
  }

  if (variant === "flow") {
    return (
      <div className={cn("ae-mini-graph", className)} data-tone={tone} data-model="flow" aria-hidden="true">
        <svg viewBox="0 0 120 52" className="h-full w-full">
          <g className="ae-graph-grid">
            <line x1="4" y1="46" x2="116" y2="46" />
            <line x1="4" y1="28" x2="116" y2="28" />
          </g>
          <path d="M12 14 H108" className="ae-graph-pipe" />
          <path d="M12 26 H108" className="ae-graph-pipe" />
          <path d="M12 38 H108" className="ae-graph-pipe" />
          <circle cx="18" cy="14" r="2.7" className="ae-graph-packet ae-graph-packet-1" />
          <circle cx="14" cy="26" r="2.7" className="ae-graph-packet ae-graph-packet-2" />
          <circle cx="10" cy="38" r="2.7" className="ae-graph-packet ae-graph-packet-3" />
          <rect x="6" y="8" width="20" height="34" rx="6" className="ae-graph-sweep" />
        </svg>
      </div>
    )
  }

  return (
    <div className={cn("ae-mini-graph", className)} data-tone={tone} data-model="trend" aria-hidden="true">
      <svg viewBox="0 0 120 52" className="h-full w-full">
        <g className="ae-graph-grid">
          <line x1="4" y1="46" x2="116" y2="46" />
          <line x1="4" y1="28" x2="116" y2="28" />
          <line x1="4" y1="10" x2="116" y2="10" />
        </g>
        <path d="M10 38 L34 30 L56 32 L78 18 L110 12 L110 46 L10 46 Z" className="ae-graph-area" />
        <path d="M10 38 L34 30 L56 32 L78 18 L110 12" className="ae-graph-line" />
        <circle cx="10" cy="38" r="3" className="ae-graph-node ae-graph-node-1" />
        <circle cx="34" cy="30" r="3" className="ae-graph-node ae-graph-node-2" />
        <circle cx="56" cy="32" r="3" className="ae-graph-node ae-graph-node-3" />
        <circle cx="78" cy="18" r="3" className="ae-graph-node ae-graph-node-4" />
        <circle cx="110" cy="12" r="3" className="ae-graph-node ae-graph-node-5" />
        <rect x="6" y="8" width="20" height="38" rx="6" className="ae-graph-sweep" />
      </svg>
    </div>
  )
}
