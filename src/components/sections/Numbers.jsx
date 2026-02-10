import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../utils/useScrollAnimation'
import { useCountUp } from '../../utils/useCountUp'

function NumberCard({ number, unit, label, delay, visible }) {
  const count = useCountUp(number, 2000, visible)

  return (
    <div
      className="text-center p-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl md:text-6xl font-black text-white mb-2">
        {typeof count === 'number' ? count : number}
        <span className="text-2xl md:text-3xl font-bold text-primary-200">{unit}</span>
      </div>
      <div className="text-primary-200 text-sm font-medium">{label}</div>
    </div>
  )
}

export default function Numbers() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('numbers.items', { returnObjects: true })

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('numbers.title')}</h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">{t('numbers.subtitle')}</p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {items.map((item, i) => (
            <NumberCard
              key={i}
              number={item.number}
              unit={item.unit}
              label={item.label}
              delay={i * 200}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
