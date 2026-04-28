import { motion, useReducedMotion } from 'framer-motion'
import { BellIcon, GitBranchIcon } from '../icons'
import { siteContent } from '../../data/siteContent'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function LeftPanel() {
  const prefersReducedMotion = useReducedMotion()
  const leftCard = siteContent.heroCards.left

  return (
    <motion.article
      className="relative min-h-[560px] rounded-[34px] overflow-hidden max-[1180px]:min-h-0"
      style={{
        border: '1px solid rgba(210,105,48,0.38)',
        background:
          'radial-gradient(circle at 16% 20%, rgba(255,131,54,0.22) 0%, transparent 52%), linear-gradient(180deg, rgba(14,7,9,0.99), rgba(8,4,6,0.99))',
        boxShadow:
          'inset 0 1px 0 rgba(255,190,130,0.07), -3px 0 28px rgba(255,100,30,0.2), 0 20px 48px rgba(0,0,0,0.44)',
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {/* Glow */}
      <motion.div
        className="absolute pointer-events-none blur-[14px] left-[-80px] top-[-80px] w-[460px] h-[400px]"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, rgba(255,119,40,0.48) 0%, rgba(200,70,18,0.28) 36%, transparent 72%)',
        }}
        animate={prefersReducedMotion ? {} : { opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Inner content */}
      <div className="relative z-1 py-[28px] px-[38px] max-[720px]:p-[22px_18px]">
        {/* Header row */}
        <div className="flex items-start justify-between gap-[18px]">
          <motion.h3
            className="mt-[10px] mb-0 max-w-[360px] text-[rgba(244,240,248,0.96)] text-[1.02rem] font-medium tracking-[-0.04em]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          >
            {leftCard.label}
          </motion.h3>
          {/* Bell orb with 404 badge */}
          <div className="relative shrink-0">
            <motion.div
              className="inline-flex items-center justify-center w-[54px] h-[54px] rounded-full text-[#fff0e8]"
              style={{
                border: '1px solid rgba(255,140,70,0.5)',
                background:
                  'radial-gradient(circle at 44% 30%, rgba(255,210,170,0.52), rgba(255,120,50,0.32) 44%, rgba(30,10,8,0.96) 78%)',
                boxShadow:
                  '0 0 22px rgba(255,100,40,0.36), 0 0 8px rgba(255,150,80,0.24), inset 0 1px 0 rgba(255,220,180,0.2)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
              animate={prefersReducedMotion ? {} : { scale: [1, 1.02, 1] }}
            >
              <BellIcon />
            </motion.div>
            {/* 404 badge */}
            <motion.span
              className="absolute -top-1 -right-1 inline-flex items-center justify-center h-[18px] px-[5px] rounded-full text-[9px] font-bold tracking-tight leading-none text-[#fff0e8]"
              style={{
                background: 'linear-gradient(135deg, #ff6010, #ff9030)',
                boxShadow: '0 0 8px rgba(255,90,20,0.7)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4, ease: EASE, type: 'spring' }}
            >
              404
            </motion.span>
          </div>
        </div>

        {/* Deployment card */}
        <motion.div
          className="mt-[26px] p-[26px_28px_28px] rounded-[28px] max-[720px]:p-5"
          style={{
            border: '1px solid rgba(200,160,130,0.2)',
            background:
              'linear-gradient(180deg, rgba(110,72,62,0.52), rgba(38,16,18,0.88)), rgba(35,16,18,0.94)',
            boxShadow:
              'inset 0 1px 0 rgba(255,220,180,0.07), 0 12px 28px rgba(0,0,0,0.45)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <div className="flex items-center max-[720px]:flex-col max-[720px]:items-start">
            {/* Git icon avatar */}
            <motion.div
              className="inline-flex items-center justify-center overflow-hidden rounded-full w-16 h-16 p-[3px] shrink-0 text-[#ffb070]"
              style={{
                border: '1px solid rgba(255,160,90,0.56)',
                background:
                  'radial-gradient(circle at 40% 35%, rgba(255,180,100,0.18), rgba(200,80,20,0.28) 60%, rgba(30,12,6,0.96))',
                boxShadow: '0 0 18px rgba(255,108,47,0.3)',
              }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            >
              <GitBranchIcon />
            </motion.div>
            <div className="ml-[18px]">
              <div className="text-[#f3eef6] text-[1.15rem] font-medium tracking-tighter">
                Admin Dashboard
              </div>
              <div className="mt-1 text-[rgba(193,172,176,0.86)] text-[0.86rem] tracking-[-0.03em]">
                {leftCard.description}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-[26px] max-[720px]:grid-cols-1">
            <motion.button
              className="h-16 rounded-full text-[rgba(240,234,242,0.94)] text-[0.96rem] font-medium tracking-[-0.04em] cursor-pointer"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background:
                  'linear-gradient(180deg, rgba(52,36,44,0.96), rgba(28,18,24,0.98))',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.07), 0 4px 12px rgba(0,0,0,0.3)',
              }}
              type="button"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 6px 16px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              View Dashboard
            </motion.button>
            <motion.button
              className="h-16 border-0 rounded-full text-[#fff4e0] text-[0.96rem] font-semibold tracking-[-0.03em] cursor-pointer"
              style={{
                background:
                  'radial-gradient(circle at 88% 42%, rgba(255,248,160,0.98) 0%, rgba(255,230,100,0.7) 14%, transparent 30%), linear-gradient(90deg, #ff6010 0%, #ff8c22 32%, #ffaa30 58%, #ffcf6a 84%, #ffe98c 100%)',
                boxShadow:
                  '0 8px 22px rgba(255,100,20,0.32), inset 0 1px 0 rgba(255,255,240,0.3)',
              }}
              type="button"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, boxShadow: '0 12px 28px rgba(255,100,20,0.4), inset 0 1px 0 rgba(255,255,240,0.35)' }}
              whileTap={{ scale: 0.98 }}
            >
              Open App
            </motion.button>
          </div>
        </motion.div>

        {/* Pipeline pill */}
        <div className="flex justify-center mt-[26px] mb-[18px]">
          <motion.button
            className="relative h-11 px-7 rounded-full text-[rgba(232,228,238,0.94)] text-[0.92rem] tracking-[-0.03em] cursor-pointer"
            style={{
              border: '1px solid rgba(255,255,255,0.14)',
              background:
                'linear-gradient(180deg, rgba(42,32,48,0.96), rgba(22,14,28,0.98))',
              boxShadow:
                '0 0 0 6px rgba(14,8,20,0.92), 0 0 0 8px rgba(50,36,62,0.55)',
            }}
            type="button"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Web App Platform
          </motion.button>
        </div>

        {/* Footer row */}
        <motion.div
          className="mt-6 h-[110px] rounded-b-[28px] pt-10"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            background:
              'linear-gradient(180deg, rgba(12,7,10,0) 0%, rgba(10,5,8,0.28) 20%, rgba(8,4,6,0.58) 100%)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, ease: EASE }}
        >
          <div className="flex items-center">
            <motion.div
              className="inline-flex items-center justify-center overflow-hidden rounded-full w-11 h-11 p-[2px] shrink-0"
              style={{
                border: '1px solid rgba(255,140,70,0.28)',
                background: 'rgba(255,100,30,0.08)',
              }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            >
              <div
                className="w-full h-full rounded-[inherit] inline-flex items-center justify-center text-[0.72rem] font-bold tracking-tight"
                style={{
                  background: 'linear-gradient(180deg, rgba(80,40,20,0.9), rgba(40,18,10,0.98))',
                  color: 'rgba(255,180,100,0.88)',
                }}
              >
                404
              </div>
            </motion.div>
            <div className="ml-[14px] flex w-full justify-between items-center">
              <div className="text-[rgba(239,234,243,0.88)] text-[0.95rem] tracking-[-0.03em]">
                Web App
              </div>
              <div className="text-[rgba(187,178,194,0.68)] text-[0.84rem] tracking-[-0.03em]">
                {leftCard.tags.join(' · ')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}
