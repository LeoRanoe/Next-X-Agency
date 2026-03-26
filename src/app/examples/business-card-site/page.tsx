'use client'

import { useState, useRef, FormEvent, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ChevronRight, Hammer, HardHat, Home, PaintBucket, ArrowUp } from 'lucide-react'
import { toast } from 'sonner'
import FloatingWhatsApp from '../_components/FloatingWhatsApp'

/* ─── SVG Logo ─── */
function KaderBouwLogo({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="2" y="2" width="44" height="44" rx="8" fill="#f97015" />
      <path d="M14 36V12h4l10 12-10 12h-4z" fill="white" />
      <rect x="28" y="12" width="6" height="24" rx="1" fill="white" opacity="0.7" />
      <rect x="12" y="10" width="24" height="3" rx="1.5" fill="white" opacity="0.4" />
    </svg>
  )
}

/* ─── Data ─── */
const services = [
  { icon: Home, title: 'Nieuwbouw', desc: 'Complete woningen en bedrijfspanden van ontwerp tot oplevering.' },
  { icon: PaintBucket, title: 'Renovatie', desc: 'Grondige verbouwingen die uw pand transformeren naar modern comfort.' },
  { icon: HardHat, title: 'Dakwerken', desc: 'Professionele dakconstructies, reparaties en isolatie.' },
  { icon: Hammer, title: 'Vloeren & Afwerking', desc: 'Betontegel-, hout- en terrazzovloeren vakkundig gelegd.' },
]

const projects = [
  { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80', title: 'Villa Zonnebloemstraat', cat: 'Nieuwbouw' },
  { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&q=80', title: 'Appartementencomplex Flora', cat: 'Nieuwbouw' },
  { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80', title: 'Kantoor Renovatie Centrum', cat: 'Renovatie' },
  { img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&q=80', title: 'Schoolgebouw Wanica', cat: 'Dakwerken' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80', title: 'Winkelcentrum Palm Village', cat: 'Vloeren' },
  { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80', title: 'Kantoorgebouw Hermitage', cat: 'Nieuwbouw' },
]

const stats = [
  { value: 150, suffix: '+', label: 'Projecten' },
  { value: 15, suffix: ' jr', label: 'Ervaring' },
  { value: 12, suffix: '', label: 'Teamleden' },
  { value: 98, suffix: '%', label: 'Klanttevredenheid' },
]

/* ─── Animated counter ─── */
function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    let start: number | null = null
    const duration = 1500
    function step(ts: number) {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-black text-white tabular-nums" style={{ fontFamily: 'var(--font-heading)' }}>
      {count}{suffix}
    </span>
  )
}

export default function KaderBouwPage() {
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const errs: Record<string, string> = {}
    if (!form.naam.trim()) errs.naam = 'Naam is verplicht'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Geldig e-mailadres vereist'
    if (!form.bericht.trim()) errs.bericht = 'Bericht is verplicht'
    return errs
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      toast.error('Vul alle verplichte velden correct in')
      return
    }
    setSubmitted(true)
    toast.success('Bericht verzonden! Wij nemen binnen 24 uur contact op.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ═══ HERO ═══ */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80"
          alt="Bouwplaats met kraan en steigers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <KaderBouwLogo size={48} />
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>KaderBouw NV</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] max-w-2xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Wij bouwen<br /><span className="text-[#f97015]">uw visie</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-lg mb-8 leading-relaxed">
              15+ jaar bouwervaring in Suriname. Van nieuwbouw tot complete renovaties — vakmanschap dat u kunt vertrouwen.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#f97015] text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30" style={{ fontFamily: 'var(--font-heading)' }}>
                Neem contact op <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#projecten" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                Onze projecten
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedNumber value={s.value} suffix={s.suffix} />
              <p className="text-sm text-slate-400 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ OVER ONS ═══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#f97015] mb-3 block">Over ons</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
              Gebouwd op <span className="text-[#f97015]">vakmanschap</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              KaderBouw NV is sinds 2009 een gevestigde naam in de Surinaamse bouwsector. Ons team van ervaren vaklieden en ingenieurs levert projecten op die generaties meegaan.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Van luxe woningen in Paramaribo tot commerciële panden in Wanica — wij combineren moderne technieken met lokale expertise voor een resultaat dat u trots maakt.
            </p>
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&q=80" alt="R. Kader" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-slate-900 text-sm">R. Kader</p>
                <p className="text-xs text-slate-500">Oprichter & Directeur</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80" alt="Constructiewerk" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -left-6 bg-[#f97015] text-white rounded-xl px-5 py-3 shadow-lg">
              <p className="text-2xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>15+</p>
              <p className="text-xs font-medium">Jaar Ervaring</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DIENSTEN ═══ */}
      <section className="py-20 bg-slate-50" id="diensten">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#f97015] mb-3 block">Onze diensten</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Wat wij doen</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.a key={svc.title} href="#contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#f97015]/40 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#f97015]/10 flex items-center justify-center mb-4 group-hover:bg-[#f97015] transition-colors">
                  <svc.icon className="w-6 h-6 text-[#f97015] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{svc.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECTEN ═══ */}
      <section className="py-20 lg:py-28" id="projecten">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#f97015] mb-3 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Recente projecten</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden aspect-[3/2] cursor-pointer">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f97015]">{p.cat}</span>
                  <h3 className="text-lg font-bold text-white mt-1" style={{ fontFamily: 'var(--font-heading)' }}>{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="py-20 bg-slate-50" id="contact">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#f97015] mb-3 block">Contact</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Neem contact op</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">Heeft u een bouwproject in gedachten? Neem vrijblijvend contact op voor een offerte of adviesgesprek.</p>
              <div className="space-y-4">
                <a href="tel:+5978523456" className="flex items-center gap-4 text-slate-700 hover:text-[#f97015] transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#f97015]/10 flex items-center justify-center group-hover:bg-[#f97015] transition-colors"><Phone className="w-5 h-5 text-[#f97015] group-hover:text-white transition-colors" /></div>
                  <span className="font-medium">+597 852 3456</span>
                </a>
                <a href="mailto:info@kaderbouw.sr" className="flex items-center gap-4 text-slate-700 hover:text-[#f97015] transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#f97015]/10 flex items-center justify-center group-hover:bg-[#f97015] transition-colors"><Mail className="w-5 h-5 text-[#f97015] group-hover:text-white transition-colors" /></div>
                  <span className="font-medium">info@kaderbouw.sr</span>
                </a>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-[#f97015]/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-[#f97015]" /></div>
                  <span className="font-medium">Indira Gandhiweg 72, Paramaribo</span>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                {[{ Icon: Instagram, label: 'Instagram' }, { Icon: Facebook, label: 'Facebook' }, { Icon: Linkedin, label: 'LinkedIn' }].map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-full bg-slate-200 hover:bg-[#f97015] flex items-center justify-center text-slate-600 hover:text-white transition-all"><Icon className="w-5 h-5" /></a>
                ))}
              </div>
            </div>
            <div>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-8 text-center border border-slate-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Bericht verzonden!</h3>
                  <p className="text-slate-500">Wij nemen binnen 24 uur contact met u op.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  {[
                    { key: 'naam', label: 'Naam *', type: 'text', placeholder: 'Uw volledige naam' },
                    { key: 'email', label: 'E-mail *', type: 'email', placeholder: 'uw@email.com' },
                    { key: 'telefoon', label: 'Telefoon', type: 'tel', placeholder: '+597 000 0000' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
                      <input type={type} value={form[key as keyof typeof form]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        className={`w-full rounded-xl border ${errors[key] ? 'border-red-400' : 'border-slate-200'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97015]/40 focus:border-[#f97015]`}
                        placeholder={placeholder} />
                      {errors[key] && <p className="text-xs text-red-500 mt-1">{errors[key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Bericht *</label>
                    <textarea value={form.bericht} onChange={e => setForm(f => ({ ...f, bericht: e.target.value }))} rows={4}
                      className={`w-full rounded-xl border ${errors.bericht ? 'border-red-400' : 'border-slate-200'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f97015]/40 focus:border-[#f97015] resize-none`}
                      placeholder="Vertel ons over uw project..." />
                    {errors.bericht && <p className="text-xs text-red-500 mt-1">{errors.bericht}</p>}
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#f97015] text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20" style={{ fontFamily: 'var(--font-heading)' }}>
                    Verstuur bericht
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <KaderBouwLogo size={32} />
            <span className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>KaderBouw NV</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#diensten" className="text-slate-400 hover:text-white transition-colors">Diensten</a>
            <a href="#projecten" className="text-slate-400 hover:text-white transition-colors">Projecten</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </nav>
          <p className="text-sm text-slate-500">© 2025 KaderBouw NV</p>
        </div>
      </footer>

      <a href="#" className="fixed bottom-6 left-6 z-30 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#f97015] transition-colors shadow-lg" aria-label="Naar boven"><ArrowUp className="w-4 h-4" /></a>
      <FloatingWhatsApp phone="5978523456" company="KaderBouw NV" message="Hallo, ik heb interesse in een bouwproject!" />
    </div>
  )
}

