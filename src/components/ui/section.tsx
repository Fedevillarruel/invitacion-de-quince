import { cn } from "@/lib/utils"
import React from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("w-full max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20", className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = "Section"
