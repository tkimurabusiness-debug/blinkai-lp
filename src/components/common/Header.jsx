import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Zap } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/for-companies', label: t('nav.forCompanies') },
    { to: '/for-job-seekers', label: t('nav.forJobSeekers') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary-light transition-colors">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Blink<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.to
                    ? 'text-primary bg-primary-50'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <a
              href="tel:03-XXXX-XXXX"
              className="hidden lg:flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t('nav.phone')}</span>
            </a>

            <Link
              to="/for-companies#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-amber-600 transition-all shadow-md hover:shadow-lg"
            >
              {t('nav.freeCta')}
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  location.pathname === item.to
                    ? 'text-primary bg-primary-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/for-companies#contact"
              className="block w-full text-center px-4 py-3 bg-accent text-white font-bold rounded-lg mt-2"
            >
              {t('nav.freeCta')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
