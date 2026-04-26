import type { NavItem, LogoItem } from '../types'

// Navigation data
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', active: true },
  { label: 'Product', hasChevron: true },
  { label: 'Story' },
  { label: 'Use cases' },
]

// Logo cloud data
export const LOGOS: LogoItem[] = [
  { name: 'Opendoor' },
  { name: 'DocuSign' },
  { name: 'slack', mark: 'slack' },
  { name: 'splunk>' },
  { name: 'ATLASSIAN', mark: 'atlassian' },
]

// Tech partners data - icons will be assigned after icon extraction
export const TECH_PARTNERS = [
  { name: 'OpenAI', iconName: 'OpenAILogoIcon' as const },
  { name: 'Snowflake', iconName: 'SnowflakeLogoIcon' as const },
  { name: 'Microsoft', iconName: 'MicrosoftLogoIcon' as const },
  { name: 'Google', iconName: 'GoogleLogoIcon' as const },
  { name: 'AWS', iconName: 'AWSLogoIcon' as const },
]

// Software lifecycle stage IDs for auto-advance
export const STAGE_IDS = [
  'discover',
  'design',
  'build',
  'test',
  'deploy',
  'observe',
  'evolve',
] as const
