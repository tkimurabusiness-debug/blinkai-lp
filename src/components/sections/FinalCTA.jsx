import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function FinalCTA() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-28 md:py-36 bg-primary relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[200px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
          {t('finalCta.title')}
        </h2>
        <p className="text-lg text-primary-200 mb-12 max-w-2xl mx-auto">
          {t('finalCta.subtitle')}
        </p>

        <Link
          to="/for-companies#contact"
          className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-primary bg-white rounded-full shadow-2xl hover:shadow-3xl hover:bg-gray-50 transition-all duration-300"
        >
          {t('finalCta.cta')}
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="mt-6 text-primary-200 text-sm">
          {t('finalCta.note')}
        </p>
      </div>
    </section>
  )
}
