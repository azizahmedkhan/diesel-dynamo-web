import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface BookingFormData {
  name: string;
  phone: string;
  vehicleName: string;
  problemDescription: string;
}

const TimeSlotBookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    vehicleName: '',
    problemDescription: '',
  });

  // Generate time slots from 9 AM to 5 PM
  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const hour = i + 9; // Start from 9 AM
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowForm(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast.success('Booking submitted successfully!');
    setFormData({
      name: '',
      phone: '',
      vehicleName: '',
      problemDescription: '',
    });
    setShowForm(false);
    setSelectedDate(undefined);
    setSelectedTime(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Book an Appointment</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar and Time Slots */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Select Date</h3>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="mx-auto"
            />
          </div>

          {selectedDate && (
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Select Time</h3>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-2 rounded ${
                      selectedTime === time
                        ? 'bg-diesel-red text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-diesel-red focus:ring-diesel-red"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-diesel-red focus:ring-diesel-red"
                />
              </div>

              <div>
                <label htmlFor="vehicleName" className="block text-sm font-medium text-gray-700">
                  Vehicle Name
                </label>
                <input
                  type="text"
                  id="vehicleName"
                  name="vehicleName"
                  value={formData.vehicleName}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-diesel-red focus:ring-diesel-red"
                />
              </div>

              <div>
                <label htmlFor="problemDescription" className="block text-sm font-medium text-gray-700">
                  Problem Description
                </label>
                <textarea
                  id="problemDescription"
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-diesel-red focus:ring-diesel-red"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-diesel-red text-white py-2 px-4 rounded-md hover:bg-diesel-red/90 focus:outline-none focus:ring-2 focus:ring-diesel-red focus:ring-offset-2"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSlotBookingForm; 