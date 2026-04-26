# AI Development Context - FourNotFour Website

## Project Overview

This is a **React + TypeScript + Vite** landing page for FourNotFour, a software lab. The design features a dark theme with purple/orange gradient glow effects and modern glassmorphism aesthetics.

## Architecture Patterns

### Folder Structure Philosophy
```
src/
├── components/     # Reusable, presentational components
│   ├── icons/      # SVG icons only - no business logic
│   ├── ui/         # Generic UI (Nav, Footer, etc.)
│   ├── panels/     # Complex composite components
│   ├── mockups/    # Visual decorative components
│   └── shared/     # Cross-cutting shared components
├── sections/       # Page-level section containers
├── hooks/          # Custom React hooks with logic
├── lib/            # Pure functions, constants, styles
└── types/          # TypeScript interfaces/types
```

### Import Patterns
- Use barrel exports (`index.ts`) for clean imports
- Import from specific folders: `from '../components/icons'`
- Never import from sibling file directly, use barrel

### Component Conventions
- Functional components only
- Props interface inline for simple cases
- Named exports preferred
- Use `React.CSSProperties` for style objects

## Design System Reference

### Color Palette
| Name | Value | Usage |
|------|-------|-------|
| bg-primary | `#060308` | Page background |
| bg-secondary | `#08020d` | Section backgrounds |
| purple-main | `#a855f7` | Primary accent |
| purple-glow | `#c084fc` | Glow effects |
| orange-main | `#ff8c22` | Secondary accent |
| orange-dark | `#ff6010` | Deep orange accents |
| text-primary | `rgba(244,240,252,0.96)` | Headings |
| text-secondary | `rgba(178,168,196,0.7)` | Body text |

### Glow Card Pattern (Used Everywhere)
```tsx
style={{
  border: '1px solid rgba(148,78,255,0.38)',
  background: 'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.3) 0%, transparent 38%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
  boxShadow: 'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.2), 0 20px 48px rgba(0,0,0,0.44)',
}}
```

### Border Radius Scale
- `14px` - Small cards, mockups
- `18px` - Input fields, small containers
- `20px` - Bento cards
- `28px` - Inner cards
- `34px` - Main panel cards
- `full` - Buttons, pills, avatars

## Animation Patterns

### Framer Motion Patterns
```tsx
// Fade in up
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}

// Stagger children
transition={{ delay: idx * 0.08, duration: 0.3 }}

// Hover effects
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Auto-Advance Hook Pattern
See `src/hooks/useAutoAdvance.ts`:
- 3 second interval default
- Pauses on hover
- Resets timer on manual navigation

## Known Technical Constraints

### SVG ViewBox Alignment
When positioning DOM elements over SVG, match viewBox to container pixels exactly:
```tsx
// Container
<div className="w-[520px] h-[520px]">
  // SVG
  <svg viewBox="-260 -260 520 520">
```

### Framer Motion + Transform Issue
Never put `transform` in `style` prop when using `animate` - framer overwrites it.
Solution: Use wrapper div for positioning, motion element for animation.

### Tailwind Custom Breakpoints
Project uses arbitrary breakpoints:
- `max-[1180px]` - Tablet
- `max-[720px]` - Mobile

## Common Tasks Reference

### Adding a New Icon
1. Create in appropriate file in `components/icons/`
2. Export from `components/icons/index.ts`
3. Use SVG with `viewBox`, `fill="none"`, `stroke="currentColor"`

### Adding a New Section
1. Create in `src/sections/`
2. Export from `src/sections/index.ts`
3. Import and use in `Landing.tsx`
4. Follow glow card pattern for visual containers

### Adding a Lifecycle Stage
1. Edit `STAGES` array in `SoftwareLifecycleSection.tsx`
2. Provide icon component
3. Choose accent: 'purple' | 'orange' | 'gradient'

## Dependencies

### Core
- react ^19.2.5
- react-dom ^19.2.5
- typescript ~6.0.2

### Build & Style
- vite ^8.0.10
- tailwindcss ^4.2.4
- @tailwindcss/vite ^4.2.4

### Animation
- framer-motion ^12.0.0

### 3D (Reserved)
- three ^0.174.0
- @react-three/fiber ^9.0.0
- @react-three/drei ^10.0.0

## Critical Files

| File | Purpose |
|------|---------|
| `src/lib/styles.ts` | Shared CSS style objects |
| `src/lib/constants.ts` | Data constants |
| `src/types/index.ts` | TypeScript types |
| `src/hooks/useAutoAdvance.ts` | Carousel timer logic |

## Common Pitfalls

1. **Don't** import icons directly from files - use barrel export
2. **Don't** use `transform` in style with framer-motion animations
3. **Don't** mix `px` and `rem` arbitrarily - project uses `px` for precision
4. **Do** use `React.CSSProperties` for style objects
5. **Do** preserve exact glow/border values when modifying cards

## AI Development Tips

- Always check `src/lib/styles.ts` before creating new card styles
- Use existing icon components from `components/icons/` - don't create new ones unless necessary
- Follow the glow card pattern exactly - users are sensitive to visual changes
- Test responsive breakpoints: 1180px and 720px
- Preserve Framer Motion transition values - they were tuned carefully
