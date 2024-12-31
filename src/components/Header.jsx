// src/components/Header.jsx
import { Link } from 'react-router-dom'
import { Home, Info, Phone, Briefcase } from 'lucide-react'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className="bg-brand-dark py-4 px-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="DBD I&T Logo" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link flex items-center gap-2">
            <Home size={20} />
            <span>HOME</span>
          </Link>
          
          <Link to="/about" className="nav-link flex items-center gap-2">
            <Info size={20} />
            <span>ABOUT US</span>
          </Link>
          
          <Link to="/services" className="nav-link flex items-center gap-2">
            <Briefcase size={20} />
            <span>SERVICES</span>
          </Link>
          
          <Link to="/contact" className="nav-link flex items-center gap-2">
            <Phone size={20} />
            <span>CONTACT US</span>
          </Link>

          <a 
            href="https://dbd.co/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Login
          </a>
        </div>

        {/* Mobile menu button - to be implemented */}
        <button className="md:hidden">
          <span className="sr-only">Open menu</span>
          {/* Menu icon */}
        </button>
      </nav>
    </header>
  )
}

export default Header