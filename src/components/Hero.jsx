export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-namcha-navy/85 via-namcha-blue/60 to-namcha-earth/50" />

      {/* Decorative floating orb */}
      <div className="absolute right-10 top-1/4 w-64 h-64 rounded-full bg-namcha-blue/20 blur-3xl float-bob pointer-events-none hidden md:block" />
      <div className="absolute left-8 bottom-1/4 w-48 h-48 rounded-full bg-namcha-lavender/15 blur-3xl float-bob pointer-events-none hidden md:block" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6 py-24">
        <p className="font-body uppercase tracking-widest text-namcha-lavender text-sm font-medium mb-6">
          Pure · Natural · Vibrant
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          The Colour<br />of Wellness
        </h1>

        <p className="font-body text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Namcha butterfly pea powder turns every cup into an experience.
          Rich in antioxidants, naturally colour-changing, and endlessly versatile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="btn-primary px-10 py-3.5">
            Shop Now
          </a>
          <a href="#about" className="btn-outline px-10 py-3.5">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
