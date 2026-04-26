export function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className || 'block flex-none w-3.5 h-3.5'}
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

export function HomeIcon() {
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

export function ChevronIcon() {
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

export function BellIcon() {
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

export function BoltIcon() {
  return (
    <svg aria-hidden="true" className="block flex-none w-[18px] h-[18px] text-[#fffafc]" viewBox="0 0 24 24">
      <path
        d="M13.8 2.8 6.9 12h4l-.7 9.2 6.9-9.2h-4l.7-9.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function GitBranchIcon() {
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

export function NeuralIcon() {
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

export function CheckCircleIcon() {
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

export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className || 'block flex-none w-4 h-4'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
