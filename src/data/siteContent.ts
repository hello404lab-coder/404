import type { LogoItem, NavItem } from '../types'
import SahalImage from '../assets/sahal.png'
import FayasImage from '../assets/fayas.jpeg'

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
    name: 'FourNotFour',
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
      id: 'enterprise-platform',
      title: 'Enterprise Platform',
      category: 'Custom Software',
      description: 'Scalable B2B platform handling 10M+ transactions daily with 99.99% uptime.',
      metrics: ['10M+ daily txns', '99.99% uptime', '3x faster deployment'],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      accent: 'purple',
      featured: true,
      image: '/projects/enterprise.jpg',
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Suite',
      category: 'AI Integration',
      description: 'End-to-end workflow automation reducing manual tasks by 85%.',
      metrics: ['85% reduction', '24/7 operation', '$2M saved/year'],
      tech: ['Python', 'LLM APIs', 'TensorFlow', 'Kubernetes'],
      accent: 'gradient',
      featured: true,
      image: '/projects/ai-automation.jpg',
    },
    {
      id: 'defi-protocol',
      title: 'DeFi Protocol',
      category: 'Blockchain',
      description: 'Decentralized lending protocol with $50M+ TVL and audited smart contracts.',
      metrics: ['$50M+ TVL', 'Zero exploits', '12K+ users'],
      tech: ['Solidity', 'Web3.js', 'The Graph', 'Hardhat'],
      accent: 'orange',
      featured: false,
      image: '/projects/defi.jpg',
    },
    {
      id: 'fintech-mobile',
      title: 'Fintech Mobile',
      category: 'Mobile App',
      description: 'Cross-platform banking app with biometric auth and real-time transfers.',
      metrics: ['4.9★ rating', '500K+ downloads', '<2s response'],
      tech: ['React Native', 'Firebase', 'Plaid', 'Stripe'],
      accent: 'purple',
      featured: false,
      image: '/projects/fintech.jpg',
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI',
      category: 'AI Integration',
      description: 'Diagnostic assistance system improving accuracy by 40% for radiology teams.',
      metrics: ['40% accuracy+', 'HIPAA compliant', '50+ hospitals'],
      tech: ['PyTorch', 'DICOM', 'FastAPI', 'Azure'],
      accent: 'gradient',
      featured: false,
      image: '/projects/healthcare.jpg',
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain Tracker',
      category: 'Blockchain',
      description: 'End-to-end traceability platform tracking 2M+ products across 40 countries.',
      metrics: ['2M+ products', '40 countries', 'Real-time tracking'],
      tech: ['Hyperledger', 'IPFS', 'Go', 'MongoDB'],
      accent: 'orange',
      featured: true,
      image: '/projects/supply-chain.jpg',
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

