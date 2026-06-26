import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "dbdiandt@gmail.com",
      action: "mailto:dbdiandt@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 774 5080492",
      action: "tel:+1 774 5080492"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "500 GROSSMAN Drive #1064 Braintree, MA 02184",
      action: null
    },
    {
      icon: Clock,
      title: "Hours",
      info: "24/7 Support Available",
      action: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-fluid">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow mb-4">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Connect with our team to discuss your interpretation needs and receive tailored support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="pro-card p-6"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary-50 rounded-lg">
                        <Icon size={24} className="text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900">
                          {item.title}
                        </h3>
                        {item.action ? (
                          <a
                            href={item.action}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-secondary-600">{item.info}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 section-shell p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Ready to start with DBD I&T?
              </h3>
              <p className="text-secondary-600 mb-6">
                Pick your next step and our team will guide you through onboarding.
              </p>
              <div className="space-y-4">
                <a
                  href="https://dbdint.up.railway.app/home"
                  className="btn btn-primary w-full"
                >
                  Request a Quote
                </a>
                <a
                  href="https://dbdint.up.railway.app/register/choose/"
                  className="btn border border-primary-300 text-primary-700 hover:bg-primary-50 w-full"
                >
                  Become an Interpreter Partner
                </a>
              </div>
            </div>
          </div>

          <div className="section-shell p-8 bg-white">
            <div className="text-center">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Talk to Our Team
              </h3>
              <p className="text-secondary-600 mb-8">
                Have questions about coverage, scheduling, or service scope? Send us a message and we&apos;ll respond promptly.
              </p>
              <a
                href="https://dbdint.up.railway.app/contact/"
                className="inline-flex items-center justify-center space-x-2 w-full btn btn-primary"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </a>
              <p className="mt-6 text-sm text-secondary-500">
                Our team typically responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;