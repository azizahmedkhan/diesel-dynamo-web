
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
            We provide all types of service and maintanace including engine rebuild, suspension,and transmission repair and replacement.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/booking" className="btn-primary text-center">
              Book a Service
            </Link>
            <Link to="/contact" className="btn-secondary text-center">
              Contact Us
            </Link>
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
