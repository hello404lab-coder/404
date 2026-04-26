import { SoftwareLifecycleSection } from './SoftwareLifecycleSection'
import { HeroSwooshes } from './components/shared/HeroSwooshes'
import { NavPill, SiteFooter } from './components/ui'
import { HeroSection, DashboardSection, ProactiveCoreSection, TechPartnersSection } from './sections'

export function Landing() {
  return (
    <div
      className="min-h-svh max-[720px]:p-4"
      style={{ background: '#060308' }}
    >
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
          <HeroSection />
          <DashboardSection />
        </main>
      </div>

      {/* Below-fold wrapper */}
      <div className="relative overflow-hidden" style={{ background: '#08020d' }}>
        {/* Top fade-in glow */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none left-1/2 -translate-x-1/2"
          style={{
            top: '-220px', width: '1100px', height: '480px',
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(146,72,251,0.22) 0%, rgba(118,49,221,0.12) 30%, transparent 70%)',
            filter: 'blur(12px)',
          }}
        />
        {/* Left orange veil */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none left-[-4px] top-0 w-80 h-full opacity-[0.92]"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,135,55,0.18) 0%, rgba(207,76,24,0.15) 24%, rgba(110,29,17,0.08) 50%, rgba(43,11,12,0.03) 70%, transparent 100%)',
          }}
        />
        {/* Left orange ember */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none left-[-170px] top-[140px] w-[520px] h-[800px] blur-[18px]"
          style={{
            background:
              'radial-gradient(circle at 28% 42%, rgba(255,190,136,0.12) 0%, rgba(255,128,52,0.22) 18%, rgba(185,60,22,0.18) 38%, rgba(96,24,16,0.1) 60%, transparent 84%)',
          }}
        />
        {/* Right purple veil */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none right-[-4px] top-0 w-80 h-full opacity-[0.92]"
          style={{
            background:
              'linear-gradient(270deg, rgba(135,46,255,0.18) 0%, rgba(106,28,219,0.15) 24%, rgba(60,14,100,0.08) 50%, rgba(25,7,43,0.03) 70%, transparent 100%)',
          }}
        />
        {/* Right purple glow */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none right-[-170px] top-[140px] w-[520px] h-[800px] blur-[18px]"
          style={{
            background:
              'radial-gradient(circle at 72% 42%, rgba(180,100,255,0.12) 0%, rgba(151,53,255,0.22) 18%, rgba(106,28,219,0.18) 38%, rgba(55,12,100,0.1) 60%, transparent 84%)',
          }}
        />
        <SoftwareLifecycleSection />
        <ProactiveCoreSection />
        <TechPartnersSection />
        <SiteFooter />
      </div>
    </div>
  )
}
