import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const MobileComponent = ({ userDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div
      style={{ backgroundColor: "#EADAF4" }}
      className="flex flex-col m-0 relative"
    >
      <div className="bg-gradient-to-b from-purple-500 to-purple-300 p-2 pb-5 rounded-b-3xl h-60">
        <div className="flex items-center justify-between ">
          <button className="text-white" onClick={() => setIsNavOpen(true)}>
            <img src="/Assets/options.png" alt="Menu" className="w-6 h-6" />
          </button>
          <div className="w-10 h-10  border-2 rounded-lg">
            <img
              src="/Assets/Profile Picture.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="my-6">
          <h1 className="text-white text-2xl font-bold">Welcome Back</h1>
          <h2 className="text-white text-lg">
            Good Morning, {userDetails?.username}
          </h2>
        </div>
        <div
          style={{ top: 10 }}
          onClick={() => setIsOpen(true)}
          className="absolute justify-items-center content-center w-80 flex-col relative m-auto border border-gray-300 h-56 rounded-xl bg-white"
        >
          <img
            src="/Assets/add a new project.png"
            alt="Icon 3"
            className="w-20 h-20 mb-3"
          />
          <h2 style={{ fontSize: 20, color: "#AB6BD4" }}>Add New Card </h2>
        </div>
      </div>

      <div className="h-40"></div>
      <div
        className="flex flex-col p-3 items-center"
        style={{ backgroundColor: "#EADAF4" }}
      >
        <h3 className="font-semibold text-lg m-5" style={{ color: "#AB6BD4" }}>
          My Cards
        </h3>
        {userDetails?.cards.map((card, index) => (
          <div className="my-5" key={index}>
            <Card card={card} />
          </div>
        ))}
        <div className="h-40"></div>
      </div>

      {isNavOpen ? (
        <div
          className="fixed left-0 top-0 w-3/4 m-2 rounded-xl pb-3"
          style={{ zIndex: 99, height: "98vh", backgroundColor: "#9D4AD1" }}
        >
          <button
            className="fixed p-4 text-xl text-white"
            onClick={() => setIsNavOpen(false)}
          >
            x
          </button>
          <Navbar />
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-between items-center p-4 bg-white rounded-t-lg shadow-md fixed bottom-0 left-0 w-full">
        <button className="flex flex-col items-center text-purple-500">
          <img
            style={{ color: "black" }}
            src="/Assets/Home-col.png" // Replace with your home icon path
            alt="Home"
            className="w-6 h-6"
          />
          <span className="text-sm">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <img
            src="/Assets/Account-black.png" // Replace with your profile icon path
            alt="Profile"
            className="w-6 h-6"
          />
          <span className="text-sm">Profile</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <img
            src="/Assets/Notification-black.png" // Replace with your notification icon path
            alt="Notifications"
            className="w-6 h-6"
          />
          <span className="text-sm">Alerts</span>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Card Creation</h2>
            <div className="w-90 h-80"></div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-red-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileComponent;
