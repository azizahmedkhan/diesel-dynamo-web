
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Japanese Diesel Specialist",
      description: "Specialized service for Japanese import diesel vehicles including Nissan, Toyota, Isuzu and Mitsubishi.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      link: "/services",
    },
    {
      title: "Expert Diesel Diagnostics",
      description: "Full diagnostic capabilities to identify and resolve issues in all diesel vehicles, using state-of-the-art equipment.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: "/services",
    },
    {
      title: "4WD & SUV Service",
      description: "Specialized service for 4WD and SUV diesel vehicles including Pajero, Prado, Hilux, and Surf models.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: "/services",
    },
    {
      title: "Complete Engine Overhaul",
      description: "Full engine rebuilds and overhauls for all diesel engines. Restore your engine to its optimal performance.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      link: "/services",
    },
  ];
  
  const testimonials = [
    {
      name: "Peter Wilson",
      vehicle: "Nissan Patrol",
      quote: "Dr Diesel has serviced my fleet vehicles for over 10 years. They're consistently professional and their knowledge of Japanese diesels is unmatched in Auckland.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Thompson",
      vehicle: "Toyota Hilux",
      quote: "After struggling with my Hilux for months, Dr Diesel diagnosed and fixed the issue on the first visit. Their prices are fair and service is excellent.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Chen",
      vehicle: "Mitsubishi Pajero",
      quote: "As someone who knows nothing about engines, I appreciate that Dr Diesel takes the time to explain issues clearly. My Pajero runs better than it has in years.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <div className="page-transition">
     
      <div
      style={{
        backgroundImage: `url(${window.innerWidth >= 768 ? '/images/dd6_dtop.png' : '/images/dd6_m.png'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.6)'
      }}
      >
        {/* Navigation */}
        <Navbar />
      
        {/* Hero Section */}
        <HeroSection />
      </div>
      
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className={`transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-diesel-900 mb-4">Our Specialized Services</h2>
              <div className="w-16 h-1 bg-diesel-red mx-auto mb-6"></div>
              <p className="text-lg text-diesel-600">
                With over 30 years of experience in diesel mechanics, we provide comprehensive services 
                for all Japanese diesel vehicles throughout the Auckland area.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 delay-${(index + 1) * 100} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-bold text-diesel-900 mb-4">Why Choose Dr Diesel?</h2>
              <div className="w-16 h-1 bg-diesel-red mb-6"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-diesel-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-diesel-800">Japanese Import Specialists</h3>
                    <p className="mt-1 text-diesel-600">
                      We specialize in Japanese diesel vehicles, with over 30 years of experience working with Nissan, Toyota, Mitsubishi and more.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-diesel-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-diesel-800">Years Experience</h3>
                    <p className="mt-1 text-diesel-600">
                      We have decades of knowledge solving complex diesel and patrol engine problems for Auckland drivers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-diesel-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-diesel-800">Advanced Diagnostics</h3>
                    <p className="mt-1 text-diesel-600">
                      Our state-of-the-art diagnostic equipment can quickly identify issues that other shops might miss.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-diesel-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-diesel-800">Honest Service</h3>
                    <p className="mt-1 text-diesel-600">
                      We pride ourselves on transparent pricing and clear communication, so you always know what you're paying for.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/booking" className="btn-primary inline-block">
                  Book a Service
                </Link>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Diesel mechanic working on engine" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white text-xl font-bold">30+ Years of Experience</span>
                  <p className="text-white/80 mt-2">Auckland's trusted Japanese diesel specialists since 1991</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-diesel-900 mb-4">What Our Customers Say</h2>
            <div className="w-16 h-1 bg-diesel-red mx-auto mb-6"></div>
            <p className="text-lg text-diesel-600">
              Don't just take our word for it. Here's what some of our satisfied customers have to say about our diesel mechanic services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-diesel-red"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-diesel-800">{testimonial.name}</h4>
                    <p className="text-diesel-600">{testimonial.vehicle}</p>
                  </div>
                </div>
                <p className="text-diesel-700 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-diesel-900 relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to experience the Dr Diesel difference?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Schedule your service appointment today and see why we're Auckland's most trusted Japanese diesel specialists since 1991.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/booking" className="btn-primary text-center">
                Book a Service
              </Link>
              <Link to="/contact" className="btn-secondary text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
