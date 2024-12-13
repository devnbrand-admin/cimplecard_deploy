import { Widgets } from "@mui/icons-material";
import React from "react";

const Services = ({ card }) => {
  const services = [
    { name: "Medical Examinations", icon: "search-icon.png" },
    { name: "Diagnosis and Treatment", icon: "diagnosis-icon.png" },
    { name: "Prescription Medication", icon: "prescription-icon.png" },
    { name: "Surgery and Procedures", icon: "surgery-icon.png" },
    { name: "Health Education and Counseling", icon: "education-icon.png" },
    { name: "Immunizations and Vaccinations", icon: "vaccines-icon.png" },
    { name: "Lab Tests and Diagnostic Imaging", icon: "lab-tests-icon.png" },
    { name: "Pain Management", icon: "pain-management-icon.png" },
    { name: "Maternity and Childcare Services", icon: "maternity-icon.png" },
    { name: "Emergency Care", icon: "emergency-icon.png" },
  ];
  return (
    <div
      style={{
        backgroundImage: `url('/Assets/MedicalAssets/banner2.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full"
    >
      <div className="relative" style={{ height: "180vh" }}>
        <div className="absolute rounded-lg w-1/2 right-0 top-1/4">
          <h2 className="text-white text-7xl font-bold mb-6" id="Services">
            My Services
          </h2>

          <ul className="text-white space-y-4 ms-3">
            {services.map((item, i) => (
              <li key={i} className="flex items-center font-semibold text-2xl">
                <img
                  src="/path-to-your-icons/search-icon.png"
                  alt="search"
                  className="w-5 h-5 mr-3"
                />
                {item.name}
              </li>
            ))}
          </ul>

          <button className="mt-6 bg-white text-green-500 px-6 py-2 rounded-full font-semibold">
            Book an Appointment
          </button>
        </div>
        <div
          className="bg-white w-1/3 absolute h-fit w-fit rounded-full p-3"
          style={{ bottom: 20, left: 100 }}
        >
          <div
            className="rounded-full p-3"
            style={{ backgroundColor: "#F1F2FC" }}
          >
            <img
              src={card.profileImageUrl}
              alt="doctor img"
              className="rounded-full"
              style={{ height: "70vh", width: "70vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
