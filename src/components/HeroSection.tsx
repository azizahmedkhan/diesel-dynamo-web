
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 z-10"
        
      ></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="text-[#FF0000] drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">We repair all types of Cars, Trucks, Vans, SUVs </span>  & light machinery
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Expert diagnostics and repairs for both petrol and diesel vehicles. 
            We provide all types of service and maintanace including engine rebuild, cam belt, suspension,and transmission repair and replacement.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
              href="tel:+642102583793"
              className="btn-primary text-center flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Us</span>
            </a>
            <a 
              href="https://www.google.com/maps?q=31c+Atkinson+avenue+Otahuhu+Auckland+New+Zealand&center=-36.9447,174.8444"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary text-center flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="flex items-center justify-center">Find Us</span>
            </a>
            {/* <Link to="/booking" className="btn-primary text-center">
              Book a Service
            </Link>
            <Link to="/contact" className="btn-secondary text-center">
              Contact Us
            </Link> */}
            
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-pulse-gentle">
        <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
