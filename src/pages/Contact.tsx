
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
                    <address className="mt-2 not-italic text-diesel-600 hover:text-diesel-red cursor-pointer" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=31c+Atkinson+avenue+Otahuhu+Auckland+New+Zealand')}>
                      31c Atkinson<br />
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
                      <p className="text-diesel-600">Mobile: 021 0258 3793</p>
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
                      <p className="text-diesel-600">Email: z.ali0067@gmail.com</p>
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
                      <p className="text-diesel-600">Monday - Friday: 9:00 AM - 5:30 PM</p>
                      <p className="text-diesel-600">Saturday: 8:00 AM - 2:00 PM</p>
                      <p className="text-diesel-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10 rounded-lg overflow-hidden shadow-lg h-[300px] bg-gray-200 flex items-center justify-center">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.5791705173766!2d174.84332091547592!3d-36.94748037991246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4c9c89b31f91%3A0x7f14a67a2e6defb1!2s31C%20Atkinson%20Avenue%2C%20%C5%8Ct%C4%81huhu%2C%20Auckland%201062%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1625162362548!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{border:0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                
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
