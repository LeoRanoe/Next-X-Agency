import { memo } from 'react'
import Link from 'next/link'

function HeroSectionFn() {
  return (
    <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#050911]">
      {/* Blueprint grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-blueprint-grid" />

      {/* Floating technical annotations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <span className="absolute top-[20%] left-[5%] font-mono text-[10px] text-primary/30 rotate-12 hidden lg:block">
          ƒ(x) = ∑ (design + code)
        </span>
        <span className="absolute top-[15%] right-[10%] font-mono text-[10px] text-primary/30 -rotate-6 hidden lg:block">
          Δv = (p2 - p1) / t
        </span>
        <span className="absolute bottom-[25%] left-[15%] font-mono text-[10px] text-primary/20 hidden lg:block">
          [MATRIX_LOADED]
        </span>
      </div>

      {/* Animated SVG decorations */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        aria-hidden="true"
      >
        <path className="hero-sketch-path" d="M100,100 C300,50 500,150 700,100" fill="none" stroke="#f97015" strokeDasharray="4,4" strokeOpacity="0.2" strokeWidth="1" />
        <path className="hero-sketch-path" d="M1200,600 C1000,700 800,550 600,650" fill="none" stroke="#f97015" strokeDasharray="2,6" strokeOpacity="0.2" strokeWidth="1" />
        <circle cx="85%" cy="30%" fill="#f97015" opacity="0.05" r="100" style={{ filter: 'blur(40px)' }} />
        <circle cx="15%" cy="70%" fill="#f97015" opacity="0.05" r="80" style={{ filter: 'blur(30px)' }} />
        <g fill="rgba(249,112,21,0.35)" fontFamily="monospace" fontSize="10">
          <text x="50" y="250">GRID: A-14</text>
          <text x="50" y="270">SCALE: 1:100</text>
          <text x="1300" y="150">LAYER: 03</text>
          <text x="1300" y="170">OPACITY: 85%</text>
        </g>
        <path d="M720,390 L720,410 M710,400 L730,400" stroke="#f97015" strokeOpacity="0.5" strokeWidth="1" />
        <line stroke="#f97015" strokeOpacity="0.06" strokeWidth="1" x1="50%" x2="50%" y1="0" y2="100%" />
        <line stroke="#f97015" strokeOpacity="0.06" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%" />
      </svg>

      {/* Orange glow halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full pointer-events-none z-0"
        style={{ filter: 'blur(100px)' }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="relative inline-flex items-center gap-3 px-6 py-2 mb-12 cursor-default">
          <svg className="absolute inset-0 w-full h-full text-primary/30" preserveAspectRatio="none" viewBox="0 0 200 50" aria-hidden="true">
            <path d="M5,5 L195,5 L195,45 L5,45 Z" fill="none" stroke="currentColor" strokeDasharray="5,2" strokeWidth="1" />
            <path d="M0,0 L10,0 L0,10 Z" fill="currentColor" />
            <path d="M200,50 L190,50 L200,40 Z" fill="currentColor" />
          </svg>
          <span className="relative z-10 text-xl" role="img" aria-label="Suriname vlag">🇸🇷</span>
          <span className="relative z-10 text-xs font-bold font-mono uppercase tracking-[0.2em] text-primary">
            Surinaamse Tech Stack <span className="text-white/50">v1.0</span>
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-black tracking-tighter mb-8 max-w-6xl mx-auto relative"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', lineHeight: '0.9' }}
        >
          <span className="absolute -top-8 -left-8 text-xs font-mono text-primary/40 hidden lg:block" style={{ transform: 'rotate(-15deg)', fontWeight: 400 }}>
            &lt;h1&gt;Define Future&lt;/h1&gt;
          </span>
          <span className="block text-white glitch-text" data-text="Uw digitale succes">
            Uw digitale succes
          </span>
          <span className="relative inline-block mt-4">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -skew-x-12 scale-110" style={{ filter: 'blur(4px)' }} />
            <span
              className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ffb347] via-[#f97015] to-[#ff8c42] pb-2"
              style={{ filter: 'drop-shadow(0 0 15px rgba(249,112,21,0.5))', display: 'inline-block' }}
            >
              begint hier
            </span>
            <svg className="absolute left-0 w-full overflow-visible" style={{ bottom: '-1rem', height: '2rem' }} preserveAspectRatio="none" viewBox="0 0 100 15" aria-hidden="true">
              <path d="M0 10 Q 50 15 100 5" fill="none" stroke="#f97015" strokeLinecap="round" strokeWidth="4" style={{ filter: 'drop-shadow(0 0 5px #f97015)' }} />
              <path d="M5 13 Q 55 18 95 8" fill="none" stroke="#ffffff" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="1" />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed font-mono border-l-2 border-primary/40 pl-6 text-left md:text-center md:border-l-0 md:pl-0 relative">
          <span className="text-primary font-bold mr-2">&gt;_</span>
          NextX Agency helpt Surinaamse bedrijven professioneel online te groeien —{' '}
          <span className="text-white font-medium bg-primary/10 px-1 border-b border-dashed border-primary">
            snel, betaalbaar &amp; op maat.
          </span>
          <span className="animate-pulse text-primary font-bold ml-0.5">|</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full sm:w-auto justify-center mb-24 relative z-20">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-200 focus:outline-none min-h-[52px]"
          >
            <span
              className="absolute inset-0 bg-primary transform skew-x-[-10deg] group-hover:skew-x-[-5deg] transition-all"
              style={{ boxShadow: '0 0 20px rgba(249,112,21,0.4), 0 0 40px rgba(249,112,21,0.15)' }}
            />
            <span className="font-mono uppercase tracking-wider relative z-10 flex items-center gap-2">
              Start Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-gray-300 transition-all duration-200 bg-transparent focus:outline-none relative group overflow-hidden min-h-[52px]"
          >
            <span className="absolute inset-0 border border-gray-600 skew-x-[-10deg] group-hover:border-primary transition-colors" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary skew-x-[-10deg]" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary skew-x-[-10deg]" />
            <span className="absolute inset-0 w-full h-full bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-[-10deg]" />
            <span className="font-mono uppercase tracking-wider relative z-10 group-hover:text-white transition-colors">
              Bekijk services
            </span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-medium text-gray-500 font-mono border-t border-gray-800/50 pt-8 w-full max-w-4xl">
          {[
            { label: 'LOC: PARAMARIBO [SR]', delay: '0s' },
            { label: 'SPEED: OPTIMIZED', delay: '0.5s' },
            { label: 'COST: TRANSPARENT', delay: '1s' },
          ].map(({ label, delay }) => (
            <div key={label} className="flex items-center gap-2 group">
              <span className="w-2 h-2 bg-primary animate-pulse" style={{ borderRadius: 0, animationDelay: delay }} />
              <span className="group-hover:text-primary transition-colors">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-[10%] w-px h-8 bg-primary/40">
        <span className="absolute -top-4 -left-2 text-[8px] font-mono text-primary/60">01</span>
      </div>
      <div className="absolute bottom-0 right-[10%] w-px h-8 bg-primary/40">
        <span className="absolute -top-4 -left-2 text-[8px] font-mono text-primary/60">02</span>
      </div>
      <div className="absolute bottom-0 left-1/2 w-px h-12 bg-primary/60" style={{ boxShadow: '0 0 10px rgba(249,112,21,0.5)' }} />
    </header>
  )
}

export const HeroSection = memo(HeroSectionFn)