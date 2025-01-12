import React from 'react';
import { Clock, Check, Languages, Star } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, description }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-soft">
    <div className="p-3 bg-primary-100 rounded-full mb-4">
      <Icon size={24} className="text-primary-600" />
    </div>
    <div className="font-bold text-3xl md:text-4xl text-primary-600 mb-2">
      {value}
    </div>
    <h3 className="font-semibold text-lg text-neutral-900 mb-2">{label}</h3>
    <p className="text-sm text-neutral-600">{description}</p>
  </div>
);

const Stats = () => {
  const stats = [
    {
      icon: Languages,
      value: "25+",
      label: "Languages Covered",
      description: "Supporting communication across diverse languages and cultures"
    },
    {
      icon: Clock,
      value: "< 15min",
      label: "Response Time",
      description: "Quick connection to professional interpreters"
    },
    {
      icon: Check,
      value: "100%",
      label: "Certified Interpreters",
      description: "Professional and certified language experts"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Service Rating",
      description: "Consistently delivering excellence in interpretation"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-fluid">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Delivering excellence in interpretation services through dedication and expertise
          </p>
        </div>

        {/* Grille de statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-700 mb-6">
            Ready to experience professional interpretation services?
          </p>
          <button 
            onClick={() => window.location.href = 'https://dbdanit.co/quote'}
            className="btn bg-primary-600 text-white hover:bg-primary-700 
                     transform hover:scale-105 transition-all duration-200
                     shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;