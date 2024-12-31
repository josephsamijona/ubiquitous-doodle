// src/pages/company/Careers.jsx
import { useEffect } from 'react';
import { Mail, Upload } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <h1 className="text-4xl font-bold text-brand-light mb-6 text-center">
            Join Our Network
          </h1>
          <p className="text-xl text-brand-light/70 text-center mb-12">
            Although we&apos;re not actively hiring, we&apos;re always interested in connecting with talented professionals
          </p>

          {/* Future Opportunities */}
          <div className="bg-brand-secondary/20 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">
              Future Opportunities
            </h2>
            <p className="text-brand-light/70 mb-6">
              While we don&apos;t have any current openings, we&apos;re building a talent pool for future opportunities. 
              If you&apos;re passionate about language interpretation and technology, we&apos;d love to hear from you.
            </p>
            <ul className="list-disc text-brand-light/70 pl-6 mb-6">
              <li>Professional interpreters</li>
              <li>Language specialists</li>
              <li>Technical support specialists</li>
              <li>Customer service professionals</li>
            </ul>
          </div>

          {/* Send CV Section */}
          <div className="bg-brand-neon/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-brand-light mb-4">
              Submit Your CV
            </h2>
            <p className="text-brand-light/70 mb-6">
              Share your CV with us and we&apos;ll keep you in mind for future opportunities.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:careers@dbdit.com"
                className="flex items-center gap-2 btn-primary"
              >
                <Mail size={20} />
                Send CV
              </a>
              <a
                href="https://dbd.co/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-outline"
              >
                <Upload size={20} />
                Upload CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;