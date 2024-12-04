'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { BsPerson, BsTelephone, BsLinkedin, BsPersonVideo, BsPencilSquare, BsClockHistory, BsCartCheckFill, BsChat} from "react-icons/bs";

export default function ModalForm() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, label: 'Profile', icon: <BsPerson /> },
    { id: 2, label: 'Contact Details', icon: <BsTelephone /> },
    { id: 3, label: 'Social Media Links', icon: <BsLinkedin /> },
    { id: 4, label: 'Product / Services', icon: <BsCartCheckFill /> },
    { id: 5, label: 'Testimonials', icon: <BsPersonVideo /> },
    { id: 6, label: 'Appointment Fields',icon: <BsPencilSquare /> },
    { id: 7, label: 'Business Hours', icon: <BsClockHistory />  },
    { id: 8, label: 'Help', icon: <BsChat />  },
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-7xl h-[80%] flex">
        <Sidebar activeStep={activeStep} handleStepClick={handleStepClick} steps={steps} />

        <div className="w-full px-6">
            <div className="mb-8 relative">
              <div
                  className="text-white text-center text-4xl font-semibold py-6 px-6"
                  style={{
                      backgroundImage: `url('../ModalHeader.svg')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'top',
                      backgroundRepeat: 'no-repeat',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100px',
                  }}
              >
                  {steps.find((step) => step.id === activeStep)?.label}
              </div>
            </div>

          {activeStep === 1 && (
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Industry</label>
                  <input
                    type="text"
                    placeholder="Select Industry"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Service Type</label>
                  <input
                    type="text"
                    placeholder="Select Service Type"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <input
                    type="text"
                    placeholder="Enter Role"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Service Cost Range</label>
                  <input
                    type="text"
                    placeholder="Enter Cost Range"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Work Address</label>
                  <input
                    type="text"
                    placeholder="Enter Work Address"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Availability</label>
                  <input
                    type="text"
                    placeholder="Select Availability"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Product Type</label>
                  <input
                    type="text"
                    placeholder="Enter Product Type"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Cost</label>
                  <input
                    type="text"
                    placeholder="Enter Product Cost"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Product Name</label>
                  <input
                    type="text"
                    placeholder="Enter Product Name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Availability</label>
                  <input
                    type="text"
                    placeholder="Select Availability"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end space-x-2">
            <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
              Preview Card
            </button>
            <button className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
