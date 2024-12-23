import React from "react";

const About = ({ card }) => {
  return (
    <div
      className="relative h-[200vh] w-screen overflow-hidden"
      style={{ width: "100vw" }}
    >
      <img
        src="/Assets/MedicalAssets/maki_doctor.png"
        alt="Abstract 1"
        id="About"
        style={{ top: 0 }}
        className="absolute right-0 w-full opacity-90"
      />
      <img
        src="/Assets/MedicalAssets/Group.png"
        alt="Abstract 2"
        className="absolute top-1/4 left-0 w-1/3 opacity-100"
      />

      <div className="absolute z-8 flex flex-col">
        <div
          className=" text-center text-black m-4 text-start"
          style={{ color: "#0B8823" }}
        >
          <h1 className="text-3xl font-bold my-3">About Me</h1>
          <span className="mt-4 text-md">
            {card.aboutUs}
            <p className="font-semibold">{card.bio} </p>
            As a strong communicator and team player, Dr. Owusu works seamlessly
            with other healthcare professionals to ensure comprehensive and
            coordinated care. He regularly attends conferences and workshops to
            stay current with the latest developments in his field.
            <p className="font-semibold">
              In conclusion, Dr. Kwame Owusu is a highly experienced and skilled
              medical professional who provides exceptional care to his
              patients. His commitment to staying up-to-date with the latest
              medical research and technologies ensures that his patients
              receive the most effective and up-to-date treatments available.
            </p>
          </span>
        </div>
        <div className="flex flex-col items-center mt-20">
          <img
            src="/Assets/MedicalAssets/appointrment.png"
            className="w-72 h-72 h-1/3 m-8"
          />
          <div className="flex flex-col justify-end p-8">
            {/* book an appointemnt  */}
            <div
              className="rounded-xl my-2 flex h-24 bg-white hover:bg-gray-200"
              style={{ border: "4px solid #0B8823" }}
            >
              <img
                src="/Assets/MedicalAssets/tdesign_hospital.png"
                className="h-full"
              />
              <div className="flex flex-col m-auto">
                <p
                  className="text-2xl"
                  style={{ color: "#0B8823", fontWeight: 900 }}
                >
                  BOOK AN
                </p>
                <p
                  className="text-xl"
                  style={{ color: "#0B8823", fontWeight: 700 }}
                >
                  Appointment
                </p>
              </div>
            </div>
            <p style={{ color: "#54D06C" }} className="text-md py-3">
              Booking Hours:
            </p>
            <p
              className="text-xl"
              style={{ color: "#0B8823", fontWeight: 700 }}
            >
              Mon-Fri: 7:00 PM - 8:00 AM{" "}
            </p>
            <p
              className="text-xl"
              style={{ color: "#0B8823", fontWeight: 700 }}
            >
              Sat-Sun: 7:00 PM - 8:00 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
