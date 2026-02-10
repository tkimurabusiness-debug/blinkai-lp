import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Phone, Globe, Zap, DollarSign,
  HardHat, Factory, Truck, UtensilsCrossed,
  MessageCircle, User, Briefcase, PartyPopper,
  Star, Quote, ChevronDown
} from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '../utils/useScrollAnimation'

function JobSeekerHero() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation(0.1)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="absolute top-20 right-0 w-96 h-96 bg-line/5 rounded-full blur-3xl" />

      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-line/10 text-line text-sm font-semibold rounded-full mb-6">
            <span className="w-2 h-2 bg-line rounded-full animate-pulse" />
            {t('jobSeeker.hero.badge')}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            {t('jobSeeker.hero.title1')}
            <br />
            {t('jobSeeker.hero.title2')}
            <span className="text-line">{t('jobSeeker.hero.titleHighlight')}</span>
            {t('jobSeeker.hero.title3')}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t('jobSeeker.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="btn-line text-lg px-10 py-5">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              {t('jobSeeker.hero.lineCta')}
            </a>
          </div>

          {/* QR Code placeholder */}
          <div className="mt-8">
            <div className="w-32 h-32 mx-auto bg-white rounded-2xl shadow-lg border-2 border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-400">QR Code</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{t('jobSeeker.hero.scanQr')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const benefits = [
    { key: 'noPhone', icon: Phone, color: 'bg-blue-50 text-blue-500' },
    { key: 'nativeLang', icon: Globe, color: 'bg-green-50 text-green-500' },
    { key: 'fast', icon: Zap, color: 'bg-amber-50 text-amber-500' },
    { key: 'free', icon: DollarSign, color: 'bg-purple-50 text-purple-500' },
  ]

  return (
    <section className="py-16 bg-white">
      <div ref={ref} className={`max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {benefits.map(({ key, icon: Icon, color }) => (
          <div key={key} className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 mx-auto mb-3 rounded-xl ${color} flex items-center justify-center`}>
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1 text-sm">{t(`jobSeeker.benefits.${key}`)}</h3>
            <p className="text-xs text-gray-500">{t(`jobSeeker.benefits.${key}Desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Jobs() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('jobSeeker.jobs.items', { returnObjects: true })
  const jobIcons = [HardHat, Factory, Truck, UtensilsCrossed]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('jobSeeker.jobs.title')}</h2>
        <p className="section-subtitle">{t('jobSeeker.jobs.subtitle')}</p>

        <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {items.map((job, i) => {
            const Icon = jobIcons[i]
            return (
              <div key={i} className="card text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-sm text-accent font-semibold">{job.salary}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Senpai() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('jobSeeker.senpai.items', { returnObjects: true })
  const flags = { VN: '🇻🇳', NP: '🇳🇵', PH: '🇵🇭' }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('jobSeeker.senpai.title')}</h2>
        <p className="section-subtitle">{t('jobSeeker.senpai.subtitle')}</p>

        <div ref={ref} className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {items.map((item, i) => (
            <div key={i} className="card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-line/10 rounded-full flex items-center justify-center text-2xl">
                  {flags[item.flag] || '🌏'}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.country} / {item.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowTo() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const steps = t('jobSeeker.howTo.steps', { returnObjects: true })
  const stepIcons = [MessageCircle, User, Briefcase, PartyPopper]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('jobSeeker.howTo.title')}</h2>
        <p className="section-subtitle">{t('jobSeeker.howTo.subtitle')}</p>

        <div ref={ref} className={`grid md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <div key={i} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-line/20 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-line/10">
                    <div className="absolute -top-3 -right-1 w-7 h-7 bg-line text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <Icon className="w-8 h-8 text-line" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                  {step.time && (
                    <span className="inline-block mt-2 text-xs bg-line/10 text-line px-2 py-1 rounded-full font-medium">
                      {step.time}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function JobSeekerFAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, visible] = useScrollAnimation()
  const items = t('jobSeeker.faq.items', { returnObjects: true })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{t('jobSeeker.faq.title')}</h2>

        <div ref={ref} className={`max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {items.map((item, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-semibold text-gray-900 pr-4 group-hover:text-line transition-colors">
                  {item.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-line' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JobSeekerFinalCTA() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-20 bg-gradient-to-br from-line via-green-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <div ref={ref} className={`relative max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          {t('jobSeeker.finalCta.title')}
        </h2>
        <p className="text-lg text-green-100 mb-10">
          {t('jobSeeker.finalCta.subtitle')}
        </p>

        <a href="#" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-line bg-white rounded-xl shadow-2xl hover:bg-gray-50 transition-all transform hover:scale-105">
          <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          {t('jobSeeker.finalCta.lineCta')}
        </a>

        {/* QR Code */}
        <div className="mt-8">
          <div className="w-28 h-28 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-400">QR Code</span>
            </div>
          </div>
          <p className="text-sm text-green-100 mt-2">{t('jobSeeker.finalCta.scanQr')}</p>
        </div>
      </div>
    </section>
  )
}

export default function ForJobSeekers() {
  return (
    <>
      <JobSeekerHero />
      <Benefits />
      <Jobs />
      <Senpai />
      <HowTo />
      <JobSeekerFAQ />
      <JobSeekerFinalCTA />
    </>
  )
}
