import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Users, TrendingUp, Award } from 'lucide-react'

/**
 * Cinematic parallax hero with background image,
 * staggered text reveal, and floating stat cards.
 */
export default function HomeHero() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 700),
      setTimeout(() => setStep(3), 1100),
      setTimeout(() => setStep(4), 1500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-16 sm:pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_banner.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />
      </div>

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-3xl animate-float" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-400/[0.04] blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: text content (3 cols) */}
          <div className="lg:col-span-3 max-w-2xl">
            {/* Logo */}
            <div className={`mb-6 sm:mb-8 transition-all duration-700 ease-out ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img src="/images/logo_wide.png" alt="BLINK AI" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
            </div>

            {/* Tagline */}
            <p className={`text-xs sm:text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4 sm:mb-5 transition-all duration-700 ease-out ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {t('homeHero.tagline')}
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.1] mb-5 sm:mb-7 tracking-tight">
              <span className={`inline-block transition-all duration-700 ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {t('homeHero.title1')}
              </span>
              <br />
              <span className={`inline-block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent transition-all duration-700 ease-out delay-100 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {t('homeHero.titleHighlight')}
              </span>
              <span className={`inline-block transition-all duration-700 ease-out delay-200 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {t('homeHero.title2')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg mb-7 sm:mb-9 transition-all duration-700 ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {t('homeHero.subtitle')}
            </p>

            {/* CTA buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link to="/for-companies" className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                企業様はこちら
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/for-job-seekers" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary font-bold text-sm sm:text-base px-7 py-3.5 rounded-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                お仕事をお探しの方
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className={`flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-10 transition-all duration-700 ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                有料職業紹介事業許可
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                120社+ 導入実績
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                AI搭載マッチング
              </div>
            </div>
          </div>

          {/* Right: floating stat cards (2 cols) */}
          <div className={`hidden lg:block lg:col-span-2 relative transition-all duration-1000 ease-out delay-500 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="relative space-y-4">
              {/* Card 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/80 p-6 ml-8 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary">3<span className="text-lg font-bold">日</span></p>
                    <p className="text-xs text-gray-500 font-medium">平均マッチング期間</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/80 p-6 mr-8 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-green-600">98<span className="text-lg font-bold">%</span></p>
                    <p className="text-xs text-gray-500 font-medium">顧客満足度</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/80 p-6 ml-12 animate-float" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-amber-600">120<span className="text-lg font-bold">社+</span></p>
                    <p className="text-xs text-gray-500 font-medium">導入企業数</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100/80 p-6 mr-4 animate-float" style={{ animationDelay: '2.2s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-purple-600">90<span className="text-lg font-bold">%+</span></p>
                    <p className="text-xs text-gray-500 font-medium">人材定着率</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`hidden sm:flex items-center gap-3 text-gray-400 mt-8 lg:mt-12 transition-all duration-700 ease-out ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-9 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        </div>
      </div>
    </section>
  )
}
