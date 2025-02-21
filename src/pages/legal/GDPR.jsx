import React from 'react';
import { Shield, UserCheck, FileText, Clock, Lock } from 'lucide-react';

const GDPR = () => {
  const lastUpdated = 'January 1, 2025';

  const userRights = [
    {
      title: 'Right to Access',
      description: 'You can request a copy of your personal data and check how we process it.'
    },
    {
      title: 'Right to Rectification',
      description: 'You can request corrections to your personal data if its inaccurate or incomplete.'
    },
    {
      title: 'Right to Erasure',
      description: 'You can request the deletion of your personal data in certain circumstances.'
    },
    {
      title: 'Right to Restriction',
      description: 'You can request to restrict the processing of your personal data.'
    },
    {
      title: 'Right to Data Portability',
      description: 'You can request to receive your data in a structured, commonly used format.'
    },
    {
      title: 'Right to Object',
      description: 'You can object to the processing of your personal data in certain circumstances.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-white py-16 border-b border-secondary-200">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-primary-700 animate-fade-in">
              GDPR Compliance
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
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Shield className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Our Commitment to GDPR</h2>
              </div>
              <p className="text-secondary-600 text-lg">
                DBD I&T is committed to protecting your personal data and complying with the General 
                Data Protection Regulation (GDPR). This policy outlines how we ensure compliance and 
                protect your rights under GDPR.
              </p>
            </section>

            {/* Data Processing */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <FileText className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Data Processing Principles</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>We process personal data following these principles:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lawfulness, fairness, and transparency</li>
                  <li>Purpose limitation</li>
                  <li>Data minimization</li>
                  <li>Accuracy</li>
                  <li>Storage limitation</li>
                  <li>Integrity and confidentiality</li>
                  <li>Accountability</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <UserCheck className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Your Rights Under GDPR</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {userRights.map((right) => (
                  <div 
                    key={right.title}
                    className="bg-white border border-secondary-200 rounded-lg p-6 hover:shadow-lg
                             transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h3 className="font-semibold mb-2 text-primary-700">{right.title}</h3>
                    <p className="text-secondary-600 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Lock className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Data Security Measures</h2>
              </div>
              <div className="space-y-4 text-secondary-600">
                <p>We implement appropriate technical and organizational measures including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of personal data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Staff training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </section>

            {/* Data Breach */}
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-primary-50 rounded-lg mr-3">
                  <Clock className="text-primary-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-primary-700">Data Breach Response</h2>
              </div>
              <p className="text-secondary-600">
                In the event of a personal data breach, we will notify the relevant supervisory 
                authority within 72 hours and affected individuals without undue delay when the 
                breach is likely to result in a high risk to their rights and freedoms.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-secondary-50 p-8 rounded-xl mt-16 border border-secondary-200">
              <h2 className="text-xl font-bold mb-4 text-primary-700">Exercise Your Rights</h2>
              <p className="text-secondary-600 mb-6">
                To exercise your GDPR rights or ask questions about our GDPR compliance, 
                please contact our Data Protection Officer:
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:dpo@dbdit.com" 
                  className="text-primary-500 hover:text-primary-600 flex items-center transition-colors"
                >
                  dpo@dbdit.com
                </a>
                <a 
                  href="https://dbdint.up.railway.app/contact/" 
                  className="inline-flex items-center btn bg-primary-500 text-text-light 
                           hover:bg-primary-600 transform hover:scale-105 transition-all 
                           duration-200 shadow-lg hover:shadow-xl"
                >
                  Contact DPO
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;