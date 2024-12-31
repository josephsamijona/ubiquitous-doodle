// src/pages/Services.jsx
import  { useEffect } from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes
import { 
  Stethoscope, 
  Globe2, 
  Users,
  CheckCircle2,
  Clock,
  Headphones,
  Video,
  UserRound
} from 'lucide-react';
import ServicesComponent from '../components/Services';
import medicalImage from '../assets/images/medical-interpreting.jpg';
import conferenceImage from '../assets/images/conference-interpreting.jpg';
import communityImage from '../assets/images/community-interpreting.jpg';

/**
 * Composant ServiceDetailCard
 */
const ServiceDetailCard = ({ icon: Icon, title, description, features, image, isReversed }) => (
  <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
    <div className="space-y-6">
      <div className="p-3 bg-brand-neon/10 rounded-lg w-fit">
        <Icon className="w-8 h-8 text-brand-neon" />
      </div>
      <h3 className="text-3xl font-bold text-brand-light">{title}</h3>
      <p className="text-brand-light/70 text-lg">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-neon flex-shrink-0" />
            <span className="text-brand-light/70">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative group">
      <img 
        src={image} 
        alt={title} 
        className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-brand-neon/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </div>
);

/**
 * Validation des PropTypes pour ServiceDetailCard
 */
ServiceDetailCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // Composant React
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  isReversed: PropTypes.bool.isRequired
};

/**
 * Composant Services (Page)
 */
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = [
    {
      icon: Stethoscope,
      title: "Medical Interpretation",
      description: "Professional medical interpretation ensuring accurate communication in healthcare settings.",
      image: medicalImage,
      features: [
        "24/7 Emergency room support",
        "Confidential patient consultations",
        "Mental health session interpretation",
        "Medical documentation translation",
        "Healthcare provider training",
        "Multilingual patient support"
      ]
    },
    {
      icon: Globe2,
      title: "Conference Interpretation",
      description: "Seamless interpretation for international events and professional meetings.",
      image: conferenceImage,
      features: [
        "International conference coverage",
        "Business meeting interpretation",
        "Academic symposium support",
        "Real-time translation",
        "Technical equipment provision",
        "Multi-language support"
      ]
    },
    {
      icon: Users,
      title: "Community Services",
      description: "Breaking barriers in legal and educational settings.",
      image: communityImage,
      features: [
        "Legal proceedings interpretation",
        "Educational setting support",
        "Social services assistance",
        "Cultural mediation",
        "Community event coverage",
        "Public service interpretation"
      ]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick connection to professional interpreters"
    },
    {
      icon: Video,
      title: "Remote Options",
      description: "Virtual interpretation services available"
    },
    {
      icon: UserRound,
      title: "Expert Interpreters",
      description: "Certified and experienced professionals"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "24/7 assistance for all services"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Services Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-brand-light mb-6">Our Services</h1>
          <p className="text-xl text-brand-light/70 max-w-3xl mx-auto">
            Professional interpretation services tailored to your specific needs, 
            delivered by certified interpreters with industry expertise.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <ServicesComponent />
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-32">
          {serviceDetails.map((service, index) => (
            <ServiceDetailCard 
              key={index} 
              {...service} 
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-brand-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-brand-light text-center mb-12">
            Why Choose Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon; // Assignation à une variable majuscule
              return (
                <div 
                  key={index}
                  className="bg-brand-dark/50 p-6 rounded-lg hover-lift backdrop-blur-sm"
                >
                  <div className="p-3 bg-brand-neon/10 rounded-lg w-fit mb-4">
                    <IconComponent className="w-6 h-6 text-brand-neon" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-light mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-brand-light/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-brand-neon/10 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-brand-light mb-6">
              Need Interpretation Services?
            </h2>
            <p className="text-xl text-brand-light/70 mb-8 max-w-2xl mx-auto">
              Get in touch with us today to discuss your interpretation needs
            </p>
            <a
              href="https://dbd.co/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Validation des PropTypes pour Services
 * 
 * Dans ce cas, le composant Services ne reçoit pas de props,
 * mais si vous envisagez de le faire à l'avenir, vous pouvez ajouter les validations ici.
 */
Services.propTypes = {
  // Aucune prop reçue actuellement
};

export default Services;
