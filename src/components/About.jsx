import React from 'react';
import { CheckCircle, Award, Lightbulb, Heart } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="container-fluid">
        {/* Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Empowering global communication through professional interpretation services. 
            We bridge languages and connect worlds, ensuring every voice is heard 
            and understood with clarity and precision.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="flex flex-col items-center text-center p-6">
                <div className="p-3 bg-primary-100 rounded-full mb-4">
                  <Icon size={24} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Approach */}
        <div className="mt-20">
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Our Approach
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      Rigorous interpreter selection and ongoing professional development
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      Comprehensive quality assurance protocols
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
                      Advanced technological solutions for seamless service delivery
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">
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