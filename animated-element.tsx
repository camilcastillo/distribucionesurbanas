"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in"
  delay?: number
  threshold?: number
}

export function AnimatedElement({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "slide-in-left": "-translate-x-10 opacity-0",
    "slide-in-right": "translate-x-10 opacity-0",
    "zoom-in": "scale-95 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        {
          [animationClasses[animation]]: !isVisible,
          "translate-y-0 translate-x-0 scale-100 opacity-100": isVisible,
        },
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
