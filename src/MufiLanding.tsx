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
    <svg aria-hidden="true" className="icon icon-sparkle" viewBox="0 0 24 24">
      <path
        d="M12 2.8 13.85 8l5.35 1.85-5.35 1.85L12 16.9l-1.85-5.2L4.8 9.85 10.15 8 12 2.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg aria-hidden="true" className="icon icon-home" viewBox="0 0 24 24">
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
    <svg aria-hidden="true" className="icon icon-chevron" viewBox="0 0 16 16">
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
    <svg aria-hidden="true" className="icon icon-bell" viewBox="0 0 24 24">
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
    <svg aria-hidden="true" className="icon icon-bolt" viewBox="0 0 24 24">
      <path
        d="M13.8 2.8 6.9 12h4l-.7 9.2 6.9-9.2h-4l.7-9.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SmileIcon() {
  return (
    <svg aria-hidden="true" className="icon icon-smile" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="smile-fill" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd969" />
          <stop offset="100%" stopColor="#ff8d1a" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" fill="url(#smile-fill)" r="10" />
      <circle cx="9" cy="10" fill="#5e3300" r="1.1" />
      <circle cx="15" cy="10" fill="#5e3300" r="1.1" />
      <path
        d="M8.4 13.7c.8 1.2 2 1.8 3.6 1.8 1.6 0 2.8-.6 3.6-1.8"
        fill="none"
        stroke="#5e3300"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function SlackMark() {
  return (
    <svg aria-hidden="true" className="logo-mark logo-mark-slack" viewBox="0 0 24 24">
      <path
        d="M9.3 2a2.3 2.3 0 1 1 0 4.6H7a2.3 2.3 0 0 1 0-4.6h2.3Zm0 5.7H3.5a2.3 2.3 0 1 0 0 4.6h5.8a2.3 2.3 0 1 0 0-4.6Zm12.7 2.4a2.3 2.3 0 1 1-4.6 0V7.8a2.3 2.3 0 0 1 4.6 0v2.3Zm-5.7 0V4.3a2.3 2.3 0 1 0-4.6 0v5.8a2.3 2.3 0 1 0 4.6 0Zm-2.4 12a2.3 2.3 0 1 1 0-4.6h2.3a2.3 2.3 0 0 1 0 4.6h-2.3Zm0-5.7h5.8a2.3 2.3 0 1 0 0-4.6h-5.8a2.3 2.3 0 1 0 0 4.6ZM2 13.9a2.3 2.3 0 1 1 4.6 0v2.3a2.3 2.3 0 0 1-4.6 0v-2.3Zm5.7 0v5.8a2.3 2.3 0 1 0 4.6 0v-5.8a2.3 2.3 0 1 0-4.6 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function AtlassianMark() {
  return (
    <svg aria-hidden="true" className="logo-mark logo-mark-atlassian" viewBox="0 0 36 24">
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
      className="hero-swooshes"
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

      {/* <g opacity="0.95" transform="translate(-40 220) scale(0.6 0.72)">
       */}
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
    <nav className="top-nav">
      {NAV_ITEMS.map((item) => (
        <a
          className={`top-nav-link${item.active ? ' is-active' : ''}`}
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
    <div className="logo-row" aria-label="Trusted by">
      {LOGOS.map((logo) => (
        <div className="logo-item" key={logo.name}>
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
    <article className="dashboard-panel dashboard-panel-left">
      <div className="dashboard-panel-glow dashboard-panel-glow-orange" />
      <div className="dashboard-panel-inner">
        <div className="panel-header-row">
          <h3 className="panel-heading">You have 3 new appointment</h3>
          <div className="alert-orb">
            <BellIcon />
          </div>
        </div>

        <div className="appointment-card">
          <div className="appointment-person">
            <div className="avatar-ring avatar-ring-orange">
              <img
                alt="Wilson Rhiel Madsen"
                className="avatar-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSQc1fJAMym1szVYFKFjblTwdfsJJtawQTHP5jke2pdjCbO3zM9JSvwtbsNP5Q8YQDvwiRmXvH2mOThUe400Pg3jK5_mxPADrtM4QEKDjShLnPDLMt3IXx0hok5stqwLwNMqEmU9DVQkBbOrD_j6AqdmKxJjAISZH-VA9Yih-uIWXoWbhm49ByyW4-gdwzsIJ1Rpy3LdMVqah8Q76NFXyGwgDtntMIuAio7-WEevfdFPEhvlWFf8jwG6fWfBoR3VasmHm4zRDoWDuM"
              />
            </div>
            <div className="appointment-copy">
              <div className="appointment-name">Wilson Rhiel Madsen</div>
              <div className="appointment-meta">8:00 - 12:00Am. in 10 min</div>
            </div>
          </div>

          <div className="appointment-actions">
            <button className="soft-button" type="button">
              Prepare
            </button>
            <button className="warm-button" type="button">
              Start sessions
            </button>
          </div>
        </div>

        <div className="notes-pill-wrap">
          <button className="notes-pill" type="button">
            Notes to complete
          </button>
        </div>

        <div className="preview-list-card">
          <div className="preview-person">
            <div className="avatar-ring avatar-ring-neutral">
              <div className="avatar-placeholder avatar-placeholder-dark">Z</div>
            </div>
            <div className="preview-copy">
              <div className="preview-name">Zayn sharp</div>
              <div className="preview-subtext">May 23, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function RightPanel() {
  return (
    <article className="dashboard-panel dashboard-panel-right">
      <div className="dashboard-panel-glow dashboard-panel-glow-violet" />
      <div className="dashboard-panel-inner">
        <div className="session-card">
          <div className="session-card-rail session-card-rail-left" />
          <div className="session-card-rail session-card-rail-right" />

          <div className="session-head">
            <div className="session-person">
              <div className="avatar-ring avatar-ring-violet">
                <img
                  alt="Peter"
                  className="avatar-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD_VSECwZfj9OXkuhRU3Uh2pGEna_LCF2ZcAJp_tUtQJOrVblvIYYKKD1q16krocJYUVHddEw4sfFSLSyc3TmxoXPBZmvDpTTbN4O9DSfForG_NpZgSFu3Fv4iKXvtKPl92FqJLukm-y-xXK9z_WDlXFhqGjGr6ES7j_FXV8_yrOJhcP-iecj5dxehPQKZmLVl3KHfl15PT5micYw2IuyKI6frLfClv19fqqmD1dqnj2HZvkrL1Nlgl27Y7Yr8d_EGsTdgBGRt6Snq"
                />
              </div>
              <div className="session-copy">
                <div className="session-kicker">Sessions</div>
                <div className="session-title">Session with peter</div>
              </div>
            </div>

            <div className="live-status">
              <div className="live-status-top">
                <span className="live-dot" />
                <span>Live session</span>
              </div>
              <div className="live-status-time">Stated 6 min ago</div>
            </div>
          </div>

          <div className="data-row">
            <span>Data logging</span>
            <span>Last logged 3s ago</span>
          </div>

          <div className="prompt-card">
            <div className="prompt-copy">
              <div className="prompt-icon">
                <BoltIcon />
              </div>
              <div>
                <div className="prompt-title">Model prompt</div>
                <div className="prompt-subtitle">Engage with play item</div>
              </div>
            </div>
            <div className="prompt-time">1s ago</div>
          </div>
        </div>

        <div className="connector-line" aria-hidden="true">
          <span className="connector-dot connector-dot-top" />
          <span className="connector-dot connector-dot-bottom" />
        </div>

        <div className="skill-card">
          <div className="skill-card-head">
            <span>Engage with play items</span>
            <span>Skill acquisition</span>
          </div>
          <div className="completion-pill">
            <div className="completion-copy">
              <SmileIcon />
              <span>Completed</span>
            </div>
            <span className="completion-time">10:35 am</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export function MufiLanding() {
  return (
    <div className="landing-canvas">
      <div className="landing-shell">
        <div className="landing-background">
          <div className="shell-glow shell-glow-top" />
          <div className="shell-veil shell-veil-left" />
          <div className="shell-glow shell-glow-left" />
          <div className="shell-glow shell-glow-left-ember" />
          <div className="shell-veil shell-veil-right" />
          <div className="shell-glow shell-glow-right" />
          <div className="shell-glow shell-glow-right-ember" />
          <div className="shell-glow shell-glow-bottom" />
          <div className="dot-field dot-field-top" />
          <div className="dot-field dot-field-badge" />
          <div className="dot-field dot-field-cta" />
          <div className="dot-field dot-field-right" />
          <HeroSwooshes />
        </div>

        <header className="shell-header">
          <div className="brand">Mufi</div>
          <NavPill />
          <div className="header-actions">
            <a className="header-link" href="#">
              Log In
            </a>
            <button className="header-cta" type="button">
              Book a Demo
            </button>
          </div>
        </header>

        <main className="shell-main">
          <section className="hero-section">
            <div className="hero-badge">
              <SparkleIcon />
              <span>Smart Scheduler</span>
            </div>

            <h1 className="hero-title">
              Smart Scheduler Effortless
              <br />
              ABA Automation!
            </h1>

            <p className="hero-subtitle">
              Imagine ABA scheduling for all patients happening automatically.
            </p>

            <button className="hero-cta" type="button">
              Book a Demo
            </button>

            <LogoCloud />
          </section>

          <section className="dashboard-grid">
            <LeftPanel />
            <RightPanel />
          </section>
        </main>
      </div>
    </div>
  )
}
