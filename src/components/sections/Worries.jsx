import { useTranslation } from 'react-i18next'
import { DollarSign, Clock, FileText, Globe } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const icons = [DollarSign, Clock, FileText, Globe]

export default function Worries() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('worries.items', { returnObjects: true })

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('worries.title')}</h2>
          <p className="section-subtitle">{t('worries.subtitle')}</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.worry}</h3>
                </div>
                <div className="flex items-start gap-3 pl-1">
                  <span className="text-secondary font-bold text-xl mt-0.5">→</span>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
