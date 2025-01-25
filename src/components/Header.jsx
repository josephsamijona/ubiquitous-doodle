import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, MessageSquare, Phone, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    window.location.href = 'https://dbdiandt.up.railway.app/';
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-soft' 
          : 'bg-transparent backdrop-blur-sm bg-background-dark/5'
      }`}
    >
      <div className="container-fluid">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-primary-900' : 'text-text-light'
            }`}>
              DBD I&T
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 text-sm font-medium 
                    ${isScrolled 
                      ? 'text-neutral-700 hover:text-primary-600' 
                      : 'text-text-light hover:text-primary-200'
                    } transition-colors duration-200`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <button 
              onClick={handleLogin}
              className="flex items-center space-x-2 btn bg-primary-500 text-text-light 
                     hover:bg-primary-600 transition-colors duration-200"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-neutral-700 hover:text-primary-600'
                  : 'text-text-light hover:text-primary-200'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fade-in">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${
              isScrolled ? 'bg-white' : 'bg-background-dark/95 backdrop-blur-sm'
            }`}>
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base 
                      font-medium ${
                        isScrolled
                          ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                          : 'text-text-light hover:text-primary-200 hover:bg-background-dark/50'
                      } transition-colors duration-200`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <button 
                onClick={handleLogin}
                className="w-full mt-2 flex items-center justify-center space-x-2 
                       btn bg-primary-500 text-text-light hover:bg-primary-600 
                       transition-colors duration-200"
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