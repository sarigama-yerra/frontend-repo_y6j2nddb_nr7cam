import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Dashboard() {
  const [items, setItems] = useState([])
  const [filters, setFilters] = useState({ device_type: '', service_requested: '', priority: '' })

  const fetchData = async () => {
    const params = new URLSearchParams()
    if (filters.device_type) params.set('device_type', filters.device_type)
    if (filters.service_requested) params.set('service_requested', filters.service_requested)
    if (filters.priority !== '') params.set('priority', filters.priority)

    const res = await fetch(`${BACKEND_URL}/api/bookings?${params.toString()}`)
    const data = await res.json()
    setItems(data.items || [])
  }

  useEffect(() => { fetchData() }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setFilters((f) => ({ ...f, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Leads Dashboard</h1>
          <button onClick={fetchData} className="text-sm bg-blue-600 text-white px-3 py-2 rounded-md">Refresh</button>
        </div>

        <div className="grid sm:grid-cols-4 gap-3 mb-4">
          <select name="device_type" value={filters.device_type} onChange={onChange} className="border border-slate-300 rounded-md px-3 py-2">
            <option value="">All Devices</option>
            <option>Laptop</option>
            <option>Phone</option>
          </select>
          <select name="service_requested" value={filters.service_requested} onChange={onChange} className="border border-slate-300 rounded-md px-3 py-2">
            <option value="">All Services</option>
            <option>Laptop Basic</option>
            <option>Laptop Deep</option>
            <option>Phone Basic</option>
            <option>Phone Deep</option>
          </select>
          <select name="priority" value={filters.priority} onChange={onChange} className="border border-slate-300 rounded-md px-3 py-2">
            <option value="">All Priorities</option>
            <option value="true">Priority</option>
            <option value="false">Normal</option>
          </select>
          <button onClick={fetchData} className="border border-slate-300 rounded-md px-3 py-2">Apply Filters</button>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Device</th>
                <th className="text-left p-3">Service</th>
                <th className="text-left p-3">Priority</th>
                <th className="text-left p-3">When</th>
                <th className="text-left p-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it._id} className="border-t border-slate-100">
                  <td className="p-3">{it.full_name}</td>
                  <td className="p-3">{it.device_type} {it.brand_model ? `— ${it.brand_model}` : ''}</td>
                  <td className="p-3">{it.service_requested}</td>
                  <td className="p-3">{it.priority ? 'Yes' : 'No'}</td>
                  <td className="p-3">{it.preferred_time ? new Date(it.preferred_time).toLocaleString() : '-'}</td>
                  <td className="p-3 max-w-xs truncate" title={it.notes}>{it.notes || '-'}</td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td className="p-3 text-slate-500" colSpan={6}>No leads yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  )
}
