"use client"
import React from "react";
import { FaAddressCard } from "react-icons/fa";

function ContactCardButton() {
  const contactDetails = {
    fullName: "John Doe",
    role: "Chief Technology Officer",
    company: "Tech Solutions Inc.",
    email: "johndoe@example.com",
    phone: "+919876543210",
    address: "123 Tech Street, Silicon Valley, CA, USA",
    website: "https://www.techsolutions.com",
  };


  const downloadVCF = () => {
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactDetails.fullName}
ORG:${contactDetails.company}
TITLE:${contactDetails.role}
TEL;TYPE=CELL:${contactDetails.phone}
EMAIL:${contactDetails.email}
ADR;TYPE=WORK:;;${contactDetails.address}
URL:${contactDetails.website}
END:VCARD`;

    const blob = new Blob([vcfContent], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${contactDetails.fullName.replace(" ", "_")}.vcf`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div>

      <div className="fixed bottom-20 right-6 mb-4 z-10">
        <button
          className="flex items-center justify-center p-5 rounded-full shadow-lg 
            bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 
            text-white hover:scale-110 transform transition-transform duration-300 
            hover:ring-4 hover:ring-teal-500 hover:shadow-xl hover:shadow-teal-500/50"
          onClick={downloadVCF}
        >
          <FaAddressCard size={28} className="text-teal-400" />
        </button>
      </div>
    </div>
  );
}

export default ContactCardButton;
