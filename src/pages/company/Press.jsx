import React from 'react';
import { Download, ExternalLink, Mail } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: "DBD I&T Expands Medical Interpretation Services Across Massachusetts",
      date: "January 8, 2025",
      excerpt: "Leading interpretation service provider announces major expansion of medical interpretation services to meet growing healthcare needs.",
      pdf: "/press/medical-expansion-2025.pdf"
    },
    {
      title: "DBD I&T Achieves Industry-Leading Customer Satisfaction Score",
      date: "December 15, 2024",
      excerpt: "Company reports 98% customer satisfaction rate, setting new standards in professional interpretation services.",
      pdf: "/press/satisfaction-report-2024.pdf"
    }
  ];

  const mediaFeatures = [
    {
      outlet: "Healthcare Weekly",
      title: "Breaking Language Barriers in Modern Healthcare",
      date: "January 2025",
      link: "#"
    },
    {
      outlet: "Business Insider",
      title: "Top Interpretation Services Companies to Watch",
      date: "December 2024",
      link: "#"
    }
  ];

  const brandAssets = [
    {
      title: "Company Logo Pack",
      format: "AI, PNG, SVG",
      size: "2.4 MB",
      link: "/brand/dbd-logo-pack.zip"
    },
    {
      title: "Brand Guidelines",
      format: "PDF",
      size: "1.8 MB",
      link: "/brand/brand-guidelines.pdf"
    },
    {
      title: "Media Kit 2025",
      format: "PDF",
      size: "3.2 MB",
      link: "/brand/media-kit-2025.pdf"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-background-dark py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] -left-40 -top-40 bg-primary-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute w-[400px] h-[400px] right-20 top-20 bg-primary-400/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>

        <div className="container-fluid relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-light animate-fade-in">
            Press Room
          </h1>
          <p className="text-xl text-primary-200 max-w-3xl mb-8 animate-slide-up">
            Latest news, press releases, and media resources from DBD I&T.
          </p>
          <a 
            href="https://dbdanit.co/contact"
            className="inline-flex items-center btn bg-primary-500 text-text-light hover:bg-primary-600
                     transform hover:scale-105 transition-all duration-200
                     shadow-lg hover:shadow-xl"
          >
            <Mail className="mr-2" size={20} />
            Media Inquiries
          </a>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-8 text-primary-700">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <div 
                key={release.title}
                className="bg-white border border-primary-100 rounded-xl p-6 hover:shadow-lg 
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary-700">{release.title}</h3>
                    <p className="text-secondary-500 text-sm mb-3">{release.date}</p>
                    <p className="text-secondary-600 mb-4">{release.excerpt}</p>
                  </div>
                  <a 
                    href={release.pdf}
                    className="btn bg-primary-500 text-text-light hover:bg-primary-600 
                             flex items-center space-x-2 transform hover:scale-105
                             transition-all duration-200 shadow-lg hover:shadow-xl
                             whitespace-nowrap"
                  >
                    <Download size={16} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-16 bg-secondary-50">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-8 text-primary-700">Media Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature) => (
              <a 
                key={feature.title}
                href={feature.link}
                className="group bg-white p-6 rounded-xl shadow-soft hover:shadow-lg 
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-primary-500">{feature.outlet}</span>
                  <ExternalLink 
                    size={16} 
                    className="text-secondary-400 group-hover:text-primary-500 transition-colors" 
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary-700">{feature.title}</h3>
                <p className="text-secondary-500 text-sm">{feature.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold mb-8 text-primary-700">Brand Assets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {brandAssets.map((asset) => (
              <div 
                key={asset.title}
                className="bg-secondary-50 p-6 rounded-xl hover:shadow-lg 
                         transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="font-bold mb-2 text-primary-700">{asset.title}</h3>
                <p className="text-secondary-500 text-sm mb-4">
                  {asset.format} • {asset.size}
                </p>
                <a 
                  href={asset.link}
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 
                           font-medium group"
                >
                  <Download size={16} className="mr-2 transform group-hover:translate-y-0.5 
                                               transition-transform duration-200" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative bg-background-dark text-text-light py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] -right-40 -bottom-40 bg-primary-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>

        <div className="container-fluid text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Media Contact</h2>
          <p className="text-lg mb-8 text-primary-200">
            For press inquiries, please contact our media relations team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:press@dbdit.com"
              className="btn bg-primary-500 text-text-light hover:bg-primary-600
                     transform hover:scale-105 transition-all duration-200
                     shadow-lg hover:shadow-xl"
            >
              press@dbdit.com
            </a>
            <a 
              href="tel:+1234567890"
              className="btn bg-text-light text-primary-700 hover:bg-primary-50
                     transform hover:scale-105 transition-all duration-200
                     shadow-lg hover:shadow-xl"
            >
              +1 234 567 890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;