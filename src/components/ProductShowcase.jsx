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

        {/* Product */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <ProductCard product={products[0]} />
          </div>
        </div>
      </div>
    </section>
  )
}
