import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Icon } from '../components/ui'
import { IMAGES } from '../constants/images'

const batches = [
  { id: 'GZ-402', purity: '92.4%', weight: '12.50g', value: 'ZMW 0.00', status: 'Ready' },
  { id: 'GZ-398', purity: '89.1%', weight: '10.50g', value: 'ZMW 0.00', status: 'Ready' },
]

const buyers = [
  { name: 'Authorized Depot B1', distance: '1.2km away', hours: 'Open until 18:00' },
  { name: 'Mineral Hub Lusaka', distance: '4.8km away', hours: 'Open until 17:00' },
]

const transactions = [
  { type: 'payment', title: 'Payment Received - Sale #8812', date: '22 Oct, 2023', detail: 'Mobile Money', amount: '+ZMW 0.00', positive: true },
  { type: 'verify', title: 'Batch Verification - #GZ-402', date: '20 Oct, 2023', detail: '12.50g Gold', amount: '12.50g', positive: false },
  { type: 'payment', title: 'Payment Received - Sale #8790', date: '15 Oct, 2023', detail: 'Bank Transfer', amount: '+ZMW 0.00', positive: true },
]

export function MinerDashboard() {
  const [price, setPrice] = useState(0.00)
  const [smsEnabled, setSmsEnabled] = useState(true)

  useEffect(() => {
    // Price update disabled for demo
    /*
    const interval = setInterval(() => {
      setPrice((prev) => prev + (Math.random() - 0.5) * 2)
    }, 10000)
    return () => clearInterval(interval)
    */
  }, [])

  return (
    <Layout variant="dashboard" sideNavActive="dashboard" showBottomNav showFooter activeNav="/miner">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pt-base">
        <header className="py-md">
          <h1 className="text-mobile-headline text-primary font-bold">Kwame Musonda</h1>
          <p className="text-on-surface-variant">Verified Artisanal Miner • ID: GTZ-8821</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-base md:gap-md mb-md">
          <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-xs">
                <span className="text-label-md text-on-surface-variant">Live Gold Price (24k)</span>
                <span className="flex items-center text-secondary font-bold text-xs bg-secondary-container px-2 py-0.5 rounded-full">
                  <Icon name="trending_up" className="text-[14px] mr-1" />
                  +1.2%
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-display-lg text-primary font-bold">ZMW {price.toFixed(2)}</span>
                <span className="text-label-md text-on-surface-variant">USD 0.00 / gram</span>
              </div>
            </div>
            <div className="mt-md pt-base border-t border-outline-variant flex items-center justify-between">
              <span className="text-[12px] text-on-surface-variant italic">Last updated: 09:42 AM</span>
              <button type="button" className="text-primary font-bold text-label-md flex items-center hover:underline">
                History <Icon name="chevron_right" className="ml-1" />
              </button>
            </div>
          </div>

          <div className="bg-primary-container p-md rounded-xl border border-primary flex flex-col gap-base text-on-primary-fixed">
            <div className="flex items-center gap-sm">
              <Icon name="sms" className="text-on-primary-container" />
              <h3 className="text-headline-sm text-on-primary-container">Price Alerts via SMS</h3>
            </div>
            <p className="text-body-md text-on-primary-container/80">
              Get daily SMS updates on gold prices directly to your phone — even on basic phones.
            </p>
            <label className="flex items-center cursor-pointer p-sm bg-primary/20 rounded-lg hover:bg-primary/40 transition-all mt-auto">
              <input
                type="checkbox"
                checked={smsEnabled}
                onChange={(e) => setSmsEnabled(e.target.checked)}
                className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary"
              />
              <span className="ml-sm text-label-md text-on-primary-container">
                {smsEnabled ? 'Enabled (+260 97...)' : 'Enable SMS Alerts'}
              </span>
            </label>
          </div>

          <div className="bg-surface-container-highest p-md rounded-xl border border-outline-variant flex flex-col justify-center text-center">
            <span className="text-label-md text-on-surface-variant uppercase tracking-widest">Est. Portfolio Value</span>
            <span className="text-display-lg text-primary font-bold mt-xs">ZMW 0.00</span>
            <p className="text-on-surface-variant text-label-md mt-base">Based on 23.00g Verified Batch</p>
          </div>
        </div>

        <div className="mb-lg">
          <Link
            to="/marketplace"
            className="w-full h-16 bg-primary text-on-primary rounded-xl text-headline-sm shadow-lg flex items-center justify-center gap-base active:scale-95 transition-transform"
          >
            <Icon name="payments" filled />
            Sell Gold Now
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
          <div className="lg:col-span-2 flex flex-col gap-base">
            <div className="flex justify-between items-center px-xs">
              <h2 className="text-headline-sm text-primary flex items-center gap-xs">
                <Icon name="verified" /> Verified Batches
              </h2>
              <Link to="/verification" className="text-label-md text-primary font-bold">View Ledger</Link>
            </div>
            <div className="space-y-base">
              {batches.map((batch) => (
                <Link
                  key={batch.id}
                  to="/verification"
                  className="bg-white p-md rounded-xl border border-outline-variant verified-accent flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-md">
                    <div className="bg-surface-container-low w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon name="database" filled className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-headline-sm text-primary">Batch #{batch.id}</h4>
                      <p className="text-on-surface-variant">Assay: {batch.purity} Pure • {batch.weight}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{batch.value}</p>
                    <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded font-bold uppercase">{batch.status}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-base">
            <h2 className="text-headline-sm text-primary flex items-center gap-xs px-xs">
              <Icon name="distance" /> Nearby Verified Buyers
            </h2>
            <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden">
              <div className="h-40 bg-surface-variant flex items-center justify-center relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${IMAGES.mapLusaka}')` }}
                />
                <span className="z-10 bg-white/90 backdrop-blur-sm px-md py-xs rounded-full text-label-md text-primary shadow-sm border border-outline-variant">
                  Lufwanyama Area
                </span>
              </div>
              <div className="p-md space-y-md">
                {buyers.map((buyer) => (
                  <div key={buyer.name} className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <Icon name="store" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-label-md text-primary">{buyer.name}</h4>
                      <p className="text-xs text-on-surface-variant">{buyer.distance} • {buyer.hours}</p>
                    </div>
                    <Icon name="directions" className="text-primary cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-lg mb-lg">
          <div className="flex justify-between items-center mb-base">
            <h2 className="text-headline-sm text-primary">Recent Transactions</h2>
            <button type="button" className="text-label-md text-on-surface-variant">View All</button>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm divide-y divide-outline-variant">
            {transactions.map((tx) => (
              <div key={tx.title} className="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-center gap-md">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.positive ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-primary'}`}>
                    <Icon name={tx.type === 'payment' ? 'add_circle' : 'inventory_2'} filled={tx.type === 'payment'} />
                  </div>
                  <div>
                    <p className="text-label-md text-primary">{tx.title}</p>
                    <p className="text-xs text-on-surface-variant">{tx.date} • {tx.detail}</p>
                  </div>
                </div>
                <p className={`font-bold ${tx.positive ? 'text-green-700' : 'text-primary'}`}>{tx.amount}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
