import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '../../utils/useScrollAnimation'

export default function ContactForm() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    phone: '',
    email: '',
    industry: '',
    headcount: '',
    message: '',
    privacy: false,
  })

  const industryOptions = t('contactForm.industryOptions', { returnObjects: true })
  const headcountOptions = t('contactForm.headcountOptions', { returnObjects: true })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-28 bg-gray-50" id="contact">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-16 border border-gray-100">
            <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              送信完了しました
            </h2>
            <p className="text-gray-500">24時間以内にご連絡いたします。</p>
          </div>
        </div>
      </section>
    )
  }

  const inputClass = "w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all bg-gray-50/50 focus:bg-white text-sm"

  return (
    <section className="py-28 md:py-36 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            {t('contactForm.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            {t('contactForm.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-2xl transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2 tracking-wide uppercase">
                  {t('contactForm.companyName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder={t('contactForm.companyPlaceholder')}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2 tracking-wide uppercase">
                  {t('contactForm.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contactForm.namePlaceholder')}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2 tracking-wide uppercase">
                  {t('contactForm.phone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contactForm.phonePlaceholder')}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2 tracking-wide uppercase">
                  {t('contactForm.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contactForm.emailPlaceholder')}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2 tracking-wide uppercase">
                  {t('contactForm.industry')}
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">---</option>
                  {industryOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-900 mb-2 tracking-wide uppercase">
                  {t('contactForm.headcount')}
                </label>
                <select
                  name="headcount"
                  value={formData.headcount}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">---</option>
                  {headcountOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-xs font-semibold text-gray-900 mb-2 tracking-wide uppercase">
                {t('contactForm.message')}
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contactForm.messagePlaceholder')}
                className={`${inputClass} resize-none`}
              />
            </div>

            <label className="flex items-center gap-3 mt-6 cursor-pointer">
              <input
                type="checkbox"
                name="privacy"
                required
                checked={formData.privacy}
                onChange={handleChange}
                className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-600">{t('contactForm.privacy')}</span>
            </label>

            <button
              type="submit"
              className="btn-primary w-full mt-8 justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              {t('contactForm.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
