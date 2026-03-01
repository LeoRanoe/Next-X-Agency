import { memo } from 'react'

const features = [
  {
    label: 'SPEED_V1.0',
    title: 'Snel Geleverd',
    lines: [
      '> Executing optimized workflows...',
      '> Delivery time: Minimal.',
      '> Quality loss: 0%.',
    ],
    icon: (
      <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#f97015" strokeOpacity="0.2" strokeWidth="4" />
      </svg>
    ),
  },
  {
    label: 'COST_EFFICIENCY',
    title: 'Smart Budget',
    lines: [
      '> Smart Tech Integration.',
      '> Premium output.',
      '> Rate: Competitive.',
    ],
    icon: (
      <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <rect height="16" rx="2" width="20" x="2" y="4" />
        <line x1="12" x2="12" y1="2" y2="4" />
        <line x1="12" x2="12" y1="20" y2="22" />
        <path d="M8 12h.01M16 12h.01" strokeWidth="3" />
      </svg>
    ),
  },
  {
    label: 'DESIGN_CORE',
    title: 'Custom Design',
    lines: [
      '> Data-driven aesthetics.',
      '> Brand Identity Match: 100%.',
      '> Target: Locked.',
    ],
    icon: (
      <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
      </svg>
    ),
  },
  {
    label: 'NET_LOCAL',
    title: 'Lokaal Netwerk',
    lines: [
      '> Root: Paramaribo/SR.',
      '> Perspective: Global.',
      '> Connectivity: High.',
    ],
    icon: (
      <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 13a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
        <path d="M5 5a10 10 0 0 1 14 0" />
      </svg>
    ),
  },
] as const

function WhySectionFn() {
  return (
    <section className="py-24 relative bg-[#0B1120] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-slate opacity-50 pointer-events-none" />

      {/* Thin construction lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <span className="absolute top-24 left-10 font-mono text-[10px] text-primary/40 hidden lg:block select-none">GRID_REF_X45</span>
        <div className="absolute bottom-20 right-0 w-2/3 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <span
            className="absolute -top-8 left-1/2 -translate-x-1/2 -rotate-6 text-primary text-xl select-none hidden md:block"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            Why choose us?
          </span>
          <div className="inline-block border-2 border-gray-800 bg-black px-4 py-1 relative">
            <span className="font-mono text-white text-sm tracking-widest uppercase">AGENCY_MODULE</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight font-mono">
            LOGIC_FLOW: <span className="text-primary">NextX</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* SVG connectors between cards (desktop) */}
          <svg
            className="hidden lg:block absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 pointer-events-none z-0"
            style={{ overflow: 'visible' }}
            aria-hidden="true"
          >
            <path className="scribble-path" d="M260 40 C 290 40, 310 40, 340 40" fill="none" stroke="#f97015" strokeDasharray="5,5" strokeWidth="2" />
            <circle cx="300" cy="40" r="4" fill="#0B1120" stroke="#f97015" strokeWidth="2" />
            <path className="scribble-path" d="M570 40 C 600 40, 620 40, 650 40" fill="none" stroke="#f97015" strokeDasharray="5,5" strokeWidth="2" />
            <circle cx="610" cy="40" r="4" fill="#0B1120" stroke="#f97015" strokeWidth="2" />
            <path className="scribble-path" d="M880 40 C 910 40, 930 40, 960 40" fill="none" stroke="#f97015" strokeDasharray="5,5" strokeWidth="2" />
            <circle cx="920" cy="40" r="4" fill="#0B1120" stroke="#f97015" strokeWidth="2" />
          </svg>

          {features.map((feature) => (
            <div
              key={feature.label}
              className="group sketch-card p-6 transition-all duration-300 hover:-translate-y-2 z-10 relative"
            >
              {/* Technical label tab */}
              <div className="absolute -top-3 left-4 bg-[#0B1120] px-2 technical-label border border-primary/30">
                {feature.label}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-mono">
                {feature.lines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </p>

              {/* Corner accent */}
              <span className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const WhySection = memo(WhySectionFn)