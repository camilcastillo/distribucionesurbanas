import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  descriptionClassName?: string
  align?: "left" | "center" | "right"
  children?: React.ReactNode
}

export function SectionHeading({
  title,
  description,
  className,
  descriptionClassName,
  align = "center",
  children,
}: SectionHeadingProps) {
  return (
    <header
      className={cn("mb-12", className, {
        "text-center": align === "center",
        "text-left": align === "left",
        "text-right": align === "right",
      })}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#00303D] mb-4">{title}</h2>
      {description && (
        <p
          className={cn("text-lg md:text-xl text-gray-600 max-w-2xl mx-auto", descriptionClassName, {
            "mx-auto": align === "center",
            "ml-0": align === "left",
            "mr-0": align === "right",
          })}
        >
          {description}
        </p>
      )}
      {children}
    </header>
  )
}
