// src/pages/company/Press.jsx
import { useEffect } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

const Press = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        {/* Featured Article */}
        <article className="max-w-4xl mx-auto mb-20">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-brand-neon mb-2">
              <Calendar size={20} />
              <span>December 30, 2024</span>
            </div>
            <h1 className="text-4xl font-bold text-brand-light mb-4">
              The Future of Interpretation: AI-Enhanced Human Connection
            </h1>
            <p className="text-xl text-brand-light/70">
              How technology is empowering interpreters and revolutionizing language learning
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-brand-light/80 mb-6">
              The interpretation industry stands at the cusp of a technological revolution, 
              where AI and human expertise converge to create unprecedented opportunities 
              for communication and understanding.
            </p>

            <h2 className="text-2xl font-semibold text-brand-light mb-4">
              AI as an Interpreter&apos;s Assistant
            </h2>
            <p className="text-brand-light/80 mb-6">
              Rather than replacing human interpreters, AI is becoming an invaluable assistant, 
              providing real-time terminology suggestions, cultural context, and supporting 
              documentation. This collaboration between human expertise and AI capabilities 
              is leading to more accurate and efficient interpretation services.
            </p>

            <h2 className="text-2xl font-semibold text-brand-light mb-4">
              Enhanced Learning Tools
            </h2>
            <p className="text-brand-light/80 mb-6">
              The integration of AI in language learning platforms is revolutionizing how 
              interpreters maintain and improve their skills. Advanced speech recognition, 
              personalized learning paths, and real-time feedback systems are making 
              continuous professional development more effective than ever.
            </p>

            <h2 className="text-2xl font-semibold text-brand-light mb-4">
              Future Implications
            </h2>
            <ul className="list-disc pl-6 text-brand-light/80 mb-6">
              <li>Improved accuracy through AI-assisted terminology management</li>
              <li>Enhanced accessibility to interpretation services</li>
              <li>More efficient training and skill development for interpreters</li>
              <li>Better quality assurance through AI-powered monitoring</li>
            </ul>

            <h2 className="text-2xl font-semibold text-brand-light mb-4">
              The Human Element
            </h2>
            <p className="text-brand-light/80 mb-6">
              While technology continues to advance, the human element remains irreplaceable 
              in interpretation. Cultural nuances, emotional intelligence, and contextual 
              understanding are areas where human interpreters excel and will continue to 
              be essential.
            </p>

            <div className="bg-brand-neon/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-semibold text-brand-light mb-4">
                Media Contact
              </h3>
              <p className="text-brand-light/80">
                For press inquiries, please contact:
                <br />
                Email: press@dbdit.com
                <br />
                Phone: +1 234 567 890
              </p>
            </div>
          </div>
        </article>

        {/* Related Resources */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-brand-light mb-6">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Technology in Interpretation",
                description: "Download our whitepaper on the future of interpretation technology",
                link: "#"
              },
              {
                title: "Press Kit",
                description: "Access our media resources, logos, and brand guidelines",
                link: "#"
              }
            ].map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="group bg-brand-secondary/20 p-6 rounded-lg hover:bg-brand-secondary/30 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-light mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-brand-light/70">{resource.description}</p>
                  </div>
                  <ArrowUpRight className="text-brand-neon group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;