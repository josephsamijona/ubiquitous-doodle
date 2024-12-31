// src/components/Hero.jsx
import { ArrowRight } from 'lucide-react'
import backgroundImage from '../assets/images/conference-bg.jpg'

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay with blur effect */}
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Company Name with Neon Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text slide-in">
            DBD I&T
          </h1>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl text-brand-light mb-6 fade-in">
            &quot;We are your voice !&quot;
          </p>

          {/* Brief Introduction */}
          <p className="text-xl text-brand-light/90 mb-12 slide-in">
            Breaking language barriers with professional interpretation services,
            anytime, anywhere
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://dbd.co/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center gap-2 min-w-[200px] justify-center"
            >
              Get a Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <a
              href="https://dbd.co/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group flex items-center gap-2 min-w-[200px] justify-center"
            >
              Join Our Network
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero