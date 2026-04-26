import { SparkleIcon } from '../components/icons'
import { AgentMockup, MetricsMockup } from '../components/mockups'
import { BENTO_CARD_DARK, BENTO_CELL } from '../lib/styles'

export function ProactiveCoreSection() {
  return (
    <section className="relative z-1 mt-20 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] pb-20">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
        style={{
          background: 'rgba(168,85,247,0.15)',
          border: '1px solid rgba(168,85,247,0.45)',
          boxShadow: '0 0 20px rgba(168,85,247,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <SparkleIcon />
        <span className="text-[rgba(200,170,255,0.9)] text-[0.78rem] font-medium tracking-[-0.01em]">Our Capabilities</span>
      </div>

      {/* Headline */}
      <h2 className="m-0 text-[2.9rem] font-medium leading-[1.06] tracking-tighter mb-4 max-[720px]:text-[2rem]"
        style={{ color: 'rgba(244,240,252,0.96)' }}
      >
        Build Smarter Systems.<br />Ship With Confidence.
      </h2>

      {/* Subtitle */}
      <p className="m-0 text-[rgba(178,168,196,0.66)] text-[0.94rem] leading-relaxed tracking-[-0.015em] mb-10 max-w-[460px]">
        The all-in-one AI engineering platform that designs, builds, scales, and self-repairs your infrastructure.
      </p>

      {/* 2 × 2 bento grid — left column narrower, right column wider; rows stretch to equal height */}
      <div className="grid grid-cols-[1fr_1.42fr] gap-4 items-stretch max-[720px]:grid-cols-1">

        {/* ── Card 1 (TL): Agentic Operations ── */}
        <div className={BENTO_CELL} style={BENTO_CARD_DARK}>
          <AgentMockup />
          <h3 className="m-0 text-[rgba(244,240,252,0.95)] text-[1.08rem] font-semibold tracking-[-0.04em] mb-1.5">
            Agentic Operations
          </h3>
          <p className="m-0 text-[rgba(178,168,196,0.62)] text-[0.84rem] leading-relaxed tracking-[-0.01em]">
            Deploy autonomous agents that observe, decide, and act in real-time without human intervention.
          </p>
        </div>

        {/* ── Card 2 (TR): 404 Resolution Engine ── */}
        <div className={BENTO_CELL} style={BENTO_CARD_DARK}>
          <h3 className="m-0 text-[rgba(244,240,252,0.95)] text-[1.38rem] font-semibold tracking-[-0.04em] mb-2">
            404 Resolution Engine
          </h3>
          <p className="m-0 text-[rgba(205,190,235,0.62)] text-[0.88rem] leading-relaxed tracking-[-0.015em] mb-4">
            The system that locates the missing piece and repairs the path—before you even know it's broken.
          </p>
          <p className="m-0 flex-1 text-[rgba(205,190,235,0.52)] text-[0.84rem] leading-relaxed tracking-[-0.015em]">
            It watches routes, redirects, and edge configs around the clock, proposes safe fixes, and can roll them out
            automatically with guardrails—so broken links and silent failures get corrected before they show up in your
            metrics or support queue.
          </p>
        </div>

        {/* ── Card 3 (BL): Predictive Scalability ── */}
        <div className={BENTO_CELL} style={BENTO_CARD_DARK}>
          <MetricsMockup />
          <h3 className="m-0 text-[rgba(244,240,252,0.95)] text-[1.08rem] font-semibold tracking-[-0.04em] mb-1.5">
            Predictive Scalability
          </h3>
          <p className="m-0 text-[rgba(178,168,196,0.62)] text-[0.84rem] leading-relaxed tracking-[-0.01em]">
            Infrastructure that anticipates demand before it arrives and scales preemptively.
          </p>
        </div>

        {/* ── Card 4 (BR): Works With Your Stack ── */}
        <div className={BENTO_CELL} style={BENTO_CARD_DARK}>
          <h3 className="m-0 text-[rgba(244,240,252,0.95)] text-[1.08rem] font-semibold tracking-[-0.04em] mb-1.5">
            Works With Your Stack
          </h3>
          <p className="m-0 text-[rgba(178,168,196,0.62)] text-[0.84rem] leading-relaxed tracking-[-0.01em] mb-4">
            Native integrations with the tools and platforms your team already trusts.
          </p>
          <p className="m-0 flex-1 text-[rgba(178,168,196,0.52)] text-[0.84rem] leading-relaxed tracking-[-0.01em]">
            Plug into OpenAI, Snowflake, Microsoft 365, Google Cloud, AWS, your Git provider, observability stacks, and
            Slack—so agents, metrics, and alerts stay in sync with how you already work.
          </p>
        </div>

      </div>
    </section>
  )
}
