# FourNotFour - 404 Website

A modern, dark-themed landing page for FourNotFour - a next-gen software lab specializing in custom software, AI integration, and scalable digital architecture.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **3D**: Three.js + React Three Fiber (reserved for future use)

## Project Structure

```
src/
├── components/
│   ├── icons/          # SVG icon components
│   │   ├── UIIcons.tsx
│   │   ├── CompanyLogos.tsx
│   │   ├── PartnerLogos.tsx
│   │   ├── LifecycleIcons.tsx
│   │   └── index.ts
│   ├── ui/             # Reusable UI components
│   │   ├── NavPill.tsx
│   │   ├── LogoCloud.tsx
│   │   ├── SiteFooter.tsx
│   │   └── index.ts
│   ├── panels/         # Dashboard panels
│   │   ├── LeftPanel.tsx
│   │   ├── RightPanel.tsx
│   │   └── index.ts
│   ├── mockups/        # Visual mockup components
│   │   ├── AgentMockup.tsx
│   │   ├── MetricsMockup.tsx
│   │   └── index.ts
│   └── shared/         # Shared components
│       └── HeroSwooshes.tsx
├── sections/           # Page sections
│   ├── HeroSection.tsx
│   ├── DashboardSection.tsx
│   ├── ProactiveCoreSection.tsx
│   ├── TechPartnersSection.tsx
│   └── index.ts
├── hooks/              # Custom React hooks
│   └── useAutoAdvance.ts
├── lib/                # Utilities & constants
│   ├── constants.ts
│   └── styles.ts
├── types/              # TypeScript types
│   └── index.ts
├── Landing.tsx         # Main page component
├── SoftwareLifecycleSection.tsx
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Design System

### Colors
- **Background**: `#060308`, `#08020d`
- **Primary Purple**: `#a855f7`, `#c084fc`
- **Primary Orange**: `#ff8c22`, `#ff6010`
- **Text Primary**: `rgba(244,240,252,0.96)`
- **Text Secondary**: `rgba(178,168,196,0.7)`

### Glow Effects
- Purple glow: `box-shadow: 0 0 20px rgba(168,85,247,0.3)`
- Orange glow: `box-shadow: 0 0 22px rgba(255,100,40,0.36)`

### Border Radius
- Cards: `34px`
- Buttons: `full` (rounded-full)
- Small elements: `14px`, `18px`, `20px`

## Features

1. **Hero Section**: Animated badge, gradient text, CTA button, logo cloud
2. **Dashboard Panels**: Left (deployment status), Right (AI inference)
3. **Software Lifecycle**: Interactive circular diagram with 7 stages
4. **Capabilities**: 4-card bento grid with glow effects
5. **Tech Partners**: Partner logo row with gradient separator

## Key Components

### SoftwareLifecycleSection
- Circular orbital diagram with 7 lifecycle stages
- Auto-advancing carousel (3 second intervals)
- Detail card with progress indicator
- Pause on hover

### ProactiveCoreSection
- 4-card bento grid
- Purple glow card styling
- Agent mockup and metrics visualizations

## License

Private - FourNotFour
