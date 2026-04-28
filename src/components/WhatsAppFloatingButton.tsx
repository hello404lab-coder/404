import { motion, useReducedMotion } from 'framer-motion'
import { siteContent } from '../data/siteContent'

type WhatsAppFloatingButtonProps = {
  className?: string
}

function getWhatsAppHref(phone: string) {
  const digitsOnly = phone.replace(/\D/g, '')
  const message = encodeURIComponent(`Hi ${siteContent.company.name}, I'd like to discuss a project.`)
  return `https://wa.me/${digitsOnly}?text=${message}`
}

export function WhatsAppFloatingButton({ className }: WhatsAppFloatingButtonProps) {
  const prefersReducedMotion = useReducedMotion()
  const href = getWhatsAppHref(siteContent.company.phone)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={
        className ??
        'fixed right-5 bottom-5 z-40 h-14 w-14 rounded-full flex items-center justify-center max-[720px]:right-4 max-[720px]:bottom-4'
      }
      style={{
        border: '1px solid rgba(122,255,176,0.48)',
        background:
          'radial-gradient(circle at 30% 25%, rgba(153,255,196,0.32) 0%, rgba(28,183,98,0.9) 55%, rgba(15,117,62,0.94) 100%)',
        boxShadow:
          '0 14px 34px rgba(11,77,42,0.45), inset 0 1px 0 rgba(212,255,226,0.38), 0 0 24px rgba(53,214,126,0.36)',
      }}
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: 1.05,
              boxShadow:
                '0 18px 38px rgba(11,77,42,0.5), inset 0 1px 0 rgba(212,255,226,0.42), 0 0 28px rgba(53,214,126,0.42)',
            }
      }
      whileTap={{ scale: 0.96 }}
    >
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(224,255,236,0.2)',
        }}
      />
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 text-[#f5fff9] drop-shadow-[0_2px_8px_rgba(8,60,31,0.45)]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.55 0 .26 5.3.26 11.81c0 2.08.54 4.1 1.56 5.88L0 24l6.49-1.7a11.73 11.73 0 0 0 5.57 1.42h.01c6.5 0 11.8-5.3 11.8-11.81 0-3.15-1.23-6.11-3.35-8.43ZM12.07 21.7h-.01a9.7 9.7 0 0 1-4.94-1.35l-.35-.2-3.85 1.01 1.03-3.76-.23-.38a9.78 9.78 0 0 1-1.49-5.2c0-5.4 4.4-9.79 9.8-9.79 2.62 0 5.08 1.02 6.92 2.87a9.72 9.72 0 0 1 2.86 6.93c0 5.4-4.4 9.78-9.74 9.87Zm5.37-7.3c-.29-.14-1.72-.85-1.99-.94-.26-.1-.45-.14-.64.15s-.73.94-.9 1.14c-.17.2-.34.22-.63.07-.3-.14-1.25-.46-2.38-1.47a8.85 8.85 0 0 1-1.64-2.03c-.17-.3-.02-.45.12-.6.13-.13.3-.34.43-.5.14-.16.18-.28.27-.47.1-.2.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.54-.46-.47-.64-.48h-.55a1.04 1.04 0 0 0-.76.35c-.26.3-.99.97-.99 2.37s1.02 2.76 1.16 2.95c.14.2 2 3.06 4.85 4.3.68.3 1.21.47 1.63.6.68.21 1.3.18 1.8.11.55-.08 1.72-.7 1.97-1.38.24-.68.24-1.25.17-1.38-.07-.13-.26-.2-.55-.34Z" />
      </svg>
    </motion.a>
  )
}
