'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin, Phone, Utensils, Leaf, Flame, Fish, IceCreamCone, Star, Users, CalendarDays, ChevronDown, ChevronUp } from 'lucide-react'
import { toast } from 'sonner'
import FloatingWhatsApp from '../_components/FloatingWhatsApp'

/* ─── Logo ─── */
function WarungLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#15803d" />
      <path d="M24 12C18 18 14 26 24 36C34 26 30 18 24 12Z" fill="white" opacity="0.9" />
      <ellipse cx="24" cy="34" rx="8" ry="3" fill="white" opacity="0.3" />
    </svg>
  )
}

type MenuItem = { name: string; desc: string; price: string; img: string; spicy?: boolean; vegan?: boolean; popular?: boolean }

const menuCategories: Record<string, MenuItem[]> = {
  'Hoofdgerechten': [
    { name: 'Nasi Goreng Special', desc: 'Gebakken rijst met kip, garnalen, ei, atjar en sambal.', price: 'SRD 85', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop&q=80', spicy: true, popular: true },
    { name: 'Roti Kip Masala', desc: 'Zachte roti met langzaam gegaarde kip in masala saus, kousenband en aardappel.', price: 'SRD 95', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&q=80', popular: true },
    { name: 'Bami Goreng', desc: 'Gebakken noedels met groenten, kip en zoete sojasaus.', price: 'SRD 80', img: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?w=400&h=300&fit=crop&q=80' },
    { name: 'Moksi Alesi', desc: 'Gemengde rijst met pom, kip, zoutvlees en bakkeljauw.', price: 'SRD 105', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=80', popular: true },
  ],
  'Vis & Seafood': [
    { name: 'Pom Vis', desc: 'Oven-gebakken pomtayer met verse vis en kruiden.', price: 'SRD 110', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&q=80' },
    { name: 'Garnalen Curry', desc: 'Rijke kokos curry met jumbo garnalen en rijst.', price: 'SRD 125', img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop&q=80', spicy: true },
    { name: 'Gegrilde Tilapia', desc: 'Hele tilapia met citroen, knoflook en verse kruiden.', price: 'SRD 115', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&q=80' },
  ],
  'Vegetarisch': [
    { name: 'Roti Daal', desc: 'Roti met daal, aardappel, kousenband en aubergine.', price: 'SRD 70', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&h=300&fit=crop&q=80', vegan: true },
    { name: 'Bami Veggie', desc: 'Bami goreng met tofu, paksoi en shiitake.', price: 'SRD 75', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop&q=80', vegan: true },
    { name: 'Groente Tempeh Bowl', desc: 'Rijst met tempeh, atjar, sambal en verse groenten.', price: 'SRD 65', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80', vegan: true },
  ],
  'Dranken': [
    { name: 'Dawet', desc: 'Traditionele kokos ijsdrank met pandan en bruine suiker.', price: 'SRD 25', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop&q=80' },
    { name: 'Vers Fruit Smoothie', desc: 'Mix van mango, passievrucht en sinaasappel.', price: 'SRD 30', img: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop&q=80', vegan: true },
    { name: 'Gember Limonade', desc: 'Huisgemaakte gember limo met honing en limoen.', price: 'SRD 20', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop&q=80' },
    { name: 'IJskoffie', desc: 'Koud gebrouwen koffie met gecondenseerde melk en ijs.', price: 'SRD 28', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&q=80' },
  ],
  'Desserts': [
    { name: 'Fiadu', desc: 'Traditioneel Surinaams koekje met kaas en jam.', price: 'SRD 15', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&q=80' },
    { name: 'Kokos Taart', desc: 'Huisgemaakte kokos taart met pecannoten.', price: 'SRD 35', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80', popular: true },
  ],
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Hoofdgerechten': <Utensils className="w-4 h-4" />,
  'Vis & Seafood': <Fish className="w-4 h-4" />,
  'Vegetarisch': <Leaf className="w-4 h-4" />,
  'Dranken': <IceCreamCone className="w-4 h-4" />,
  'Desserts': <Star className="w-4 h-4" />,
}

function isOpen(): boolean {
  const now = new Date()
  const hour = now.getHours()
  const day = now.getDay()
  if (day === 0) return false
  return hour >= 11 && hour < 22
}

export default function WarungIndahPage() {
  const [activeCategory, setActiveCategory] = useState('Hoofdgerechten')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const cats = Object.keys(menuCategories)

  /* ─── Reservation form ─── */
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', datum: '', tijd: '', gasten: '2' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.naam.trim()) errs.naam = 'Vul uw naam in'
    if (!form.email.includes('@')) errs.email = 'Ongeldig e-mailadres'
    if (!form.telefoon.trim()) errs.telefoon = 'Vul uw telefoonnummer in'
    if (!form.datum) errs.datum = 'Kies een datum'
    if (!form.tijd) errs.tijd = 'Kies een tijd'
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      toast.success('Reservering ontvangen!', { description: `Tafel voor ${form.gasten} personen op ${form.datum} om ${form.tijd}. U ontvangt een bevestiging per email.` })
      setForm({ naam: '', email: '', telefoon: '', datum: '', tijd: '', gasten: '2' })
    }
  }

  const open = isOpen()

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ═══ HERO ═══ */}
      <section className="relative h-[80vh] min-h-[480px] flex items-end">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=700&fit=crop&q=80" alt="Warung Indah restaurant interieur" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <WarungLogo size={44} />
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>Warung Indah</span>
              <span className={`ml-3 px-3 py-1 rounded-full text-xs font-bold ${open ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                {open ? '🟢 Nu open' : '🔴 Gesloten'}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[0.95] max-w-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Authentieke Surinaamse keuken
            </h1>
            <p className="text-base text-stone-300 max-w-md mb-6">
              De beste roti, nasi en meer. Traditionele recepten met verse lokale ingrediënten, bereid met liefde.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#menu" className="px-5 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                <Utensils className="w-4 h-4 inline mr-2" />Bekijk menu
              </a>
              <a href="#reserveren" className="px-5 py-3 bg-white/10 backdrop-blur text-white font-bold rounded-xl hover:bg-white/20 transition-colors text-sm border border-white/20" style={{ fontFamily: 'var(--font-heading)' }}>
                <CalendarDays className="w-4 h-4 inline mr-2" />Reserveren
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ INFO BAR ═══ */}
      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Domineestraat 42, Paramaribo</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +597 455-1234</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Ma-Za 11:00 – 22:00 · Zo gesloten</div>
          <div className="flex items-center gap-2"><Users className="w-4 h-4" /> Dine-in · Afhalen · Bezorging</div>
        </div>
      </section>

      {/* ═══ MENU ═══ */}
      <section className="py-16 lg:py-24" id="menu">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-3 block">Menu</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Ons menu</h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 sticky top-14 z-20 bg-stone-50/90 backdrop-blur py-3 rounded-xl">
            {cats.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'}`}>
                {categoryIcons[cat]} {cat}
              </button>
            ))}
          </div>

          {/* Items */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 gap-4">
              {menuCategories[activeCategory].map(item => {
                const isExpanded = expandedItem === item.name
                return (
                  <motion.div key={item.name} layout
                    className="bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setExpandedItem(isExpanded ? null : item.name)}>
                    <div className="flex gap-0">
                      <img src={item.img} alt={item.name} className="w-28 h-28 sm:w-36 sm:h-36 object-cover flex-shrink-0" loading="lazy" />
                      <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-bold text-stone-900 text-base" style={{ fontFamily: 'var(--font-heading)' }}>{item.name}</h3>
                              {item.popular && <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full">Populair</span>}
                              {item.spicy && <Flame className="w-3.5 h-3.5 text-red-500" />}
                              {item.vegan && <Leaf className="w-3.5 h-3.5 text-green-500" />}
                            </div>
                            <p className="text-sm text-stone-500 mt-1 line-clamp-2">{item.desc}</p>
                          </div>
                          <span className="font-bold text-green-700 text-sm whitespace-nowrap">{item.price}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-stone-400">{isExpanded ? 'Minder tonen' : 'Meer info'}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
                        </div>
                      </div>
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="px-4 pb-4 pt-2 border-t border-stone-100">
                            <p className="text-sm text-stone-600">{item.desc}</p>
                            <div className="flex gap-2 mt-3">
                              {item.spicy && <span className="px-2 py-1 bg-red-50 text-red-600 text-xs font-medium rounded">🌶 Pittig</span>}
                              {item.vegan && <span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded">🌱 Veganistisch</span>}
                              {item.popular && <span className="px-2 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded">⭐ Aanrader</span>}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ RESERVATION ═══ */}
      <section className="py-16 bg-white" id="reserveren">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-600 mb-3 block">Reserveren</span>
            <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Reserveer uw tafel</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">Kom genieten van de lekkerste Surinaamse gerechten. Reserveer vooruit en wij zorgen dat uw tafel klaarstaat.</p>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80" alt="Restaurant sfeer" className="rounded-2xl w-full aspect-[3/2] object-cover" loading="lazy" />
          </div>
          <form onSubmit={handleReservation} className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
            {[
              { id: 'naam', label: 'Naam', type: 'text', placeholder: 'Uw volledige naam' },
              { id: 'email', label: 'E-mail', type: 'email', placeholder: 'uw@email.com' },
              { id: 'telefoon', label: 'Telefoon', type: 'tel', placeholder: '+597 ...' },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-sm font-bold text-stone-700 block mb-1">{f.label}</label>
                <input id={f.id} type={f.type} placeholder={f.placeholder} value={form[f.id as keyof typeof form]}
                  onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors[f.id] ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-green-500`} />
                {errors[f.id] && <p className="text-xs text-red-500 mt-1">{errors[f.id]}</p>}
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="datum" className="text-sm font-bold text-stone-700 block mb-1">Datum</label>
                <input id="datum" type="date" value={form.datum}
                  onChange={e => setForm({ ...form, datum: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.datum ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-green-500`} />
                {errors.datum && <p className="text-xs text-red-500 mt-1">{errors.datum}</p>}
              </div>
              <div>
                <label htmlFor="tijd" className="text-sm font-bold text-stone-700 block mb-1">Tijd</label>
                <input id="tijd" type="time" value={form.tijd}
                  onChange={e => setForm({ ...form, tijd: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.tijd ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-green-500`} />
                {errors.tijd && <p className="text-xs text-red-500 mt-1">{errors.tijd}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="gasten" className="text-sm font-bold text-stone-700 block mb-1">Aantal gasten</label>
              <select id="gasten" value={form.gasten} onChange={e => setForm({ ...form, gasten: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'persoon' : 'personen'}</option>)}
              </select>
            </div>
            <button type="submit" className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
              Reservering bevestigen
            </button>
          </form>
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <section className="bg-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h3 className="text-xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Bezoek ons</h3>
          <div className="rounded-2xl overflow-hidden border border-stone-200 aspect-[21/9]">
            <iframe
              title="Warung Indah locatie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.234578!2d-55.1701!3d5.8254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDknMzEuNCJOIDU1wrAxMCcxMi40Ilc!5e0!3m2!1sen!2ssr!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-stone-900 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><WarungLogo size={24} /><span className="text-sm font-bold text-white">Warung Indah</span></div>
          <p className="text-sm text-stone-500">© 2025 Warung Indah. Domineestraat 42, Paramaribo.</p>
        </div>
      </footer>

      <FloatingWhatsApp phone="5974551234" company="Warung Indah" message="Hallo! Ik wil graag bestellen of reserveren." />
    </div>
  )
}
