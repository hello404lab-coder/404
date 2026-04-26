import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export function useCountUp(
  end: number,
  duration = 1.5,
  startOnMount = false
) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(startOnMount)
  const frameRef = useRef<number | undefined>(undefined)
  const prefersReducedMotion = useReducedMotion()

  const start = () => setHasStarted(true)

  useEffect(() => {
    if (!hasStarted) return

    if (prefersReducedMotion) {
      setCount(end)
      return
    }

    const startTime = performance.now()
    const startValue = 0

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(startValue + (end - startValue) * easeOut)

      setCount(current)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [hasStarted, end, duration, prefersReducedMotion])

  return { count, start }
}
