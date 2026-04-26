import {
  OpenAILogoIcon,
  SnowflakeLogoIcon,
  MicrosoftLogoIcon,
  GoogleLogoIcon,
  AWSLogoIcon,
} from '../components/icons'

const TECH_PARTNERS = [
  { name: 'OpenAI', icon: <OpenAILogoIcon /> },
  { name: 'Snowflake', icon: <SnowflakeLogoIcon /> },
  { name: 'Microsoft', icon: <MicrosoftLogoIcon /> },
  { name: 'Google', icon: <GoogleLogoIcon /> },
  { name: 'AWS', icon: <AWSLogoIcon /> },
]

export function TechPartnersSection() {
  return (
    <div className="relative z-1 px-[70px] max-[1180px]:px-7 max-[720px]:px-[18px] mt-24 mb-6">
      {/* Separator */}
      <div
        className="w-full h-px mb-16"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(210,105,48,0.3) 20%, rgba(148,78,255,0.3) 50%, rgba(210,105,48,0.3) 80%, transparent 100%)',
        }}
      />
      <p className="text-center text-[rgba(178,168,200,0.52)] text-[0.76rem] font-semibold tracking-[0.14em] uppercase mb-10">
        Trusted by industry leaders
      </p>
      <div
        className="flex flex-wrap items-center justify-center gap-[60px] text-[rgba(210,203,218,0.58)] max-[1180px]:gap-9 max-[720px]:gap-x-8 max-[720px]:gap-y-6"
        aria-label="Technology partners"
      >
        {TECH_PARTNERS.map((p) => (
          <div
            className="inline-flex items-center gap-[9px] text-[1rem] font-semibold tracking-[-0.04em] whitespace-nowrap"
            key={p.name}
          >
            {p.icon}
            <span>{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
