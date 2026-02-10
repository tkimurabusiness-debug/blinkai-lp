import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../utils/useScrollAnimation'
import { useCountUp } from '../../utils/useCountUp'

function NumberCard({ number, unit, label, delay, visible }) {
  const count = useCountUp(number, 2000, visible)

  return (
    <div
      className="text-center p-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tight">
        {typeof count === 'number' ? count : number}
        <span className="text-2xl md:text-3xl font-bold text-primary-300">{unit}</span>
      </div>
      <div className="text-gray-400 text-sm font-medium tracking-wide">{label}</div>
    </div>
  )
}

export default function Numbers() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('numbers.items', { returnObjects: true })

  return (
    <section className="py-28 md:py-36 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-300 uppercase mb-6">
            RESULTS
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {t('numbers.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('numbers.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800 rounded-2xl overflow-hidden transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {items.map((item, i) => (
            <div key={i} className="bg-gray-950">
              <NumberCard
                number={item.number}
                unit={item.unit}
                label={item.label}
                delay={i * 200}
                visible={visible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
