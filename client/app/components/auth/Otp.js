import Image from 'next/image';
import React, { useState } from 'react';
import img from "../../assets/auth/otp/otp_image.png"
import side_img from "../../assets/auth/otp/otp_side_image.png"
import axios from '../api_resources/axios';
import { useRouter } from 'next/navigation';



const OtpVerification = ({
  formData,
  setIsLogin
}) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [serverError,setServerError] = useState(null)
  const [clientError,setClientError] = useState(null)

  const router = useRouter();


  const handleChange = (value, index) => {
    if (isNaN(value)) return; // allow only numeric input
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // limit input to 1 digit
    setOtp(newOtp);

    // focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit =async (e) => {
    if(clientError){
      setOtp(new Array(6).fill(''))

    }
    e.preventDefault();
    if(otp.length>=6){
      
      try {
        setClientError(null)
        setServerError(null)
        console.log({
          email:formData.email,
          username: formData.name,
          password:formData.password,
          otp:otp.join("")
        })
        const response = await axios.post("/api/user/verify-otp",{
          email:formData.email,
          username: formData.name,
          password:formData.password,
          otp:otp.join("")
        })
        if(response.status===201){
          setIsLogin(true)
        }
      } catch (error) {
        console.log(error)
        setServerError(JSON.stringify(error.response.data.message))
        
      }
    }else{
      setClientError("Enter your OPT completely")
    }
    console.log('OTP Submitted:', otp.join(''));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
        <div className="text-center">
          <Image src={img} alt="OTP" className="mx-auto w-[130px] mb-4" />
          <h1 className="text-4xl font-semibold mb-2">OTP Verification</h1>
          <p className="text-gray-600 mb-6 flex flex-col">
           <> Enter the verification code sent to</> <span className="font-medium">{formData?.email && formData?.email }</span>
          </p>
        </div>

        {/* OTP Inputs */}
        <form onSubmit={handleSubmit} className="text-center">
          <div className="flex justify-center mb-6">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength="1"
                className="mb-4 w-[70px] h-[70px]  mx-2 text-center border-[1px] border-black rounded-lg  text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
          {serverError && <p className='text-red-600 text-sm'>{serverError}</p>}
        <p className="  text-sm font-semibold text-gray-800 tracking-wide">
          Didn't you receive the OTP? <span className="text-indigo-600 cursor-pointer" onClick={handleSubmit}>Resend OTP</span>
        </p>
        <button
  type="submit"
  className="mt-10 px-[5rem] py-3 bg-gradient-to-r from-[#8D4DCC] to-[#6166CF] text-white font-medium rounded-2xl shadow-[0px_4px_10px_#8D4DCC] hover:shadow-[0px_6px_15px_#6166CF] focus:outline-none"
>
  Verify
</button>

        </form>

      </div>

      {/* Right Section */}
      <Image alt="bg-img" className="hidden lg:block w-1/2 bg-cover bg-center" src={side_img}/>
    </div>
  );
};

export default OtpVerification;
