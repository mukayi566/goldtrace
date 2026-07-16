import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Icon } from '../components/ui'
import { IMAGES } from '../constants/images'

export function LandingPage() {
  return (
    <Layout showBottomNav showFooter>
      <section className="relative min-h-[80vh] flex items-center px-margin-mobile md:px-margin-desktop py-lg overflow-hidden bg-surface-container-low">
        <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-lg items-center relative z-10">
          <div className="space-y-md">
            <h1 className="text-[40px] md:text-[64px] leading-tight text-primary font-extrabold tracking-tight">
              Know Your Gold.
              <br />
              Prove Its Value.
              <br />
              Sell Fairly.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              GoldTrace Zambia connects artisanal miners directly to global markets through secure,
              blockchain-backed traceability. No middlemen. No uncertainty. Just fair trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-base pt-sm">
              <Link
                to="/register"
                className="px-lg py-md bg-primary text-on-primary text-label-md rounded-xl flex items-center justify-center gap-sm hover:shadow-lg transition-all active:scale-95"
              >
                Register as Miner
                <Icon name="arrow_forward" />
              </Link>
              <Link
                to="/register?role=buyer"
                className="px-lg py-md border-2 border-primary text-primary text-label-md rounded-xl flex items-center justify-center gap-sm hover:bg-primary-fixed transition-all active:scale-95"
              >
                Become a Verified Buyer
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-all duration-700" />
            <img
              className="relative z-10 w-full h-auto rounded-full border-8 border-white shadow-xl transition-transform duration-500 hover:scale-105"
              src={IMAGES.heroMiner}
              alt="Zambian artisanal miner using smartphone to scan QR code on gold bar"
            />
            <div className="absolute top-10 right-0 glass-card p-base rounded-xl shadow-md animate-bounce z-20" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-sm">
                <Icon name="stars" filled className="text-secondary" />
                <div>
                  <p className="text-xs font-bold text-primary">Verified Origin</p>
                  <p className="text-[10px] text-on-surface-variant">Block ID: 04X-992</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-lg">
            <h2 className="text-headline-md text-primary mb-base">Transparency at Every Step</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              We eliminate the complexity and corruption of the traditional gold supply chain with three core pillars.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-base md:gap-md">
            <div className="md:col-span-7 bg-white border border-outline-variant p-md rounded-xl gold-accent-top hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-md">
                <div>
                  <Icon name="payments" className="text-primary text-[32px]" />
                  <h3 className="text-headline-sm text-primary mt-sm">Transparent Pricing</h3>
                </div>
                <span className="px-sm py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold">LIVE MARKET DATA</span>
              </div>
              <p className="text-on-surface-variant mb-lg">
                Access real-time LBMA prices directly on your phone. Know the exact value of your gold before you talk to a buyer.
              </p>
              <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant/30">
                <div className="flex justify-between items-center py-xs border-b border-outline-variant/30">
                  <span className="text-xs text-on-surface-variant">Global Gold Price (oz)</span>
                  <span className="text-xs font-bold text-primary">$0.00</span>
                </div>
                <div className="flex justify-between items-center py-xs">
                  <span className="text-xs text-on-surface-variant">Current Market Spread</span>
                  <span className="text-xs font-bold text-secondary">0.00%</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-primary-container text-white p-md rounded-xl flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <Icon name="qr_code_scanner" className="text-secondary-fixed text-[32px]" />
                <h3 className="text-headline-sm text-primary-fixed mt-sm">Digital Proof of Origin</h3>
                <p className="text-on-primary-container mt-base">
                  Every gram of gold is tagged with a unique digital certificate that proves its source and ethical mining practices.
                </p>
              </div>
              <div className="mt-lg">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary-container bg-surface-dim overflow-hidden">
                    <img className="w-full h-full object-cover" src={IMAGES.minerPortrait1} alt="Certified miner" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary-container bg-surface-dim overflow-hidden">
                    <img className="w-full h-full object-cover" src={IMAGES.minerPortrait2} alt="Mining inspector" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary-container bg-surface-dim flex items-center justify-center bg-secondary text-[10px] font-bold">
                    +2k
                  </div>
                </div>
                <p className="text-[10px] mt-2 text-on-primary-container">Certified miners in the Lufwanyama district</p>
              </div>
            </div>

            <div className="md:col-span-5 bg-surface-container-highest border border-outline-variant p-md rounded-xl hover:shadow-md transition-all">
              <Icon name="security" className="text-primary text-[32px]" />
              <h3 className="text-headline-sm text-primary mt-sm">Cut Out Middlemen</h3>
              <p className="text-on-surface-variant mt-base">
                Stop losing 40% of your value to unlicensed aggregates. GoldTrace creates a direct, legally protected corridor to international refiners.
              </p>
            </div>

            <div className="md:col-span-7 bg-white border border-outline-variant p-md rounded-xl hover:shadow-md transition-all relative overflow-hidden">
              <div className="relative z-10">
                <Icon name="gavel" className="text-secondary text-[32px]" />
                <h3 className="text-headline-sm text-primary mt-sm">Fully Compliant</h3>
                <p className="text-on-surface-variant mt-base">
                  Built in collaboration with the Ministry of Mines. All transactions are automatically reported for tax and royalty compliance, keeping you safe from legal risks.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <Icon name="description" className="text-[120px] translate-x-10 translate-y-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-lg items-center">
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-auto rounded-xl shadow-2xl border border-outline-variant"
              src={IMAGES.mobileApp}
              alt="GoldTrace mobile app showing verified transaction dashboard"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-md">
            <h2 className="text-headline-md text-primary">Mining Simplified. Profit Maximized.</h2>
            {[
              { icon: 'smartphone', title: 'Instant Mobile Verification', desc: 'Register your production in seconds using our low-bandwidth mobile app. Works even in remote areas.' },
              { icon: 'history_edu', title: 'Immutable Ledger', desc: 'Your transaction history is locked on the blockchain, providing a credible financial record for bank loans.' },
              { icon: 'hub', title: 'Global Buyer Network', desc: 'Instantly connect with verified international refiners who value ethical, traceable Zambian gold.' },
            ].map((feature) => (
              <div key={feature.title} className="flex gap-md">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-outline-variant">
                  <Icon name={feature.icon} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-label-md text-primary">{feature.title}</h4>
                  <p className="text-body-md text-on-surface-variant">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1280px] mx-auto bg-primary rounded-3xl p-lg relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-md">
            <div className="max-w-2xl">
              <h2 className="text-white text-headline-md md:text-display-lg mb-sm">Ready to secure your future in gold?</h2>
              <p className="text-on-primary-container text-body-lg">
                Join thousands of miners and buyers building a fairer gold industry in Zambia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-base">
              <Link to="/register" className="px-lg py-md bg-secondary-fixed text-on-secondary-fixed font-bold rounded-xl hover:shadow-lg transition-all active:scale-95">
                Register Now
              </Link>
              <button type="button" className="px-lg py-md border-2 border-on-primary-container text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
