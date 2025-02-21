import React from 'react';
import { CheckCircle, Briefcase, GraduationCap, Globe, Clock, Users } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work on your own terms with flexible scheduling options.'
    },
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Access to continuous learning and certification opportunities.'
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Join a network of professional interpreters and industry experts.'
    },
    {
      icon: Globe,
      title: 'Remote Opportunities',
      description: 'Work from anywhere with our remote interpretation options.'
    }
  ];

  const positions = [
    {
      title: 'Medical Interpreter',
      type: 'Full-time / Part-time',
      location: 'Massachusetts',
      requirements: [
        'Professional certification in medical interpretation',
        '2+ years of experience in healthcare settings',
        'Fluency in English and at least one other language',
        'Strong cultural competency'
      ]
    },
    {
      title: 'Legal Interpreter',
      type: 'Full-time / Contract',
      location: 'Massachusetts',
      requirements: [
        'Legal interpretation certification',
        'Experience in court proceedings',
        'Knowledge of legal terminology',
        'Strong attention to detail'
      ]
    },
    {
      title: 'Community Interpreter',
      type: 'Part-time / Flexible',
      location: 'Remote / On-site',
      requirements: [
        'Community interpretation certification',
        'Experience in social services',
        'Strong communication skills',
        'Cultural awareness'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-background-dark py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] -left-40 -top-40 bg-primary-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute w-[400px] h-[400px] right-20 top-20 bg-primary-400/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>

        <div className="container-fluid relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-light animate-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl text-primary-200 max-w-3xl animate-slide-up">
            Build your career with DBD I&T and help us break language barriers 
            while making a meaningful impact in our communities.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-700">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} 
                     className="text-center p-6 bg-white rounded-xl shadow-soft
                              hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary-700">{benefit.title}</h3>
                  <p className="text-secondary-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-secondary-50">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-700">Open Positions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.map((position) => (
              <div 
                key={position.title} 
                className="bg-white rounded-xl shadow-soft p-6 hover:shadow-lg 
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary-700">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-secondary-600">
                      <span className="flex items-center">
                        <Briefcase size={16} className="mr-2 text-primary-500" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <Globe size={16} className="mr-2 text-primary-500" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <a 
                    href="https://dbdint.up.railway.app/interpreter/register/"
                    className="btn bg-primary-500 text-text-light hover:bg-primary-600
                           transform hover:scale-105 transition-all duration-200
                           shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-primary-700">Requirements:</p>
                  <ul className="space-y-2">
                    {position.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-primary-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-secondary-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="relative bg-background-dark text-text-light py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] -right-40 -bottom-40 bg-primary-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>

        <div className="container-fluid text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg mb-8 text-primary-200 max-w-2xl mx-auto">
            Start your journey with DBD I&T today and be part of a team dedicated 
            to breaking language barriers and connecting communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://dbdint.up.railway.app/interpreter/register/"
              className="btn bg-primary-500 text-text-light hover:bg-primary-600
                     transform hover:scale-105 transition-all duration-200
                     shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
            <a 
              href="https://dbdint.up.railway.app/contact/"
              className="btn bg-text-light text-primary-700 hover:bg-primary-50
                     transform hover:scale-105 transition-all duration-200
                     shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;