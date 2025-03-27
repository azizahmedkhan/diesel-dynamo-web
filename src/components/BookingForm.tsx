
import { useState } from 'react';
import { toast } from 'sonner';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Your booking request has been submitted! We\'ll confirm your appointment shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        additionalNotes: '',
      });
      setIsSubmitting(false);
      setStep(1);
    }, 1500);
  };

  return (
    <div className="glass-card p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${step >= 1 ? 'text-diesel-red' : 'text-diesel-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-diesel-red text-white' : 'bg-diesel-200 text-diesel-500'}`}>
              1
            </div>
            <span className="ml-2 font-medium">Personal Details</span>
          </div>
          <div className={`h-px w-12 ${step >= 2 ? 'bg-diesel-red' : 'bg-diesel-300'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-diesel-red' : 'text-diesel-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-diesel-red text-white' : 'bg-diesel-200 text-diesel-500'}`}>
              2
            </div>
            <span className="ml-2 font-medium">Vehicle Information</span>
          </div>
          <div className={`h-px w-12 ${step >= 3 ? 'bg-diesel-red' : 'bg-diesel-300'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-diesel-red' : 'text-diesel-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-diesel-red text-white' : 'bg-diesel-200 text-diesel-500'}`}>
              3
            </div>
            <span className="ml-2 font-medium">Service Details</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-diesel-800">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-diesel-800 mb-1">
                  First Name <span className="text-diesel-red">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-diesel-800 mb-1">
                  Last Name <span className="text-diesel-red">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                  placeholder="Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-diesel-800 mb-1">
                  Email Address <span className="text-diesel-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-diesel-800 mb-1">
                  Phone Number <span className="text-diesel-red">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                  placeholder="(09) 123 4567"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-diesel-800">Vehicle Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="vehicleMake" className="block text-sm font-medium text-diesel-800 mb-1">
                  Vehicle Make <span className="text-diesel-red">*</span>
                </label>
                <input
                  type="text"
                  id="vehicleMake"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                  placeholder="Toyota"
                />
              </div>

              <div>
                <label htmlFor="vehicleModel" className="block text-sm font-medium text-diesel-800 mb-1">
                  Vehicle Model <span className="text-diesel-red">*</span>
                </label>
                <input
                  type="text"
                  id="vehicleModel"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                  placeholder="Hilux"
                />
              </div>

              <div>
                <label htmlFor="vehicleYear" className="block text-sm font-medium text-diesel-800 mb-1">
                  Vehicle Year <span className="text-diesel-red">*</span>
                </label>
                <input
                  type="text"
                  id="vehicleYear"
                  name="vehicleYear"
                  value={formData.vehicleYear}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                  placeholder="2020"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Previous Step
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-diesel-800">Service Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-diesel-800 mb-1">
                  Service Type <span className="text-diesel-red">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="">Select Service Type</option>
                  <option value="Regular Maintenance">Regular Maintenance</option>
                  <option value="Diagnostic">Diagnostic</option>
                  <option value="Repair">Repair</option>
                  <option value="Performance Upgrade">Performance Upgrade</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-diesel-800 mb-1">
                  Preferred Date <span className="text-diesel-red">*</span>
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-diesel-800 mb-1">
                  Preferred Time <span className="text-diesel-red">*</span>
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200 bg-white"
                >
                  <option value="">Select Preferred Time</option>
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 5:00 PM)">Afternoon (12:00 PM - 5:00 PM)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="additionalNotes" className="block text-sm font-medium text-diesel-800 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-diesel-300 rounded-md focus:outline-none focus:ring-2 focus:ring-diesel-red focus:border-transparent transition-all duration-200"
                  placeholder="Please provide any additional information about your vehicle or the service needed."
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Previous Step
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Booking'
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
