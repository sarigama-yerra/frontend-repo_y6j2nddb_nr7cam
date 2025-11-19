import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Placeholder({ label }) {
  return (
    <div className="aspect-video rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 text-sm">
      {label}
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Gallery</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Placeholder label="Laptop — Before" />
          <Placeholder label="Laptop — After" />
          <Placeholder label="Laptop — Before" />
          <Placeholder label="Phone — Before" />
          <Placeholder label="Phone — After" />
          <Placeholder label="Phone — After" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
