import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * WaveAnimation - メインカラーの波が右上から左下に流れ、
 * 画面外に出た後、左下から戻ってきて丸く弾む背景アニメーション
 */
function WaveAnimation() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h

    function resize() {
      const dpr = window.devicePixelRatio || 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const startTime = performance.now()

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3) }
    function easeOutElastic(t) {
      if (t === 0 || t === 1) return t
      return Math.pow(2, -10*t) * Math.sin((t*10-0.75)*(2*Math.PI)/3) + 1
    }

    const blobs = [
      { x: 0.12, y: 0.65, r: 0.20, phase: 0 },
      { x: 0.06, y: 0.82, r: 0.15, phase: 1.2 },
      { x: 0.22, y: 0.55, r: 0.11, phase: 2.4 },
      { x: 0.04, y: 0.45, r: 0.13, phase: 0.8 },
      { x: 0.28, y: 0.75, r: 0.09, phase: 1.8 },
    ]

    function frame(now) {
      const elapsed = now - startTime
      ctx.clearRect(0, 0, w, h)

      // --- PHASE 1 & 2: Wave sweep (0-2500ms) ---
      if (elapsed < 2500) {
        const sweepProgress = Math.min(elapsed / 1500, 1)
        const exitProgress = elapsed > 1500 ? Math.min((elapsed - 1500) / 700, 1) : 0
        const ep = easeOutCubic(sweepProgress)
        const xp = easeOutCubic(exitProgress)

        ctx.save()
        const angle = -Math.PI / 5
        const bandWidth = w * 0.7
        const startX = w * 1.5, startY = -h * 0.3
        const midX = w * 0.3, midY = h * 0.5
        const endX = -w * 0.8, endY = h * 1.5

        let cx, cy
        if (exitProgress === 0) {
          cx = startX + (midX - startX) * ep
          cy = startY + (midY - startY) * ep
        } else {
          cx = midX + (endX - midX) * xp
          cy = midY + (endY - midY) * xp
        }

        ctx.translate(cx, cy)
        ctx.rotate(angle)

        const grad = ctx.createLinearGradient(-bandWidth/2, 0, bandWidth/2, 0)
        grad.addColorStop(0, 'rgba(0,53,163,0)')
        grad.addColorStop(0.2, 'rgba(0,53,163,0.85)')
        grad.addColorStop(0.5, 'rgba(0,53,163,0.95)')
        grad.addColorStop(0.8, 'rgba(0,82,230,0.85)')
        grad.addColorStop(1, 'rgba(0,53,163,0)')
        ctx.fillStyle = grad
        ctx.fillRect(-bandWidth/2, -h*1.5, bandWidth, h*4)

        // Wavy edge
        ctx.fillStyle = 'rgba(0,53,163,0.25)'
        ctx.beginPath()
        for (let i = -h*1.5; i < h*2.5; i += 15) {
          const wb = Math.sin(i*0.02 + now*0.003)*25
          if (i === -h*1.5) ctx.moveTo(bandWidth/2+wb+15, i)
          else ctx.lineTo(bandWidth/2+wb+15, i)
        }
        ctx.lineTo(bandWidth/2+60, h*2.5)
        ctx.lineTo(bandWidth/2, h*2.5)
        for (let i = h*2.5; i >= -h*1.5; i -= 15) ctx.lineTo(bandWidth/2, i)
        ctx.fill()
        ctx.restore()
      }

      // --- PHASE 3 & 4: Bouncing blobs from bottom-left ---
      if (elapsed > 2000) {
        const blobStart = elapsed - 2000
        blobs.forEach((blob, i) => {
          const delay = i * 180
          const bp = Math.min(Math.max((blobStart - delay) / 1200, 0), 1)
          const bounceP = easeOutElastic(bp)
          const bx = blob.x * w
          const by = blob.y * h
          const br = blob.r * Math.min(w, h) * bounceP
          const floatX = elapsed > 4000 ? Math.sin(now*0.0004+blob.phase)*6 : 0
          const floatY = elapsed > 4000 ? Math.cos(now*0.0003+blob.phase)*4 : 0

          const grad = ctx.createRadialGradient(bx+floatX, by+floatY, 0, bx+floatX, by+floatY, br)
          grad.addColorStop(0, 'rgba(0,53,163,0.10)')
          grad.addColorStop(0.5, 'rgba(0,53,163,0.05)')
          grad.addColorStop(1, 'rgba(0,53,163,0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(bx+floatX, by+floatY, Math.max(0, br), 0, Math.PI*2)
          ctx.fill()
        })
      }

      animRef.current = requestAnimationFrame(frame)
    }

    animRef.current = requestAnimationFrame(frame)
    return () => {
      window.removeEventListener('resize', resize)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

export default function HomeHero() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1300),
      setTimeout(() => setStep(4), 1800),
      setTimeout(() => setStep(5), 2500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-16 sm:pt-20">
      <WaveAnimation />

      {/* Background city (fades in after wave) */}
      <div className={`absolute inset-0 transition-opacity duration-[2s] ease-out ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute bottom-0 right-0 w-full lg:w-3/5 h-1/2 lg:h-full">
          <img src="/images/hero_bg_city.png" alt="" className="w-full h-full object-cover"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 30%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />
        </div>
      </div>

      {/* Floating circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[18%] right-[12%] w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-primary/10 transition-all duration-[2s] ease-out ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute top-[28%] right-[6%] w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-primary/5 transition-all duration-[2.5s] ease-out ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-xl relative">
            <div className="absolute -inset-6 sm:-inset-10 bg-white/60 blur-2xl rounded-3xl pointer-events-none" />
            <div className="relative">
              <p className={`text-xs sm:text-sm font-semibold tracking-[0.15em] text-primary uppercase mb-3 sm:mb-6 transition-all duration-700 ease-out ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {t('homeHero.tagline')}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                <span className={`inline-block transition-all duration-700 ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t('homeHero.title1')}</span>
                <br />
                <span className={`inline-block text-primary transition-all duration-700 ease-out delay-150 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t('homeHero.titleHighlight')}</span>
                <span className={`inline-block transition-all duration-700 ease-out delay-300 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{t('homeHero.title2')}</span>
              </h1>
              <p className={`text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg mb-6 sm:mb-8 transition-all duration-700 ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {t('homeHero.subtitle')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <Link to="/for-companies" className="btn-primary text-sm px-6 py-3">企業様はこちら <ArrowRight className="w-4 h-4 ml-1" /></Link>
                <Link to="/for-job-seekers" className="btn-secondary text-sm px-6 py-3">お仕事をお探しの方</Link>
              </div>
            </div>
          </div>

          {/* Right - Person */}
          <div className={`hidden lg:block relative transition-all duration-1000 ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <div className="relative max-w-md mx-auto">
              <img src="/images/hero_person.png" alt="Worker" className="relative z-10 w-full h-auto max-h-[500px] object-contain object-bottom drop-shadow-2xl" />
              <div className={`absolute top-8 -left-4 bg-white rounded-xl shadow-lg p-3 animate-float border border-gray-100 z-20 transition-all duration-700 ${step >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"><span className="text-primary font-black text-sm">3日</span></div>
                  <span className="text-xs font-semibold text-gray-900 whitespace-nowrap">で最適マッチング</span>
                </div>
              </div>
              <div className={`absolute bottom-16 -right-4 bg-white rounded-xl shadow-lg p-3 animate-float border border-gray-100 z-20 transition-all duration-700 ${step >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center"><span className="text-secondary font-black text-sm">98%</span></div>
                  <span className="text-xs font-semibold text-gray-900 whitespace-nowrap">顧客満足度</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`hidden sm:flex items-center gap-3 text-gray-500 mt-6 transition-all duration-700 ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-6 h-9 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
          </div>
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        </div>
      </div>
    </section>
  )
}
