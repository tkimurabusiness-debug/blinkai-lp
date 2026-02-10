import { useTranslation } from 'react-i18next'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function Target() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('target.items', { returnObjects: true })

  return (
    <section className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
              TARGET
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              {t('target.title')}
            </h2>
            <p className="text-lg text-gray-500">
              {t('target.subtitle')}
            </p>
          </div>

          {/* Right */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="space-y-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/for-companies#contact" className="btn-primary">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
