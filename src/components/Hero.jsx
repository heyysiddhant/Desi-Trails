import { useState, useEffect } from "react";

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.jpg';
import slide7 from '../assets/slide7.jpg';

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for booking with Desi Trails!');
    setShowBookingForm(false);
  };

  return (
    <section
      className="relative h-screen bg-center bg-cover transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Discover the <span className="text-orange-400">Heart</span> of India
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl animate-fadeIn delay-200">
          From the peaks of the Himalayas to the backwaters of Kerala, embark on unforgettable journeys across India.
        </p>
        <button
          onClick={() => setShowBookingForm(true)}
          className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 transition-all duration-300 py-3 px-8 rounded-full text-lg font-medium hover:scale-105 active:scale-95"
        >
          Book Now
        </button>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative animate-fadeInUp">
            <button
              className="absolute top-3 right-4 text-3xl text-gray-700 hover:text-black"
              onClick={() => setShowBookingForm(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book Your Journey</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                placeholder="Destination"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Package</option>
                <option value="Adventure">Adventure Trip</option>
                <option value="Relaxation">Relaxation Vacation</option>
                <option value="Cultural">Cultural Tour</option>
              </select>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition-all duration-300 py-2 rounded-lg text-white font-semibold text-lg hover:scale-105 active:scale-95"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;