// Navigation types
export type NavItem = {
  label: string
  href: string
  active?: boolean
  hasChevron?: boolean
}

export type LogoItem = {
  name: string
  mark?: 'slack' | 'atlassian'
}

// Software Lifecycle types
export type LifecycleStage = {
  id: string
  number: number
  title: string
  shortDescription: string
  fullDescription: string
  bullets: string[]
  icon: React.ComponentType
  accent: 'purple' | 'orange' | 'gradient'
}

export type AccentColor = {
  main: string
  glow: string
  text: string
}

export type AccentColors = {
  purple: AccentColor
  orange: AccentColor
  gradient: AccentColor
}
