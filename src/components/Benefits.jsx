import useInView from '../hooks/useInView'

const benefits = [
  {
    icon: '🫐',
    title: 'Antioxidant Rich',
    description:
      'Butterfly pea flowers contain anthocyanins — powerful antioxidants that protect cells from oxidative stress and support long-term health.',
  },
  {
    icon: '🎨',
    title: 'Natural Colour Magic',
    description:
      'Shifts from vivid blue to purple or pink depending on pH. No artificial dyes, no synthetic colourants — ever.',
  },
  {
    icon: '🧠',
    title: 'Cognitive Support',
    description:
      'Used in Ayurvedic tradition for memory and focus. Emerging research supports its nootropic and neuroprotective potential.',
  },
  {
    icon: '✨',
    title: 'Skin & Hair Benefits',
    description:
      'Rich in bioflavonoids that support collagen production and promote scalp health, making Namcha beautiful inside and out.',
  },
  {
    icon: '🌿',
    title: 'Caffeine Free',
    description:
      'A naturally calming, caffeine-free ritual. Wind down without winding up — perfect morning, afternoon, or evening.',
  },
  {
    icon: '🍹',
    title: 'Endlessly Versatile',
    description:
      'Teas, lattes, cocktails, pasta, baked goods — Namcha powder adds excitement and nutrition to just about anything.',
  },
]

function BenefitCard({ benefit, delay }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-in-up ${isVisible ? 'is-visible' : ''}
        bg-namcha-cream rounded-2xl p-7
        hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
    >
      <div className="text-4xl mb-4">{benefit.icon}</div>
      <h3 className="font-display text-lg font-bold text-namcha-navy mb-2">
        {benefit.title}
      </h3>
      <p className="font-body text-namcha-earth/70 text-sm leading-relaxed">
        {benefit.description}
      </p>
    </div>
  )
}

export default function Benefits() {
  const [headingRef, headingVisible] = useInView()

  return (
    <section id="benefits" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div
          ref={headingRef}
          className={`fade-in-up ${headingVisible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="font-body text-namcha-blue uppercase tracking-widest text-sm font-semibold mb-4">
            Why Namcha
          </p>
          <h2 className="section-heading">Good for You. Beautiful, Too.</h2>
          <p className="section-subheading">
            Butterfly pea powder isn't just pretty — it's packed with natural compounds
            that support your body, mind, and skin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
