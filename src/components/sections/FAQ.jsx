import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

function AccordionItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-semibold text-gray-900 pr-4 group-hover:text-primary transition-colors tracking-tight">
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
          isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'
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
    <section className="py-28 md:py-36 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Title */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              {t(`${faqKey}.title`)}
            </h2>
          </div>

          {/* Right - Accordion */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
      </div>
    </section>
  )
}
