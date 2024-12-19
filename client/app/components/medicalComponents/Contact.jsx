import React from "react";

const Contact = ({ card }) => {
  return (
    <div
      className="h-auto md:h-screen flex md:flex-row flex-col items-center w-full mt-5 px-4"
      id="Contact"
    >
      <img
        src="/Assets/MedicalAssets/ContactDoctor.png"
        className="w-2/3 md:hidden block md:w-1/3"
        style={{ right: -100 }}
      />
      <div
        className="w-full md:w-3/4 relative flex flex-col md:flex-row items-center shadow-lg justify-center rounded-2xl md:rounded-r-full"
        style={{ border: "2px solid #0B882396", minHeight: "70vh" }}
      >
        {/* Form Section */}
        <div className="w-full md:w-2/4 h-full p-4 md:p-5 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-600 text-center mb-4 md:mb-6">
            Let's Meet
          </h1>
          <form className="space-y-4">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="border border-gray-300 rounded-md p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Choose Time</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
              </select>
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email (Optional)"
                className="border border-gray-300 rounded-md p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="border border-gray-300 rounded-md p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Mode Of Meeting</option>
                <option>In-person</option>
                <option>Online</option>
              </select>
            </div>
            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <select className="border border-gray-300 rounded-md p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Type of Service</option>
                  <option>Consultation</option>
                  <option>Follow-up</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-md p-3 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <textarea
                placeholder="Additional Notes..."
                className="border border-gray-300 rounded-md p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 md:py-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              MEET WITH DOC.
            </button>
          </form>
        </div>

        {/* Image Section */}
        <img
          src="/Assets/MedicalAssets/ContactDoctor.png"
          className="w-2/3 hidden md:block md:w-1/3 absolute md:relative mt-4 md:mt-0"
          style={{ right: -100 }}
        />
      </div>
    </div>
  );
};

export default Contact;
