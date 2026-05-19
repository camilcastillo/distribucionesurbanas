"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ActiveLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  offset?: number
}

export function ActiveLink({
  href,
  children,
  className,
  activeClassName = "text-[#ABE13C]",
  offset = 100,
}: ActiveLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    const handleScroll = () => {
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect()
        setIsActive(rect.top <= offset && rect.bottom > offset)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [href, offset])

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-[#00303D] hover:text-[#ABE13C] transition-colors",
        className,
        isActive && activeClassName,
      )}
    >
      {children}
    </Link>
  )
}
