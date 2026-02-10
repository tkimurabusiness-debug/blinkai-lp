import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function HomeHero() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 600),
      setTimeout(() => setStep(3), 1000),
      setTimeout(() => setStep(4), 1400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-16 sm:pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent" />
        {/* Animated circles */}
        <div className={`absolute top-[15%] right-[10%] w-64 h-64 rounded-full border border-primary/10 transition-all duration-[2s] ease-out ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute top-[25%] right-[5%] w-96 h-96 rounded-full border border-primary/5 transition-all duration-[2.5s] ease-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute bottom-[10%] left-[5%] w-48 h-48 rounded-full bg-primary/[0.03] transition-all duration-[2s] ease-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        {/* Floating dots */}
        <div className={`absolute top-[30%] right-[20%] w-2 h-2 rounded-full bg-primary/20 animate-float transition-opacity duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute top-[50%] right-[30%] w-3 h-3 rounded-full bg-primary/10 animate-float transition-opacity duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-[30%] right-[15%] w-2 h-2 rounded-full bg-primary/15 animate-float transition-opacity duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 w-full">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className={`text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] text-primary uppercase mb-4 sm:mb-8 transition-all duration-700 ease-out ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {t('homeHero.tagline')}
          </p>

          {/* Main Title - staggered animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.1] mb-6 sm:mb-8 tracking-tight">
            <span className={`inline-block transition-all duration-700 ease-out ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t('homeHero.title1')}
            </span>
            <br />
            <span className={`inline-block text-primary transition-all duration-700 ease-out delay-150 ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t('homeHero.titleHighlight')}
            </span>
            <span className={`inline-block transition-all duration-700 ease-out delay-300 ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t('homeHero.title2')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-8 sm:mb-12 transition-all duration-700 ease-out ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {t('homeHero.subtitle')}
          </p>

          {/* Scroll indicator */}
          <div className={`hidden sm:flex items-center gap-3 text-gray-400 transition-all duration-700 ease-out ${
            step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="w-7 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1 h-2.5 bg-gray-400 rounded-full animate-bounce" />
            </div>
            <span className="text-xs tracking-widest uppercase">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  )
}
