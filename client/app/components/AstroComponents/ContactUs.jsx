import React from "react";
import { MdEmail, MdPhone, MdEvent, MdLocationOn } from "react-icons/md";

function ContactInfo() {
  const contactData = [
    {
      id: 1,
      title: "Stellar Email",
      icon: <MdEmail className="text-4xl text-purple-400" />,
      details: ["cosmic.contact@galaxyhub.com", "info@stardustspace.com"],
      hoverBg: "hover:bg-purple-700",
    },
    {
      id: 2,
      title: "Celestial Phone",
      icon: <MdPhone className="text-4xl text-blue-400" />,
      details: ["+1-987-654-321", "+1-876-543-210"],
      hoverBg: "hover:bg-blue-700",
    },
    {
      id: 3,
      title: "Cosmic Birth",
      icon: <MdEvent className="text-4xl text-teal-400" />,
      details: ["15th June, 2085"],
      hoverBg: "hover:bg-teal-700",
    },
    {
      id: 4,
      title: "Galactic Address",
      icon: <MdLocationOn className="text-4xl text-pink-400" />,
      details: [
        "Galaxy Avenue, Nebula City, Star Cluster Z89",
        "Moonlight Street, Lunar Base, Orbit Station X32",
      ],
      hoverBg: "hover:bg-pink-700",
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {contactData.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg p-6 flex flex-col items-center space-y-4 border border-gray-700 bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg transition-transform transform hover:scale-105 ${item.hoverBg}`}
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-gray-700 to-black shadow-md">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white">{item.title}</h3>

            <ul className="text-gray-300 space-y-2 text-center">
              {item.details.map((detail, index) => (
                <li key={index} className="text-sm md:text-base">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
