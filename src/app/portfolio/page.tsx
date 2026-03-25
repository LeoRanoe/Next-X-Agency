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
      <main className="bg-slate-950">
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
        <section className="pb-8 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm"
            >
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-white font-bold">Opmerking:</strong>{' '}
                Dit zijn illustratieve voorbeeldprojecten die laten zien wat wij kunnen bouwen.
                Wij zijn net gestart en bouwen ons portfolio op met echte klanten.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Projects grid ── */}
        <section className="py-16 lg:py-24 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className="group relative flex flex-col rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient header strip */}
                  <div className={`h-28 bg-linear-to-br ${project.accent} to-transparent relative`}>
                    {/* Mockup chrome dots */}
                    <div className="absolute top-5 left-5 flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
                    </div>
                    {/* Mockup content lines */}
                    <div className="absolute top-12 left-5 right-5 space-y-2">
                      <div className="h-1.5 rounded-full bg-slate-700/40 w-3/4" />
                      <div className="h-1.5 rounded-full bg-slate-700/30 w-1/2" />
                      <div className="h-1.5 rounded-full bg-slate-700/20 w-2/3" />
                    </div>
                    {/* Index */}
                    <span
                      className="absolute top-5 right-5 text-xs font-black text-primary/60 tracking-widest"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.index}
                    </span>
                    {/* Voorbeeldproject pill */}
                    <span className="absolute bottom-3 left-5 inline-flex items-center px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[9px] font-bold tracking-widest uppercase">
                      Voorbeeldproject
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-col flex-1 px-5 py-4">
                    <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-3">
                      {project.category}
                    </span>
                    <h3
                      className="text-base font-black text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
