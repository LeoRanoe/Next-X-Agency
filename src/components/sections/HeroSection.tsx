'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  blurFadeIn,
} from '@/lib/animationUtils'
import { AnimatedCounter } from '@/components/animated/AnimatedCounter'

function HeroSectionFn() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Subtle background grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-60" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Digitale Bureau · Suriname
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-8 max-w-5xl"
        >
          <motion.span
            variants={fadeInUp}
            className="block text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.08] tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Uw digitale succes{' '}
            <span className="text-primary text-glow-orange">begint hier.</span>
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={blurFadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium"
        >
          NextX Agency helpt Surinaamse bedrijven professioneel online te groeien — snel, betaalbaar en volledig op maat.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"
            >
              Start Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-bold px-8 py-3.5 rounded-full text-base transition-all duration-300"
            >
              Bekijk services
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap gap-x-16 gap-y-6 border-t border-slate-100 pt-10"
        >
          {[
            { value: 50, suffix: '+', label: 'Projecten voltooid' },
            { value: 30, suffix: '+', label: 'Tevreden klanten' },
            { value: 48, suffix: 'u', label: 'Gemiddelde levertijd' },
          ].map(({ value, suffix, label }) => (
            <motion.div key={label} variants={scaleIn} className="text-center sm:text-left">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                <AnimatedCounter to={value} duration={2} />{suffix}
              </div>
              <div className="text-sm text-slate-500 font-medium mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </header>
  )
}

export { HeroSectionFn as HeroSection }
