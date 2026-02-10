import { useTranslation } from 'react-i18next'
import { MessageSquare, Headphones, Cpu, Video, FileCheck, HeartHandshake } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const stepIcons = [MessageSquare, Headphones, Cpu, Video, FileCheck, HeartHandshake]

export default function Flow() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const steps = t('flow.steps', { returnObjects: true })

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6">
            FLOW
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4 sm:mb-6">
            {t('flow.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl">
            {t('flow.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {steps.map((step, i) => {
            const Icon = stepIcons[i] || MessageSquare
            return (
              <div key={i} className="relative group">
                {/* Connector arrow - desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-3 w-6 text-gray-300 z-10 items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                <div className="relative z-10 text-center bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-4 sm:p-6 md:p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mx-auto mb-3 sm:mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight text-sm sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
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
