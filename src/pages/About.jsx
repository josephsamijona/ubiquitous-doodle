// src/pages/company/About.jsx
import  { useEffect } from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes
import { 
  GraduationCap, 
  Shield,
  Star,
  Activity
} from 'lucide-react';
import AboutComponent from '../components/About';
import teamImage1 from '../assets/images/team-1.jpg';
//import teamImage2 from '../../assets/images/team-2.jpg'; // Commenté si non utilisé

/**
 * Composant Timeline
 */
const Timeline = ({ items }) => (
  <div className="space-y-8">
    {items.map((item, index) => (
      <div key={index} className="relative pl-8 border-l-2 border-brand-neon/30">
        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-brand-neon" />
        <h3 className="text-xl font-semibold text-brand-light mb-2">{item.year}</h3>
        <p className="text-brand-light/70">{item.event}</p>
      </div>
    ))}
  </div>
);

/**
 * Validation des PropTypes pour Timeline
 */
Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired
    })
  ).isRequired
};

/**
 * Composant ProcessCard
 */
const ProcessCard = ({ icon: Icon, title, description }) => (
  <div className="bg-brand-secondary/20 p-6 rounded-lg hover-lift">
    <div className="p-3 bg-brand-neon/10 rounded-lg w-fit mb-4">
      <Icon className="w-6 h-6 text-brand-neon" />
    </div>
    <h3 className="text-xl font-semibold text-brand-light mb-2">{title}</h3>
    <p className="text-brand-light/70">{description}</p>
  </div>
);

/**
 * Validation des PropTypes pour ProcessCard
 */
ProcessCard.propTypes = {
  icon: PropTypes.elementType.isRequired, // Composant React (fonction ou classe)
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

  const timelineItems = [
    { year: '2023', event: 'Launched DBD I&T with a focus on medical interpretation' },
    { year: '2023', event: 'Expanded services to conference interpretation' },
    { year: '2024', event: 'Introduced community services interpretation' },
    { year: '2024', event: 'Growing network of certified interpreters' }
  ];

  const qualityProcess = [
    {
      icon: GraduationCap,
      title: 'Rigorous Training',
      description: 'All interpreters undergo comprehensive training and certification.'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Regular performance evaluations and feedback collection.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Advanced security protocols for confidential information.'
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and quality assessment.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* About Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-brand-light mb-6">About DBD I&T</h1>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Breaking language barriers and connecting people through professional interpretation services
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutComponent />

      {/* Our Journey Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-brand-light mb-12 text-center">Our Journey</h2>
          <div className="max-w-2xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-brand-secondary/20 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-brand-light mb-12 text-center">
            Our Quality Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityProcess.map((process, index) => (
              <ProcessCard key={index} {...process} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src={teamImage1} 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl hover:shadow-neon transition-shadow duration-300"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-light mb-4">Our Mission</h3>
                <p className="text-brand-light/70">
                  To provide exceptional interpretation services that break down language barriers 
                  and facilitate meaningful communication across cultures.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-light mb-4">Our Vision</h3>
                <p className="text-brand-light/70">
                  To be the leading provider of interpretation services, known for excellence, 
                  reliability, and innovation in connecting people across languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-brand-neon/10 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-brand-light mb-6">
              Join Our Growing Network
            </h2>
            <p className="text-xl text-brand-light/70 mb-8 max-w-2xl mx-auto">
              Become part of our team of professional interpreters and help us connect the world.
            </p>
            <a
              href="https://dbdint.up.railway.app/interpreter/register/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join Our Network
            </a>
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
