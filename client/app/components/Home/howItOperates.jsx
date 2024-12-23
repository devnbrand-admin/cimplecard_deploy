import React from 'react';
import Image from 'next/image';
import phoneMockup from '../../assets/home/cardImg/iphone.png'; 
import callIcon from "../../assets/home/howit/callIcon.svg"
import whatsappIcon from "../../assets/home/howit/whatsappIcon.png"
import mailIcon from "../../assets/home/howit/mailIcon.png"
import broswerIcon from "../../assets/home/howit/browserIcon.png"
import bankIcon from "../../assets/home/howit/bankIcon.png"
import socailIcon from "../../assets/home/howit/socailIcon.png"
import supportIcon from "../../assets/home/howit/supportIcon.png"






const HowItOperates = () => {
  const features = [
    { title: 'CLICK TO CALL', description: 'Your customers will reach out to you by just clicking on your phone number.',icon:callIcon },
    { title: 'CLICK TO WHATSAPP', description: 'Your customers will reach out to you by just clicking on your phone number.' , icon:whatsappIcon},
    { title: 'CLICK TO EMAIL', description: 'Your customers will reach out to you by just clicking on your phone number.',icon:mailIcon  },
    { title: 'WEBSITE LINK', description: 'Your customers will reach out to you by just clicking on your phone number.', icon:broswerIcon },
  ];

  const featuresRight = [
    { title: 'CLICK TO MAP', description: 'Your customers will reach out to you by just clicking on your phone number.',icon:callIcon },
    { title: 'BANK DETAILS', description: 'Your customers will reach out to you by just clicking on your phone number.',icon: bankIcon },
    { title: 'SOCIAL LINKS', description: 'Your customers will reach out to you by just clicking on your phone number.',icon: socailIcon },
    { title: '24/7 SUPPORT', description: 'Your customers will reach out to you by just clicking on your phone number.',icon: supportIcon },
  ];

  return (
    <div className="text-center pt-10 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl  md:font-medium text-[#161973] mb-10">
        HOW IT <span className="font-bold">OPERATES</span>
      </h2>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
  {/* Features Left */}
  <div className="space-y-8 px-14 md:px-0 -mt-[120px] text-center lg:text-right w-full lg:w-1/4 order-2 lg:order-1">
    {features.map((feature, index) => (
      <div key={index} className="flex flex-col lg:flex-row items-center gap-4">
        <div className="text-[#161973]">
          <h4 className="text-lg font-bold">{feature.title}</h4>
          <p className="font-base text-sm text-center mt-2 text-[#161973]">{feature.description}</p>
        </div>
        <div className="hidden w-[60px] h-[55px] border-[3px] border-gray-300 bg-[#d5d6e1] rounded-full md:flex items-center justify-center shadow-md">
  <div className="w-[50px] h-[50px] bg-[#acb3e2] rounded-full flex items-center justify-center">
    <Image
      src={feature?.icon}
      alt="Phone Icon"
      className="w-[24px] h-[24px] object-contain"
      priority
    />
  </div>
</div>

      </div>
    ))}
  </div>

  {/* Center Image */}
  <div className="w-full lg:w-1/3 h-[600px] order-1 lg:order-2">
    <Image
      src={phoneMockup}
      alt="Phone Mockup"
      
      className="w-full h-full object-contain"
      priority
    />
  </div>

  {/* Features Right */}
<div className="space-y-8 px-14 md:px-0 -mt-[120px] text-center lg:text-left w-full lg:w-1/4 order-3">
    {featuresRight.map((feature, index) => (
      <div key={index} className="flex flex-col lg:flex-row items-center gap-4">
        <div className="hidden w-[60px] h-[55px] border-[3px] border-gray-300 bg-[#d5d6e1] rounded-full md:flex items-center justify-center shadow-md">
  <div className="w-[50px] h-[50px] bg-[#acb3e2] rounded-full flex items-center justify-center">
    <Image
      src={feature?.icon}
      alt="Phone Icon"
      className="w-[24px] h-[24px] object-contain"
      priority
    />
  </div>
</div>
<div className="text-[#161973]">
          <h4 className="text-lg font-bold">{feature.title}</h4>
          <p className="font-base text-sm  mt-2 text-center text-[#161973]">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default HowItOperates;
