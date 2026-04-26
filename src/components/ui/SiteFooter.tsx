export function SiteFooter() {
  return (
    <footer className="relative z-1 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] pt-12 pb-10 mt-16">
      {/* Top gradient border */}
      <div
        className="w-full h-px mb-10"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(148,78,255,0.28) 30%, rgba(255,140,70,0.28) 70%, transparent 100%)',
        }}
      />

      <div className="flex flex-col items-center gap-6 text-center">
        {/* Brand + nav */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <span className="text-[rgba(248,244,252,0.92)] text-[1.1rem] font-semibold tracking-tighter">
            FourNotFour
          </span>
          {(['Services', 'About', 'Contact'] as const).map((label) => (
            <a
              className="text-[rgba(200,192,214,0.62)] text-[0.88rem] tracking-[-0.02em] no-underline hover:text-[rgba(230,224,240,0.88)] transition-colors duration-200 cursor-pointer"
              href="#"
              key={label}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="m-0 text-[rgba(160,150,178,0.42)] text-[0.78rem] tracking-[-0.01em]">
          © 2026 FourNotFour. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
