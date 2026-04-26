import { NAV_ITEMS } from '../../lib/constants'
import { HomeIcon, ChevronIcon } from '../icons'

export function NavPill() {
  return (
    <nav
      className="inline-flex items-center gap-0.5 p-1 border border-[rgba(200,180,255,0.16)] rounded-full max-[720px]:flex-wrap max-[720px]:justify-center max-[720px]:max-w-full"
      style={{
        background: 'linear-gradient(180deg, rgba(28,16,48,0.96), rgba(14,7,26,0.98))',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 0 24px rgba(100,60,180,0.16)',
      }}
    >
      {NAV_ITEMS.map((item) => (
        <a
          className={[
            'inline-flex items-center justify-center gap-[7px] h-[34px] px-4 max-[720px]:px-[14px] rounded-full text-[0.92rem] tracking-tight no-underline cursor-pointer',
            item.active
              ? 'border border-[rgba(255,255,255,0.1)] text-[rgba(252,248,255,0.98)] font-medium'
              : 'text-[rgba(210,200,228,0.7)] font-normal',
          ].join(' ')}
          style={
            item.active
              ? {
                  background:
                    'radial-gradient(circle at 50% -50%, rgba(255,255,255,0.2), transparent 55%), linear-gradient(180deg, rgba(16,11,26,0.98), rgba(5,3,10,0.99))',
                  boxShadow:
                    'inset 0 1px 1px rgba(255,255,255,0.14), 0 0 14px rgba(160,100,255,0.15)',
                }
              : undefined
          }
          href="#"
          key={item.label}
        >
          {item.active ? <HomeIcon /> : null}
          <span>{item.label}</span>
          {item.hasChevron ? <ChevronIcon /> : null}
        </a>
      ))}
    </nav>
  )
}
