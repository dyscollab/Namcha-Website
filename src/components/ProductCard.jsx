import useInView from '../hooks/useInView'

const badgeColors = {
  'Best Seller': 'bg-namcha-blue/10 text-namcha-blue',
  'New':         'bg-namcha-sage/20 text-namcha-sage',
  'Gift':        'bg-namcha-pink/10 text-namcha-pink',
}

export default function ProductCard({ product, delay = 0 }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-in-up ${isVisible ? 'is-visible' : ''}
        bg-white rounded-3xl overflow-hidden shadow-md
        hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
        flex flex-col`}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-namcha-blue/10 to-namcha-lavender/20">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
            e.target.style.display = 'none'
          }}
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {product.badge && (
          <span className={`inline-block self-start text-xs font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${badgeColors[product.badge] ?? 'bg-gray-100 text-gray-600'}`}>
            {product.badge}
          </span>
        )}

        <h3 className="font-display text-xl font-bold text-namcha-navy mb-1">
          {product.name}
        </h3>
        <p className="font-body text-xs text-namcha-earth/50 uppercase tracking-wider mb-3">
          {product.weight}
        </p>
        <p className="font-body text-namcha-earth/80 text-sm leading-relaxed flex-1 mb-6">
          {product.description}
        </p>

        <a href="#contact" className="btn-primary text-sm px-6 py-2.5">
          Learn More
        </a>
      </div>
    </div>
  )
}
