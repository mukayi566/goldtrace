import { Link, useLocation } from 'react-router-dom'
import { IMAGES } from '../constants/images'

const navLinks = [
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/verification', label: 'Verification' },
  { to: '/miner', label: 'Miner' },
  { to: '/buyer', label: 'Buyer' },
  { to: '/government', label: 'Government' },
]

interface HeaderProps {
  variant?: 'default' | 'minimal' | 'dashboard'
  activeNav?: string
  showLogin?: boolean
}

export function Header({ variant = 'default', activeNav, showLogin = true }: HeaderProps) {
  const location = useLocation()

  if (variant === 'minimal') {
    return (
      <header className="h-20 w-full flex items-center px-margin-mobile md:px-margin-desktop bg-surface border-b border-outline-variant">
        <Link to="/" className="flex items-center gap-base">
          <img alt="GoldTrace Logo" className="h-10 w-10 object-contain" src={IMAGES.logo} />
          <span className="text-headline-md font-bold text-primary">GoldTrace</span>
        </Link>
        <div className="ml-auto hidden md:flex items-center gap-sm">
          <span className="text-on-surface-variant text-label-md">Already have an account?</span>
          <Link to="/login" className="text-primary font-bold hover:underline cursor-pointer">
            Login
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-base">
        <span className="text-headline-md font-bold text-primary hidden sm:inline">GoldTrace</span>
      </Link>

      {variant === 'default' && (
        <nav className="hidden md:flex gap-md items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-label-md transition-colors py-1 ${
                (activeNav || location.pathname) === link.to
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="flex items-center gap-sm">
        {showLogin && (
          <Link
            to="/login"
            className="hidden md:block px-md py-base text-label-md text-primary border-2 border-primary rounded-lg active:opacity-80 transition-all text-center"
          >
            Login
          </Link>
        )}
        <Link
          to="/register"
          className="px-md py-base text-label-md bg-primary text-on-primary rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}
