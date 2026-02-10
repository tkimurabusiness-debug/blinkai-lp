import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

function AccordionItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-gray-900 pr-4 group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ({ faqKey = 'faq' }) {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, visible] = useScrollAnimation()
  const items = t(`${faqKey}.items`, { returnObjects: true })

  return (
    <section className="py-20 md:py-28 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t(`${faqKey}.title`)}</h2>
        </div>

        <div
          ref={ref}
          className={`max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
