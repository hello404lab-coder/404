import { motion, useReducedMotion } from 'framer-motion'
import { SparkleIcon } from '../components/icons'
import { LogoCloud } from '../components/ui'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: EASE },
    },
  }

  return (
    <motion.section
      className="flex flex-col items-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badge */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-[10px] h-[38px] mb-[30px] px-[18px] rounded-full text-[rgba(248,243,255,0.97)] text-[0.9rem] font-medium tracking-[-0.02em]"
        whileHover={{ scale: 1.02 }}
        style={{
          border: '1.5px solid transparent',
          background:
            'linear-gradient(180deg, rgba(12,6,20,0.99), rgba(4,2,9,1)) padding-box, linear-gradient(130deg, rgba(105,45,240,0.95) 0%, rgba(75,25,195,0.55) 34%, rgba(185,82,18,0.68) 66%, rgba(255,142,45,0.94) 100%) border-box',
          boxShadow:
            'inset 0 1px 1px rgba(255,255,255,0.07), -8px -4px 22px rgba(110,45,255,0.32), 8px 5px 22px rgba(255,118,30,0.28), 0 0 32px rgba(150,55,255,0.14)',
        }}
      >
        <SparkleIcon />
        <span>Next-Gen Software Lab</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={titleVariants}
        className="m-0 max-w-[960px] text-[4.5rem] font-medium leading-[0.98] tracking-[-0.068em] max-[1180px]:text-[3.5rem] max-[720px]:text-[2.2rem] max-[720px]:leading-[1.05]"
        style={{
          background:
            'linear-gradient(175deg, #d6d0dc 0%, #c2baca 45%, #aea5bc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Finding Solutions Where Others See Errors.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        className="mt-[26px] mb-8 text-[rgba(178,170,190,0.88)] text-[0.97rem] font-normal tracking-[-0.02em] max-w-[600px] max-[1180px]:text-[0.9rem] max-[720px]:text-[0.85rem] max-[720px]:px-4"
      >
        Custom software, AI integration, and scalable digital architecture designed for the modern enterprise.
      </motion.p>

      {/* CTA */}
      <motion.button
        variants={ctaVariants}
        whileHover={prefersReducedMotion ? {} : { scale: 1.03, boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 0 30px rgba(220,85,255,0.9), 0 0 60px rgba(195,60,255,0.7), 0 0 120px rgba(165,30,248,0.5)' }}
        whileTap={{ scale: 0.98 }}
        className="h-[58px] px-11 rounded-full text-[#f2eaff] text-base font-medium tracking-[-0.03em] cursor-pointer max-[720px]:h-[50px] max-[720px]:px-8 max-[720px]:text-[0.9rem]"
        style={{
          border: '1.5px solid transparent',
          background:
            'linear-gradient(180deg, rgba(8,4,16,0.99), rgba(2,1,5,1)) padding-box, linear-gradient(145deg, rgba(200,90,255,0.92) 0%, rgba(230,100,255,0.96) 42%, rgba(200,78,255,0.92) 68%, rgba(150,45,245,0.88) 100%) border-box',
          boxShadow:
            'inset 0 1px 1px rgba(255,255,255,0.1), 0 0 20px rgba(220,85,255,0.78), 0 0 50px rgba(195,60,255,0.58), 0 0 100px rgba(165,30,248,0.4), 0 0 160px rgba(130,12,225,0.22)',
        }}
        type="button"
      >
        Start Your Project
      </motion.button>

      <motion.div variants={itemVariants}>
        <LogoCloud />
      </motion.div>
    </motion.section>
  )
}
