import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function AnimatedBar({
  pct,
  delay,
  label,
}: {
  pct: number
  delay: number
  label: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReducedMotion = useReducedMotion()
  const [displayPct, setDisplayPct] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (prefersReducedMotion) {
      setDisplayPct(pct)
      return
    }

    const startTime = performance.now()
    const duration = 1200

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime - delay * 1000
      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setDisplayPct(Math.floor(pct * easeOut))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, pct, delay, prefersReducedMotion])

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: EASE }}
    >
      <span className="text-[rgba(200,160,255,0.45)] text-[0.6rem] font-mono w-9 shrink-0">{label}</span>
      <div className="h-1.5 flex-1 rounded-full bg-[rgba(168,85,247,0.12)] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[rgba(168,85,247,0.55)]"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${pct}%` : 0 }}
          transition={{ duration: 1, delay, ease: EASE }}
        />
      </div>
      <span className="text-[rgba(200,160,255,0.45)] text-[0.6rem] font-mono w-5 text-right shrink-0">{displayPct}</span>
    </motion.div>
  )
}

export function MetricsMockup() {
  const prefersReducedMotion = useReducedMotion()
  const rows = [
    { label: 'CPU', pct: 34, delay: 0 },
    { label: 'MEM', pct: 61, delay: 0.1 },
    { label: 'REQ/s', pct: 87, delay: 0.2 },
    { label: 'ERR%', pct: 2, delay: 0.3 },
  ]

  return (
    <motion.div
      className="rounded-[14px] p-4 mb-5"
      style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.18)' }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.64rem] font-mono text-[rgba(200,160,255,0.65)]">system.metrics()</span>
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-[#4ade80] text-[0.6rem] font-mono">99.9% uptime</span>
        </div>
      </div>

      <div className="space-y-2">
        {rows.map(({ label, pct, delay }) => (
          <AnimatedBar key={label} label={label} pct={pct} delay={delay} />
        ))}
      </div>
    </motion.div>
  )
}
