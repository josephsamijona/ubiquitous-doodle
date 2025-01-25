import React from 'react';
import { Users, Target, Shield, Globe, Award, MessageSquare } from 'lucide-react';

const AboutUs = () => {
  const timeline = [
    {
      year: '2018',
      title: 'Company Foundation',
      description: 'DBD I&T was founded with a vision to break language barriers.'
    },
    {
      year: '2019',
      title: 'Regional Expansion',
      description: 'Extended services across Massachusetts and neighboring states.'
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Launched our digital platform for seamless service delivery.'
    },
    {
      year: '2023',
      title: 'National Recognition',
      description: 'Recognized as a leading interpretation service provider.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest standards of professional ethics.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every interaction.'
    },
    {
      icon: Users,
      title: 'Cultural Sensitivity',
      description: 'Embracing and respecting cultural diversity.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting communities across language barriers.'
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'Upholding the highest industry standards.'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Ensuring clear and effective dialogue.'
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
            About DBD I&T
          </h1>
          <p className="text-xl text-primary-200 max-w-3xl animate-slide-up">
            Breaking language barriers and connecting communities through professional interpretation services since 2018.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-700">Our Mission</h2>
            <p className="text-lg text-secondary-600 leading-relaxed">
              At DBD I&T, we are dedicated to providing exceptional interpretation services that bridge 
              communication gaps and foster understanding between communities. Our commitment to excellence 
              and cultural sensitivity sets us apart as a trusted partner in professional interpretation services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-secondary-50">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-700">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} 
                     className="bg-white p-6 rounded-xl shadow-soft hover:shadow-lg 
                              transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Icon size={24} className="text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-700">{value.title}</h3>
                  </div>
                  <p className="text-secondary-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-700">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} 
                   className="flex mb-8 last:mb-0 hover:bg-secondary-50 p-4 rounded-lg 
                            transition-colors duration-300">
                <div className="w-24 flex-shrink-0">
                  <span className="text-xl font-bold text-primary-500">{item.year}</span>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-primary-200">
                  <h3 className="text-xl font-bold mb-2 text-primary-700">{item.title}</h3>
                  <p className="text-secondary-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-background-dark text-text-light py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] -right-40 -bottom-40 bg-primary-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>

        <div className="container-fluid text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg mb-8 text-primary-200">
            Join us in our mission to break language barriers and connect communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://dbdiandt.up.railway.app/home"
              className="btn bg-primary-500 text-text-light hover:bg-primary-600
                     transform hover:scale-105 transition-all duration-200
                     shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </a>
            <a 
              href="https://dbdanit.co/contact"
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

export default AboutUs;