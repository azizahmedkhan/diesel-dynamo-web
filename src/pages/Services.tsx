
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Diesel Engine Diagnostics",
      description: "Using the latest diagnostic technology, we can quickly identify issues with your diesel engine. Our advanced equipment allows us to pinpoint problems that other shops might miss, saving you time and money on unnecessary repairs.",
      image: "https://images.unsplash.com/photo-1589007758669-c58ca389fb35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Computer diagnostic scanning",
        "Fuel system testing",
        "Compression testing",
        "Exhaust system analysis",
        "Turbocharger evaluation"
      ]
    },
    {
      title: "Routine Maintenance",
      description: "Regular maintenance is essential for keeping your diesel vehicle running at its best. Our comprehensive maintenance services are designed to prevent costly repairs and extend the life of your diesel engine.",
      image: "https://images.unsplash.com/photo-1599256871679-6e39c1f63e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Oil and filter changes",
        "Fuel filter replacement",
        "Air filter service",
        "Cooling system maintenance",
        "Timing belt/chain service"
      ]
    },
    {
      title: "Performance Tuning",
      description: "Unlock your diesel engine's full potential with our performance tuning services. We offer custom solutions to increase power, torque, and fuel efficiency without compromising reliability.",
      image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "ECU remapping",
        "Turbo upgrades",
        "Fuel system enhancements",
        "Exhaust system upgrades",
        "Custom dyno tuning"
      ]
    },
    {
      title: "4x4 Specialist Repairs",
      description: "As 4x4 enthusiasts ourselves, we understand the unique needs of off-road diesel vehicles. Our specialized 4x4 services keep your vehicle performing at its best, whether on the road or off the beaten path.",
      image: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Differential repairs",
        "Transfer case service",
        "Suspension upgrades",
        "Drivetrain diagnosis",
        "Off-road accessory installation"
      ]
    },
    {
      title: "Commercial Fleet Service",
      description: "Keep your business moving with our fleet maintenance programs. We offer flexible scheduling and competitive pricing to minimize downtime and keep your diesel fleet on the road.",
      image: "https://images.unsplash.com/photo-1586032340880-dc997b3a87cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Preventative maintenance scheduling",
        "Fleet-wide diagnostics",
        "DOT compliance inspections",
        "Emergency repairs",
        "Performance tracking"
      ]
    },
    {
      title: "Diesel Engine Rebuilds",
      description: "When major engine work is needed, our skilled technicians can completely rebuild your diesel engine to factory specifications or better. We use only the highest quality parts for lasting performance.",
      image: "https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Complete engine disassembly",
        "Component inspection",
        "Cylinder head rebuilding",
        "Crankshaft reconditioning",
        "Full reassembly and testing"
      ]
    }
  ];

  return (
    <div className="page-transition">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-24 bg-diesel-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Comprehensive diesel services for cars, trucks, SUVs, and 4x4 vehicles in Otahuhu, Auckland. 
              Our expert technicians are ready to keep your diesel vehicle running at peak performance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-diesel-900 mb-4">{service.title}</h2>
                    <div className="w-16 h-1 bg-diesel-red mb-6"></div>
                    <p className="text-diesel-700 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-diesel-800 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-diesel-red mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-diesel-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link to="/booking" className="btn-primary inline-flex items-center">
                      Book This Service
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-diesel-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-diesel-red mx-auto mb-6"></div>
            <p className="text-lg text-diesel-600">
              Get answers to common questions about our diesel mechanic services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-diesel-200">
            <div className="py-6">
              <h3 className="text-xl font-semibold text-diesel-900 mb-3">How often should I service my diesel vehicle?</h3>
              <p className="text-diesel-700">
                While it depends on your specific vehicle and usage patterns, most diesel engines should be serviced every 5,000-10,000 km. Heavy-duty or commercial vehicles may require more frequent service. We recommend following your manufacturer's guidelines or consulting with our technicians for a personalized maintenance schedule.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-diesel-900 mb-3">What are the signs that my diesel engine needs attention?</h3>
              <p className="text-diesel-700">
                Watch for warning signs like black exhaust smoke, decreased power, rough idling, difficulty starting, unusual engine noises, or illuminated check engine lights. Catching problems early can prevent more extensive damage and costly repairs.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-diesel-900 mb-3">Do you work on all diesel vehicle makes and models?</h3>
              <p className="text-diesel-700">
                Yes, our technicians are trained to work on all makes and models of diesel vehicles, including Toyota, Nissan, Ford, Holden, Mitsubishi, Isuzu, and more. We service passenger cars, SUVs, trucks, and commercial vehicles.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-diesel-900 mb-3">Do you offer a warranty on your services?</h3>
              <p className="text-diesel-700">
                Yes, we stand behind our work with a comprehensive warranty. All repairs come with a 12-month/20,000 km warranty covering both parts and labor. Some specialized components may have different warranty terms, which we'll discuss with you before any work begins.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-semibold text-diesel-900 mb-3">Can you perform manufacturer-required services without voiding my warranty?</h3>
              <p className="text-diesel-700">
                Absolutely. Our service meets or exceeds manufacturer specifications, and we use OEM or equivalent quality parts. Your vehicle's warranty remains intact when serviced at our facility, as protected by consumer protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-diesel-red">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to get your diesel vehicle in peak condition?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your service appointment today or contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/booking" className="btn-primary bg-white text-diesel-red hover:bg-diesel-100 text-center">
                Book a Service
              </Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-diesel-red text-center">
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

export default Services;
