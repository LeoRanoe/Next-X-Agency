'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { clipRevealUp, staggerContainer, floatY } from '@/lib/animationUtils'
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

// Syntax-highlighted code lines rendered as JSX
// Each token has a color class
type Token = { text: string; color: string }
type CodeLine = Token[]

const codeLines: CodeLine[] = [
  [{ text: '// nextx-website.config.tsx', color: 'text-slate-500' }],
  [],
  [
    { text: 'import', color: 'text-violet-400' },
    { text: ' { ', color: 'text-slate-300' },
    { text: 'NextXSite', color: 'text-sky-300' },
    { text: ' } ', color: 'text-slate-300' },
    { text: 'from', color: 'text-violet-400' },
    { text: " '@nextx/core'", color: 'text-amber-300' },
  ],
  [],
  [
    { text: 'export default', color: 'text-violet-400' },
    { text: ' function ', color: 'text-slate-300' },
    { text: 'KlantWebsite', color: 'text-yellow-300' },
    { text: '() {', color: 'text-slate-300' },
  ],
  [
    { text: '  return (', color: 'text-slate-300' },
  ],
  [
    { text: '    <', color: 'text-slate-400' },
    { text: 'NextXSite', color: 'text-emerald-400' },
  ],
  [
    { text: '      design', color: 'text-orange-300' },
    { text: '=', color: 'text-slate-400' },
    { text: '"op-maat"', color: 'text-amber-300' },
  ],
  [
    { text: '      seo', color: 'text-orange-300' },
    { text: '={', color: 'text-slate-400' },
    { text: 'true', color: 'text-violet-400' },
    { text: '}', color: 'text-slate-400' },
  ],
  [
    { text: '      responsive', color: 'text-orange-300' },
    { text: '={', color: 'text-slate-400' },
    { text: 'true', color: 'text-violet-400' },
    { text: '}', color: 'text-slate-400' },
  ],
  [
    { text: '    >', color: 'text-slate-400' },
  ],
  [
    { text: '      <', color: 'text-slate-400' },
    { text: 'Hero', color: 'text-emerald-400' },
    { text: ' titel', color: 'text-orange-300' },
    { text: '=', color: 'text-slate-400' },
    { text: '"Uw bedrijf online"', color: 'text-amber-300' },
    { text: ' />', color: 'text-slate-400' },
  ],
  [
    { text: '      <', color: 'text-slate-400' },
    { text: 'Diensten', color: 'text-emerald-400' },
    { text: ' items', color: 'text-orange-300' },
    { text: '={', color: 'text-slate-400' },
    { text: 'services', color: 'text-sky-300' },
    { text: '} />', color: 'text-slate-400' },
  ],
  [
    { text: '      <', color: 'text-slate-400' },
    { text: 'Contact', color: 'text-emerald-400' },
    { text: ' whatsapp', color: 'text-orange-300' },
    { text: '=', color: 'text-slate-400' },
    { text: '"+597..."', color: 'text-amber-300' },
    { text: ' />', color: 'text-slate-400' },
  ],
  [
    { text: '    </', color: 'text-slate-400' },
    { text: 'NextXSite', color: 'text-emerald-400' },
    { text: '>', color: 'text-slate-400' },
  ],
  [{ text: '  )', color: 'text-slate-300' }],
  [{ text: '}', color: 'text-slate-300' }],
  [],
  [{ text: '// ✓ Klaar in 48u  ·  SSL  ·  100% Op maat', color: 'text-emerald-500/70' }],
]

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-lg mx-auto lg:mx-0"
    >
      {/* Outer glow */}
      <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-violet-500/10 blur-sm pointer-events-none" />

      <motion.div
        variants={floatY}
        initial="initial"
        animate="animate"
        className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
        style={{ background: '#0f1117' }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]" style={{ background: '#161b22' }}>
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          {/* Tab */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium text-slate-400" style={{ background: '#0f1117' }}>
            <svg className="w-3 h-3 text-sky-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M0 3l9.5 9L0 21h3l9.5-9L3 3H0zm11 0l9.5 9-9.5 9h3l9.5-9L14 3h-3z"/>
            </svg>
            nextx-website.config.tsx
          </div>
        </div>

        {/* Code body */}
        <div className="px-5 py-4 font-mono text-[12.5px] leading-[1.75] overflow-hidden select-none">
          {codeLines.map((line, lineIdx) => (
            <motion.div
              key={lineIdx}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.8 + lineIdx * 0.045, ease: 'easeOut' }}
              className="flex items-baseline"
            >
              {/* Line number */}
              <span className="w-6 shrink-0 text-right mr-5 text-slate-600 text-[11px] tabular-nums select-none">
                {line.length > 0 ? lineIdx + 1 : ''}
              </span>
              {/* Tokens */}
              <span>
                {line.map((token, ti) => (
                  <span key={ti} className={token.color}>{token.text}</span>
                ))}
                {/* Blinking cursor on the last real line */}
                {lineIdx === codeLines.length - 1 && (
                  <span className="animate-pulse ml-0.5 inline-block w-[2px] h-[14px] bg-primary align-middle" />
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 border-t border-white/[0.05] text-[10px] font-medium text-slate-600" style={{ background: '#0d1117' }}>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-500/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
              TypeScript
            </span>
            <span>Next.js 16</span>
          </span>
          <span>Ln {codeLines.length}, Col 1</span>
        </div>
      </motion.div>

      {/* Floating badge — "Live Preview" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-2.5 flex items-center gap-2.5"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[12px] font-bold text-slate-800" style={{ fontFamily: 'var(--font-heading)' }}>Klaar in 48u</span>
      </motion.div>
    </motion.div>
  )
}

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
        {/* Two-column grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-8 bg-primary" style={{ opacity: 0.45 }} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-slate-400">
                Digitale Bureau · Suriname
              </span>
            </motion.div>

            {/* Giant typographic headline */}
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
                  Uw digitale succes begint{' '}
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


          </div>

          {/* ── Right: code editor window ── */}
          <div className="hidden lg:flex items-center justify-end pb-16">
            <CodeWindow />
          </div>

        </div>
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
