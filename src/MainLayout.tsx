import { Outlet, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton'
import { ScrollToTop } from './utils/ScrollToTop'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function AnimatedGlow({
  className,
  style,
  delay = 0,
}: {
  className: string
  style: React.CSSProperties
  delay?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0"
          style={style}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
        />
      )}
    </motion.div>
  )
}

export function MainLayout() {
  const location = useLocation()
  const isProjects = location.pathname.startsWith('/projects')
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-svh" style={{ background: '#060308' }}>
      <ScrollToTop />
      <div className="relative">
        <Navbar
          className="absolute top-0 left-0 right-0 z-20 grid grid-cols-[1fr_auto_1fr] items-center gap-6 pt-9 px-[70px] max-[1180px]:flex max-[1180px]:justify-between max-[1180px]:flex-wrap max-[1180px]:pt-8 max-[1180px]:px-7 max-[720px]:px-[18px] max-[720px]:pt-6"
          brandHref={isProjects ? '/' : undefined}
          rightLink={isProjects ? { label: 'Services', href: '/#services' } : { label: 'Our Work', href: '/projects' }}
        />
        <Outlet />
      </div>

      <div className="relative overflow-hidden" style={{ background: '#08020d' }}>
        {isProjects && <AnimatedGlow
          className="absolute pointer-events-none left-1/2 -translate-x-1/2"
          style={{
            top: '-220px',
            width: '1100px',
            height: '480px',
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(146,72,251,0.22) 0%, rgba(118,49,221,0.12) 30%, transparent 70%)',
            filter: 'blur(12px)',
          }}
          delay={0.1}
        />}
        {(isHome ? !isProjects : isProjects) && (
          <>
            <AnimatedGlow
              className="absolute pointer-events-none left-[-4px] top-0 w-80 h-full opacity-[0.92]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,135,55,0.18) 0%, rgba(207,76,24,0.15) 24%, rgba(110,29,17,0.08) 50%, rgba(43,11,12,0.03) 70%, transparent 100%)',
              }}
              delay={0.2}
            />
            <AnimatedGlow
              className="absolute pointer-events-none left-[-170px] top-[140px] w-[520px] h-[800px] blur-[18px]"
              style={{
                background:
                  'radial-gradient(circle at 28% 42%, rgba(255,190,136,0.12) 0%, rgba(255,128,52,0.22) 18%, rgba(185,60,22,0.18) 38%, rgba(96,24,16,0.1) 60%, transparent 84%)',
              }}
              delay={0.3}
            />
            <AnimatedGlow
              className="absolute pointer-events-none right-[-4px] top-0 w-80 h-full opacity-[0.92]"
              style={{
                background:
                  'linear-gradient(270deg, rgba(135,46,255,0.18) 0%, rgba(106,28,219,0.15) 24%, rgba(60,14,100,0.08) 50%, rgba(25,7,43,0.03) 70%, transparent 100%)',
              }}
              delay={0.2}
            />
            <AnimatedGlow
              className="absolute pointer-events-none right-[-170px] top-[140px] w-[520px] h-[800px] blur-[18px]"
              style={{
                background:
                  'radial-gradient(circle at 72% 42%, rgba(180,100,255,0.12) 0%, rgba(151,53,255,0.22) 18%, rgba(106,28,219,0.18) 38%, rgba(55,12,100,0.1) 60%, transparent 84%)',
              }}
              delay={0.3}
            />
          </>
        )}
        <Footer />
      </div>
      <WhatsAppFloatingButton />
    </div>
  )
}
