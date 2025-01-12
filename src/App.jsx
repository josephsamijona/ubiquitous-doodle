import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Landing Page Components
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import About from './components/About';
import Contact from './components/Contact';

// Company Pages
import AboutUs from './pages/company/AboutUs';
import Careers from './pages/company/Careers';
import Blog from './pages/company/Blog';
import Press from './pages/company/Press';

// Legal Pages
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import GDPR from './pages/legal/GDPR';

// Landing Page Component
const LandingPage = () => (
  <>
    <Hero />
    <Services />
    <Stats />
    <About />
    <Contact />
  </>
);

// ScrollToTop component pour remettre la page en haut lors d'un changement de route
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<LandingPage />} />

            {/* Company Routes */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<Press />} />

            {/* Legal Routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/gdpr" element={<GDPR />} />

            {/* 404 Page - À ajouter si nécessaire */}
            <Route path="*" element={
              <div className="container-fluid py-20 text-center">
                <h1 className="text-4xl font-bold text-neutral-900 mb-4">Page Not Found</h1>
                <p className="text-neutral-600 mb-8">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
                <Link to="/" className="btn bg-primary-600 text-white hover:bg-primary-700">
                  Return Home
                </Link>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;