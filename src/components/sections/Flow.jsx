import { useTranslation } from 'react-i18next'
import { MessageSquare, Headphones, Users, PartyPopper } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const stepIcons = [MessageSquare, Headphones, Users, PartyPopper]

export default function Flow() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const steps = t('flow.steps', { returnObjects: true })

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('flow.title')}</h2>
          <p className="section-subtitle">{t('flow.subtitle')}</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-primary/20 z-0" />
                )}

                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-primary/10">
                    <div className="absolute -top-3 -right-1 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
