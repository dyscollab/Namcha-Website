import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about'       },
  { label: 'Products',   href: '#products'    },
  { label: 'Benefits',   href: '#benefits'    },
  { label: 'How to Use', href: '#how-to-use'  },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-namcha-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 no-underline" onClick={closeMenu}>
          <img
            src="/assets/logo.png"
            alt="Namcha logo"
            className={`h-12 w-auto transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
            onLoad={() => setLogoLoaded(true)}
            onError={(e) => { e.target.style.display = 'none' }}
          />
          {!logoLoaded && (
            <span
              className={`font-display text-2xl font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-namcha-navy' : 'text-white'
              }`}
            >
              Namcha
            </span>
          )}
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-body font-medium text-sm transition-colors duration-300 no-underline hover:text-namcha-blue ${
                  scrolled ? 'text-namcha-earth' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#products" className="btn-primary text-sm px-6 py-2.5">
              Shop Now
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-namcha-navy' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-namcha-navy' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-namcha-navy' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-namcha-cream/98 backdrop-blur-sm ${
          menuOpen ? 'max-h-96 border-t border-namcha-blue/10' : 'max-h-0'
        }`}
      >
        <ul className="list-none m-0 p-0 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="font-body font-medium text-namcha-earth hover:text-namcha-blue transition-colors no-underline block py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#products" onClick={closeMenu} className="btn-primary text-sm px-6 py-2.5">
              Shop Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
