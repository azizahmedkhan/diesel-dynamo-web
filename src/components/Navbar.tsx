
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <span className="text-2xl font-bold text-white">DIESEL<span className="text-diesel-red">DRIVE</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-white">
            <Link to="/" className={`nav-link ${isActiveLink('/') ? 'active-nav-link' : ''}`}>
              Home
            </Link>
            <Link to="/services" className={`nav-link ${isActiveLink('/services') ? 'active-nav-link' : ''}`}>
              Services
            </Link>
            <Link to="/booking" className={`nav-link ${isActiveLink('/booking') ? 'active-nav-link' : ''}`}>
              Book a Service
            </Link>
            <Link to="/contact" className={`nav-link ${isActiveLink('/contact') ? 'active-nav-link' : ''}`}>
              Contact
            </Link>
            <a href="tel:+6492748602" className="btn-primary">
              Call Us
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-diesel-900 hover:text-diesel-red"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between h-20 px-4 border-b">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <span className="text-2xl font-bold text-diesel-900">DR<span className="text-diesel-red">DIESEL</span></span>
            </Link>
          </div>
          <button
            type="button"
            className="text-diesel-900 hover:text-diesel-red"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-8 px-4">
          <div className="flex flex-col space-y-6">
            <Link
              to="/"
              className="text-xl font-medium text-diesel-900 hover:text-diesel-red"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-xl font-medium text-diesel-900 hover:text-diesel-red"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/booking"
              className="text-xl font-medium text-diesel-900 hover:text-diesel-red"
              onClick={closeMobileMenu}
            >
              Book a Service
            </Link>
            <Link
              to="/contact"
              className="text-xl font-medium text-diesel-900 hover:text-diesel-red"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <a
              href="tel:+6492748602"
              className="btn-primary text-center"
              onClick={closeMobileMenu}
            >
              Call Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
