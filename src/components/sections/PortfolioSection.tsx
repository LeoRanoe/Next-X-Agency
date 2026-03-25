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
    title: 'Shop NextX',
    category: 'E-Commerce',
    description:
      'Moderne webshop met productoverzicht, winkelwagen en een soepele checkout ervaring — volledig op maat gebouwd voor de Surinaamse markt.',
    tags: ['E-Commerce', 'Webshop', 'Next.js'],
    accent: 'from-primary/30 via-orange-500/10',
    href: 'https://www.shop-nextx.com/',
  },
  {
    index: '02',
    title: 'Indef Design',
    category: 'Portfolio Website',
    description:
      'Strak creatief portfolio voor een design studio — modern, snel en volledig responsive met een unieke visuele stijl.',
    tags: ['Portfolio', 'Web Design', 'Branding'],
    accent: 'from-primary/20 via-orange-400/10',
    href: 'https://www.indefdesign.com/',
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
              className="group relative flex flex-col rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/40 transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.98]"
            >
              {/* Clickable overlay */}
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-30"
                aria-label={`View ${project.title}`}
              />

              {/* Browser mockup */}
              <div className="relative bg-slate-900 overflow-hidden" style={{ height: '280px' }}>
                {/* Chrome bar */}
                <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-800 border-b border-slate-700/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <div className="ml-2 flex-1 rounded-md bg-slate-700/80 h-5 flex items-center px-2.5 gap-1.5">
                    <svg className="w-2.5 h-2.5 text-emerald-400/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-[9px] text-slate-400 font-mono truncate">{project.href.replace('https://', '').replace('www.', '')}</span>
                  </div>
                </div>

                {/* Live website preview via iframe - Desktop view */}
                <div className="absolute top-11 left-0 w-full overflow-hidden" style={{ height: 'calc(100% - 44px)' }}>
                  <iframe
                    src={project.href}
                    title={project.title}
                    className="bg-white pointer-events-none origin-top-left"
                    style={{
                      border: 'none',
                      height: '1080px',
                      width: '1920px',
                      transform: 'scale(0.33)',
                      transformOrigin: 'top left',
                    }}
                  />
                </div>

                {/* Large ghost index */}
                <span
                  className="absolute bottom-1 right-3 text-7xl sm:text-6xl font-black text-white/[0.06] sm:text-white/4 leading-none select-none pointer-events-none z-10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.index}
                </span>

                {/* Live project pill */}
                <span className="absolute top-12 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold tracking-widest uppercase z-10 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>

                {/* Bottom orange glow line */}
                <div className="h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

                {/* Gradient overlay for richer visual on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent sm:hidden pointer-events-none z-10" />
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
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(project.href, '_blank')
                  }}
                  className="relative z-40 text-xs font-bold text-slate-500 group-hover:text-primary transition-colors duration-200 tracking-wide uppercase flex items-center gap-1.5"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Bekijk live
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    →
                  </span>
                </button>
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
