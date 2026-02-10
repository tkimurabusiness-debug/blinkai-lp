import { useTranslation } from 'react-i18next'
import { DollarSign, Clock, FileText, Globe } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const icons = [DollarSign, Clock, FileText, Globe]

export default function Worries() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('worries.items', { returnObjects: true })

  return (
    <section className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            Q&A
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            {t('worries.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            {t('worries.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 max-w-4xl transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/10 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 tracking-tight">{item.worry}</h3>
                </div>
                <div className="flex items-start gap-3 pl-1">
                  <span className="text-primary font-bold text-lg mt-0.5">→</span>
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
