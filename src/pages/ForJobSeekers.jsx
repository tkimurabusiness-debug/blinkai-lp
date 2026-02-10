import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Phone, Globe, Zap, DollarSign,
  HardHat, Factory, Truck, UtensilsCrossed,
  MessageCircle, User, Briefcase, PartyPopper,
  Star, Quote, ChevronDown, Search, MapPin,
  Banknote, Languages, Building2, Clock, Filter, X
} from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import { useScrollAnimation } from '../utils/useScrollAnimation'
import FloatingCTA from '../components/common/FloatingCTA'

/* ===== LINE SVG icon ===== */
function LineIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

/* ===== SAMPLE JOB DATA ===== */
const jobListings = [
  {
    id: 1, title: '建設作業員（正社員）', company: '株式会社山田建設',
    location: '東京都 江東区', salary: '年収 300〜420万円',
    jlpt: 'N4', type: '正社員', category: 'construction',
    tags: ['未経験歓迎', '寮完備', '交通費支給'],
    description: '都内の建設現場での施工作業。先輩社員がしっかりサポートします。',
  },
  {
    id: 2, title: '製造スタッフ（正社員）', company: '東海パーツ製造株式会社',
    location: '愛知県 豊田市', salary: '年収 280〜380万円',
    jlpt: 'N4', type: '正社員', category: 'manufacturing',
    tags: ['正社員登用あり', '社会保険完備', '賞与あり'],
    description: '自動車部品の組立・検査作業。クリーンルーム内での勤務です。',
  },
  {
    id: 3, title: '物流スタッフ（正社員）', company: 'グローバル物流株式会社',
    location: '大阪府 堺市', salary: '年収 300〜400万円',
    jlpt: 'N3', type: '正社員', category: 'logistics',
    tags: ['夜勤手当あり', '社宅あり', 'フォークリフト資格支援'],
    description: '倉庫内のピッキング・梱包・フォークリフト作業。資格取得支援あり。',
  },
  {
    id: 4, title: '食品加工スタッフ（正社員）', company: '北海道フーズ株式会社',
    location: '北海道 札幌市', salary: '年収 260〜350万円',
    jlpt: 'N5', type: '正社員', category: 'food',
    tags: ['未経験OK', '制服貸与', '送迎バスあり'],
    description: '食品工場での加工・パッケージング作業。衛生管理を徹底した環境です。',
  },
  {
    id: 5, title: '型枠大工（正社員）', company: '関東建設工業株式会社',
    location: '神奈川県 横浜市', salary: '年収 350〜500万円',
    jlpt: 'N3', type: '正社員', category: 'construction',
    tags: ['経験者優遇', '日払い可', '独立支援'],
    description: 'RC造建築の型枠工事。経験に応じた給与設定。キャリアアップ可能。',
  },
  {
    id: 6, title: '溶接工（正社員）', company: '九州スチール株式会社',
    location: '福岡県 北九州市', salary: '年収 320〜450万円',
    jlpt: 'N4', type: '正社員', category: 'manufacturing',
    tags: ['資格取得支援', '退職金制度', '昇給年2回'],
    description: '鉄骨の溶接加工業務。溶接資格取得費用は全額会社負担です。',
  },
]

const categories = [
  { key: 'all', label: 'すべて', icon: Briefcase },
  { key: 'construction', label: '建設', icon: HardHat },
  { key: 'manufacturing', label: '製造', icon: Factory },
  { key: 'logistics', label: '物流', icon: Truck },
  { key: 'food', label: '食品', icon: UtensilsCrossed },
]

/* ===== HERO ===== */
function JobSeekerHero() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 500),
      setTimeout(() => setStep(3), 900),
      setTimeout(() => setStep(4), 1300),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-16 sm:pt-20 bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/40 to-transparent" />
        <div className={`absolute top-[20%] right-[10%] w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-primary/10 transition-all duration-[2s] ease-out ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute top-[30%] right-[5%] w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-primary/5 transition-all duration-[2.5s] ease-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 text-primary text-xs font-semibold tracking-wider rounded-full mb-3 sm:mb-5 uppercase transition-all duration-700 ease-out ${
              step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              {t('jobSeeker.hero.badge')}
            </div>

            <h1 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight mb-3 sm:mb-5 tracking-tight transition-all duration-700 ease-out ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t('jobSeeker.hero.title1')}
              <br className="hidden sm:block" />
              {t('jobSeeker.hero.title2')}
              <span className="text-primary">{t('jobSeeker.hero.titleHighlight')}</span>
              {t('jobSeeker.hero.title3')}
            </h1>

            <p className={`text-xs sm:text-sm lg:text-base text-gray-500 leading-relaxed mb-4 sm:mb-6 transition-all duration-700 ease-out ${
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              {t('jobSeeker.hero.subtitle')}
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center transition-all duration-700 ease-out ${
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-primary text-white text-sm font-bold rounded-full shadow-lg hover:bg-primary-light transition-all">
                <LineIcon className="w-5 h-5" />
                {t('jobSeeker.hero.lineCta')}
              </a>
              <a href="#jobs" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-primary text-sm font-semibold hover:text-primary-light transition-colors">
                求人を見る
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className={`hidden lg:block relative transition-all duration-1000 ease-out delay-500 ${
            step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
                <img src="/images/line_register.png" alt="LINE登録" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 animate-float border border-gray-100">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">3日で決まる</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 animate-float border border-gray-100" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">完全無料</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== BENEFITS ===== */
function Benefits() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const benefits = [
    { key: 'noPhone', icon: Phone, color: 'bg-primary-50 text-primary' },
    { key: 'nativeLang', icon: Globe, color: 'bg-primary-50 text-primary' },
    { key: 'fast', icon: Zap, color: 'bg-primary-50 text-primary' },
    { key: 'free', icon: DollarSign, color: 'bg-primary-50 text-primary' },
  ]

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div ref={ref} className={`max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {benefits.map(({ key, icon: Icon, color }) => (
          <div key={key} className="text-center p-3 sm:p-5 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl ${color} flex items-center justify-center`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-0.5 text-xs sm:text-sm">{t(`jobSeeker.benefits.${key}`)}</h3>
            <p className="text-[10px] sm:text-xs text-gray-500">{t(`jobSeeker.benefits.${key}Desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ===== JOB SEARCH ===== */
function JobSearch() {
  const [ref, visible] = useScrollAnimation()
  const [searchText, setSearchText] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedJlpt, setSelectedJlpt] = useState('all')

  const filteredJobs = useMemo(() => {
    return jobListings.filter(job => {
      const matchCategory = activeCategory === 'all' || job.category === activeCategory
      const matchSearch = searchText === '' || job.title.includes(searchText) || job.company.includes(searchText) || job.location.includes(searchText)
      const matchJlpt = selectedJlpt === 'all' || job.jlpt === selectedJlpt
      return matchCategory && matchSearch && matchJlpt
    })
  }, [searchText, activeCategory, selectedJlpt])

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="jobs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref} className={`mb-8 sm:mb-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3 sm:mb-5">
            JOB LISTINGS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-2 sm:mb-4">
            求人を探す
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            正社員の求人を多数掲載。あなたに合った仕事が見つかります。
          </p>
        </div>

        {/* Search bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="職種・会社名・勤務地で検索..."
                className="w-full pl-9 sm:pl-11 pr-4 py-2.5 sm:py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 text-sm font-medium rounded-xl border transition-all ${
                showFilters ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200 hover:border-primary'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="sm:inline">絞り込み</span>
            </button>
          </div>

          {/* Filters (collapsible) */}
          <div className={`overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-40 mt-3 sm:mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-wrap gap-2 items-center pt-3 border-t border-gray-100">
              <span className="text-xs font-semibold text-gray-500 mr-1">
                <Languages className="w-3.5 h-3.5 inline mr-1" />
                日本語:
              </span>
              {['all', 'N3', 'N4', 'N5'].map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedJlpt(level)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    selectedJlpt === level
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {level === 'all' ? 'すべて' : level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === key
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
          <span className="font-bold text-primary">{filteredJobs.length}</span> 件の求人が見つかりました
        </p>

        {/* Job cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-primary to-primary-light" />

              <div className="p-4 sm:p-5">
                {/* Type & JLPT badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] sm:text-xs font-bold rounded-full">
                    {job.type}
                  </span>
                  <span className="px-2.5 py-0.5 bg-amber-50 text-amber-700 text-[10px] sm:text-xs font-bold rounded-full">
                    {job.jlpt}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                  {job.title}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-1.5">
                  <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{job.company}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{job.location}</span>
                </div>

                {/* Salary */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm mb-3">
                  <Banknote className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
                  <span className="font-bold text-primary">{job.salary}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                  {job.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 sm:px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-gray-400">
                  <Clock className="w-3 h-3 inline mr-1" />
                  本日更新
                </span>
                <span className="text-xs font-semibold text-primary group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  詳細を見る <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to see more */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-sm font-bold rounded-full shadow-lg hover:bg-primary-light transition-all"
          >
            <LineIcon className="w-5 h-5" />
            LINEで友だち追加して全求人を見る
          </a>
          <p className="mt-3 text-xs text-gray-400">登録は1分・完全無料</p>
        </div>
      </div>
    </section>
  )
}

/* ===== SENPAI (先輩の声) ===== */
function Senpai() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const items = t('jobSeeker.senpai.items', { returnObjects: true })
  const flags = { VN: '🇻🇳', NP: '🇳🇵', PH: '🇵🇭' }

  return (
    <section className="py-14 sm:py-18 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3 sm:mb-5">VOICE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-2 sm:mb-4">
            {t('jobSeeker.senpai.title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-500">{t('jobSeeker.senpai.subtitle')}</p>
        </div>
        <div ref={ref} className={`grid md:grid-cols-3 gap-5 sm:gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-5 sm:p-6 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">{item.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg sm:text-xl">
                  {flags[item.flag] || '🌏'}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs sm:text-sm">{item.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">{item.country} / {item.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== HOWTO ===== */
function HowTo() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const steps = t('jobSeeker.howTo.steps', { returnObjects: true })
  const stepIcons = [MessageCircle, User, Briefcase, PartyPopper]

  return (
    <section className="py-14 sm:py-18 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3 sm:mb-5">HOW TO</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-2 sm:mb-4">
            {t('jobSeeker.howTo.title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-500">{t('jobSeeker.howTo.subtitle')}</p>
        </div>
        <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <div key={i} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/15 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 mx-auto mb-3 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-primary/10">
                    <div className="absolute -top-2 -right-0.5 w-5 h-5 sm:w-6 sm:h-6 bg-primary text-white rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold">
                      {i + 1}
                    </div>
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">{step.title}</h3>
                  <p className="text-[9px] sm:text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  {step.time && (
                    <span className="inline-block mt-1.5 text-[9px] sm:text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                      {step.time}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ===== FAQ ===== */
function JobSeekerFAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, visible] = useScrollAnimation()
  const items = t('jobSeeker.faq.items', { returnObjects: true })

  return (
    <section className="py-14 sm:py-18 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3 sm:mb-5">FAQ</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
            {t('jobSeeker.faq.title')}
          </h2>
        </div>
        <div ref={ref} className={`max-w-3xl bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {items.map((item, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full flex items-center justify-between py-3.5 sm:py-4 text-left group">
                <span className="font-semibold text-gray-900 pr-4 group-hover:text-primary transition-colors text-xs sm:text-sm">{item.q}</span>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100 pb-3.5 sm:pb-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== FINAL CTA ===== */
function JobSeekerFinalCTA() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-14 sm:py-18 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-[200px]" />
      </div>
      <div ref={ref} className={`relative max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-5 leading-tight tracking-tight">
          {t('jobSeeker.finalCta.title')}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-primary-200 mb-5 sm:mb-8">
          {t('jobSeeker.finalCta.subtitle')}
        </p>
        <a href="#" className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold text-primary bg-white rounded-full shadow-2xl hover:bg-gray-50 transition-all">
          <LineIcon className="w-5 h-5" />
          {t('jobSeeker.finalCta.lineCta')}
        </a>
        <div className="mt-5 sm:mt-7">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-[9px] sm:text-[10px] text-gray-400">QR Code</span>
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-primary-200 mt-2">{t('jobSeeker.finalCta.scanQr')}</p>
        </div>
      </div>
    </section>
  )
}

/* ===== PAGE ===== */
export default function ForJobSeekers() {
  return (
    <>
      <JobSeekerHero />
      <Benefits />
      <JobSearch />
      <Senpai />
      <HowTo />
      <JobSeekerFAQ />
      <JobSeekerFinalCTA />
      <FloatingCTA variant="jobseeker" />
    </>
  )
}
