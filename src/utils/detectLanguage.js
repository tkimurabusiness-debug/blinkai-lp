const COUNTRY_LANG_MAP = {
  VN: 'vi',
  NP: 'ne',
  JP: 'ja',
}

export async function detectLanguageByIP() {
  try {
    const saved = localStorage.getItem('i18nextLng')
    if (saved && ['ja', 'vi', 'ne'].includes(saved)) return saved

    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    const lang = COUNTRY_LANG_MAP[data.country_code] || 'ja'
    return lang
  } catch {
    return 'ja'
  }
}
