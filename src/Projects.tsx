import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRightIcon, SparkleIcon, HomeIcon } from './components/icons'
import { NavPill, SiteFooter } from './components/ui'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const PROJECTS = [
  {
    id: 'enterprise-platform',
    title: 'Enterprise Platform',
    category: 'Custom Software',
    description: 'Scalable B2B platform handling 10M+ transactions daily with 99.99% uptime.',
    metrics: ['10M+ daily txns', '99.99% uptime', '3x faster deployment'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    accent: 'purple' as const,
    featured: true,
    image: '/projects/enterprise.jpg',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Suite',
    category: 'AI Integration',
    description: 'End-to-end workflow automation reducing manual tasks by 85%.',
    metrics: ['85% reduction', '24/7 operation', '$2M saved/year'],
    tech: ['Python', 'LLM APIs', 'TensorFlow', 'Kubernetes'],
    accent: 'gradient' as const,
    featured: true,
    image: '/projects/ai-automation.jpg',
  },
  {
    id: 'defi-protocol',
    title: 'DeFi Protocol',
    category: 'Blockchain',
    description: 'Decentralized lending protocol with $50M+ TVL and audited smart contracts.',
    metrics: ['$50M+ TVL', 'Zero exploits', '12K+ users'],
    tech: ['Solidity', 'Web3.js', 'The Graph', 'Hardhat'],
    accent: 'orange' as const,
    featured: false,
    image: '/projects/defi.jpg',
  },
  {
    id: 'fintech-mobile',
    title: 'Fintech Mobile',
    category: 'Mobile App',
    description: 'Cross-platform banking app with biometric auth and real-time transfers.',
    metrics: ['4.9★ rating', '500K+ downloads', '<2s response'],
    tech: ['React Native', 'Firebase', 'Plaid', 'Stripe'],
    accent: 'purple' as const,
    featured: false,
    image: '/projects/fintech.jpg',
  },
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI',
    category: 'AI Integration',
    description: 'Diagnostic assistance system improving accuracy by 40% for radiology teams.',
    metrics: ['40% accuracy+', 'HIPAA compliant', '50+ hospitals'],
    tech: ['PyTorch', 'DICOM', 'FastAPI', 'Azure'],
    accent: 'gradient' as const,
    featured: false,
    image: '/projects/healthcare.jpg',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Tracker',
    category: 'Blockchain',
    description: 'End-to-end traceability platform tracking 2M+ products across 40 countries.',
    metrics: ['2M+ products', '40 countries', 'Real-time tracking'],
    tech: ['Hyperledger', 'IPFS', 'Go', 'MongoDB'],
    accent: 'orange' as const,
    featured: true,
    image: '/projects/supply-chain.jpg',
  },
]

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
    metricBg: 'rgba(168,85,247,0.12)',
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
    metricBg: 'rgba(255,140,34,0.12)',
  },
  gradient: {
    border: '1px solid rgba(148,78,255,0.38)',
    background:
      'radial-gradient(circle at 50% 0%, rgba(189,75,255,0.25) 0%, rgba(255,131,54,0.15) 50%, transparent 80%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
    boxShadow:
      'inset 0 1px 0 rgba(200,150,255,0.07), 0 0 32px rgba(140,50,255,0.15), 0 20px 48px rgba(0,0,0,0.44)',
    glow: 'rgba(200,120,200,0.3)',
    badgeBg: 'rgba(200,120,200,0.15)',
    badgeBorder: 'rgba(200,120,200,0.45)',
    metricBg: 'rgba(200,120,200,0.12)',
  },
}

function AnimatedGlow({
  className,
  style,
  delay = 0,
}: {
  className: string
  style: React.CSSProperties
  delay?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0"
          style={style}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
        />
      )}
    </motion.div>
  )
}

function ProjectCard({
  project,
  index,
  prefersReducedMotion,
}: {
  project: typeof PROJECTS[0]
  index: number
  prefersReducedMotion: boolean | null
}) {
  const styles = ACCENT_STYLES[project.accent]

  return (
    <motion.div
      className={`relative rounded-[28px] overflow-hidden will-change-transform h-full flex flex-col ${
        project.featured ? 'col-span-2 max-[1180px]:col-span-1 max-[720px]:col-span-1' : 'col-span-1'
      }`}
      style={{
        border: styles.border,
        background: styles.background,
        boxShadow: styles.boxShadow,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -6,
              boxShadow: styles.boxShadow.replace(/rgba\([^)]+\)/g, (match: string) =>
                match.replace(/[\d.]+\)$/, '0.35)')
              ),
            }
      }
    >
      {/* Glow effect */}
      <div
        className="absolute pointer-events-none blur-[14px] right-[-30px] top-[-30px] w-[250px] h-[200px]"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${styles.glow} 0%, transparent 74%)`,
        }}
      />

      {/* Image */}
      <div className="relative h-[200px] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(11,4,22,0.99)] z-10"
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        {/* Fallback gradient when no image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${styles.glow} 20%, transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-7 max-[720px]:p-5 -mt-12">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.75rem] font-medium tracking-[-0.01em]"
            style={{
              background: styles.badgeBg,
              border: `1px solid ${styles.badgeBorder}`,
              color: 'rgba(244,240,252,0.9)',
            }}
          >
            <SparkleIcon className="w-3.5 h-3.5" />
            {project.category}
          </div>
          <motion.button
            className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpRightIcon className="w-4 h-4 text-[rgba(244,240,252,0.8)]" />
          </motion.button>
        </div>

        {/* Title & Description */}
        <h3 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[rgba(244,240,252,0.96)] mb-2">
          {project.title}
        </h3>
        <p className="text-[0.92rem] font-normal text-[rgba(178,168,196,0.7)] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="px-2.5 py-1 rounded-md text-[0.75rem] font-medium text-[rgba(244,240,252,0.85)]"
              style={{ background: styles.metricBg }}
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.08)]">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[0.75rem] text-[rgba(178,168,196,0.6)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      className="min-h-svh"
      style={{ background: '#060308' }}
    >
      <div
        className="relative min-h-[1110px] mx-auto overflow-hidden max-[1180px]:min-h-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(42,8,61,0.86) 0%, rgba(18,2,29,0.98) 18%, rgba(8,2,13,0.99) 47%, rgba(8,2,13,1) 100%)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.04), 0 42px 80px rgba(20,4,28,0.2)',
        }}
      >
        {/* Background layer */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedGlow
            className="absolute blur-[18px] left-1/2 top-[-180px] w-[860px] h-[420px] -translate-x-1/2"
            style={{
              background:
                'radial-gradient(circle, rgba(146,72,251,0.62) 0%, rgba(118,49,221,0.3) 40%, transparent 78%)',
            }}
            delay={0.1}
          />
          <AnimatedGlow
            className="absolute left-[-4px] top-0 w-80 h-full opacity-[0.92]"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,135,55,0.2) 0%, rgba(207,76,24,0.17) 24%, rgba(110,29,17,0.09) 50%, rgba(43,11,12,0.03) 70%, transparent 100%)',
            }}
            delay={0.2}
          />
          <AnimatedGlow
            className="absolute blur-[18px] left-[-170px] top-[110px] w-[520px] h-[800px]"
            style={{
              background:
                'radial-gradient(circle at 28% 42%, rgba(255,190,136,0.14) 0%, rgba(255,128,52,0.26) 18%, rgba(185,60,22,0.22) 38%, rgba(96,24,16,0.13) 60%, transparent 84%)',
            }}
            delay={0.3}
          />
          <AnimatedGlow
            className="absolute right-[-4px] top-0 w-80 h-full opacity-[0.92]"
            style={{
              background:
                'linear-gradient(270deg, rgba(135,46,255,0.2) 0%, rgba(106,28,219,0.17) 24%, rgba(60,14,100,0.09) 50%, rgba(25,7,43,0.03) 70%, transparent 100%)',
            }}
            delay={0.2}
          />
          <AnimatedGlow
            className="absolute blur-[18px] right-[-170px] top-[110px] w-[520px] h-[800px]"
            style={{
              background:
                'radial-gradient(circle at 72% 42%, rgba(180,100,255,0.14) 0%, rgba(151,53,255,0.26) 18%, rgba(106,28,219,0.22) 38%, rgba(55,12,100,0.13) 60%, transparent 84%)',
            }}
            delay={0.3}
          />
          <AnimatedGlow
            className="absolute blur-[18px] left-1/2 bottom-[-190px] w-[980px] h-[380px] -translate-x-1/2"
            style={{
              background:
                'radial-gradient(circle, rgba(167,60,255,0.28) 0%, rgba(79,16,131,0.2) 30%, transparent 74%)',
            }}
            delay={0.5}
          />
        </div>

        {/* Header */}
        <motion.header
          className="relative z-2 grid grid-cols-[1fr_auto_1fr] items-center gap-6 pt-9 px-[70px] max-[1180px]:grid-cols-1 max-[1180px]:justify-items-center max-[1180px]:pt-8 max-[1180px]:px-7 max-[720px]:gap-4 max-[720px]:px-[18px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <motion.a
            href="/"
            className="text-[rgba(248,244,252,0.97)] text-[1.15rem] font-medium tracking-[-0.04em] max-[1180px]:justify-self-stretch max-[1180px]:text-center no-underline flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            whileHover={{ color: 'rgba(255,255,255,1)' }}
          >
            <HomeIcon />
            404
          </motion.a>
          <NavPill />
          <motion.div
            className="flex items-center justify-end gap-[18px] max-[1180px]:justify-self-stretch max-[1180px]:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.a
              className="text-[rgba(232,226,242,0.9)] text-[0.94rem] font-normal tracking-[-0.02em] no-underline cursor-pointer"
              href="/#services"
              whileHover={prefersReducedMotion ? {} : { color: 'rgba(255,255,255,1)' }}
            >
              Services
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

        {/* Main Content */}
        <main className="relative z-1 pt-[84px] px-[70px] pb-[70px] max-[1180px]:pt-16 max-[1180px]:px-7 max-[1180px]:pb-[34px] max-[720px]:pt-10 max-[720px]:px-[18px] max-[720px]:pb-[22px]">
          {/* Section Header */}
          <motion.div
            className="max-w-[720px] mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{
                background: 'rgba(168,85,247,0.15)',
                border: '1px solid rgba(168,85,247,0.45)',
                boxShadow: '0 0 20px rgba(168,85,247,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              <SparkleIcon className="w-4 h-4 text-[rgba(200,160,255,0.9)]" />
              <span className="text-[0.82rem] font-medium text-[rgba(220,200,255,0.9)] tracking-[-0.01em]">
                Our Portfolio
              </span>
            </div>

            <h1 className="text-[2.8rem] max-[720px]:text-[2.2rem] font-semibold tracking-[-0.04em] text-[rgba(244,240,252,0.96)] leading-tight mb-4">
              Projects that define<br />
              <span className="text-[rgba(168,85,247,0.9)]">excellence</span>
            </h1>

            <p className="text-[1.05rem] font-normal text-[rgba(178,168,196,0.7)] leading-relaxed">
              Every project is a testament to our commitment to quality, innovation, and measurable results.
              From startups to enterprise, we build what matters.
            </p>
          </motion.div>

          {/* Projects Bento Grid */}
          <div className="grid grid-cols-3 max-[1180px]:grid-cols-2 max-[720px]:grid-cols-1 gap-5 items-stretch">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="relative overflow-hidden" style={{ background: '#08020d' }}>
        <AnimatedGlow
          className="absolute pointer-events-none left-1/2 -translate-x-1/2"
          style={{
            top: '-220px', width: '1100px', height: '480px',
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(146,72,251,0.22) 0%, rgba(118,49,221,0.12) 30%, transparent 70%)',
            filter: 'blur(12px)',
          }}
          delay={0.1}
        />
        <SiteFooter />
      </div>
    </div>
  )
}
