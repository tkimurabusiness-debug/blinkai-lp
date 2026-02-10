import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * LiquidBackground - 右上から左下に青い液体が流れるCanvasアニメーション
 * 白い画面 → 青い液体がメタボール風に広がる → 背景として定着 → ゆっくり呼吸
 */
function LiquidBackground() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const blobsRef = useRef(null)

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

      // Re-init blobs on resize
      initBlobs()
    }

    function initBlobs() {
      const blobs = []
      const COUNT = 7
      for (let i = 0; i < COUNT; i++) {
        blobs.push({
          sx: w * (0.65 + Math.random() * 0.45),   // start: top-right area
          sy: h * (-0.15 + Math.random() * 0.35),
          ex: w * (0.05 + Math.random() * 0.9),     // end: spread everywhere
          ey: h * (0.05 + Math.random() * 0.9),
          sr: 15 + Math.random() * 25,
          er: Math.max(w, h) * (0.18 + Math.random() * 0.28),
          delay: i * 0.07,
          wobbleAmp: 8 + Math.random() * 12,
          wobbleSpeed: 0.4 + Math.random() * 1.2,
          phase: Math.random() * Math.PI * 2,
        })
      }
      blobsRef.current = blobs
    }

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4)
    }
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    resize()
    window.addEventListener('resize', resize)

    const startTime = performance.now()
    const FILL_MS = 2600
    const SETTLE_MS = 1500

    function frame(now) {
      const elapsed = now - startTime
      const blobs = blobsRef.current
      if (!blobs) { animRef.current = requestAnimationFrame(frame); return }

      const fillProgress = easeOutQuart(Math.min(elapsed / FILL_MS, 1))
      const settleT = Math.max(0, elapsed - FILL_MS)
      const settleFactor = Math.max(0, 1 - settleT / SETTLE_MS)

      ctx.clearRect(0, 0, w, h)

      // --- Layer 1: main liquid ---
      const g1 = ctx.createLinearGradient(w, 0, 0, h)
      g1.addColorStop(0, 'rgba(0,53,163,0.14)')
      g1.addColorStop(0.35, 'rgba(0,53,163,0.09)')
      g1.addColorStop(0.65, 'rgba(0,82,230,0.06)')
      g1.addColorStop(1, 'rgba(0,53,163,0.035)')
      ctx.fillStyle = g1
      ctx.beginPath()

      blobs.forEach((b) => {
        const bp = Math.min(1, Math.max(0, (fillProgress - b.delay) / (1 - b.delay)))
        const ep = easeInOutCubic(bp)
        const wobble = settleFactor + 0.05 // always tiny wobble
        const x = b.sx + (b.ex - b.sx) * ep + Math.sin(now * 0.001 * b.wobbleSpeed + b.phase) * b.wobbleAmp * wobble
        const y = b.sy + (b.ey - b.sy) * ep + Math.cos(now * 0.001 * b.wobbleSpeed + b.phase + 1) * b.wobbleAmp * 0.7 * wobble
        const r = b.sr + (b.er - b.sr) * ep + Math.sin(now * 0.0005 * b.wobbleSpeed) * 3
        ctx.moveTo(x + r, y)
        ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2)
      })
      ctx.fill()

      // --- Layer 2: depth layer (half blobs, offset) ---
      const g2 = ctx.createLinearGradient(w * 0.7, h * 0.1, w * 0.3, h * 0.9)
      g2.addColorStop(0, 'rgba(0,53,163,0.08)')
      g2.addColorStop(0.5, 'rgba(0,82,230,0.04)')
      g2.addColorStop(1, 'rgba(0,53,163,0.02)')
      ctx.fillStyle = g2
      ctx.beginPath()

      blobs.forEach((b, i) => {
        if (i % 2 !== 0) return
        const bp = Math.min(1, Math.max(0, (fillProgress - b.delay - 0.08) / (1 - b.delay - 0.08)))
        const ep = easeInOutCubic(Math.max(0, bp))
        const wobble = settleFactor + 0.03
        const x = b.sx * 0.85 + b.ex * 1.1 * ep + Math.cos(now * 0.0007 * b.wobbleSpeed + b.phase + 2) * b.wobbleAmp * 1.3 * wobble
        const y = b.sy * 1.1 + b.ey * 0.9 * ep + Math.sin(now * 0.0007 * b.wobbleSpeed + b.phase + 3) * b.wobbleAmp * wobble
        const r = b.sr * 0.7 + (b.er * 1.3 - b.sr * 0.7) * ep
        ctx.moveTo(x + r, y)
        ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2)
      })
      ctx.fill()

      animRef.current = requestAnimationFrame(frame)
    }

    animRef.current = requestAnimationFrame(frame)

    return () => {
      window.removeEventListener('resize', resize)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default function HomeHero() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 600),
      setTimeout(() => setStep(3), 1000),
      setTimeout(() => setStep(4), 1400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-16 sm:pt-20">

      {/* Layer 1: Liquid flow canvas */}
      <LiquidBackground />

      {/* Layer 2: Drip particles (CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: '72%', d: '0.2s', dur: '1.8s', s: 5 },
          { left: '82%', d: '0.7s', dur: '2.2s', s: 4 },
          { left: '63%', d: '1.1s', dur: '1.5s', s: 6 },
          { left: '88%', d: '1.4s', dur: '2.5s', s: 3 },
          { left: '78%', d: '0.0s', dur: '2.0s', s: 4 },
        ].map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-primary/20 transition-opacity duration-700 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: p.left,
              top: '-8px',
              width: p.s,
              height: p.s,
              animation: `drip ${p.dur} ${p.d} ease-in infinite`,
            }}
          />
        ))}
      </div>

      {/* Layer 3: Geometric accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[15%] right-[10%] w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-primary/15 transition-all duration-[2s] ease-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute top-[25%] right-[5%] w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-primary/8 transition-all duration-[2.5s] ease-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute top-[30%] right-[20%] w-2 h-2 rounded-full bg-primary/25 animate-float transition-opacity duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute top-[50%] right-[30%] w-3 h-3 rounded-full bg-primary/15 animate-float transition-opacity duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-[30%] right-[15%] w-2 h-2 rounded-full bg-primary/20 animate-float transition-opacity duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '2s' }} />
      </div>

      {/* Layer 4: Text with readability glow */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 w-full">
        <div className="max-w-4xl relative">
          {/* Soft white glow behind text area */}
          <div className="absolute -inset-6 sm:-inset-10 bg-white/50 blur-2xl sm:blur-3xl rounded-3xl pointer-events-none" />

          <div className="relative">
            {/* Tagline */}
            <p className={`text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-primary uppercase mb-4 sm:mb-8 transition-all duration-700 ease-out ${
              step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              {t('homeHero.tagline')}
            </p>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.1] mb-6 sm:mb-8 tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              <span className={`inline-block transition-all duration-700 ease-out ${
                step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {t('homeHero.title1')}
              </span>
              <br />
              <span className={`inline-block text-primary transition-all duration-700 ease-out delay-150 ${
                step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {t('homeHero.titleHighlight')}
              </span>
              <span className={`inline-block transition-all duration-700 ease-out delay-300 ${
                step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {t('homeHero.title2')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-8 sm:mb-12 transition-all duration-700 ease-out ${
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              {t('homeHero.subtitle')}
            </p>

            {/* Scroll indicator */}
            <div className={`hidden sm:flex items-center gap-3 text-gray-500 transition-all duration-700 ease-out ${
              step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className="w-7 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1.5">
                <div className="w-1 h-2.5 bg-gray-500 rounded-full animate-bounce" />
              </div>
              <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
