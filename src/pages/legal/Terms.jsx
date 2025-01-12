import React from 'react';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

const Terms = () => {
  const lastUpdated = 'January 1, 2025';

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-white py-16 border-b border-secondary-200">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-primary-700 animate-fade-in">
              Terms of Service
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
              <a href="#services" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                Services
              </a>
              <a href="#user-responsibilities" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                User Responsibilities
              </a>
              <a href="#payment" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                Payment Terms
              </a>
              <a href="#liability" className="text-sm font-medium text-secondary-600 hover:text-primary-600 whitespace-nowrap transition-colors">
                Liability
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
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of DBD I&T&apos;s interpretation
                services. By using our services, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Services */}
            <section id="services" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <FileText className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Services</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>DBD I&T provides professional interpretation services, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>On-site interpretation services</li>
                  <li>Medical interpretation</li>
                  <li>Legal interpretation</li>
                  <li>Business interpretation</li>
                  <li>Community services interpretation</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section id="user-responsibilities" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <CheckCircle className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">User Responsibilities</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Use services in compliance with applicable laws</li>
                  <li>Respect interpreter schedules and appointments</li>
                  <li>Pay for services as agreed</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section id="payment" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Scale className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Payment Terms</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>Our payment terms include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is required before service delivery</li>
                  <li>Accepted payment methods: credit cards, bank transfers</li>
                  <li>Cancellation policy and refund terms</li>
                  <li>Late payment fees and penalties</li>
                </ul>
              </div>
            </section>

            {/* Liability */}
            <section id="liability" className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <AlertCircle className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Liability</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>
                  DBD I&T strives to provide high-quality interpretation services but cannot guarantee
                  perfect accuracy in all situations. We limit our liability as permitted by law.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-secondary-50 p-8 rounded-xl mt-16 border border-secondary-200">
              <h2 className="text-xl font-bold mb-4 text-primary-700">Questions About Our Terms?</h2>
              <p className="text-secondary-600 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:legal@dbdit.com" 
                  className="text-primary-500 hover:text-primary-600 flex items-center transition-colors"
                >
                  legal@dbdit.com
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

export default Terms;