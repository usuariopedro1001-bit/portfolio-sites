import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "primary"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        {
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80":
            variant === "default",
          "border-border bg-background hover:bg-accent":
            variant === "outline",
          "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20":
            variant === "primary",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
