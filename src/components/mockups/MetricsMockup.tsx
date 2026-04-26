export function MetricsMockup() {
  const rows = [
    { label: 'CPU', pct: 34 },
    { label: 'MEM', pct: 61 },
    { label: 'REQ/s', pct: 87 },
    { label: 'ERR%', pct: 2 },
  ]
  return (
    <div
      className="rounded-[14px] p-4 mb-5"
      style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.18)' }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.64rem] font-mono text-[rgba(200,160,255,0.65)]">system.metrics()</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
          <span className="text-[#4ade80] text-[0.6rem] font-mono">99.9% uptime</span>
        </div>
      </div>
      <div className="space-y-2">
        {rows.map(({ label, pct }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="text-[rgba(200,160,255,0.45)] text-[0.6rem] font-mono w-9 shrink-0">{label}</span>
            <div className="h-1.5 flex-1 rounded-full bg-[rgba(168,85,247,0.12)]">
              <div className="h-full rounded-full bg-[rgba(168,85,247,0.55)]" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[rgba(200,160,255,0.45)] text-[0.6rem] font-mono w-5 text-right shrink-0">{pct}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
