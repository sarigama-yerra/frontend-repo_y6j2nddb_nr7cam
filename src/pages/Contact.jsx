import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Contact</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-xl p-5 bg-white">
            <h3 className="font-semibold text-blue-600 mb-2">WhatsApp</h3>
            <a href="https://wa.me/<your-number>" className="text-blue-600 hover:underline">Chat with us</a>
          </div>
          <div className="border border-slate-200 rounded-xl p-5 bg-white">
            <h3 className="font-semibold text-blue-600 mb-2">Social</h3>
            <ul className="text-slate-700 text-sm space-y-1">
              <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-600">TikTok</a></li>
              <li><a href="#" className="hover:text-blue-600">Twitter/X</a></li>
            </ul>
          </div>
          <div className="border border-slate-200 rounded-xl p-5 bg-white">
            <h3 className="font-semibold text-blue-600 mb-2">Hours</h3>
            <p className="text-slate-700 text-sm">Mon–Sat: 9:00–18:00<br/>Sun: Closed</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
