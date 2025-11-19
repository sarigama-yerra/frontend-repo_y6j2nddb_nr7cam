import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    title: 'Laptop Basic',
    price: '$25',
    features: ['Exterior clean', 'Screen polish', 'Keyboard dust'],
  },
  {
    title: 'Laptop Deep Clean',
    price: '$55',
    features: ['Basic + fan/vents', 'Thermal check', 'Port cleaning'],
  },
  {
    title: 'Phone Basic',
    price: '$15',
    features: ['Exterior clean', 'Screen polish', 'Case clean'],
  },
  {
    title: 'Phone Deep Clean',
    price: '$35',
    features: ['Basic + port clean', 'Speaker/camera polish', 'Sanitize'],
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Services</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="border border-slate-200 rounded-xl p-5 bg-white">
              <h3 className="font-semibold text-blue-600">{s.title}</h3>
              <p className="text-slate-700 text-sm mb-3">{s.price}</p>
              <ul className="text-sm text-slate-600 space-y-1">
                {s.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
