import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Breaking Language Barriers in Healthcare: A Guide for Medical Professionals",
      excerpt: "Discover how professional medical interpretation services are transforming healthcare delivery for non-English speaking patients.",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Healthcare",
      image: "/images/blog/medical-interpretation.jpg"
    },
    {
      title: "The Impact of Professional Interpretation in Legal Proceedings",
      excerpt: "Understanding the crucial role of certified interpreters in ensuring fair legal representation and justice.",
      date: "January 8, 2025",
      readTime: "4 min read",
      category: "Legal",
      image: "/images/blog/legal-interpretation.jpg"
    },
    {
      title: "Best Practices for Remote Interpretation Services",
      excerpt: "Learn about the latest technologies and methodologies that are shaping the future of remote interpretation.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Technology",
      image: "/images/blog/remote-interpretation.jpg"
    },
    {
      title: "Cultural Competency in Business Interpretation",
      excerpt: "Exploring the importance of cultural awareness in business communications and international negotiations.",
      date: "January 3, 2025",
      readTime: "4 min read",
      category: "Business",
      image: "/images/blog/business-culture.jpg"
    }
  ];

  const categories = [
    "All", "Healthcare", "Legal", "Business", "Technology", "Education"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white">
        <div className="container-fluid">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">DBD I&T Blog</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Insights and updates from the world of professional interpretation services.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b">
        <div className="container-fluid py-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium 
                          ${category === 'All' 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.title}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg 
                         transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-4">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </span>
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-neutral-900">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-primary-600 font-medium inline-flex items-center 
                                   hover:text-primary-700 transition-colors duration-200">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn bg-white border border-primary-600 text-primary-600 
                           hover:bg-primary-50">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-50 py-16">
        <div className="container-fluid max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-neutral-600 mb-6">
            Subscribe to our newsletter for the latest insights in interpretation services.
          </p>
          <form className="flex gap-4 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg border border-neutral-300 
                       focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <button 
              type="submit"
              className="btn bg-primary-600 text-white hover:bg-primary-700 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;