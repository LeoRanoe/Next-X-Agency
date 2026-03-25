'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  fadeInUp,
  blurFadeIn,
  staggerContainer,
  scaleIn,
} from '@/lib/animationUtils'

function TestimonialsSectionFn() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#0f172a' }} id="early-adopter">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Story + Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={scaleIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Early Adopter
            </motion.div>
            <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Wij bouwen samen{' '}
              <span className="text-primary">met u</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed mb-8">
              NextX Agency is een jong en ambitieus bureau. Wij geloven in eerlijkheid: wij zijn net gestart en bouwen ons portfolio op met echte klanten. Dat betekent dat u als vroege klant extra voordelen krijgt — en direct impact heeft op hoe wij groeien.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-2xl border border-slate-700 bg-slate-800/50">
                <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>100%</p>
                <p className="text-xs text-slate-400 mt-1">Persoonlijke aandacht</p>
              </div>
              <div className="text-center p-4 rounded-2xl border border-slate-700 bg-slate-800/50">
                <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>48u</p>
                <p className="text-xs text-slate-400 mt-1">Reactietijd</p>
              </div>
              <div className="text-center p-4 rounded-2xl border border-slate-700 bg-slate-800/50">
                <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>30%</p>
                <p className="text-xs text-slate-400 mt-1">Korting voor u</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Offer card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-slate-800/60 border-2 border-primary/40 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Early Adopter Aanbod</p>
                  <p className="text-slate-400 text-sm">Beperkt beschikbaar</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Wees een van onze eerste klanten en ontvang{' '}
                <span className="text-primary">30% korting</span>{' '}
                op uw eerste project.
              </h3>

              <ul className="space-y-3 mb-8">
                {[
                  'Persoonlijke begeleiding door de oprichter',
                  'Gratis extra revisierondes',
                  'Prioriteit bij toekomstige updates',
                  'Uw feedback helpt ons verbeteren',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange-500/25"
              >
                Claim uw plek
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSectionFn as TestimonialsSection }
