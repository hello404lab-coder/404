import { motion, useReducedMotion } from 'framer-motion'
import { SparkleIcon } from '../components/icons'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const SERVICES = [
  {
    id: 'software',
    title: 'Custom Software',
    tagline: 'Built for scale',
    description: 'End-to-end software development tailored to your business needs. From MVPs to enterprise platforms.',
    features: ['Full-Stack Development', 'Cloud Architecture', 'API Design', 'DevOps'],
    accent: 'purple' as const,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-6" />
        <path d="M10 20l-3-3m3 3l3-3m-3 3v-6" />
        <path d="M6 8h12M6 12h8" />
      </svg>
    ),
  },
  {
    id: 'ai',
    title: 'AI Integration',
    tagline: 'Intelligence engineered',
    description: 'Production-grade AI solutions that automate workflows and unlock insights from your data.',
    features: ['LLM Integration', 'Predictive Models', 'NLP Pipelines', 'MLOps'],
    accent: 'gradient' as const,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a2 2 0 100 4 2 2 0 000-4z" />
        <path d="M12 22a2 2 0 100-4 2 2 0 000 4z" />
        <path d="M2 12a2 2 0 104 0 2 2 0 00-4 0z" />
        <path d="M18 12a2 2 0 104 0 2 2 0 00-4 0z" />
        <path d="M6 6l2 2M16 6l-2 2M6 18l2-2M16 18l-2-2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    tagline: 'Trust by design',
    description: 'Smart contracts and decentralized applications built for security and transparency.',
    features: ['Smart Contracts', 'DeFi Protocols', 'Web3 Integration', 'Tokenization'],
    accent: 'orange' as const,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="9" y="3" width="6" height="6" rx="1" />
        <rect x="3" y="15" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M12 9v3M12 12H9m3 0h3M6 15v-1a2 2 0 012-2h8a2 2 0 012 2v1" />
      </svg>
    ),
  },
  {
    id: 'agentic',
    title: 'Agentic Automation',
    tagline: 'Autonomous systems',
    description: 'Self-operating AI agents that handle complex workflows from end to end.',
    features: ['Autonomous Agents', 'Workflow Automation', 'Decision Engines', '24/7 Operations'],
    accent: 'purple' as const,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z" />
        <path d="M12 12l9-4.5" />
        <path d="M12 12v9" />
        <path d="M12 12L3 7.5" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    tagline: 'Infrastructure that scales',
    description: 'Enterprise cloud architecture designed for performance, security, and cost optimization.',
    features: ['AWS/Azure/GCP', 'Kubernetes', 'Serverless', 'FinOps'],
    accent: 'gradient' as const,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19H9a7 7 0 117-7h.5a5.5 5.5 0 110 11z" />
        <path d="M12 12v8M8 16l4-4 4 4" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'Security & Audit',
    tagline: 'Protected by default',
    description: 'Comprehensive security audits and hardening to protect your systems and data.',
    features: ['Penetration Testing', 'Code Audits', 'Compliance', 'Monitoring'],
    accent: 'orange' as const,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3L4 7v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V7l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
]

const ACCENT_STYLES = {
  purple: {
    border: '1px solid rgba(148,78,255,0.38)',
    background:
      'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.3) 0%, transparent 38%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
    boxShadow:
      'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.2), 0 20px 48px rgba(0,0,0,0.44)',
    glow: 'rgba(168,85,247,0.4)',
    iconBg: 'rgba(168,85,247,0.15)',
    iconBorder: 'rgba(168,85,247,0.45)',
    iconColor: '#c084fc',
    tagColor: 'rgba(192,132,252,0.9)',
    featureBg: 'rgba(168,85,247,0.1)',
    featureBorder: 'rgba(168,85,247,0.25)',
  },
  orange: {
    border: '1px solid rgba(210,105,48,0.38)',
    background:
      'radial-gradient(circle at 16% 20%, rgba(255,131,54,0.22) 0%, transparent 52%), linear-gradient(180deg, rgba(14,7,9,0.99), rgba(8,4,6,0.99))',
    boxShadow:
      'inset 0 1px 0 rgba(255,190,130,0.07), -3px 0 28px rgba(255,100,30,0.2), 0 20px 48px rgba(0,0,0,0.44)',
    glow: 'rgba(255,140,34,0.4)',
    iconBg: 'rgba(255,140,34,0.15)',
    iconBorder: 'rgba(255,140,34,0.45)',
    iconColor: '#ffb366',
    tagColor: 'rgba(255,179,102,0.9)',
    featureBg: 'rgba(255,140,34,0.1)',
    featureBorder: 'rgba(255,140,34,0.25)',
  },
  gradient: {
    border: '1.5px solid transparent',
    background:
      'linear-gradient(180deg, rgba(12,6,20,0.99), rgba(4,2,9,1)) padding-box, linear-gradient(130deg, rgba(105,45,240,0.95) 0%, rgba(75,25,195,0.55) 34%, rgba(185,82,18,0.68) 66%, rgba(255,142,45,0.94) 100%) border-box',
    boxShadow:
      'inset 0 1px 1px rgba(255,255,255,0.07), -8px -4px 22px rgba(110,45,255,0.32), 8px 5px 22px rgba(255,118,30,0.28), 0 0 32px rgba(150,55,255,0.14)',
    glow: 'rgba(168,85,247,0.3)',
    iconBg: 'rgba(200,150,255,0.12)',
    iconBorder: 'rgba(200,150,255,0.4)',
    iconColor: '#d8b4fe',
    tagColor: 'rgba(216,180,254,0.9)',
    featureBg: 'rgba(168,85,247,0.08)',
    featureBorder: 'rgba(168,85,247,0.2)',
  },
}

function ServiceCard({
  service,
  index,
  prefersReducedMotion,
}: {
  service: typeof SERVICES[0]
  index: number
  prefersReducedMotion: boolean | null
}) {
  const styles = ACCENT_STYLES[service.accent]

  return (
    <motion.div
      className="relative rounded-[28px] overflow-hidden p-6 max-[720px]:p-5 will-change-transform flex flex-col"
      style={{
        border: styles.border,
        background: styles.background,
        boxShadow: styles.boxShadow,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -6,
              boxShadow: styles.boxShadow.replace(
                /rgba\([^)]+\)/g,
                (match: string) => match.replace(/[\d.]+\)$/, '0.4)')
              ),
            }
      }
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none blur-[14px] right-[-30px] top-[-30px] w-[200px] h-[200px]"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${styles.glow} 0%, transparent 74%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-12 h-12 rounded-[14px] mb-5"
          style={{
            background: styles.iconBg,
            border: `1px solid ${styles.iconBorder}`,
            color: styles.iconColor,
            boxShadow: `0 0 20px ${styles.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: EASE }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
        >
          {service.icon}
        </motion.div>

        {/* Tagline */}
        <motion.span
          className="text-[0.75rem] font-medium tracking-[-0.01em] mb-2"
          style={{ color: styles.tagColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 + index * 0.08, ease: EASE }}
        >
          {service.tagline}
        </motion.span>

        {/* Title */}
        <motion.h3
          className="m-0 text-[1.15rem] font-semibold tracking-[-0.04em] mb-3"
          style={{ color: 'rgba(244,240,252,0.96)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.08, ease: EASE }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="m-0 text-[0.82rem] leading-relaxed tracking-[-0.01em] mb-4 flex-1"
          style={{ color: 'rgba(178,168,196,0.65)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 + index * 0.08, ease: EASE }}
        >
          {service.description}
        </motion.p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {service.features.map((feature, featureIndex) => (
            <motion.span
              key={feature}
              className="px-2 py-0.5 rounded-full text-[0.68rem] font-medium tracking-[-0.01em]"
              style={{
                background: styles.featureBg,
                color: 'rgba(220,210,235,0.75)',
                border: `1px solid ${styles.featureBorder}`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3 + index * 0.08 + featureIndex * 0.03,
                ease: EASE,
              }}
            >
              {feature}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="services" className="relative z-1 mt-20 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] pb-20">
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
        <span className="text-[rgba(200,170,255,0.9)] text-[0.78rem] font-medium tracking-[-0.01em]">
          What We Build
        </span>
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
        Services That Scale
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="m-0 text-[rgba(178,168,196,0.7)] text-[1rem] leading-relaxed tracking-[-0.015em] mb-12 max-w-[560px] max-[720px]:text-[0.85rem] max-[720px]:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
      >
        From concept to deployment, we engineer solutions that drive real business outcomes.
      </motion.p>

      {/* Services grid - 3 columns */}
      <div className="grid grid-cols-3 gap-4 max-[1180px]:grid-cols-2 max-[720px]:grid-cols-1">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-12 flex justify-center max-[720px]:mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
      >
        <motion.button
          className="h-[52px] px-10 rounded-full text-[#f2eaff] text-[0.95rem] font-medium tracking-[-0.03em] cursor-pointer max-[720px]:h-[46px] max-[720px]:px-8 max-[720px]:text-[0.85rem]"
          style={{
            border: '1.5px solid transparent',
            background:
              'linear-gradient(180deg, rgba(8,4,16,0.99), rgba(2,1,5,1)) padding-box, linear-gradient(145deg, rgba(200,90,255,0.92) 0%, rgba(230,100,255,0.96) 42%, rgba(200,78,255,0.92) 68%, rgba(150,45,245,0.88) 100%) border-box',
            boxShadow:
              'inset 0 1px 1px rgba(255,255,255,0.1), 0 0 20px rgba(220,85,255,0.5), 0 0 40px rgba(195,60,255,0.3)',
          }}
          type="button"
          whileHover={
            prefersReducedMotion
              ? {}
              : {
                  scale: 1.03,
                  boxShadow:
                    'inset 0 1px 1px rgba(255,255,255,0.1), 0 0 30px rgba(220,85,255,0.7), 0 0 60px rgba(195,60,255,0.5)',
                }
          }
          whileTap={{ scale: 0.98 }}
        >
          Discuss Your Project
        </motion.button>
      </motion.div>
    </section>
  )
}
