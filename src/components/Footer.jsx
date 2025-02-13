import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' },
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'On-Site Interpretation', href: '/services#onsite' },
        { name: 'Medical Interpretation', href: '/services#medical' },
        { name: 'Legal Interpretation', href: '/services#legal' },
        { name: 'Business Interpretation', href: '/services#business' },
      ]
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-background-dark text-text-light relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 z-0">
        {/* Cercles flous similaires au Hero */}
        <div className="absolute w-[600px] h-[600px] -left-40 -bottom-40 bg-primary-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute w-[400px] h-[400px] right-20 top-20 bg-primary-400/10 rounded-full blur-3xl animate-float-slow" />
        
        {/* Motif de grille */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      {/* Main Footer Content */}
      <div className="container-fluid py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">DBD I&T</h2>
              <p className="text-text-light/80">
                We are your voice - Professional interpretation services for all your needs.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-full bg-primary-700/30 hover:bg-primary-500 
                             transition-colors duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="lg:col-span-1">
              <h3 className="font-semibold text-lg mb-4 text-primary-200">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-light/70 hover:text-primary-300 
                               transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-700/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-text-light/70">
            <a href="mailto:dbdiandt@gmail.com" className="hover:text-primary-300">
            dbdiandt@gmail.com
            </a>
            <a href="tel:+1234567890" className="hover:text-primary-300">
              +1 774 5080492

            </a>
            <div>500 GROSSMAN Drive #1064
            Braintree, MA 02184</div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-background-dark/95 border-t border-primary-700/20 py-4 relative z-10">
        <div className="container-fluid text-center text-text-light/60 text-sm">
          <p>© {currentYear} DBD I&T. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;