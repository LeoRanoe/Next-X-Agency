'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X, Plus, Minus, Trash2, Search, Heart, Star, ChevronRight, Truck, RefreshCw, Shield } from 'lucide-react'
import { toast } from 'sonner'
import FloatingWhatsApp from '../_components/FloatingWhatsApp'
import DemoFeatures from '../_components/DemoFeatures'

/* ─── Logo ─── */
function BloomLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#ec4899" opacity="0.1" />
      <circle cx="24" cy="20" r="4" fill="#ec4899" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <circle key={i} cx={24 + 8 * Math.cos((angle * Math.PI) / 180)} cy={20 + 8 * Math.sin((angle * Math.PI) / 180)} r="4" fill="#ec4899" opacity={0.6 + i * 0.05} />
      ))}
      <path d="M24 28L24 42" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 34C20 30 18 32 16 34" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

type Product = {
  id: number; name: string; price: number; img: string; category: string; rating: number; reviews: number; badge?: string
}
type CartItem = Product & { qty: number }

const products: Product[] = [
  { id: 1, name: 'Zijden Wrap Blouse', price: 189, img: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop&q=80', category: 'Tops', rating: 4.8, reviews: 24, badge: 'Bestseller' },
  { id: 2, name: 'High-Waist Linnen Broek', price: 145, img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&q=80', category: 'Broeken', rating: 4.6, reviews: 18 },
  { id: 3, name: 'Bloemen Midi Rok', price: 125, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj5a?w=400&h=500&fit=crop&q=80', category: 'Rokken', rating: 4.9, reviews: 31, badge: 'Nieuw' },
  { id: 4, name: 'Katoenen Zomerjurk', price: 165, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop&q=80', category: 'Jurken', rating: 4.7, reviews: 42, badge: 'Bestseller' },
  { id: 5, name: 'Oversized Blazer', price: 225, img: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop&q=80', category: 'Tops', rating: 4.5, reviews: 15 },
  { id: 6, name: 'Gestreepte Maxi Rok', price: 110, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop&q=80', category: 'Rokken', rating: 4.4, reviews: 9 },
  { id: 7, name: 'Satijnen Cami Top', price: 89, img: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=500&fit=crop&q=80', category: 'Tops', rating: 4.6, reviews: 27 },
  { id: 8, name: 'Wide Leg Jeans', price: 135, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop&q=80', category: 'Broeken', rating: 4.8, reviews: 36 },
  { id: 9, name: 'Bohemian Maxi Jurk', price: 195, img: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&h=500&fit=crop&q=80', category: 'Jurken', rating: 4.9, reviews: 53, badge: 'Populair' },
  { id: 10, name: 'Crop Cardigan', price: 98, img: 'https://images.unsplash.com/photo-1434389677669-e08b4cda3a26?w=400&h=500&fit=crop&q=80', category: 'Tops', rating: 4.3, reviews: 12 },
  { id: 11, name: 'Plissé Palazzo Broek', price: 155, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop&q=80', category: 'Broeken', rating: 4.7, reviews: 21, badge: 'Nieuw' },
  { id: 12, name: 'Wrap Midi Jurk', price: 175, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&q=80', category: 'Jurken', rating: 4.8, reviews: 38 },
]

const categories = ['Alle', 'Tops', 'Jurken', 'Rokken', 'Broeken']

export default function BloomBoutiquePage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [filter, setFilter] = useState('Alle')
  const [search, setSearch] = useState('')
  const [wishlist, setWishlist] = useState<number[]>([])
  const [checkoutStep, setCheckoutStep] = useState(0) // 0=shop 1=checkout

  const filtered = useMemo(() => {
    let list = filter === 'Alle' ? products : products.filter(p => p.category === filter)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q))
    }
    return list
  }, [filter, search])

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    toast.success(`${product.name} toegevoegd`, { description: 'Bekijk uw winkelwagen →' })
  }

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id))
    toast.info('Product verwijderd uit winkelwagen')
  }

  const toggleWish = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const handleCheckout = () => {
    if (cart.length === 0) return toast.error('Uw winkelwagen is leeg')
    setCheckoutStep(1)
    setCartOpen(false)
  }

  /* ─── Checkout form ─── */
  const [cForm, setCForm] = useState({ naam: '', email: '', adres: '', stad: '', telefoon: '' })
  const [cErrors, setCErrors] = useState<Record<string, string>>({})

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!cForm.naam.trim()) errs.naam = 'Vul uw naam in'
    if (!cForm.email.includes('@')) errs.email = 'Ongeldig e-mailadres'
    if (!cForm.adres.trim()) errs.adres = 'Vul uw adres in'
    if (!cForm.stad.trim()) errs.stad = 'Vul uw stad in'
    if (!cForm.telefoon.trim()) errs.telefoon = 'Vul uw telefoon in'
    setCErrors(errs)
    if (Object.keys(errs).length === 0) {
      toast.success('Bestelling geplaatst! 🎉', { description: `Bedankt ${cForm.naam}! U ontvangt een bevestiging op ${cForm.email}. Verwachte levering: 2-4 werkdagen.` })
      setCart([])
      setCForm({ naam: '', email: '', adres: '', stad: '', telefoon: '' })
      setCheckoutStep(0)
    }
  }

  if (checkoutStep === 1) {
    return (
      <div className="min-h-screen bg-pink-50/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button onClick={() => setCheckoutStep(0)} className="text-sm text-pink-600 font-bold mb-8 hover:underline">← Terug naar winkel</button>
          <h1 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Checkout</h1>
          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <form onSubmit={handleOrder} className="md:col-span-3 bg-white rounded-2xl p-6 border border-pink-100 space-y-4">
              <h3 className="font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>Bezorggegevens</h3>
              {[
                { id: 'naam', label: 'Volledige naam', type: 'text', ph: 'Uw naam' },
                { id: 'email', label: 'E-mail', type: 'email', ph: 'uw@email.com' },
                { id: 'telefoon', label: 'Telefoon', type: 'tel', ph: '+597 ...' },
                { id: 'adres', label: 'Adres', type: 'text', ph: 'Straatnaam + nummer' },
                { id: 'stad', label: 'Stad', type: 'text', ph: 'Paramaribo' },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="text-sm font-bold text-slate-700 block mb-1">{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.ph}
                    value={cForm[f.id as keyof typeof cForm]}
                    onChange={e => setCForm({ ...cForm, [f.id]: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border ${cErrors[f.id] ? 'border-red-400 bg-red-50' : 'border-pink-200 bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-pink-400`} />
                  {cErrors[f.id] && <p className="text-xs text-red-500 mt-1">{cErrors[f.id]}</p>}
                </div>
              ))}
              <button type="submit" className="w-full py-3 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 transition-colors mt-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Bestelling plaatsen · SRD {cartTotal.toLocaleString()}
              </button>
            </form>
            {/* Order summary */}
            <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-pink-100 h-fit">
              <h3 className="font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Overzicht ({cartCount})</h3>
              <div className="space-y-3 mb-4">
                {cart.map(i => (
                  <div key={i.id} className="flex items-center gap-3">
                    <img src={i.img} alt={i.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0"><p className="text-sm font-medium text-slate-900 truncate">{i.name}</p><p className="text-xs text-slate-500">{i.qty}× SRD {i.price}</p></div>
                    <p className="text-sm font-bold text-slate-900">SRD {(i.price * i.qty).toLocaleString()}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-pink-100 pt-3 space-y-2">
                <div className="flex justify-between text-sm"><span className="text-slate-500">Subtotaal</span><span className="font-bold">SRD {cartTotal.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">Bezorging</span><span className="font-bold text-green-600">Gratis</span></div>
                <div className="flex justify-between text-base border-t border-pink-100 pt-2"><span className="font-bold text-slate-900">Totaal</span><span className="font-bold text-pink-600">SRD {cartTotal.toLocaleString()}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ═══ HEADER ═══ */}
      <header className="sticky top-10 z-30 bg-white/90 backdrop-blur border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BloomLogo size={32} />
            <span className="text-lg font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>Bloom Boutique</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Zoeken..." value={search} onChange={e => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full bg-pink-50 border border-pink-200 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-pink-400" />
            </div>
            <button onClick={() => setCartOpen(true)} className="relative p-2 rounded-full hover:bg-pink-50 transition-colors" aria-label="Winkelwagen">
              <ShoppingBag className="w-5 h-5 text-slate-900" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-pink-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-pink-500 mb-3 block">Zomer Collectie 2025</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[0.95] mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
              Stijl die bij <span className="text-pink-600">jou</span> past
            </h1>
            <p className="text-slate-600 max-w-md mb-6 leading-relaxed">Ontdek onze curated collectie van elegante, comfortabele mode. Handgeselecteerd met oog voor kwaliteit en duurzaamheid.</p>
            <a href="#shop" className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
              Shop nu <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=500&fit=crop&q=80" alt="Bloom Boutique fashion" className="rounded-2xl shadow-xl w-full object-cover aspect-[6/5]" />
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURES BAR ═══ */}
      <section className="border-y border-pink-100 bg-pink-50/50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-8 text-sm text-slate-600">
          {[{ icon: Truck, text: 'Gratis bezorging vanaf SRD 200' }, { icon: RefreshCw, text: '14 dagen retourbeleid' }, { icon: Shield, text: 'Veilig betalen' }].map(f => (
            <div key={f.text} className="flex items-center gap-2"><f.icon className="w-4 h-4 text-pink-500" /> {f.text}</div>
          ))}
        </div>
      </section>

      {/* ═══ SHOP ═══ */}
      <section className="py-16 lg:py-24" id="shop">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-pink-500 mb-3 block">Collectie</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Onze producten</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-pink-600 text-white' : 'bg-pink-50 text-slate-600 hover:bg-pink-100 border border-pink-200'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile search */}
          <div className="sm:hidden mb-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Zoek producten..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-pink-50 border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400" />
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(p => (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-white rounded-2xl border border-pink-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    {p.badge && <span className="absolute top-3 left-3 px-2.5 py-1 bg-pink-600 text-white text-[10px] font-bold rounded-full">{p.badge}</span>}
                    <button onClick={() => toggleWish(p.id)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors" aria-label="Wishlist">
                      <Heart className={`w-4 h-4 ${wishlist.includes(p.id) ? 'fill-pink-500 text-pink-500' : 'text-slate-400'}`} />
                    </button>
                    <button onClick={() => addToCart(p)}
                      className="absolute bottom-3 left-3 right-3 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-800" style={{ fontFamily: 'var(--font-heading)' }}>
                      <ShoppingBag className="w-4 h-4 inline mr-1" /> Toevoegen
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-pink-500 font-medium mb-1">{p.category}</p>
                    <h3 className="font-bold text-slate-900 text-sm mb-1 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>{p.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs text-slate-600">{p.rating}</span>
                      </div>
                      <span className="text-xs text-slate-400">({p.reviews})</span>
                    </div>
                    <p className="font-bold text-pink-600">SRD {p.price}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <Search className="w-10 h-10 mx-auto mb-3 text-slate-300" />
              <p className="text-lg font-bold">Geen producten gevonden</p>
              <p className="text-sm mt-1">Probeer een andere zoekterm of categorie</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══ CART DRAWER ═══ */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 z-50" onClick={() => setCartOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-pink-100">
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>Winkelwagen ({cartCount})</h2>
                <button onClick={() => setCartOpen(false)} className="p-2 rounded-full hover:bg-pink-50" aria-label="Sluiten"><X className="w-5 h-5" /></button>
              </div>
              <div className="flex-1 overflow-auto p-6 space-y-4">
                {cart.length === 0 && <p className="text-center text-slate-400 py-12">Uw winkelwagen is leeg</p>}
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-pink-50/50 rounded-xl p-3">
                    <img src={item.img} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-slate-900 truncate">{item.name}</h4>
                      <p className="text-sm text-pink-600 font-bold mt-1">SRD {item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-full bg-white border border-pink-200 flex items-center justify-center hover:bg-pink-50" aria-label="Minder"><Minus className="w-3 h-3" /></button>
                        <span className="text-sm font-bold w-6 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-full bg-white border border-pink-200 flex items-center justify-center hover:bg-pink-50" aria-label="Meer"><Plus className="w-3 h-3" /></button>
                        <button onClick={() => removeFromCart(item.id)} className="ml-auto p-1.5 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors" aria-label="Verwijderen"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {cart.length > 0 && (
                <div className="p-6 border-t border-pink-100">
                  <div className="flex justify-between mb-4"><span className="text-slate-600">Totaal</span><span className="text-xl font-bold text-slate-900">SRD {cartTotal.toLocaleString()}</span></div>
                  <button onClick={handleCheckout} className="w-full py-3 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    Naar checkout <ChevronRight className="w-4 h-4 inline" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-slate-900 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3"><BloomLogo size={28} /><span className="font-bold text-white">Bloom Boutique</span></div>
              <p className="text-sm text-slate-400 leading-relaxed">Curated fashion met liefde geselecteerd. Kwaliteit en stijl in elke stuk.</p>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-3">Shop</h4>
              <div className="space-y-2">{categories.slice(1).map(c => <button key={c} onClick={() => { setFilter(c); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }) }} className="block text-sm text-slate-400 hover:text-pink-400 transition-colors">{c}</button>)}</div>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-3">Klantenservice</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Bezorging & Retour</p><p>Maattabel</p><p>Contact</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
            © 2025 Bloom Boutique. Paramaribo, Suriname.
          </div>
        </div>
      </footer>

      <DemoFeatures features={['Werkende winkelwagen (useState: add/remove/qty)', 'Cart drawer (Framer Motion slide-in)', 'Volledige checkout flow (stap 0 → 1)', 'Zoekbalk + categorie filter', 'Wishlist met harten', 'WhatsApp integratie']} />
      <FloatingWhatsApp phone="5974567890" company="Bloom Boutique" message="Hoi! Ik heb een vraag over een product." />
    </div>
  )
}
