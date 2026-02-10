import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function Pricing() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('pricing.items', { returnObjects: true })

  return (
    <section className="py-28 md:py-36 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            PRICING
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-lg transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
            <div className="bg-gray-950 p-10 text-center">
              <p className="text-gray-400 text-sm font-medium mb-3">{t('pricing.freeLabel')}</p>
              <p className="text-6xl font-black text-white tracking-tight">{t('pricing.free')}</p>
            </div>

            <div className="p-10">
              <div className="space-y-4">
                {items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 text-sm">{item.label}</span>
                    <span className={`font-bold text-sm ${item.value === '成果報酬' || item.value === 'Trả phí' || item.value === 'सफलता शुल्क' ? 'text-primary' : 'text-secondary'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 text-center mt-6">{t('pricing.note')}</p>

              <Link to="/for-companies#contact" className="btn-primary w-full mt-8 justify-center">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
