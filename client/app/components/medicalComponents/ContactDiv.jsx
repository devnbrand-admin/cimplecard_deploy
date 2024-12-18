import React from "react";

const ContactInfo = ({ card }) => {
  const activeDays = [
    { day: "S", status: "active" }, // Sunday
    { day: "M", status: "not-active" },
    { day: "T", status: "active" },
    { day: "W", status: "not-active" },
    { day: "T", status: "active" },
    { day: "F", status: "not-active" },
    { day: "S", status: "active" }, // Saturday
  ];
  return (
    <div className="absolute top-0 text-center  p-5 rounded-lg w-full">
      <div className="text-white flex flex-col items-center">
        <h2 className="text-md">Phone Number</h2>
        <p className="font-bold text-lg">{card.phoneNumbers}</p>
        {/* <p className="font-bold">{card.phoneNumbers}</p> */}

        <h2 className="text-xl font-bold mt-1">Email</h2>
        <p>{card.emails}</p>
        <p>{card.otherEmails}</p>

        <h2 className="text-xl font-bold mt-2">Working Days & Hours</h2>
        <div className="flex space-x-2 text-lg">
          {activeDays.map(({ day, status }, index) =>
            status === "active" ? (
              <span
                key={index}
                className="flex items-center justify-center text-green-500 bg-white rounded-full w-7 h-7"
              >
                {day}
              </span>
            ) : (
              <span
                key={index}
                className="flex items-center justify-center bg-green-300 text-green-500 rounded-full w-7 h-7"
              >
                {day}
              </span>
            )
          )}
        </div>
        <p className="mt-2">Mon-Fri: 7:00 PM - 8:00</p>
        <p>Sat-Sun: 7:00 PM - 8:00 AM</p>

        <h2 className="text-xl font-bold mt-2">Address</h2>
        <p>{card.companyAddress}</p>

        <h2 className="text-xl font-bold mt-2">Date of Birth</h2>
        <p>29th January 2024</p>
      </div>
    </div>
  );
};

export default ContactInfo;
