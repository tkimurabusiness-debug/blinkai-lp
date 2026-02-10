import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function FinalCTA() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          {t('finalCta.title')}
        </h2>
        <p className="text-lg text-primary-200 mb-10">
          {t('finalCta.subtitle')}
        </p>

        <Link
          to="/for-companies#contact"
          className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-primary-dark bg-white rounded-xl shadow-2xl hover:bg-gray-50 transition-all transform hover:scale-105 hover:shadow-3xl"
        >
          {t('finalCta.cta')}
          <ArrowRight className="w-6 h-6 ml-3" />
        </Link>

        <div className="flex items-center justify-center gap-2 mt-6 text-primary-200 text-sm">
          <Shield className="w-4 h-4" />
          <span>{t('finalCta.note')}</span>
        </div>
      </div>
    </section>
  )
}
