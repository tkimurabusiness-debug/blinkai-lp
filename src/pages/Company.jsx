import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Mail, Globe, Shield } from 'lucide-react'

export default function Company() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 500),
      setTimeout(() => setStep(3), 900),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const companyInfo = [
    { label: '会社名', value: 'BlinkAI株式会社（BlinkAI Inc.）' },
    { label: '設立', value: '2023年' },
    { label: '代表取締役', value: '木村 竹蔵', link: '/ceo' },
    { label: '所在地', value: '〒150-0000 東京都渋谷区○○ ○-○-○ ○○ビル○F' },
    { label: '電話番号', value: '03-XXXX-XXXX' },
    { label: 'メール', value: 'info@blinkai.jp' },
    { label: '資本金', value: '○○万円' },
    { label: '従業員数', value: '○名' },
    { label: '事業内容', value: 'AI技術を活用した外国人材マッチングプラットフォームの開発・運営\n有料職業紹介事業\n外国人材の採用支援・ビザ手続きサポート' },
  ]

  const licenses = [
    { label: '有料職業紹介事業許可番号', value: '○○-ユ-XXXXXX', note: '厚生労働大臣許可' },
  ]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative bg-gray-50 py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full bg-primary/5" />
          <div className="absolute bottom-[15%] left-[8%] w-56 h-56 rounded-full bg-primary/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`transition-all duration-700 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3 sm:mb-5">COMPANY</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              会社概要
            </h1>
          </div>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-8 sm:mb-12">OVERVIEW</h2>

            <div className="divide-y divide-gray-100">
              {companyInfo.map((item, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6 py-5 sm:py-6">
                  <dt className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-0">{item.label}</dt>
                  <dd className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.link ? (
                      <Link to={item.link} className="text-primary hover:underline">{item.value}</Link>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-8 sm:mb-12">LICENSE</h2>

            {licenses.map((lic, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-10 mb-6">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">{lic.note}</p>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{lic.label}</h3>
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-primary tracking-wider">{lic.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6">MISSION</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight">
                テクノロジーの力で、国境を越えた最適な人材マッチングを実現し、<br className="hidden sm:block" />
                すべての人が自分らしく働ける社会をつくる。
              </h3>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6">VISION</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight">
                外国人材と日本企業をつなぐ、<br className="hidden sm:block" />
                アジアNo.1のAIマッチングプラットフォームへ。
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Access / Map placeholder */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-8 sm:mb-12">ACCESS</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">所在地</p>
                  <p className="text-sm text-gray-600">〒150-0000 東京都渋谷区○○ ○-○-○</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">電話番号</p>
                  <p className="text-sm text-gray-600">03-XXXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">メール</p>
                  <p className="text-sm text-gray-600">info@blinkai.jp</p>
                </div>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-48 sm:h-64 flex items-center justify-center">
              <p className="text-sm text-gray-500">Google Maps（住所確定後に設置）</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-[200px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            お問い合わせ
          </h2>
          <p className="text-sm sm:text-base text-primary-200 mb-6 sm:mb-8">
            外国人材の採用についてお気軽にご相談ください
          </p>
          <Link to="/for-companies#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-2xl hover:bg-gray-50 transition-all text-sm sm:text-base">
            無料相談する <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
