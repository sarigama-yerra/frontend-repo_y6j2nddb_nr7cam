import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">C</div>
            <span className="font-semibold text-slate-900">CampusClean Tech</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/services', 'Services')}
            {navItem('/bookings', 'Bookings')}
            {navItem('/gallery', 'Gallery')}
            {navItem('/about', 'About / Trust')}
            {navItem('/contact', 'Contact')}
          </nav>

          <a
            href="https://wa.me/<your-number>?text=Hi%20CampusClean%20%E2%80%94%20I%27d%20like%20a%20Laptop%20Deep%20Clean.%20My%20name%20is%20%5BYour%20Name%5D"
            className="hidden sm:inline-flex items-center bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Book via WhatsApp
          </a>

          <button className="sm:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="sm:hidden pb-3">
            <div className="flex flex-col gap-1">
              {navItem('/', 'Home')}
              {navItem('/services', 'Services')}
              {navItem('/bookings', 'Bookings')}
              {navItem('/gallery', 'Gallery')}
              {navItem('/about', 'About / Trust')}
              {navItem('/contact', 'Contact')}
              <a
                href="https://wa.me/<your-number>?text=Hi%20CampusClean%20%E2%80%94%20I%27d%20like%20a%20Laptop%20Deep%20Clean.%20My%20name%20is%20%5BYour%20Name%5D"
                className="mt-2 inline-flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
