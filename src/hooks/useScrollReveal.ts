import { useReducedMotion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export interface ScrollRevealOptions {
  delay?: number
  duration?: number
  y?: number
  once?: boolean
  amount?: number
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const prefersReducedMotion = useReducedMotion()

  const {
    delay = 0,
    duration = 0.6,
    y = 30,
    once = true,
    amount = 0.2,
  } = options

  if (prefersReducedMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once, amount },
      transition: { duration: 0 },
    }
  }

  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once, amount },
    transition: {
      duration,
      delay,
      ease: EASE,
    },
  }
}

export function useStaggerContainer(staggerDelay = 0.08) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return {
      initial: 'visible',
      whileInView: 'visible',
      viewport: { once: true, amount: 0.2 },
      variants: {
        visible: { transition: { staggerChildren: 0 } },
      },
    }
  }

  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.2 },
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.1,
        },
      },
    },
  }
}

export function useStaggerItem(y = 20) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return {
      variants: {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      },
    }
  }

  return {
    variants: {
      hidden: { opacity: 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: EASE,
        },
      },
    },
  }
}
