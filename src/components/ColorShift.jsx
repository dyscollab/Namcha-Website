import { useState } from 'react'
import useInView from '../hooks/useInView'

function lerpColor(t) {
  const pct = t / 100
  if (pct <= 0.5) {
    const p = pct / 0.5
    return [
      Math.round(88  + (139 - 88)  * p),
      Math.round(135 + (101 - 135) * p),
      Math.round(218 + (200 - 218) * p),
    ]
  }
  const p = (pct - 0.5) / 0.5
  return [
    Math.round(139 + (212 - 139) * p),
    Math.round(101 + (104 - 101) * p),
    Math.round(200 + (138 - 200) * p),
  ]
}

function rgb(t) {
  const [r, g, b] = lerpColor(t)
  return `rgb(${r},${g},${b})`
}

export default function ColorShift() {
  const [ph, setPh] = useState(0)
  const [ref, isVisible] = useInView()

  const liquidStyle = {
    background: `radial-gradient(circle at 40% 35%, ${rgb(Math.max(0, ph - 15))}, ${rgb(ph)}, ${rgb(Math.min(100, ph + 25))})`,
    transition: 'background 0.15s ease-in-out',
  }

  const glowStyle = {
    backgroundColor: rgb(ph),
    transform: 'scale(1.2)',
    transition: 'background-color 0.15s ease-in-out',
  }

  const label = ph < 20
    ? 'Deep blue — neutral pH water'
    : ph < 45
    ? 'Blue-violet — slightly acidic'
    : ph < 65
    ? 'Violet — moderately acidic'
    : 'Warm pink — a squeeze of lemon'

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
              onClick={() => setPh(0)}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-300 cursor-pointer ${
                ph < 30
                  ? 'bg-namcha-blue text-white shadow-lg shadow-namcha-blue/40'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              🫐 Alkaline (Blue)
            </button>
            <button
              onClick={() => setPh(100)}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-semibold transition-all duration-300 cursor-pointer ${
                ph > 70
                  ? 'bg-namcha-pink text-white shadow-lg shadow-namcha-pink/40'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              🍋 Acidic (Pink)
            </button>
          </div>

          {/* pH slider */}
          <div>
            <div className="flex justify-between font-body text-xs text-white/40 mb-2">
              <span>Alkaline (Blue)</span>
              <span>Neutral</span>
              <span>Acidic (Pink)</span>
            </div>
            <div className="relative h-3">
              {/* Track */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(to right, #5887DA, #8B9EE8, #C060A0, #D4688A)' }}
              />
              {/* Native range — invisible, sits on top for interaction */}
              <input
                type="range"
                min={0}
                max={100}
                value={ph}
                onChange={e => setPh(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {/* Custom thumb */}
              <div
                className="absolute top-1/2 w-4 h-4 rounded-full bg-white shadow-md pointer-events-none -translate-y-1/2 -translate-x-1/2"
                style={{ left: `calc(${ph / 100} * (100% - 1rem) + 0.5rem)` }}
              />
            </div>
          </div>
        </div>

        {/* Liquid demo column */}
        <div className="flex flex-col items-center gap-6 order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-50" style={glowStyle} />
            <div
              className="relative w-64 h-64 rounded-full shadow-2xl overflow-hidden"
              style={liquidStyle}
            >
              <div className="absolute top-8 left-10 w-16 h-8 bg-white/25 rounded-full blur-md rotate-[-20deg]" />
              <div className="absolute top-14 left-20 w-8 h-4 bg-white/15 rounded-full blur-sm" />
              <div className="absolute bottom-0 inset-x-0 h-20 bg-black/20 blur-xl" />
            </div>
          </div>

          <p className="font-body text-white/60 text-sm text-center">
            {label}
          </p>
        </div>
      </div>
    </section>
  )
}
