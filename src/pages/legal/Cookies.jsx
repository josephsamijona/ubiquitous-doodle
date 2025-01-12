import React from 'react';
import { Cookie, Settings, Shield, Clock } from 'lucide-react';

const Cookies = () => {
  const lastUpdated = 'January 1, 2025';

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description: 'Required for basic site functionality. Cannot be disabled.',
      examples: ['Session cookies', 'Authentication cookies', 'Security cookies'],
      necessary: true
    },
    {
      type: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      examples: ['Google Analytics', 'User behavior tracking', 'Performance monitoring'],
      necessary: false
    },
    {
      type: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization.',
      examples: ['Language preferences', 'Location settings', 'User preferences'],
      necessary: false
    },
    {
      type: 'Marketing Cookies',
      description: 'Used to track visitors across websites for marketing purposes.',
      examples: ['Advertising cookies', 'Social media cookies', 'Tracking pixels'],
      necessary: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-white py-16 border-b border-secondary-200">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-primary-700 animate-fade-in">
              Cookie Policy
            </h1>
            <p className="text-secondary-600">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-16 animate-fade-in">
              <p className="text-secondary-600 text-lg">
                This Cookie Policy explains how DBD I&T uses cookies and similar tracking technologies 
                when you visit our website or use our services. Understanding how cookies work helps 
                you maintain control over your privacy.
              </p>
            </section>

            {/* What are Cookies */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Cookie className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">What are Cookies?</h2>
              </div>
              <p className="text-secondary-600">
                Cookies are small text files that websites place on your device to store information 
                about your preferences, enhance site functionality, and improve your experience.
              </p>
            </section>

            {/* Cookie Types */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Settings className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6">
                {cookieTypes.map((cookie) => (
                  <div 
                    key={cookie.type}
                    className="bg-white border border-secondary-200 rounded-lg p-6 
                             hover:shadow-lg transition-all duration-300 
                             transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-primary-700">{cookie.type}</h3>
                      {cookie.necessary && (
                        <span className="bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-secondary-600 mb-4">{cookie.description}</p>
                    <div className="bg-secondary-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-primary-700 mb-2">Examples:</p>
                      <ul className="list-disc pl-5 text-sm text-secondary-600">
                        {cookie.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cookie Management */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Shield className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Managing Your Cookie Preferences</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>
                  You can control and/or delete cookies as you wish. You can delete all cookies 
                  that are already on your computer and you can set most browsers to prevent them 
                  from being placed.
                </p>
                <p>
                  To modify your cookie settings, please visit your browser&apos;s preferences or 
                  settings menu. Please note that if you choose to disable cookies, some features 
                  of our website may not function properly.
                </p>
              </div>
            </section>

            {/* Cookie Updates */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Clock className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Updates to This Policy</h2>
              </div>
              <p className="text-secondary-600">
                We may update this Cookie Policy from time to time. The updated version will be 
                indicated by an updated &quot;Last updated&quot; date and the updated version will be 
                effective as soon as it is accessible.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-secondary-50 p-8 rounded-xl mt-16 border border-secondary-200">
              <h2 className="text-xl font-bold mb-4 text-primary-700">Questions About Our Cookie Policy?</h2>
              <p className="text-secondary-600 mb-6">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:privacy@dbdit.com" 
                  className="text-primary-500 hover:text-primary-600 flex items-center transition-colors"
                >
                  privacy@dbdit.com
                </a>
                <a 
                  href="https://dbdanit.co/contact" 
                  className="inline-flex items-center btn bg-primary-500 text-text-light 
                           hover:bg-primary-600 transform hover:scale-105 transition-all 
                           duration-200 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;