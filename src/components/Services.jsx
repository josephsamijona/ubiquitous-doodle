import React from 'react';
import { Stethoscope, Building2, GraduationCap, Scale, Globe, Users } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, features }) => (
  <div className="group bg-white rounded-xl shadow-soft p-6 hover:shadow-lg transition-all duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
        <Icon size={24} className="text-primary-600" />
      </div>
      <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
    </div>
    <p className="text-neutral-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm text-neutral-700">
          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const services = [
    {
      title: 'Medical Interpretation',
      description: 'Professional medical interpretation ensuring accurate communication in healthcare settings.',
      icon: Stethoscope,
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
      features: [
        'Cultural events',
        'International forums',
        'Diplomatic meetings',
        'Global conferences',
      ]
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Professional interpretation services tailored to your specific needs,
            delivered with excellence and cultural sensitivity
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