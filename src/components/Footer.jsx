function Footer() {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#dentists', label: 'Our Dentists' },
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
  ]

  const services = [
    'Dental Implants',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Pediatric Care',
  ]

  return (
    <footer className="bg-dark-bg text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 text-primary flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  dentistry
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg tracking-tight">Hume</span>
                <span className="font-display font-medium text-accent-teal text-sm tracking-wide">Dental</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your dream smile is our favorite care. Expert dental services for the whole family.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                914 North Main, Bloomington, IL
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">call</span>
                (309) 828-1395
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                drhumeonline@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hume Dental Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
