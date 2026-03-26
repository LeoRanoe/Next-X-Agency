'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Check } from 'lucide-react'

interface DemoFeaturesProps {
  features: string[]
}

export default function DemoFeatures({ features }: DemoFeaturesProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="w-64 rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="flex items-center justify-between bg-slate-900 px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-xs font-bold text-white tracking-wide uppercase">Key Features</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Sluit features paneel"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <ul className="p-3 space-y-1.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="px-4 pb-3">
              <p className="text-[10px] text-slate-400">Demo door Next‑X Agency</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Bekijk key features"
        className="flex items-center gap-2 rounded-full bg-slate-900 pl-3 pr-4 py-2 text-white shadow-lg hover:bg-slate-700 transition-colors group"
      >
        <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
        <span className="text-xs font-bold tracking-wide">Key Features</span>
      </button>
    </div>
  )
}
