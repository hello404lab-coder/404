import { useState, useEffect } from 'react'

export function useAutoAdvance(totalItems: number, intervalMs: number = 3000) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const progress = ((activeIndex + 1) / totalItems) * 100

  // Auto-advance - resets when activeIndex changes (manual nav) or hover state changes
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems)
    }, intervalMs)
    return () => clearInterval(interval)
  }, [isHovered, activeIndex, totalItems, intervalMs])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems)
  }

  return {
    activeIndex,
    setActiveIndex,
    isHovered,
    setIsHovered,
    progress,
    handlePrev,
    handleNext,
  }
}
