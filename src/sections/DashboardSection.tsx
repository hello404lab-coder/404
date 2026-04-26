import { LeftPanel, RightPanel } from '../components/panels'

export function DashboardSection() {
  return (
    <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-5 mt-11 items-start max-[1180px]:grid-cols-1">
      <LeftPanel />
      <RightPanel />
    </section>
  )
}
