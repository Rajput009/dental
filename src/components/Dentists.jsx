import { useEffect, useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const specialists = [
  {
    id: 1,
    name: 'Dr. David Wilson',
    specialty: 'Orthodontist',
    description: 'Specialist in root canal treatments, combining precision and comfort.',
    practicingSince: '2014',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF8n40U_lCsicr91vtEFh5K9sx33bKS-szyrpWoWKmuCOQ5Gzc5uZ_-LeVko8GQ68Yl0SSbBrHpG5k4187oUjj8pK0TsqmiNgnsbTfztlljhKL8rB_eXXKjP5Wa7_G826-8wuG58D4IgOXM6XL_Y2lYgNryNZ1UKg1DUCBFC_8eU9I9p3gyCDheofPr_zNnCbSf9m1z-f1QICsbXwK0FlqhBuiXap4BxIPlC7YvOh8jU9IZmEEX6DPM2bIidH5QI8rzd8UuCk5CkE',
  },
  {
    id: 2,
    name: 'Dr. Emma Robinson',
    specialty: 'Esthetician',
    description: 'Crafts aesthetic transformations with veneers and cosmetic care.',
    practicingSince: '2016',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqjN3e81T-oF2fFfNg67yP12OV5Nw4tJgCIr4G_2ihmskDgi-LYxL_1ia9s2QiUF36fzVTQKFo7hKycFCLXhA9tiy5yKexAKMFzblbxK7tVT7i1aF90wEXugTMHEFAXFD56N_xXRloHkIA5kz-c5_OpKGDcHcip6JQo-7npMOO9k7wEn_r9Vq8oCCqfzQyc3GtgwtgntL9bZaqHqIkKq_JpXcOwgD4u1z2xmqpsBEnl_uGAQam_X66Tw8KLpLc_OeuJGoctxWHqwc',
  },
  {
    id: 3,
    name: 'Dr. Sophia Turner',
    specialty: 'Endodontist',
    description: 'Specialist in root canal treatments combining precision and comfort.',
    practicingSince: '2012',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC6oNJZlpNHTudSd9sHUR2Y74QozuHiFJ3s4Z9ngJSTfuFV2RSa_4600ipc2kgjWmcLfnmWsmfyYJrMeSl4EQdELUsqy3DPgHM1MYjN-szj43BzdxnS6E-6Gye6SYNtGSYyvc__mvl2GpuzReFPPBTy1Z_ha3dovGBzhhq9xGLF4_bwgMf26oMqbUfc_fxrHeVg71yFPffb8bwcmh8d73vLgx74SvuQ53kphmjGIlB8adsw7E1cxM8aoF3tZnNQpscawLfIXecv9w',
  },
  {
    id: 4,
    name: 'Dr. Michael Chen',
    specialty: 'Periodontist',
    description: 'Expert in gum health and periodontal disease treatment.',
    practicingSince: '2015',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF8n40U_lCsicr91vtEFh5K9sx33bKS-szyrpWoWKmuCOQ5Gzc5uZ_-LeVko8GQ68Yl0SSbBrHpG5k4187oUjj8pK0TsqmiNgnsbTfztlljhKL8rB_eXXKjP5Wa7_G826-8wuG58D4IgOXM6XL_Y2lYgNryNZ1UKg1DUCBFC_8eU9I9p3gyCDheofPr_zNnCbSf9m1z-f1QICsbXwK0FlqhBuiXap4BxIPlC7YvOh8jU9IZmEEX6DPM2bIidH5QI8rzd8UuCk5CkE',
  },
  {
    id: 5,
    name: 'Dr. Sarah Johnson',
    specialty: 'Prosthodontist',
    description: 'Specializes in dental prosthetics and full mouth rehabilitation.',
    practicingSince: '2013',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqjN3e81T-oF2fFfNg67yP12OV5Nw4tJgCIr4G_2ihmskDgi-LYxL_1ia9s2QiUF36fzVTQKFo7hKycFCLXhA9tiy5yKexAKMFzblbxK7tVT7i1aF90wEXugTMHEFAXFD56N_xXRloHkIA5kz-c5_OpKGDcHcip6JQo-7npMOO9k7wEn_r9Vq8oCCqfzQyc3GtgwtgntL9bZaqHqIkKq_JpXcOwgD4u1z2xmqpsBEnl_uGAQam_X66Tw8KLpLc_OeuJGoctxWHqwc',
  },
]

const staffImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDWtW0FlYh2Ux5NpXwQG1S1ziH3Kb0EnTjZtG4S_oiwut1EUc7pKe2l8yChbXFaVST2vDnS92b2ZTKzyljrUPsAvgaxKWTR8dK32w7-yN2u0BpyyeOaLirQHAsMWOF6Ru8X2nuzQx4DqI1WXDWijaNktYFSRlNs4uJ_LQw9g_-ph_6nvfkkAhxDjTmPSIRDCtRzYmTJ38S2XCta_cm67D_JeR1sjglS83vYBvTAXFcfnk2nnnXk6fRylzrJhbyMVoaylyGm1Fn5MnI',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDvL5qQN5KWbfEnpcKUKbrcNxs6MDsKW1xyATyFLpKJn0WCbXk-5-cbyFwzMZyUuhgdt-9L1HxWhc-QsLXobtNa6nZRgp2cA1k4WFae9bZ7Pk83ykpT_CiwuVzO-PI2y6hDsxF_XivqCp3IDnSpG2YnHZwFQsdN1P7V2ZNWnmpZ2qmbrRYMRP4mFz_nyApGTmtXiqNoHtjepx3OvRh4bvc4kpGkIJ2rZrSvvFFibqVW1bF9sDtAEMt2CUETBcdKONBQZVbaiDi_HQ8',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDsC-G5x85cgSU42-JqP629qE-2zVeGGQlmx1QaEC08UQIZlS7MqfbnBrGRrOTmUMz4yvefR5fG4Y--TNwOG8SjvW5x9jFvY7A-NLIlA1-GHTSdhumdqHlc_teXullUCp50Z4bHqUKoxaMzDMiNhnSaTBMdZCP76rMylFBFctaP0R-y2IVPrLjs4sW6PrmaITOPWsdCe0AiQH8rEuiSd0k2suN98sqtyVgN-I11_k21Z9BMnw7D1pV3Jy2G7EFpkwVlgwxwTn8uCpw',
]

function Dentists() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const visibleCards = 3
  const maxIndex = specialists.length - visibleCards

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="dentists" className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Top Navigation Pills - Desktop */}
      <div className="absolute top-4 right-8 flex space-x-3 z-20 hidden md:flex">
        <button className="px-5 py-2 rounded-lg text-white glass-panel hover:bg-white/30 transition text-sm font-medium">
          Dental clinic
        </button>
        <button className="px-5 py-2 rounded-lg text-white bg-white/20 hover:bg-white/30 border border-white/40 transition text-sm font-medium">
          Specialists
        </button>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center p-4 sm:p-8 lg:p-12 min-h-screen">
        <div className="bg-white dark:bg-slate-900 w-full max-w-[1400px] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[700px]">
          
          {/* Left Panel - Info */}
          <div className="w-full md:w-6/12 lg:w-5/12 p-8 lg:p-12 flex flex-col justify-between relative z-10">
            <div>
              {/* Mobile Label */}
              <div className="flex items-center justify-between mb-2 md:hidden">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Specialists</span>
              </div>

              {/* Title and Staff Avatars */}
              <div className="flex items-start gap-4 mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1E3A8A] dark:text-blue-100 leading-tight">
                  Meet the minds <br/> behind your smile
                </h1>
                <div className="flex -space-x-2 mt-2">
                  {staffImages.map((img, idx) => (
                    <img 
                      key={idx}
                      alt="Staff" 
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 object-cover" 
                      src={img} 
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-[#1E3A8A] text-white text-[10px] font-bold flex items-center justify-center">
                    +14
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
                Our team of dedicated professionals brings precision, empathy, and artistry to every treatment – combining years of experience with a shared passion for truly personalized care.
              </p>

              {/* View All Button */}
              <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3A8A] dark:bg-[#1e40af] text-white font-medium hover:bg-[#1e40af] dark:hover:bg-[#2563EB] transition-colors w-max">
                View all specialists
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-12">
                {/* Estimated Cost */}
                <div className="bg-gray-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 flex flex-col justify-between min-h-[140px]">
                  <h4 className="text-[11px] font-semibold text-[#1E3A8A] dark:text-blue-200 mb-2">Estimated cost range</h4>
                  <div className="w-full bg-blue-50 dark:bg-slate-700 h-6 rounded relative mb-1">
                    <div className="absolute left-[20%] w-[30%] h-full bg-[#2563EB] rounded"></div>
                  </div>
                  <div className="flex justify-between text-[8px] text-gray-400 font-medium mb-2 uppercase tracking-tighter">
                    <span>$500</span>
                    <span>$25000</span>
                  </div>
                  <div className="bg-white dark:bg-slate-700/50 rounded-lg p-1.5 text-center">
                    <div className="text-[11px] font-bold text-gray-800 dark:text-gray-100">$2,400 – $4,900*</div>
                  </div>
                </div>

                {/* Treatment Complexity */}
                <div className="bg-gray-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 flex flex-col justify-between min-h-[140px]">
                  <h4 className="text-[11px] font-semibold text-[#1E3A8A] dark:text-blue-200 mb-2">Treatment complexity</h4>
                  <div className="relative h-10 w-full flex items-end justify-center mb-1">
                    <div className="w-20 h-10 overflow-hidden relative">
                      <div className="absolute w-20 h-20 rounded-full border-[4px] border-blue-100 dark:border-slate-700 top-0 left-0 box-border"></div>
                      <div 
                        className="absolute w-20 h-20 rounded-full border-[4px] border-transparent border-t-[#2563EB] border-r-[#2563EB] top-0 left-0 box-border"
                        style={{ transform: 'rotate(-45deg)' }}
                      ></div>
                    </div>
                    <span className="absolute bottom-0 text-[11px] font-bold text-[#1E3A8A] dark:text-blue-100">68%</span>
                  </div>
                  <div className="flex justify-between text-[8px] text-gray-400 font-medium w-full px-2 mb-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                  <div className="bg-white dark:bg-slate-700/50 rounded-lg p-1.5 text-center">
                    <div className="text-[9px] text-gray-500 dark:text-gray-300">Estimation only</div>
                  </div>
                </div>

                {/* Treatment Time */}
                <div className="bg-gray-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 flex flex-col justify-between min-h-[140px]">
                  <h4 className="text-[11px] font-semibold text-[#1E3A8A] dark:text-blue-200 mb-3">Treatment time (est.)</h4>
                  <div className="flex gap-0.5 h-3 mb-3">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-full bg-[#2563EB] rounded-sm"></div>
                    ))}
                    {[0, 1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="w-full bg-blue-100 dark:bg-slate-600 rounded-sm"></div>
                    ))}
                  </div>
                  <div className="bg-white dark:bg-slate-700/50 rounded-lg p-1.5 text-center">
                    <div className="text-[11px] font-bold text-gray-800 dark:text-gray-100">3 week</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-[#1E3A8A] dark:bg-[#1e40af] flex items-center justify-center text-white hover:bg-[#1e40af] dark:hover:bg-[#2563EB] transition disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {String(currentIndex + 1).padStart(2, '0')}/{String(specialists.length).padStart(2, '0')}
              </span>
              <button 
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-10 h-10 rounded-full bg-[#1E3A8A] dark:bg-[#1e40af] flex items-center justify-center text-white hover:bg-[#1e40af] dark:hover:bg-[#2563EB] transition disabled:opacity-50"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Panel - Specialist Cards */}
          <div className="w-full md:w-6/12 lg:w-7/12 bg-gray-50 dark:bg-slate-800/50 p-8 lg:p-12 overflow-x-auto md:overflow-x-hidden relative">
            <span className="absolute top-8 right-12 text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:block">Specialists</span>
            
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full"
              style={{ transform: isMobile ? 'none' : `translateX(-${currentIndex * 280}px)` }}
            >
              {specialists.map((specialist) => (
                <div 
                  key={specialist.id}
                  className="w-full h-[420px] rounded-xl overflow-hidden relative group shadow-lg flex flex-col bg-white dark:bg-slate-800"
                >
                  {/* Specialty Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold text-[#1E3A8A] dark:text-blue-300 uppercase tracking-wide">
                    {specialist.specialty}
                  </div>
                  
                  {/* Image */}
                  <div className="h-[70%] bg-blue-100 dark:bg-slate-700 relative overflow-hidden">
                    <img 
                      alt={specialist.name} 
                      className="w-full h-full object-cover object-top card-image group-hover:scale-105" 
                      src={specialist.image}
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 bg-[#1E3A8A] dark:bg-[#1e40af] p-4 flex flex-col justify-between text-white">
                    <div>
                      <h3 className="text-lg font-semibold">{specialist.name}</h3>
                      <p className="text-xs text-blue-200 mt-1 leading-snug">{specialist.description}</p>
                    </div>
                    <div className="text-[10px] text-blue-300/80 mt-2 pt-2 border-t border-blue-400/30">
                      Practicing since {specialist.practicingSince}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .gradient-bg {
          background: radial-gradient(circle at top left, #60a5fa, #2563eb, #1e3a8a);
        }
      `}</style>
    </section>
  )
}

export default Dentists
