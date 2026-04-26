import { motion, useReducedMotion } from 'framer-motion'
import { SparkleIcon } from '../components/icons'
import { AgentMockup, MetricsMockup } from '../components/mockups'
import { BENTO_CARD_DARK, BENTO_CELL } from '../lib/styles'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const bentoCards = [
  {
    id: 'agentic',
    hasMockup: true,
    mockup: <AgentMockup />,
    title: 'Agentic Operations',
    description: 'Deploy autonomous agents that observe, decide, and act in real-time without human intervention.',
  },
  {
    id: 'resolution',
    hasMockup: false,
    largeTitle: true,
    title: '404 Resolution Engine',
    shortDesc: 'The system that locates the missing piece and repairs the path—before you even know it\'s broken.',
    longDesc: 'It watches routes, redirects, and edge configs around the clock, proposes safe fixes, and can roll them out automatically with guardrails—so broken links and silent failures get corrected before they show up in your metrics or support queue.',
  },
  {
    id: 'scalability',
    hasMockup: true,
    mockup: <MetricsMockup />,
    title: 'Predictive Scalability',
    description: 'Infrastructure that anticipates demand before it arrives and scales preemptively.',
  },
  {
    id: 'stack',
    hasMockup: false,
    title: 'Works With Your Stack',
    shortDesc: 'Native integrations with the tools and platforms your team already trusts.',
    longDesc: 'Plug into OpenAI, Snowflake, Microsoft 365, Google Cloud, AWS, your Git provider, observability stacks, and Slack—so agents, metrics, and alerts stay in sync with how you already work.',
  },
]

function BentoCard({
  card,
  index,
  prefersReducedMotion,
}: {
  card: typeof bentoCards[0]
  index: number
  prefersReducedMotion: boolean | null
}) {
  return (
    <motion.div
      className={`${BENTO_CELL} will-change-transform`}
      style={BENTO_CARD_DARK}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: EASE }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -4,
              boxShadow:
                'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 32px rgba(140,50,255,0.35), 0 24px 56px rgba(0,0,0,0.5)',
            }
      }
    >
      {card.hasMockup && card.mockup}
      <h3 className={`m-0 text-[rgba(244,240,252,0.95)] ${card.largeTitle ? 'text-[1.38rem]' : 'text-[1.08rem]'} font-semibold tracking-[-0.04em] mb-1.5`}>
        {card.title}
      </h3>
      <p className="m-0 text-[rgba(178,168,196,0.62)] text-[0.84rem] leading-relaxed tracking-[-0.01em]">
        {card.description || card.shortDesc}
      </p>
      {card.longDesc && (
        <p className="m-0 flex-1 text-[rgba(205,190,235,0.52)] text-[0.84rem] leading-relaxed tracking-[-0.015em] mt-4">
          {card.longDesc}
        </p>
      )}
    </motion.div>
  )
}

export function ProactiveCoreSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative z-1 mt-20 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] pb-20">
      {/* Badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
        style={{
          background: 'rgba(168,85,247,0.15)',
          border: '1px solid rgba(168,85,247,0.45)',
          boxShadow: '0 0 20px rgba(168,85,247,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <SparkleIcon />
        <span className="text-[rgba(200,170,255,0.9)] text-[0.78rem] font-medium tracking-[-0.01em]">Our Capabilities</span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="m-0 text-[2.9rem] font-medium leading-[1.06] tracking-tighter mb-4 max-[1180px]:text-[2.4rem] max-[720px]:text-[1.8rem] max-[720px]:leading-[1.1]"
        style={{ color: 'rgba(244,240,252,0.96)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
      >
        Build Smarter Systems.<br className="max-[720px]:hidden" />Ship With Confidence.
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="m-0 text-[rgba(178,168,196,0.66)] text-[0.94rem] leading-relaxed tracking-[-0.015em] mb-10 max-w-[460px] max-[720px]:text-[0.85rem] max-[720px]:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
      >
        The all-in-one AI engineering platform that designs, builds, scales, and self-repairs your infrastructure.
      </motion.p>

      {/* 2 × 2 bento grid — left column narrower, right column wider; rows stretch to equal height */}
      <div className="grid grid-cols-[1fr_1.42fr] gap-4 items-stretch max-[720px]:grid-cols-1">
        {bentoCards.map((card, index) => (
          <BentoCard
            key={card.id}
            card={card}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </section>
  )
}
