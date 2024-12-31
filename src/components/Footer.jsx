// src/components/Footer.jsx 
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import logo from '../assets/images/logo.png';
import PropTypes from 'prop-types';

const FooterLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-brand-light/70 hover:text-brand-neon transition-colors duration-300"
  >
    {children}
  </a>
);

// Ajoutez les PropTypes pour FooterLink
FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-brand-light text-lg font-semibold">{title}</h3>
    <div className="space-y-2">
      {children}
    </div>
  </div>
);

// Corrigez les PropTypes pour FooterSection en retirant 'href'
FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-brand-dark to-brand-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img src={logo} alt="DBD I&T Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-brand-light/70">
              We are your voice - Professional interpretation services for all your needs.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-brand-neon/10 text-brand-neon hover:bg-brand-neon hover:text-brand-dark transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <FooterSection title="Company">
            <div className="grid gap-2">
              <Link to="/about" className="text-brand-light/70 hover:text-brand-neon transition-colors">
                About Us
              </Link>
              <Link to="/careers" className="text-brand-light/70 hover:text-brand-neon transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="text-brand-light/70 hover:text-brand-neon transition-colors">
                Blog
              </Link>
              <Link to="/press" className="text-brand-light/70 hover:text-brand-neon transition-colors">
                Press
              </Link>
            </div>
          </FooterSection>

          {/* Legal Links */}
          <FooterSection title="Legal">
            <div className="grid gap-2">
              <Link to="/privacy" className="text-brand-light/70 hover:text-brand-neon transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-brand-light/70 hover:text-brand-neon transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie" className="text-brand-light/70 hover:text-brand-neon transition-colors">
                Cookie Policy
              </Link>
              <Link to="/gdpr" className="text-brand-light/70 hover:text-brand-neon transition-colors">
                GDPR
              </Link>
            </div>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Us">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-brand-light/70">
                <Mail size={20} className="text-brand-neon" />
                <span>contact@dbdit.com</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-light/70">
                <Phone size={20} className="text-brand-neon" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-light/70">
                <MapPin size={20} className="text-brand-neon" />
                <span>Your Location, City, Country</span>
              </div>
            </div>
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-light/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brand-light/70 text-sm">
              © {currentYear} DBD I&T. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-brand-light/70">
              <FooterLink href="/privacy">Privacy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
              <FooterLink href="/sitemap">Sitemap</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
