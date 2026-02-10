import { useTranslation } from 'react-i18next'
import { Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function Testimonials() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('testimonials.items', { returnObjects: true })

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">{t('testimonials.subtitle')}</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="card relative"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {item.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.role} / {item.company}
                  </p>
                </div>
                <span className="ml-auto text-xs bg-primary-50 text-primary px-2 py-1 rounded-full font-medium">
                  {item.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
