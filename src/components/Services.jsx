import React from 'react';
import { Stethoscope, Building2, GraduationCap, Scale, Globe, Users } from 'lucide-react';
import medicalImg from '../assets/images/medical.jpg';
import legalImg from '../assets/images/legal.jpg';
import businessImg from '../assets/images/business.jpg';
import educationImg from '../assets/images/education.jpg';
import communityImg from '../assets/images/community.jpg';
import eventsImg from '../assets/images/events.jpg';

const ServiceCard = ({ title, description, icon: Icon, features, image }) => (
  <article className="pro-card group overflow-hidden h-full flex flex-col">
    <div className="relative h-44 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/68" />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h3 className="text-[2rem] leading-none text-secondary-900">{title}</h3>
        <div className="p-2.5 bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors duration-300">
          <Icon size={20} className="text-primary-600" />
        </div>
      </div>

      <p className="text-secondary-600 mb-4 text-sm leading-relaxed">{description}</p>

      <ul className="space-y-2 mt-auto border-t border-primary-900/10 pt-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-xs uppercase tracking-[0.08em] text-secondary-700">
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const Services = () => {
  const services = [
    {
      title: 'Medical Interpretation',
      description: 'Professional medical interpretation ensuring accurate communication in healthcare settings.',
      icon: Stethoscope,
      image: medicalImg,
      features: [
        'Emergency room support',
        'Patient consultations',
        'Mental health sessions',
        'Medical procedures',
      ]
    },
    {
      title: 'Legal Interpretation',
      description: 'Precise legal interpretation services for courts, law firms, and legal proceedings.',
      icon: Scale,
      image: legalImg,
      features: [
        'Court hearings',
        'Depositions',
        'Legal consultations',
        'Document review sessions',
      ]
    },
    {
      title: 'Business Interpretation',
      description: 'Professional interpretation for corporate meetings and business events.',
      icon: Building2,
      image: businessImg,
      features: [
        'Board meetings',
        'Negotiations',
        'Training sessions',
        'International conferences',
      ]
    },
    {
      title: 'Educational Interpretation',
      description: 'Supporting communication in educational settings.',
      icon: GraduationCap,
      image: educationImg,
      features: [
        'Parent-teacher meetings',
        'Special education services',
        'Academic conferences',
        'Student counseling',
      ]
    },
    {
      title: 'Community Interpretation',
      description: 'Breaking barriers in community settings and social services.',
      icon: Users,
      image: communityImg,
      features: [
        'Social services appointments',
        'Housing assistance',
        'Community outreach',
        'Public services',
      ]
    },
    {
      title: 'International Events',
      description: 'Comprehensive interpretation for international gatherings and events.',
      icon: Globe,
      image: eventsImg,
      features: [
        'Cultural events',
        'International forums',
        'Diplomatic meetings',
        'Global conferences',
      ]
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-primary-50/70 via-white to-primary-50/45">
      <div className="container-fluid">
        <div className="mb-12 md:mb-14 max-w-4xl">
          <span className="eyebrow mb-5">Services</span>
          <h2 className="text-5xl md:text-6xl text-primary-800 mb-5 leading-[0.95]">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-secondary-700 max-w-2xl leading-relaxed">
            Professional interpretation services tailored to your needs, delivered with consistency, confidentiality, and cultural intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;