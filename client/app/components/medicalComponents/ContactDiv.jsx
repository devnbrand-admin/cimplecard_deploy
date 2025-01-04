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
  console.log(card.emails)
  return (
    <div className="relative md:absolute top-0 text-center p-4 rounded-lg w-full">
      <div className="flex flex-col gap-2 items-center">
        <div>
          <h2 className="text-xl font-bold">{card?.phoneNumbers?.length > 1 ? 'Phone Numbers' : 'Phone Number'}</h2>
          {
            card.phoneNumbers.map((phoneNumber, index) => (
              <p key={index}>{phoneNumber}</p>
            ))
          }
        </div>



        <div>

          <h2 className="text-xl font-bold">{card?.email?.length > 1 ? 'Emails' : 'Email'}</h2>
          {
            card.emails.map((email, index) => (
              <p key={index}>{email}</p>
            ))
          }
        </div>


        <div className="space-y-2">

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
        </div>
        <p className="mt-2">
          Mon-Fri: {card.businesshoursFrom || "7:00 PM"} -{" "}
          {card.businesshoursTo || "8:00 PM"}
        </p>
        <p>Sat-Sun: 7:00 PM - 8:00 AM</p>

        <h2 className="text-xl font-bold mt-2">Address</h2>
        <p>{card.companyAddress || "N/A"}</p>

        <h2 className="text-xl font-bold mt-2">Date of Birth</h2>
        <p>{card.dateOfBirth || "N/A"}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
