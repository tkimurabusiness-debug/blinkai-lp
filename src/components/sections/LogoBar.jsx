import { useTranslation } from 'react-i18next'
import { Building2, Factory, Truck, UtensilsCrossed, HardHat, Warehouse } from 'lucide-react'

const logos = [
  { icon: HardHat, label: 'Construction A' },
  { icon: Factory, label: 'Manufacturing B' },
  { icon: Truck, label: 'Logistics C' },
  { icon: UtensilsCrossed, label: 'Food Processing D' },
  { icon: Building2, label: 'Company E' },
  { icon: Warehouse, label: 'Warehouse F' },
]

export default function LogoBar() {
  const { t } = useTranslation()

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 mb-8 font-medium">
          {t('logos.title')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-300 hover:text-gray-400 transition-colors">
              <item.icon className="w-8 h-8" />
              <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
