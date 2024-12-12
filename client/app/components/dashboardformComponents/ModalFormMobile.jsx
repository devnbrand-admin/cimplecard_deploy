'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard } from '../../utils/cardCreationApi';
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
    
  
          <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
            {/* Top SVG (fixed to the bottom edge, with a gap from other containers) */}
            <img 
              src="../../ModalMobileTop.svg" alt="Top SVG" className="w-full h-auto translate-y-[calc(-50%+1rem)]" 
            />
          </div>
          
          <div className="bg-white top-10 w-full h-full flex relative overflow-hidden">
            {/* Left SVG */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[6rem]">
              <img src="../../ModalMobileLeft.svg" alt="Left SVG" className="h-[60%] w-full" />
            </div>

            {/* Form Container */}
            <div className="relative flex-1 mx-auto max-w-[60%] flex items-start justify-center overflow-y-auto h-full z-10">
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
                    <h1 className='text-l font-semibold text-[#707FDD]'>Emergency Contact</h1>
                    <h2 className='text-xs font-semithin text-[#707FDD] text-center px-4'>Add your contact information
                    and Emergency Contact</h2>
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
                    <div className="py-6 flex justify-end space-x-2">
                      <div className="text-white text-center text-4xl font-semibold py-6 px-6"
                        style={{
                            backgroundImage: `url('../../Underline.svg')`,
                            backgroundSize: 'cover',
                            // backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            top: 0,
                            left: 0,
                            width: '40%',
                            height: '6px',
                        }}>
                      </div>
                      {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
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
              <img src="../../ModalMobileRight.svg" alt="Right SVG" className="h-[60%] w-full transform scale-x-[-1] transform scale-y-[-1]" />
            </div>
          </div>
          
        </div>   
    </div>

  )
}  