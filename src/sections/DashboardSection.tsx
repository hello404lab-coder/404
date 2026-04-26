import { motion, useReducedMotion } from 'framer-motion'
import { LeftPanel, RightPanel } from '../components/panels'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function DashboardSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-5 mt-11 items-start max-[1180px]:grid-cols-1"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      >
        <LeftPanel />
      </motion.div>
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      >
        <RightPanel />
      </motion.div>
    </motion.section>
  )
}
