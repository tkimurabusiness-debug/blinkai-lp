import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Blink<span className="text-primary-300">AI</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.service')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/for-companies" className="text-sm hover:text-white transition-colors">
                  {t('footer.forCompanies')}
                </Link>
              </li>
              <li>
                <Link to="/for-job-seekers" className="text-sm hover:text-white transition-colors">
                  {t('footer.forJobSeekers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.about')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary-300" />
                <span>03-XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary-300" />
                <span>info@blinkai.jp</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary-300 mt-0.5" />
                <span>東京都渋谷区</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
