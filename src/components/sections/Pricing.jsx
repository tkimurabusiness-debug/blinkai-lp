import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function Pricing() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('pricing.items', { returnObjects: true })

  return (
    <section className="py-20 md:py-28 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">{t('pricing.subtitle')}</p>
        </div>

        <div
          ref={ref}
          className={`max-w-lg mx-auto transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white border-2 border-primary rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-primary p-8 text-center">
              <p className="text-primary-200 text-sm font-medium mb-2">{t('pricing.freeLabel')}</p>
              <p className="text-6xl font-black text-white">{t('pricing.free')}</p>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{item.label}</span>
                    <span className={`font-bold ${item.value === '成果報酬' || item.value === 'Trả phí' || item.value === 'सफलता शुल्क' ? 'text-accent' : 'text-secondary'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 text-center mt-6">{t('pricing.note')}</p>

              <Link to="/for-companies#contact" className="btn-primary w-full mt-6 justify-center">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
