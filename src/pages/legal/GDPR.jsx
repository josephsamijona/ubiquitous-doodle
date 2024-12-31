// src/pages/legal/GDPR.jsx
import { useEffect } from 'react';

const GDPR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-brand-light mb-8">GDPR Compliance</h1>
        <div className="prose prose-invert max-w-none text-brand-light/80">
          <p className="text-lg mb-8">Last updated: December 30, 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Rights of EU Citizens</h2>
            <p className="mb-4">
              Under GDPR, EU citizens have the following rights regarding their personal data:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&apos;right to be forgotten&apos;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Data Processing Basis</h2>
            <p className="mb-4">We process personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Contract fulfillment for interpretation services</li>
              <li>Legal obligations for business operations</li>
              <li>Legitimate interests in service improvement</li>
              <li>Explicit consent for marketing communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">International Data Transfers</h2>
            <p className="mb-4">
              As a US-based company serving international clients, we ensure GDPR compliance through:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Appropriate security measures</li>
              <li>Data minimization practices</li>
              <li>Transparent data processing policies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Data Protection Measures</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Encryption of personal data</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
              <li>Incident response procedures</li>
              <li>Data protection impact assessments</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Contact Our DPO</h2>
            <p className="mb-4">
              For GDPR-related inquiries, contact our Data Protection Officer:
              <br />
              Email: dpo@dbdit.com
              <br />
              Address: Massachusetts, United States
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPR;