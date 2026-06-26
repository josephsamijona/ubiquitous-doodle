import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, MessageSquare, Phone, LogIn } from 'lucide-react';
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
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about-us', icon: Users },
    { name: 'Services', href: '/services', icon: MessageSquare },
    { name: 'Contact', href: '/contact', icon: Phone },
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
          ? 'bg-background-dark shadow-soft' 
          : 'bg-background-dark/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-fluid">
        <nav className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="DBD I&T Logo" 
                className="h-24 md:h-24 w-auto"
              />

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                    isActivePath(item.href)
                      ? 'text-primary-300'
                      : 'text-text-light/70 hover:text-primary-300'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <button 
              onClick={handleLogin}
              className="flex items-center space-x-2 btn bg-primary-700/30 hover:bg-primary-500 
                     text-text-light transition-colors duration-300"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors duration-200 
                text-text-light/70 hover:text-primary-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background-dark">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActivePath(item.href)
                        ? 'text-primary-300 bg-primary-700/20'
                        : 'text-text-light/70 hover:text-primary-300'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <button 
                onClick={handleLogin}
                className="w-full mt-2 flex items-center justify-center space-x-2 
                       btn bg-primary-700/30 hover:bg-primary-500 
                       text-text-light transition-colors duration-300"
              >
                <LogIn size={20} />
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
