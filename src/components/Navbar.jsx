import { useState, useEffect } from 'react'

function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About us' },
    { href: '#services', label: 'Services' },
    { href: '#dentists', label: 'Specialists' },
    { href: '#calculator', label: 'Calculator' },
    { href: '#testimonials', label: 'Testimonials' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`w-full py-6 px-6 sm:px-8 md:px-12 max-w-[1400px] mx-auto flex justify-between items-center sticky top-0 z-50 transition-all ${
          scrolled ? 'bg-white/90 backdrop-blur shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 text-primary flex items-center justify-center">
            <span
              className="material-symbols-outlined text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              dentistry
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-secondary text-lg tracking-tight">Hume</span>
            <span className="font-display font-medium text-accent-teal text-sm tracking-wide">Dental</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-accent-teal transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            className="hidden md:block font-medium text-sm text-gray-700 hover:text-accent-teal transition-colors"
            href="#contact"
          >
            Contact
          </a>
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden px-6 sm:px-8 pb-4 ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-3 text-sm text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-accent-teal transition-colors py-2"
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            className="hover:text-accent-teal transition-colors py-2"
            href="#contact"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
