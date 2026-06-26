import React from 'react';
import backgroundImage from '../assets/images/conference-interpreting.jpg';
import logo from '../assets/images/logo.png';

const Hero = () => {
  const handleQuote = (e) => {
    e.preventDefault();
    window.location.href = 'https://dbdint.up.railway.app/home';
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    window.location.href = 'https://dbdintportal.up.railway.app/interpreter/register/';
  };

  const trustPoints = ['Medical & legal accuracy', '24/7 interpreter access', 'Certified professionals'];

  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Professional interpretation services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/94 via-primary-900/72 to-primary-700/46" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_8%,rgba(255,255,255,0.2),transparent_44%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/88 via-primary-900/28 to-primary-900/16" />
      </div>

      <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-primary-200/20 blur-3xl" />
      <div className="absolute bottom-8 right-2 md:right-10 w-[22rem] h-[22rem] rounded-full bg-primary-700/30 blur-3xl" />

      <div className="absolute top-24 right-8 z-10 hidden lg:block">
        <img
          src={logo}
          alt="DBD I&T Logo"
          className="h-24 xl:h-32 w-auto opacity-95"
        />
      </div>

      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 max-w-4xl">
            <p className="hero-kicker text-white/80 mb-6">Professional Interpretation Services</p>

            <h1 className="hero-title text-[3rem] sm:text-[4rem] lg:text-[5.2rem] xl:text-[5.8rem] text-text-light mb-7">
              Clear communication for every critical conversation.
            </h1>

            <p className="text-lg md:text-[1.15rem] text-text-light/88 mb-10 max-w-2xl leading-relaxed">
              DBD I&T helps healthcare teams, legal professionals, and organizations communicate with confidence through reliable, culturally informed interpretation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleQuote}
                className="btn btn-primary"
              >
                Request a Quote
              </button>
              <button
                onClick={handleSignUp}
                className="btn btn-outline"
              >
                Join Our Network
              </button>
            </div>

            <div className="soft-divider mb-5 max-w-2xl" />

            <ul className="grid sm:grid-cols-3 gap-3 max-w-2xl">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="text-[0.78rem] uppercase tracking-[0.09em] text-white/90 bg-white/10 border border-white/25 rounded-full px-4 py-3 backdrop-blur-sm text-center"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end w-full max-w-md">
            <div className="section-shell !bg-white/92 p-6 md:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-700 mb-3">Why Clients Choose DBD I&T</p>
              <h2 className="text-4xl leading-[0.95] text-secondary-900 mb-4">Reliable interpretation when precision matters most.</h2>
              <div className="space-y-4 text-secondary-700">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary-500" />
                  <p>Fast response for urgent and scheduled sessions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary-500" />
                  <p>Confidential and professional service standards.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary-500" />
                  <p>Support for diverse industries and language needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block cursor-pointer"
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })}
        >
          <div className="w-8 h-12 rounded-full border border-text-light/50 hover:border-text-light transition-colors duration-200 flex justify-center pt-2">
            <div className="w-[1px] h-3 bg-text-light/70 hover:bg-text-light rounded-full transition-colors duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
