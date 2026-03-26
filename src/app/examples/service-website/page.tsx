'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Menu, X, Smile, Sparkles, Wrench, Shield, Baby, Building2, Star, ChevronDown, ChevronRight, CalendarDays } from 'lucide-react'
import { toast } from 'sonner'
import FloatingWhatsApp from '../_components/FloatingWhatsApp'
import DemoFeatures from '../_components/DemoFeatures'

/* ─── SVG Logo ─── */
function DentaCareLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#0ea5e9" />
      <path d="M24 12c-3 0-5.5 1.5-7 4-1.5 2.5-1.5 5.5 0 9 1.5 3.5 4 7.5 7 11 3-3.5 5.5-7.5 7-11 1.5-3.5 1.5-6.5 0-9-1.5-2.5-4-4-7-4z" fill="white" />
      <path d="M21 22h6M24 19v6" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

const servicesList = [
  { icon: Smile, title: 'Cosmetische Tandheelkunde', desc: 'Whitening, veneers en esthetische behandelingen voor een stralende glimlach.' },
  { icon: Sparkles, title: 'Professionele Reiniging', desc: 'Dieptereiniging en polijsten door onze ervaren mondhygiënisten.' },
  { icon: Wrench, title: 'Restauratieve Zorg', desc: 'Vullingen, kronen en brugwerk met de nieuwste materialen.' },
  { icon: Shield, title: 'Preventieve Zorg', desc: 'Regelmatige controles en fluoridebehandelingen om problemen te voorkomen.' },
  { icon: Baby, title: 'Kindertandheelkunde', desc: 'Vriendelijke, geduldige zorg speciaal afgestemd op kinderen.' },
  { icon: Building2, title: 'Mondzorg op Locatie', desc: 'Bedrijfsbezoeken voor tandheelkundige screenings en voorlichting.' },
]

const team = [
  { name: 'Dr. Priya Sharma', role: 'Tandarts — Cosmetisch', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80' },
  { name: 'Dr. Michael Chen', role: 'Tandarts — Restauratief', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80' },
  { name: 'Lisa de Vries', role: 'Mondhygiënist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&h=400&fit=crop&q=80' },
  { name: 'Anand Persaud', role: 'Tandtechnicus', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80' },
]

const faqItems = [
  { q: 'Hoe vaak moet ik naar de tandarts?', a: 'Wij adviseren minimaal twee keer per jaar een controlebezoek. Bij specifieke klachten of behandelingen kan dit vaker nodig zijn.' },
  { q: 'Accepteren jullie verzekeringen?', a: 'Ja, wij werken samen met de meeste lokale zorgverzekeraars. Neem contact op met onze receptie voor specifieke informatie over uw dekking.' },
  { q: 'Wat moet ik meenemen naar mijn eerste afspraak?', a: 'Breng een geldig ID-bewijs, uw verzekeringsgegevens en eventuele eerdere röntgenfoto\'s mee. Vul het intakeformulier van tevoren in via onze website.' },
  { q: 'Bieden jullie noodgevallenzorg?', a: 'Ja. Tijdens kantooruren kunt u direct binnenlopen voor spoedeisende hulp. Buiten kantooruren bereikt u ons via het noodnummer op onze voicemail.' },
]

const openingHours = [
  { day: 'Maandag - Vrijdag', time: '08:00 – 17:00' },
  { day: 'Zaterdag', time: '09:00 – 13:00' },
  { day: 'Zondag', time: 'Gesloten' },
]

export default function DentaCarePage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', datum: '', tijd: '', bericht: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  // Scroll spy
  useEffect(() => {
    function onScroll() {
      const sections = ['home', 'diensten', 'team', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.naam.trim()) errs.naam = 'Verplicht'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Geldig e-mail vereist'
    if (!form.datum) errs.datum = 'Kies een datum'
    if (!form.tijd) errs.tijd = 'Kies een tijd'
    setErrors(errs)
    if (Object.keys(errs).length > 0) { toast.error('Vul alle verplichte velden in'); return }
    setSubmitted(true)
    toast.success('Afspraak aangevraagd! U ontvangt een bevestiging per e-mail.')
  }

  return (
    <div className="min-h-screen bg-white" id="home">
      {/* ═══ NAVBAR ═══ */}
      <nav className="sticky top-[49px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2.5">
            <DentaCareLogo size={34} />
            <span className="text-lg font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>DentaCare</span>
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                className={`text-sm font-medium transition-colors ${activeSection === l.href.slice(1) ? 'text-sky-500' : 'text-slate-600 hover:text-slate-900'}`}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 bg-sky-500 text-white text-sm font-bold rounded-lg hover:bg-sky-600 transition-colors">
              Afspraak maken
            </a>
          </div>
          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden border-t border-slate-100 bg-white">
              <div className="px-6 py-4 space-y-3">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-slate-700 hover:text-sky-500">{l.label}</a>
                ))}
                <a href="#contact" onClick={() => setMobileOpen(false)} className="block w-full text-center px-4 py-2.5 bg-sky-500 text-white text-sm font-bold rounded-lg">Afspraak maken</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 rounded-full text-xs font-bold text-sky-600 mb-6">
              <Star className="w-3.5 h-3.5" /> 4.9 Sterren — 200+ Recensies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[0.95] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Uw glimlach,<br /><span className="text-sky-500">onze prioriteit</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-md mb-8 leading-relaxed">
              Moderne tandheelkunde in het hart van Paramaribo. Ervaren specialisten, state-of-the-art apparatuur en een warm welkom voor elk gezinslid.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20" style={{ fontFamily: 'var(--font-heading)' }}>
                <CalendarDays className="w-4 h-4" /> Maak afspraak
              </a>
              <a href="tel:+5978001234" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-sky-500 hover:text-sky-600 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                <Phone className="w-4 h-4" /> Bel ons
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&q=80" alt="Moderne tandartspraktijk" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-lg border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {team.slice(0, 3).map((t, i) => <img key={i} src={t.img} alt={t.name} className="w-8 h-8 rounded-full border-2 border-white object-cover" />)}
                </div>
                <div><p className="text-xs font-bold text-slate-900">4 Specialisten</p><p className="text-[10px] text-slate-500">Altijd beschikbaar</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DIENSTEN ═══ */}
      <section className="py-20 bg-slate-50" id="diensten">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sky-500 mb-3 block">Diensten</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Onze specialisaties</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((svc, i) => (
              <motion.a key={svc.title} href="#contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                  <svc.icon className="w-6 h-6 text-sky-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{svc.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="py-20 lg:py-28" id="team">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sky-500 mb-3 block">Ons team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Maak kennis met onze specialisten</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>{t.name}</h3>
                  <p className="text-sm text-sky-500 font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sky-500 mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Veelgestelde vragen</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors">
                  {item.q}
                  <motion.div animate={{ rotate: expandedFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="py-20 lg:py-28" id="contact">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sky-500 mb-3 block">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Maak een afspraak</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">Bel ons of vul het formulier in. Wij bevestigen uw afspraak binnen 2 uur.</p>
            <div className="space-y-4 mb-8">
              <a href="tel:+5978001234" className="flex items-center gap-4 text-slate-700 hover:text-sky-500 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-500 transition-colors"><Phone className="w-5 h-5 text-sky-500 group-hover:text-white transition-colors" /></div>
                <span className="font-medium">+597 800 1234</span>
              </a>
              <a href="mailto:info@dentacare.sr" className="flex items-center gap-4 text-slate-700 hover:text-sky-500 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center group-hover:bg-sky-500 transition-colors"><Mail className="w-5 h-5 text-sky-500 group-hover:text-white transition-colors" /></div>
                <span className="font-medium">info@dentacare.sr</span>
              </a>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center"><MapPin className="w-5 h-5 text-sky-500" /></div>
                <span className="font-medium">Domineestraat 28, Paramaribo</span>
              </div>
            </div>
            {/* Opening hours */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}><Clock className="w-4 h-4 text-sky-500" /> Openingstijden</h3>
              {openingHours.map(h => (
                <div key={h.day} className="flex justify-between text-sm py-1.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-600">{h.day}</span>
                  <span className={`font-medium ${h.time === 'Gesloten' ? 'text-red-400' : 'text-slate-900'}`}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-8 text-center border border-slate-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Afspraak aangevraagd!</h3>
                <p className="text-slate-500">U ontvangt binnen 2 uur een bevestiging per e-mail.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>Afspraak plannen</h3>
                {[
                  { key: 'naam', label: 'Naam *', type: 'text', ph: 'Uw volledige naam' },
                  { key: 'email', label: 'E-mail *', type: 'email', ph: 'uw@email.com' },
                  { key: 'telefoon', label: 'Telefoon', type: 'tel', ph: '+597 000 0000' },
                ].map(({ key, label, type, ph }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
                    <input type={type} value={form[key as keyof typeof form]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className={`w-full rounded-xl border ${errors[key] ? 'border-red-400' : 'border-slate-200'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500`} placeholder={ph} />
                    {errors[key] && <p className="text-xs text-red-500 mt-1">{errors[key]}</p>}
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Datum *</label>
                    <input type="date" value={form.datum} onChange={e => setForm(f => ({ ...f, datum: e.target.value }))}
                      className={`w-full rounded-xl border ${errors.datum ? 'border-red-400' : 'border-slate-200'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500`} />
                    {errors.datum && <p className="text-xs text-red-500 mt-1">{errors.datum}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tijd *</label>
                    <select value={form.tijd} onChange={e => setForm(f => ({ ...f, tijd: e.target.value }))}
                      className={`w-full rounded-xl border ${errors.tijd ? 'border-red-400' : 'border-slate-200'} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 bg-white`}>
                      <option value="">Kies tijd</option>
                      {['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.tijd && <p className="text-xs text-red-500 mt-1">{errors.tijd}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Opmerking</label>
                  <textarea value={form.bericht} onChange={e => setForm(f => ({ ...f, bericht: e.target.value }))} rows={3}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 resize-none" placeholder="Beschrijf uw klacht of gewenste behandeling..." />
                </div>
                <button type="submit" className="w-full py-3 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  Afspraak aanvragen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <DentaCareLogo size={28} />
            <span className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>DentaCare Paramaribo</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            {navLinks.map(l => <a key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors">{l.label}</a>)}
          </nav>
          <p className="text-sm text-slate-500">© 2025 DentaCare. Alle rechten voorbehouden.</p>
        </div>
      </footer>

      <DemoFeatures features={['Scroll-spy navigatie (useEffect + IntersectionObserver)', 'Mobiel hamburger menu', 'FAQ accordion (AnimatePresence)', 'Afsprakformulier + validatie + toast', 'Team foto profielen', 'WhatsApp integratie']} />
      <FloatingWhatsApp phone="5978001234" company="DentaCare Paramaribo" message="Hallo, ik wil graag een afspraak maken!" />
    </div>
  )
}

