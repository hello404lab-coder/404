# Fornotfortech Website

A modern, dark-themed React website for fornotfortech, showcasing services, portfolio projects, company capabilities, and a contact flow.

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
│   │   └── index.ts
│   ├── panels/         # Dashboard panels
│   │   ├── LeftPanel.tsx
│   │   ├── RightPanel.tsx
│   │   └── index.ts
│   ├── mockups/        # Visual mockup components
│   │   ├── AgentMockup.tsx
│   │   ├── MetricsMockup.tsx
│   │   └── index.ts
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AnimatedSection.tsx
│   ├── WhatsAppFloatingButton.tsx
│   └── shared/         # Shared components
│       └── HeroSwooshes.tsx
├── sections/           # Home and shared page sections
│   ├── HeroSection.tsx
│   ├── DashboardSection.tsx
│   ├── SoftwareLifecycleSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProactiveCoreSection.tsx
│   ├── FoundersSection.tsx
│   ├── TechPartnersSection.tsx
│   ├── ProjectsSection.tsx
│   └── index.ts
├── hooks/              # Custom React hooks
│   ├── useAutoAdvance.ts
│   ├── useScrollReveal.ts
│   └── useCountUp.ts
├── pages/              # Route-level pages
│   ├── Home.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── data/               # Centralized site content/config
│   └── siteContent.ts
├── utils/              # Utilities & styling helpers
│   ├── constants.ts
│   ├── styles.ts
│   └── ScrollToTop.tsx
├── types/              # TypeScript types
│   └── index.ts
├── assets/             # Project/media assets
├── App.tsx
├── MainLayout.tsx
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

# Run lint checks
pnpm run lint

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

1. **Multi-page routing**: Dedicated `Home`, `Projects`, and `Contact` pages via React Router.
2. **Immersive hero and dashboard**: Animated glow layers, badge/CTA, logo cloud, and operational mockups.
3. **Services and capability sections**: Lifecycle visualization, services, proactive core cards, founders, and tech partners.
4. **Portfolio showcase**: Accent-themed project grid with metrics, tech stack tags, and outbound links.
5. **Contact form workflow**: Validated form submission integrated with a Google Apps Script endpoint.
6. **Shared site shell**: Reusable navbar/footer, animated layout glows, floating WhatsApp CTA, and route scroll restoration.

## Key Pages

### Home (`/`)
- Hero + dashboard entry experience
- Core service narrative sections
- Partner and credibility blocks

### Projects (`/projects`)
- Curated project cards rendered from centralized content data
- Visual accent variants (purple/orange/gradient)
- External project links and metrics chips

### Contact (`/contact`)
- Company contact details
- Form validation and async submission state
- Success/error messaging feedback

## License

Private - Fornotfortech
