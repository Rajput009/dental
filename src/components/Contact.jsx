function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="w-full mb-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">Get in Touch</h2>
          <p className="text-gray-500 text-lg md:text-xl font-normal max-w-2xl">
            We are here to help with your dental needs. Fill out the form below or visit us at our clinic for a consultation.
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12">
          {/* Left Side: Map & Contact Info */}
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            {/* Map Container */}
            <div className="relative w-full h-[300px] lg:h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-sm group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_Te2DcgF6Y8cHovC61CaHFKri1UKHhgh_KXhieBakivvns9hyZy1SYoY2pPEjIHDgzWdF9quCToyyEYt-VK_14HARq_mB7RiuJHBaWcOCjFlrXiT9e72yZPIq2JAURzEGnjedjX_6-UGktEoOPexy3wjLkzuaYq5rw9Q0OJTk6WKZ6_WUH-hBXSbckrEFfLRAnPnvVYYrCeVDnD9UvoEI8baSnCy-Ju5zqy5zbJtxCvVvgw66xuOgQ3gtRAZYBU4N1vRibM8pmuY")' }}
              ></div>
              
              {/* Map UI Overlay */}
              <div className="absolute top-4 right-4 bg-white p-2 rounded-xl shadow-lg flex flex-col gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
                  <span className="material-symbols-outlined text-xl">add</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
                  <span className="material-symbols-outlined text-xl">remove</span>
                </button>
              </div>
              
              {/* Location Card */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-xs border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="bg-accent-teal/20 p-2 rounded-full text-accent-teal shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Hume Dental Associates</p>
                    <p className="text-xs text-gray-500 mt-1">123 Smile Boulevard, Suite 100<br/>San Francisco, CA 94102</p>
                    <a className="text-accent-teal text-xs font-bold mt-2 inline-flex items-center hover:underline" href="#">
                      Get Directions <span className="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="bg-accent-teal/10 p-3 rounded-full text-accent-teal">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                  <a className="text-lg font-bold text-gray-900 hover:text-accent-teal transition-colors" href="tel:4155550123">(415) 555-0123</a>
                  <p className="text-xs text-gray-400 mt-1">Call for appointments</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="bg-accent-teal/10 p-3 rounded-full text-accent-teal">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Hours</p>
                  <p className="text-base font-bold text-gray-900">Mon - Fri: 8am - 6pm</p>
                  <p className="text-sm text-gray-500">Sat: 9am - 2pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              Send us a Message
              <span className="material-symbols-outlined text-accent-teal">mail</span>
            </h3>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-gray-700 ml-1">Full Name</span>
                  <input
                    className="w-full rounded-full border border-gray-200 bg-gray-50 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal h-12 px-5 text-gray-900 placeholder:text-gray-400 transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-gray-700 ml-1">Phone Number</span>
                  <input
                    className="w-full rounded-full border border-gray-200 bg-gray-50 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal h-12 px-5 text-gray-900 placeholder:text-gray-400 transition-all outline-none"
                    placeholder="(555) 000-0000"
                    type="tel"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-gray-700 ml-1">Email Address</span>
                <input
                  className="w-full rounded-full border border-gray-200 bg-gray-50 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal h-12 px-5 text-gray-900 placeholder:text-gray-400 transition-all outline-none"
                  placeholder="john@example.com"
                  type="email"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-gray-700 ml-1">Message</span>
                <textarea
                  className="w-full rounded-3xl border border-gray-200 bg-gray-50 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal p-5 min-h-[160px] text-gray-900 placeholder:text-gray-400 resize-none transition-all outline-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </label>
              <div className="pt-2">
                <button type="submit" className="btn-animated group md:w-auto md:min-w-[200px]">
                  <span className="btn-text">Send Message</span>
                  <div className="btn-icon">
                    <svg
                      className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                    <svg
                      className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center md:text-left mt-2">
                By submitting this form, you agree to our privacy policy. We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
