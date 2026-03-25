'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { clipRevealUp, staggerContainer } from '@/lib/animationUtils'
import { MagneticButton } from '@/components/animated/MagneticButton'
import { AnimatedSVGPath } from '@/components/animated/AnimatedSVGPath'

const marqueeItems = [
  'Website Design',
  'Logo & Branding',
  'SEO Optimalisatie',
  'Webshop',
  'UX / UI Design',
  'E-Commerce',
  'Social Media',
  'Responsive Design',
]

function HeroSectionFn() {
  return (
    <header className="relative flex flex-col min-h-[90vh] justify-center pt-28 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-grid-pattern opacity-60" />

      {/* Decorative concentric arcs — upper right */}
      <div
        className="absolute -top-48 -right-48 w-170 h-170 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 680 680" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="340" cy="340" r="310" stroke="#f97015" strokeWidth="1.5" opacity="0.07" />
          <circle cx="340" cy="340" r="240" stroke="#f97015" strokeWidth="1" opacity="0.045" />
          <circle cx="340" cy="340" r="170" stroke="#f97015" strokeWidth="0.5" opacity="0.025" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px w-8 bg-primary" style={{ opacity: 0.45 }} />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-slate-400">
            Digitale Bureau · Suriname · 50+ Projecten
          </span>
        </motion.div>

        {/* Giant typographic headline — each line clip-reveals independently */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-10"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="block overflow-hidden">
            <motion.span
              variants={clipRevealUp}
              className="block font-bold text-slate-900 leading-[0.9] tracking-tighter"
              style={{ fontSize: 'clamp(3.2rem, 7.5vw, 6.8rem)' }}
            >
              Uw digitale
            </motion.span>
          </span>

          <span className="block overflow-hidden">
            <motion.span
              variants={clipRevealUp}
              className="block font-bold text-slate-900 leading-[0.9] tracking-tighter"
              style={{ fontSize: 'clamp(3.2rem, 7.5vw, 6.8rem)' }}
            >
              succes
            </motion.span>
          </span>

          <span className="block overflow-hidden">
            <motion.span
              variants={clipRevealUp}
              className="block font-bold text-slate-900 leading-[0.9] tracking-tighter"
              style={{ fontSize: 'clamp(3.2rem, 7.5vw, 6.8rem)' }}
            >
              begint{' '}
              <span className="relative inline-block">
                <span className="text-primary text-glow-orange">hier.</span>
                {/* Animated wavy underline */}
                <svg
                  className="absolute left-0 overflow-visible pointer-events-none"
                  style={{ bottom: '-0.08em', width: '100%', height: '0.22em' }}
                  viewBox="0 0 200 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <AnimatedSVGPath
                    d="M2 9 Q50 3 100 9 Q150 15 198 9"
                    stroke="#f97015"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity={0.85}
                    delay={0.95}
                    duration={0.8}
                  />
                </svg>
              </span>
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85 }}
          className="text-base md:text-lg text-slate-400 max-w-md mb-12 leading-relaxed font-medium"
        >
          NextX Agency helpt Surinaamse bedrijven professioneel online te groeien —
          snel, betaalbaar en volledig op maat.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-16"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-[1.04] shadow-lg shadow-orange-500/20"
            >
              Start Project
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </MagneticButton>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-primary font-semibold text-base transition-colors duration-300"
          >
            Bekijk diensten
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Stats strip — inline with separators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="flex flex-wrap items-center gap-y-2 pb-16 text-sm text-slate-400 font-medium"
        >
          <span><span className="text-slate-800 font-bold text-[15px]">50+</span>&nbsp;Projecten</span>
          <span className="mx-5 text-slate-200 select-none">·</span>
          <span><span className="text-slate-800 font-bold text-[15px]">30+</span>&nbsp;Klanten</span>
          <span className="mx-5 text-slate-200 select-none">·</span>
          <span><span className="text-slate-800 font-bold text-[15px]">48u</span>&nbsp;Reactietijd</span>
          <span className="mx-5 text-slate-200 select-none">·</span>
          <span><span className="text-slate-800 font-bold text-[15px]">100%</span>&nbsp;Op maat</span>
        </motion.div>
      </div>

      {/* Services marquee — full-bleed ticker at bottom of hero */}
      <div className="relative z-10 w-full overflow-hidden border-t border-slate-100 bg-white/70 backdrop-blur-sm">
        <div className="marquee-track flex whitespace-nowrap py-4 select-none" aria-hidden="true">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-7 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400"
            >
              {item}
              <span className="text-primary opacity-50 font-light text-base leading-none">×</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

export { HeroSectionFn as HeroSection }
