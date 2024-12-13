import React, { useState } from "react";
import OtpInput from "../otp/otp-input";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    // Phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid number");
      return;
    }

    // Simulate API call
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successfully", otp);
  };

  return (
    <div>
      {showOtpInput ? (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      ) : (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Get OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default PhoneOtpForm;
