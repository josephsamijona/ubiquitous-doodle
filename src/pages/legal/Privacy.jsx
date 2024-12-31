// src/pages/legal/Privacy.jsx
import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-brand-light mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-brand-light/80">
          <p className="text-lg mb-8">
            Last updated: December 30, 2024
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Our Commitment to Privacy</h2>
            <p className="mb-4">
              At DBD I&T, we understand the sensitive nature of interpretation services and the importance 
              of maintaining confidentiality. We are committed to protecting the privacy of both our clients 
              and interpreters while providing high-quality interpretation services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-brand-light mb-3">For Clients:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Contact information (name, email, phone number)</li>
              <li>Business information when applicable</li>
              <li>Service preferences and requirements</li>
              <li>Session feedback and ratings</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-light mb-3">For Interpreters:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Professional qualifications and certifications</li>
              <li>Language proficiency information</li>
              <li>Availability and scheduling preferences</li>
              <li>Performance metrics and client feedback</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Confidentiality in Medical Interpretation</h2>
            <p className="mb-4">
              We adhere to HIPAA guidelines and maintain strict confidentiality protocols for all medical 
              interpretation sessions. Our interpreters are trained in healthcare privacy requirements and 
              sign comprehensive confidentiality agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Data Security</h2>
            <p className="mb-4">
              We employ industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Encrypted data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Regular security audits</li>
              <li>Restricted access protocols</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Ethical Guidelines</h2>
            <p className="mb-4">
              Our privacy practices are guided by:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Professional interpreter ethics codes</li>
              <li>Healthcare privacy regulations</li>
              <li>Legal interpretation confidentiality standards</li>
              <li>Industry best practices</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Contact Information</h2>
            <p className="mb-4">
              For privacy concerns or questions, please contact our Privacy Officer at:
              <br />
              Email: privacy@dbdit.com
              <br />
              Address: Massachusetts, United States
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;