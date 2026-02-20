import { useState, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import AnimatedButton from './ui/AnimatedButton'

function Services() {
  const [activeId, setActiveId] = useState(null)
  const hoverTimeout = useRef(null)

  const services = [
    {
      id: 1,
      title: 'Aesthetic dentistry',
      detailTitle: 'Perfectly crafted veneers',
      description: 'Enhance your smile with veneers, bonding, and aesthetic contouring for a perfect, natural look.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9JmEcTRoJ9-p8UoLk3s15Z0bzmfRPrrXHXXRIU8-VufQl326hsis00IptubbBWaUPo9XY90Vec-Ibaj6AADRckn6k5c6ka1FrBGQmAi7Ky8-VDro1Okk4A_hM4c1503o7fuwxSSeyzXG4-vl9d11yLNcw8w4NJymCaky8G_fGQxmNSJ1ZN2qMFqNGjKZ_btY35cZce2QINjpqVR62vTnIp-EcmNwv-ZulWRE7Oc7JFJ81yJLuhDLGo7hWsvQ9lEM1wClFRhA4ljY',
      clipPath: 'circle(40%)',
      delay: '0s',
    },
    {
      id: 2,
      title: 'Orthodontics',
      detailTitle: 'Precision alignment',
      description: 'Align your teeth with modern braces and clear aligners designed for comfort, speed, and discretion.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9FmtWmkfK1Ko2C6eN0SHbIV8EJVQLfx28eiEOtir9eOLPY4WBAVa-UX4KJ1oaYnLZZHpXc0fheWtUi5paNheWapRSOgtOj94ZBbfX61y_Aq1026AuG7tGUlK-yAVavyZSdjB1DVcRU6jvFQZznrZSZx-Br0uNrpTuG-K6RORJGnAcoIk8WEI2kO7WOGFyUD7p8J5zMIhqPE9mdO6aF13W2odwDkhPDuNZSWmWUIROU8e5Lj_qh1vYLZ3_SPZaaQrIIvStKMEx8NY',
      clipPath: 'inset(10% round 20%)',
      delay: '1s',
    },
    {
      id: 3,
      title: 'Implantology',
      detailTitle: 'Smile restoration',
      description: 'Permanent, natural-looking tooth replacements using 3D-guided surgery to restore function.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGtGwwBYA3-a0m28KLsN4mj6TJYu5nZ_KkaHYO6_MNOtPI9gH0sGgUiN2IjNtnSdCBwbQ_OaSZg9YpcvLb_2lNPwkPvdGTEMsLaFfnGMVdqALlrVFewrE5WihKW5F342rbPGhdLBez9gvpLxavrgOy9cRNpxMzjgqRqnFKaGT2Yql7Qg2KJFsOBYqrDVoUXN_i-7soJvCRc46AQrC0i-cLI6GvqBitX8QxiKqczSFZZe6VkxXdNQ7oRIObgXSX2DIC_eQ4syYUA3k',
      clipPath: 'inset(5% round 50% 50% 10% 10%)',
      delay: '2s',
      expandScale: 'scale-[1.10]',
    },
    {
      id: 4,
      title: 'Whitening',
      detailTitle: 'Radiant white',
      description: 'Professional whitening treatments that brighten your smile safely and effectively in a single visit.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRf7pwfflaHVBrIO4k90Vbs7LBD9zXKY5lCjQ2ogCvI0TE3AdAUBoy8pIAI31WuqG4kZe4CJqwmH52nQUUjaHhXTu0ZQasHDsJ6qmqEeODBbajjdoLfxERQa-fDtAMLUbcgGv5cXJy3aPtWILHlS0gPjRqh99_Vd-xzQ0ulSyCPT-6CPUPSjI8Lpataj5nEoRayMFejVlGn-MdMdAilao-_X2BAAkmX2Xd3GrUhZR7AFfeEA8jmrsnkJGiby1QRFEbk_u7VolpCH8',
      clipPath: 'ellipse(45% 35% at 50% 50%)',
      delay: '1.5s',
      expandScale: 'scale-[1.08]',
    },
    {
      id: 5,
      title: 'Surgical dentistry',
      detailTitle: 'Gentle expert care',
      description: 'Expert surgical procedures including extractions performed with minimal discomfort.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3uCL6fD09ADLPGCh9gLFE3u2WgKOfKRu2_ryuUNRdnZCJWurxjTPYGTekoYZOUh4NCcujTvtEPl-o3Gzic8zog3djekXHa5rLSMzVo-tVzwdtmcTGcilb1K4kK15fs1LOhDL3eKE9-AyEnLOGM2ci7W5zFPziTRH3hvAPbjNWUJ0DTT-ayFFO3jAfQDEqnlYxAgEPUCuCqgfsvVa_MiVG0FsR08_2R56us7M-snIN5JpCXelrnztab2jGWbVn81E1Jb4hc9J0UsM',
      clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      delay: '0.5s',
      expandScale: 'scale-[1.0]',
    },
  ]

  const handleMouseEnter = (id) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    hoverTimeout.current = setTimeout(() => {
      setActiveId(id)
    }, 50)
  }

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setActiveId(null)
  }

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-blue-950 mb-6">
            Expert care for every smile
          </h2>
          <p className="text-slate-500 text-lg font-light">
            We offer a full spectrum of treatments – each tailored to elevate your health, confidence, and natural beauty.
          </p>
        </div>

        {/* Expanding Cards Container */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-7xl mx-auto md:flex md:gap-4 md:h-80 md:items-stretch">
          {services.map((service) => {
            const isActive = activeId === service.id
            
            return (
              <div
                key={service.id}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
                className={`
                  relative rounded-3xl overflow-hidden cursor-pointer 
                  transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isActive ? 'lg:flex-[3]' : 'lg:flex-[1]'}
                  flex-1
                  bg-blue-600 md:bg-blue-600 shadow-xl border border-white/10
                  group
                  aspect-square md:aspect-auto
                `}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 to-blue-900/80 pointer-events-none"></div>
                
                {/* Active Background Overlay (desktop only) */}
                <div className={`hidden md:block absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Mobile simple layout */}
                <div className="md:hidden relative z-10 p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
                  <img
                    alt={`${service.title} 3D model representation`}
                    className="w-48 h-48 object-cover"
                    src={service.image}
                    style={{ clipPath: service.clipPath }}
                  />
                  <h3 className="font-serif text-white text-xl leading-tight">{service.title}</h3>
                </div>

                {/* Image - Expand in place (desktop) */}
                <div
                  className={`
                    hidden md:block absolute z-10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive
                      ? `top-1/2 left-10 -translate-y-1/2 translate-x-0 ${service.expandScale || 'scale-[1.25]'}`
                      : 'top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100'}
                  `}
                >
                  <div className="relative">
                    <img
                      alt={`${service.title} 3D model representation`}
                      className="w-40 h-40 lg:w-52 lg:h-52 object-cover"
                      src={service.image}
                      style={{ clipPath: service.clipPath }}
                    />
                    <div className="absolute inset-0 w-40 h-40 lg:w-52 lg:h-52 bg-blue-500 rounded-full mix-blend-color opacity-30 blur-xl -z-10"></div>
                  </div>
                </div>

                {/* Collapsed Title - Bottom Centered (desktop) */}
                <div 
                  className={`
                    hidden md:block absolute bottom-8 left-0 w-full text-center px-4
                    transition-all duration-500 ease-out
                    ${isActive ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                  `}
                >
                  <h3 className="font-serif text-white text-xl lg:text-2xl leading-none tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Expanded Content - Split Layout (desktop) */}
                <div
                  className={`
                    hidden md:block absolute inset-0 p-6 md:p-8
                    transition-all duration-500 delay-100
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
                  `}
                >
                  <div className="h-full w-full flex items-center gap-6">
                    <div className="flex-1" />
                    <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between text-white/90 border border-white/15">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-lg lg:text-xl font-serif font-medium leading-tight">
                          {service.detailTitle}
                        </h4>
                        <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                          <ArrowRight size={14} className="text-white" />
                        </button>
                      </div>
                      <p className="text-xs text-blue-100 leading-relaxed opacity-90 font-light mt-3">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-16">
          <AnimatedButton href="#booking">View Full Service Menu</AnimatedButton>
        </div>
      </div>
    </section>
  )
}

export default Services
