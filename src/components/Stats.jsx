import React from 'react';
import { Clock, Check, Languages, Star } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, description }) => (
  <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 text-center h-full">
    <div className="inline-flex p-3 bg-white/15 rounded-full mb-4">
      <Icon size={24} className="text-primary-200" />
    </div>
    <div className="font-extrabold text-3xl md:text-4xl text-white mb-2">
      {value}
    </div>
    <h3 className="font-semibold text-lg text-white mb-2">{label}</h3>
    <p className="text-sm text-white/75">{description}</p>
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
    <section className="py-16 px-4">
      <div className="container-fluid">
        <div className="section-shell !bg-primary-900 overflow-hidden px-6 py-12 md:px-10 md:py-14">
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <div className="absolute -top-24 -left-12 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-4 w-72 h-72 bg-primary-700/35 rounded-full blur-3xl" />
          </div>

          <div className="text-center mb-12 relative z-10">
            <span className="eyebrow !bg-white/12 !text-primary-100 border border-white/20 mb-4">Performance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Delivering dependable interpretation outcomes through experienced professionals and responsive support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-12 text-center relative z-10">
            <p className="text-lg text-white/85 mb-6">
              Ready to experience professional interpretation services?
            </p>
            <button
              onClick={() => window.location.href = 'https://dbdint.up.railway.app/client/register/'}
              className="btn bg-white text-primary-700 hover:bg-primary-50"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;