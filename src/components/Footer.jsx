export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center sm:text-left">
        <div className="grid sm:grid-cols-2 gap-4 items-center">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} CampusClean Tech. All rights reserved.</p>
          <div className="flex justify-center sm:justify-end gap-4 text-sm text-slate-600">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <a href="/bookings" className="hover:text-blue-600">Bookings</a>
            <a href="/gallery" className="hover:text-blue-600">Gallery</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
