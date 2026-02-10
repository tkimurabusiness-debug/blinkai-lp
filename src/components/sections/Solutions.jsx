import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Users } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function Solutions() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-gray-50" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 sm:mb-20 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6">
            {t('solutions.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4 sm:mb-6">
            {t('solutions.title')}
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-2xl">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Two cards - LP navigation */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* For Companies */}
          <Link
            to="/for-companies"
            className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
          >
            {/* Image */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src="/images/company_meeting.png"
                alt="企業様向けサービス"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 md:p-10 -mt-6 relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>

              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-primary uppercase mb-2 sm:mb-3">
                {t('solutions.forCompanies.subtitle')}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
                {t('solutions.forCompanies.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6 sm:mb-8">
                {t('solutions.forCompanies.description')}
              </p>

              <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-4 transition-all">
                {t('solutions.forCompanies.cta')}
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>

          {/* For Job Seekers */}
          <Link
            to="/for-job-seekers"
            className="group relative bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src="/images/hero_workers.png"
                alt="求職者向けサービス"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 md:p-10 -mt-6 relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-white/20 transition-colors">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>

              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-primary-300 uppercase mb-2 sm:mb-3">
                {t('solutions.forJobSeekers.subtitle')}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                {t('solutions.forJobSeekers.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8">
                {t('solutions.forJobSeekers.description')}
              </p>

              <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-4 transition-all">
                {t('solutions.forJobSeekers.cta')}
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </div>
      </div>
    </section>
  )
}
