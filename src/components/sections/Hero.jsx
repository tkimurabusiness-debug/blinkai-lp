import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 500),
      setTimeout(() => setStep(3), 900),
      setTimeout(() => setStep(4), 1300),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/30" />
        <div className={`absolute top-[20%] right-[8%] w-72 h-72 rounded-full border border-primary/10 transition-all duration-[2s] ease-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute top-[10%] right-[3%] w-[450px] h-[450px] rounded-full border border-primary/5 transition-all duration-[2.5s] ease-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="max-w-xl">
            <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 text-primary text-xs font-semibold tracking-wider rounded-full mb-4 sm:mb-8 uppercase transition-all duration-700 ease-out ${
              step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              {t('hero.badge')}
            </div>

            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.15] mb-4 sm:mb-8 tracking-tight transition-all duration-700 ease-out ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t('hero.title1')}
              <span className="text-primary">{t('hero.titleHighlight')}</span>
              {t('hero.title2')}
            </h1>

            <p className={`text-sm sm:text-lg text-gray-500 leading-relaxed mb-6 sm:mb-10 transition-all duration-700 ease-out ${
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              {t('hero.subtitle')}
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-700 ease-out ${
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <Link to="/for-companies#contact" className="btn-primary text-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
              <Link to="/for-companies" className="btn-secondary text-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                {t('hero.secondaryCta')}
              </Link>
            </div>

            {/* Mini Stats */}
            <div className={`grid grid-cols-3 gap-3 sm:gap-6 transition-all duration-700 ease-out ${
              step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  {t('hero.stats.companiesNum')}<span className="text-xs sm:text-sm font-bold text-primary">{t('hero.stats.companiesUnit')}</span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-1">{t('hero.stats.companies')}</div>
              </div>
              <div className="border-l border-gray-200 pl-3 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  {t('hero.stats.matchingNum')}<span className="text-xs sm:text-sm font-bold text-primary">{t('hero.stats.matchingUnit')}</span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-1">{t('hero.stats.matching')}</div>
              </div>
              <div className="border-l border-gray-200 pl-3 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  {t('hero.stats.satisfactionNum')}<span className="text-xs sm:text-sm font-bold text-primary">{t('hero.stats.satisfactionUnit')}</span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-1">{t('hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Right - Visual with animation */}
          <div className={`hidden lg:block relative transition-all duration-1000 ease-out delay-500 ${
            step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
                <img src="/images/company_meeting.png" alt="AI Matching" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 sm:p-4 animate-float border border-gray-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">{t('hero.stats.matchingNum')}{t('hero.stats.matchingUnit')}</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 sm:p-4 animate-float border border-gray-100" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">{t('hero.stats.satisfactionNum')}{t('hero.stats.satisfactionUnit')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
