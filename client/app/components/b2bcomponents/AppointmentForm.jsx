const AppointmentForm = () => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#578EB6] rounded-lg shadow-lg p-8 w-full max-w-4xl">
          {/* Title and Subtitle */}
          <h2 className="text-2xl font-bold text-white mb-2">
            Book your appointment now
          </h2>
          <p className="text-sm text-blue-100 mb-6">
            So our team can reach out to you on time
          </p>
  
          {/* Form */}
          <form className="grid grid-cols-2 gap-x-8 gap-y-6 relative">
            {/* Full Name */}
            <div className="col-span-1">
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="eg: John Doe"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
  
            {/* Available Date */}
            <div className="col-span-1">
              <label htmlFor="availableDate" className="sr-only">
                Available Date
              </label>
              <select
                id="availableDate"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none bg-white"
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="date1">Date 1</option>
                <option value="date2">Date 2</option>
                <option value="date3">Date 3</option>
              </select>
            </div>
  
            {/* Email */}
            <div className="col-span-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="eg: john@email.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
  
            {/* Share Your Message */}
            <div className="col-span-1">
              <label htmlFor="message" className="sr-only">
                Share Your Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none resize-none"
              ></textarea>
            </div>
  
            {/* Phone Number */}
            <div className="col-span-1 absolute bottom-12 w-[400px]">
              <label htmlFor="phoneNumber" className="sr-only">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="+971 543210987"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
  
            {/* Submit Button */}
            <div className="col-span-2 flex justify-end">
              <button
                type="submit"
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              >
                <span>Book Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AppointmentForm;
  