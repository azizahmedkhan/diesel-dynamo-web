
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Have questions about our diesel mechanic services? Get in touch with our team. 
              We're here to help with all your diesel vehicle needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-diesel-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-diesel-red bg-opacity-10">
                    <svg className="h-6 w-6 text-diesel-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-diesel-800">Our Location</h3>
                    <address className="mt-2 not-italic text-diesel-600">
                      123 Diesel Drive<br />
                      Otahuhu, Auckland 1062<br />
                      New Zealand
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-diesel-red bg-opacity-10">
                    <svg className="h-6 w-6 text-diesel-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-diesel-800">Phone Numbers</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-diesel-600">Main: (09) 533 1234</p>
                      <p className="text-diesel-600">Service: (09) 533 1235</p>
                      <p className="text-diesel-600">Emergency: (021) 123 4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-diesel-red bg-opacity-10">
                    <svg className="h-6 w-6 text-diesel-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-diesel-800">Email Addresses</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-diesel-600">General Inquiries: info@dieseldynamo.co.nz</p>
                      <p className="text-diesel-600">Service Bookings: service@dieseldynamo.co.nz</p>
                      <p className="text-diesel-600">Parts Department: parts@dieseldynamo.co.nz</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-diesel-red bg-opacity-10">
                    <svg className="h-6 w-6 text-diesel-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-diesel-800">Business Hours</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-diesel-600">Monday - Friday: 7:30 AM - 5:30 PM</p>
                      <p className="text-diesel-600">Saturday: 8:00 AM - 2:00 PM</p>
                      <p className="text-diesel-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10 rounded-lg overflow-hidden shadow-lg h-[300px] bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-diesel-800 font-semibold mb-2">Map Location</h3>
                  <p className="text-diesel-600">
                    Interactive map would be displayed here. <br />
                    We are conveniently located in Otahuhu, Auckland with easy access from the Southern Motorway.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-diesel-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-diesel-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-diesel-800 mb-2">What should I do if my diesel vehicle breaks down after hours?</h3>
                <p className="text-diesel-700">
                  For after-hours emergencies, call our emergency service line at (021) 123 4567. We offer limited after-hours services for urgent situations. For non-emergency breakdowns, please leave a message or email us, and we'll contact you first thing the next business day.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-diesel-800 mb-2">Do I need an appointment to bring my vehicle in?</h3>
                <p className="text-diesel-700">
                  While we do accept walk-ins for minor issues and inspections, we strongly recommend booking an appointment to ensure prompt service. This also allows us to assign the right technician with expertise specific to your vehicle's needs.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-diesel-800 mb-2">Do you offer courtesy vehicles while my car is being serviced?</h3>
                <p className="text-diesel-700">
                  Yes, we have a limited number of courtesy vehicles available for customers with major repairs. These must be booked in advance. We also offer a drop-off service within a 10 km radius of our shop for customer convenience.
                </p>
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

export default Contact;
