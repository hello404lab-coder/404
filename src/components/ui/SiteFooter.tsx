import { motion, useReducedMotion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function SiteFooter() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.footer
      className="relative z-1 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] pt-12 pb-10 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {/* Top gradient border */}
      <motion.div
        className="w-full h-px mb-10"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(148,78,255,0.28) 30%, rgba(255,140,70,0.28) 70%, transparent 100%)',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      />

      <div className="flex flex-col items-center gap-6 text-center max-[720px]:gap-4">
        {/* Brand + nav */}
        <div className="flex flex-wrap items-center justify-center gap-8 max-[720px]:gap-4 max-[720px]:flex-col">
          <motion.span
            className="text-[rgba(248,244,252,0.92)] text-[1.1rem] font-semibold tracking-tighter max-[720px]:text-[1rem]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
          >
            FourNotFour
          </motion.span>
          <div className="flex gap-6 max-[720px]:gap-4">
            {(['Services', 'About', 'Contact'] as const).map((label, index) => (
              <motion.a
                className="text-[rgba(200,192,214,0.62)] text-[0.88rem] tracking-[-0.02em] no-underline hover:text-[rgba(230,224,240,0.88)] transition-colors duration-200 cursor-pointer max-[720px]:text-[0.8rem]"
                href="#"
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: EASE }}
                whileHover={prefersReducedMotion ? {} : { y: -1 }}
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <motion.p
          className="m-0 text-[rgba(160,150,178,0.42)] text-[0.78rem] tracking-[-0.01em] max-[720px]:text-[0.7rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
        >
          © 2026 FourNotFour. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
