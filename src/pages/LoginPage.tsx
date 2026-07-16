import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Icon } from '../components/ui'
import { IMAGES } from '../constants/images'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'miner' | 'buyer' | 'government'>('miner')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate based on selected role
    if (role === 'miner') navigate('/miner')
    else if (role === 'buyer') navigate('/buyer')
    else if (role === 'government') navigate('/government')
  }

  return (
    <Layout headerVariant="minimal" showFooter={false}>
      <main className="flex-grow flex items-center justify-center bg-[#f8f9fa] py-lg px-margin-mobile bg-pattern min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl w-full">
          <div className="bg-white border border-outline-variant rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Left Side - Info/Branding */}
            <div className="md:w-5/12 bg-primary p-lg text-on-primary flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <Icon name="security" className="text-[200px]" />
              </div>
              
              <div className="relative z-10">
                <Link to="/" className="flex items-center gap-base mb-xl">
                  <div className="bg-white p-2 rounded-lg">
                    <img alt="GoldTrace Logo" className="h-8 w-8 object-contain" src={IMAGES.logo} />
                  </div>
                  <span className="text-headline-sm font-bold">GoldTrace</span>
                </Link>
                
                <h2 className="text-display-sm font-bold mb-md leading-tight">Secure Access to the Ledger</h2>
                <p className="text-on-primary/80 mb-lg">
                  Access Zambia's official gold traceability platform. Verified credentials required for all participants.
                </p>
                
                <div className="space-y-md">
                  <div className="flex items-center gap-base">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Icon name="verified" />
                    </div>
                    <span className="text-label-lg">Blockchain Verified</span>
                  </div>
                  <div className="flex items-center gap-base">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Icon name="gavel" />
                    </div>
                    <span className="text-label-lg">Ministry Compliant</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-xl">
                <p className="text-xs opacity-60">
                  Authorized by the Ministry of Mines and Mineral Development
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-grow p-md md:p-xl bg-white">
              <div className="mb-lg">
                <h3 className="text-headline-md text-primary font-bold mb-xs">Sign In</h3>
                <p className="text-on-surface-variant">Select your role and enter credentials</p>
              </div>

              <form className="space-y-md" onSubmit={handleLogin}>
                {/* Role Selection */}
                <div className="grid grid-cols-3 gap-sm mb-lg">
                  {[
                    { id: 'miner', label: 'Miner', icon: 'construction' },
                    { id: 'buyer', label: 'Buyer', icon: 'account_balance' },
                    { id: 'government', label: 'Govt', icon: 'policy' }
                  ].map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRole(r.id as any)}
                      className={`flex flex-col items-center p-sm border-2 rounded-xl transition-all ${
                        role === r.id 
                          ? 'border-primary bg-primary/5 text-primary' 
                          : 'border-outline-variant hover:border-primary/30 text-on-surface-variant'
                      }`}
                    >
                      <Icon name={r.icon} className="mb-xs" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{r.label}</span>
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block font-bold text-xs text-on-surface mb-xs uppercase tracking-widest">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-on-surface-variant">
                      <Icon name="mail" />
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-md py-sm transition-all"
                      placeholder="name@organization.zm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-xs">
                    <label className="block font-bold text-xs text-on-surface uppercase tracking-widest">
                      Password
                    </label>
                    <a href="#" className="text-[10px] text-primary font-bold hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-on-surface-variant">
                      <Icon name="lock" />
                    </span>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-md py-sm transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-sm">
                  <input type="checkbox" id="remember" className="text-primary focus:ring-primary rounded border-outline-variant" />
                  <label htmlFor="remember" className="text-sm text-on-surface-variant">
                    Stay signed in for 30 days
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-sm"
                >
                  Access Dashboard
                  <Icon name="arrow_forward" />
                </button>
              </form>

              <div className="mt-xl pt-lg border-t border-outline-variant text-center">
                <p className="text-sm text-on-surface-variant">
                  New to GoldTrace?{' '}
                  <Link to="/register" className="text-primary font-bold hover:underline">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-lg flex justify-between items-center px-sm">
            <div className="flex gap-md">
              <a href="#" className="text-[10px] text-on-surface-variant font-bold hover:text-primary transition-colors">HELP CENTER</a>
              <a href="#" className="text-[10px] text-on-surface-variant font-bold hover:text-primary transition-colors">SECURITY POLICY</a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
