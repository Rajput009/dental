import { Timeline } from './ui/Timeline'

function About() {
  const timelineData = [
    {
      title: '1898',
      content: (
        <div>
          <h4 className="text-xl md:text-2xl font-serif text-slate-900 dark:text-white mb-2">
            The George Agle House is built
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            The historic North Main residence became a neighborhood landmark and a quiet witness to Bloomington’s growth.
          </p>
        </div>
      ),
    },
    {
      title: '1983',
      content: (
        <div>
          <h4 className="text-xl md:text-2xl font-serif text-slate-900 dark:text-white mb-2">
            A careful dental remodel
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            Dr. David and Dr. Scott Hume restored the home into a dental practice with deep respect for its architecture and neighborhood roots.
          </p>
        </div>
      ),
    },
    {
      title: '1998',
      content: (
        <div>
          <h4 className="text-xl md:text-2xl font-serif text-slate-900 dark:text-white mb-2">
            A new generation joins
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            Dr. Jonathan L. Hume joins the practice, bringing advanced scientific training and a patient-first philosophy grounded in conservative care.
          </p>
        </div>
      ),
    },
    {
      title: 'Today',
      content: (
        <div>
          <h4 className="text-xl md:text-2xl font-serif text-slate-900 dark:text-white mb-2">
            Your dental home on North Main
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            A stable, familiar team focused on right-sized dentistry, evidence-based treatment, and long-term oral health.
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
              Conservative, family-oriented care led by Dr. Jonathan L. Hume, D.D.S. You’ll feel known, listened to, and cared for.
            </p>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Integrity-first dentistry</h3>
                <p className="text-sm text-slate-600">
                  Clear diagnostics and right-sized plans.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Academic expertise</h3>
                <p className="text-sm text-slate-600">
                  ISU anatomy master’s + U of I doctorate.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">A stable, familiar team</h3>
                <p className="text-sm text-slate-600">
                  Familiar faces, year after year.
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
                  src="https://images.unsplash.com/photo-1606813909355-d3039ad8a2d0?q=80&w=1200&auto=format&fit=crop"
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
              subtitle="Historic roots, modern care, decades of trust."
              data={timelineData}
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Meet the team</h3>
            <ul className="mt-3 text-sm text-slate-600 space-y-2">
              <li>Dr. Jonathan Hume: McLean County Dental Society past president</li>
              <li>Sandra: 40+ years of chairside excellence</li>
              <li>Danyielle, Kerry, Lori: long-term patient care</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Conservative by design</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Preserve natural tooth structure. Durable, evidence-based restorations.
            </p>
            <div className="mt-3 text-sm text-slate-600">
              Independent distilled water systems for added hygiene.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
