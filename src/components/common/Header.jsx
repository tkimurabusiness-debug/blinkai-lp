import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/for-companies', label: t('nav.forCompanies') },
    { to: '/for-job-seekers', label: t('nav.forJobSeekers') },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/logo_wide.png"
              alt="BLINK AI"
              className="h-7 sm:h-8 lg:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav - lg以上で表示 */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium tracking-wide transition-colors relative group whitespace-nowrap ${
                  location.pathname === item.to
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === item.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <Link
              to="/for-companies#contact"
              className="hidden md:inline-flex items-center px-4 lg:px-6 py-2 bg-primary text-white text-xs font-medium rounded-full hover:bg-primary-light transition-all whitespace-nowrap"
            >
              {t('nav.freeCta')}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - lg以下で表示 */}
      <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
        mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.to ? 'text-primary bg-primary-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >{item.label}</Link>
          ))}
          <div className="pt-2 pb-1 px-4 sm:hidden">
            <LanguageSwitcher />
          </div>
          <Link to="/for-companies#contact" className="block w-full text-center px-4 py-3 bg-primary text-white font-medium rounded-full mt-2 text-sm">
            {t('nav.freeCta')}
          </Link>
        </div>
      </div>
    </header>
  )
}
