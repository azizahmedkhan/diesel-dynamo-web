
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-24 bg-diesel-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Service</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Schedule your diesel vehicle service with our expert technicians. 
              We'll confirm your appointment and get your vehicle running at peak performance.
            </p>
          </div>
        </div>
      </div>
      
      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-diesel-900 mb-6">Booking Information</h2>
            
            <div className="space-y-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-diesel-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 text-diesel-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Service Hours
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-diesel-700">Weekdays:</p>
                    <p className="text-diesel-600">Monday - Friday: 7:30 AM - 5:30 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-diesel-700">Weekend:</p>
                    <p className="text-diesel-600">Saturday: 8:00 AM - 2:00 PM</p>
                    <p className="text-diesel-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-diesel-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 text-diesel-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What to Expect
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-diesel-700">
                  <li>After submitting your booking request, we'll contact you within 24 hours to confirm your appointment.</li>
                  <li>Please arrive 10 minutes before your scheduled appointment time.</li>
                  <li>Our technician will perform an initial assessment and discuss any findings with you before proceeding with the service.</li>
                  <li>We'll provide a detailed estimate for any additional work required beyond your scheduled service.</li>
                  <li>Most routine services can be completed the same day, but major repairs may require additional time.</li>
                </ol>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-diesel-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 text-diesel-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Our Commitment
                </h3>
                <p className="text-diesel-700 mb-4">
                  At Diesel Dynamo, we're committed to providing transparent, high-quality service for your diesel vehicle. We promise:
                </p>
                <ul className="space-y-2 text-diesel-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-diesel-red mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No work will be performed without your approval</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-diesel-red mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Clear explanations of all recommended services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-diesel-red mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quality workmanship with a 12-month warranty</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-diesel-red mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Competitive pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Booking;
