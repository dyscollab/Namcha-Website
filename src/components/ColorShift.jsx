import { useState } from 'react'
import useInView from '../hooks/useInView'

export default function ColorShift() {
  const [acidic, setAcidic] = useState(null) // null = looping animation
  const [ref, isVisible] = useInView()

  const liquidStyle = acidic === null
    ? {}
    : {
        background: acidic
          ? 'radial-gradient(circle at 40% 35%, #E08AA3, #D4688A, #9B3D6B)'
          : 'radial-gradient(circle at 40% 35%, #7AAAE8, #5887DA, #1E3E8A)',
        animation: 'none',
      }

  const phIndicatorLeft = acidic === null ? '50%' : acidic ? '90%' : '10%'

  return (
    <section className="py-24 px-6 bg-namcha-navy overflow-hidden">
      <div
        ref={ref}
        className={`fade-in-up ${isVisible ? 'is-visible' : ''} max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}
      >
        {/* Text column */}
        <div className="text-white order-2 md:order-1">
          <p className="font-body text-namcha-lavender uppercase tracking-widest text-sm font-semibold mb-4">
            The Science of Colour
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Watch It Change
          </h2>
          <p className="font-body text-white/70 leading-relaxed mb-4">
            Butterfly pea powder gets its vivid blue colour from <em>anthocyanins</em> — natural pigments that are pH-sensitive. In neutral water, they appear deep blue. Add something acidic like lemon or hibiscus and the hydrogen ions trigger a structural shift in the pigment, turning it violet, then pink.
          </p>
          <p className="font-body text-white/70 leading-relaxed mb-10">
            No artificial dyes. No chemistry tricks. Just the flower doing what it does naturally.
          </p>

          {/* Toggle buttons */}
          <div className="flex gap-4 mb-10">
            <button
              onClick={() => setAcidic(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-300 cursor-pointer ${
                acidic === false
                  ? 'bg-namcha-blue text-white shadow-lg shadow-namcha-blue/40'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              🫐 Alkaline (Blue)
            </button>
            <button
              onClick={() => setAcidic(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-300 cursor-pointer ${
                acidic === true
                  ? 'bg-namcha-pink text-white shadow-lg shadow-namcha-pink/40'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              🍋 Acidic (Pink)
            </button>
            {acidic !== null && (
              <button
                onClick={() => setAcidic(null)}
                className="px-4 py-2.5 rounded-full text-xs font-body text-white/40 hover:text-white/70 transition-colors duration-300 cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>

          {/* pH strip */}
          <div>
            <div className="flex justify-between font-body text-xs text-white/40 mb-2">
              <span>Alkaline (Blue)</span>
              <span>Neutral</span>
              <span>Acidic (Pink)</span>
            </div>
            <div className="relative h-3 rounded-full overflow-hidden" style={{ background: 'linear-gradient(to right, #5887DA, #8B9EE8, #C060A0, #D4688A)' }}>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-700 ease-in-out -translate-x-1/2"
                style={{ left: phIndicatorLeft }}
              />
            </div>
          </div>
        </div>

        {/* Liquid demo column */}
        <div className="flex flex-col items-center gap-6 order-1 md:order-2">
          <div className="relative">
            {/* Outer glow */}
            <div
              className={`absolute inset-0 rounded-full blur-2xl opacity-50 transition-all duration-1000 ${
                acidic === true ? 'bg-namcha-pink' : 'bg-namcha-blue'
              }`}
              style={{ transform: 'scale(1.2)' }}
            />

            {/* Liquid circle */}
            <div
              className={`relative w-64 h-64 rounded-full shadow-2xl transition-all duration-1000 ease-in-out overflow-hidden ${
                acidic === null ? 'liquid-shift' : ''
              }`}
              style={liquidStyle}
            >
              {/* Surface highlight */}
              <div className="absolute top-8 left-10 w-16 h-8 bg-white/25 rounded-full blur-md rotate-[-20deg]" />
              <div className="absolute top-14 left-20 w-8 h-4 bg-white/15 rounded-full blur-sm" />
              {/* Depth shadow */}
              <div className="absolute bottom-0 inset-x-0 h-20 bg-black/20 blur-xl" />
            </div>
          </div>

          {/* Label */}
          <p className="font-body text-white/60 text-sm text-center">
            {acidic === null  && 'Animating the colour shift…'}
            {acidic === false && 'Deep blue — neutral pH water'}
            {acidic === true  && 'Warm pink — a squeeze of lemon'}
          </p>
        </div>
      </div>
    </section>
  )
}
