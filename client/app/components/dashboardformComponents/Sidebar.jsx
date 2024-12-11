'use client';
import React from 'react';

const Sidebar = ({ activeStep, handleStepClick, steps }) => {
  return (
    <div className="w-1/4 bg-[#F1F2F7] text-[#273240] p-6 rounded-l-lg font-sans overflow-hidden">
      <ul>
        {steps.map((step) => (
          <li
            key={step.id}
            className={`cursor-pointer p-4 mb-2 rounded-md flex items-center text-sm ${
              activeStep === step.id
                ? 'bg-[#707FDD] bg-opacity-20 text-[#00179F]'
                : 'bg-[#F1F2F7] hover:bg-[#707FDD] hover:bg-opacity-20'
            }`}
            onClick={() => handleStepClick(step.id)}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              {step.icon}
            </div>
            <span className="flex-1">{step.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;