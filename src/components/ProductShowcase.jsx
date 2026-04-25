import useInView from '../hooks/useInView'
import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function ProductShowcase() {
  const [headingRef, headingVisible] = useInView()

  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`fade-in-up ${headingVisible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="font-body text-namcha-blue uppercase tracking-widest text-sm font-semibold mb-4">
            Our Products
          </p>
          <h2 className="section-heading">Colour in Every Cup</h2>
          <p className="section-subheading">
            Finely milled, naturally vibrant, and completely additive-free — Namcha powder is
            designed to make every drink a moment worth photographing.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
