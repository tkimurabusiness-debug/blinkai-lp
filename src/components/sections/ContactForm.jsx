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
    // In production, this would submit to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="card py-16">
            <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              送信完了しました
            </h2>
            <p className="text-gray-600">24時間以内にご連絡いたします。</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-28 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('contactForm.title')}</h2>
          <p className="section-subtitle">{t('contactForm.subtitle')}</p>
        </div>

        <div
          ref={ref}
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contactForm.companyName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder={t('contactForm.companyPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contactForm.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contactForm.namePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contactForm.phone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contactForm.phonePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contactForm.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contactForm.emailPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contactForm.industry')}
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                >
                  <option value="">---</option>
                  {industryOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Headcount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contactForm.headcount')}
                </label>
                <select
                  name="headcount"
                  value={formData.headcount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                >
                  <option value="">---</option>
                  {headcountOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t('contactForm.message')}
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contactForm.messagePlaceholder')}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
              />
            </div>

            {/* Privacy */}
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

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary w-full mt-8 justify-center text-lg"
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
