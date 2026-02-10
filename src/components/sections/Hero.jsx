import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function Hero() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation(0.1)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left - Text */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t('hero.badge')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              {t('hero.title1')}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
              {t('hero.title2')}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/for-companies#contact" className="btn-primary text-center">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/for-companies" className="btn-secondary text-center">
                {t('hero.secondaryCta')}
              </Link>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-black text-primary">
                  {t('hero.stats.companiesNum')}<span className="text-sm font-semibold">{t('hero.stats.companiesUnit')}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{t('hero.stats.companies')}</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-2xl font-black text-primary">
                  {t('hero.stats.matchingNum')}<span className="text-sm font-semibold">{t('hero.stats.matchingUnit')}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{t('hero.stats.matching')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-primary">
                  {t('hero.stats.satisfactionNum')}<span className="text-sm font-semibold">{t('hero.stats.satisfactionUnit')}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{t('hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image placeholder - gradient card */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI Matching</h3>
                  <p className="text-white/80 text-sm">Powered by BlinkAI</p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-semibold">{t('hero.stats.matchingNum')}{t('hero.stats.matchingUnit')}</span>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">{t('hero.stats.satisfactionNum')}{t('hero.stats.satisfactionUnit')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Zap(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
