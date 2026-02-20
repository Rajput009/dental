import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const services = [
  { id: 'cleaning', name: 'General Cleaning', description: 'Routine check-up and cleaning.', duration: '60 mins', icon: 'cleaning_services' },
  { id: 'whitening', name: 'Whitening', description: 'Professional teeth whitening.', duration: '45 mins', icon: 'medical_services' },
  { id: 'emergency', name: 'Emergency', description: 'Urgent pain relief or repair.', duration: '30 mins', icon: 'emergency' },
  { id: 'consultation', name: 'Consultation', description: 'Discuss braces or implants.', duration: '30 mins', icon: 'orthopedics' },
]

const dentists = [
  { id: 'sarah', name: 'Dr. Sarah', title: 'General Dentist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl5_PgkS7ehlquy6N40kMiifCJl3TaykhpMFqc5yi1g4TsWetpr2xWD6f9TmhVokmq6tvm2I8kbwwbursCD9yD99mAc4DenA5qVACuo_-vFKrqhTSvDgJ6yC0xqkyQYgGvzeU2pvRTUq71Z765YKzxN3W2KsQTwAQw6BBGH1-xn4KYIqZhdYEJPXL7XZZPrpvA3XIgEb74UlaXg0rRoT1cXihN0UhtHq1uEn2cyeqHL2kA5lEJSTB846yX68W3kVqS5NoZoX7QRvE' },
  { id: 'james', name: 'Dr. James', title: 'Oral Surgeon', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMJWM9UYaYcK679r6niAE8K7tA488onyBCTZyMia0DrfYSOpF62uAYmf3XGIHFwkTIkBcoEYvoUPoRTjLGtdp53U9xrY9rb9Vq5FKd9qLoj31mmVrHY2aY2vDf56ZB7UMlbAgihhXydpkOib31p5jw34Y4-X1glxx8--1shnw1heTlw4cArhm-Ec4NUfU_C2YDbYEoy-eAEuaC3_jL_D65laK1ngZb2Ndzopqr_L4QcEne29vhSVCmCbycv90uRVX48h3eTS1NCow' },
  { id: 'elena', name: 'Dr. Elena', title: 'Pediatric', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYumEx2J_YbpLWsDA9KrcRGrJiFDwrqQN0wEtgt_Y6w__QdLhmN5rcwslDvq_aY5QrOogCKbKUSXyPV7m1GYnzHLjeircvntEL4oDV00oX_9U7eTSujlfb3zlV3OgXyOwTS9GK8c1Dg1swaGNrPEWk9PnPNl7dEo6NUSvKSL3f7sP29Wse_6Wf-nFGLH-cLuROeZ2VkVc1qPyQobiyarXsCQBV5ld4dxrm_0rPNPe4RI-plOgmJb-bVXQMHxzsAktteUe0epnZYcw' },
  { id: 'any', name: 'Any Available', title: 'Fastest', image: null },
]

function Booking() {
  const [selectedService, setSelectedService] = useState('cleaning')
  const [selectedDentist, setSelectedDentist] = useState('sarah')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', { service: selectedService, dentist: selectedDentist, ...formData })
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.')
  }

  const selectedServiceData = services.find(s => s.id === selectedService)
  const selectedDentistData = dentists.find(d => d.id === selectedDentist)

  return (
    <section id="booking" className="py-20 px-6 md:px-12 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Book an Appointment</h2>
          <p className="text-gray-400">Schedule your visit with our expert dental team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10">
            {/* Service Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2 text-gray-900">
                <span className="material-symbols-outlined text-accent-teal">dentistry</span>
                Select Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label key={service.id} className="cursor-pointer relative">
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={selectedService === service.id}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="p-4 rounded-xl border border-gray-200 hover:border-accent-teal peer-checked:border-accent-teal peer-checked:bg-accent-teal-light transition-all flex items-start gap-3">
                      <span className="material-symbols-outlined text-gray-400 peer-checked:text-accent-teal">{service.icon}</span>
                      <div>
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                        <span className="text-xs font-semibold mt-2 block text-gray-400">{service.duration}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Dentist Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2 text-gray-900">
                <span className="material-symbols-outlined text-accent-teal">stethoscope</span>
                Preferred Dentist
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                {dentists.map((dentist) => (
                  <label key={dentist.id} className="cursor-pointer min-w-[140px]">
                    <input
                      type="radio"
                      name="dentist"
                      value={dentist.id}
                      checked={selectedDentist === dentist.id}
                      onChange={(e) => setSelectedDentist(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="h-full p-4 rounded-xl border border-gray-200 hover:border-accent-teal peer-checked:border-accent-teal peer-checked:bg-accent-teal-light transition-all flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-gray-200 mb-3 overflow-hidden flex items-center justify-center">
                        {dentist.image ? (
                          <img alt={dentist.name} className="w-full h-full object-cover" src={dentist.image} />
                        ) : (
                          <span className="material-symbols-outlined text-3xl text-gray-400">person</span>
                        )}
                      </div>
                      <h4 className="font-medium text-sm text-gray-900">{dentist.name}</h4>
                      <p className="text-xs text-gray-500">{dentist.title}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-2 text-gray-900">
                  <span className="material-symbols-outlined text-accent-teal">person</span>
                  Your Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-teal focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-teal focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-teal focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-teal focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-animated group w-full justify-center">
                <span className="btn-text">Confirm Booking</span>
                <div className="btn-icon">
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                </div>
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 text-white rounded-3xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-white/10">Booking Summary</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Service</span>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent-teal">
                      <span className="material-symbols-outlined text-[20px]">{selectedServiceData?.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium">{selectedServiceData?.name}</p>
                      <p className="text-xs text-gray-400">{selectedServiceData?.duration} • $120</p>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Dentist</span>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
                      {selectedDentistData?.image ? (
                        <img alt={selectedDentistData?.name} className="w-full h-full object-cover" src={selectedDentistData?.image} />
                      ) : (
                        <span className="material-symbols-outlined text-white">person</span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{selectedDentistData?.name}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-400 text-sm">Total Estimation</span>
                  <span className="text-2xl font-bold">$120.00</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Payment is collected at the clinic after the appointment. Cancellation policies apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
