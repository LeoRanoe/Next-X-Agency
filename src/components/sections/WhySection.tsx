'use client'

import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  staggerContainerSlow,
  cardFlipIn,
  blurFadeIn,
  scaleIn,
} from '@/lib/animationUtils'

const features = [
  {
    title: 'Snel Geleverd',
    description: 'Geoptimaliseerde workflows zorgen voor snelle oplevering zonder kwaliteitsverlies.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Smart Budget',
    description: 'Slimme technologie-integratie zorgt voor premium output tegen competitieve tarieven.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <rect height="16" rx="2" width="20" x="2" y="4" />
        <line x1="12" x2="12" y1="2" y2="4" />
        <line x1="12" x2="12" y1="20" y2="22" />
        <path d="M8 12h.01M16 12h.01" strokeWidth="3" />
      </svg>
    ),
  },
  {
    title: 'Custom Design',
    description: 'Data-gedreven esthetiek met 100% brand identity match voor uw doelgroep.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
      </svg>
    ),
  },
  {
    title: 'Lokaal Netwerk',
    description: 'Geworteld in Paramaribo met een globaal perspectief en sterke lokale connecties.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 13a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
        <path d="M5 5a10 10 0 0 1 14 0" />
      </svg>
    ),
  },
] as const

function WhySectionFn() {
  return (
    <section className="py-24 lg:py-32 relative bg-slate-50/50 overflow-hidden" id="why">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={scaleIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Waarom NextX
          </motion.div>
          <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Waarom bedrijven kiezen{' '}
            <span className="text-primary">voor ons</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Vier kernpijlers die ons onderscheiden in de Surinaamse digitale markt.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardFlipIn}
              className="group"
            >
              <div className="bg-white border border-slate-100 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { WhySectionFn as WhySection }
