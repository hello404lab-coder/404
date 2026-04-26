export function AgentMockup() {
  return (
    <div
      className="rounded-[14px] p-4 mb-5"
      style={{ background: 'rgba(255,140,34,0.07)', border: '1px solid rgba(255,140,34,0.18)' }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-[rgba(255,80,80,0.65)]" />
          <div className="w-2 h-2 rounded-full bg-[rgba(255,200,60,0.65)]" />
          <div className="w-2 h-2 rounded-full bg-[rgba(80,220,120,0.65)]" />
        </div>
        <span className="text-[0.64rem] font-mono tracking-wide text-[rgba(255,200,140,0.55)]">agent.run</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[#ff8c22] text-[0.7rem] font-mono">▶</span>
          <span className="text-[rgba(255,200,160,0.65)] text-[0.68rem] font-mono">Scanning infrastructure...</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#4ade80] text-[0.7rem] font-mono">✓</span>
          <span className="text-[rgba(200,240,210,0.55)] text-[0.68rem] font-mono">47 nodes monitored</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#4ade80] text-[0.7rem] font-mono">✓</span>
          <span className="text-[rgba(200,240,210,0.55)] text-[0.68rem] font-mono">0 anomalies detected</span>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <div className="h-1.5 flex-1 rounded-full bg-[rgba(255,140,34,0.14)]">
            <div className="h-full rounded-full" style={{ width: '78%', background: 'linear-gradient(90deg, #ff8c22, #ff6010)' }} />
          </div>
          <span className="text-[rgba(255,200,140,0.55)] text-[0.6rem] font-mono">78%</span>
        </div>
      </div>
    </div>
  )
}
