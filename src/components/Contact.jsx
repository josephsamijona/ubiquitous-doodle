import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contact@dbdit.com",
      action: "mailto:contact@dbdit.com"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 234 567 890",
      action: "tel:+1234567890"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Massachusetts, USA",
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
    <section className="py-20 bg-neutral-50">
      <div className="container-fluid">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries about our interpretation services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title}
                    className="bg-white p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <Icon size={24} className="text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">
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
                          <p className="text-neutral-600">{item.info}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-neutral-600 mb-6">
                Choose the option that best suits your needs:
              </p>
              <div className="space-y-4">
                <a 
                  href="https://dbdanit.co/quote"
                  className="btn bg-primary-600 text-white hover:bg-primary-700 w-full"
                >
                  Get a Quote
                </a>
                <a 
                  href="https://dbdanit.co/signup"
                  className="btn bg-white border border-primary-600 text-primary-600 
                           hover:bg-primary-50 w-full"
                >
                  Join Our Network
                </a>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="bg-white p-8 rounded-xl shadow-soft">
            <div className="text-center">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Send Us a Message
              </h3>
              <p className="text-neutral-600 mb-8">
                Have questions about our services? We&apos;re here to help! 
                Send us a message and our team will get back to you promptly.
              </p>
              <a 
                href="https://dbdit.co/contact"
                className="inline-flex items-center justify-center space-x-2 
                         w-full btn bg-primary-600 text-white hover:bg-primary-700 
                         transform hover:scale-105 transition-all duration-200"
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