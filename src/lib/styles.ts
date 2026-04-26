import type React from 'react'

// Bento card shared styles - matches RightPanel glow design
export const BENTO_CARD_DARK: React.CSSProperties = {
  border: '1px solid rgba(148,78,255,0.38)',
  background:
    'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.3) 0%, transparent 38%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
  boxShadow:
    'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.2), 0 20px 48px rgba(0,0,0,0.44)',
}

// Bento cell class string
export const BENTO_CELL =
  'h-full min-h-[380px] max-[720px]:min-h-0 flex flex-col rounded-[20px] p-6'

// Accent colors for lifecycle stages
export const ACCENT_COLORS = {
  purple: { main: '#a855f7', glow: '#a855f7', text: '#c084fc' },
  orange: { main: '#ff8c22', glow: '#ff8c22', text: '#ffb366' },
  gradient: { main: '#c084fc', glow: '#a855f7', text: '#d8b4fe' },
}

// Glow badge style
export const GLOW_BADGE_STYLE: React.CSSProperties = {
  background: 'rgba(168,85,247,0.15)',
  border: '1px solid rgba(168,85,247,0.45)',
  boxShadow: '0 0 20px rgba(168,85,247,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
}

// Detail card glow style
export const DETAIL_CARD_STYLE: React.CSSProperties = {
  border: '1px solid rgba(148,78,255,0.38)',
  background:
    'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.3) 0%, transparent 38%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
  boxShadow:
    'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.2), 0 20px 48px rgba(0,0,0,0.44)',
}
