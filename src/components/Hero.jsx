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
    <section className="relative min-h-screen-80 flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Professional interpretation services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/65 to-primary-600/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-transparent to-primary-900/20" />
      </div>

      <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-primary-400/25 blur-3xl" />
      <div className="absolute bottom-12 -right-20 w-96 h-96 rounded-full bg-primary-700/35 blur-3xl" />

      <div className="absolute top-24 right-8 z-10 hidden lg:block">
        <img
          src={logo}
          alt="DBD I&T Logo"
          className="h-28 xl:h-36 w-auto opacity-95"
        />
      </div>

      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 items-end">
          <div className="lg:col-span-3 max-w-3xl">
            <span className="eyebrow !bg-white/12 !text-white border border-white/30 mb-6">
              Professional Interpretation Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-light mb-6 leading-tight">
              Clear communication for every critical conversation.
            </h1>

            <p className="text-lg md:text-xl text-text-light/90 mb-10 max-w-2xl">
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

            <ul className="grid sm:grid-cols-3 gap-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="text-sm text-white/90 bg-white/10 border border-white/20 rounded-lg px-4 py-3 backdrop-blur-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:justify-self-end w-full max-w-md">
            <div className="section-shell !bg-white/95 p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 mb-3">Why Clients Choose DBD I&T</p>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Reliable interpretation when precision matters most.</h2>
              <div className="space-y-4 text-secondary-700">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-primary-500" />
                  <p>Fast response for urgent and scheduled sessions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-primary-500" />
                  <p>Confidential and professional service standards.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-primary-500" />
                  <p>Support for diverse industries and language needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block cursor-pointer"
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })}
        >
          <div className="w-8 h-12 rounded-full border-2 border-text-light/60 hover:border-text-light transition-colors duration-200 flex justify-center pt-2">
            <div className="w-1 h-3 bg-text-light/70 hover:bg-text-light rounded-full transition-colors duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
