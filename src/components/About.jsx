import React from 'react';
import { CheckCircle, Award, Lightbulb, Heart } from 'lucide-react';
import teamImage from '../assets/images/values-image.jpg';
import valuesImage from '../assets/images/values.jpg';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence in Communication",
      description: "Delivering precise and professional interpretation services with unmatched quality."
    },
    {
      icon: Heart,
      title: "Cultural Sensitivity",
      description: "Understanding and respecting cultural nuances in every interaction."
    },
    {
      icon: CheckCircle,
      title: "Professional Integrity",
      description: "Maintaining the highest standards of confidentiality and ethical conduct."
    },
    {
      icon: Lightbulb,
      title: "Innovation in Service",
      description: "Embracing modern solutions while maintaining human connection."
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-transparent">
      <div className="container-fluid">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-secondary-200">
              <img
                src={teamImage}
                alt="Our diverse team of interpreters"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700/30 via-primary-700/5 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary-100 rounded-full -z-10" />
          </div>

          <div className="text-left">
            <span className="eyebrow mb-4">About DBD I&T</span>
            <h2 className="text-5xl md:text-6xl text-secondary-900 mb-6 leading-[0.95]">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-secondary-600 mb-6 leading-relaxed">
              We empower organizations and communities through precise, human-centered interpretation services that build trust and understanding.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              From healthcare and legal settings to business and education, our goal is to help every message be communicated clearly, respectfully, and confidently.
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden mb-20 section-shell">
          <img
            src={valuesImage}
            alt="Global communication"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative bg-white/90 backdrop-blur-sm px-8 py-16">
            <div className="text-center mb-10">
              <h3 className="text-5xl md:text-6xl text-secondary-900 mb-3 leading-[0.95]">Our Core Values</h3>
              <p className="text-secondary-600 max-w-2xl mx-auto">Professional standards and compassionate communication are at the center of every interaction we support.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="pro-card flex flex-col items-center text-center p-6">
                    <div className="p-3 bg-primary-100 rounded-full mb-4">
                      <Icon size={24} className="text-primary-600" />
                    </div>
                    <h3 className="text-[1.8rem] leading-none text-secondary-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-primary-900/10">
            <h3 className="text-5xl text-secondary-900 mb-8 text-center leading-none">
              Our Approach
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-secondary-700">
                      Rigorous interpreter selection and ongoing professional development
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-secondary-700">
                      Comprehensive quality assurance protocols
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-secondary-700">
                      Advanced technological solutions for seamless service delivery
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-secondary-700">
                      Dedicated support team available 24/7
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;