import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-2xl font-bold">About / Trust</h1>
        <p className="text-slate-700">CampusClean Tech is a student-focused cleaning service for laptops and phones. We operate on-campus with quick pickups between classes and careful, professional cleaning standards.</p>
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 className="font-semibold text-blue-600 mb-2">Intake Photography</h2>
          <p className="text-slate-700 text-sm">On intake, we photograph the device to document condition, accessories, and serials. This ensures transparency and peace of mind.</p>
        </div>
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 className="font-semibold text-blue-600 mb-2">Safety Measures</h2>
          <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
            <li>ESD-safe tools and mats</li>
            <li>Non-abrasive cleaners for screens and lenses</li>
            <li>Careful disassembly for deep clean when required</li>
            <li>Secure storage during service</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
