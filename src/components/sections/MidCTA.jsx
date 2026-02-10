import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'

export default function MidCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-xs font-medium mb-4 sm:mb-6">
          <Clock className="w-4 h-4" />
          最短1分で問い合わせ完了
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">
          まずは無料でご相談ください
        </h2>
        <p className="text-sm sm:text-base text-primary-200 mb-6 sm:mb-8 max-w-xl mx-auto">
          初期費用ゼロ・完全成果報酬。採用が決まるまで費用は一切かかりません。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/for-companies#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-2xl hover:bg-gray-50 transition-all text-sm sm:text-base"
          >
            無料相談フォーム <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:03-XXXX-XXXX"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm sm:text-base"
          >
            03-XXXX-XXXX
          </a>
        </div>
      </div>
    </section>
  )
}
