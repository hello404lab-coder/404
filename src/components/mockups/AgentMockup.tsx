import { motion, useReducedMotion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function AgentMockup() {
  const prefersReducedMotion = useReducedMotion()

  const lines = [
    { icon: '▶', color: '#ff8c22', text: 'Scanning infrastructure...', delay: 0 },
    { icon: '✓', color: '#4ade80', text: '47 nodes monitored', delay: 0.15 },
    { icon: '✓', color: '#4ade80', text: '0 anomalies detected', delay: 0.3 },
  ]

  return (
    <motion.div
      className="rounded-[14px] p-4 mb-5"
      style={{ background: 'rgba(255,140,34,0.07)', border: '1px solid rgba(255,140,34,0.18)' }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1">
          <motion.div
            className="w-2 h-2 rounded-full bg-[rgba(255,80,80,0.65)]"
            animate={prefersReducedMotion ? {} : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-[rgba(255,200,60,0.65)]"
            animate={prefersReducedMotion ? {} : { opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-[rgba(80,220,120,0.65)]"
            animate={prefersReducedMotion ? {} : { opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
        </div>
        <span className="text-[0.64rem] font-mono tracking-wide text-[rgba(255,200,140,0.55)]">agent.run</span>
      </div>

      <div className="space-y-1.5">
        {lines.map((line) => (
          <motion.div
            key={line.text}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: line.delay, ease: EASE }}
          >
            <span className="text-[0.7rem] font-mono" style={{ color: line.color }}>{line.icon}</span>
            <span className="text-[rgba(255,200,160,0.65)] text-[0.68rem] font-mono">{line.text}</span>
          </motion.div>
        ))}

        {/* Progress bar */}
        <motion.div
          className="flex items-center gap-2 pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45, ease: EASE }}
        >
          <div className="h-1.5 flex-1 rounded-full bg-[rgba(255,140,34,0.14)] overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #ff8c22, #ff6010)' }}
              initial={{ width: 0 }}
              whileInView={{ width: '78%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
            />
          </div>
          <span className="text-[rgba(255,200,140,0.55)] text-[0.6rem] font-mono">78%</span>
        </motion.div>
      </div>

      {/* Typing cursor */}
      {!prefersReducedMotion && (
        <motion.div
          className="mt-2 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-[#ff8c22] text-[0.7rem] font-mono">$</span>
          <motion.span
            className="w-2 h-3.5 bg-[rgba(255,200,160,0.8)]"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}
