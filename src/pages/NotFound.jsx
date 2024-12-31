// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-brand-neon mb-4">404</h1>
      <h2 className="text-2xl text-brand-light mb-8">Page Not Found</h2>
      <p className="text-brand-light mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="btn-primary inline-block"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;