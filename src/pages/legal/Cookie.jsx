// src/pages/legal/Cookie.jsx
import { useEffect } from 'react';

const Cookie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-brand-light mb-8">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none text-brand-light/80">
          <p className="text-lg mb-8">Last updated: December 30, 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device when you visit our website. 
              They help us provide you with a better experience by:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Remembering your preferences</li>
              <li>Maintaining your session</li>
              <li>Understanding how you use our platform</li>
              <li>Improving our services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-brand-light mb-3">Essential Cookies</h3>
            <p className="mb-4">Required for platform functionality:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Authentication cookies</li>
              <li>Security cookies</li>
              <li>Session management cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-light mb-3">Functional Cookies</h3>
            <p className="mb-4">Enhance your experience:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Language preferences</li>
              <li>Time zone settings</li>
              <li>Service preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-light mb-3">Analytics Cookies</h3>
            <p className="mb-4">Help us improve our services:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Usage patterns</li>
              <li>Feature effectiveness</li>
              <li>Platform performance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Cookie Management</h2>
            <p className="mb-4">You can manage cookies through:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Our cookie consent banner</li>
              <li>Your browser settings</li>
              <li>Our cookie preference center</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              We use limited third-party cookies for:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Payment processing</li>
              <li>Analytics services</li>
              <li>Security verification</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Cookie Consent</h2>
            <p className="mb-4">
              When you first visit our platform, you&apos;ll be asked to consent to our use of cookies. 
              You can change your preferences at any time through our cookie settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">Contact Us</h2>
            <p className="mb-4">
              For questions about our cookie policy, contact us at:
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

export default Cookie;