'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import {
  fadeInUp,
  blurFadeIn,
  staggerContainer,
  staggerContainerSlow,
  cardFlipIn,
  scaleIn,
} from '@/lib/animationUtils'

const testimonials = [
  {
    quote:
      'NextX heeft onze complete online aanwezigheid opgezet. Van logo tot website, alles in twee weken geleverd. Echt indrukwekkend!',
    name: 'Maria Tjin-A-Lim',
    role: 'Eigenaar, Tjin Catering',
    stars: 5,
  },
  {
    quote:
      'Eindelijk een agency die begrijpt hoe de Surinaamse markt werkt. Betaalbaar, snel en altijd bereikbaar via WhatsApp.',
    name: 'Ravin Parbhudayal',
    role: 'Directeur, RP Trading',
    stars: 5,
  },
  {
    quote:
      'Onze webshop draait fantastisch. Het team denkt echt mee en geeft ook na oplevering nog support. Aanrader!',
    name: 'Sharmila Kasanmoenadi',
    role: 'Founder, Suri Style Boutique',
    stars: 5,
  },
] as const

function TestimonialsSectionFn() {
  return (
    <section className="py-24 lg:py-32 relative bg-slate-50/50" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <motion.div variants={scaleIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Klantervaring
          </motion.div>
          <motion.h2 variants={blurFadeIn} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Wat onze klanten{' '}
            <span className="text-primary">zeggen</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Wij bouwen langdurige relaties met onze klanten. Hier zijn enkele
            ervaringen.
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardFlipIn}
              className="group"
            >
              <div className="bg-white border border-slate-100 rounded-3xl p-8 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20">
                {/* Quote icon */}
                <div className="mb-4">
                  <svg className="w-10 h-10 text-primary/20" viewBox="0 0 40 30" fill="currentColor" aria-hidden="true">
                    <path d="M5 28 C 2 22, 2 16, 8 10 C 12 6, 16 5, 18 6 L 16 12 C 13 11, 11 13, 10 16 L 16 16 L 16 28 Z" />
                    <path d="M25 28 C 22 22, 22 16, 28 10 C 32 6, 36 5, 38 6 L 36 12 C 33 11, 31 13, 30 16 L 36 16 L 36 28 Z" />
                  </svg>
                </div>

                {/* Quote text */}
                <p className="text-slate-600 italic mb-6 text-sm leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, damping: 12, delay: i * 0.07 }}
                    >
                      <Star size={16} className="text-primary fill-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { TestimonialsSectionFn as TestimonialsSection }
