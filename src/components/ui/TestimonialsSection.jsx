import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Smile Gallery',
    title: 'Before & After: Cosmetic Dentistry',
    description: 'Subtle changes can make a big difference in confidence and comfort.',
    treatments: [
      'Comprehensive evaluation',
      'Conservative cosmetic planning',
      'Natural-looking restoration',
    ],
    category: 'Cosmetic dentistry',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHDifDdxHbr8wpn8ISzxI2Z2YDPwg9zX7uma4WRE6wD-yvpwWkVUaKdAjzCmLpw3fr_z1JlFjqQVl2dMsGjXwdzGPyDxLXnTyx_QPKKmYjTTm-9k3o6PfuXguNDT2k-zm-AqKak1_R04S0AnRJrwgKRYZA0MpQ59zhcfZaMpNqunldBK1YwMamMsonm8gfXfeqN65RewEFMNJEBv8Og222XTPngyIpmPGZblUVVTdc22tn2eOYnNYU_NreadcXV4yz7tDO0ufAMEA',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZtzwed_gJLFJUSbA97eb9xKKA-aq7ooGEGAn0UbHHuUf51ZhI0_sQgcCv9H0I_HCtvk2rLNbtAnKlLH4-z6_Ol2jArZ5V-9L4FTAl86QzLBfHkAl-icf-UPA55k-6l-AFuTpdkxQ7D0WP8uoHb-eZiQ96QBb_9hvuVqa_FLnTWxERDgbYmv7qALXQ6XXOqj9KQ_X3YiOx-b4csqtXVnWPd4hMdJBU0empgFHequjPEfEU2LnL36pmCanPWp41IwLpAgP0zaZNeU8',
    patientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi5hLXz85VZeJMtse7jrKq8pyN61Dg4bI_Qrmo-et6nhD_c9pfqFxjwPv1GZO2nilFk_C8LQ6IK_P5RApr86TuG6_p7Xl4TMdNmIy8DkL9-CrS4vLXftESDN-RHkQuWmuX1kngYY7Hwo7vJncUf7RSaaPkSBunbqmmrR12sNsTAqpbdvirQXqweO2QpdzRlp6QI7rnviy7w7jv-JKcWGbbSMuoyamoc7zVbFb85X6HpPyAgB7WGtwXGmDyA7WT-iE0uYdASaYkmKQ',
    caption: 'Before and after results shown with patient consent.',
  },
  {
    id: 2,
    name: 'Smile Gallery',
    title: 'Before & After: Crowns & Bridges',
    description: 'Restoring strength and function while keeping a natural look.',
    treatments: [
      'Digital evaluation',
      'Custom crown or bridge planning',
      'Precise fit and finish',
    ],
    category: 'Crowns & bridges',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHDifDdxHbr8wpn8ISzxI2Z2YDPwg9zX7uma4WRE6wD-yvpwWkVUaKdAjzCmLpw3fr_z1JlFjqQVl2dMsGjXwdzGPyDxLXnTyx_QPKKmYjTTm-9k3o6PfuXguNDT2k-zm-AqKak1_R04S0AnRJrwgKRYZA0MpQ59zhcfZaMpNqunldBK1YwMamMsonm8gfXfeqN65RewEFMNJEBv8Og222XTPngyIpmPGZblUVVTdc22tn2eOYnNYU_NreadcXV4yz7tDO0ufAMEA',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZtzwed_gJLFJUSbA97eb9xKKA-aq7ooGEGAn0UbHHuUf51ZhI0_sQgcCv9H0I_HCtvk2rLNbtAnKlLH4-z6_Ol2jArZ5V-9L4FTAl86QzLBfHkAl-icf-UPA55k-6l-AFuTpdkxQ7D0WP8uoHb-eZiQ96QBb_9hvuVqa_FLnTWxERDgbYmv7qALXQ6XXOqj9KQ_X3YiOx-b4csqtXVnWPd4hMdJBU0empgFHequjPEfEU2LnL36pmCanPWp41IwLpAgP0zaZNeU8',
    patientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi5hLXz85VZeJMtse7jrKq8pyN61Dg4bI_Qrmo-et6nhD_c9pfqFxjwPv1GZO2nilFk_C8LQ6IK_P5RApr86TuG6_p7Xl4TMdNmIy8DkL9-CrS4vLXftESDN-RHkQuWmuX1kngYY7Hwo7vJncUf7RSaaPkSBunbqmmrR12sNsTAqpbdvirQXqweO2QpdzRlp6QI7rnviy7w7jv-JKcWGbbSMuoyamoc7zVbFb85X6HpPyAgB7WGtwXGmDyA7WT-iE0uYdASaYkmKQ',
    caption: 'Before and after results shown with patient consent.',
  },
  {
    id: 3,
    name: 'Smile Gallery',
    title: 'Before & After: Teeth Whitening',
    description: 'Professional whitening for a brighter, natural smile.',
    treatments: [
      'In-office whitening',
      'Shade matching',
      'Maintenance guidance',
    ],
    category: 'Teeth whitening',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHDifDdxHbr8wpn8ISzxI2Z2YDPwg9zX7uma4WRE6wD-yvpwWkVUaKdAjzCmLpw3fr_z1JlFjqQVl2dMsGjXwdzGPyDxLXnTyx_QPKKmYjTTm-9k3o6PfuXguNDT2k-zm-AqKak1_R04S0AnRJrwgKRYZA0MpQ59zhcfZaMpNqunldBK1YwMamMsonm8gfXfeqN65RewEFMNJEBv8Og222XTPngyIpmPGZblUVVTdc22tn2eOYnNYU_NreadcXV4yz7tDO0ufAMEA',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZtzwed_gJLFJUSbA97eb9xKKA-aq7ooGEGAn0UbHHuUf51ZhI0_sQgcCv9H0I_HCtvk2rLNbtAnKlLH4-z6_Ol2jArZ5V-9L4FTAl86QzLBfHkAl-icf-UPA55k-6l-AFuTpdkxQ7D0WP8uoHb-eZiQ96QBb_9hvuVqa_FLnTWxERDgbYmv7qALXQ6XXOqj9KQ_X3YiOx-b4csqtXVnWPd4hMdJBU0empgFHequjPEfEU2LnL36pmCanPWp41IwLpAgP0zaZNeU8',
    patientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi5hLXz85VZeJMtse7jrKq8pyN61Dg4bI_Qrmo-et6nhD_c9pfqFxjwPv1GZO2nilFk_C8LQ6IK_P5RApr86TuG6_p7Xl4TMdNmIy8DkL9-CrS4vLXftESDN-RHkQuWmuX1kngYY7Hwo7vJncUf7RSaaPkSBunbqmmrR12sNsTAqpbdvirQXqweO2QpdzRlp6QI7rnviy7w7jv-JKcWGbbSMuoyamoc7zVbFb85X6HpPyAgB7WGtwXGmDyA7WT-iE0uYdASaYkmKQ',
    caption: 'Before and after results shown with patient consent.',
  },
]

const categories = ['Cosmetic dentistry', 'Crowns & bridges', 'Teeth whitening']

function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('Cosmetic dentistry')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef(null)
  const isDragging = useRef(false)

  const filteredTestimonials = testimonials.filter(t => t.category === activeCategory)
  const currentTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0]

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredTestimonials.length - 1))
    setSliderPosition(50)
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev < filteredTestimonials.length - 1 ? prev + 1 : 0))
    setSliderPosition(50)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current || !sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F0F6FF] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <header className="pt-16 pb-8 px-6 md:px-12 text-center">
          <h3 className="text-sm font-semibold tracking-widest text-blue-500 dark:text-blue-400 uppercase mb-4">
            Smile Gallery
          </h3>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0B3B8B] dark:text-blue-100 mb-6">
            Before and after results
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            A few examples of conservative, natural-looking care.
          </p>
        </header>

        {/* Category Tabs */}
        <div className="w-full border-b border-gray-200 dark:border-gray-700 mt-4 mb-12">
          <nav aria-label="Tabs" className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 px-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setCurrentIndex(0)
                  setSliderPosition(50)
                }}
                className={`border-b-2 py-4 px-1 text-sm md:text-base lg:text-lg transition-colors ${
                  activeCategory === category
                    ? 'border-blue-500 text-[#0B3B8B] dark:text-white font-semibold'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Grid */}
        <div className="flex-grow px-6 md:px-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column - Story */}
          <div className="lg:col-span-4 flex flex-col justify-center h-full space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B3B8B] dark:text-blue-100 leading-tight mb-6">
                {currentTestimonial?.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8">
                {currentTestimonial?.description}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0B3B8B] dark:text-blue-200 mb-4">What we did</h3>
              <ul className="space-y-3">
                {currentTestimonial?.treatments.map((treatment, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span className="text-slate-500 dark:text-slate-400">{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center Column - Before/After Slider */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div 
              ref={sliderRef}
              className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg select-none cursor-ew-resize group"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <img
                alt="After treatment close up of smile"
                className="w-full h-full object-cover"
                src={currentTestimonial?.afterImage}
              />
              
              {/* Before Image (Overlay with clip-path) */}
              <div 
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  alt="Before treatment close up of smile"
                  className="h-full object-cover"
                  src={currentTestimonial?.beforeImage}
                  style={{ width: sliderRef.current?.offsetWidth || '100%', maxWidth: 'none' }}
                />
              </div>

              {/* Labels */}
              <span className="absolute top-4 left-4 text-white text-xs font-medium tracking-wide drop-shadow-md z-20 bg-black/30 px-2 py-1 rounded">
                Before
              </span>
              <span className="absolute top-4 right-4 text-white text-xs font-medium tracking-wide drop-shadow-md z-20 bg-black/30 px-2 py-1 rounded">
                After
              </span>

              {/* Slider Handle */}
              <div 
                className="absolute inset-y-0 w-0.5 bg-white cursor-ew-resize z-30 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg text-[#0B3B8B] text-xs font-bold uppercase tracking-wider -translate-x-1/2">
                  Drag
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Patient Image & Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                alt="Smile gallery detail"
                className="w-full h-full object-cover"
                src={currentTestimonial?.patientImage}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-8">
                {currentTestimonial?.caption}
              </p>
              <div className="flex items-center justify-end space-x-4 self-end mt-auto">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-[#0B3B8B] dark:text-blue-200 font-medium text-sm">
                  {String(currentIndex + 1).padStart(2, '0')}/{String(filteredTestimonials.length).padStart(2, '0')}
                </span>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition text-gray-600 dark:text-gray-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
