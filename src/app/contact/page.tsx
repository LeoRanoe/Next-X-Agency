'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import {
  fadeInUp,
  blurFadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
} from '@/lib/animationUtils'

const contactItems = [
  { icon: Mail, label: 'Email', value: 'lranoesendjojo@gmail.com', href: 'mailto:lranoesendjojo@gmail.com', isExternal: false },
  { icon: Phone, label: 'WhatsApp', value: '+597 831-8508', href: 'https://wa.me/5978318508', isExternal: true },
  { icon: MapPin, label: 'Locatie', value: 'Paramaribo, Suriname', href: null, isExternal: false },
  { icon: Clock, label: 'Reactietijd', value: 'Binnen 24-48 uur', href: null, isExternal: false },
] as const

const trustItems = [
  { value: '48u', label: 'Reactietijd' },
  { value: '100%', label: 'Op maat' },
  { value: '6+', label: 'Projecten' },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── dark, dramatic, full-bleed */}
        <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden" style={{ background: '#0a0f1e' }}>
          {/* Dark dot-grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{ backgroundImage: 'radial-gradient(circle, #475569 1px, transparent 1px)', backgroundSize: '36px 36px' }}
          />

          {/* Decorative concentric arcs — upper right */}
          <div className="absolute -top-40 -right-40 w-[480px] h-[480px] pointer-events-none z-0" aria-hidden="true">
            <svg viewBox="0 0 680 680" fill="none">
              <circle cx="340" cy="340" r="310" stroke="#f97015" strokeWidth="1" opacity="0.09" />
              <circle cx="340" cy="340" r="240" stroke="#f97015" strokeWidth="0.8" opacity="0.055" />
              <circle cx="340" cy="340" r="170" stroke="#f97015" strokeWidth="0.5" opacity="0.03" />
            </svg>
          </div>

          {/* Decorative arc — lower left */}
          <div className="absolute -bottom-32 -left-32 w-72 h-72 pointer-events-none z-0 opacity-40" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="180" stroke="#f97015" strokeWidth="1" opacity="0.10" />
              <circle cx="200" cy="200" r="120" stroke="#f97015" strokeWidth="0.5" opacity="0.06" />
            </svg>
          </div>

          {/* Radial glow — top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative max-w-6xl mx-auto px-6 text-center z-10"
          >
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Neem Contact Op
            </motion.div>

            <motion.h1
              variants={blurFadeIn}
              className="font-bold tracking-tight max-w-4xl mx-auto mb-6 text-white"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.025em',
              }}
            >
              Laten we{' '}
              <span className="text-primary">samenwerken</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
              Beschrijf uw project en wij sturen binnen 24-48 uur een
              vrijblijvende quote. Of stuur direct een WhatsApp bericht.
            </motion.p>

            {/* Trust bar */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex flex-wrap items-center justify-center gap-0 rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden"
            >
              {trustItems.map((item, i) => (
                <div
                  key={item.value}
                  className={`text-center px-6 py-4 ${
                    i < trustItems.length - 1 ? 'border-r border-white/[0.08]' : ''
                  }`}
                >
                  <p className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.value}
                  </p>
                  <p className="text-[10px] text-slate-400 font-semibold tracking-[0.15em] uppercase mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Edge separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* ── Main content ── */}
        <section className="py-16 lg:py-24 relative" style={{ background: '#f8fafc' }}>
          {/* Subtle ambient glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-primary/[0.035] blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-primary/[0.02] blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-start">

              {/* ── Form column ── */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                    <Mail size={17} className="text-white" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-slate-900"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Stuur ons een bericht
                  </h2>
                </div>
                <ContactForm />
              </motion.div>

              {/* ── Info column ── */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="lg:sticky lg:top-28"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center shrink-0">
                    <Phone size={17} className="text-white" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-slate-900"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Direct contact
                  </h2>
                </div>

                {/* Dark contact card */}
                <div className="rounded-3xl overflow-hidden mb-4" style={{ background: '#0a0f1e' }}>
                  {/* Top orange edge */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <div className="p-5 space-y-2">
                    {contactItems.map(({ icon: Icon, label, value, href, isExternal }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                      >
                        {href ? (
                          <a
                            href={href}
                            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors duration-300">
                              <Icon size={18} className="text-primary" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-0.5">{label}</p>
                              <p className="text-white font-semibold text-sm group-hover:text-primary transition-colors truncate">{value}</p>
                            </div>
                            <ArrowRight size={14} className="text-slate-600 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300 ml-auto shrink-0" />
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                              <Icon size={18} className="text-primary" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-0.5">{label}</p>
                              <p className="text-white font-semibold text-sm">{value}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom edge */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </div>

                {/* WhatsApp CTA — vivid orange gradient */}
                <motion.a
                  href="https://wa.me/5978318508"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.45 }}
                  className="group flex items-center justify-between w-full rounded-3xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #e55c00 0%, #f97015 45%, #ff9400 100%)' }}
                >
                  {/* Dot pattern overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.10]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '18px 18px' }}
                  />
                  {/* Corner highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[60px] pointer-events-none" />

                  <div className="relative z-10">
                    <p className="text-white font-bold text-base mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>
                      Liever direct chatten?
                    </p>
                    <p className="text-white/70 text-sm">We reageren binnen 1 uur</p>
                  </div>
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </motion.a>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
