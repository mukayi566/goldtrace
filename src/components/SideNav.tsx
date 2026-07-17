import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../constants/images'
import { Icon } from './ui'

interface SideNavProps {
  active?: string
  children?: ReactNode
}

const navItems = [
  { id: 'dashboard', icon: 'dashboard', label: 'Dashboard', to: '/miner' },
  { id: 'inventory', icon: 'inventory_2', label: 'Inventory', to: '/verification' },
  { id: 'transactions', icon: 'receipt_long', label: 'Trade Center', to: '/trade-center' },
  { id: 'reports', icon: 'analytics', label: 'Reports', to: '/government' },
  { id: 'settings', icon: 'settings', label: 'Settings', to: '/register' },
]

export function SideNav({ active = 'dashboard' }: SideNavProps) {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container border-r border-outline-variant p-base z-40">
      <Link to="/" className="flex items-center gap-sm mb-lg px-base">
        <img alt="GoldTrace Logo" className="h-8 w-8 object-contain" src={IMAGES.logo} />
        <div>
          <h3 className="text-headline-md font-bold text-primary">GoldTrace</h3>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Enterprise Traceability</p>
        </div>
      </Link>

      <nav className="flex-grow space-y-xs">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className={`rounded-full px-md py-base flex items-center gap-sm cursor-pointer transition-all ${
              active === item.id
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <Icon name={item.icon} />
            <span className="text-label-md">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-outline-variant pt-md space-y-xs">
        <Link
          to="/trade-center"
          className="w-full bg-primary text-on-primary font-bold py-sm rounded-lg mb-md active:scale-95 transition-transform flex items-center justify-center gap-xs"
        >
          New Transaction
        </Link>
        <div className="text-on-surface-variant hover:bg-surface-container-high transition-all rounded-full px-md py-base flex items-center gap-sm cursor-pointer">
          <Icon name="help" />
          <span className="text-label-md">Support</span>
        </div>
        <Link
          to="/login"
          className="text-on-surface-variant hover:bg-surface-container-high transition-all rounded-full px-md py-base flex items-center gap-sm cursor-pointer"
        >
          <Icon name="logout" className="text-error" />
          <span className="text-label-md">Logout</span>
        </Link>
      </div>
    </aside>
  )
}
