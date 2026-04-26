import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRightIcon, SparkleIcon } from '../components/icons'

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
  },
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI',
    category: 'AI Integration',
    description: 'Diagnostic assistance system improving accuracy by 40% for radiology teams.',
    metrics: ['40% accuracy+', 'HIPAA compliant', 'Deployed 50+ hospitals'],
    tech: ['PyTorch', 'DICOM', 'FastAPI', 'Azure'],
    accent: 'gradient' as const,
    featured: false,
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
      className={`relative rounded-[28px] overflow-hidden p-7 max-[720px]:p-5 will-change-transform ${
        project.featured ? 'col-span-2 max-[1180px]:col-span-2 max-[720px]:col-span-1' : 'col-span-1'
      }`}
      style={{
        border: styles.border,
        background: styles.background,
        boxShadow: styles.boxShadow,
        minHeight: project.featured ? '320px' : '280px',
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

      <div className="relative z-10 flex flex-col h-full">
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

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px]">
      {/* Section Header */}
      <motion.div
        className="max-w-[720px] mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
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

        <h2 className="text-[2.6rem] max-[720px]:text-[2rem] font-semibold tracking-[-0.04em] text-[rgba(244,240,252,0.96)] leading-tight mb-4">
          Projects that define<br />
          <span className="text-[rgba(168,85,247,0.9)]">excellence</span>
        </h2>

        <p className="text-[1.05rem] font-normal text-[rgba(178,168,196,0.7)] leading-relaxed">
          Every project is a testament to our commitment to quality, innovation, and measurable results.
          From startups to enterprise, we build what matters.
        </p>
      </motion.div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-3 max-[1180px]:grid-cols-2 max-[720px]:grid-cols-1 gap-5">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="flex items-center justify-center gap-6 mt-16 max-[720px]:flex-col max-[720px]:gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
      >
        <motion.button
          className="h-12 px-7 rounded-full bg-[#f0ecf6] text-[#0a0510] text-[0.95rem] font-semibold tracking-[-0.03em] cursor-pointer"
          style={{
            border: '1.5px solid rgba(220,215,230,0.82)',
            boxShadow: '0 1px 8px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
          whileHover={{ scale: 1.03, boxShadow: '0 2px 12px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.6)' }}
          whileTap={{ scale: 0.98 }}
        >
          Start Your Project
        </motion.button>
        <motion.a
          className="text-[rgba(178,168,196,0.8)] text-[0.94rem] font-normal tracking-[-0.02em] no-underline cursor-pointer flex items-center gap-2"
          href="#"
          whileHover={{ color: 'rgba(255,255,255,0.9)' }}
        >
          View all case studies
          <ArrowUpRightIcon className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  )
}
