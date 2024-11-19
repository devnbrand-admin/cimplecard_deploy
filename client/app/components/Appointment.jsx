import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function ContactForm() {
  return (
    <div className="w-full min-h-screen bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-400"></div>

      <div className="relative flex items-center justify-center h-full">
        <div className="w-full max-w-6xl bg-white shadow-lg mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <h2 className="text-xl font-semibold text-gray-700 mb-8 pl-8 pt-8">
              Send us a Message
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pl-8 pb-8">
              {" "}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-500"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-500"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Number"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-500"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company Name"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Hi, do you have a moment to talk about..."
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                ></textarea>
              </div>
            </form>

            {/* Floating Send Button */}
            <button
              type="submit"
              className="absolute bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <TbBrandTelegram fontSize={30} />
            </button>
          </div>

          <div className="bg-blue-900 text-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <MdLocationOn className="text-2xl text-blue-300" />
                <span className="text-lg">Sector 1, HSR Layout, Karnataka</span>
              </li>
              <li className="flex items-center space-x-4">
                <MdPhone className="text-2xl text-blue-300" />
                <span className="text-lg">(800) 800-700-300</span>
              </li>
              <li className="flex items-center space-x-4">
                <MdEmail className="text-2xl text-blue-300" />
                <span className="text-lg">info@rahul.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
