import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputsRefs = useRef([]);

  useEffect(() => {
    if (inputsRefs.current[0]) {
      inputsRefs.current[0].focus(); // autofocus first input
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // check if all inputs are filled before submission
    if (newOtp.every((digit) => digit !== "")) {
      const combinedOtp = newOtp.join("");
      onOtpSubmit(combinedOtp);
    }

    // Move focus to the next input
    if (value && index < length - 1) {
      inputsRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputsRefs.current[index].focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(input) => (inputsRefs.current[index] = input)}
          type="text"
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="w-10 h-10 mx-1 text-center text-xl border rounded focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
};

export default OtpInput;
