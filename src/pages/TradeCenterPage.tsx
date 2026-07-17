import { Layout } from '../components/Layout'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, StarRating } from '../components/ui'
import { IMAGES } from '../constants/images'

const offers = [
  { initials: 'RH', name: 'RefineHub Zambia', rating: 4.5, reviews: 124, amount: '$0.00', expires: '4H 21M' },
  { initials: 'GI', name: 'Global Ingot Ltd', rating: 3, reviews: 12, amount: '$0.00', expires: '12H 00M' },
]

const catalog = [
  { name: 'Kafue Gorge Batch', seller: 'Horizon Mining Ltd', weight: '2.8 kg', purity: '94.2% Pure', cert: '#90021-Z', image: IMAGES.goldBar1 },
  { name: 'Mumbwa Alluvial', seller: 'Unity Coop', weight: '0.5 kg', purity: '88.5% Pure', cert: '#90055-X', image: IMAGES.goldGrains },
]

export function TradeCenterPage() {
  const [view, setView] = useState<'miner' | 'buyer'>('miner')

  return (
    <Layout showBottomNav showFooter activeNav="/trade-center" sideNavActive="trade-center">
      <main className="pb-24 md:pb-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-base">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="text-display-lg text-primary mb-1 font-bold">Gold Trade Center</h1>
              <p className="text-on-surface-variant">Official trace-verified trade platform of Zambia.</p>
            </div>
            <div className="bg-surface-container-high p-1 rounded-full flex self-start md:self-center">
              <button
                type="button"
                onClick={() => setView('miner')}
                className={`px-6 py-2 rounded-full text-label-md transition-all ${view === 'miner' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}
              >
                Miner View
              </button>
              <button
                type="button"
                onClick={() => setView('buyer')}
                className={`px-6 py-2 rounded-full text-label-md transition-all ${view === 'buyer' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}
              >
                Buyer View
              </button>
            </div>
          </div>

          {view === 'miner' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-8 space-y-gutter">
                <h2 className="text-headline-md text-primary flex items-center gap-2">
                  <Icon name="verified" /> Verified Gold Batches
                </h2>
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl bento-card relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Lot #ZAM-8821</span>
                      <h3 className="text-headline-sm mt-2">Dore Gold - Ndola Cluster</h3>
                      <p className="text-on-surface-variant">Extraction Date: Oct 24, 2023</p>
                    </div>
                    <div className="text-right">
                      <div className="text-display-lg font-bold text-primary">1.45 kg</div>
                      <div className="text-secondary font-bold">22.4K Purity</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-surface-container-low rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase font-bold">Current LME Gold</p>
                      <p className="text-headline-sm">$0.00/kg</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase font-bold">Trace Premium</p>
                      <p className="text-headline-sm text-secondary">+$0.00</p>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-xs text-on-surface-variant uppercase font-bold">Local Benchmark</p>
                      <p className="text-headline-sm">$0.00</p>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button type="button" className="flex-1 bg-primary text-on-primary py-3 rounded-lg text-label-md active:scale-95 transition-all">List on Exchange</button>
                    <button type="button" className="px-4 border-2 border-primary text-primary rounded-lg active:scale-95 transition-all">
                      <Icon name="share" />
                    </button>
                  </div>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
                    <h3 className="text-label-md uppercase tracking-widest text-primary">Active Buyer Offers</h3>
                    <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs">3 New Offers</span>
                  </div>
                  <div className="divide-y divide-outline-variant">
                    {offers.map((offer) => (
                      <div key={offer.name} className="p-4 flex flex-wrap items-center justify-between gap-4 hover:bg-surface-container-low transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">{offer.initials}</div>
                          <div>
                            <p className="font-bold text-on-surface">{offer.name}</p>
                            <StarRating rating={offer.rating} reviews={offer.reviews} />
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-headline-sm text-primary">{offer.amount}</p>
                          <p className="text-xs text-on-surface-variant font-bold">VALID FOR {offer.expires}</p>
                        </div>
                        <button type="button" className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg text-label-md hover:bg-secondary hover:text-white transition-all">
                          Accept Offer
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-gutter">
                <div className="bg-primary text-on-primary p-md rounded-xl">
                  <h3 className="text-label-md uppercase tracking-wider opacity-80 mb-4">Total Inventory Value</h3>
                  <p className="text-[40px] font-bold leading-tight mb-2">$0.00</p>
                  <div className="flex items-center gap-2 text-secondary-fixed">
                    <Icon name="trending_up" /><span>+4.2% this week</span>
                  </div>
                </div>
                <div className="bg-surface-container border border-outline-variant p-md rounded-xl">
                  <h3 className="text-label-md text-primary mb-4 uppercase tracking-widest">Compliance Status</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: 'check_circle', title: 'Environmental Permit', sub: 'Expires: Dec 2024', done: true },
                      { icon: 'check_circle', title: 'ZRA Tax Compliance', sub: 'Status: Current', done: true },
                      { icon: 'pending', title: 'Safety Audit 2024', sub: 'Scheduled: Nov 15', done: false },
                    ].map((item) => (
                      <li key={item.title} className="flex items-center gap-3">
                        <Icon name={item.icon} filled={item.done} className={item.done ? 'text-secondary' : 'text-outline'} />
                        <div className="flex-1">
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-on-surface-variant">{item.sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-gutter">
              <aside className="w-full md:w-72 flex-shrink-0">
                <div className="bg-surface-container border border-outline-variant p-md rounded-xl sticky top-24">
                  <h3 className="text-headline-sm text-primary mb-6">Market Filters</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">Location</label>
                      <select className="w-full bg-surface border border-outline-variant rounded-lg p-2">
                        <option>All Zambia</option>
                        <option>Ndola</option>
                        <option>Solwezi</option>
                        <option>Copperbelt</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">Purity (Karat)</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button type="button" className="bg-primary text-on-primary p-2 rounded-lg text-sm">22K+</button>
                        <button type="button" className="bg-surface border border-outline-variant p-2 rounded-lg text-sm">18K+</button>
                        <button type="button" className="bg-surface border border-outline-variant p-2 rounded-lg text-sm">14K+</button>
                        <button type="button" className="bg-surface border border-outline-variant p-2 rounded-lg text-sm">All</button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">Weight Range (kg)</label>
                      <input type="range" min="0" max="100" className="w-full accent-primary" />
                      <div className="flex justify-between text-xs text-on-surface-variant font-bold mt-1">
                        <span>0kg</span><span>100kg</span>
                      </div>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer pt-4 border-t border-outline-variant">
                      <input type="checkbox" defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary" />
                      <span className="text-sm font-bold">Verified Certificates Only</span>
                    </label>
                    <button type="button" className="w-full bg-primary text-on-primary py-3 rounded-lg text-label-md active:scale-95 transition-all">Apply Filters</button>
                  </div>
                </div>
              </aside>

              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {catalog.map((item) => (
                    <div key={item.name} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden bento-card">
                      <div className="h-48 relative">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                        <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Icon name="verified" filled className="text-[14px]" /> Trace-Certified
                        </div>
                      </div>
                      <div className="p-md">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-headline-sm">{item.name}</h3>
                            <p className="text-xs text-on-surface-variant font-bold uppercase">Seller: {item.seller}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-headline-md font-bold text-primary">{item.weight}</p>
                            <p className="text-xs text-secondary font-bold">{item.purity}</p>
                          </div>
                        </div>
                        <div className="my-4 flex items-center gap-4 text-sm bg-surface-container-low p-2 rounded">
                          <Icon name="description" className="text-primary" />
                          <span className="text-label-md">G-Cert: {item.cert}</span>
                          <Link to="/verification" className="text-primary underline ml-auto">View Certificate</Link>
                        </div>
                        <div className="flex gap-2">
                          <button type="button" className="flex-1 bg-primary text-on-primary py-2 rounded-lg text-label-md active:scale-95 transition-all">Make Purchase Offer</button>
                          <button type="button" className="px-4 border border-outline-variant text-outline rounded-lg hover:border-primary hover:text-primary transition-all">
                            <Icon name="favorite" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}
