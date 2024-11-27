import React from "react";
import { MdEmail, MdPhone, MdEvent, MdLocationOn } from "react-icons/md";

function ContactInfo() {
  const contactData = [
    {
      id: 1,
      title: "Email",
      icon: <MdEmail className="text-4xl text-blue-600" />,
      details: ["johndoe@techsolutions.com", "contact@techsolutions.com"],
      hoverBg: "hover:bg-blue-600",
    },
    {
      id: 2,
      title: "Mobile",
      icon: <MdPhone className="text-4xl text-green-600" />,
      details: ["+1-234-567-890", "+1-234-567-891"],
      hoverBg: "hover:bg-green-600",
    },
    {
      id: 3,
      title: "Date of Birth",
      icon: <MdEvent className="text-4xl text-purple-600" />,
      details: ["1985-06-15"],
      hoverBg: "hover:bg-purple-600",
    },
    {
      id: 4,
      title: "Address",
      icon: <MdLocationOn className="text-4xl text-red-600" />,
      details: [
        "1234 Elm Street, Springfield, IL, 62701",
        "5678 Oak Avenue, Lincoln, IL, 62656",
      ],
      hoverBg: "hover:bg-red-600",
    },
  ];

  return (
    <div className="h-2/6 w-full flex items-center justify-center my-28">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {contactData.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 transition-transform transform hover:scale-105 ${item.hoverBg}`}
          >
            <div className="p-4 rounded-full bg-gray-100">{item.icon}</div>

            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>

            <ul className="text-gray-700 space-y-2 text-center">
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
