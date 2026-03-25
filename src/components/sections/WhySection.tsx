'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  staggerContainer,
  staggerContainerSlow,
  blurFadeIn,
  scaleIn,
} from '@/lib/animationUtils'

const features = [
  {
    title: 'Snel Geleverd',
    description: 'Geoptimaliseerde workflows zorgen voor snelle oplevering zonder kwaliteitsverlies.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Smart Budget',
    description: 'Slimme technologie-integratie zorgt voor premium output tegen competitieve tarieven.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
        <path d="M12 6v2m0 8v2" />
      </svg>
    ),
  },
  {
    title: 'Custom Design',
    description: 'Elk project wordt volledig gepersonaliseerd naar uw merkidentiteit en doelgroep.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Lokaal Netwerk',
    description: 'Geworteld in Paramaribo met een globaal perspectief en sterke lokale connecties.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
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

        {/* Asymmetric layout: image left, features right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop&q=80"
                alt="Team samenwerking — professionals aan het werk"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent bar */}
            <div className="absolute -bottom-3 left-8 right-8 h-6 bg-primary/10 rounded-full blur-xl" />
          </motion.div>

          {/* Right — Features list */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group flex gap-5 p-5 rounded-2xl bg-white border border-slate-100 transition-all duration-400 hover:border-primary/25 hover:shadow-md"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
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
      </div>
    </section>
  )
}

export { WhySectionFn as WhySection }
