import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAutoAdvance } from '../hooks/useAutoAdvance'
import type { LifecycleStage } from '../types'
import {
  DiscoverIcon,
  DesignIcon,
  BuildIcon,
  TestIcon,
  DeployIcon,
  ObserveIcon,
  EvolveIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SparkleIcon,
} from '../components/icons'

// ─── Stage Data ──────────────────────────────────────────────────────────────

const STAGES: LifecycleStage[] = [
  {
    id: 'discover',
    number: 1,
    title: 'Discover',
    shortDescription: 'Understand goals, user needs, and market fit.',
    fullDescription: 'We dive deep into your business objectives, user pain points, and competitive landscape to establish a solid foundation for success.',
    bullets: ['Stakeholder Interviews', 'Market Research', 'User Journey Mapping', 'Requirement Analysis'],
    icon: DiscoverIcon,
    accent: 'purple',
  },
  {
    id: 'design',
    number: 2,
    title: 'Design',
    shortDescription: 'Architect solutions, prototype interfaces, and validate UX before development.',
    fullDescription: 'We architect intuitive solutions and prototype interfaces before writing a single line of code.',
    bullets: ['UX Research', 'Wireframing', 'Prototyping', 'Design System'],
    icon: DesignIcon,
    accent: 'gradient',
  },
  {
    id: 'build',
    number: 3,
    title: 'Build',
    shortDescription: 'Write clean, scalable code using modern technologies.',
    fullDescription: 'Our engineering team brings designs to life with clean, maintainable code built for scale.',
    bullets: ['Agile Development', 'Code Reviews', 'CI/CD Pipeline', 'Documentation'],
    icon: BuildIcon,
    accent: 'orange',
  },
  {
    id: 'test',
    number: 4,
    title: 'Test',
    shortDescription: 'Ensure quality, performance, and security.',
    fullDescription: 'Rigorous testing ensures your product meets the highest standards of quality and reliability.',
    bullets: ['Unit Testing', 'Integration Testing', 'Performance Testing', 'Security Audits'],
    icon: TestIcon,
    accent: 'orange',
  },
  {
    id: 'deploy',
    number: 5,
    title: 'Deploy',
    shortDescription: 'Release to production with confidence and reliability.',
    fullDescription: 'We handle the deployment process with zero-downtime strategies and comprehensive monitoring.',
    bullets: ['Staging Environment', 'Blue/Green Deploy', 'Rollback Strategy', 'Post-Deploy Verification'],
    icon: DeployIcon,
    accent: 'gradient',
  },
  {
    id: 'observe',
    number: 6,
    title: 'Observe',
    shortDescription: 'Monitor, analyze, and gather insights in real-time.',
    fullDescription: 'Continuous monitoring provides insights into user behavior, system performance, and business metrics.',
    bullets: ['Analytics Dashboard', 'Error Tracking', 'User Feedback', 'Performance Metrics'],
    icon: ObserveIcon,
    accent: 'gradient',
  },
  {
    id: 'evolve',
    number: 7,
    title: 'Evolve',
    shortDescription: 'Continuously improve and scale with your business.',
    fullDescription: 'Software is never done. We iterate based on data, user feedback, and changing business needs.',
    bullets: ['Feature Prioritization', 'A/B Testing', 'Technical Debt', 'Scale Planning'],
    icon: EvolveIcon,
    accent: 'purple',
  },
]

const ACCENT_COLORS = {
  purple: { main: '#a855f7', glow: '#a855f7', text: '#c084fc' },
  orange: { main: '#ff8c22', glow: '#ff8c22', text: '#ffb366' },
  gradient: { main: '#c084fc', glow: '#a855f7', text: '#d8b4fe' },
}

// ─── Detail Card Component ───────────────────────────────────────────────────

function DetailCard({ stage, progress }: { stage: LifecycleStage; progress: number }) {
  const colors = ACCENT_COLORS[stage.accent]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative rounded-[34px] p-[28px_38px] h-full overflow-hidden"
      style={{
        border: '1px solid rgba(148,78,255,0.38)',
        background:
          'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.3) 0%, transparent 38%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
        boxShadow:
          'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.2), 0 20px 48px rgba(0,0,0,0.44)',
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute pointer-events-none blur-[14px] right-[-60px] top-[-60px] w-[460px] h-[340px]"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(195,86,255,0.6) 0%, rgba(120,36,230,0.34) 40%, transparent 74%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Stage number badge */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
            style={{
              background: `linear-gradient(135deg, ${colors.main}30, ${colors.glow}50)`,
              border: `2px solid ${colors.main}`,
              color: '#fff',
              boxShadow: `0 0 20px ${colors.glow}40`,
            }}
          >
            {stage.number}
          </div>
          <div className="flex-1">
            <h3
              className="text-lg font-semibold tracking-[-0.02em] m-0"
              style={{ color: 'rgba(244,240,252,0.98)' }}
            >
              {stage.title}
            </h3>
          </div>
        </div>

        {/* Full description */}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: 'rgba(178,168,196,0.7)' }}
        >
          {stage.fullDescription}
        </p>

        {/* Bullets */}
        <div className="space-y-2 mb-6">
          {stage.bullets.map((bullet, idx) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: `${colors.main}20`,
                  color: colors.main,
                }}
              >
                <CheckIcon />
              </div>
              <span className="text-sm" style={{ color: 'rgba(178,168,196,0.85)' }}>
                {bullet}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-auto">
          <div
            className="h-1 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: `linear-gradient(90deg, ${colors.main}, ${colors.glow})`,
              }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs" style={{ color: 'rgba(178,168,196,0.5)' }}>
              Progress
            </span>
            <span className="text-xs font-medium" style={{ color: colors.text }}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Circular Stage Node ─────────────────────────────────────────────────────

function StageNode({
  stage,
  angle,
  radius,
  isActive,
  onClick,
  scale = 1,
}: {
  stage: LifecycleStage
  angle: number
  radius: number
  isActive: boolean
  onClick: () => void
  scale?: number
}) {
  const colors = ACCENT_COLORS[stage.accent]
  const Icon = stage.icon

  // Convert polar to cartesian
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  const size = (isActive ? 72 : 56) * scale

  return (
    // Outer wrapper handles positioning ONLY. Framer-motion can't overwrite this transform.
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
    >
      <motion.button
        onClick={onClick}
        className="relative flex items-center justify-center cursor-pointer w-full h-full"
        style={{
          borderRadius: '50%',
          background: isActive
            ? `linear-gradient(135deg, ${colors.main}40, ${colors.glow}60)`
            : 'rgba(16,8,24,0.9)',
          border: `2px solid ${isActive ? colors.main : 'rgba(255,255,255,0.15)'}`,
          boxShadow: isActive
            ? `0 0 30px ${colors.glow}60, inset 0 1px 0 rgba(255,255,255,0.1)`
            : 'none',
        }}
        animate={{
          scale: isActive ? 1 : 0.9,
          opacity: isActive ? 1 : 0.7,
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Icon */}
        <div style={{ color: isActive ? colors.text : 'rgba(178,168,196,0.6)' }}>
          <Icon />
        </div>
      </motion.button>
    </div>
  )
}

// ─── Circular Diagram Component ────────────────────────────────────────────────

function CircularDiagram({
  stages,
  activeIndex,
  onStageClick,
}: {
  stages: LifecycleStage[]
  activeIndex: number
  onStageClick: (index: number) => void
}) {
  // Responsive radius based on viewport
  const [radius, setRadius] = useState(200)

  useEffect(() => {
    const updateRadius = () => {
      const isMobile = window.innerWidth <= 720
      setRadius(isMobile ? 110 : 200)
    }
    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  const totalStages = stages.length

  // Calculate positions for each stage
  const stageAngles = useMemo(() => {
    return stages.map((_, i) => {
      // Start from -90deg (top) and go clockwise
      return -Math.PI / 2 + (i * 2 * Math.PI) / totalStages
    })
  }, [stages, totalStages])

  // Create SVG path for the connection ring
  const ringPath = useMemo(() => {
    const r = radius
    return `M ${r * Math.cos(stageAngles[0])} ${r * Math.sin(stageAngles[0])} ` +
      stageAngles.slice(1).map(angle => `L ${r * Math.cos(angle)} ${r * Math.sin(angle)}`).join(' ') +
      ' Z'
  }, [stageAngles, radius])

  const containerSize = radius * 2 + 120 // Padding for nodes
  const viewBoxSize = containerSize / 2

  return (
    <div
      className="relative mx-auto"
      style={{ width: containerSize, height: containerSize }}
    >
      {/* SVG Connection Ring - viewBox matches container exactly so SVG coords align with DOM */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`-${viewBoxSize} -${viewBoxSize} ${containerSize} ${containerSize}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#ff8c22" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base ring */}
        <motion.path
          d={ringPath}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1"
          strokeOpacity="0.3"
          strokeDasharray="4 4"
        />

        {/* Animated glow ring */}
        <motion.path
          d={ringPath}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="2"
          filter="url(#glow)"
          strokeDasharray="8 24"
          animate={{
            strokeDashoffset: [0, -32],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Progress indicator along ring */}
        <motion.circle
          r="6"
          fill="#ff8c22"
          filter="url(#glow)"
          animate={{
            cx: radius * Math.cos(stageAngles[activeIndex]),
            cy: radius * Math.sin(stageAngles[activeIndex]),
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        />
      </svg>

      {/* Center Logo */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
        style={{
          width: 96 * (radius / 200),
          height: 96 * (radius / 200),
          background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(255,140,34,0.2))',
          border: '1px solid rgba(168,85,247,0.4)',
          boxShadow: '0 0 50px rgba(168,85,247,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <svg viewBox="0 0 40 40" fill="none" style={{ width: 48 * (radius / 200), height: 48 * (radius / 200) }}>
          <path
            d="M20 5L30 15L20 25L10 15L20 5Z"
            fill="url(#centerGrad)"
            stroke="#a855f7"
            strokeWidth="1"
          />
          <path
            d="M20 15L30 25L20 35L10 25L20 15Z"
            fill="url(#centerGrad)"
            stroke="#ff8c22"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff8c22" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Stage nodes */}
      {stages.map((stage, i) => (
        <StageNode
          key={stage.id}
          stage={stage}
          angle={stageAngles[i]}
          radius={radius}
          isActive={i === activeIndex}
          onClick={() => onStageClick(i)}
          scale={radius / 200}
        />
      ))}
    </div>
  )
}

// ─── Navigation Component ────────────────────────────────────────────────────

function Navigation({
  total,
  active,
  onPrev,
  onNext,
  onDotClick,
}: {
  total: number
  active: number
  onPrev: () => void
  onNext: () => void
  onDotClick: (index: number) => void
}) {
  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      {/* Prev button */}
      <motion.button
        onClick={onPrev}
        className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: 'rgba(16,8,24,0.8)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(178,168,196,0.8)',
        }}
        whileHover={{ scale: 1.05, background: 'rgba(168,85,247,0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeftIcon />
      </motion.button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => onDotClick(i)}
            className="rounded-full cursor-pointer"
            animate={{
              width: i === active ? 24 : 8,
              backgroundColor: i === active ? '#a855f7' : 'rgba(255,255,255,0.2)',
            }}
            style={{
              height: 8,
            }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          />
        ))}
      </div>

      {/* Next button */}
      <motion.button
        onClick={onNext}
        className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: 'rgba(16,8,24,0.8)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(178,168,196,0.8)',
        }}
        whileHover={{ scale: 1.05, background: 'rgba(168,85,247,0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRightIcon />
      </motion.button>
    </div>
  )
}

// ─── Main Section Component ────────────────────────────────────────────────────

export function SoftwareLifecycleSection() {
  const {
    activeIndex,
    setActiveIndex,
    setIsHovered,
    progress,
    handlePrev,
    handleNext,
  } = useAutoAdvance(STAGES.length, 3000)

  const activeStage = STAGES[activeIndex]

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative z-1 mt-24 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] pb-20"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
        style={{
          background: 'rgba(168,85,247,0.1)',
          border: '1px solid rgba(168,85,247,0.3)',
        }}
      >
        <SparkleIcon />
        <span className="text-[rgba(200,170,255,0.9)] text-[0.78rem] font-medium tracking-[-0.01em]">
          Software Lifecycle
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="m-0 text-[2.6rem] font-medium leading-[1.1] tracking-tighter mb-4 max-[720px]:text-[2rem]"
        style={{ color: 'rgba(244,240,252,0.96)' }}
      >
        From Idea to Impact
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="m-0 text-[rgba(178,168,196,0.7)] text-[1rem] leading-relaxed tracking-[-0.015em] mb-12 max-w-[520px]"
      >
        A proven process that transforms concepts into production-ready software.
      </motion.p>

      {/* Main content grid */}
      <div
        className="grid grid-cols-[380px_1fr] gap-12 items-center max-[1180px]:grid-cols-1 max-[720px]:gap-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left: Detail Card */}
        <div className="h-[420px] max-[1180px]:h-auto max-[1180px]:order-2">
          <AnimatePresence mode="wait">
            <DetailCard key={activeStage.id} stage={activeStage} progress={progress} />
          </AnimatePresence>
        </div>

        {/* Right: Circular Diagram */}
        <div className="flex flex-col items-center max-[1180px]:order-1">
          <CircularDiagram
            stages={STAGES}
            activeIndex={activeIndex}
            onStageClick={setActiveIndex}
          />

          {/* Navigation */}
          <Navigation
            total={STAGES.length}
            active={activeIndex}
            onPrev={handlePrev}
            onNext={handleNext}
            onDotClick={setActiveIndex}
          />
        </div>
      </div>
    </motion.section>
  )
}
