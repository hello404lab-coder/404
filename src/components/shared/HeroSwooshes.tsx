import { motion, useReducedMotion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

function AnimatedPath({
  d,
  stroke,
  strokeWidth,
  filter,
  delay = 0,
  duration = 1.5,
}: {
  d: string
  stroke: string
  strokeWidth: number
  filter?: string
  delay?: number
  duration?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        filter={filter}
        strokeLinecap="round"
      />
    )
  }

  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      filter={filter}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration, delay, ease: EASE }}
    />
  )
}

export function HeroSwooshes() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 1728 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="hero-blur-xl" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="hero-blur-lg" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="hero-blur-sm" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <g opacity="0.95" transform="translate(-30 220) scale(0.75 0.72)">
        <AnimatedPath
          d="M-94 484C34 298 172 186 348 183C486 181 594 267 602 398C607 477 575 549 523 615"
          stroke="rgba(255,185,136,0.12)"
          strokeWidth={100}
          filter="url(#hero-blur-xl)"
          delay={0.2}
          duration={1.8}
        />
        <AnimatedPath
          d="M-90 480C38 300 178 192 352 191C484 190 584 271 587 397C589 470 562 535 518 588"
          stroke="rgba(255,244,239,0.9)"
          strokeWidth={15}
          filter="url(#hero-blur-lg)"
          delay={0.3}
          duration={1.6}
        />
        <AnimatedPath
          d="M-92 482C37 302 178 194 350 193C482 192 581 272 583 397C585 466 559 527 514 581"
          stroke="rgba(255,251,248,0.98)"
          strokeWidth={7}
          filter="url(#hero-blur-sm)"
          delay={0.4}
          duration={1.5}
        />
        <AnimatedPath
          d="M12 552C146 396 315 318 470 329C590 338 690 420 682 585"
          stroke="rgba(255,119,36,0.56)"
          strokeWidth={12}
          filter="url(#hero-blur-lg)"
          delay={0.5}
          duration={1.4}
        />
        <AnimatedPath
          d="M18 555C148 398 316 321 470 331C586 339 684 418 676 585"
          stroke="rgba(255,109,28,0.92)"
          strokeWidth={3.4}
          delay={0.6}
          duration={1.3}
        />
        <AnimatedPath
          d="M-44 626C92 518 252 463 408 470C522 475 608 536 612 645"
          stroke="rgba(255,142,62,0.42)"
          strokeWidth={2.4}
          delay={0.7}
          duration={1.2}
        />
        <AnimatedPath
          d="M-76 700C54 594 216 539 372 546C486 551 568 610 572 709"
          stroke="rgba(191, 95, 44, 0.42)"
          strokeWidth={2.2}
          delay={0.8}
          duration={1.1}
        />
        <AnimatedPath
          d="M-98 772C28 662 188 606 342 612C450 616 532 672 540 768"
          stroke="rgba(154, 75, 34, 0.36)"
          strokeWidth={2}
          delay={0.9}
          duration={1}
        />
        <AnimatedPath
          d="M-126 434C7 287 143 201 290 205C394 208 468 272 370 675"
          stroke="rgba(255,248,244,0.2)"
          strokeWidth={18}
          filter="url(#hero-blur-lg)"
          delay={1}
          duration={1.5}
        />
      </g>

      <g opacity="0.95" transform="translate(1758 220) scale(-0.75 0.72)">
        <AnimatedPath
          d="M-94 484C34 298 172 186 348 183C486 181 594 267 602 398C607 477 575 549 523 615"
          stroke="rgba(135,46,255,0.62)"
          strokeWidth={84}
          filter="url(#hero-blur-xl)"
          delay={0.2}
          duration={1.8}
        />
        <AnimatedPath
          d="M-90 480C38 300 178 192 352 191C484 190 584 271 587 397C589 470 562 535 518 588"
          stroke="rgba(195,79,255,0.7)"
          strokeWidth={24}
          filter="url(#hero-blur-lg)"
          delay={0.3}
          duration={1.6}
        />
        <AnimatedPath
          d="M-92 482C37 302 178 194 350 193C482 192 581 272 583 397C585 466 559 527 514 581"
          stroke="rgba(247,239,255,0.95)"
          strokeWidth={8}
          filter="url(#hero-blur-sm)"
          delay={0.4}
          duration={1.5}
        />
        <AnimatedPath
          d="M12 552C146 396 315 318 470 329C590 338 690 420 682 585"
          stroke="rgba(195,79,255,0.56)"
          strokeWidth={12}
          filter="url(#hero-blur-lg)"
          delay={0.5}
          duration={1.4}
        />
        <AnimatedPath
          d="M18 555C148 398 316 321 470 331C586 339 684 418 676 585"
          stroke="rgba(185,65,255,0.92)"
          strokeWidth={3.4}
          delay={0.6}
          duration={1.3}
        />
        <AnimatedPath
          d="M-44 626C92 518 252 463 408 470C522 475 608 536 612 645"
          stroke="rgba(133,37,236,0.42)"
          strokeWidth={2.4}
          delay={0.7}
          duration={1.2}
        />
        <AnimatedPath
          d="M-76 700C54 594 216 539 372 546C486 551 568 610 572 709"
          stroke="rgba(97,23,188,0.42)"
          strokeWidth={2.2}
          delay={0.8}
          duration={1.1}
        />
        <AnimatedPath
          d="M-98 772C28 662 188 606 342 612C450 616 532 672 540 768"
          stroke="rgba(75,15,155,0.36)"
          strokeWidth={2}
          delay={0.9}
          duration={1}
        />
        <AnimatedPath
          d="M-126 434C7 287 143 201 290 205C394 208 468 272 370 675"
          stroke="rgba(220,200,255,0.2)"
          strokeWidth={18}
          filter="url(#hero-blur-lg)"
          delay={1}
          duration={1.5}
        />
      </g>
    </svg>
  )
}
