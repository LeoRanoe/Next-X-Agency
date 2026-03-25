'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CTABanner } from '@/components/sections/CTABanner'
import {
  fadeInUp,
  blurFadeIn,
  staggerContainerFast,
  clipRevealUp,
} from '@/lib/animationUtils'

const projects = [
  {
    index: '01',
    title: 'Tjin Catering',
    category: 'Restaurant Website',
    description: 'Complete restaurant website met digitaal menu, openingstijden en reserveringslink.',
    tags: ['Web Design', 'Restaurant'],
    accent: 'from-primary/30 via-orange-500/10',
  },
  {
    index: '02',
    title: 'RP Trading',
    category: 'E-Commerce',
    description: 'Webshop met productcatalogus, winkelwagen en Stripe betalingsintegratie.',
    tags: ['E-Commerce', 'Webshop'],
    accent: 'from-primary/20 via-orange-400/10',
  },
  {
    index: '03',
    title: 'Suri Style Boutique',
    category: 'E-Commerce',
    description: 'Mode webshop met klantaccounts, wishlist en order tracking systeem.',
    tags: ['E-Commerce', 'Fashion'],
    accent: 'from-primary/25 via-orange-500/10',
  },
  {
    index: '04',
    title: 'Green Garden Landscaping',
    category: 'Service Website',
    description: 'Multi-page service website met portfolio galerij en contactformulier.',
    tags: ['Web Design', 'Services'],
    accent: 'from-primary/20 via-orange-300/10',
  },
  {
    index: '05',
    title: 'Studio Kroon',
    category: 'Portfolio Website',
    description: "Fotografen portfolio met galerij, project detail pagina's en over mij sectie.",
    tags: ['Portfolio', 'Fotografie'],
    accent: 'from-primary/30 via-orange-400/10',
  },
  {
    index: '06',
    title: 'FreshBite Delivery',
    category: 'Brand Identity',
    description: 'Complete visuele identiteit — logo, social media templates en flyer designs.',
    tags: ['Graphic Design', 'Branding'],
    accent: 'from-primary/20 via-orange-500/10',
  },
] as const

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, #f97015 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          </div>

          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            animate="visible"
            className="relative max-w-6xl mx-auto px-6"
          >
            <motion.div
              variants={blurFadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Ons Werk
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                variants={clipRevealUp}
                className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Recente
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                variants={clipRevealUp}
                className="text-5xl md:text-7xl font-black tracking-tight text-primary leading-[0.95]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Projecten.
              </motion.h1>
            </div>

            <motion.p variants={fadeInUp} className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Een selectie van recente projecten. Elk project begint als template
              en wordt volledig gepersonaliseerd naar de wensen van de klant.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Disclaimer banner ── */}
        <section className="pb-8 bg-white pt-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-primary/5 border border-primary/15 text-sm"
            >
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-bold">Opmerking:</strong>{' '}
                Dit zijn illustratieve voorbeeldprojecten die laten zien wat wij kunnen bouwen.
                Wij zijn net gestart en bouwen ons portfolio op met echte klanten.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Projects grid ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  variants={fadeInUp}
                  className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Browser mockup */}
                  <div className="relative bg-slate-900 overflow-hidden">
                    {/* Chrome bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-800 border-b border-slate-700/50">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                      <div className="ml-2 flex-1 rounded-md bg-slate-700/80 h-5 flex items-center px-2.5 gap-1.5">
                        <svg className="w-2.5 h-2.5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <span className="text-[9px] text-slate-500 font-mono truncate">nextx.agency/werk</span>
                      </div>
                    </div>

                    {/* Mockup website preview */}
                    <div className="px-4 pt-4 pb-5 space-y-2.5">
                      {/* Nav bar */}
                      <div className="flex items-center justify-between">
                        <div className="h-2 rounded bg-primary/50 w-10" />
                        <div className="flex gap-2">
                          <div className="h-1.5 rounded bg-slate-700 w-6" />
                          <div className="h-1.5 rounded bg-slate-700 w-6" />
                          <div className="h-1.5 rounded bg-slate-700 w-6" />
                          <div className="h-5 rounded bg-primary/30 w-10" />
                        </div>
                      </div>
                      {/* Hero block */}
                      <div className="rounded-lg bg-slate-800 p-3 mt-1">
                        <div className="h-2.5 rounded bg-white/20 w-3/5 mb-2" />
                        <div className="h-1.5 rounded bg-white/10 w-4/5 mb-1" />
                        <div className="h-1.5 rounded bg-white/10 w-2/3 mb-3" />
                        <div className="h-5 rounded bg-primary/40 w-20" />
                      </div>
                      {/* Content blocks */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-8 rounded bg-slate-800" />
                        <div className="h-8 rounded bg-slate-800" />
                        <div className="h-8 rounded bg-slate-800 border border-primary/20" />
                      </div>
                    </div>

                    {/* Large ghost index */}
                    <span
                      className="absolute bottom-1 right-3 text-6xl font-black text-white/4 leading-none select-none pointer-events-none"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.index}
                    </span>

                    {/* Voorbeeldproject pill */}
                    <span className="absolute top-12 right-3 inline-flex items-center px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[9px] font-bold tracking-widest uppercase">
                      Voorbeeld
                    </span>

                    {/* Bottom orange glow line */}
                    <div className="h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5 bg-white">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/8 text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/15">
                        {project.category}
                      </span>
                      <span
                        className="text-xs font-black text-slate-200 tracking-widest"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {project.index}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-primary transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover accent bottom */}
                  <div className="h-0.5 bg-linear-to-r from-primary/0 via-primary/20 to-primary/0 group-hover:via-primary transition-all duration-300" />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
