import React from "react";

const StayUpdated = () => {
  return (
    <section className="bg-white py-20 text-center">
      <h3 className="text-4xl font-bold mb-6 text-teal-700">
        Subscribe to Stay Updated
      </h3>
      <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-600 leading-relaxed">
        Join our newsletter to receive exclusive insights, tips, and updates.
        Stay connected and let us guide your journey.
      </p>
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 w-80 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"
        />
        <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-r-md text-white font-medium transition-all">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default StayUpdated;
