'use client';
import React from 'react';

const Sidebar = ({ activeStep, handleStepClick, steps }) => {
  return (
    <div className="w-1/4 bg-[#F1F2F7] text-[#273240] p-6 rounded-l-lg font-sans h-full relative overflow-scroll">
      <ul
        className='flex flex-col items-start gap-4'
      >
        {steps.map((step) => (
          <li
            key={step.id}
            className={`cursor-pointer w-full gap-2 p-4 rounded-md  flex items-center text-sm ${
              activeStep === step.id
                ? 'bg-[#707FDD] bg-opacity-20 text-[#00179F]'
                : 'bg-[#F1F2F7] hover:bg-[#707FDD] hover:bg-opacity-20'
            }`}
            onClick={() => handleStepClick(step.id)}
          >
            <div className="flex items-center font-bold justify-center">
              {step.icon}
            </div>
            <p className="flex-1 truncate">{step.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;