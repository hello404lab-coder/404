import { motion, useReducedMotion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { NavPill } from './ui'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

type NavbarProps = {
  className?: string
  rightLink?: { label: string; href: string }
  brandHref?: string
}

export function Navbar({
  className,
  rightLink = { label: 'Our Work', href: '/projects' },
  brandHref,
}: NavbarProps) {
  const prefersReducedMotion = useReducedMotion()
  const navigate = useNavigate()

  return (
    <motion.header
      className={className ?? 'relative z-2 grid grid-cols-[1fr_auto_1fr] items-center gap-6 pt-9 px-[70px] max-[1180px]:flex max-[1180px]:justify-between max-[1180px]:flex-wrap max-[1180px]:pt-8 max-[1180px]:px-7 max-[720px]:px-[18px] max-[720px]:pt-6'}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {brandHref ? (
        <motion.a
          href={brandHref}
          className="text-[rgba(248,244,252,0.97)] text-[1.15rem] font-medium tracking-[-0.04em] max-[1180px]:text-left no-underline flex items-center gap-2 cursor-pointer"
          onClick={(event) => {
            event.preventDefault()
            navigate(brandHref)
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ color: 'rgba(255,255,255,1)' }}
        >
          404
        </motion.a>
      ) : (
        <motion.div
          className="text-[rgba(248,244,252,0.97)] text-[1.15rem] font-medium tracking-[-0.04em] max-[1180px]:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          404
        </motion.div>
      )}
      <NavPill />
      <motion.div
        className="flex items-center justify-end gap-[18px] max-[1180px]:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <motion.a
          className="text-[rgba(232,226,242,0.9)] text-[0.94rem] font-normal tracking-[-0.02em] no-underline cursor-pointer"
          href={rightLink.href}
          onClick={(event) => {
            event.preventDefault()
            navigate(rightLink.href)
          }}
          whileHover={prefersReducedMotion ? {} : { color: 'rgba(255,255,255,1)' }}
        >
          {rightLink.label}
        </motion.a>
        <motion.button
          className="h-9 px-5 rounded-full bg-[#f0ecf6] text-[#0a0510] text-[0.92rem] font-semibold tracking-[-0.03em] cursor-pointer"
          style={{
            border: '1.5px solid rgba(220,215,230,0.82)',
            boxShadow:
              '0 1px 8px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
          type="button"
          whileHover={prefersReducedMotion ? {} : { scale: 1.03, boxShadow: '0 2px 12px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.6)' }}
          whileTap={{ scale: 0.98 }}
        >
          Start Your Project
        </motion.button>
      </motion.div>
    </motion.header>
  )
}
