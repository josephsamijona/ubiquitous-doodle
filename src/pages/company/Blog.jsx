// src/pages/company/Blog.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Import des images
import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';
import blog3 from '../../assets/images/blog-3.jpg';
import blog4 from '../../assets/images/blog-4.jpg';
import blog5 from '../../assets/images/blog-5.jpg';
import blog6 from '../../assets/images/blog-6.jpg';

/**
 * Composant BlogCard
 */
const BlogCard = ({ title, excerpt, date, readTime, category, image }) => (
  <article className="bg-brand-secondary/20 rounded-lg overflow-hidden hover-lift group">
    <div className="relative aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-brand-neon text-brand-dark px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-brand-light/60 mb-3">
        <span className="flex items-center gap-1">
          <Calendar size={16} />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={16} />
          {readTime} min read
        </span>
      </div>
      <h2 className="text-xl font-semibold text-brand-light mb-3 group-hover:text-brand-neon transition-colors">
        {title}
      </h2>
      <p className="text-brand-light/70 mb-4">{excerpt}</p>
      <button className="flex items-center gap-2 text-brand-neon group-hover:gap-3 transition-all">
        Read More
        <ArrowRight size={16} />
      </button>
    </div>
  </article>
);

/**
 * Validation des PropTypes pour BlogCard
 */
BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

/**
 * Composant Blog (Page)
 */
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tableau des posts de blog avec les images importées
  const blogPosts = [
    {
      title: "The Impact of AI on Medical Interpretation",
      excerpt: "Exploring how artificial intelligence is enhancing medical interpretation accuracy and accessibility.",
      date: "Dec 30, 2024",
      readTime: 5,
      category: "Technology",
      image: blog1
    },
    {
      title: "Best Practices for Remote Interpretation",
      excerpt: "Tips and strategies for successful remote interpretation sessions in the digital age.",
      date: "Dec 28, 2024",
      readTime: 4,
      category: "Best Practices",
      image: blog2
    },
    {
      title: "Cultural Competency in Medical Settings",
      excerpt: "Understanding the importance of cultural awareness in healthcare interpretation.",
      date: "Dec 25, 2024",
      readTime: 6,
      category: "Healthcare",
      image: blog3
    },
    {
      title: "Conference Interpretation: A Complete Guide",
      excerpt: "Everything you need to know about professional conference interpretation services.",
      date: "Dec 22, 2024",
      readTime: 7,
      category: "Guide",
      image: blog4
    },
    {
      title: "Language Access in Healthcare",
      excerpt: "Breaking down barriers to healthcare through professional interpretation services.",
      date: "Dec 20, 2024",
      readTime: 5,
      category: "Healthcare",
      image: blog5
    },
    {
      title: "The Future of Language Services",
      excerpt: "Emerging trends and technologies shaping the future of interpretation services.",
      date: "Dec 18, 2024",
      readTime: 6,
      category: "Industry Insights",
      image: blog6
    }
  ];

  const categories = [
    "All",
    "Technology",
    "Healthcare",
    "Best Practices",
    "Industry Insights",
    "Guide"
  ];

  return (
    <div className="min-h-screen bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-light mb-4">Blog</h1>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Insights, updates, and resources for interpretation professionals and clients
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all
                ${category === 'All' 
                  ? 'bg-brand-neon text-brand-dark' 
                  : 'bg-brand-secondary/20 text-brand-light hover:bg-brand-secondary/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-brand-neon/10 rounded-xl p-8 backdrop-blur-sm text-center">
          <h2 className="text-2xl font-semibold text-brand-light mb-4">
            Stay Updated
          </h2>
          <p className="text-brand-light/70 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and updates in the interpretation industry
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-brand-dark/50 text-brand-light placeholder-brand-light/50 focus:outline-none focus:ring-2 focus:ring-brand-neon"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Validation des PropTypes pour Blog
 * 
 * Dans ce cas, le composant Blog ne reçoit pas de props,
 * mais si vous envisagez de le faire à l'avenir, vous pouvez ajouter les validations ici.
 */
Blog.propTypes = {
  // Aucune prop reçue actuellement
};

export default Blog;
