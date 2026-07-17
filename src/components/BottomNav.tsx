import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from './ui'

const items = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/miner', icon: 'account_balance_wallet', label: 'Vault' },
  { to: '/verification', icon: 'history_edu', label: 'Ledger' },
  { to: '#menu', icon: 'menu', label: 'Menu' },
]

const menuItems = [
  { to: '/miner', icon: 'dashboard', label: 'Dashboard' },
  { to: '/trade-center', icon: 'payments', label: 'Trade Center' },
  { to: '/verification', icon: 'verified', label: 'Verification' },
]

export function BottomNav() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="absolute bottom-20 left-4 right-4 bg-surface rounded-2xl p-4 shadow-xl border border-outline-variant animate-in slide-in-from-bottom-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              <p className="text-label-sm text-on-surface-variant px-2 mb-2 uppercase tracking-wider">Quick Access</p>
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container-high active:bg-surface-container-highest transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <Icon name={item.icon} />
                  </div>
                  <span className="font-bold text-on-surface">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant shadow-sm rounded-t-2xl">
        {items.map((item) => {
          const isActive = location.pathname === item.to
          const isMenuTrigger = item.to === '#menu'

          const content = (
            <div className={`flex flex-col items-center justify-center rounded-full px-4 py-1 active:scale-90 transition-transform ${
              isActive || (isMenuTrigger && isMenuOpen) ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant'
            }`}>
              <Icon name={item.icon} filled={isActive || (isMenuTrigger && isMenuOpen)} />
              <span className={`text-[10px] ${isActive || (isMenuTrigger && isMenuOpen) ? 'font-bold' : ''}`}>{item.label}</span>
            </div>
          )

          if (isMenuTrigger) {
            return (
              <button
                key={item.label}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="outline-none"
              >
                {content}
              </button>
            )
          }

          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
            >
              {content}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
