import { useState } from 'react'
import useInView from '../hooks/useInView'

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.89 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.28 8.28 0 004.84 1.55V7.06a4.85 4.85 0 01-1.06-.37z"/>
    </svg>
  )
}


const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/namcha.cafe/',                          Icon: InstagramIcon },
  { label: 'TikTok',    href: 'https://www.tiktok.com/@namcha.cafe?_r=1&_t=ZS-96GCLvyJJAG',    Icon: TikTokIcon    },
]

export default function Contact() {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [leftRef, leftVisible]   = useInView()
  const [rightRef, rightVisible] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-namcha-earth py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — brand info */}
        <div
          ref={leftRef}
          className={`fade-in-up ${leftVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '0ms' }}
        >
          {/* Logo / wordmark */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.png`}
              alt="Namcha"
              className="h-10 w-auto brightness-0 invert"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <span className="font-display text-2xl font-bold text-white tracking-wide">Namcha</span>
          </div>

          <p className="font-display text-white/60 italic text-lg mb-8">
            100% all-natural butterfly pea powder 
          </p>

          <p className="font-body text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
            Questions, wholesale enquiries, or just want to say hello — we'd love to hear from you.
          </p>

          <a
            href="mailto:namcha.cafe.1@gmail.com"
            className="font-body text-namcha-lavender hover:text-white transition-colors text-sm no-underline block mb-10"
          >
            Email Us!
          </a>

          {/* Social links */}
          <div className="flex gap-4 mb-12">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 no-underline"
              >
                <Icon />
              </a>
            ))}
          </div>

          <p className="font-body text-white/30 text-xs">
            © {new Date().getFullYear()} Namcha. All rights reserved.
          </p>
        </div>

        {/* Right — newsletter */}
        <div
          ref={rightRef}
          className={`fade-in-up ${rightVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Stay in the Loop
              </h3>
              <p className="font-body text-white/60 text-sm mb-4">
                New products, recipes, and the occasional blue latte photo — straight to your inbox.
              </p>

              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-namcha-lavender transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:ring-2 focus:ring-namcha-lavender transition-all duration-200"
              />

              <button
                type="submit"
                className="btn-primary mt-2"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                You're in! 🎉
              </h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                Thanks{name ? `, ${name}` : ''}! We'll be in touch with recipes, launches, and maybe a blue latte or two.
              </p>
              <div className="mt-4 w-16 h-1 rounded-full bg-namcha-blue" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
