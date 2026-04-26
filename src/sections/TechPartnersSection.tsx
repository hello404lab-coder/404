import { motion, useReducedMotion } from 'framer-motion'
import {
  OpenAILogoIcon,
  SnowflakeLogoIcon,
  MicrosoftLogoIcon,
  GoogleLogoIcon,
  AWSLogoIcon,
} from '../components/icons'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const TECH_PARTNERS = [
  { name: 'OpenAI', icon: <OpenAILogoIcon /> },
  { name: 'Snowflake', icon: <SnowflakeLogoIcon /> },
  { name: 'Microsoft', icon: <MicrosoftLogoIcon /> },
  { name: 'Google', icon: <GoogleLogoIcon /> },
  { name: 'AWS', icon: <AWSLogoIcon /> },
]

export function TechPartnersSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="relative z-1 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] mt-24 mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {/* Separator */}
      <motion.div
        className="w-full h-px mb-16"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(210,105,48,0.3) 20%, rgba(148,78,255,0.3) 50%, rgba(210,105,48,0.3) 80%, transparent 100%)',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      />

      <motion.p
        className="text-center text-[rgba(178,168,200,0.52)] text-[0.76rem] font-semibold tracking-[0.14em] uppercase mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
      >
        Trusted by industry leaders
      </motion.p>

      <div
        className="flex flex-wrap items-center justify-center gap-[60px] text-[rgba(210,203,218,0.58)] max-[1180px]:gap-9 max-[720px]:gap-x-6 max-[720px]:gap-y-4"
        aria-label="Technology partners"
      >
        {TECH_PARTNERS.map((p, index) => (
          <motion.div
            className="inline-flex items-center gap-[9px] text-[1rem] font-semibold tracking-[-0.04em] whitespace-nowrap max-[720px]:text-[0.8rem] max-[720px]:gap-1.5"
            key={p.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: EASE }}
            whileHover={prefersReducedMotion ? {} : { opacity: 1, y: -2 }}
            style={{ opacity: 0.7 }}
          >
            <span className="max-[720px]:scale-75">{p.icon}</span>
            <span>{p.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
