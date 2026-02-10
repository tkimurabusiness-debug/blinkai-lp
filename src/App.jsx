import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import ForCompanies from './pages/ForCompanies'
import ForJobSeekers from './pages/ForJobSeekers'
import { detectLanguageByIP } from './utils/detectLanguage'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

export default function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    detectLanguageByIP().then((lang) => {
      if (!localStorage.getItem('i18nextLng')) {
        i18n.changeLanguage(lang)
      }
    })
  }, [i18n])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><ScrollToTop /><Home /></>} />
          <Route path="/for-companies" element={<><ScrollToTop /><ForCompanies /></>} />
          <Route path="/for-job-seekers" element={<><ScrollToTop /><ForJobSeekers /></>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
