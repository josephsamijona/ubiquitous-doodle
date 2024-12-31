// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Company Pages
import Blog from './pages/company/Blog';
import Careers from './pages/company/Careers';
import Press from './pages/company/Press';

// Legal Pages
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookie from './pages/legal/Cookie';
import GDPR from './pages/legal/GDPR';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-dark">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Company Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />

            {/* Legal Routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="/gdpr" element={<GDPR />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;