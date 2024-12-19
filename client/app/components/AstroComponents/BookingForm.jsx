'use client';
import React from "react";

const BookingForm = () => {
  return (
    <div className="w-full py-12 flex justify-center items-center bg-dark-blue">
      <div className="max-w-4xl w-full px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-Cormorant italic text-white">
            Align Your Stars Today
          </h2>
          <p className="text-lg md:text-xl font-Mons font-light text-gray-300 mt-4">
            Take the first step towards clarity and insight with a personalized astrological consultation.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="full-name"
              className="text-sm md:text-base text-gray-300 font-light mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="e.g. John Doe"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          {/* Available Date */}
          <div className="flex flex-col">
            <label
              htmlFor="available-date"
              className="text-sm md:text-base text-gray-300 font-light mb-2"
            >
              Available Date
            </label>
            
              <input type="date" name="available-date" id="available-date" className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black" />
          
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm md:text-base text-gray-300 font-light mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. john@email.com"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label
              htmlFor="phone-number"
              className="text-sm md:text-base text-gray-300 font-light mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              placeholder="Mobile Number"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm md:text-base text-gray-300 font-light mb-2"
            >
              Share Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Message"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center gap-2"
            >
              Book Now
              <span className="inline-block transform translate-x-0.5">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
