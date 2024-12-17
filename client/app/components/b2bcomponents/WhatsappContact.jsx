'use client'
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const templateMessage = encodeURIComponent(
    `Hi! I found this interesting website: ${currentUrl}. Check it out!`
  );

  const handleSend = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    const formattedNumber = phoneNumber.startsWith("+91")
      ? phoneNumber
      : `+91${phoneNumber}`;
    const whatsAppLink = `https://wa.me/${formattedNumber}?text=${templateMessage}`;
    window.open(whatsAppLink, "_blank");
    setPhoneNumber("");
    setIsInputOpen(false);
  };

  const handleClear = () => {
    setIsInputOpen(false);
    setPhoneNumber("");
  };

  return (
    <div>
      <div className="fixed bottom-6 right-6 z-10">
        {!isInputOpen ? (
          <button
            className="p-4 rounded-full shadow-lg bg-[#37729D]  text-white hover:scale-105 transform transition-transform flex items-center gap-2"
            onClick={() => setIsInputOpen(true)}
          >
            <FaWhatsapp size={24} />
            <span className="hidden md:inline">Share via WhatsApp</span>
          </button>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 border">
            <input
              type="tel"
              placeholder="Enter phone number"
              className="border text-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength="15"  // Limit to prevent longer inputs
            />
            <div className="flex justify-between gap-2">
              <button
                className="bg-[#37729D] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                onClick={handleSend}
              >
                Send
              </button>
              <button
                className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                onClick={handleClear}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WhatsAppButton;
