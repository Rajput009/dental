import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Dentists from './components/Dentists'
import Services from './components/Services'
import TestimonialsSection from './components/ui/TestimonialsSection'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <About />
        <Dentists />
        <Services />
        <TestimonialsSection />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
