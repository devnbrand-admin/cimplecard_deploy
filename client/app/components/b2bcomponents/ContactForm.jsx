import React from "react";

function ContactForm() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-blue-500 to-blue-400 text-white w-full max-w-lg rounded-lg shadow-md p-6 relative">
        <h2 className="text-xl font-bold mb-6 text-center">Send us a Message</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="e.g: John Doe"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 text-gray-800"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="+971 543210987"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 text-gray-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="e.g: john@email.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 text-gray-800"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 text-gray-800"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Share Your Message</label>
            <textarea
              placeholder="Hi, do you have a moment to talk about..."
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300 text-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
