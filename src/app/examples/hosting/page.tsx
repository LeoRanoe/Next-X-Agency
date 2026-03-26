'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Server, HardDrive, Globe, Shield, Activity, Upload, Download, Clock, RefreshCw, ChevronRight, CheckCircle2, AlertTriangle, Loader2, Cpu, MemoryStick, Wifi, Gauge } from 'lucide-react'
import DemoFeatures from '../_components/DemoFeatures'
import { toast } from 'sonner'

/* ─── Logo ─── */
function HostingLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#0ea5e9" />
      <rect x="12" y="12" width="24" height="6" rx="2" fill="white" />
      <rect x="12" y="22" width="24" height="6" rx="2" fill="white" opacity="0.7" />
      <rect x="12" y="32" width="24" height="6" rx="2" fill="white" opacity="0.4" />
      <circle cx="32" cy="15" r="1.5" fill="#22c55e" />
      <circle cx="32" cy="25" r="1.5" fill="#22c55e" />
      <circle cx="32" cy="35" r="1.5" fill="#eab308" />
    </svg>
  )
}

const uptimeData = Array.from({ length: 24 }, (_, i) => ({
  uur: `${i}:00`,
  responstijd: Math.floor(45 + Math.random() * 30 + (i > 10 && i < 14 ? 20 : 0)),
  bezoekers: Math.floor(20 + Math.random() * 80 + (i > 8 && i < 18 ? 60 : 0)),
}))

const services = [
  { name: 'Webserver (Nginx)', status: 'online', uptime: '99.98%', icon: Globe },
  { name: 'Database (MySQL)', status: 'online', uptime: '99.95%', icon: HardDrive },
  { name: 'SSL Certificaat', status: 'online', uptime: 'Geldig tot 2026', icon: Shield },
  { name: 'Mail Server (SMTP)', status: 'online', uptime: '99.90%', icon: Activity },
  { name: 'CDN (Cloudflare)', status: 'online', uptime: '100%', icon: Wifi },
  { name: 'Backup Service', status: 'warning', uptime: 'Laatste: 6u geleden', icon: Upload },
]

const plans = [
  { name: 'Starter', price: 'SRD 49', features: ['5 GB SSD', '1 Website', '10 GB Bandbreedte', 'Gratis SSL', 'Email support'], current: false },
  { name: 'Business', price: 'SRD 99', features: ['25 GB SSD', '5 Websites', 'Onbeperkt bandbreedte', 'Gratis SSL + CDN', 'Dagelijkse backup', 'Priority support'], current: true },
  { name: 'Enterprise', price: 'SRD 199', features: ['100 GB NVMe', 'Onbeperkt websites', 'Onbeperkt bandbreedte', 'Gratis SSL + CDN', 'Uurlijkse backup', '24/7 Telefoon support', 'Dedicated IP'], current: false },
]

const backups = [
  { date: '15 Dec 2025 · 03:00', size: '2.4 GB', type: 'Automatisch', status: 'success' },
  { date: '14 Dec 2025 · 03:00', size: '2.4 GB', type: 'Automatisch', status: 'success' },
  { date: '13 Dec 2025 · 14:22', size: '2.3 GB', type: 'Handmatig', status: 'success' },
  { date: '13 Dec 2025 · 03:00', size: '2.3 GB', type: 'Automatisch', status: 'success' },
  { date: '12 Dec 2025 · 03:00', size: '2.3 GB', type: 'Automatisch', status: 'failed' },
]

export default function HostingPage() {
  const [backupLoading, setBackupLoading] = useState(false)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [confirmRestart, setConfirmRestart] = useState(false)

  const handleBackup = () => {
    setBackupLoading(true)
    setTimeout(() => {
      setBackupLoading(false)
      toast.success('Backup succesvol aangemaakt!', { description: 'Nieuwste backup: nu · 2.4 GB' })
    }, 2500)
  }

  const handleRestart = () => {
    setConfirmRestart(false)
    toast.success('Server herstart geïnitieerd', { description: 'Uw website is binnen 30 seconden weer online.' })
  }

  const cpuUsage = 34
  const ramUsage = 62
  const diskUsage = 48
  const bandwidthUsage = 27

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ═══ HEADER ═══ */}
      <header className="sticky top-10 z-20 bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HostingLogo size={28} />
            <div className="hidden sm:block">
              <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Hosting Panel</span>
              <span className="text-[10px] text-slate-400 block -mt-0.5">mijnbedrijf.sr</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Alle systemen online
            </span>
            <button onClick={() => setShowUpgrade(true)} className="px-3 py-1.5 bg-sky-500 text-white text-xs font-bold rounded-lg hover:bg-sky-600 transition-colors hidden sm:block">
              Upgrade Plan
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* ═══ RESOURCE METERS ═══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'CPU', value: cpuUsage, icon: Cpu, color: '#0ea5e9' },
            { label: 'RAM', value: ramUsage, icon: MemoryStick, color: '#8b5cf6' },
            { label: 'Opslag', value: diskUsage, icon: HardDrive, color: '#f59e0b' },
            { label: 'Bandbreedte', value: bandwidthUsage, icon: Gauge, color: '#10b981' },
          ].map(r => (
            <div key={r.label} className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <r.icon className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">{r.label}</span>
                </div>
                <span className="text-lg font-black text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>{r.value}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${r.value}%` }} transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full" style={{ backgroundColor: r.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* ═══ CHARTS ═══ */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 text-sm mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Responstijd (ms)</h3>
            <p className="text-xs text-slate-400 mb-4">Afgelopen 24 uur · Gem. 62ms</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={uptimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="uur" fontSize={10} tickLine={false} axisLine={false} interval={3} />
                  <YAxis fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '11px' }} />
                  <Area type="monotone" dataKey="responstijd" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.1} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 text-sm mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Bezoekers</h3>
            <p className="text-xs text-slate-400 mb-4">Afgelopen 24 uur · Totaal: 1.240</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={uptimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="uur" fontSize={10} tickLine={false} axisLine={false} interval={3} />
                  <YAxis fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '11px' }} />
                  <Area type="monotone" dataKey="bezoekers" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ═══ SERVICES + ACTIONS ═══ */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>Services Status</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {services.map(s => (
                <div key={s.name} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50/50 transition-colors">
                  <s.icon className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-900 flex-1">{s.name}</span>
                  <span className="text-xs text-slate-500">{s.uptime}</span>
                  <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${s.status === 'online' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${s.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    {s.status === 'online' ? 'Online' : 'Aandacht'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <button onClick={handleBackup} disabled={backupLoading}
              className="w-full bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow text-left disabled:opacity-70">
              <div className="flex items-center gap-3">
                {backupLoading ? <Loader2 className="w-5 h-5 text-sky-500 animate-spin" /> : <Upload className="w-5 h-5 text-sky-500" />}
                <div>
                  <p className="font-bold text-sm text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                    {backupLoading ? 'Backup maken...' : 'Maak backup'}
                  </p>
                  <p className="text-xs text-slate-500">Handmatige server backup starten</p>
                </div>
              </div>
            </button>
            <button onClick={() => setConfirmRestart(true)}
              className="w-full bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow text-left">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="font-bold text-sm text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>Herstart server</p>
                  <p className="text-xs text-slate-500">~30 sec downtime</p>
                </div>
              </div>
            </button>
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-slate-400" />
                <p className="font-bold text-sm text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>Uptime</p>
              </div>
              <p className="text-3xl font-black text-green-600" style={{ fontFamily: 'var(--font-heading)' }}>99.97%</p>
              <p className="text-xs text-slate-500 mt-1">Laatste 30 dagen · 13 min downtime</p>
            </div>
          </div>
        </div>

        {/* ═══ BACKUPS ═══ */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>Recente backups</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {backups.map((b, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 text-sm">
                {b.status === 'success' ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <AlertTriangle className="w-4 h-4 text-red-500" />}
                <span className="text-slate-900 flex-1">{b.date}</span>
                <span className="text-xs text-slate-500">{b.size}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${b.type === 'Handmatig' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-600'}`}>{b.type}</span>
                <button onClick={() => toast.success('Restore gestart vanuit backup ' + b.date)}
                  className="text-xs text-sky-600 hover:underline flex items-center gap-0.5">
                  <Download className="w-3 h-3" /> Restore
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ CONFIRM RESTART ═══ */}
      <AnimatePresence>
        {confirmRestart && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setConfirmRestart(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 text-center mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Server herstarten?</h3>
              <p className="text-sm text-slate-500 text-center mb-6">Uw website zal ongeveer 30 seconden offline zijn. Alle actieve verbindingen worden verbroken.</p>
              <div className="flex gap-3">
                <button onClick={() => setConfirmRestart(false)} className="flex-1 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl text-sm hover:bg-slate-200 transition-colors">Annuleren</button>
                <button onClick={handleRestart} className="flex-1 py-2.5 bg-amber-500 text-white font-bold rounded-xl text-sm hover:bg-amber-600 transition-colors">Herstarten</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ UPGRADE MODAL ═══ */}
      <AnimatePresence>
        {showUpgrade && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setShowUpgrade(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-3xl w-full shadow-2xl max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Kies uw plan</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {plans.map(p => (
                  <div key={p.name} className={`rounded-xl p-5 border-2 ${p.current ? 'border-sky-500 bg-sky-50' : 'border-slate-200'} relative`}>
                    {p.current && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-sky-500 text-white text-[10px] font-bold rounded-full">Huidig plan</span>}
                    <h4 className="font-bold text-slate-900 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{p.name}</h4>
                    <p className="text-2xl font-black text-slate-900 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{p.price}<span className="text-sm font-normal text-slate-500">/mnd</span></p>
                    <ul className="space-y-2 mb-4">
                      {p.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{f}</li>
                      ))}
                    </ul>
                    <button onClick={() => { setShowUpgrade(false); toast.success(`${p.name} plan ${p.current ? 'is uw huidige plan' : 'upgrade aangevraagd!'}`) }}
                      className={`w-full py-2 text-sm font-bold rounded-lg transition-colors ${p.current ? 'bg-slate-200 text-slate-600' : 'bg-sky-500 text-white hover:bg-sky-600'}`}>
                      {p.current ? 'Huidig' : 'Upgrade'} <ChevronRight className="w-3.5 h-3.5 inline" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><HostingLogo size={20} /><span className="text-xs font-bold text-white">Hosting Control Panel — Demo</span></div>
          <p className="text-xs text-slate-500">Powered by Next‑X Agency · Server data gesimuleerd</p>
        </div>
      </footer>

      <DemoFeatures features={['Resource meters (CPU/RAM/Disk/Bandbreedte)', 'Recharts grafieken (responstijd & bezoekers)', 'Services status monitor', 'Backup knop met laadstatus', 'Herstart bevestigingsdialog', 'Plan upgrade modal (3 tiers)', 'Restore per backup-rij']} />
    </div>
  )
}
