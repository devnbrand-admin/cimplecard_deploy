import React from "react";
import Image from "next/image";
import Appointment from "../../assets/lawyerTemplate/Appointment.png";

const AppointmentForm = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between bg-[#F7F7F7] px-4 py-8 md:px-8 lg:px-16 font-sans">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-full h-56 md:h-64 lg:h-80 z-10">
          <Image
            src={Appointment}
            alt="Appointment Image"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/3 px-4 lg:px-28">
        <h5 className="text-xs md:text-base text-gray-600 uppercase mb-2 tracking-widest text-center lg:text-left">
          Book Your Appointment Now
        </h5>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Garamond text-gray-800 mb-6 text-center lg:text-left">
          Let Our Experience <br />
          <span className="text-yellow-700">Be Your Guide</span>
        </h1>

        {/* Form */}
        <form className="space-y-4 font-Garamond">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="eg: John Doe"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700">
                Available Date
              </label>
                <input type="date" name="" id="" className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-[7px] focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
             
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="eg: john@email.com"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+971 543210987"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block text-lg font-medium text-gray-700">
              Share Your Message
            </label>
            <textarea
              placeholder="Message"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="bg-yellow-700 hover:bg-yellow-600 text-white py-2 px-6 rounded-md transition duration-300"
            >
              Book Now →
            </button>
          </div>
        </form>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-10 left-0 w-32 h-48 md:w-48 md:h-96 rounded-r-full bg-[#CB935D] hidden md:block"></div>
    </div>
  );
};

export default AppointmentForm;
