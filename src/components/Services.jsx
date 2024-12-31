// src/components/Services.jsx
import { useState } from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes
import { 
  Stethoscope, 
  Globe2, 
  Users,
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  UserRound,
  Brain,
  Video,
  Briefcase,
  Scale
} from 'lucide-react';
import medicalImage from '../assets/images/medical-interpreting.jpg'; // Ajout des points-virgules
import conferenceImage from '../assets/images/conference-interpreting.jpg';
import communityImage from '../assets/images/community-interpreting.jpg';

// Définition des icônes pour chaque service
const icons = {
  medical: {
    main: Stethoscope,
    sub: [HeartPulse, UserRound, Brain]
  },
  conference: {
    main: Globe2,
    sub: [Video, Briefcase, GraduationCap]
  },
  community: {
    main: Users,
    sub: [Scale, Building2, GraduationCap]
  }
};

// Composant ServiceCard avec validation des props
const ServiceCard = ({ service, isActive, onClick }) => {
  const MainIcon = icons[service.id].main;

  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl p-6 cursor-pointer transition-all duration-300
        ${isActive 
          ? 'bg-brand-neon/10 shadow-neon' 
          : 'bg-brand-secondary/20 hover:bg-brand-secondary/30'
        }
      `}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={`
          p-3 rounded-lg transition-colors duration-300
          ${isActive ? 'bg-brand-neon text-brand-dark' : 'bg-brand-neon/20 text-brand-neon'}
        `}>
          <MainIcon className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-brand-light mb-2">
            {service.title}
          </h3>
          <p className="text-brand-light/70 mb-4">
            {service.description}
          </p>
          
          {isActive && (
            <div className="grid gap-4 mt-6 animate-fadeIn">
              {service.subServices.map((sub, idx) => {
                const IconComponent = icons[service.id].sub[idx]; // Assignation à une variable majuscule

                return (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 text-brand-light/80 hover:text-brand-neon transition-colors"
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />} {/* Utilisation de la variable */}
                    <span>{sub}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        <ArrowRight className={`
          w-5 h-5 transition-transform duration-300
          ${isActive ? 'rotate-90 text-brand-neon' : 'text-brand-light/50'}
        `} />
      </div>
    </div>
  );
};

// Définition des PropTypes pour ServiceCard
ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subServices: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

// Composant Services avec validation des props
const Services = () => {
  const [activeService, setActiveService] = useState('medical');

  const services = [
    {
      id: 'medical',
      title: 'Medical Interpretation',
      description: 'Professional medical interpretation services ensuring accurate communication in healthcare settings.',
      subServices: [
        'Emergency room support',
        'Patient consultations',
        'Mental health sessions'
      ],
      image: medicalImage
    },
    {
      id: 'conference',
      title: 'Conference Interpretation',
      description: 'Seamless interpretation for international events and professional meetings.',
      subServices: [
        'International conferences',
        'Business meetings',
        'Academic symposiums'
      ],
      image: conferenceImage
    },
    {
      id: 'community',
      title: 'Community Services',
      description: 'Breaking barriers in legal and educational settings.',
      subServices: [
        'Legal proceedings',
        'Educational settings',
        'Social services support'
      ],
      image: communityImage
    }
  ];

  return (
    <div className="bg-brand-dark py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-light mb-4">Our Services</h2>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Professional interpretation services tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services Cards */}
          <div className="space-y-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isActive={activeService === service.id}
                onClick={() => setActiveService(service.id)}
              />
            ))}
          </div>

          {/* Service Image Preview */}
          <div className="hidden lg:block sticky top-20">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src={services.find(s => s.id === activeService)?.image}
                alt={services.find(s => s.id === activeService)?.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Définition des PropTypes pour Services (si nécessaire)
Services.propTypes = {
  // Dans ce cas, Services ne reçoit pas de props, donc aucun PropType n'est requis.
};

export default Services;
