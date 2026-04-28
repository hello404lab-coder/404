import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRightIcon, SparkleIcon } from '../components/icons'
import { siteContent, type ProjectContent } from '../data/siteContent'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const PROJECTS = [...siteContent.projects.items].reverse()
const PROJECTS_SECTION = siteContent.projects.section

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
  project: ProjectContent
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
          {project.link ? (
            <motion.a
              className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} website`}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpRightIcon className="w-4 h-4 text-[rgba(244,240,252,0.8)]" />
            </motion.a>
          ) : (
            <motion.div
              className="flex items-center justify-center w-9 h-9 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                opacity: 0.7,
              }}
            >
              <ArrowUpRightIcon className="w-4 h-4 text-[rgba(244,240,252,0.8)]" />
            </motion.div>
          )}
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
    <>
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
                {PROJECTS_SECTION.badge}
              </span>
            </div>

            <h1 className="text-[2.8rem] max-[720px]:text-[2.2rem] font-semibold tracking-[-0.04em] text-[rgba(244,240,252,0.96)] leading-tight mb-4">
              {PROJECTS_SECTION.headlinePrefix}
              <br />
              <span className="text-[rgba(168,85,247,0.9)]">{PROJECTS_SECTION.headlineHighlight}</span>
            </h1>

            <p className="text-[1.05rem] font-normal text-[rgba(178,168,196,0.7)] leading-relaxed">
              {PROJECTS_SECTION.subtitle}
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

    </>
  )
}
