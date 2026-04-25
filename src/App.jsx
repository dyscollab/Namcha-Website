import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProductShowcase from './components/ProductShowcase'
import Benefits from './components/Benefits'
import ColorShift from './components/ColorShift'
import HowToUse from './components/HowToUse'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductShowcase />
        <Benefits />
        <ColorShift />
        <HowToUse />
        <Contact />
      </main>
    </>
  )
}
