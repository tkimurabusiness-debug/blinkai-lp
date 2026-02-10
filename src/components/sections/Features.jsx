import { useTranslation } from 'react-i18next'
import { Zap, DollarSign, Target } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const featureIcons = [Zap, DollarSign, Target]
const featureKeys = ['speed', 'cost', 'quality']

export default function Features() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-28 md:py-36 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            WHY BLINK AI
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            {t('features.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-px bg-gray-200 rounded-3xl overflow-hidden transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={key}
                className="bg-white p-10 md:p-12 group hover:bg-gray-50 transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 mb-8 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
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
