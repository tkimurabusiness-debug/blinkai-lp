import { Shield, Award, FileCheck } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const badges = [
  {
    icon: Shield,
    title: '有料職業紹介事業',
    number: '○○-ユ-XXXXXX',
    note: '厚生労働大臣許可',
    color: 'text-primary',
    bg: 'bg-primary/5',
  },
  {
    icon: Award,
    title: '個人情報保護方針',
    number: 'プライバシーポリシー準拠',
    note: '個人情報保護法遵守',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: FileCheck,
    title: 'コンプライアンス',
    number: '法令遵守体制',
    note: '入管法・職安法遵守',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
]

export default function Compliance() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <div key={i} className="flex items-center gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${badge.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${badge.color}`} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-medium">{badge.note}</p>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">{badge.title}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">{badge.number}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
