import { useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function About() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Left - Label, Title & Image */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6">
              {t('about.label')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6 sm:mb-8">
              {t('about.title')}
            </h2>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/ai_network.png"
                alt="AI Technology"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Mission block */}
            <div className="border-l-4 border-primary pl-4 sm:pl-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-2 sm:mb-3">
                {t('about.missionLabel')}
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 leading-relaxed">
                {t('about.mission')}
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { num: '3', unit: '日', label: '平均マッチング' },
            { num: '120', unit: '社+', label: '導入企業' },
            { num: '98', unit: '%', label: '顧客満足度' },
            { num: '90', unit: '%+', label: '人材定着率' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                {stat.num}
                <span className="text-base sm:text-xl text-primary font-bold">{stat.unit}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
