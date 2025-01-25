import React from 'react';

const Hero = () => {
  const handleQuote = (e) => {
    e.preventDefault();
    window.location.href = 'https://dbdiandt.up.railway.app/home';
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    window.location.href = 'https://dbdiandt.up.railway.app/register/choose/';
  };

  return (
    <section className="relative min-h-screen-80 flex items-center pt-16 overflow-hidden">
      {/* Background animé */}
      <div className="absolute inset-0 z-0 bg-background-dark">
        {/* Cercles animés */}
        <div className="absolute w-[800px] h-[800px] -left-40 -top-40 bg-primary-600/20 rounded-full 
                       blur-3xl animate-float" />
        <div className="absolute w-[600px] h-[600px] -right-20 top-40 bg-primary-400/20 rounded-full 
                       blur-3xl animate-float-slow" />
        <div className="absolute w-[500px] h-[500px] left-1/4 bottom-0 bg-primary-500/20 rounded-full 
                       blur-3xl animate-float" />
        
        {/* Motif de grille */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] bg-[length:30px_30px]" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark/50 via-background-dark/90 to-background-dark" />
      </div>

      {/* Contenu */}
      <div className="container-fluid relative z-10">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            <span className="block mb-2 animate-fade-in">DBD I&T</span>
            <span className="block text-primary-300 animate-slide-in-right delay-200">
              We are your voice!
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-light/90 mb-8 animate-fade-in delay-300">
            Breaking language barriers with professional interpretation services,
            anytime, anywhere
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-500">
            <button 
              onClick={handleQuote}
              className="btn bg-primary-500 text-text-light hover:bg-primary-600
                       transform hover:scale-105 transition-all duration-200
                       shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-primary-400 transform -translate-x-full 
                           group-hover:translate-x-0 transition-transform duration-300" />
            </button>
            <button 
              onClick={handleSignUp}
              className="btn bg-text-light text-primary-700 hover:bg-primary-50
                       transform hover:scale-105 transition-all duration-200
                       shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Join Our Network</span>
              <div className="absolute inset-0 bg-primary-100 transform -translate-x-full 
                           group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                       animate-bounce hidden md:block cursor-pointer group"
             onClick={() => window.scrollTo({
               top: window.innerHeight,
               behavior: 'smooth'
             })}
        >
          <div className="w-8 h-12 rounded-full border-2 border-text-light/50 
                         group-hover:border-text-light transition-colors duration-200 
                         flex justify-center pt-2">
            <div className="w-1 h-3 bg-text-light/50 group-hover:bg-text-light 
                          rounded-full transition-colors duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;