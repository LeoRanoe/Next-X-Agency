'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  fadeInUp,
  blurFadeIn,
  staggerContainerFast,
  clipRevealUp,
} from '@/lib/animationUtils'

const featured = [
  {
    index: '01',
    title: 'Tjin Catering',
    category: 'Restaurant Website',
    description:
      'Complete restaurant website met digitaal menu, openingstijden en reserveringslink.',
    tags: ['Web Design', 'Restaurant'],
    accent: 'from-primary/30 via-orange-500/10',
  },
  {
    index: '02',
    title: 'RP Trading',
    category: 'E-Commerce',
    description:
      'Webshop met productcatalogus, winkelwagen en Stripe betalingsintegratie.',
    tags: ['E-Commerce', 'Webshop'],
    accent: 'from-primary/20 via-orange-400/10',
  },
  {
    index: '03',
    title: 'Suri Style Boutique',
    category: 'E-Commerce',
    description:
      'Mode webshop met klantaccounts, wishlist en order tracking systeem.',
    tags: ['E-Commerce', 'Fashion'],
    accent: 'from-primary/25 via-orange-500/10',
  },
  {
    index: '04',
    title: 'FreshBite Delivery',
    category: 'Brand Identity',
    description:
      'Complete visuele identiteit — logo, social media templates en flyer designs.',
    tags: ['Graphic Design', 'Branding'],
    accent: 'from-primary/20 via-orange-300/10',
  },
] as const

export function PortfolioSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Top edge glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #f97015 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <motion.div
            variants={blurFadeIn}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Ons Werk
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="overflow-hidden">
                <motion.h2
                  variants={clipRevealUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[0.95]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Recente
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  variants={clipRevealUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-primary leading-[0.95]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Projecten.
                </motion.h2>
              </div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm"
            >
              Van webshops tot restaurant sites — elk project gebouwd met zorg,
              snelheid en resultaat.
            </motion.p>
          </div>
        </motion.div>

        {/* Project cards grid */}
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {featured.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="group relative flex flex-col rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient header strip */}
              <div
                className={`h-28 bg-linear-to-br ${project.accent} to-transparent relative flex items-end px-6 pb-4`}
              >
                {/* Mockup chrome lines */}
                <div className="absolute top-5 left-6 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
                </div>
                <div className="absolute top-10 left-6 right-6 space-y-1.5">
                  <div className="h-1.5 rounded-full bg-slate-700/40 w-3/4" />
                  <div className="h-1.5 rounded-full bg-slate-700/30 w-1/2" />
                  <div className="h-1.5 rounded-full bg-slate-700/20 w-2/3" />
                </div>

                {/* Index */}
                <span
                  className="absolute top-5 right-6 text-xs font-black text-primary/60 tracking-widest"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.index}
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-col flex-1 px-6 py-5">
                {/* Category pill */}
                <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-3">
                  {project.category}
                </span>

                <h3
                  className="text-lg font-black text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
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

              {/* Hover accent line */}
              <div className="h-px mx-6 bg-slate-800 group-hover:bg-primary/30 transition-colors duration-300" />
              <div className="px-6 py-4">
                <Link
                  href="/portfolio"
                  className="text-xs font-bold text-slate-500 group-hover:text-primary transition-colors duration-200 tracking-wide uppercase flex items-center gap-1.5"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Bekijk project
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-800"
        >
          <p className="text-slate-400 text-sm">
            Bekijk alle{' '}
            <span className="text-white font-bold">6 projecten</span> in ons
            portfolio.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-bold tracking-wide hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-primary/20"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Bekijk alle projecten
            <span>→</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom edge glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
    </section>
  )
}
