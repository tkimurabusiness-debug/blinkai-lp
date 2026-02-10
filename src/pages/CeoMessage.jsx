import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function NoteIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 3.2V20.8C22 21.46 21.46 22 20.8 22H3.2C2.54 22 2 21.46 2 20.8V3.2C2 2.54 2.54 2 3.2 2H20.8C21.46 2 22 2.54 22 3.2ZM13 7H7V9H13V7ZM17 11H7V13H17V11ZM17 15H7V17H17V15Z"/>
    </svg>
  )
}

export default function CeoMessage() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 500),
      setTimeout(() => setStep(3), 900),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const socialLinks = [
    { icon: InstagramIcon, url: 'https://www.instagram.com/t.kimura0407', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500' },
    { icon: XIcon, url: 'https://x.com/t_kimura_x', label: 'X (Twitter)', color: 'hover:bg-black' },
    { icon: NoteIcon, url: 'https://note.com/t_kimura_note', label: 'note', color: 'hover:bg-[#41C9B4]' },
  ]

  const career = [
    { year: '2020', text: '大学卒業後、外国人材紹介事業に従事' },
    { year: '2022', text: 'AI技術を活用した人材マッチングシステムの開発に着手' },
    { year: '2023', text: 'BlinkAI株式会社を設立、代表取締役に就任' },
    { year: '2024', text: 'AIマッチングプラットフォームの本格運用開始。導入企業120社突破' },
  ]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative bg-gray-50 py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[8%] w-64 h-64 rounded-full bg-primary/5" />
          <div className="absolute bottom-[10%] left-[5%] w-48 h-48 rounded-full bg-primary/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`transition-all duration-700 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3 sm:mb-5">CEO MESSAGE</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              代表挨拶
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-5 gap-10 lg:gap-16 transition-all duration-1000 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Left - Photo & SNS */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                {/* Photo */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                    <img
                      src="/images/ceo_photo.png"
                      alt="代表取締役 木村"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <p className="text-xs sm:text-sm font-medium text-white/80 mb-1">代表取締役</p>
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">木村 竹蔵</h2>
                  </div>
                </div>

                {/* SNS Icons */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {socialLinks.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 ${s.color}`}
                        title={s.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right - Message & Career */}
            <div className="lg:col-span-3 space-y-10 sm:space-y-14">
              {/* Message */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6 sm:mb-8">
                  テクノロジーの力で、<br />
                  <span className="text-primary">国境を越えた「働く」</span>を<br />
                  もっと身近に。
                </h3>

                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>
                    日本の労働市場は今、大きな転換期を迎えています。少子高齢化による深刻な人手不足は、建設・製造・物流・食品加工をはじめとするあらゆる産業に影響を与えています。
                  </p>
                  <p>
                    一方で、日本で働きたいと願う海外の方々は数多くいます。しかし、言語の壁、複雑な手続き、情報の非対称性により、企業と求職者の最適なマッチングが実現できていないのが現状です。
                  </p>
                  <p>
                    BlinkAIは、この課題をテクノロジーの力で解決します。AI技術を活用した独自のマッチングアルゴリズムにより、企業のニーズと求職者のスキル・希望を瞬時に分析し、最適な組み合わせを導き出します。
                  </p>
                  <p>
                    「すべての人が、自分らしく働ける社会をつくる」——この想いを胸に、私たちは挑戦を続けてまいります。外国人材の活用にお悩みの企業様、日本での就職を目指す求職者の皆様、ぜひBlinkAIにご相談ください。
                  </p>
                </div>
              </div>

              {/* Career */}
              <div>
                <h4 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 sm:mb-8">CAREER</h4>
                <div className="space-y-0">
                  {career.map((item, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6 pb-6 sm:pb-8 relative">
                      {/* Timeline line */}
                      {i < career.length - 1 && (
                        <div className="absolute left-[19px] sm:left-[23px] top-8 sm:top-9 w-px h-full bg-gray-200" />
                      )}
                      {/* Year dot */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                        <span className="text-[10px] sm:text-xs font-bold text-primary">{item.year}</span>
                      </div>
                      <div className="pt-2 sm:pt-3">
                        <p className="text-sm sm:text-base text-gray-700">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-4">お気軽にご相談ください</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/for-companies#contact" className="btn-primary text-sm px-6 py-3">
                    無料相談する <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link to="/company" className="btn-secondary text-sm px-6 py-3">
                    会社概要を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
