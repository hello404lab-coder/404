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
type ServiceIconKey = 'software' | 'ai' | 'blockchain' | 'agentic' | 'cloud' | 'security'

export type ServiceContent = {
  id: string
  title: string
  tagline: string
  description: string
  features: string[]
  accent: Accent
  iconKey: ServiceIconKey
}

export type ProjectContent = {
  id: string
  title: string
  category: string
  description: string
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
  logos: [
    { name: 'Opendoor' },
    { name: 'DocuSign' },
    { name: 'slack', mark: 'slack' },
    { name: 'splunk>' },
    { name: 'ATLASSIAN', mark: 'atlassian' },
  ] satisfies LogoItem[],
  techPartners: [
    { name: 'OpenAI', iconName: 'OpenAILogoIcon' as const },
    { name: 'Snowflake', iconName: 'SnowflakeLogoIcon' as const },
    { name: 'Microsoft', iconName: 'MicrosoftLogoIcon' as const },
    { name: 'Google', iconName: 'GoogleLogoIcon' as const },
    { name: 'AWS', iconName: 'AWSLogoIcon' as const },
  ],
  services: [
    {
      id: 'software',
      title: 'Custom Software',
      tagline: 'Built for scale',
      description: 'End-to-end software development tailored to your business needs. From MVPs to enterprise platforms.',
      features: ['Full-Stack Development', 'Cloud Architecture', 'API Design', 'DevOps'],
      accent: 'purple',
      iconKey: 'software',
    },
    {
      id: 'ai',
      title: 'AI Integration',
      tagline: 'Intelligence engineered',
      description: 'Production-grade AI solutions that automate workflows and unlock insights from your data.',
      features: ['LLM Integration', 'Predictive Models', 'NLP Pipelines', 'MLOps'],
      accent: 'gradient',
      iconKey: 'ai',
    },
    {
      id: 'blockchain',
      title: 'Blockchain',
      tagline: 'Trust by design',
      description: 'Smart contracts and decentralized applications built for security and transparency.',
      features: ['Smart Contracts', 'DeFi Protocols', 'Web3 Integration', 'Tokenization'],
      accent: 'orange',
      iconKey: 'blockchain',
    },
    {
      id: 'agentic',
      title: 'Agentic Automation',
      tagline: 'Autonomous systems',
      description: 'Self-operating AI agents that handle complex workflows from end to end.',
      features: ['Autonomous Agents', 'Workflow Automation', 'Decision Engines', '24/7 Operations'],
      accent: 'purple',
      iconKey: 'agentic',
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      tagline: 'Infrastructure that scales',
      description: 'Enterprise cloud architecture designed for performance, security, and cost optimization.',
      features: ['AWS/Azure/GCP', 'Kubernetes', 'Serverless', 'FinOps'],
      accent: 'gradient',
      iconKey: 'cloud',
    },
    {
      id: 'security',
      title: 'Security & Audit',
      tagline: 'Protected by default',
      description: 'Comprehensive security audits and hardening to protect your systems and data.',
      features: ['Penetration Testing', 'Code Audits', 'Compliance', 'Monitoring'],
      accent: 'orange',
      iconKey: 'security',
    },
  ] satisfies ServiceContent[],
  projects: [
    {
      id: 'amanimotors',
      title: 'Amanimotors',
      category: 'Auto E-commerce',
      description:
        'Premium used-car showcase with live inventory, smooth GSAP storytelling, and a Go-powered backend.',
      metrics: ['Premium UX', 'GSAP storytelling', 'Live inventory'],
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
        'High-end used-car catalog with cinematic scroll, real-time inventory, and a Go + PostgreSQL backend.',
      metrics: ['Cinematic scroll', 'Real-time catalog', 'Go + PostgreSQL'],
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
        'Brand-led website for a steel distribution company built around a clean catalog and motion-driven hero.',
      metrics: ['Brand-led design', 'Distribution catalog', 'Motion hero'],
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
        'Photography portfolio with cinematic transitions and a story-first gallery experience.',
      metrics: ['Cinematic transitions', 'Story-first gallery', 'Mobile optimized'],
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
      category: 'eCommerce',
      description:
        'Storefront for premium exotic vegetables and fruits with a curated catalog and clean checkout flow.',
      metrics: ['Curated catalog', 'Storefront commerce', 'Pan-India delivery'],
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
        'Editorial-led brand site for a lifestyle collective with custom motion and a bold visual identity.',
      metrics: ['Editorial layout', 'Custom motion', 'Brand-first design'],
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
        'Marketing site for a precision 3D scanning, reverse engineering, and inspection studio.',
      metrics: ['Precision 3D scans', 'Inspection workflows', 'Reverse engineering'],
      tech: ['React', 'Tailwind', 'GSAP', 'Node.js'],
      accent: 'orange',
      featured: true,
      image: BeSaLabsImage,
      link: 'https://www.besalabs.in',
      githubLink: null,
    },
    {
      id: 'voxpay',
      title: 'VOXPAY',
      category: 'Fintech Mobile',
      description:
        'Neo-banking partner mobile web app for online payment transfer, recharges, and cash management. Private build (not publicly accessible).',
      metrics: ['Money transfer', 'Bill & recharge', 'Cash management'],
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'Razorpay'],
      accent: 'orange',
      featured: true,
      image: VoxpayImage,
      link: 'https://voxpay.in',
      githubLink: null,
    },
  ] satisfies ProjectContent[],
  founders: [
    {
      name: 'Sahal',
      role: 'Technical Lead',
      tagline: 'Engineering that scales',
      description: 'Architecting robust systems and AI solutions that power the modern enterprise.',
      image: SahalImage,
      accent: 'purple',
      skills: ['System Architecture', 'AI/ML', 'Cloud Infrastructure'],
    },
    {
      name: 'Fayas',
      role: 'Growth & Strategy',
      tagline: 'Strategy that delivers',
      description: 'Driving market expansion and building lasting partnerships that fuel growth.',
      image: FayasImage,
      accent: 'orange',
      skills: ['Business Development', 'Marketing', 'Client Relations'],
    },
  ] satisfies FounderContent[],
  contact: {
    badge: 'Contact',
    headingPrefix: "Let's build your next",
    headingHighlight: 'high-impact product',
    subtitle:
      'Tell us about your goals and timelines. We will reply with a practical next step and project direction.',
    infoTitle: 'Contact Information',
    infoSubtitle:
      'Share your idea and we will help scope, design, and ship a solution that fits your stack and team.',
    formTitle: 'Send a Message',
    messagePlaceholder: 'Tell us what you are planning to build...',
    submitIdle: 'Submit Inquiry',
    submitLoading: 'Sending...',
    successMessage: 'Message sent successfully. We will get back to you soon.',
    errorMessage: 'Unable to submit right now. Please try again shortly.',
    requiredError: 'Please fill in name, email, and message.',
  },
} as const

