import { Link } from 'react-router-dom'
import {
  HardHat, Factory, Truck, UtensilsCrossed,
  Wrench, Building2, DollarSign, CalendarCheck,
  Globe, Award, ArrowRight
} from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const categories = [
  { icon: HardHat, label: '建設業', desc: '施工管理・現場作業', color: 'bg-orange-50 text-orange-600 hover:bg-orange-100' },
  { icon: Factory, label: '製造業', desc: '組立・検査・加工', color: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
  { icon: Truck, label: '物流・配送', desc: 'ドライバー・倉庫', color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100' },
  { icon: UtensilsCrossed, label: '食品加工', desc: '製造・検品・包装', color: 'bg-red-50 text-red-600 hover:bg-red-100' },
  { icon: Wrench, label: '整備・設備', desc: 'メンテナンス・修理', color: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  { icon: Building2, label: 'ビルメンテ', desc: '清掃・管理', color: 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100' },
  { icon: DollarSign, label: '年収500万+', desc: '高年収求人', color: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100' },
  { icon: CalendarCheck, label: '土日休み', desc: 'ワークライフバランス', color: 'bg-violet-50 text-violet-600 hover:bg-violet-100' },
  { icon: Globe, label: '日本語不問', desc: 'N5以下もOK', color: 'bg-teal-50 text-teal-600 hover:bg-teal-100' },
  { icon: Award, label: '資格支援あり', desc: '資格取得サポート', color: 'bg-pink-50 text-pink-600 hover:bg-pink-100' },
]

export default function CategoryBrowse() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6">
            CATEGORIES
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-2 sm:mb-4">
                業種・条件から探す
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500">
                貴社のニーズに合った人材カテゴリからご相談いただけます
              </p>
            </div>
            <Link
              to="/for-job-seekers"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline whitespace-nowrap"
            >
              求人一覧を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <Link
                key={i}
                to="/for-companies#contact"
                className={`rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-transparent hover:border-gray-100 ${cat.color.split(' ').slice(0, 1).join(' ')}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Icon className={`w-6 h-6 sm:w-7 sm:h-7 mb-2 sm:mb-3 ${cat.color.split(' ')[1]}`} />
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">{cat.label}</h3>
                <p className="text-[10px] sm:text-xs text-gray-500">{cat.desc}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
