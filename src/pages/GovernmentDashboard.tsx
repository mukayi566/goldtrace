import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { Icon, StatusBadge } from '../components/ui'
import { IMAGES } from '../constants/images'

const stats = [
  { label: 'Total Gold Reserves', value: '0.00', unit: 'kg', icon: 'account_balance_wallet', trend: '+4.2% from last month', positive: true },
  { label: 'Registered Miners', value: '0', unit: '', icon: 'engineering', sub: '0 pending verification' },
  { label: 'Verified Revenue', value: '$0.00', unit: '', icon: 'payments', trend: '100% Tax Compliant', positive: true },
  { label: 'Unverified Alerts', value: '0', unit: '', icon: 'warning', trend: 'Action Required: Compliance Gap', alert: true },
]

const transactions = [
  { id: '#GZ-992-KLR', entity: 'Lusaka Mining Group', purity: '24K (99.9%)', weight: '12.4 kg', status: 'verified' as const, value: '$0.00' },
  { id: '#GZ-881-XCV', entity: 'Kabwe Artisanal Coop', purity: '18K (75.0%)', weight: '0.8 kg', status: 'error' as const, value: '$0.00' },
  { id: '#GZ-773-QWE', entity: 'Copperbelt Refining Ltd', purity: '22K (91.7%)', weight: '45.0 kg', status: 'pending' as const, value: '$0.00' },
  { id: '#GZ-664-LMN', entity: 'Solwezi Mines Plc', purity: '24K (99.9%)', weight: '88.2 kg', status: 'verified' as const, value: '$0.00' },
]

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL']
const barHeights = [65, 55, 85, 90, 45, 75, 95]

export function GovernmentDashboard() {
  return (
    <Layout variant="government" sideNavActive="reports" showBottomNav showFooter activeNav="/government">
      <div className="p-gutter md:p-margin-desktop space-y-md pb-24 md:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {stats.map((stat) => (
              <div key={stat.label} className={`bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant shadow-sm verified-accent relative overflow-hidden ${stat.alert ? '' : ''}`}>
                {stat.alert && (
                  <div className="absolute top-0 right-0 p-2 bg-error text-white text-[10px] font-bold uppercase rounded-bl-lg alert-pulse">Urgent Alert</div>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-label-md text-on-surface-variant mb-1">{stat.label}</p>
                    <h3 className={`text-display-lg font-bold ${stat.alert ? 'text-error' : 'text-primary'}`}>
                      {stat.value} {stat.unit && <span className="text-body-md font-normal">{stat.unit}</span>}
                    </h3>
                  </div>
                  <span className={`material-symbols-outlined p-2 rounded-lg ${stat.alert ? 'text-error bg-error-container' : 'text-secondary bg-secondary-fixed'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {stat.icon}
                  </span>
                </div>
                <p className={`text-sm mt-2 flex items-center gap-1 ${stat.alert ? 'text-error font-bold' : stat.positive ? 'text-green-600' : 'text-on-surface-variant'}`}>
                  {stat.positive && <Icon name="trending_up" className="text-sm" />}
                  {stat.alert && <Icon name="warning" className="text-sm" />}
                  {stat.trend || stat.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-gutter h-[450px] flex flex-col">
              <div className="flex justify-between items-center mb-base">
                <h4 className="text-headline-sm text-primary">Mining Location Map</h4>
                <div className="flex gap-xs">
                  <button type="button" className="bg-surface-container-high px-3 py-1 rounded-full text-label-md text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors">Heatmap</button>
                  <button type="button" className="bg-primary text-on-primary px-3 py-1 rounded-full text-label-md">Registry View</button>
                </div>
              </div>
              <div className="flex-grow rounded-lg relative overflow-hidden bg-surface-container-low">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center grayscale opacity-80" style={{ backgroundImage: `url('${IMAGES.zambiaMap}')` }} />
                <div className="absolute bottom-4 left-4 p-4 glass-card rounded-lg space-y-2 border border-outline">
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary" /><span className="text-xs font-bold">Industrial Operations</span></div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary" /><span className="text-xs font-bold">Artisanal Sites</span></div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-error" /><span className="text-xs font-bold">Suspicious Activity</span></div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-gutter flex flex-col">
              <h4 className="text-headline-sm text-primary mb-gutter">Compliance Monitoring</h4>
              <div className="flex-grow flex flex-col justify-center items-center">
                <div className="relative w-48 h-48 mb-gutter">
                  <div className="w-full h-full rounded-full border-[16px] border-surface-container-high" />
                  <div className="absolute inset-0 w-full h-full rounded-full border-[16px] border-primary border-r-transparent border-b-transparent -rotate-45" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-display-lg text-primary font-bold">88%</span>
                    <span className="text-xs text-on-surface-variant font-bold">TOTAL SCORE</span>
                  </div>
                </div>
                <div className="w-full space-y-base">
                  {[{ label: 'KYC Verification', pct: 94 }, { label: 'Environmental Audit', pct: 72 }].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="text-on-surface-variant">{item.label}</span>
                        <span className="font-bold">{item.pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className={`h-full ${item.pct > 80 ? 'bg-primary' : 'bg-secondary'}`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
              <div className="p-gutter flex justify-between items-center border-b border-outline-variant bg-surface-container-low">
                <h4 className="text-headline-sm text-primary">Gold Transactions — Live Ledger</h4>
                <div className="flex gap-base">
                  <button type="button" className="flex items-center gap-xs px-3 py-1.5 border border-outline-variant rounded-lg text-label-md hover:bg-surface-container-highest">
                    <Icon name="filter_list" className="text-sm" /> Filter
                  </button>
                  <button type="button" className="flex items-center gap-xs px-3 py-1.5 border border-outline-variant rounded-lg text-label-md hover:bg-surface-container-highest">
                    <Icon name="download" className="text-sm" /> Export CSV
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-lowest border-b border-outline-variant">
                      {['Transaction ID', 'Entity Name', 'Purity', 'Weight', 'Status', 'Value (USD)'].map((h) => (
                        <th key={h} className={`px-gutter py-4 text-label-md text-on-surface-variant ${h === 'Value (USD)' ? 'text-right' : ''}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-surface-container-low transition-colors cursor-pointer">
                        <td className="px-gutter py-4 font-mono text-sm text-primary">{tx.id}</td>
                        <td className="px-gutter py-4 font-semibold">{tx.entity}</td>
                        <td className="px-gutter py-4">{tx.purity}</td>
                        <td className="px-gutter py-4">{tx.weight}</td>
                        <td className="px-gutter py-4">
                          <StatusBadge variant={tx.status === 'verified' ? 'verified' : tx.status === 'error' ? 'error' : 'pending'}>
                            {tx.status === 'error' ? 'Unverified' : tx.status === 'pending' ? 'In Transit' : 'Verified'}
                          </StatusBadge>
                        </td>
                        <td className="px-gutter py-4 text-right font-bold">{tx.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-gutter flex flex-col h-[300px]">
              <div className="flex justify-between items-center mb-gutter">
                <h4 className="text-headline-sm text-primary">Production Volume & Revenue Tracking (USD)</h4>
                <div className="text-on-surface-variant text-label-md flex gap-gutter">
                  <div className="flex items-center gap-1"><span className="w-2 h-2 bg-primary rounded-full" /> This Year</div>
                  <div className="flex items-center gap-1"><span className="w-2 h-2 bg-outline-variant rounded-full" /> Last Year</div>
                </div>
              </div>
              <div className="flex-grow flex items-end justify-around gap-2 z-10">
                {months.map((month, i) => (
                  <div key={month} className="w-full bg-surface-container-high h-[70%] rounded-t-sm relative group">
                    <div className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: `${barHeights[i]}%` }} />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold">{month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
}
