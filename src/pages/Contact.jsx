// src/pages/Contact.jsx
import  { useEffect } from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Users} from 'lucide-react';

// Optionnel : Importer les composants ou styles supplémentaires si nécessaire
// import SomeOtherComponent from '../components/SomeOtherComponent';

// Composant ContactCard avec validation des props
const ContactCard = ({ icon: Icon, title, content, link }) => (
  <a 
    href={link}
    className="bg-brand-secondary/20 p-6 rounded-lg hover:bg-brand-secondary/30 transition-all group"
    target="_blank" // Optionnel : Ouvrir les liens dans un nouvel onglet si nécessaire
    rel="noopener noreferrer" // Sécurité recommandée lors de l'utilisation de target="_blank"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-brand-neon/10 rounded-lg">
        <Icon className="w-6 h-6 text-brand-neon" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-brand-light mb-2">{title}</h3>
        <p className="text-brand-light/70 group-hover:text-brand-neon transition-colors">
          {content}
        </p>
      </div>
    </div>
  </a>
);

/**
 * Validation des PropTypes pour ContactCard
 */
ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // Composant React (fonction ou classe)
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

/**
 * Composant Contact (Page)
 */
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@dbdit.com",
      link: "mailto:contact@dbdit.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 234 567 890",
      link: "tel:+1234567890"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Massachusetts, United States",
      link: "#"
    }
  ];

  const inquiryTypes = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      content: "Questions about our services",
      link: "mailto:info@dbdit.com"
    },
    {
      icon: Users,
      title: "Join Our Network",
      content: "Become an interpreter",
      link: "https://dbd.co/signup"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      content: "Technical assistance",
      link: "mailto:support@dbdit.com"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-light mb-4">Contact Us</h1>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Contact us through any of the following channels.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>

        {/* Support Options */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-brand-light mb-6">
            How Can We Help?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {inquiryTypes.map((inquiry, index) => (
              <ContactCard key={index} {...inquiry} />
            ))}
          </div>
        </div>

        {/* Hours of Operation */}
        <div className="bg-brand-neon/10 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-brand-light mb-6">
            Hours of Operation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-light mb-4">
                Interpretation Services
              </h3>
              <p className="text-brand-light/70 mb-2">24/7 Emergency Support</p>
              <p className="text-brand-light/70">Available worldwide</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-light mb-4">
                Administrative Office
              </h3>
              <p className="text-brand-light/70 mb-2">Monday - Friday</p>
              <p className="text-brand-light/70">9:00 AM - 5:00 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Validation des PropTypes pour Contact
 * 
 * Dans ce cas, le composant Contact ne reçoit pas de props,
 * mais si vous envisagez de le faire à l'avenir, vous pouvez ajouter les validations ici.
 */
Contact.propTypes = {
  // Aucune prop reçue actuellement
};

export default Contact;
