import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function Target() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('target.items', { returnObjects: true })

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('target.title')}</h2>
          <p className="section-subtitle">{t('target.subtitle')}</p>
        </div>

        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-100">
              <Link to="/for-companies#contact" className="btn-primary">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
