import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Icon } from '../components/ui'
import { IMAGES } from '../constants/images'
import { AIAssistant } from '../components/AIAssistant'

const suppliers = [
  { name: 'Kasempa Artisanal Co-op', license: '#ZMB-7742', location: 'North-Western Province', grade: 'Grade A', batch: '1.2kg', icon: 'mountain_flag' },
  { name: 'Mopani Specialized Refiners', license: '#ZMB-9901', location: 'Copperbelt Province', grade: 'Premium', batch: '4.8kg', icon: 'precision_manufacturing' },
]

const purchases = [
  { id: 'TX-88294-GZ', date: 'Oct 24, 2024', amount: '0.85 kg', status: 'In Vault', active: false },
  { id: 'TX-88291-GZ', date: 'Oct 22, 2024', amount: '1.20 kg', status: 'In Transit', active: true },
  { id: 'TX-88102-GZ', date: 'Oct 15, 2024', amount: '2.15 kg', status: 'In Vault', active: false },
]

const docs = [
  { icon: 'description', label: 'Export Permit 2024' },
  { icon: 'shield', label: 'AML/KYC Certificate' },
  { icon: 'verified_user', label: 'Traceability Audit' },
]

export function BuyerDashboard() {
  const [vaultValue] = useState(0.00)

  useEffect(() => {
    // Vault value update disabled for demo
    /*
    const interval = setInterval(() => {
      setVaultValue((prev) => prev + (Math.random() - 0.5) * 500)
    }, 5000)
    return () => clearInterval(interval)
    */
  }, [])

  return (
    <Layout variant="dashboard" sideNavActive="dashboard" showBottomNav showFooter activeNav="/buyer">
      <div className="px-margin-mobile md:px-margin-desktop py-base space-y-md flex-grow">
          <section className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="bento-card md:col-span-2 bg-surface-container-lowest p-md border border-outline-variant rounded-xl flex flex-col justify-between min-h-[160px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10 -mr-8 -skew-x-12" />
              <div>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider">Total Vault Value</p>
                <h3 className="text-display-lg text-primary mt-xs font-bold">
                  ZMW {vaultValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </h3>
              </div>
              <div className="flex items-center text-primary font-bold gap-xs mt-base">
                <Icon name="trending_up" /><span>+4.2% vs last month</span>
              </div>
            </div>
            <div className="bento-card bg-surface-container-lowest p-md border border-outline-variant rounded-xl flex flex-col justify-between">
              <div>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider">Gold Inventory</p>
                <h3 className="text-headline-md text-primary mt-xs">12.45 kg</h3>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 mt-base">
                <div className="bg-secondary h-2 rounded-full w-3/4" />
              </div>
              <p className="text-[12px] text-on-surface-variant mt-xs">75% of monthly target</p>
            </div>
            <div className="bento-card bg-surface-container-lowest p-md border border-outline-variant rounded-xl flex flex-col justify-between">
              <div>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider">Compliance Status</p>
                <div className="flex items-center gap-xs mt-xs">
                  <Icon name="verified" filled className="text-secondary" />
                  <h3 className="text-headline-md">Verified</h3>
                </div>
              </div>
              <p className="text-[12px] text-on-surface-variant">Next audit in 14 days</p>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
            <div className="lg:col-span-2 space-y-md">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
                <div className="px-md py-4 border-b border-outline-variant flex justify-between items-center">
                  <h4 className="text-headline-sm text-primary">Verified Supplier List</h4>
                  <Link to="/trade-center" className="text-primary text-label-md flex items-center hover:underline">
                    View Trade Center <Icon name="arrow_forward" className="ml-1" />
                  </Link>
                </div>
                <div className="divide-y divide-outline-variant">
                  {suppliers.map((s) => (
                    <div key={s.name} className="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer">
                      <div className="flex items-center gap-md">
                        <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-lg text-on-primary-container">
                          <Icon name={s.icon} />
                        </div>
                        <div>
                          <p className="font-bold">{s.name}</p>
                          <p className="text-[12px] text-on-surface-variant">License: {s.license} • {s.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-2 py-1 rounded uppercase">{s.grade}</span>
                        <p className="text-label-md mt-1">Last batch: {s.batch}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
                <div className="px-md py-4 border-b border-outline-variant">
                  <h4 className="text-headline-sm text-primary">Purchase History & Transaction Tracking</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low text-label-md text-on-surface-variant">
                      <tr>
                        {['Transaction ID', 'Date', 'Amount', 'Status', 'Invoice'].map((h) => (
                          <th key={h} className={`px-md py-3 font-semibold ${h === 'Invoice' ? 'text-right' : ''}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                      {purchases.map((p) => (
                        <tr key={p.id} className="hover:bg-surface-container-low/50">
                          <td className="px-md py-4 font-mono text-sm">{p.id}</td>
                          <td className="px-md py-4">{p.date}</td>
                          <td className="px-md py-4">{p.amount}</td>
                          <td className="px-md py-4">
                            <span className={`flex items-center gap-xs font-bold ${p.active ? 'text-primary' : 'text-secondary'}`}>
                              <span className={`w-2 h-2 rounded-full ${p.active ? 'bg-primary animate-pulse' : 'bg-secondary'}`} />
                              {p.status}
                            </span>
                          </td>
                          <td className="px-md py-4 text-right">
                            <Icon name="download" className="text-primary cursor-pointer" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-md">
              <div className="bg-primary text-on-primary rounded-xl p-md shadow-lg">
                <div className="flex items-center justify-between mb-md">
                  <h4 className="text-headline-sm">Compliance Documents</h4>
                  <Icon name="folder_shared" />
                </div>
                <ul className="space-y-base">
                  {docs.map((doc) => (
                    <li key={doc.label} className="flex items-center justify-between p-base bg-on-primary/10 rounded-lg hover:bg-on-primary/20 transition-colors cursor-pointer">
                      <div className="flex items-center gap-sm">
                        <Icon name={doc.icon} className="text-sm" />
                        <span className="text-label-md">{doc.label}</span>
                      </div>
                      <Icon name="open_in_new" className="text-sm" />
                    </li>
                  ))}
                </ul>
                <button type="button" className="w-full mt-md py-2 border border-on-primary/30 rounded text-label-md hover:bg-on-primary hover:text-primary transition-all">
                  Manage Credentials
                </button>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
                <h4 className="text-headline-sm text-primary mb-md">Market Tracking</h4>
                <div className="space-y-md">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[12px] text-on-surface-variant font-bold uppercase">Spot Price Gold (oz)</p>
                      <p className="text-headline-md">$0.00</p>
                    </div>
                    <span className="text-error font-bold flex items-center text-sm">
                      <Icon name="trending_down" /> 0.2%
                    </span>
                  </div>
                  <div className="w-full h-24 bg-surface-container-low rounded-lg relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0 40 Q 20 10, 40 35 T 80 15 T 100 25" fill="none" stroke="#003366" strokeWidth="2" />
                      <path d="M0 40 Q 20 10, 40 35 T 80 15 T 100 25 L 100 50 L 0 50 Z" fill="rgba(0, 51, 102, 0.05)" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden h-48 relative">
                <div className="absolute inset-0 z-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('${IMAGES.buyerMap}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 flex flex-col justify-end p-md">
                  <h5 className="text-white font-bold">Transaction Tracking Map</h5>
                  <p className="text-white/80 text-sm">Real-time transit tracking across 4 provinces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AIAssistant />
      </Layout>
  )
}
