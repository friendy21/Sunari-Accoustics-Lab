"use client"

import { useEffect, useState, useRef } from "react"
import { rafThrottle } from "@/lib/performance"

// This hook provides a way to trigger animations only when an element is in the viewport
// to improve performance by not animating off-screen elements
export function useOptimizedAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      rafThrottle(([entry]) => {
        setIsVisible(entry.isIntersecting)
      }),
      { threshold },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}
