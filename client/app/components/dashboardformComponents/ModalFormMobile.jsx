'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard } from '../../utils/cardCreationApi';
import "../../style/cardCreation.css"
import {BsTriangle, BsPerson, BsTelephone, BsLinkedin, BsPersonVideo, BsClockHistory, BsCartCheckFill, BsChat, BsUpload, BsEnvelopeAt, BsImages} from "react-icons/bs";

export default function ModalForm() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const [formData, setFormData] = useState({
    templateType: '',
    firstName: '',
    middleName: '',
    lastName: '',
    companyName: '',
    companyAddress: '',
    jobTitle: '',
    bio: '',
    languageSpoken: '',
    dateOfBirth: '',
    phoneNumber: '',
    phoneNumbers: '',
    otherPhoneNumber: '',
    emails: '',
    otherEmails: '',
    emergencyName: '',
    emergencyRelationship: '',
    emergencyNumber: '',
    emergencyEmail: '',
    uniqueUrl: '',
    companySocialMediaLink: '',
    instagramLink: '',
    personalSocialMediaLinks: {
        "facebook": "https://facebook.com/dummyprofile",
        "twitter": "https://twitter.com/dummyprofile",
        "linkedin": "https://linkedin.com/in/dummyprofile",
        "instagram": "https://instagram.com/dummyprofile"
      },
    githubLink: '',
    additionalLink: '',
    productDesc: '',
    testimonialName: '',
    testimonialRole: '',
    testimonialIndustry: '',
    testimonialMessage: '',
    businesshoursFrom: '',
    businesshoursTo: '',
    businessType: '',
    profileImageUrl: '',
    qrCodeUrl: 'Dummy data for field 2',
    aboutUs: 'Dummy data for field 3',
    instagramVideoLink: '',
    youtubeVideoLink: '',
  });

  const steps = [
    { id: 1, label: 'Choose Template', icon: <BsTriangle /> },
    { id: 2, label: 'Profile', icon: <BsPerson /> },
    { id: 3, label: 'Contact Details', icon: <BsTelephone /> },
    { id: 4, label: 'Social Media Links', icon: <BsLinkedin /> },
    { id: 5, label: 'Product / Services', icon: <BsCartCheckFill /> },
    { id: 6, label: 'Testimonials', icon: <BsPersonVideo /> },
    { id: 7, label: 'Post Links', icon: <BsUpload /> },
    { id: 8, label: 'Business Hours', icon: <BsClockHistory /> },
    { id: 9, label: 'Help', icon: <BsChat /> },
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  const handleGoBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleTemplateSelection = (template) => {
    setFormData((prev) => ({
      ...prev,
      templateType: template,
    }));
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setProfileImage(imageUrl);
        setFormData((prevFormData) => ({
          ...prevFormData,
          profileImageUrl: imageUrl,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save current step data to Redux
    dispatch(setStepData({ step: `step${activeStep}`, data: formData }));
  
    // Move to the next step
    if (activeStep < steps.length) {
      if (activeStep === 8) {
        return;
      }
      setActiveStep(activeStep + 1);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
  
    try {
      const response = await createCard(formData);
      console.log('Card saved successfully:', response);
      dispatch(setCardData(formData)); // Update Redux store
    } catch (error) {
      console.error('Failed to save card:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full h-full flex z-10 relative overflow-hidden">
  
          
        {activeStep === 1 && (
          <div className="bg-white w-full h-full flex z-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
              {/* Top SVG (fixed to the bottom edge, with a gap from other containers) */}
              <img 
                src="../../ModalMobileTop.svg" 
                alt="Top SVG" 
                className="w-full h-auto translate-y-[calc(-25%+1rem)]" 
              />
            </div>

            {/* Step SVG and Header Text Container */}
            <div className="absolute top-0 left-0 right-0 z-30 flex flex-col items-center justify-center">
              {/* Step SVG (new SVG) */}
              <img 
                src="../../ContactDetails.svg" 
                alt="Step SVG" 
                className="w-[56%] h-auto" 
              />
              {/* Header Text */}
              <h1 className="text-xl font-semibold text-[#707FDD]">
                {steps.find((step) => step.id === activeStep)?.label || 'Default Header'}
              </h1>
            </div>

            <div className="mt-20 bg-white top-10 w-full h-full flex relative overflow-hidden">
              {/* Left SVG */}
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileLeft.svg" alt="Left SVG" className="h-[56%] w-full" />
              </div>

              {/* Form Container */}
              <div className="relative flex-1 mx-auto max-w-[60%] flex items-start justify-center overflow-scroll h-[90%] z-10">
                <div className="w-full space-y-6 px-4 py-10 mt-[12rem]">
                  {/* First Row of Input Fields */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  {/* Second Row of Input Fields */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-l font-semibold text-[#707FDD]">Emergency Contact</h1>
                    <h2 className="text-xs font-semithin text-[#707FDD] text-center px-4">
                      Add your contact information and Emergency Contact
                    </h2>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 border-2 border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  {/* Second Row of Input Fields */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 border-2 border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="py-6 flex justify-between space-x-2">
                    {/* Go Back Button */}
                    <button
                      onClick={handleGoBack}
                      className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD]"
                    >
                      Go Back
                    </button>

                    {/* Save Button */}
                    <button 
                      onClick={handleSave}
                      className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              {/* Right SVG */}
              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileRight.svg" alt="Right SVG" className="h-[56%] w-full transform scale-x-[-1] transform scale-y-[-1]" />
              </div>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="bg-white w-full h-full flex z-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
              <img 
                src="../../ModalMobileTop.svg" 
                alt="Top SVG" 
                className="w-full h-auto translate-y-[calc(-25%+1rem)]" 
              />
            </div>

            <div className="absolute top-0 left-0 right-0 z-30 flex flex-col items-center justify-center">
              <img 
                src="../../ContactDetails.svg" 
                alt="Step SVG" 
                className="w-[56%] h-auto" 
              />
              <h1 className="text-xl font-semibold text-[#707FDD]">
                {steps.find((step) => step.id === activeStep)?.label || 'Default Header'}
              </h1>
            </div>

            <div className="mt-20 bg-white top-10 w-full h-full flex relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileLeft.svg" alt="Left SVG" className="h-[56%] w-full" />
              </div>

              <div className="relative flex-1 mx-auto max-w-[60%] flex items-start justify-center overflow-scroll h-[90%] z-10">
                <div className="w-full space-y-6 px-4 py-10 mt-[12rem]">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-l font-semibold text-[#707FDD]">Emergency Contact</h1>
                    <h2 className="text-xs font-semithin text-[#707FDD] text-center px-4">
                      Add your contact information and Emergency Contact
                    </h2>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 border-2 border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 border-2 border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="py-6 flex justify-between space-x-2">
                    <button
                      onClick={handleGoBack}
                      className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD]"
                    >
                      Go Back
                    </button>

                    <button 
                      onClick={handleSave}
                      className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileRight.svg" alt="Right SVG" className="h-[56%] w-full transform scale-x-[-1] transform scale-y-[-1]" />
              </div>
            </div>
          </div>
        )}


        {activeStep === 3 && (
          <div className="bg-white w-full h-full flex z-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
              <img 
                src="../../ModalMobileTop.svg" 
                alt="Top SVG" 
                className="w-full h-auto translate-y-[calc(-25%+1rem)]" 
              />
            </div>

            <div className="absolute top-0 left-0 right-0 z-30 flex flex-col items-center justify-center">
              <img 
                src="../../ContactDetails.svg" 
                alt="Step SVG" 
                className="w-[56%] h-auto" 
              />
              <h1 className="text-xl font-semibold text-[#707FDD]">
                {steps.find((step) => step.id === activeStep)?.label || 'Default Header'}
              </h1>
            </div>

            <div className="mt-20 bg-white top-10 w-full h-full flex relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileLeft.svg" alt="Left SVG" className="h-[56%] w-full" />
              </div>

              <div className="relative flex-1 mx-auto max-w-[60%] flex items-start justify-center overflow-scroll h-[90%] z-10">
                <div className="w-full space-y-6 px-4 py-10 mt-[12rem]">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-l font-semibold text-[#707FDD]">Emergency Contact</h1>
                    <h2 className="text-xs font-semithin text-[#707FDD] text-center px-4">
                      Add your contact information and Emergency Contact
                    </h2>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 border-2 border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 border-2 border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="py-6 flex justify-between space-x-2">
                    <button
                      onClick={handleGoBack}
                      className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD]"
                    >
                      Go Back
                    </button>

                    <button 
                      onClick={handleSave}
                      className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileRight.svg" alt="Right SVG" className="h-[56%] w-full transform scale-x-[-1] transform scale-y-[-1]" />
              </div>
            </div>
          </div>
        )}


        {activeStep === 4 && (
          <div className="bg-white w-full h-full flex z-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
              <img 
                src="../../ModalMobileTop.svg" 
                alt="Top SVG" 
                className="w-full h-auto translate-y-[calc(-25%+1rem)]" 
              />
            </div>

            <div className="absolute top-0 left-0 right-0 z-30 flex flex-col items-center justify-center">
              <img 
                src="../../SocialMediaLinks.svg" 
                alt="Step SVG" 
                className="w-[60%] h-auto" 
              />
              <h1 className="text-xl font-semibold text-[#707FDD]">
                {steps.find((step) => step.id === activeStep)?.label || 'Default Header'}
              </h1>
            </div>

            <div className="mt-20 bg-white top-10 w-full h-full flex relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileLeft.svg" alt="Left SVG" className="h-[56%] w-full" />
              </div>

              <div className="relative flex-1 mx-auto max-w-[60%] flex items-start justify-center overflow-scroll h-[90%] z-10">
                <div className="w-full space-y-6 px-4 py-10 mt-[12rem]">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Website/Portfolio URL"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="LinkedIn (Optional)"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Instagram (Optional)"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Twitter (Optional)"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="GitHub (Optional)"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Additional Link"
                        className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>


                  <div className="py-6 flex justify-between space-x-2">
                    <button
                      onClick={handleGoBack}
                      className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD]"
                    >
                      Go Back
                    </button>

                    <button 
                      onClick={handleSave}
                      className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileRight.svg" alt="Right SVG" className="h-[56%] w-full transform scale-x-[-1] transform scale-y-[-1]" />
              </div>
            </div>
          </div>
        )}
        
        {activeStep === 5 && (
          <div className="bg-white w-full h-full flex z-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
              <img 
                src="../../ModalMobileTop.svg" 
                alt="Top SVG" 
                className="w-full h-auto translate-y-[calc(-25%+1rem)]" 
              />
            </div>

            <div className="absolute top-4 left-0 right-0 z-30 flex flex-col items-center justify-center">
              <img 
                src="../../Product&Services.svg" 
                alt="Step SVG" 
                className="w-[50%] h-auto pb-4" 
              />
              <h1 className="text-xl font-semibold text-[#707FDD]">
                {steps.find((step) => step.id === activeStep)?.label || 'Default Header'}
              </h1>
            </div>

            <div className="mt-20 bg-white top-10 w-full h-full flex relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileLeft.svg" alt="Left SVG" className="h-[56%] w-full" />
              </div>

              <div className="relative flex-1 mx-auto max-w-[60%] flex items-start justify-center overflow-scroll h-[90%] z-10">
                <div className="w-full space-y-6 px-4 py-10 mt-[12rem]">
                  <div className="flex justify-center gap-4">
                    <h1 className='font-semibold text-[#707FDD]'>Choose What To Add</h1>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button className="bg-transparent text-sm text-[#707FDD] py-2 px-3 rounded-full border border-[#707FDD]">
                      Product
                    </button>
                    <button className="bg-transparent text-sm text-[#707FDD] py-1 px-2 rounded-full border border-[#707FDD]">
                      Service
                    </button>
                  </div>

                  <div
                    className="flex items-center justify-center"
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '100%',
                      height: '16rem', 
                      overflowY: 'scroll',
                      // padding: '20px',
                    }}
                  >
                    <div className="flex flex-col gap-2" style={{ width: '100%', maxWidth: '400px' }}>
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                          style={{
                            backgroundColor: '#F1F2FC',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '80px',
                            padding: '10px',
                            borderRadius: '8px',
                          }}
                        >
                          <div className="flex-1" style={{ maxWidth: '80%',  paddingBottom: '6px' }}>
                            <h1
                              className="text-[#787F89] text-sm mb-1"
                              style={{
                                fontSize: '10px',
                                textAlign: 'left',
                              }}
                            >
                              Name of the Product/Services
                            </h1>
                            <input
                              type="text"
                              placeholder="Description"
                              value={formData.productDesc}
                              onChange={(e) => setFormData({ ...formData, productDesc: e.target.value })}
                              className="p-1 text-sm border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                              style={{
                                width: '100%',
                                maxWidth: '320px',
                                display: 'block',
                                fontSize: '10px',
                                textAlign: 'left',
                              }}
                            />
                          </div>

                          <div
                            className="ml-8"
                            style={{
                              width: '4rem',
                              height: '4rem',
                              backgroundColor: '#707FDD',
                              borderRadius: '0.5rem',
                            }}
                          >
                            <label
                              htmlFor={`product-upload-${index}`}
                              className="w-full h-full flex items-center justify-center cursor-pointer"
                            >
                              <BsImages className="text-white text-2xl" />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleProductUpload(e, index)}
                                className="hidden"
                                id={`product-upload-${index}`}
                              />
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>


                  <div className="py-6 flex justify-between space-x-2">
                    <button
                      onClick={handleGoBack}
                      className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD]"
                    >
                      Go Back
                    </button>

                    <button 
                      onClick={handleSave}
                      className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileRight.svg" alt="Right SVG" className="h-[56%] w-full transform scale-x-[-1] transform scale-y-[-1]" />
              </div>
            </div>
          </div>
        )}
        

        {activeStep === 6 && (
          <div className="bg-white w-full h-full flex z-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
              <img 
                src="../../ModalMobileTop.svg" 
                alt="Top SVG" 
                className="w-full h-auto translate-y-[calc(-25%+1rem)]" 
              />
            </div>

            <div className="absolute top-4 left-0 right-0 z-30 flex flex-col items-center justify-center">
              <img 
                src="../../Testimonials.svg" 
                alt="Step SVG" 
                className="w-[56%] h-auto" 
              />
              <h1 className="text-xl font-semibold text-[#707FDD]">
                {steps.find((step) => step.id === activeStep)?.label || 'Default Header'}
              </h1>
            </div>

            <div className="mt-20 bg-white top-10 w-full h-full flex relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileLeft.svg" alt="Left SVG" className="h-[56%] w-full" />
              </div>

              <div className="relative flex-1 mx-auto max-w-[60%] flex items-start justify-center overflow-scroll h-[90%] z-10">
                <div className="w-full space-y-6 px-4 py-10 mt-[10rem]">
                  <div
                    className="flex mt-6 items-center justify-center"
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '100%',
                      height: '16rem', 
                      overflowY: 'scroll',
                      // padding: '20px',
                    }}
                  >
                    <div className="flex flex-col gap-2" style={{ width: '100%', maxWidth: '400px' }}>
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center"
                          style={{
                            backgroundColor: '#F1F2FC',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '80px',
                            // padding: '20px',
                            borderRadius: '8px',
                          }}
                        >
                          <div className="flex-1" style={{ maxWidth: '80%' }}>
                            <h1
                              className="text-[#787F89] text-sm mb-1"
                              style={{
                                fontSize: '10px',
                                textAlign: 'left',
                              }}
                            >
                              Name | Job Role | Industry
                            </h1>
                            <input
                              type="text"
                              placeholder="Testimonial Message"
                              className="p-1 text-sm border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                              style={{
                                width: '100%',
                                maxWidth: '320px',
                                display: 'block',
                                fontSize: '10px',
                                textAlign: 'left',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mt-4">
                    <div className="flex justify-center gap-4">
                      <h1 className='font-semibold text-[#707FDD]'>Add Testimonial</h1>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Name"
                          value={formData.testimonialName}
                          onChange={(e) => setFormData({ ...formData, testimonialName: e.target.value })}
                          className="w-full p-2 border border-[#707FDD] text-xs text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Job Role"
                          value={formData.testimonialRole}
                          onChange={(e) => setFormData({ ...formData, testimonialRole: e.target.value })}
                          className="w-full p-2 border border-[#707FDD] text-xs text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <select
                          className="w-full p-2 border border-[#707FDD] text-xs text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                          value={formData.testimonialIndustry}
                          onChange={(e) => setFormData({ ...formData, testimonialIndustry: e.target.value })}
                        >
                          <option value="" disabled>
                          Industry
                          </option>
                          <option value="Medical">Medical</option>
                          <option value="Astrology">Astrology</option>
                          <option value="Business">Business</option>
                          <option value="Sports">Sports</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Testimonial Message"
                          value={formData.testimonialMessage}
                          onChange={(e) => setFormData({ ...formData, testimonialMessage: e.target.value })}
                          className="w-full h-[80px] p-2 border border-[#707FDD] text-xs text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center gap-4">
                    <button className="py-2 px-4 rounded-full text-xs text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                      Add Testimonial
                    </button>
                    </div>
                  </div>


                  <div className="py-6 flex justify-between space-x-2">
                    <button
                      onClick={handleGoBack}
                      className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD]"
                    >
                      Go Back
                    </button>

                    <button 
                      onClick={handleSave}
                      className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
                <img src="../../ModalMobileRight.svg" alt="Right SVG" className="h-[56%] w-full transform scale-x-[-1] transform scale-y-[-1]" />
              </div>
            </div>
          </div>
        )}
          
      </div>
    </div>

  )
}  