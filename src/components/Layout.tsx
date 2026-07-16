import type { ReactNode } from 'react'
import { BottomNav } from './BottomNav'
import { Footer } from './Footer'
import { Header } from './Header'
import { SideNav } from './SideNav'

interface LayoutProps {
  children: ReactNode
  variant?: 'landing' | 'dashboard' | 'minimal' | 'government' | 'buyer'
  headerVariant?: 'default' | 'minimal' | 'dashboard'
  activeNav?: string
  sideNavActive?: string
  showBottomNav?: boolean
  showFooter?: boolean
  showSideNav?: boolean
  className?: string
}

export function Layout({
  children,
  variant = 'landing',
  headerVariant = 'default',
  activeNav,
  sideNavActive,
  showBottomNav = false,
  showFooter = true,
  showSideNav = false,
  className = '',
}: LayoutProps) {
  const isDashboard = variant === 'dashboard' || variant === 'government' || variant === 'buyer'

  return (
    <div className={`min-h-screen flex flex-col bg-background ${className}`}>
      {headerVariant !== 'minimal' && <Header variant={headerVariant} activeNav={activeNav} />}
      {headerVariant === 'minimal' && <Header variant="minimal" />}

      <div className="flex flex-grow">
        {(showSideNav || isDashboard) && <SideNav active={sideNavActive} />}
        <div className={`flex-grow flex flex-col ${isDashboard ? 'md:ml-64' : ''}`}>
          <main className={`flex-grow ${showBottomNav ? 'pb-24 md:pb-0' : ''}`}>{children}</main>
          {showFooter && <Footer />}
        </div>
      </div>

      {showBottomNav && <BottomNav />}
    </div>
  )
}
