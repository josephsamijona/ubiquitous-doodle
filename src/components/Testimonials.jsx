import React from 'react';
import { Quote, ShieldCheck, Timer, Languages } from 'lucide-react';

const testimonials = [
  {
    quote:
      'DBD I&T helped us support multilingual patients with clarity and compassion. Their response time has been outstanding.',
    name: 'Healthcare Operations Lead',
    org: 'Regional Medical Practice',
  },
  {
    quote:
      'Reliable, accurate, and professional. They have become a trusted language partner for our legal team.',
    name: 'Case Management Director',
    org: 'Legal Services Group',
  },
  {
    quote:
      'From onboarding to delivery, the process is smooth and dependable. We can always count on quality interpretation.',
    name: 'Program Coordinator',
    org: 'Community Services Network',
  },
];

const highlights = [
  {
    icon: Timer,
    title: 'Rapid Scheduling',
    detail: 'Quick matching for urgent and planned sessions.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidential by Design',
    detail: 'Professional standards and secure communication.',
  },
  {
    icon: Languages,
    title: 'Broad Language Coverage',
    detail: 'Support across high-demand spoken languages.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24 px-4 bg-transparent">
      <div className="container-fluid">
        <div className="max-w-4xl mb-12">
          <span className="eyebrow mb-4">Client Confidence</span>
          <h2 className="text-5xl md:text-6xl text-secondary-900 mb-4 leading-[0.94]">
            Trusted by teams where clear communication is critical
          </h2>
          <p className="text-base md:text-lg text-secondary-600 max-w-3xl leading-relaxed">
            We combine professional interpreters, reliable response times, and service consistency to help organizations communicate with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((item) => (
            <article key={item.name} className="pro-card p-7 h-full">
              <Quote className="w-5 h-5 text-primary-500 mb-4" />
              <p className="text-secondary-700 mb-6 leading-relaxed">"{item.quote}"</p>
              <div>
                <p className="text-secondary-900 text-[1.4rem] leading-none mb-1">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.1em] text-secondary-500">{item.org}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-shell !bg-white/90 p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-white/90 border border-secondary-200 p-5">
                  <div className="inline-flex p-2 rounded-full bg-primary-50 mb-3">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-3xl leading-none text-secondary-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
