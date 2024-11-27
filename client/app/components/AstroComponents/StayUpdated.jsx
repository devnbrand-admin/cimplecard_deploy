import React from "react";

const StayUpdated = () => {
  return (
    <section className="bg-black/70 py-20">
      <h3 className="text-center text-3xl font-semibold mb-6">Subscribe And Ask For Free</h3>
      <p className="text-center text-lg max-w-3xl mx-auto mb-8">
        Subscribe to our newsletter for exclusive psychic insights, special offers, and more. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe enim, commodi provident
      </p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-l-md text-black"
        />
        <button className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-r-md">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default StayUpdated;
