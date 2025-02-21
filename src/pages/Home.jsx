// src/pages/Home.jsx
import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Services Preview Section */}
      <section className="relative z-10 -mt-20">
        <div className="container mx-auto px-4">
          <div className="bg-brand-secondary/30 backdrop-blur-lg rounded-xl p-8 shadow-lg">
            <Services />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        <WhyChooseUs />
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-gradient-to-b from-brand-secondary/20 to-transparent">
        <About />
      </section>

      {/* Call To Action Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-brand-neon/10 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-brand-light mb-6">
              Ready to Break Language Barriers?
            </h2>
            <p className="text-xl text-brand-light/80 mb-8 max-w-2xl mx-auto">
              Join our network of professional interpreters or get started with our services today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://dbdint.up.railway.app/interpreter/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Started
              </a>
              <a
                href="https://dbdint.up.railway.app/interpreter/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Join Our Network
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;