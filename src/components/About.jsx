// src/components/About.jsx
import { Users, Star, Shield, Lightbulb, CheckCircle2, Award, HeartHandshake } from 'lucide-react'
import aboutImage from '../assets/images/about-team.jpg'
import PropTypes from 'prop-types';

const AboutCard = ({ title, items, icon: Icon }) => (
  <div className="bg-brand-secondary/20 p-6 rounded-lg hover-lift backdrop-blur-sm">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-brand-neon/10 rounded-lg">
        <Icon className="text-brand-neon w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-brand-light">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3 text-brand-light/80">
          <CheckCircle2 className="w-5 h-5 text-brand-neon flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

const About = () => {
  const sections = {
    coreValues: [
      'Excellence in Communication',
      'Cultural Sensitivity',
      'Professional Integrity',
      'Innovation in Service Delivery'
    ],
    approach: [
      'Rigorous interpreter selection',
      'Quality assurance protocols',
      'Advanced technological solutions',
      'Continuous professional development'
    ],
    teamHighlights: [
      'Certified interpreters',
      'Industry specialists',
      'Technical support team',
      'Customer service excellence'
    ]
  }

  return (
    <div className="bg-brand-dark py-16 px-4">
      <div className="container mx-auto">
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-brand-light mb-6">Our Mission</h2>
            <p className="text-xl text-brand-light/80 leading-relaxed mb-8">
              Empowering global communication through professional interpretation services
            </p>
            <div className="flex items-center gap-4">
              <HeartHandshake className="w-12 h-12 text-brand-neon" />
              <p className="text-brand-light/70">
                Bridging languages, connecting worlds
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src={aboutImage} 
              alt="DBD I&T Team" 
              className="rounded-lg shadow-xl w-full hover:shadow-neon transition-shadow duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-dark p-4 rounded-lg shadow-xl">
              <Award className="w-12 h-12 text-brand-neon" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AboutCard 
            title="Core Values" 
            items={sections.coreValues}
            icon={Star}
          />
          <AboutCard 
            title="Our Approach" 
            items={sections.approach}
            icon={Lightbulb}
          />
          <AboutCard 
            title="Team Highlights" 
            items={sections.teamHighlights}
            icon={Users}
          />
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100+', label: 'Interpreters', icon: Users },
            { number: '20+', label: 'Languages', icon: Star },
            { number: '24/7', label: 'Support', icon: Shield },
            { number: '98%', label: 'Satisfaction', icon: Award }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-brand-secondary/10 rounded-lg hover-lift">
              <stat.icon className="w-8 h-8 text-brand-neon mx-auto mb-4" />
              <div className="text-3xl font-bold text-brand-neon mb-2">
                {stat.number}
              </div>
              <div className="text-brand-light/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.elementType.isRequired
};



export default About