"use client"
import { useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/PageImg/logo.jpg"
              alt="Maha Pranaalika Logo"
              className="h-16 w-16 rounded-full border border-white/20 backdrop-blur-sm bg-white/20 object-fit mr-3"
            />
            <span className="text-white font-semibold text-2xl tracking-tight">MAHA PRANAALIKA</span>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <NavLink to="home">Home</NavLink>
            <NavLink to="aboutus">About Us</NavLink>
            <NavLink to="sectors">Sectors</NavLink>
            <NavLink to="founder">Founder</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/10">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="aboutus" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink to="sectors" onClick={() => setIsMenuOpen(false)}>Sectors</MobileNavLink>
              <MobileNavLink to="founder" onClick={() => setIsMenuOpen(false)}>Founder</MobileNavLink>
              <MobileNavLink to="contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Desktop NavLink
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="relative text-gray-400 text-lg font-medium cursor-pointer transition-all group"
  >
    {children}
    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </Link>
)

// Mobile NavLink
const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    onClick={onClick}
    className="text-white text-base font-medium hover:text-white   transition-colors"
  >
    {children}
  </Link>
)
