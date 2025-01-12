import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = 'January 1, 2025';

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-white py-16 border-b border-secondary-200">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-primary-700 animate-fade-in">
              Privacy Policy
            </h1>
            <p className="text-secondary-600">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <nav className="bg-white border-b sticky top-16 z-10 shadow-sm">
        <div className="container-fluid py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 overflow-x-auto">
              <a href="#collection" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                Information Collection
              </a>
              <a href="#use" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                Information Use
              </a>
              <a href="#sharing" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                Information Sharing
              </a>
              <a href="#security" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                Data Security
              </a>
              <a href="#rights" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                Your Rights
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-12 animate-fade-in">
              <p className="text-secondary-600 mb-6 text-lg">
                At DBD I&T, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our interpretation services.
                Please read this policy carefully.
              </p>
            </section>

            {/* Information Collection */}
            <section id="collection" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Eye className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Information Collection</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information</li>
                  <li>Contact information</li>
                  <li>Service preferences</li>
                  <li>Payment information</li>
                </ul>
              </div>
            </section>

            {/* Information Use */}
            <section id="use" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <FileText className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Information Use</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>We use the collected information for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and improving our interpretation services</li>
                  <li>Processing payments</li>
                  <li>Communicating with you</li>
                  <li>Marketing and promotional purposes (with consent)</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section id="sharing" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Shield className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers and partners</li>
                  <li>Legal authorities when required by law</li>
                  <li>Professional interpreters (limited information)</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section id="security" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Lock className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Data Security</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>
                  We implement appropriate technical and organizational measures to maintain the security
                  of your personal information, including encryption and secure data storage.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-secondary-50 p-8 rounded-xl mt-16 border border-secondary-200">
              <h2 className="text-xl font-bold mb-4 text-primary-700">Questions About Our Privacy Policy?</h2>
              <p className="text-secondary-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;