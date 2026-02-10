import { useTranslation } from 'react-i18next'
import { Zap, DollarSign, Target } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const featureIcons = [Zap, DollarSign, Target]
const featureKeys = ['speed', 'cost', 'quality']
const featureColors = [
  'from-blue-500 to-primary',
  'from-emerald-500 to-secondary',
  'from-amber-500 to-accent',
]

export default function Features() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-20 md:py-28 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">{t('features.subtitle')}</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={key}
                className="card text-center group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${featureColors[i]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {t(`features.${key}.desc`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
