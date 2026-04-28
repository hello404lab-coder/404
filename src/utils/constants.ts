import { siteContent } from '../data/siteContent'
import type { NavItem, LogoItem } from '../types'

// Navigation data
export const NAV_ITEMS: NavItem[] = [...siteContent.navigation]

// Logo cloud data
export const LOGOS: LogoItem[] = [...siteContent.logos]

// Tech partners data - icons will be assigned after icon extraction
export const TECH_PARTNERS = [...siteContent.techPartners]

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
