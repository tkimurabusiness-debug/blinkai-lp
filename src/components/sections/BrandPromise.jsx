import { Shield, UserCheck, Heart } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const promises = [
  {
    icon: UserCheck,
    title: '専任スタッフが徹底サポート',
    description: 'お問い合わせから入社後フォローまで、経験豊富な専任担当者が一貫してサポートします。言語・文化の違いも安心です。',
    color: 'bg-blue-50 text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Shield,
    title: '厳選された優良人材のみ',
    description: 'AIスクリーニングと独自の審査基準で、スキル・日本語力・意欲を厳しくチェック。定着率90%以上の実績が品質を証明しています。',
    color: 'bg-emerald-50 text-emerald-600',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: Heart,
    title: '企業様の意向を最優先',
    description: '業種・求めるスキル・職場環境・日本語レベルなど、貴社の要望を細やかにヒアリング。最適なマッチングを実現します。',
    color: 'bg-violet-50 text-violet-600',
    iconBg: 'bg-violet-100',
  },
]

export default function BrandPromise() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6">
            OUR PROMISE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4 sm:mb-6">
            BlinkAIの3つのお約束
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto">
            信頼できるパートナーとして、採用成功にコミットします
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {promises.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-6 sm:p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${p.iconBg} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${p.color.split(' ')[1]}`} />
                </div>

                {/* Number badge */}
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="text-xs font-bold text-primary/40 tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  {p.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
