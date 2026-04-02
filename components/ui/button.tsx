import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border font-semibold ease-out transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-slate-200/40",
  {
    variants: {
      variant: {
        default:
          "bg-white !text-zinc-950 border-white/85 hover:bg-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_24px_rgba(0,0,0,0.35)]",
      },
      size: {
        default: "h-12 px-5 text-sm sm:text-base",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-7 text-base sm:text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props}>
      <Slottable>{children}</Slottable>
    </Comp>
  )
}

export { Button, buttonVariants }
