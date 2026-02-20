import { Timeline } from './ui/Timeline'

function About() {
  const timelineData = [
    {
      title: '1898',
      content: (
        <div>
          <h4 className="text-xl md:text-2xl font-serif text-slate-900 dark:text-white mb-2">
            A historic residence on North Main
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            The house at 914 North Main was built circa 1898 as a residence for George Agle, a local business owner.
          </p>
        </div>
      ),
    },
    {
      title: '1900s',
      content: (
        <div>
          <h4 className="text-xl md:text-2xl font-serif text-slate-900 dark:text-white mb-2">
            A community landmark evolves
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            The home later served as a sorority house for Illinois Wesleyan University and then a funeral home for several decades.
          </p>
        </div>
      ),
    },
    {
      title: '1983–1984',
      content: (
        <div>
          <h4 className="text-xl md:text-2xl font-serif text-slate-900 dark:text-white mb-2">
            Remodeled into a dental office
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            The building was remodeled into a dental office for Dr. David J. Hume and Dr. D. Scott Hume.
          </p>
        </div>
      ),
    },
    {
      title: '2003',
      content: (
        <div>
          <h4 className="text-xl md:text-2xl font-serif text-slate-900 dark:text-white mb-2">
            Facade restored to its roots
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            A front facade remodel mirrored original columns and porch details from the home’s early history.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="text-blue-700 text-xs font-bold tracking-widest uppercase mb-3 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-5 leading-tight">
              A tradition of professional care on North Main
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Gentle, family-oriented care led by Dr. Jonathan L. Hume, D.D.S. Our office combines modern technology with a warm, personal experience.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Modern, safe care</h3>
                <p className="text-sm text-slate-600">
                  State‑of‑the‑art equipment, advanced sterilization, and distilled water for dental units.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Comprehensive dentistry</h3>
                <p className="text-sm text-slate-600">
                  General and cosmetic care, plus coordination with specialists in periodontics, implants, and endodontics.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Friendly, consistent team</h3>
                <p className="text-sm text-slate-600">
                  A kind, caring staff focused on comfort and quality care for every visit.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13098281395"
                className="inline-flex items-center justify-center rounded-full bg-blue-700 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                Call (309) 828-1395
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-800 px-6 py-3 text-sm font-semibold hover:border-slate-400 hover:bg-white transition-colors"
              >
                Request an Appointment
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden shadow-soft border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop"
                  alt="Historic home exterior similar to the North Main landmark"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900">A historic home on North Main</h3>
                  <p className="text-sm text-slate-600 mt-1">A landmark rooted in community trust.</p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-soft border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
                  alt="Warm, welcoming dental consultation"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900">Care that feels personal</h3>
                  <p className="text-sm text-slate-600 mt-1">Honest guidance, calm visits.</p>
                </div>
              </div>
            </div>

            <Timeline
              title="The Hume Legacy"
              subtitle="A historic home, a modern practice, and a long-standing commitment to Bloomington families."
              data={timelineData}
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Meet the team</h3>
            <ul className="mt-3 text-sm text-slate-600 space-y-2">
              <li>Dr. Jonathan L. Hume, D.D.S.</li>
              <li>Sandra — Dental Assistant</li>
              <li>Danyielle — Front Office</li>
              <li>Kerry — Dental Hygienist</li>
              <li>Nicole — Dental Hygienist (Adjunct)</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Office & insurance</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We accept most insurance plans and major payment methods. PPO and indemnity plans are welcome.
            </p>
            <div className="mt-3 text-sm text-slate-600">
              Payment plans are available through a third party.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
