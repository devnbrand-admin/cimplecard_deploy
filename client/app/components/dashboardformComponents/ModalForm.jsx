'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard } from '../../utils/cardCreationApi';
import Sidebar from './Sidebar';
import { BsPerson, BsTelephone, BsLinkedin, BsPersonVideo, BsPencilSquare, BsClockHistory, BsCartCheckFill, BsChat, BsCamera, BsEnvelopeAt } from "react-icons/bs";

export default function ModalForm() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    companyName: '',
    companyAddress: '',
    jobRole: '',
    aboutMe: '',
    languageSpoken: '',
    dateofbirth: '',
    phoneNumber: '',
    phoneNumbers: '',
  });

  const steps = [
    { id: 1, label: 'Profile', icon: <BsPerson /> },
    { id: 2, label: 'Contact Details', icon: <BsTelephone /> },
    { id: 3, label: 'Social Media Links', icon: <BsLinkedin /> },
    { id: 4, label: 'Product / Services', icon: <BsCartCheckFill /> },
    { id: 5, label: 'Testimonials', icon: <BsPersonVideo /> },
    { id: 6, label: 'Business Hours', icon: <BsClockHistory /> },
    { id: 7, label: 'Help', icon: <BsChat /> },
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
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
      <div className="bg-white rounded-lg w-full max-w-7xl h-[80%] flex">
        <Sidebar activeStep={activeStep} handleStepClick={handleStepClick} steps={steps} />

        <div className="w-full px-6 overflow-hidden">
            <div className="mb-4 relative">
              <div
                  className="text-white text-center text-4xl font-semibold py-6 px-6"
                  style={{
                      backgroundImage: `url('../../ModalHeader.svg')`,
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
              <div>
                <div className="relative py-2">
                  <div
                    className="w-full"
                    style={{
                      backgroundColor: '#707FDD',
                      opacity: '20%',
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                      height: '160px',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                    }}
                  >
                    <div
                      className="mt-10 rounded-full bg-[#707FDD] bg-opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden cursor-pointer"
                      style={{ zIndex: 2 }}
                    >
                      <label htmlFor="profile-upload" className="w-full h-full flex items-center justify-center">
                        <img
                          src="../../ProfileAvatar.svg"
                          alt="Upload Icon"
                          className="w-100 h-100"
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleProfileUpload}
                          className="hidden"
                          id="profile-upload"
                        />
                      </label>
                    </div>

                  </div>

                  
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[40px]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleCoverUpload}
                      className="hidden"
                      id="cover-upload"
                    />
                    <label htmlFor="cover-upload" className="text-white cursor-pointer bg-blue-500 px-4 py-2 rounded-md">
                      Upload Cover Banner
                    </label>
                  </div> */}

                  <div className="space-y-4 mt-52">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Middle Name"
                          value={formData.middleName}
                          onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Company's Name"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Company's Address"
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Job Role"
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Write briefly about yourself"
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <select
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        >
                          <option value="" disabled>
                            Language Spoken
                          </option>
                          <option value="English">English</option>
                          <option value="Spanish">Hindi</option>
                          <option value="French">Bengali</option>
                          <option value="German">Marathi</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Date of Birth"
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="py-6 flex justify-end space-x-2">
                      <div className="text-white text-center text-4xl font-semibold py-6 px-6"
                        style={{
                            backgroundImage: `url('../../Underline.svg')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            top: 0,
                            left: 0,
                            width: '70%',
                            height: '10px',
                        }}>
                      </div>
                      {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                      <button 
                        onClick={handleSave}
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div>
                <div
                  className="py-2"
                  style={{
                    backgroundImage: `url('../../ContactDetails.svg')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%', 
                    height: 'auto', 
                    minHeight: '230px',
                  }}
                ></div>

                <div className="space-y-4 mt-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Other Number"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Other Number"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Other Email Address"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <h1 className='text-2xl font-semibold text-[#707FDD]'>Emergency Contact Details</h1>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Relationship"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>
                    <div className="py-6 flex justify-end space-x-2">
                      <div className="text-white text-center text-4xl font-semibold py-6 px-6"
                        style={{
                            backgroundImage: `url('../../Underline.svg')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            top: 0,
                            left: 0,
                            width: '70%',
                            height: '10px',
                        }}>
                      </div>
                      {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                      <button 
                        onClick={handleSave}
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                        Save Changes
                      </button>
                    </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div>
                <div
                  className="py-2"
                  style={{
                    backgroundImage: `url('../../SocialMediaLinks.svg')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%', 
                    height: 'auto', 
                    minHeight: '300px',
                  }}
                ></div>

                <div className="space-y-6 mt-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Website/Portfolio URL"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="LinkedIn (Optional)"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Instagram (Optional)"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Twitter (Optional)"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="GitHub (Optional)"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Additional Link"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>
                    <div className="py-6 flex justify-end space-x-2">
                      <div className="text-white text-center text-4xl font-semibold py-6 px-6"
                        style={{
                            backgroundImage: `url('../../Underline.svg')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            top: 0,
                            left: 0,
                            width: '70%',
                            height: '10px',
                        }}>
                      </div>
                      {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                      <button className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                        Save Changes
                      </button>
                    </div>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div>
                <div
                  className="py-2"
                  style={{
                    backgroundImage: `url('../../Product&Services.svg')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%', 
                    height: 'auto', 
                    minHeight: '230px',
                  }}
                ></div>

                <div className="space-y-4 mt-4">
                  <div className="flex justify-center gap-4">
                    <h1 className='text-2xl font-semibold text-[#707FDD]'>Choose What To Add</h1>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                      Product
                    </button>
                    <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                      Service
                    </button>
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '100%',
                      height: '8rem', 
                      overflowY: 'scroll',
                      padding: '20px',
                    }}
                  >
                    <div className="flex flex-col gap-2" style={{ width: '100%', maxWidth: '1080px' }}>
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
                            height: '120px',
                            padding: '20px',
                            borderRadius: '8px',
                          }}
                        >
                          <div className="flex-1" style={{ maxWidth: '80%' }}>
                            <h1
                              className="text-[#787F89] text-sm mb-1"
                              style={{
                                fontSize: '14px',
                                textAlign: 'left',
                              }}
                            >
                              Name of the Product/Services
                            </h1>
                            <input
                              type="text"
                              placeholder="Description of the Product/Services"
                              className="p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                              style={{
                                width: '100%',
                                maxWidth: '1080px',
                                display: 'block',
                              }}
                            />
                          </div>

                          <div
                            className="ml-8"
                            style={{
                              width: '7rem',
                              height: '6rem',
                              backgroundColor: '#707FDD',
                              borderRadius: '0.5rem',
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  

                  <div className="py-6 flex justify-end space-x-2">
                      <div className="text-white text-center text-4xl font-semibold py-6 px-6"
                        style={{
                            backgroundImage: `url('../../Underline.svg')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            top: 0,
                            left: 0,
                            width: '70%',
                            height: '10px',
                        }}>
                      </div>
                      {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                      <button className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                        Save Changes
                      </button>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 5 && (
              <div>
                <div
                  className="flex mt-6 items-center justify-center"
                  style={{
                    backgroundColor: '#FFFFFF',
                    width: '100%',
                    height: '8rem', 
                    overflowY: 'scroll',
                    padding: '20px',
                  }}
                >
                  <div className="flex flex-col gap-2" style={{ width: '100%', maxWidth: '1080px' }}>
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
                          height: '120px',
                          padding: '20px',
                          borderRadius: '8px',
                        }}
                      >
                        <div className="flex-1" style={{ maxWidth: '80%' }}>
                          <h1
                            className="text-[#787F89] text-sm mb-1"
                            style={{
                              fontSize: '14px',
                              textAlign: 'left',
                            }}
                          >
                            Name | Job Role | Industry
                          </h1>
                          <input
                            type="text"
                            placeholder="Testimonial Message"
                            className="p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                            style={{
                              width: '100%',
                              maxWidth: '1080px',
                              display: 'block',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>




                <div className="space-y-4 mt-4">
                  <div className="flex justify-center gap-4">
                    <h1 className='text-2xl font-semibold text-[#707FDD]'>Add Testimonial</h1>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Job Role"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <select
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
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
                        className="w-full h-[120px] p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                  <button className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                    Add Testimonial
                  </button>
                  </div>
                    <div className="py-6 flex justify-end space-x-2">
                      <div className="text-white text-center text-4xl font-semibold py-6 px-6"
                        style={{
                            backgroundImage: `url('../../Underline.svg')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            top: 0,
                            left: 0,
                            width: '70%',
                            height: '10px',
                        }}>
                      </div>
                      {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                      <button className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                        Save Changes
                      </button>
                    </div>
                </div>
              </div>
            )}

            {activeStep === 6 && (
              <div>
                <div
                  className="py-2"
                  style={{
                    backgroundImage: `url('../../BusinessHours.svg')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%', 
                    height: 'auto', 
                    minHeight: '200px',
                  }}
                ></div>

                <div className="space-y-6 mt-4">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm text-[#787F89] mb-1">From</label>
                      <input
                        type="time"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-[#787F89] mb-1">To</label>
                      <input
                        type="time"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-opacity-0 text-[#787F89] mb-1">Type</label>
                      <input
                        type="text"
                        placeholder="Type"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-4 pb-10">
                  <button className="py-2 px-4 rounded-full text-sm text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                    Save Timings
                  </button>
                  </div>
                    <div className="py-6 flex justify-end space-x-2">
                      <div className="text-white text-center text-4xl font-semibold py-6 px-6"
                        style={{
                            backgroundImage: `url('../../Underline.svg')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            top: 0,
                            left: 0,
                            width: '70%',
                            height: '10px',
                        }}>
                      </div>
                      {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                      <button 
                        onClick={handleCreate}
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                        Create Card
                      </button>
                    </div>
                </div>
              </div>
            )}

            {activeStep === 7 && (
              <div>
                <div
                  className="py-2"
                  style={{
                    backgroundImage: `url('../../Help.svg')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%', 
                    height: 'auto', 
                    minHeight: '230px',
                  }}
                ></div>

                <div className="space-y-4 mt-4">
                  <div className="flex justify-center gap-4 mt-10">
                    <div className="w-4/5">
                      <input
                        type="text"
                        placeholder="Kindly type your question Here"
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <h1 className='text-l font-semibold text-[#707FDD]'>Or</h1>
                  </div>
                  <div className="flex justify-center gap-4">
                    <button className="flex items-center py-2 px-4 rounded-full text-white bg-[#707FDD] space-x-2">
                      <span>Send Us a Mail</span> 
                      <BsEnvelopeAt />
                    </button>

                    <button className="flex items-center bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD] space-x-2">
                      <span>Give Us a Call</span>
                      <BsTelephone />
                    </button>

                  </div>
                </div>
              </div>
            )}

            

          {/* <div className="mt-8 flex justify-end space-x-2">
                <div className="text-white text-center text-4xl font-semibold py-6 px-6"
                  style={{
                      backgroundImage: `url('../../Underline.svg')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'left',
                      backgroundRepeat: 'no-repeat',
                      top: 0,
                      left: 0,
                      width: '70%',
                      height: '10px',
                  }}>
                </div>
            <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
              Preview Card
            </button>
            <button className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
              Save Changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
