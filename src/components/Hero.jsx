import React from 'react';
import backgroundImage from '../assets/images/conference-interpreting.jpg';

const Hero = () => {
  const handleQuote = (e) => {
    e.preventDefault();
    window.location.href = 'https://dbdint.up.railway.app/home';
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    window.location.href = 'https://dbdint.up.railway.app/register/choose/';
  };

  return (
    <section className="relative min-h-screen-80 flex items-center pt-16">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage}
          alt="Professional interpretation services"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 to-background-dark/70" />
      </div>

      {/* Contenu principal */}
      <div className="container-fluid relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            <span className="block mb-2">DBD I&T</span>
            <span className="block text-primary-300">
              We are your voice!
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-light/90 mb-8">
            Breaking language barriers with professional interpretation services,
            anytime, anywhere
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={handleQuote}
              className="btn bg-primary-500 text-text-light hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </button>
            <button 
              onClick={handleSignUp}
              className="btn bg-text-light text-primary-700 hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join Our Network
            </button>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block cursor-pointer"
             onClick={() => window.scrollTo({
               top: window.innerHeight,
               behavior: 'smooth'
             })}>
          <div className="w-8 h-12 rounded-full border-2 border-text-light/50 hover:border-text-light transition-colors duration-200 flex justify-center pt-2">
            <div className="w-1 h-3 bg-text-light/50 hover:bg-text-light rounded-full transition-colors duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;