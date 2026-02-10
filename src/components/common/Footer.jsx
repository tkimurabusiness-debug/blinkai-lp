import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand - 横長ロゴ */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/logo_wide.png"
                alt="BLINK AI"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed">{t('footer.description')}</p>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">{t('footer.service')}</h3>
            <ul className="space-y-3">
              <li><Link to="/for-companies" className="text-sm hover:text-white transition-colors">{t('footer.forCompanies')}</Link></li>
              <li><Link to="/for-job-seekers" className="text-sm hover:text-white transition-colors">{t('footer.forJobSeekers')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">{t('footer.about')}</h3>
            <ul className="space-y-3">
              <li><Link to="/company" className="text-sm hover:text-white transition-colors">{t('footer.about')}</Link></li>
              <li><Link to="/ceo" className="text-sm hover:text-white transition-colors">代表挨拶</Link></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li>03-XXXX-XXXX</li>
              <li>info@blinkai.jp</li>
              <li>東京都渋谷区</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
