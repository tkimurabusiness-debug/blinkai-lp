import { useTranslation } from 'react-i18next'
import { Building2, Factory, Truck, UtensilsCrossed, HardHat, Warehouse } from 'lucide-react'

const logos = [
  { icon: HardHat, label: 'Construction' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: Truck, label: 'Logistics' },
  { icon: UtensilsCrossed, label: 'Food' },
  { icon: Building2, label: 'Enterprise' },
  { icon: Warehouse, label: 'Warehouse' },
]

export default function LogoBar() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs text-gray-400 mb-10 font-medium tracking-widest uppercase">
          {t('logos.title')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {logos.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-300 hover:text-gray-400 transition-colors">
              <item.icon className="w-7 h-7" />
              <span className="text-xs font-medium hidden sm:inline tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
