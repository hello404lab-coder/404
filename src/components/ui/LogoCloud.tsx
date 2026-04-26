import { motion, useReducedMotion } from 'framer-motion'
import { LOGOS } from '../../lib/constants'
import { SlackMark, AtlassianMark } from '../icons'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function LogoCloud() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: EASE },
    },
  }

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-[70px] mt-14 text-[rgba(210,203,218,0.65)] max-[1180px]:gap-9 max-[720px]:gap-x-7 max-[720px]:gap-y-[18px] max-[720px]:mt-10"
      aria-label="Trusted by"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {LOGOS.map((logo) => (
        <motion.div
          className="inline-flex items-center gap-[10px] text-[1.02rem] font-semibold tracking-tighter whitespace-nowrap max-[720px]:text-[0.85rem] max-[720px]:gap-1.5"
          key={logo.name}
          variants={itemVariants}
          whileHover={prefersReducedMotion ? {} : { opacity: 1, y: -2 }}
          style={{ opacity: 0.7 }}
        >
          <span className="max-[720px]:scale-90">{logo.mark === 'slack' ? <SlackMark /> : null}</span>
          <span className="max-[720px]:scale-90">{logo.mark === 'atlassian' ? <AtlassianMark /> : null}</span>
          <span>{logo.name}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
