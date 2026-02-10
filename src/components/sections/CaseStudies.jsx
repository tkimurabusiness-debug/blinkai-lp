import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { TrendingUp, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

const caseData = [
  {
    industry: '建設業',
    company: 'A建設株式会社',
    location: '東京都',
    employees: '従業員50名',
    challenge: '慢性的な人手不足で工期遅延が常態化。採用活動に月100万円以上投資するも成果なし。',
    solution: 'BlinkAI導入後、AIマッチングで最適な外国人材を5名採用。ビザ手続きも全面サポート。',
    results: [
      { icon: Clock, label: '採用期間', before: '3ヶ月', after: '5日', color: 'text-blue-600' },
      { icon: TrendingUp, label: '採用コスト', before: '100万円/月', after: '成果報酬のみ', color: 'text-emerald-600' },
      { icon: Users, label: '採用人数', before: '年間2名', after: '月5名対応可', color: 'text-violet-600' },
    ],
    quote: '工期遅延がゼロに。BlinkAIのおかげで事業拡大できました。',
    person: '代表取締役 田中様',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    industry: '製造業',
    company: 'B製造株式会社',
    location: '愛知県',
    employees: '従業員120名',
    challenge: '生産ライン増設に伴い20名の人材が急遽必要に。人材紹介会社を3社利用するも、3ヶ月で2名のみ採用。',
    solution: 'BlinkAIのAIマッチングを活用し、2週間で15名の候補者を紹介。うち12名が入社。',
    results: [
      { icon: Clock, label: 'マッチング', before: '3ヶ月で2名', after: '2週間で15名', color: 'text-blue-600' },
      { icon: TrendingUp, label: '定着率', before: '60%', after: '95%', color: 'text-emerald-600' },
      { icon: Users, label: '生産効率', before: '70%稼働', after: '100%稼働', color: 'text-violet-600' },
    ],
    quote: '生産ラインがフル稼働に。品質も全く問題ありません。',
    person: '工場長 佐藤様',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    industry: '食品加工',
    company: 'C食品株式会社',
    location: '北海道',
    employees: '従業員30名',
    challenge: '季節的な繁忙期の人手確保が困難。アルバイト募集も応募ゼロ。ラインが止まるリスク。',
    solution: '繁忙期3ヶ月前にBlinkAIへ相談。計画的に8名の人材を確保し、教育期間も確保。',
    results: [
      { icon: Clock, label: '確保期間', before: '確保不可', after: '3日で候補紹介', color: 'text-blue-600' },
      { icon: TrendingUp, label: '売上影響', before: '▲20%減', after: '前年比+15%', color: 'text-emerald-600' },
      { icon: Users, label: '人材定着', before: '1ヶ月未満', after: '1年以上継続', color: 'text-violet-600' },
    ],
    quote: '繁忙期のピンチを乗り越えられたのはBlinkAIのおかげです。',
    person: '代表 鈴木様',
    gradient: 'from-violet-500 to-purple-400',
  },
]

export default function CaseStudies() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const [current, setCurrent] = useState(0)
  const [slideDir, setSlideDir] = useState('right')
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef(null)

  const goTo = (idx, dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideDir(dir)
    setCurrent(idx)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const next = () => goTo((current + 1) % caseData.length, 'right')
  const prev = () => goTo((current - 1 + caseData.length) % caseData.length, 'left')

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(next, 6000)
    return () => clearInterval(intervalRef.current)
  }, [current])

  const c = caseData[current]

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`mb-10 sm:mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3 sm:mb-6">
            CASE STUDY
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-2 sm:mb-4">
                導入実績
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500">
                BlinkAIを導入いただいた企業様の成果をご紹介します
              </p>
            </div>
            {/* Navigation arrows - desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <button onClick={prev} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Case Card - Slide animation */}
        <div className="relative">
          <div
            key={current}
            className={`bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-600 ${
              isAnimating
                ? slideDir === 'right'
                  ? 'animate-slide-in-right'
                  : 'animate-slide-in-left'
                : ''
            }`}
          >
            {/* Top bar with gradient */}
            <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${c.gradient}`} />

            <div className="p-5 sm:p-8 md:p-10 lg:p-12">
              {/* Industry badge & company info */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${c.gradient}`}>
                  {c.industry}
                </span>
                <span className="text-sm sm:text-base font-semibold text-gray-900">{c.company}</span>
                <span className="text-xs sm:text-sm text-gray-400">{c.location} / {c.employees}</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {/* Left - Challenge & Solution */}
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">CHALLENGE</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">SOLUTION</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{c.solution}</p>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-primary">
                    <p className="text-sm sm:text-base text-gray-800 font-medium italic mb-2">"{c.quote}"</p>
                    <p className="text-xs sm:text-sm text-gray-500">{c.person}</p>
                  </div>
                </div>

                {/* Right - Results */}
                <div>
                  <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4 sm:mb-6">RESULTS</h4>
                  <div className="space-y-4 sm:space-y-5">
                    {c.results.map((r, i) => {
                      const Icon = r.icon
                      return (
                        <div key={i} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center`}>
                              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${r.color}`} />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-gray-700">{r.label}</span>
                          </div>
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex-1">
                              <p className="text-[10px] sm:text-xs text-gray-400 mb-1">Before</p>
                              <p className="text-sm sm:text-base font-semibold text-gray-400 line-through">{r.before}</p>
                            </div>
                            <div className="text-primary text-lg sm:text-xl font-bold">&rarr;</div>
                            <div className="flex-1">
                              <p className="text-[10px] sm:text-xs text-primary mb-1">After</p>
                              <p className="text-base sm:text-lg font-black text-gray-900">{r.after}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {/* Dots */}
            <div className="flex gap-2">
              {caseData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 'right' : 'left')}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop dots */}
          <div className="hidden sm:flex justify-center gap-2 mt-8">
            {caseData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'right' : 'left')}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-8' : 'bg-gray-300 w-2'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
