import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-10 pb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">CampusClean Tech — Laptop & Phone Cleaning</h1>
              <p className="text-slate-600 mb-5">Fast, professional cleaning for students. Same-day campus pickup available. Book in under a minute via WhatsApp.</p>
              <div className="flex gap-3">
                <a href="https://wa.me/<your-number>?text=Hi%20CampusClean%20%E2%80%94%20I%27d%20like%20a%20Laptop%20Deep%20Clean.%20My%20name%20is%20%5BYour%20Name%5D" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">Book via WhatsApp</a>
                <a href="/services" className="inline-flex items-center border border-slate-300 text-slate-700 px-4 py-2 rounded-md font-medium hover:border-slate-400">View Services</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 text-sm">Laptop Deep Clean: fans, vents, thermal paste check, screen polish.</div>
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 text-sm">Phone Deep Clean: ports, speakers, camera polish, sanitize.</div>
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 text-sm">Student-friendly pricing. ID discounts.</div>
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 text-sm">Pickup or drop-off around campus.</div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold mb-2 text-blue-600">Same-Day Slots</h3>
              <p className="text-slate-600 text-sm">Quick turnaround with optional pickup windows between classes.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold mb-2 text-blue-600">Safe & Professional</h3>
              <p className="text-slate-600 text-sm">Intake photos, antistatic tools, and careful disassembly when needed.</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold mb-2 text-blue-600">Student Pricing</h3>
              <p className="text-slate-600 text-sm">Fair rates with ID discounts and mobile money on pickup.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-4">What students say</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Amina — CS', text: 'They cleaned my laptop fans and it runs quiet now. Super fast.' },
              { name: 'Leo — Engineering', text: 'Phone speakers sounded new after their deep clean. Great service.' },
              { name: 'Priya — Design', text: 'They picked up from the library within 20 minutes. Easy booking!' },
            ].map((t, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-4 bg-white text-sm text-slate-700">
                <p className="mb-2">“{t.text}”</p>
                <p className="text-slate-500">{t.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
