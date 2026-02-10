import { useTranslation } from 'react-i18next'
import { MessageSquare, Headphones, Users, PartyPopper } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const stepIcons = [MessageSquare, Headphones, Users, PartyPopper]

export default function Flow() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const steps = t('flow.steps', { returnObjects: true })

  return (
    <section className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            FLOW
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            {t('flow.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            {t('flow.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <div key={i} className="relative group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gray-200" />
                )}

                <div className="relative z-10 text-center">
                  {/* Step number + icon */}
                  <div className="relative w-16 h-16 mx-auto mb-6">
                    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-primary/20 group-hover:shadow-md transition-all">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
