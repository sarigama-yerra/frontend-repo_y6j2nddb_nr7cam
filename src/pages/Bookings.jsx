import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Bookings() {
  const [form, setForm] = useState({
    full_name: '',
    whatsapp_number: '',
    student_id: '',
    device_type: 'Laptop',
    brand_model: '',
    service_requested: 'Laptop Deep',
    pickup_or_dropoff: 'Drop-off',
    preferred_time: '',
    notes: '',
    consent_photos_and_terms: false,
  })
  const [status, setStatus] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const payload = { ...form }
      if (payload.preferred_time) {
        // Convert to ISO string
        payload.preferred_time = new Date(payload.preferred_time).toISOString()
      } else {
        payload.preferred_time = null
      }
      const res = await fetch(`${BACKEND_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus(data.auto_reply)
      // Redirect to WhatsApp after brief delay
      setTimeout(() => {
        window.location.href = data.whatsapp_link
      }, 1200)
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Book a Cleaning</h1>
        <form onSubmit={onSubmit} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Full Name *</label>
              <input required name="full_name" value={form.full_name} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">WhatsApp Number *</label>
              <input required name="whatsapp_number" value={form.whatsapp_number} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Student ID (optional)</label>
              <input name="student_id" value={form.student_id} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Device Type</label>
              <select name="device_type" value={form.device_type} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2">
                <option>Laptop</option>
                <option>Phone</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Brand / Model</label>
              <input name="brand_model" value={form.brand_model} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Service Requested</label>
              <select name="service_requested" value={form.service_requested} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2">
                <option>Laptop Basic</option>
                <option>Laptop Deep</option>
                <option>Phone Basic</option>
                <option>Phone Deep</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Pickup or Drop-off</label>
              <select name="pickup_or_dropoff" value={form.pickup_or_dropoff} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2">
                <option>Drop-off</option>
                <option>Pickup</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Preferred Time</label>
              <input type="datetime-local" name="preferred_time" value={form.preferred_time} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Notes</label>
            <textarea name="notes" value={form.notes} onChange={onChange} className="w-full border border-slate-300 rounded-md px-3 py-2" rows={3} />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="consent_photos_and_terms" checked={form.consent_photos_and_terms} onChange={onChange} />
            I consent to intake photos and agree to terms.
          </label>

          <div className="flex items-center gap-3">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">Submit</button>
            {status && <p className="text-sm text-slate-600 max-w-md">{status}</p>}
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
