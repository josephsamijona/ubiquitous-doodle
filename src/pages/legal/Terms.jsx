// src/pages/legal/Terms.jsx
import { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-brand-light mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-brand-light/80">
          <p className="text-lg mb-8">
            Last updated: December 30, 2024
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">1. Service Overview</h2>
            <p className="mb-4">
              DBD I&T operates as a platform connecting professional interpreters with clients needing 
              interpretation services. We facilitate these connections while maintaining high standards 
              of service quality and professional conduct.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">2. User Relationships</h2>
            
            <h3 className="text-xl font-semibold text-brand-light mb-3">2.1 Clients</h3>
            <p className="mb-4">
              By using our services, clients agree to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate information about their interpretation needs</li>
              <li>Pay for services according to agreed rates</li>
              <li>Respect scheduled appointment times</li>
              <li>Provide reasonable notice for cancellations</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-light mb-3">2.2 Interpreters</h3>
            <p className="mb-4">
              Interpreters on our platform agree to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Maintain current certifications and qualifications</li>
              <li>Adhere to professional interpretation standards</li>
              <li>Maintain confidentiality of client information</li>
              <li>Provide services as scheduled and agreed upon</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">3. Service Fees and Payments</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Service rates are clearly communicated before booking</li>
              <li>Platform fees are deducted from interpreter payments</li>
              <li>Cancellation fees may apply based on notice period</li>
              <li>Payment processing is handled securely through our platform</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">4. Cancellation Policy</h2>
            <p className="mb-4">
              Our cancellation policy is designed to protect both clients and interpreters:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>24+ hours notice: No charge</li>
              <li>12-24 hours notice: 50% of service fee</li>
              <li>Less than 12 hours: Full service fee</li>
              <li>Emergency situations are evaluated case-by-case</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">5. Quality Assurance</h2>
            <p className="mb-4">
              We maintain service quality through:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Regular interpreter performance reviews</li>
              <li>Client feedback collection and analysis</li>
              <li>Continuous professional development requirements</li>
              <li>Quality monitoring and improvement processes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">6. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of the Commonwealth of Massachusetts, United States. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts in Massachusetts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">7. Contact Information</h2>
            <p className="mb-4">
              For questions about these terms, please contact us at:
              <br />
              Email: legal@dbdit.com
              <br />
              Address: Massachusetts, United States
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;