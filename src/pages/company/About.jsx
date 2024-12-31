// src/pages/About.jsx
import  { useEffect } from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes
import { 
  Globe, 
  Heart, 
  Shield, 
  Target,
  ArrowRight
} from 'lucide-react';
import AboutComponent from '../components/About';

// Import images
//import teamImage from '../assets/images/team-image.jpg';
import valuesImage from '../assets/images/values-image.jpg';
import aboutHero from '../assets/images/about-hero.jpg';

/**
 * Composant ValueCard
 */
const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="bg-brand-secondary/20 p-6 rounded-lg hover-lift backdrop-blur-sm">
    <div className="p-3 bg-brand-neon/10 rounded-lg w-fit mb-4">
      <Icon className="w-6 h-6 text-brand-neon" />
    </div>
    <h3 className="text-xl font-semibold text-brand-light mb-2">{title}</h3>
    <p className="text-brand-light/70">{description}</p>
  </div>
);

/**
 * Validation des PropTypes pour ValueCard
 */
ValueCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // Composant React
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

/**
 * Composant About (Page)
 */
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Globe,
      title: "Global Access",
      description: "Breaking language barriers worldwide with professional interpretation services."
    },
    {
      icon: Heart,
      title: "Empathy First",
      description: "Understanding and respecting cultural nuances in every interaction."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Maintaining the highest standards of interpretation excellence."
    },
    {
      icon: Target,
      title: "Innovation Driven",
      description: "Leveraging technology to enhance human connection and understanding."
    }
  ];

  const achievements = [
    { number: "10K+", label: "Interpretations Completed" },
    { number: "25+", label: "Languages Supported" },
    { number: "100+", label: "Professional Interpreters" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={aboutHero} 
            alt="DBD I&T Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-brand-light mb-6">
              Bridging Languages, Connecting People
            </h1>
            <p className="text-xl text-brand-light/70">
              We&apos;re dedicated to making professional interpretation services 
              accessible to everyone who needs them.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutComponent />

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-light mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
              The principles that guide our service and commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-brand-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={valuesImage} 
                alt="Our Vision" 
                className="rounded-lg shadow-xl hover:shadow-neon transition-shadow duration-300"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-light mb-4">
                  Our Vision
                </h3>
                <p className="text-brand-light/70">
                  To be the leading platform that connects expert interpreters with 
                  clients worldwide, ensuring seamless communication across languages 
                  and cultures.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-light mb-4">
                  Our Mission
                </h3>
                <p className="text-brand-light/70">
                  To provide exceptional interpretation services by connecting skilled 
                  professionals with clients, leveraging technology to make language 
                  access simple and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand-neon mb-2">
                  {achievement.number}
                </div>
                <div className="text-brand-light/70">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-brand-neon/10 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-brand-light mb-6">
              Be Part of Our Mission
            </h2>
            <p className="text-xl text-brand-light/70 mb-8 max-w-2xl mx-auto">
              Join our network of professional interpreters and help us connect the world
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://dbd.co/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Join Our Network
                <ArrowRight size={20} />
              </a>
              <a
                href="https://dbd.co/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                Get a Quote
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Validation des PropTypes pour About
 * 
 * Dans ce cas, le composant About ne reçoit pas de props,
 * mais si vous envisagez de le faire à l'avenir, vous pouvez ajouter les validations ici.
 */
About.propTypes = {
  // Aucune prop reçue actuellement
};

export default About;
