import { Link, useLocation } from 'react-router-dom'
import { Icon } from './ui'

const items = [
  { to: '/', icon: 'home', label: 'Home' },
  { to: '/miner', icon: 'account_balance_wallet', label: 'Vault' },
  { to: '/verification', icon: 'history_edu', label: 'Ledger' },
  { to: '/register', icon: 'menu', label: 'Menu' },
]

export function BottomNav() {
  const location = useLocation()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant shadow-sm rounded-t-2xl">
      {items.map((item) => {
        const isActive = location.pathname === item.to
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center justify-center rounded-full px-4 py-1 active:scale-90 transition-transform ${
              isActive ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant'
            }`}
          >
            <Icon name={item.icon} filled={isActive} />
            <span className={`text-[10px] ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
