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
        <path
          d="M-94 484C34 298 172 186 348 183C486 181 594 267 602 398C607 477 575 549 523 615"
          fill="none"
          filter="url(#hero-blur-xl)"
          stroke="rgba(255,185,136,0.12)"
          strokeLinecap="round"
          strokeWidth="100"
        />
        <path
          d="M-90 480C38 300 178 192 352 191C484 190 584 271 587 397C589 470 562 535 518 588"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(255,244,239,0.9)"
          strokeLinecap="round"
          strokeWidth="15"
        />
        <path
          d="M-92 482C37 302 178 194 350 193C482 192 581 272 583 397C585 466 559 527 514 581"
          fill="none"
          filter="url(#hero-blur-sm)"
          stroke="rgba(255,251,248,0.98)"
          strokeLinecap="round"
          strokeWidth="7"
        />
        <path
          d="M12 552C146 396 315 318 470 329C590 338 690 420 682 585"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(255,119,36,0.56)"
          strokeLinecap="round"
          strokeWidth="12"
        />
        <path
          d="M18 555C148 398 316 321 470 331C586 339 684 418 676 585"
          fill="none"
          stroke="rgba(255,109,28,0.92)"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
        <path
          d="M-44 626C92 518 252 463 408 470C522 475 608 536 612 645"
          fill="none"
          stroke="rgba(255,142,62,0.42)"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M-76 700C54 594 216 539 372 546C486 551 568 610 572 709"
          fill="none"
          stroke="rgba(191, 95, 44, 0.42)"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <path
          d="M-98 772C28 662 188 606 342 612C450 616 532 672 540 768"
          fill="none"
          stroke="rgba(154, 75, 34, 0.36)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M-126 434C7 287 143 201 290 205C394 208 468 272 370 675"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(255,248,244,0.2)"
          strokeLinecap="round"
          strokeWidth="18"
        />
      </g>

      <g opacity="0.95" transform="translate(1758 220) scale(-0.75 0.72)">
        <path
          d="M-94 484C34 298 172 186 348 183C486 181 594 267 602 398C607 477 575 549 523 615"
          fill="none"
          filter="url(#hero-blur-xl)"
          stroke="rgba(135,46,255,0.62)"
          strokeLinecap="round"
          strokeWidth="84"
        />
        <path
          d="M-90 480C38 300 178 192 352 191C484 190 584 271 587 397C589 470 562 535 518 588"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(195,79,255,0.7)"
          strokeLinecap="round"
          strokeWidth="24"
        />
        <path
          d="M-92 482C37 302 178 194 350 193C482 192 581 272 583 397C585 466 559 527 514 581"
          fill="none"
          filter="url(#hero-blur-sm)"
          stroke="rgba(247,239,255,0.95)"
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M12 552C146 396 315 318 470 329C590 338 690 420 682 585"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(195,79,255,0.56)"
          strokeLinecap="round"
          strokeWidth="12"
        />
        <path
          d="M18 555C148 398 316 321 470 331C586 339 684 418 676 585"
          fill="none"
          stroke="rgba(185,65,255,0.92)"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
        <path
          d="M-44 626C92 518 252 463 408 470C522 475 608 536 612 645"
          fill="none"
          stroke="rgba(133,37,236,0.42)"
          strokeLinecap="round"
          strokeWidth="2.4"
        />
        <path
          d="M-76 700C54 594 216 539 372 546C486 551 568 610 572 709"
          fill="none"
          stroke="rgba(97,23,188,0.42)"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <path
          d="M-98 772C28 662 188 606 342 612C450 616 532 672 540 768"
          fill="none"
          stroke="rgba(75,15,155,0.36)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M-126 434C7 287 143 201 290 205C394 208 468 272 370 675"
          fill="none"
          filter="url(#hero-blur-lg)"
          stroke="rgba(220,200,255,0.2)"
          strokeLinecap="round"
          strokeWidth="18"
        />
      </g>
    </svg>
  )
}
