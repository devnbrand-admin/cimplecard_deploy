import React from "react";
import { MdEmail, MdPhone, MdEvent, MdLocationOn } from "react-icons/md";

function ContactInfo({card}) {
  const contactData = [
    {
      id: 1,
      title: "Email",
      icon: <MdEmail className="text-5xl text-blue-500" />,
      details: card?.emails,
    },
    {
      id: 2,
      title: "Mobile",
      icon: <MdPhone className="text-5xl text-blue-500" />,
      details: card?.phoneNumbers,
    },
    {
      id: 3,
      title: "Date of Birth",
      icon: <MdEvent className="text-5xl text-blue-500" />,
      details: [card?.dateOfBirth],
    },
    {
      id: 4,
      title: "Address",
      icon: <MdLocationOn className="text-5xl text-blue-500" />,
      details: [
        card?.companyAddress
      ],
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-gradient-to-b from-[#578EB6] to-[#275679] rounded-xl shadow-lg p-8 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactData?.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center space-y-6"
          >
            <div className="p-4 bg-blue-100 rounded-full">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <ul className="text-center text-gray-600 space-y-2">
              {item.details?.map((detail, index) => (
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
