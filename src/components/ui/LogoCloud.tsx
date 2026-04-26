import { LOGOS } from '../../lib/constants'
import { SlackMark, AtlassianMark } from '../icons'

export function LogoCloud() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-[70px] mt-14 text-[rgba(210,203,218,0.65)] max-[1180px]:gap-9 max-[720px]:gap-x-7 max-[720px]:gap-y-[18px] max-[720px]:mt-10"
      aria-label="Trusted by"
    >
      {LOGOS.map((logo) => (
        <div
          className="inline-flex items-center gap-[10px] text-[1.02rem] font-semibold tracking-tighter whitespace-nowrap"
          key={logo.name}
        >
          {logo.mark === 'slack' ? <SlackMark /> : null}
          {logo.mark === 'atlassian' ? <AtlassianMark /> : null}
          <span>{logo.name}</span>
        </div>
      ))}
    </div>
  )
}
