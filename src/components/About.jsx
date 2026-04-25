import useInView from '../hooks/useInView'

const stats = [
  { label: '100% Pure',     icon: '✦' },
  { label: 'High Quality',  icon: '✦' },
  { label: 'No Fillers',    icon: '✦' },
]

export default function About() {
  const [imgRef, imgVisible]   = useInView()
  const [textRef, textVisible] = useInView()

  return (
    <section id="about" className="py-24 px-6 bg-namcha-cream overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image column */}
        <div
          ref={imgRef}
          className={`fade-in-up ${imgVisible ? 'is-visible' : ''} relative`}
          style={{ transitionDelay: '0ms' }}
        >
          {/* Decorative blob */}
          <div className="absolute -top-8 -left-8 w-72 h-72 rounded-full bg-namcha-lavender/15 blur-3xl" />
          <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-namcha-blue/10 blur-2xl" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-namcha-blue/20 to-namcha-lavender/30">
            <img
              src="/assets/about-img.jpg"
              alt="Butterfly pea flowers on the vine"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                e.target.style.display = 'none'
                const placeholder = document.createElement('div')
                placeholder.className = 'text-center p-8'
                placeholder.innerHTML = '<div style="font-size:4rem">🌿</div><p style="color:#4A3A2A;font-family:Georgia,serif;margin-top:1rem">Butterfly Pea<br/>Flowers</p>'
                e.target.parentElement.appendChild(placeholder)
              }}
            />
          </div>
        </div>

        {/* Text column */}
        <div
          ref={textRef}
          className={`fade-in-up ${textVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >
          <p className="font-body text-namcha-blue uppercase tracking-widest text-sm font-semibold mb-4">
            Our Story
          </p>

          <h2 className="section-heading text-left mb-6">
            Where Ancient Ritual<br />Meets Modern Wellness
          </h2>

          <p className="font-body text-namcha-earth/80 leading-relaxed mb-5">
            Butterfly pea flower has been steeped in Southeast Asian and Ayurvedic tradition for centuries — prized for its deep indigo hue, its calming properties, and its remarkable ability to change colour.
          </p>

          <p className="font-body text-namcha-earth/80 leading-relaxed mb-5">
            At Namcha, we source the higest quality flowers and use a refined extraction processes to preserve every antioxidant. No fillers, no additives — just the flower.
          </p>

          <p className="font-body text-namcha-earth/80 leading-relaxed mb-10">
            The result is a powder as versatile as it is beautiful: stir it into tea, lattes, cocktails, or baked goods and let the colour do the talking.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-namcha-blue text-xs">{stat.icon}</span>
                <span className="font-body font-semibold text-namcha-navy text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
