import { useTranslation } from 'react-i18next'
import { Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function Testimonials() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('testimonials.items', { returnObjects: true })

  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            VOICE
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 relative group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/5 group-hover:text-primary/10 transition-colors" />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                {item.text}
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-200/60">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.role} / {item.company}
                  </p>
                </div>
                <span className="ml-auto text-xs text-gray-400 font-medium">
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
