import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../../lib/constants'
import { HomeIcon, ChevronIcon } from '../icons'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <motion.line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        animate={{ y1: isOpen ? 12 : 6, y2: isOpen ? 12 : 6, rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        animate={{ y1: isOpen ? 12 : 18, y2: isOpen ? 12 : 18, rotate: isOpen ? -45 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </svg>
  )
}

export function NavPill() {
  const prefersReducedMotion = useReducedMotion()
  const location = useLocation()
  const currentPath = location.pathname
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Desktop Nav Pill */}
      <motion.nav
        className="hidden max-[720px]:hidden md:inline-flex items-center gap-0.5 p-1 border border-[rgba(200,180,255,0.16)] rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(28,16,48,0.96), rgba(14,7,26,0.98))',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 0 24px rgba(100,60,180,0.16)',
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
      >
        {NAV_ITEMS.map((item, index) => {
          const isActive = item.href === currentPath ||
            (item.href !== '/' && currentPath.startsWith(item.href))

          return (
            <motion.a
              key={item.label}
              className={[
                'inline-flex items-center justify-center gap-[7px] h-[34px] px-4 rounded-full text-[0.92rem] tracking-tight no-underline cursor-pointer',
                isActive
                  ? 'border border-[rgba(255,255,255,0.1)] text-[rgba(252,248,255,0.98)] font-medium'
                  : 'text-[rgba(210,200,228,0.7)] font-normal',
              ].join(' ')}
              style={
                isActive
                  ? {
                      background:
                        'radial-gradient(circle at 50% -50%, rgba(255,255,255,0.2), transparent 55%), linear-gradient(180deg, rgba(16,11,26,0.98), rgba(5,3,10,0.99))',
                      boxShadow:
                        'inset 0 1px 1px rgba(255,255,255,0.14), 0 0 14px rgba(160,100,255,0.15)',
                    }
                  : undefined
              }
              href={item.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05, ease: EASE }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      backgroundColor: 'rgba(168,85,247,0.15)',
                      boxShadow: '0 0 12px rgba(168,85,247,0.3)',
                    }
              }
            >
              {isActive && item.href === '/' ? <HomeIcon /> : null}
              <span>{item.label}</span>
              {item.hasChevron ? <ChevronIcon /> : null}
            </motion.a>
          )
        })}
      </motion.nav>

      {/* Mobile Hamburger */}
      <motion.button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(200,180,255,0.16)] text-[rgba(244,240,252,0.9)]"
        style={{
          background: 'linear-gradient(180deg, rgba(28,16,48,0.96), rgba(14,7,26,0.98))',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 0 24px rgba(100,60,180,0.16)',
        }}
        onClick={toggleMenu}
        whileTap={{ scale: 0.95 }}
      >
        <MenuIcon isOpen={isOpen} />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.nav
              className="md:hidden fixed top-0 right-0 h-full w-[280px] z-50 p-6 pt-20"
              style={{
                background: 'linear-gradient(180deg, rgba(22,9,42,0.98), rgba(11,4,22,0.99))',
                borderLeft: '1px solid rgba(148,78,255,0.38)',
                boxShadow: '-10px 0 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,150,255,0.07)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {/* Close button */}
              <motion.button
                className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 rounded-full text-[rgba(244,240,252,0.8)]"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onClick={closeMenu}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Menu items */}
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = item.href === currentPath ||
                    (item.href !== '/' && currentPath.startsWith(item.href))

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className={[
                        'flex items-center gap-3 px-4 py-3 rounded-xl text-[1rem] tracking-tight no-underline transition-all',
                        isActive
                          ? 'text-[rgba(252,248,255,0.98)] font-medium'
                          : 'text-[rgba(210,200,228,0.7)] font-normal',
                      ].join(' ')}
                      style={
                        isActive
                          ? {
                              background:
                                'radial-gradient(circle at 50% -50%, rgba(255,255,255,0.2), transparent 55%), linear-gradient(180deg, rgba(16,11,26,0.98), rgba(5,3,10,0.99))',
                              border: '1px solid rgba(255,255,255,0.1)',
                            }
                          : { background: 'rgba(255,255,255,0.03)' }
                      }
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05, ease: EASE }}
                      onClick={closeMenu}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isActive && item.href === '/' ? <HomeIcon /> : null}
                      <span>{item.label}</span>
                    </motion.a>
                  )
                })}
              </div>

              {/* CTA at bottom */}
              <motion.div
                className="absolute bottom-8 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <a
                  href="/#contact"
                  className="flex items-center justify-center h-12 w-full rounded-full bg-[#f0ecf6] text-[#0a0510] text-[0.95rem] font-semibold tracking-[-0.03em] no-underline"
                  style={{
                    border: '1.5px solid rgba(220,215,230,0.82)',
                    boxShadow: '0 1px 8px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
                  }}
                  onClick={closeMenu}
                >
                  Start Your Project
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
