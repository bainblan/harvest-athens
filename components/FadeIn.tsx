"use client"

import { ReactNode } from "react"
import clsx from "clsx"
import { useInView } from "@/hooks/useInView"

type FadeInProps = {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export default function FadeIn({
  children,
  className,
  direction = "up",
}: FadeInProps) {
  const { ref, visible } = useInView()

  const directionClasses = {
    up: "translate-y-4",
    down: "-translate-y-4",
    left: "-translate-x-4",
    right: "translate-x-4",
  }

  return (
    <div
      ref={ref}
      className={clsx(
        "motion-safe:transition-all motion-safe:duration-1300 motion-safe:ease-out",
        visible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0",
        !visible && directionClasses[direction],
        className
      )}
    >
      {children}
    </div>
  )
}
