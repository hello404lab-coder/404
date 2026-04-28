import { motion, useReducedMotion } from 'framer-motion'
import { SparkleIcon } from '../components/icons'
import { siteContent, type FounderContent } from '../data/siteContent'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const FOUNDERS = siteContent.founders.items
const FOUNDERS_SECTION = siteContent.founders.section

const ACCENT_STYLES = {
  purple: {
    border: '1px solid rgba(148,78,255,0.38)',
    background:
      'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.3) 0%, transparent 38%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
    boxShadow:
      'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.2), 0 20px 48px rgba(0,0,0,0.44)',
    glow: 'rgba(168,85,247,0.3)',
    badgeBg: 'rgba(168,85,247,0.15)',
    badgeBorder: 'rgba(168,85,247,0.45)',
    skillBg: 'rgba(168,85,247,0.12)',
  },
  orange: {
    border: '1px solid rgba(210,105,48,0.38)',
    background:
      'radial-gradient(circle at 16% 20%, rgba(255,131,54,0.22) 0%, transparent 52%), linear-gradient(180deg, rgba(14,7,9,0.99), rgba(8,4,6,0.99))',
    boxShadow:
      'inset 0 1px 0 rgba(255,190,130,0.07), -3px 0 28px rgba(255,100,30,0.2), 0 20px 48px rgba(0,0,0,0.44)',
    glow: 'rgba(255,140,34,0.3)',
    badgeBg: 'rgba(255,140,34,0.15)',
    badgeBorder: 'rgba(255,140,34,0.45)',
    skillBg: 'rgba(255,140,34,0.12)',
  },
}

function FounderCard({
  founder,
  index,
  prefersReducedMotion,
}: {
  founder: FounderContent
  index: number
  prefersReducedMotion: boolean | null
}) {
  const styles = ACCENT_STYLES[founder.accent]

  return (
    <motion.div
      className="relative rounded-[34px] overflow-hidden p-8 max-[720px]:p-6 will-change-transform"
      style={{
        border: styles.border,
        background: styles.background,
        boxShadow: styles.boxShadow,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: EASE }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -6,
              boxShadow: styles.boxShadow.replace(
                /rgba\([^)]+\)/g,
                (match: string) => match.replace(/[\d.]+\)$/, '0.35)')
              ),
            }
      }
    >
      {/* Glow effect */}
      <div
        className="absolute pointer-events-none blur-[14px] right-[-40px] top-[-40px] w-[300px] h-[250px]"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${styles.glow} 0%, transparent 74%)`,
        }}
      />

      {/* Content - horizontal layout */}
      <div className="relative z-10 flex flex-row gap-6 h-full max-[720px]:flex-col max-[720px]:gap-4">
        {/* Image - left side */}
        <motion.div
          className="w-[120px] h-[120px] shrink-0 rounded-[16px] overflow-hidden max-[720px]:w-[100px] max-[720px]:h-[100px]"
          style={{
            border: `1px solid ${founder.accent === 'purple' ? 'rgba(180,140,255,0.2)' : 'rgba(255,180,130,0.2)'}`,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.15, ease: EASE }}
        >
          <img
            src={founder.image}
            alt={founder.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text content - right side */}
        <div className="flex flex-col flex-1">
          {/* Role badge */}
          <motion.div
            className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full mb-3 max-[720px]:mb-2 max-[720px]:px-2.5 max-[720px]:py-1"
            style={{
              background: styles.badgeBg,
              border: `1px solid ${styles.badgeBorder}`,
              boxShadow: `0 0 20px ${styles.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`,
            }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.15, ease: EASE }}
          >
            <SparkleIcon />
            <span
              className="text-[0.78rem] font-medium tracking-[-0.01em]"
              style={{ color: founder.accent === 'purple' ? 'rgba(200,170,255,0.9)' : 'rgba(255,200,170,0.9)' }}
            >
              {founder.role}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h3
            className="m-0 text-[1.6rem] font-semibold tracking-[-0.04em] mb-1 max-[720px]:text-[1.3rem]"
            style={{ color: 'rgba(244,240,252,0.96)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 + index * 0.15, ease: EASE }}
          >
            {founder.name}
          </motion.h3>

          {/* Tagline */}
          <motion.p
            className="m-0 text-[0.85rem] font-medium tracking-[-0.02em] mb-2 max-[720px]:text-[0.8rem] max-[720px]:mb-1"
            style={{ color: founder.accent === 'purple' ? 'rgba(192,132,252,0.9)' : 'rgba(255,179,102,0.9)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.15, ease: EASE }}
          >
            {founder.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            className="m-0 text-[0.8rem] leading-relaxed tracking-[-0.01em] mb-4 flex-1 max-[720px]:text-[0.75rem] max-[720px]:mb-2"
            style={{ color: 'rgba(178,168,196,0.7)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 + index * 0.15, ease: EASE }}
          >
            {founder.description}
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.15, ease: EASE }}
          >
            {founder.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                className="px-2 py-0.5 rounded-full text-[0.65rem] font-medium tracking-[-0.01em]"
                style={{
                  background: styles.skillBg,
                  color: founder.accent === 'purple' ? 'rgba(200,160,255,0.85)' : 'rgba(255,200,160,0.85)',
                  border: `1px solid ${founder.accent === 'purple' ? 'rgba(168,85,247,0.3)' : 'rgba(255,140,34,0.3)'}`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45 + index * 0.15 + skillIndex * 0.05, ease: EASE }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function FoundersSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative z-1 mt-20 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] pb-20">
      {/* Badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
        style={{
          background: 'rgba(168,85,247,0.1)',
          border: '1px solid rgba(168,85,247,0.3)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <SparkleIcon />
        <span className="text-[rgba(200,170,255,0.9)] text-[0.78rem] font-medium tracking-[-0.01em]">{FOUNDERS_SECTION.badge}</span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="m-0 text-[2.6rem] font-medium leading-[1.1] tracking-tighter mb-3 max-[1180px]:text-[2.2rem] max-[720px]:text-[1.8rem]"
        style={{ color: 'rgba(244,240,252,0.96)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
      >
        {FOUNDERS_SECTION.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="m-0 text-[rgba(178,168,196,0.7)] text-[1rem] leading-relaxed tracking-[-0.015em] mb-12 max-w-[520px] max-[720px]:text-[0.85rem] max-[720px]:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
      >
        {FOUNDERS_SECTION.subtitle}
      </motion.p>

      {/* Founders grid */}
      <div className="grid grid-cols-2 gap-6 max-[720px]:grid-cols-1">
        {FOUNDERS.map((founder, index) => (
          <FounderCard
            key={founder.name}
            founder={founder}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </section>
  )
}
