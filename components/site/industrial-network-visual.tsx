import { Bot, Boxes, Cog, Factory, Lightbulb, Truck, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import type { CSSProperties } from "react"

type IndustrialNetworkVisualProps = {
  compact?: boolean
  className?: string
}

const nodes = [
  { id: "design", x: 10, y: 68, tone: "silver", icon: Lightbulb },
  { id: "engineering", x: 29, y: 31, tone: "silver", icon: Cog },
  { id: "factory", x: 50, y: 56, tone: "gold", icon: Factory },
  { id: "automation", x: 48, y: 39, tone: "bronze", icon: Bot },
  { id: "delivery", x: 71, y: 28, tone: "bronze", icon: Truck },
  { id: "distribution", x: 90, y: 63, tone: "silver", icon: Boxes },
  { id: "assistance", x: 84, y: 46, tone: "gold", icon: Users },
] as const

const links = [
  { x1: 10, y1: 68, x2: 29, y2: 31 },
  { x1: 29, y1: 31, x2: 50, y2: 56 },
  { x1: 50, y1: 56, x2: 71, y2: 28 },
  { x1: 71, y1: 28, x2: 90, y2: 63 },
  { x1: 50, y1: 56, x2: 84, y2: 46 },
  { x1: 48, y1: 39, x2: 71, y2: 28 },
  { x1: 48, y1: 39, x2: 29, y2: 31 },
  { x1: 50, y1: 56, x2: 10, y2: 68 },
  { x1: 84, y1: 46, x2: 90, y2: 63 },
]

export function IndustrialNetworkVisual({ compact = false, className }: IndustrialNetworkVisualProps) {
  return (
    <div className={cn("ae-network-visual", compact && "ae-network-visual-compact", className)} aria-hidden="true">
      <div className="ae-network-grid" />
      <svg viewBox="0 0 100 100" className="ae-network-lines" preserveAspectRatio="none">
        {links.map((link, index) => (
          <line
            key={`${link.x1}-${link.y1}-${index}`}
            x1={link.x1}
            y1={link.y1}
            x2={link.x2}
            y2={link.y2}
            className="ae-network-line"
            style={{ animationDelay: `${index * 130}ms` }}
          />
        ))}
      </svg>

      {nodes.map((node, index) => {
        const Icon = node.icon
        return (
          <div
            key={node.id}
            className={`ae-network-node ae-tone-${node.tone}`}
            style={
              {
                "--x": `${node.x}%`,
                "--y": `${node.y}%`,
                "--delay": `${index * 140}ms`,
              } as CSSProperties
            }
          >
            <div className="ae-network-node-shadow" />
            <div className="ae-network-platform">
              <div className="ae-network-icon-wrap">
                <Icon className="ae-network-icon" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
