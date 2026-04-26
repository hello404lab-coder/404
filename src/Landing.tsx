type NavItem = {
  label: string
  active?: boolean
  hasChevron?: boolean
}

type LogoItem = {
  name: string
  mark?: 'slack' | 'atlassian'
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', active: true },
  { label: 'Product', hasChevron: true },
  { label: 'Story' },
  { label: 'Use cases' },
]

const LOGOS: LogoItem[] = [
  { name: 'Opendoor' },
  { name: 'DocuSign' },
  { name: 'slack', mark: 'slack' },
  { name: 'splunk>' },
  { name: 'ATLASSIAN', mark: 'atlassian' },
]

function SparkleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="block flex-none w-3.5 h-3.5"
      style={{ color: '#fff8fc', filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.65))' }}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2.8 13.85 8l5.35 1.85-5.35 1.85L12 16.9l-1.85-5.2L4.8 9.85 10.15 8 12 2.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg aria-hidden="true" className="block flex-none w-[15px] h-[15px]" viewBox="0 0 24 24">
      <path
        d="M6.8 10.4 12 6l5.2 4.4v6.5a1 1 0 0 1-1 1H7.8a1 1 0 0 1-1-1v-6.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.4 17.8v-3.7a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1v3.7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" className="block flex-none w-3 h-3" viewBox="0 0 16 16">
      <path
        d="m4 6 4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg aria-hidden="true" className="block flex-none w-[22px] h-[22px]" viewBox="0 0 24 24">
      <path
        d="M12 5.4a4.4 4.4 0 0 0-4.4 4.4v2.6c0 .8-.3 1.6-.9 2.2l-1 1.1h12.6l-1-1.1c-.6-.6-.9-1.4-.9-2.2V9.8A4.4 4.4 0 0 0 12 5.4Z"
        fill="currentColor"
      />
      <path
        d="M10.2 18.3a1.8 1.8 0 0 0 3.6 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg aria-hidden="true" className="block flex-none w-[18px] h-[18px] text-[#fffafc]" viewBox="0 0 24 24">
      <path
        d="M13.8 2.8 6.9 12h4l-.7 9.2 6.9-9.2h-4l.7-9.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GitBranchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="block w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <circle cx="6" cy="5" r="2" />
      <circle cx="18" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <line x1="6" x2="6" y1="7" y2="17" />
      <path d="M18 7a7 7 0 0 1-7 7H6" />
    </svg>
  )
}

function NeuralIcon() {
  return (
    <svg
      aria-hidden="true"
      className="block w-[22px] h-[22px]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="2.6" opacity="1" />
      <circle cx="4.5" cy="6" r="1.5" opacity="0.75" />
      <circle cx="19.5" cy="6" r="1.5" opacity="0.75" />
      <circle cx="4.5" cy="18" r="1.5" opacity="0.75" />
      <circle cx="19.5" cy="18" r="1.5" opacity="0.75" />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.2"
        x1="6" x2="10.2" y1="6.8" y2="10.8"
        opacity="0.45"
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.2"
        x1="18" x2="13.8" y1="6.8" y2="10.8"
        opacity="0.45"
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.2"
        x1="6" x2="10.2" y1="17.2" y2="13.2"
        opacity="0.45"
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.2"
        x1="18" x2="13.8" y1="17.2" y2="13.2"
        opacity="0.45"
      />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg aria-hidden="true" className="block flex-none w-6 h-6" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="check-fill" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" fill="url(#check-fill)" r="10" />
      <path
        d="M7.5 12.5l3 3 6-7"
        fill="none"
        stroke="rgba(255,255,255,0.95)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function SlackMark() {
  return (
    <svg aria-hidden="true" className="block flex-none text-current w-[22px] h-[22px]" viewBox="0 0 24 24">
      <path
        d="M9.3 2a2.3 2.3 0 1 1 0 4.6H7a2.3 2.3 0 0 1 0-4.6h2.3Zm0 5.7H3.5a2.3 2.3 0 1 0 0 4.6h5.8a2.3 2.3 0 1 0 0-4.6Zm12.7 2.4a2.3 2.3 0 1 1-4.6 0V7.8a2.3 2.3 0 0 1 4.6 0v2.3Zm-5.7 0V4.3a2.3 2.3 0 1 0-4.6 0v5.8a2.3 2.3 0 1 0 4.6 0Zm-2.4 12a2.3 2.3 0 1 1 0-4.6h2.3a2.3 2.3 0 0 1 0 4.6h-2.3Zm0-5.7h5.8a2.3 2.3 0 1 0 0-4.6h-5.8a2.3 2.3 0 1 0 0 4.6ZM2 13.9a2.3 2.3 0 1 1 4.6 0v2.3a2.3 2.3 0 0 1-4.6 0v-2.3Zm5.7 0v5.8a2.3 2.3 0 1 0 4.6 0v-5.8a2.3 2.3 0 1 0-4.6 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function AtlassianMark() {
  return (
    <svg aria-hidden="true" className="block flex-none text-current w-7 h-[18px]" viewBox="0 0 36 24">
      <path
        d="M12.48 2.5c-.48 0-.9.27-1.12.7L.94 22.44a.78.78 0 0 0 .69 1.14h6.33c.5 0 .95-.28 1.17-.73l4.16-8.45 4.13 8.45c.22.45.68.73 1.18.73h6.34a.78.78 0 0 0 .69-1.14L13.6 3.2a1.25 1.25 0 0 0-1.12-.7Z"
        fill="currentColor"
      />
      <path
        d="M22.25 8.8a1.24 1.24 0 0 0-1.66.6l-2.03 4.14 4.44 9.31c.22.46.68.74 1.18.74h5.88a.78.78 0 0 0 .7-1.12L22.84 9.41a1.24 1.24 0 0 0-.59-.61Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  )
}

function HeroSwooshes() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1728 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="hero-blur-xl" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="hero-blur-lg" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="hero-blur-sm" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <g opacity="0.95" transform="translate(-30 220) scale(0.75 0.72)">
        <path
          d="M-94 484C34 298 172 186 348 183C486 181 594 267 602 398C607 477 575 549 523 615"
          fill="none"
          filter="url(#hero-blur-xl)"
          stroke="rgba(255,185,136,0.12)"
          strokeLinecap="round"
          strokeWidth="100"
        />
        <path
          d="M-90 480C38 300 178 192 352 191C484 190 584 271 587 397C589 470 562 535 518 588"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(255,244,239,0.9)"
          strokeLinecap="round"
          strokeWidth="15"
        />
        <path
          d="M-92 482C37 302 178 194 350 193C482 192 581 272 583 397C585 466 559 527 514 581"
          fill="none"
          filter="url(#hero-blur-sm)"
          stroke="rgba(255,251,248,0.98)"
          strokeLinecap="round"
          strokeWidth="7"
        />
        <path
          d="M12 552C146 396 315 318 470 329C590 338 690 420 682 585"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(255,119,36,0.56)"
          strokeLinecap="round"
          strokeWidth="12"
        />
        <path
          d="M18 555C148 398 316 321 470 331C586 339 684 418 676 585"
          fill="none"
          stroke="rgba(255,109,28,0.92)"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
        <path
          d="M-44 626C92 518 252 463 408 470C522 475 608 536 612 645"
          fill="none"
          stroke="rgba(255,142,62,0.42)"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M-76 700C54 594 216 539 372 546C486 551 568 610 572 709"
          fill="none"
          stroke="rgba(191, 95, 44, 0.42)"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <path
          d="M-98 772C28 662 188 606 342 612C450 616 532 672 540 768"
          fill="none"
          stroke="rgba(154, 75, 34, 0.36)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M-126 434C7 287 143 201 290 205C394 208 468 272 370 675"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(255,248,244,0.2)"
          strokeLinecap="round"
          strokeWidth="18"
        />
      </g>

      <g opacity="0.95" transform="translate(1758 220) scale(-0.75 0.72)">
        <path
          d="M-94 484C34 298 172 186 348 183C486 181 594 267 602 398C607 477 575 549 523 615"
          fill="none"
          filter="url(#hero-blur-xl)"
          stroke="rgba(135,46,255,0.62)"
          strokeLinecap="round"
          strokeWidth="84"
        />
        <path
          d="M-90 480C38 300 178 192 352 191C484 190 584 271 587 397C589 470 562 535 518 588"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(195,79,255,0.7)"
          strokeLinecap="round"
          strokeWidth="24"
        />
        <path
          d="M-92 482C37 302 178 194 350 193C482 192 581 272 583 397C585 466 559 527 514 581"
          fill="none"
          filter="url(#hero-blur-sm)"
          stroke="rgba(247,239,255,0.95)"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M12 552C146 396 315 318 470 329C590 338 690 420 682 585"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(195,79,255,0.56)"
          strokeLinecap="round"
          strokeWidth="12"
        />
        <path
          d="M18 555C148 398 316 321 470 331C586 339 684 418 676 585"
          fill="none"
          stroke="rgba(185,65,255,0.92)"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
        <path
          d="M-44 626C92 518 252 463 408 470C522 475 608 536 612 645"
          fill="none"
          stroke="rgba(133,37,236,0.42)"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M-76 700C54 594 216 539 372 546C486 551 568 610 572 709"
          fill="none"
          stroke="rgba(97,23,188,0.42)"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <path
          d="M-98 772C28 662 188 606 342 612C450 616 532 672 540 768"
          fill="none"
          stroke="rgba(75,15,155,0.36)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M-126 434C7 287 143 201 290 205C394 208 468 272 370 675"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(220,200,255,0.2)"
          strokeLinecap="round"
          strokeWidth="18"
        />
      </g>
    </svg>
  )
}

function NavPill() {
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

function LogoCloud() {
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

function LeftPanel() {
  return (
    <article
      className="relative min-h-[560px] rounded-[34px] overflow-hidden max-[1180px]:min-h-0"
      style={{
        border: '1px solid rgba(210,105,48,0.38)',
        background:
          'radial-gradient(circle at 16% 20%, rgba(255,131,54,0.22) 0%, transparent 52%), linear-gradient(180deg, rgba(14,7,9,0.99), rgba(8,4,6,0.99))',
        boxShadow:
          'inset 0 1px 0 rgba(255,190,130,0.07), -3px 0 28px rgba(255,100,30,0.2), 0 20px 48px rgba(0,0,0,0.44)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none blur-[14px] left-[-80px] top-[-80px] w-[460px] h-[400px]"
        style={{
          background:
            'radial-gradient(circle at 40% 40%, rgba(255,119,40,0.48) 0%, rgba(200,70,18,0.28) 36%, transparent 72%)',
        }}
      />

      {/* Inner content */}
      <div className="relative z-1 py-[28px] px-[38px] max-[720px]:p-[22px_18px]">
        {/* Header row */}
        <div className="flex items-start justify-between gap-[18px]">
          <h3 className="mt-[10px] mb-0 max-w-[360px] text-[rgba(244,240,248,0.96)] text-[1.02rem] font-medium tracking-[-0.04em]">
            3 Active Deployments
          </h3>
          {/* Bell orb with 404 badge */}
          <div className="relative shrink-0">
            <div
              className="inline-flex items-center justify-center w-[54px] h-[54px] rounded-full text-[#fff0e8]"
              style={{
                border: '1px solid rgba(255,140,70,0.5)',
                background:
                  'radial-gradient(circle at 44% 30%, rgba(255,210,170,0.52), rgba(255,120,50,0.32) 44%, rgba(30,10,8,0.96) 78%)',
                boxShadow:
                  '0 0 22px rgba(255,100,40,0.36), 0 0 8px rgba(255,150,80,0.24), inset 0 1px 0 rgba(255,220,180,0.2)',
              }}
            >
              <BellIcon />
            </div>
            {/* 404 badge */}
            <span
              className="absolute -top-1 -right-1 inline-flex items-center justify-center h-[18px] px-[5px] rounded-full text-[9px] font-bold tracking-tight leading-none text-[#fff0e8]"
              style={{
                background: 'linear-gradient(135deg, #ff6010, #ff9030)',
                boxShadow: '0 0 8px rgba(255,90,20,0.7)',
              }}
            >
              404
            </span>
          </div>
        </div>

        {/* Deployment card */}
        <div
          className="mt-[26px] p-[26px_28px_28px] rounded-[28px] max-[720px]:p-5"
          style={{
            border: '1px solid rgba(200,160,130,0.2)',
            background:
              'linear-gradient(180deg, rgba(110,72,62,0.52), rgba(38,16,18,0.88)), rgba(35,16,18,0.94)',
            boxShadow:
              'inset 0 1px 0 rgba(255,220,180,0.07), 0 12px 28px rgba(0,0,0,0.45)',
          }}
        >
          <div className="flex items-center max-[720px]:flex-col max-[720px]:items-start">
            {/* Git icon avatar */}
            <div
              className="inline-flex items-center justify-center overflow-hidden rounded-full w-16 h-16 p-[3px] shrink-0 text-[#ffb070]"
              style={{
                border: '1px solid rgba(255,160,90,0.56)',
                background:
                  'radial-gradient(circle at 40% 35%, rgba(255,180,100,0.18), rgba(200,80,20,0.28) 60%, rgba(30,12,6,0.96))',
                boxShadow: '0 0 18px rgba(255,108,47,0.3)',
              }}
            >
              <GitBranchIcon />
            </div>
            <div className="ml-[18px]">
              <div className="text-[#f3eef6] text-[1.15rem] font-medium tracking-tighter">
                Project: Tradovix
              </div>
              <div className="mt-1 text-[rgba(193,172,176,0.86)] text-[0.86rem] tracking-[-0.03em]">
                Build Status: Stable (99.9% Uptime)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-[26px] max-[720px]:grid-cols-1">
            <button
              className="h-16 rounded-full text-[rgba(240,234,242,0.94)] text-[0.96rem] font-medium tracking-[-0.04em] cursor-pointer"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                background:
                  'linear-gradient(180deg, rgba(52,36,44,0.96), rgba(28,18,24,0.98))',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.07), 0 4px 12px rgba(0,0,0,0.3)',
              }}
              type="button"
            >
              View Logs
            </button>
            <button
              className="h-16 border-0 rounded-full text-[#fff4e0] text-[0.96rem] font-semibold tracking-[-0.03em] cursor-pointer"
              style={{
                background:
                  'radial-gradient(circle at 88% 42%, rgba(255,248,160,0.98) 0%, rgba(255,230,100,0.7) 14%, transparent 30%), linear-gradient(90deg, #ff6010 0%, #ff8c22 32%, #ffaa30 58%, #ffcf6a 84%, #ffe98c 100%)',
                boxShadow:
                  '0 8px 22px rgba(255,100,20,0.32), inset 0 1px 0 rgba(255,255,240,0.3)',
              }}
              type="button"
            >
              Scale Instance
            </button>
          </div>
        </div>

        {/* Pipeline pill */}
        <div className="flex justify-center mt-[26px] mb-[18px]">
          <button
            className="relative h-11 px-7 rounded-full text-[rgba(232,228,238,0.94)] text-[0.92rem] tracking-[-0.03em] cursor-pointer"
            style={{
              border: '1px solid rgba(255,255,255,0.14)',
              background:
                'linear-gradient(180deg, rgba(42,32,48,0.96), rgba(22,14,28,0.98))',
              boxShadow:
                '0 0 0 6px rgba(14,8,20,0.92), 0 0 0 8px rgba(50,36,62,0.55)',
            }}
            type="button"
          >
            View Pipeline
          </button>
        </div>

        {/* Footer row */}
        <div
          className="mt-6 h-[110px] rounded-b-[28px] pt-10"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            background:
              'linear-gradient(180deg, rgba(12,7,10,0) 0%, rgba(10,5,8,0.28) 20%, rgba(8,4,6,0.58) 100%)',
          }}
        >
          <div className="flex items-center">
            <div
              className="inline-flex items-center justify-center overflow-hidden rounded-full w-11 h-11 p-[2px] shrink-0"
              style={{
                border: '1px solid rgba(255,140,70,0.28)',
                background: 'rgba(255,100,30,0.08)',
              }}
            >
              <div
                className="w-full h-full rounded-[inherit] inline-flex items-center justify-center text-[0.72rem] font-bold tracking-tight"
                style={{
                  background: 'linear-gradient(180deg, rgba(80,40,20,0.9), rgba(40,18,10,0.98))',
                  color: 'rgba(255,180,100,0.88)',
                }}
              >
                404
              </div>
            </div>
            <div className="ml-[14px] flex w-full justify-between items-center">
              <div className="text-[rgba(239,234,243,0.88)] text-[0.95rem] tracking-[-0.03em]">
                404 Bot
              </div>
              <div className="text-[rgba(187,178,194,0.68)] text-[0.84rem] tracking-[-0.03em]">
                Current Sprint: Q2-26
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function RightPanel() {
  return (
    <article
      className="relative min-h-[560px] rounded-[34px] overflow-hidden max-[1180px]:min-h-0"
      style={{
        border: '1px solid rgba(148,78,255,0.38)',
        background:
          'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.3) 0%, transparent 38%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
        boxShadow:
          'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.2), 0 20px 48px rgba(0,0,0,0.44)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none blur-[14px] right-[-60px] top-[-60px] w-[460px] h-[340px]"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(195,86,255,0.6) 0%, rgba(120,36,230,0.34) 40%, transparent 74%)',
        }}
      />

      {/* Inner content */}
      <div className="relative z-1 py-[28px] px-[38px] max-[720px]:p-[22px_18px] max-[720px]:pb-7">
        {/* Inference card */}
        <div
          className="relative p-[26px_26px_28px] rounded-[28px]"
          style={{
            border: '1px solid rgba(180,140,255,0.16)',
            background:
              'linear-gradient(180deg, rgba(10,7,18,0.97), rgba(14,8,26,0.99))',
            boxShadow:
              'inset 0 1px 0 rgba(220,190,255,0.06), 0 12px 32px rgba(0,0,0,0.42)',
          }}
        >
          {/* Decorative rails */}
          <div
            className="absolute top-1/2 w-[72px] h-[230px] -translate-y-1/2 rounded-[24px] left-[-90px] max-[1180px]:hidden"
            style={{ border: '1px solid rgba(215,188,255,0.12)' }}
          />
          <div
            className="absolute top-1/2 w-[72px] h-[230px] -translate-y-1/2 rounded-[24px] right-[-90px] max-[1180px]:hidden"
            style={{ border: '1px solid rgba(215,188,255,0.12)' }}
          />

          {/* Inference head */}
          <div className="flex items-center justify-between gap-[18px] max-[720px]:flex-col max-[720px]:items-start">
            <div className="flex items-center">
              {/* Neural icon avatar */}
              <div
                className="inline-flex items-center justify-center overflow-hidden rounded-full w-11 h-11 p-[2px] shrink-0 text-[#c084fc]"
                style={{
                  border: '1px solid rgba(200,115,255,0.55)',
                  background:
                    'radial-gradient(circle at 40% 35%, rgba(210,150,255,0.18), rgba(130,40,230,0.28) 60%, rgba(10,4,22,0.96))',
                  boxShadow: '0 0 18px rgba(170,66,255,0.28)',
                }}
              >
                <NeuralIcon />
              </div>
              <div className="ml-3">
                <div className="text-[rgba(194,179,208,0.74)] text-[0.74rem] tracking-[-0.02em]">
                  Neural Engine
                </div>
                <div className="mt-0.5 text-[#f4f0f7] text-[0.98rem] font-medium tracking-[-0.04em]">
                  Inference: Cloud Latency
                </div>
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2 text-[rgba(230,222,239,0.88)] text-[0.72rem] tracking-[-0.02em]">
                <span
                  className="w-3 h-3 rounded-full bg-[#9030ff] shrink-0"
                  style={{
                    border: '1px solid rgba(180,90,255,0.88)',
                    boxShadow:
                      '0 0 0 4px rgba(150,49,246,0.28), 0 0 18px rgba(150,49,246,0.52)',
                  }}
                />
                <span>Active Inference</span>
              </div>
              <div className="mt-[5px] text-[rgba(187,178,194,0.74)] text-[0.78rem] tracking-[-0.03em]">
                Running 6 min ago
              </div>
            </div>
          </div>

          {/* Data row */}
          <div className="flex justify-between mt-[22px] text-[rgba(228,221,236,0.84)] text-[0.92rem] tracking-[-0.03em] max-[720px]:flex-col max-[720px]:items-start">
            <span>Data logging</span>
            <span className="text-[rgba(187,178,194,0.74)] text-[0.82rem]">
              Last sync 3s ago
            </span>
          </div>

          {/* Prompt card */}
          <div
            className="flex items-center justify-between gap-[18px] mt-4 p-[14px_16px_14px_14px] rounded-[18px]"
            style={{
              border: '1px solid rgba(220,160,255,0.28)',
              background:
                'radial-gradient(ellipse at 100% 50%, rgba(210,100,255,0.9) 0%, rgba(175,60,255,0.82) 18%, rgba(118,22,210,0.6) 44%, rgba(10,5,18,0.94) 80%), linear-gradient(90deg, rgba(28,10,44,0.96), rgba(100,24,168,0.92))',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.16), 0 0 30px rgba(170,60,255,0.32)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[12px] shrink-0"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  background:
                    'linear-gradient(180deg, rgba(250,183,255,0.24), rgba(113,23,202,0.34))',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                <BoltIcon />
              </div>
              <div>
                <div className="text-[rgba(250,245,255,0.98)] text-[0.92rem] font-medium tracking-[-0.04em]">
                  Analyzing Node Clusters...
                </div>
                <div className="text-[rgba(228,215,239,0.78)] text-[0.76rem] tracking-[-0.03em]">
                  Evaluating 847 endpoints
                </div>
              </div>
            </div>
            <div className="text-[rgba(228,215,239,0.78)] text-[0.76rem] tracking-[-0.03em]">
              1s ago
            </div>
          </div>
        </div>

        {/* Connector line */}
        <div
          className="relative w-0.5 h-[74px] mx-auto"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(202,144,255,0.78))',
            boxShadow: '0 0 22px rgba(206,147,255,0.32)',
          }}
          aria-hidden="true"
        >
          <span
            className="absolute left-1/2 w-2 h-2 rounded-full bg-[#09020f] -translate-x-1/2 top-[-7px]"
            style={{ border: '2px solid rgba(255,255,255,0.88)' }}
          />
          <span
            className="absolute left-1/2 w-2 h-2 rounded-full bg-[#09020f] -translate-x-1/2 bottom-[-7px]"
            style={{ border: '2px solid rgba(255,255,255,0.88)' }}
          />
        </div>

        {/* Solution card */}
        <div
          className="p-[28px_32px] rounded-[28px]"
          style={{
            border: '1px solid rgba(190,150,255,0.22)',
            background:
              'linear-gradient(160deg, rgba(98,54,178,0.96) 0%, rgba(74,30,130,0.96) 52%, rgba(46,16,82,0.98) 100%)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.16), 0 14px 34px rgba(14,5,26,0.38)',
          }}
        >
          <div className="flex justify-between gap-5 text-[rgba(243,238,248,0.96)] text-[0.94rem] tracking-[-0.03em] max-[720px]:flex-col max-[720px]:items-start">
            <span>Solution Synthesized</span>
            <span className="text-[rgba(226,217,236,0.82)] text-[0.82rem]">
              Autonomous Logic
            </span>
          </div>

          <div
            className="flex items-center justify-between gap-[18px] w-full mt-8 p-[13px_20px] rounded-[18px] max-[720px]:flex-col max-[720px]:items-start max-[720px]:mt-6"
            style={{
              border: '1px solid rgba(200,170,255,0.2)',
              background:
                'linear-gradient(180deg, rgba(118,88,168,0.52), rgba(62,40,96,0.72))',
            }}
          >
            <div className="flex items-center gap-3 text-[rgba(248,243,252,0.96)] text-[0.96rem] tracking-[-0.03em]">
              <CheckCircleIcon />
              <span>Index Optimized +12.4%</span>
            </div>
            <span className="text-[rgba(231,223,238,0.9)] text-[0.84rem] tracking-[-0.03em]">
              10:35 am
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Landing() {
  return (
    <div className="min-h-svh max-[720px]:p-4">
      <div
        className="relative min-h-[1110px] mx-auto overflow-hidden max-[1180px]:min-h-0 max-[720px]:rounded-[28px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(42,8,61,0.86) 0%, rgba(18,2,29,0.98) 18%, rgba(8,2,13,0.99) 47%, rgba(8,2,13,1) 100%)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.04), 0 42px 80px rgba(20,4,28,0.2)',
        }}
      >
        {/* Background layer */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top glow */}
          <div
            className="absolute blur-[18px] left-1/2 top-[-180px] w-[860px] h-[420px] -translate-x-1/2"
            style={{
              background:
                'radial-gradient(circle, rgba(146,72,251,0.62) 0%, rgba(118,49,221,0.3) 40%, transparent 78%)',
            }}
          />
          {/* Left veil */}
          <div
            className="absolute left-[-4px] top-0 w-80 h-full opacity-[0.92]"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,135,55,0.2) 0%, rgba(207,76,24,0.17) 24%, rgba(110,29,17,0.09) 50%, rgba(43,11,12,0.03) 70%, transparent 100%)',
            }}
          />
          {/* Left glow */}
          <div
            className="absolute blur-[18px] left-[-170px] top-[110px] w-[520px] h-[800px]"
            style={{
              background:
                'radial-gradient(circle at 28% 42%, rgba(255,190,136,0.14) 0%, rgba(255,128,52,0.26) 18%, rgba(185,60,22,0.22) 38%, rgba(96,24,16,0.13) 60%, transparent 84%)',
            }}
          />
          {/* Left ember */}
          <div
            className="absolute left-[-76px] bottom-[132px] w-[260px] h-[220px] blur-xl"
            style={{
              background:
                'radial-gradient(circle at 44% 50%, rgba(255,116,34,0.38) 0%, rgba(255,88,22,0.22) 32%, rgba(93,22,15,0.07) 58%, transparent 76%)',
            }}
          />
          {/* Right veil */}
          <div
            className="absolute right-[-4px] top-0 w-80 h-full opacity-[0.92]"
            style={{
              background:
                'linear-gradient(270deg, rgba(135,46,255,0.2) 0%, rgba(106,28,219,0.17) 24%, rgba(60,14,100,0.09) 50%, rgba(25,7,43,0.03) 70%, transparent 100%)',
            }}
          />
          {/* Right glow */}
          <div
            className="absolute blur-[18px] right-[-170px] top-[110px] w-[520px] h-[800px]"
            style={{
              background:
                'radial-gradient(circle at 72% 42%, rgba(180,100,255,0.14) 0%, rgba(151,53,255,0.26) 18%, rgba(106,28,219,0.22) 38%, rgba(55,12,100,0.13) 60%, transparent 84%)',
            }}
          />
          {/* Right ember */}
          <div
            className="absolute right-[-76px] bottom-[132px] w-[260px] h-[220px] blur-xl"
            style={{
              background:
                'radial-gradient(circle at 56% 50%, rgba(151,53,255,0.38) 0%, rgba(106,28,219,0.22) 32%, rgba(45,10,80,0.07) 58%, transparent 76%)',
            }}
          />
          {/* Bottom glow */}
          <div
            className="absolute blur-[18px] left-1/2 bottom-[-190px] w-[980px] h-[380px] -translate-x-1/2"
            style={{
              background:
                'radial-gradient(circle, rgba(167,60,255,0.28) 0%, rgba(79,16,131,0.2) 30%, transparent 74%)',
            }}
          />
          {/* Dot field — top */}
          <div
            className="absolute left-1/2 top-[-6px] w-[750px] h-[210px] -translate-x-1/2 opacity-[0.72]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(220,205,255,0.62) 1.4px, transparent 1.4px)',
              backgroundSize: '22px 22px',
              maskImage:
                'radial-gradient(ellipse at 50% 28%, black 0%, rgba(0,0,0,0.9) 38%, transparent 76%)',
            }}
          />
          {/* Dot field — badge */}
          <div
            className="absolute left-1/2 top-[160px] w-[230px] h-[150px] -translate-x-1/2 opacity-[0.38]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,193,120,0.38) 1.2px, transparent 1.2px)',
              backgroundSize: '22px 22px',
              maskImage:
                'radial-gradient(circle at 50% 38%, black 0%, rgba(0,0,0,0.82) 48%, transparent 84%)',
            }}
          />
          {/* Dot field — cta */}
          <div
            className="absolute left-1/2 top-[392px] w-[360px] h-[204px] -translate-x-1/2 opacity-[0.44]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,186,235,0.26) 1.2px, transparent 1.2px)',
              backgroundSize: '22px 22px',
              maskImage:
                'radial-gradient(circle at 50% 42%, black 0%, rgba(0,0,0,0.82) 46%, transparent 84%)',
            }}
          />
          {/* Dot field — right */}
          <div
            className="absolute right-[18px] top-[640px] w-[180px] h-[250px] opacity-[0.72]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(239,230,253,0.62) 1.3px, transparent 1.3px)',
              backgroundSize: '22px 22px',
              maskImage:
                'linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)',
            }}
          />
          <HeroSwooshes />
        </div>

        {/* Header */}
        <header className="relative z-2 grid grid-cols-[1fr_auto_1fr] items-center gap-6 pt-9 px-[70px] max-[1180px]:grid-cols-1 max-[1180px]:justify-items-center max-[1180px]:pt-8 max-[1180px]:px-7 max-[720px]:gap-4 max-[720px]:px-[18px]">
          <div className="text-[rgba(248,244,252,0.97)] text-[1.15rem] font-medium tracking-[-0.04em] max-[1180px]:justify-self-stretch max-[1180px]:text-center">
          404
          </div>
          <NavPill />
          <div className="flex items-center justify-end gap-[18px] max-[1180px]:justify-self-stretch max-[1180px]:justify-center">
            <a
              className="text-[rgba(232,226,242,0.9)] text-[0.94rem] font-normal tracking-[-0.02em] no-underline cursor-pointer"
              href="#"
            >
              Our Work
            </a>
            <button
              className="h-9 px-5 rounded-full bg-[#f0ecf6] text-[#0a0510] text-[0.92rem] font-semibold tracking-[-0.03em] cursor-pointer"
              style={{
                border: '1.5px solid rgba(220,215,230,0.82)',
                boxShadow:
                  '0 1px 8px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
              }}
              type="button"
            >
              Start Your Project
            </button>
          </div>
        </header>

        {/* Main */}
        <main className="relative z-1 pt-[84px] px-[70px] pb-[70px] max-[1180px]:pt-16 max-[1180px]:px-7 max-[1180px]:pb-[34px] max-[720px]:pt-10 max-[720px]:px-[18px] max-[720px]:pb-[22px]">
          {/* Hero section */}
          <section className="flex flex-col items-center text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-[10px] h-[38px] mb-[30px] px-[18px] rounded-full text-[rgba(248,243,255,0.97)] text-[0.9rem] font-medium tracking-[-0.02em]"
              style={{
                border: '1.5px solid transparent',
                background:
                  'linear-gradient(180deg, rgba(12,6,20,0.99), rgba(4,2,9,1)) padding-box, linear-gradient(130deg, rgba(105,45,240,0.95) 0%, rgba(75,25,195,0.55) 34%, rgba(185,82,18,0.68) 66%, rgba(255,142,45,0.94) 100%) border-box',
                boxShadow:
                  'inset 0 1px 1px rgba(255,255,255,0.07), -8px -4px 22px rgba(110,45,255,0.32), 8px 5px 22px rgba(255,118,30,0.28), 0 0 32px rgba(150,55,255,0.14)',
              }}
            >
              <SparkleIcon />
              <span>Next-Gen Software Lab</span>
            </div>

            {/* Title */}
            <h1
              className="m-0 max-w-[960px] text-[4.5rem] font-medium leading-[0.98] tracking-[-0.068em] max-[720px]:text-[clamp(2.9rem,12vw,4.2rem)]"
              style={{
                background:
                  'linear-gradient(175deg, #d6d0dc 0%, #c2baca 45%, #aea5bc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Finding Solutions Where Others See Errors.
              <br />
              
            </h1>

            {/* Subtitle */}
            <p className="mt-[26px] mb-8 text-[rgba(178,170,190,0.88)] text-[0.97rem] font-normal tracking-[-0.02em] max-[720px]:max-w-[320px] max-[720px]:leading-[1.45]">
            Custom software, AI integration, and scalable digital architecture designed for the modern enterprise..
            </p>

            {/* CTA */}
            <button
              className="h-[58px] px-11 rounded-full text-[#f2eaff] text-base font-medium tracking-[-0.03em] cursor-pointer"
              style={{
                border: '1.5px solid transparent',
                background:
                  'linear-gradient(180deg, rgba(8,4,16,0.99), rgba(2,1,5,1)) padding-box, linear-gradient(145deg, rgba(200,90,255,0.92) 0%, rgba(230,100,255,0.96) 42%, rgba(200,78,255,0.92) 68%, rgba(150,45,245,0.88) 100%) border-box',
                boxShadow:
                  'inset 0 1px 1px rgba(255,255,255,0.1), 0 0 20px rgba(220,85,255,0.78), 0 0 50px rgba(195,60,255,0.58), 0 0 100px rgba(165,30,248,0.4), 0 0 160px rgba(130,12,225,0.22)',
              }}
              type="button"
            >
              Start Your Project
            </button>

            <LogoCloud />
          </section>

          {/* Dashboard grid */}
          <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-5 mt-11 items-start max-[1180px]:grid-cols-1">
            <LeftPanel />
            <RightPanel />
          </section>
        </main>
      </div>
    </div>
  )
}
