import AnimatedButton from './ui/AnimatedButton'
import { ImageTrail } from './ui/ImageTrail'
import { useRef } from 'react'

function Hero() {
  const featureCards = [
    {
      title: 'Online\nConsultations',
      badge: 'Best Deals',
      bgClass: 'bg-gray-900 text-white',
      decorative: true,
    },
    {
      title: 'Best\nDentists',
      badge: 'Top Rated',
      bgClass: 'relative bg-gray-100 text-gray-900',
      hasImage: true,
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWJBrH_pMemXUbr_iDNceR8xqHdI-I-4ChYZ7HiTWChYhfJRhmqI4zx7ph66pAO4UIuqYkdgu_d9T8s--E4V0ErTpqnEVNOJeeALtQtQEL4LVqwuv5Xw9t69Ff8zMJyiYGDjqfuS3rNJdSytmIQl4zy3G7pcByPI6jkBBAewk9p7zykC-vVmthvFhsso7V6ENgiBW_PsGEiw6xn6jGMxeO90edimvkvqtNbvfEBrRqWj8omM5ktY0cKBuvlPVHqWH-hZatnqd27Ek',
    },
    {
      title: '20+\nClinics',
      badge: 'Available Now',
      bgClass: 'bg-teal-50 text-teal-900',
      hasAvatars: true,
    },
  ]

  const trailRef = useRef(null)
  const trailImages = [
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
    'https://images.unsplash.com/photo-1542206395-9feb3edaa68d',
  ].map((url) => `${url}?auto=format&fit=crop&w=220&q=80`)

  return (
    <section
      id="home"
      ref={trailRef}
      className="relative pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden"
    >
      {/* Image Trail */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-80">
        <ImageTrail containerRef={trailRef} interval={120} rotationRange={10}>
          {trailImages.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-24 h-24 rounded-2xl shadow-soft ring-1 ring-white/60"
            >
              <img
                src={url}
                alt={`Smiling person ${index + 1}`}
                className="object-cover absolute inset-0"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      {/* Decorative SVG Background */}
      <svg className="absolute top-10 left-0 w-full h-full text-gray-900 opacity-10 pointer-events-none z-0" fill="none" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 100 C 100 100, 200 0, 400 200 C 600 400, 700 300, 900 300" fill="none" stroke="currentColor" strokeWidth="1"></path>
        <path d="M-100 150 C 100 150, 200 50, 400 250 C 600 450, 700 350, 900 350" fill="none" stroke="currentColor" strokeWidth="1"></path>
      </svg>

      {/* Hero Heading */}
      <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-medium leading-tight max-w-5xl mx-auto mb-10 text-gray-900 z-10">
        Your dr
        <span className="inline-flex items-center justify-center align-middle mx-1">
          <img
            alt="Diverse beaming smile of a mature man"
            className="h-[0.8em] w-[2.2em] object-cover rounded-full border-2 border-white shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsRVNozNKW8qK0Y1wJ4LKSjx4_FswXL90H62VDjx9V-2nTOx_IS3BBKmvNRtmHrOoNnulZvKomTm6bP8QWNnUAFFH8LnjMQBXSrQJCcwV34wppghYs4mzkj8J5gjbo_FgXq8x2shXTyvf11nE2V-Zaj5QzaZoYRzjUPOtZSBnJmp1BKBRKuTgo43NeETj-Ik1uDZ46i28VC-Ez2V9E4NN3u8LIXDJKOBD5ul7D5RwtEznlrS1KupQLCbTkoy0Ov6JNgljne4sV0eQ"
          />
        </span>
        am smile <br/>
        is{' '}
        <span className="relative inline-block">
          our
          <span className="absolute -top-4 -right-6 text-blue-500 transform rotate-12">
            <span className="material-symbols-outlined fill-1">favorite</span>
          </span>
        </span>{' '}
        Care
        <span className="inline-flex items-center justify-center align-middle mx-1">
          <img
            alt="Group of diverse smiling young people"
            className="h-[0.8em] w-[2.2em] object-cover rounded-full border-2 border-white shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADjPq5YoRjdjZpjELMb8IYwZ9hVTBUaUg3KCdPMueRgteQdFeQhRr-J5rmBNITm-HcZtiKQGqraMYoh2FX3BLmO_GPhdpZMeq85G8O-QTwNHjAsrSnM6T2jEfZWGvBT2eKSGTphsm5tTEoXHJb52xVg1-8IXX1qNVCgImLwbkgfq7w2NjGWlGzhEtZv9WoHIm-LFNjX7CEB1MORj0c99btP83Kh8t0eqx6wC96p8_UhYFgkf5UmpQgctL1PU1b-dLyRsS_DIh0TaU"
          />
        </span>
      </h1>

      {/* CTA Button */}
      <div className="mb-20 z-10">
        <AnimatedButton href="#booking">Book Your Appointment</AnimatedButton>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl z-10">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgClass} p-6 rounded-3xl flex flex-col justify-between min-h-[180px] relative overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer`}
          >
            {card.hasImage && (
              <div className="absolute inset-0 z-0">
                <img
                  alt="Modern dental clinic"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  src={card.imageSrc}
                />
              </div>
            )}
            <div className="flex justify-between items-start z-10">
              <span className={`${card.hasImage ? 'bg-white px-3 py-1 rounded-full text-xs font-medium border border-gray-200' : 'bg-white/10 px-3 py-1 rounded-full text-xs font-light tracking-wide backdrop-blur-sm'}`}>
                {card.badge}
              </span>
              <span className={`material-symbols-outlined ${card.hasImage ? 'text-gray-500 group-hover:text-gray-900' : 'text-gray-400 group-hover:text-white'} transition-colors`}>add</span>
            </div>
            <div className="z-10 mt-auto">
              <h3 className="text-2xl font-light font-serif whitespace-pre-line">{card.title}</h3>
            </div>
            {card.decorative && (
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-teal-900/50 rounded-tl-full blur-xl"></div>
            )}
            {card.hasAvatars && (
              <div className="mt-auto flex items-end justify-between">
                <div></div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img alt="Staff member" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH2ujn8WzKe9v8SsDzAgv3JoLGVGRjLnOEALr-wDP0ALeAErOvEMivsRxtMcznafzsTnvr_0Wte_PHkre5KGob5RcbrPp1Jcv3CQBBVE4wcqftog5roMkqZjPAV9DhmrDDVDkRBIIPgaICSXq4C4i8OvSGvhnPHZlHlQvV3tEVhajhFJrNOaaR6Bc3k7L-Lf2tS3aWVb8gDocw3PoJi8UejVG_xt-rneynJzT_2UgNf4351_Y7ImVpRipLHmzD_5m3SyCVmAijdHk" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img alt="Happy patient" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5_Ypdv1M81Tx2_Qbu9FZKu2_A9wOg-y4Hre3PMDtCwg3Nrch0XPK48-XvhzgWc0bPhuqn5Jx9o-33kWICKL5g4chZT1Chpw8l8dtRtHs9g9Idu4HSFZtVFnaVhxEpcD7MLSxMR-kmiYAwf0xf3aKuiLDASavG62hxIt08m9uJ7v1xHbF8iyfuLbGTihODul177lZbwCYDSR5-FyyTQt8lcRTuqSn4qeDT7EHMVUPzoq9jmNnF-Q-E2Ao1sP9mWipjMRij4xnlJGA" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden flex items-center justify-center text-[10px] bg-teal-100 text-teal-800 font-bold">
                    +5
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
