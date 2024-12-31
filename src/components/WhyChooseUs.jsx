// src/components/WhyChooseUs.jsx
import { useState } from 'react';
import { 
  Globe2, 
  Clock, 
  ShieldCheck, 
  Headphones, 
  Users,
  Star,
  ArrowRight
} from 'lucide-react';
import PropTypes from 'prop-types'; // Importation de PropTypes

const FeatureCard = ({ icon: Icon, title, description, value }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-brand-secondary/20 rounded-xl p-6 hover-lift hover:shadow-neon transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-brand-neon/10 rounded-lg">
          <Icon className="w-6 h-6 text-brand-neon" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand-light mb-2">{title}</h3>
          <p className="text-brand-light/70 mb-3">{description}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-brand-neon">{value}</span>
            <ArrowRight 
              className={`w-4 h-4 text-brand-neon transition-transform duration-300 ${
                isHovered ? 'translate-x-2' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Définition des PropTypes pour FeatureCard
FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // Un composant React
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: Globe2,
      title: "Languages Covered",
      description: "Supporting communication across diverse languages and cultures",
      value: "25+"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Quick connection to professional interpreters",
      value: "< 15min"
    },
    {
      icon: ShieldCheck,
      title: "Certified Interpreters",
      description: "Professional and certified language experts",
      value: "100%"
    },
    {
      icon: Headphones,
      title: "Available Support",
      description: "Round-the-clock assistance for your needs",
      value: "24/7"
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Consistently delivering excellence",
      value: "98%"
    },
    {
      icon: Star,
      title: "Service Rating",
      description: "Trusted by clients worldwide",
      value: "4.9/5"
    }
  ];

  return (
    <div className="bg-brand-dark py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-light mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Delivering excellence in interpretation services through innovation and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
