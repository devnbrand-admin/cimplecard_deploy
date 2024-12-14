import React from 'react';
import Image from 'next/image';
import phoneMockup from '../../assets/home/cardImg/iphone.png'; // Replace with actual path

const HowItOperates = () => {
  const features = [
    { title: 'CLICK TO CALL', description: 'Your customers will reach out to you by just clicking on your phone number.' },
    { title: 'CLICK TO WHATSAPP', description: 'Your customers will reach out to you by just clicking on your phone number.' },
    { title: 'CLICK TO EMAIL', description: 'Your customers will reach out to you by just clicking on your phone number.' },
    { title: 'WEBSITE LINK', description: 'Your customers will reach out to you by just clicking on your phone number.' },
  ];

  const featuresRight = [
    { title: 'CLICK TO MAP', description: 'Your customers will reach out to you by just clicking on your phone number.' },
    { title: 'BANK DETAILS', description: 'Your customers will reach out to you by just clicking on your phone number.' },
    { title: 'SOCIAL LINKS', description: 'Your customers will reach out to you by just clicking on your phone number.' },
    { title: '24/7 SUPPORT', description: 'Your customers will reach out to you by just clicking on your phone number.' },
  ];

  return (
    <div className="text-center py-10 bg-white">
      {/* Title */}
      <h2 className="text-4xl font-medium text-[#161973] mb-10">
        HOW IT <span className="font-bold ">OPERATES</span>
      </h2>

      {/* Main Content */}
      <div className="flex justify-center items-center gap-8">
        {/* Left Features */}
        <div className="space-y-8 text-right w-1/4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className='text-[#161973]'>
                <h4 className="text-lg font-bold ">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
              <div className="w-[80px] h-12 border-[3px] bg-[#d5d6e1] rounded-full">
                <div className='bg-[#acb3e2]  rounded-full'></div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="w-1/3 h-[600px]">
          <Image
            src={phoneMockup}
            alt="Phone Mockup"
            className="w-full"
            priority
          />
        </div>

        {/* Right Features */}
        <div className="space-y-8 text-left w-1/4">
          {featuresRight.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 ">
              <div className="w-[80px] h-12 border-[3px] bg-[#d5d6e1] rounded-full">
                <div className='bg-[#acb3e2]  rounded-full'></div>
              </div>
              <div className='text-[#161973]'>
                <h4 className="text-lg font-bold ">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItOperates;
