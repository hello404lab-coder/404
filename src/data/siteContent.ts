import type { LogoItem, NavItem } from '../types'
import SahalImage from '../assets/sahal.png'
import FayasImage from '../assets/fayas.jpeg'
import AmanimotorsImage from '../assets/projects/amanimotors.jpeg'
import LuxemotoImage from '../assets/projects/luxmoto.png'
import PremierSteelsImage from '../assets/projects/premiersteels.jpeg'
import AlitaMomentsImage from '../assets/projects/alitamoments.jpeg'
import BeSaLabsImage from '../assets/projects/besalabs.jpeg'
import LeaflyfImage from '../assets/projects/leaflyf.jpeg'
import MirthCollectiveImage from '../assets/projects/mirth.jpeg'
import VoxpayImage from '../assets/projects/voxpay.jpeg'

type Accent = 'purple' | 'orange' | 'gradient'
type ServiceIconKey = 'web' | 'mobile' | 'backend' | 'ecommerce' | 'admin'
type LifecycleIconKey = 'understand' | 'design' | 'build' | 'test' | 'launch'
type CapabilityMockupKey = 'agent' | 'metrics'

export type HeroContent = {
  badge: string
  headline: string
  subtext: string
  microLine: string
  audienceQualifier: string
  trustSignal: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export type HeroCardsContent = {
  left: {
    label: string
    description: string
    tags: string[]
  }
  right: {
    label: string
    description: string
    tags: string[]
  }
}

export type ServiceContent = {
  id: string
  title: string
  tagline: string
  description: string
  features: string[]
  accent: Accent
  iconKey: ServiceIconKey
}

export type LifecycleStageContent = {
  id: string
  number: number
  title: string
  shortDescription: string
  fullDescription: string
  bullets: string[]
  iconKey: LifecycleIconKey
  accent: Accent
}

export type CapabilityContent = {
  id: string
  title: string
  description?: string
  shortDesc?: string
  longDesc?: string
  largeTitle?: boolean
  mockupKey?: CapabilityMockupKey
}

export type ProjectContent = {
  id: string
  title: string
  category: string
  description: string
  problem: string
  solution: string
  metrics: string[]
  tech: string[]
  accent: Accent
  featured: boolean
  image: string
  link: string
  githubLink: string | null
}

export type FounderContent = {
  name: string
  role: string
  tagline: string
  description: string
  image: string
  accent: 'purple' | 'orange'
  skills: string[]
}

export const siteContent = {
  company: {
    name: 'ForNotForTech',
    email: 'hello404lab@gmail.com',
    phone: '+91 94967 15606',
    location: 'Kochi, Kerala, India',
  },
  navigation: [
    { label: 'Home', href: '/', active: true },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/#services' },
    { label: 'Contact', href: '/contact' },
  ] satisfies NavItem[],
  navbar: {
    primaryCtaLabel: 'Start a Project',
    primaryCtaHref: '/contact',
  },
  hero: {
    badge: 'Product Engineering Team',
    headline: 'We Build Real-World Digital Products',
    subtext:
      'From idea to production - we design, build, and ship applications that people actually use.',
    microLine: 'Built for performance, clarity, and real-world usage.',
    audienceQualifier: 'We work with startups, businesses, and growing teams.',
    trustSignal:
      "We also work on private client systems that can't be publicly showcased.",
    primaryCta: { label: 'Start a Project', href: '/contact' },
    secondaryCta: { label: 'View Our Work', href: '/projects' },
  } satisfies HeroContent,
  heroCards: {
    left: {
      label: 'Web Applications & Platforms',
      description:
        'Dashboards, business systems, and platforms built for real-world use.',
      tags: ['React', 'Django', 'FastAPI'],
    },
    right: {
      label: 'Mobile Applications',
      description:
        'Cross-platform apps designed for performance and usability.',
      tags: ['Flutter', 'API-driven'],
    },
  } satisfies HeroCardsContent,
  logos: [] satisfies LogoItem[],
  techPartners: [
    { name: 'OpenAI', iconName: 'OpenAILogoIcon' as const },
    { name: 'Snowflake', iconName: 'SnowflakeLogoIcon' as const },
    { name: 'Microsoft', iconName: 'MicrosoftLogoIcon' as const },
    { name: 'Google', iconName: 'GoogleLogoIcon' as const },
    { name: 'AWS', iconName: 'AWSLogoIcon' as const },
  ],
  services: {
    section: {
      badge: 'What We Build',
      headline: 'Services that move startups forward',
      subtitle:
        'Practical product engineering across web, mobile, and backend - built for the real world, not the brochure.',
      ctaLabel: 'Discuss Your Project',
      ctaHref: '/contact',
    },
    items: [
      {
        id: 'web',
        title: 'Web Applications & Platforms',
        tagline: 'Built for real-world usage',
        description:
          'Custom web apps, dashboards, and platforms - from MVPs to multi-tenant systems used in production every day.',
        features: ['React Frontend', 'Backend APIs', 'Database Design', 'Deployment & Scaling'],
        accent: 'purple',
        iconKey: 'web',
      },
      {
        id: 'mobile',
        title: 'Mobile App Development',
        tagline: 'Cross-platform, production-ready',
        description:
          'Flutter apps for Android and iOS, designed around real user flows and business operations - not demo screens.',
        features: ['Android & iOS Apps', 'Real-time features', 'API integrations', 'Scalable architecture'],
        accent: 'orange',
        iconKey: 'mobile',
      },
      {
        id: 'backend',
        title: 'Backend Systems That Scale',
        tagline: 'Strong foundations',
        description:
          'APIs and services with Django, FastAPI, or Node.js - clean data models, reliable auth, and predictable performance under load.',
        features: ['REST APIs', 'Authentication systems', 'Payment integrations', 'Performance optimization'],
        accent: 'gradient',
        iconKey: 'backend',
      },
      {
        id: 'ecommerce',
        title: 'E-commerce & Platforms',
        tagline: 'Built to convert',
        description:
          'Storefronts and marketplaces with real catalogs, checkout, and admin tooling - wired to your fulfillment and payment stack.',
        features: ['Product catalogs', 'Checkout systems', 'Admin dashboards', 'Integrations'],
        accent: 'purple',
        iconKey: 'ecommerce',
      },
      {
        id: 'admin',
        title: 'Dashboards & Internal Tools',
        tagline: 'Control and clarity',
        description:
          'Internal tools and analytics dashboards that replace messy spreadsheets and give your team a clear picture of operations.',
        features: ['Analytics dashboards', 'Role-based systems', 'Workflow tools', 'Reporting'],
        accent: 'orange',
        iconKey: 'admin',
      },
    ] satisfies ServiceContent[],
  },
  lifecycle: {
    badge: 'How We Build',
    title: 'How We Build Products',
    subtitle: 'A practical, iterative process from idea to launch.',
    stages: [
      {
        id: 'understand',
        number: 1,
        title: 'Understand your idea',
        shortDescription: 'Goals, constraints, users, and success criteria.',
        fullDescription:
          'We clarify the problem, users, and priorities so everyone is aligned before building starts.',
        bullets: ['Discovery calls', 'Scope alignment', 'User flows', 'Success metrics'],
        iconKey: 'understand',
        accent: 'purple',
      },
      {
        id: 'design',
        number: 2,
        title: 'Design system & architecture',
        shortDescription: 'UX wireframes and a clean technical foundation.',
        fullDescription:
          'We map screens, data, and architecture early so development stays focused and predictable.',
        bullets: ['Wireframes', 'Data modeling', 'API contracts', 'Tech choices'],
        iconKey: 'design',
        accent: 'gradient',
      },
      {
        id: 'build',
        number: 3,
        title: 'Build in iterations',
        shortDescription: 'Ship usable increments week by week.',
        fullDescription:
          'We ship in short cycles with regular demos so progress is visible and feedback is easy to apply.',
        bullets: ['Weekly demos', 'Pull requests', 'Code reviews', 'Staging deploys'],
        iconKey: 'build',
        accent: 'orange',
      },
      {
        id: 'test',
        number: 4,
        title: 'Test and optimize',
        shortDescription: 'QA, stability, and performance hardening.',
        fullDescription:
          'Before launch we fix edge cases, improve speed, and verify critical flows across real environments.',
        bullets: ['QA passes', 'Performance checks', 'Device testing', 'Bug triage'],
        iconKey: 'test',
        accent: 'gradient',
      },
      {
        id: 'launch',
        number: 5,
        title: 'Launch and support',
        shortDescription: 'Deploy, monitor, and iterate safely.',
        fullDescription:
          'We launch with monitoring in place, support the first production cycle, and plan improvements with you.',
        bullets: ['Production deploy', 'Monitoring', 'Post-launch fixes', 'Roadmap support'],
        iconKey: 'launch',
        accent: 'purple',
      },
    ] satisfies LifecycleStageContent[],
  },
  capabilities: {
    badge: 'What You Get When You Work With Us',
    headline: 'Real engineering. Real outcomes.',
    subtitle:
      'Built from real projects - across fintech, e-commerce, and industrial platforms.',
    footerNote:
      "These are not best practices - they are things we've learned by building real products.",
    items: [
      {
        id: 'scalable',
        mockupKey: 'agent',
        title: "Architecture that doesn't break as you grow",
        description:
          "We design systems that handle more users, more data, and more features - without forcing a rebuild every few months.",
      },
      {
        id: 'ui',
        largeTitle: true,
        title: "Interfaces your users don't struggle with",
        description:
          'Clear, intuitive UI so users can navigate your product without confusion - reducing support issues and drop-offs.',
      },
      {
        id: 'fast',
        mockupKey: 'metrics',
        title: 'Fast on real devices, not just demos',
        description:
          'We optimize for actual usage - slower networks, mobile devices, and real-world conditions your users deal with daily.',
      },
      {
        id: 'reliable',
        title: "Releases that don't break your product",
        description:
          "Clean structure and proper deployment practices ensure updates don't introduce new issues or downtime.",
      },
    ] satisfies CapabilityContent[],
  },
  projects: {
    section: {
      badge: 'Selected Work',
      headlinePrefix: 'Real products,',
      headlineHighlight: 'real users',
      subtitle:
        'A selection of platforms, apps, and storefronts we have designed, built, and shipped.',
    },
    items: [
      {
        id: 'amanimotors',
        title: 'Amanimotors',
        category: 'Auto E-commerce',
        description:
          'Used-car inventory website with fast browsing, detailed listings, and lead capture flows.',
        problem:
          'A used-car dealer needed a credible digital storefront to present inventory and capture buyer interest quickly.',
        solution:
          'Built a React storefront with a Go-based backend and inventory-focused listing pages optimized for user discovery.',
        metrics: ['Live inventory listings', 'Lead capture flow', 'Fast page experience'],
        tech: ['React', 'GSAP', 'Tailwind', 'GoLang'],
        accent: 'purple',
        featured: true,
        image: AmanimotorsImage,
        link: 'https://amanimotors.in',
        githubLink: 'https://github.com/fayasPA/amani-motors',
      },
      {
        id: 'luxemoto',
        title: 'LuxeMoto',
        category: 'Auto E-commerce',
        description:
          'Premium vehicle catalog platform built for inventory discovery and conversion-focused browsing.',
        problem:
          'The client needed a polished vehicle catalog experience that highlighted premium inventory without slowing down browsing.',
        solution:
          'Delivered a React and Go stack with structured inventory views, smooth interactions, and backend data control.',
        metrics: ['Inventory-first UX', 'Smooth catalog browsing', 'Structured vehicle pages'],
        tech: ['React', 'GSAP', 'Tailwind', 'GoLang'],
        accent: 'orange',
        featured: false,
        image: LuxemotoImage,
        link: 'https://luxemoto.in',
        githubLink: 'https://github.com/fayasPA/luxe-moto',
      },
      {
        id: 'premier-steels',
        title: 'Premier Steels',
        category: 'Industrial Web',
        description:
          'Business website for a steel distribution company with clear product and company information flow.',
        problem:
          'The business needed a simple web presence to communicate offerings and improve trust with buyers and partners.',
        solution:
          'Created a clean React site with structured sections for services, catalog context, and direct contact pathways.',
        metrics: ['Clear service presentation', 'Improved information flow', 'Business inquiry ready'],
        tech: ['React', 'GSAP', 'Tailwind'],
        accent: 'gradient',
        featured: false,
        image: PremierSteelsImage,
        link: 'https://thepremiersteels.com',
        githubLink: 'https://github.com/fayasPA/premier_steels',
      },
      {
        id: 'alita-moments',
        title: 'Alita Moments',
        category: 'Photography Portfolio',
        description:
          'Portfolio website focused on showcasing visual work with smooth gallery navigation.',
        problem:
          'The photographer needed a portfolio that felt premium while still being easy for visitors to browse.',
        solution:
          'Built a React portfolio with visual storytelling sections and mobile-friendly gallery interactions.',
        metrics: ['Gallery-first layout', 'Mobile-friendly experience', 'Visual storytelling flow'],
        tech: ['React', 'GSAP', 'Tailwind'],
        accent: 'purple',
        featured: false,
        image: AlitaMomentsImage,
        link: 'https://alitamoments.com',
        githubLink: 'https://github.com/fayasPA/alitamoments_photography',
      },
      {
        id: 'leaflyf',
        title: 'Leaflyf',
        category: 'E-commerce',
        description:
          'Online storefront for premium produce with catalog-driven shopping experience and clear purchase journeys.',
        problem:
          'The brand needed to present niche products clearly and make online ordering simple for first-time customers.',
        solution:
          'Implemented a structured storefront with clean navigation, categorized listings, and checkout-ready flows.',
        metrics: ['Catalog clarity', 'Checkout-ready UX', 'Product-led navigation'],
        tech: ['React', 'Tailwind', 'Headless CMS', 'Node.js'],
        accent: 'gradient',
        featured: false,
        image: LeaflyfImage,
        link: 'https://www.leaflyf.com',
        githubLink: null,
      },
      {
        id: 'mirth-collective',
        title: 'Mirth Collective',
        category: 'Brand & Lifestyle',
        description:
          'Brand website with editorial-style sections, storytelling layouts, and content-first browsing.',
        problem:
          'The collective needed a digital identity that balanced brand expression with clear content structure.',
        solution:
          'Delivered a React-based brand site with modular sections, rich visuals, and easy content flow.',
        metrics: ['Editorial content structure', 'Brand-consistent layouts', 'Flexible content sections'],
        tech: ['React', 'GSAP', 'Tailwind', 'Sanity'],
        accent: 'purple',
        featured: false,
        image: MirthCollectiveImage,
        link: 'https://www.mirthcollective.com',
        githubLink: null,
      },
      {
        id: 'besalabs',
        title: 'BeSa Labs',
        category: 'Industrial 3D',
        description:
          'Business site for a precision 3D service company with clear service communication and lead routing.',
        problem:
          'The company needed a focused website to explain technical services and convert visitors into inquiries.',
        solution:
          'Built a service-led web presence with clear offerings, process messaging, and straightforward contact flow.',
        metrics: ['Service-first messaging', 'Lead-friendly structure', 'Technical clarity'],
        tech: ['React', 'Tailwind', 'GSAP', 'Node.js'],
        accent: 'orange',
        featured: true,
        image: BeSaLabsImage,
        link: 'https://www.besalabs.in',
        githubLink: null,
      },
      {
        id: 'openclaw-agentic-ops',
        title: 'OpenClaw Agentic Ops',
        category: 'Business Automation',
        description:
          'Ongoing agentic operations platform using OpenClaw to automate repetitive business workflows with operator control.',
        problem:
          'Operations teams were losing time on repetitive approvals, status checks, and fragmented process handoffs.',
        solution:
          'Designed a human-in-the-loop automation system where OpenClaw agents execute routine operations and escalate edge cases.',
        metrics: ['Automated workflow runs', 'Human approval gates', 'Unified operations console'],
        tech: ['OpenClaw', 'Agent Orchestration', 'Workflow APIs', 'Operational Dashboard'],
        accent: 'orange',
        featured: true,
        image: '/projects/openclaw-agentic-ops.svg',
        link: '',
        githubLink: null,
      },
      {
        id: 'vuvl-ai',
        title: 'Vuvl AI',
        category: 'AI Education',
        description:
          'AI English tutor app built for Indian users with guided speaking practice and daily conversation support.',
        problem:
          'Learners needed practical spoken-English training adapted to Indian usage and real day-to-day scenarios.',
        solution:
          'Built an AI tutoring flow with voice-first practice, contextual role-play sessions, and clear progress tracking loops.',
        metrics: ['Voice-led practice', 'Indian learner context', 'Daily progress loops'],
        tech: ['AI Tutoring Engine', 'Realtime Voice', 'Role-play Flows', 'Progress Analytics'],
        accent: 'gradient',
        featured: true,
        image: '/projects/vuvl-ai.svg',
        link: 'https://luna.404lab.tech',
        githubLink: null,
      },
      {
        id: 'voxpay',
        title: 'VOXPAY',
        category: 'Fintech Mobile',
        description:
          'Private mobile web application for payments, recharges, and operational transaction workflows.',
        problem:
          'The operator needed a private product to run transfer and recharge operations with role-based control.',
        solution:
          'Developed a role-aware mobile product flow connected to backend APIs and transaction-ready data systems.',
        metrics: ['Transfer workflows', 'Recharge operations', 'Role-based access'],
        tech: ['React Native', 'Node.js', 'PostgreSQL', 'Razorpay'],
        accent: 'orange',
        featured: true,
        image: VoxpayImage,
        link: 'https://www.voxpay.in',
        githubLink: null,
      },
      {
        id: 'confidential-delivery-platform',
        title: 'Confidential Delivery Platform',
        category: 'Mobile Application',
        description:
          'A full-scale delivery platform built for a UAE-based client, handling real-time orders, user flows, and delivery operations.',
        problem:
          'A UAE operator needed to coordinate live orders across customers, admins, and operations in one mobile system.',
        solution:
          'Built a Flutter app on top of PostgreSQL-backed backend APIs with real-time tracking, role-based flows, and an optimized delivery workflow.',
        metrics: [
          'Real-time order tracking',
          'Multi-role system (user, admin, operations)',
          'Optimized delivery workflow',
        ],
        tech: ['Flutter', 'Backend APIs', 'PostgreSQL'],
        accent: 'purple',
        featured: true,
        image: '/projects/confidential-delivery-platform.jpg',
        link: '',
        githubLink: null,
      },
    ] satisfies ProjectContent[],
  },
  founders: {
    section: {
      badge: 'The Team',
      title: 'Meet the Founders',
      subtitle:
        'A small, senior team that designs, builds, and ships products end-to-end.',
    },
    items: [
      {
        name: 'Sahal',
        role: 'Technical Lead',
        tagline: 'Engineering',
        description:
          'Leads the technical architecture and development of scalable backend systems and applications.',
        image: SahalImage,
        accent: 'purple',
        skills: ['System Architecture', 'Backend Engineering', 'Cloud Infrastructure'],
      },
      {
        name: 'Fayas',
        role: 'Growth & Strategy',
        tagline: 'Strategy',
        description:
          'Handles product strategy, client communication, and business growth.',
        image: FayasImage,
        accent: 'orange',
        skills: ['Product Strategy', 'Client Communication', 'Business Growth'],
      },
    ] satisfies FounderContent[],
  },
  contact: {
    badge: 'Contact',
    headingPrefix: 'Have an idea?',
    headingHighlight: "Let's build it into a real product.",
    subtitle:
      "Tell us what you're planning - we'll help you scope, design, and build it step by step.",
    infoTitle: 'Project Details',
    infoSubtitle:
      "Share what you have in mind and we'll come back with a practical next step.",
    formTitle: 'Send a Message',
    messagePlaceholder: 'Tell us about your idea, timeline, and any constraints...',
    submitIdle: 'Send Message',
    submitLoading: 'Sending...',
    successMessage: 'Message sent. We will get back to you shortly.',
    errorMessage: 'Could not submit right now. Please try again in a bit.',
    requiredError: 'Please fill in name, email, and message.',
  },
} as const
