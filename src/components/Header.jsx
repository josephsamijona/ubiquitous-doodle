import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import logo from '../assets/images/logo.png'; // Import du logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.location.href = 'https://dbdintportal.up.railway.app/';
  };

  const isActivePath = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-primary-900/12 shadow-[0_14px_28px_rgba(10,38,89,0.08)]' 
          : 'bg-primary-900/72 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="container-fluid">
        <nav className="flex items-center justify-between h-20 md:h-[5.5rem]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="DBD I&T Logo" 
                className="h-16 md:h-[4.5rem] w-auto"
              />

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navigation.map((item) => {
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-[0.78rem] uppercase tracking-[0.14em] font-semibold transition-colors duration-200 ${
                    isActivePath(item.href)
                      ? (isScrolled ? 'text-primary-700' : 'text-white')
                      : (isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white/90 hover:text-white')
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <button 
              onClick={handleLogin}
              className={`flex items-center space-x-2 border px-5 py-2.5 rounded-full text-[0.74rem] uppercase tracking-[0.12em] font-semibold transition-colors duration-300 ${
                isScrolled
                  ? 'border-primary-700/30 text-primary-700 hover:bg-primary-50'
                  : 'border-white/70 text-white hover:bg-white/16'
              }`}
            >
              <LogIn size={15} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? 'text-secondary-700 hover:text-primary-700'
                  : 'text-text-light/80 hover:text-primary-100'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fade-in">
            <div className="px-3 pt-2 pb-4 space-y-1 bg-primary-900/95 backdrop-blur-md border-t border-white/10">
              {navigation.map((item) => {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-3 py-2.5 rounded-md text-sm uppercase tracking-[0.1em] font-semibold transition-colors duration-200 ${
                      isActivePath(item.href)
                        ? 'text-white bg-white/12'
                        : 'text-text-light/75 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <button 
                onClick={handleLogin}
                className="w-full mt-3 flex items-center justify-center space-x-2 border border-white/45 rounded-full py-2.5 text-text-light uppercase tracking-[0.12em] text-xs font-semibold hover:bg-white/12 transition-colors duration-300"
              >
                <LogIn size={16} />
                <span>Login</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
