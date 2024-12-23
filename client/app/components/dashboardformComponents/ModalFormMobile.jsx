'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard } from '../../utils/cardCreationApi';
import "../../style/cardCreation.css"
import { BsTriangle, BsPerson, BsTelephone, BsLinkedin, BsPersonVideo, BsClockHistory, BsCartCheckFill, BsChat, BsUpload, BsEnvelopeAt, BsImages } from "react-icons/bs";
import Image from 'next/image';

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
    // personalSocialMediaLinks: {
    //     "facebook": "https://facebook.com/dummyprofile",
    //     "twitter": "https://twitter.com/dummyprofile",
    //     "linkedin": "https://linkedin.com/in/dummyprofile",
    //     "instagram": "https://instagram.com/dummyprofile"
    //   },
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
    if (activeStep < Object.keys(steps)?.length) {
      if (activeStep === 9) {
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

  // console.log(activeStep)

  const steps = {
    1: {
      id: 1, label: 'Choose Template', icon: <BsTriangle />, component: <>
        <>
          <div className="w-full my-2 space-y-6">
            <div className="grid grid-cols-1 gap-2 mt-4">

              {/* Card 1 */}
              <div className="w-full sm:w-80 mx-auto aspect-w-1 aspect-h-1">
                <a href="https://example.com/template1" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white shadow-lg rounded-xl">
                    <img
                      alt="Cover"
                      className="object-cover rounded-xl w-full h-32"
                      src="../../template1cover.png"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-md">Medical</h4>
                      <p className="text-gray-500 text-xs italic">“Leave a Lasting Impression – Your Medical Card, Your Professional Identity!"</p>
                    </div>
                  </div>
                </a>
                <div className="py-2 px-4 flex space-x-2 mt-2">
                  <button
                    onClick={() => handleTemplateSelection('Medical')}
                    className={`py-2 px-4 rounded-full text-xs text-[#707FDD] ${formData.templateType === 'Medical' ? 'bg-[#707FDD] text-white' : 'bg-transparent border-2 border-[#707FDD] text-[#707FDD]'}`}
                  >
                    {formData.templateType === 'Medical' ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full sm:w-80 mx-auto aspect-w-1 aspect-h-1">
                <a href="https://example.com/Astrologer" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white shadow-lg rounded-xl">
                    <img
                      alt="Cover"
                      className="object-cover rounded-xl w-full h-32"
                      src="../../template2cover.png"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-md">Astrologer</h4>
                      <p className="text-gray-500 text-xs italic">“Chart Your Path to Success – Your Astrological Card, Your Cosmic Identity!“</p>
                    </div>
                  </div>
                </a>
                <div className="py-2 px-4 flex space-x-2 mt-2">
                  <button
                    onClick={() => handleTemplateSelection('Astrologer')}
                    className={`py-2 px-4 rounded-full text-xs text-[#707FDD] ${formData.templateType === 'Astrologer' ? 'bg-[#707FDD] text-white' : 'bg-transparent border-2 border-[#707FDD] text-[#707FDD]'}`}
                  >
                    {formData.templateType === 'Astrologer' ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full sm:w-80 mx-auto aspect-w-1 aspect-h-1">
                <a href="https://example.com/B2B Business" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white shadow-lg rounded-xl">
                    <img
                      alt="Cover"
                      className="object-cover rounded-xl w-full h-32"
                      src="../../template3cover.png"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-md">B2B Business</h4>
                      <p className="text-gray-500 italic text-xs">"Build Connections That Matter – Your Business Card, Your Gateway to Partnerships!"</p>
                    </div>
                  </div>
                </a>
                <div className="py-2 px-4 flex space-x-2 mt-2">
                  <button
                    onClick={() => handleTemplateSelection('B2B Business')}
                    className={`py-2 px-4 rounded-full text-xs text-[#707FDD] ${formData.templateType === 'B2B Business' ? 'bg-[#707FDD] text-white' : 'bg-transparent border-2 border-[#707FDD] text-[#707FDD]'}`}
                  >
                    {formData.templateType === 'B2B Business' ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-full sm:w-80 mx-auto aspect-w-1 aspect-h-1">
                <a href="https://example.com/Lawyer" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white shadow-lg rounded-xl">
                    <img
                      alt="Cover"
                      className="object-cover rounded-xl w-full h-32"
                      src="../../template4cover.png"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-md">Lawyer</h4>
                      <p className="text-gray-500 text-xs italic">"Make Your Mark in Justice – Your Legal Card, Your Professional Statement!"</p>
                    </div>
                  </div>
                </a>
                <div className="py-2 px-4 flex space-x-2 mt-2">
                  <button
                    onClick={() => handleTemplateSelection('Lawyer')}
                    className={`py-2 px-4 rounded-full text-xs text-[#707FDD] ${formData.templateType === 'Lawyer' ? 'bg-[#707FDD] text-white' : 'bg-transparent border-2 border-[#707FDD] text-[#707FDD]'}`}
                  >
                    {formData.templateType === 'Lawyer' ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="py-6 flex justify-end space-x-2">

              {/* Save Button */}
              <button
                onClick={handleSave}
                className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:transform active:scale-110">
                Save
              </button>
            </div>
          </div>
        </>
      </>,
      imageUrl: '../../CimpleCardLogo.svg'
    },
    2: {
      id: 2, label: 'Profile', icon: <BsPerson />, component: <>
        <div className="w-full my-2 space-y-2 flex flex-col justify-around h-full">
          <div className='my-2 space-y-2 '>
            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Other Name"
                  className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
              </div>
            </div>


            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Company Address"
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Job Role"
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
                <select
                  className=" border flex-1 text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                  // value={formData.languageSpoken}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      languageSpoken: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Hobbies
                  </option>
                  <option value="English">Dance</option>
                  <option value="Hindi">Signing</option>
                  <option value="Bengali">talking</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <textarea
                  cols={10}
                  rows={5}
                  type="text"
                  placeholder="Write a brief about yourself."
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
              </div>
            </div>


            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <select
                  className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                  value={formData.languageSpoken}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      languageSpoken: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Language Spoken
                  </option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Telegu">Telegu</option>
                </select>
              </div>
            </div>
          </div>


          <div className="py-[0] flex justify-between space-x-2">
            <button
              onClick={handleGoBack}
              className="bg-transparent text-[#707FDD] truncate py-2 px-4 rounded-md border-2 border-[#707FDD] transform transition-transform duration-200 ease-out active:transform active:scale-110"
            >
              Go Back
            </button>

            <button
              onClick={handleSave}
              className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out  active:transform active:scale-110">
              Save
            </button>
          </div>
        </div>
      </>,
      imageUrl: '../../ContactDetails.svg'
    },
    3: {
      id: 3, label: 'Contact Details', icon: <BsTelephone />, component: <>
        <div className="w-full space-y-6">
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
              className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD] transform transition-transform duration-200 ease-out active:transform active:scale-110"
            >
              Go Back
            </button>

            <button
              onClick={handleSave}
              className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:transform active:scale-110">
              Save
            </button>
          </div>
        </div>
      </>,
      imageUrl: '../../ContactDetails.svg'
    },
    4: {
      id: 4, label: 'Social Media Links', icon: <BsLinkedin />, component: <>
        <div className="w-full space-y-6 ">
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
              className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD] transform transition-transform duration-200 ease-out active:transform active:scale-110"
            >
              Go Back
            </button>

            <button
              onClick={handleSave}
              className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:transform active:scale-110">
              Save
            </button>
          </div>
        </div>
      </>,
      imageUrl: '../../SocialMediaLinks.svg'
    },
    5: {
      id: 5, label: 'Product / Services', icon: <BsCartCheckFill />, component: <>
        <div className="w-full space-y-6  ">
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
                  <div className="flex-1" style={{ maxWidth: '80%', paddingBottom: '6px' }}>
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
              className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD] transform transition-transform duration-200 ease-out active:transform active:scale-110"
            >
              Go Back
            </button>

            <button
              onClick={handleSave}
              className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:transform active:scale-110">
              Save
            </button>
          </div>
        </div>
      </>,
      imageUrl: '../../Product&Services.svg'
    },
    6: {
      id: 6, label: 'Testimonials', icon: <BsPersonVideo />, component: <>
        <div className="w-full space-y-6">
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
              className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out  active:transform active:scale-110">
              Save
            </button>
          </div>
        </div>
      </>,
      imageUrl: '../../Testimonials.svg'
    },
    7: {
      id: 7, label: 'Post Links', icon: <BsUpload />, component: <>
        <div className="w-full space-y-6">

          <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-sm font-semibold text-[#707FDD] text-center px-4">
              Add your Working Hours during Weekdays
            </h2>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-[#787F89] mb-1">From</label>
              <input
                type="time"
                placeholder="From"
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-[#787F89] mb-1">To</label>
              <input
                type="time"
                placeholder="To"
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Type"
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4 pb-10">
            <button
              // onClick={handleSave}
              className="py-2 px-4 rounded-full text-xs text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out  active:transform active:scale-110">                    Save Timings
            </button>
          </div>

          <div className="py-6 flex justify-between space-x-2">
            <button
              onClick={handleGoBack}
              className="bg-transparent text-[#707FDD] py-2 px-4 rounded-md border-2 border-[#707FDD] transform transition-transform duration-200 ease-out  active:transform active:scale-110"
            >
              Go Back
            </button>

            <button
              onClick={handleSave}
              className="py-2 px-4 rounded-md text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out  active:transform active:scale-110">
              Save
            </button>
          </div>
        </div>
      </>,
      imageUrl: '../../BusinessHours.svg'
    },
    8: { id: 8, label: 'Gallery', icon: <BsImages />, component: <></>, imageUrl: '../../BusinessHours.svg' },
    9: { id: 9, label: 'Business Hours', icon: <BsClockHistory />, component: <></>, imageUrl: '../../BusinessHours.svg' },
    10: { id: 10, label: 'Help', icon: <BsChat />, component: <></>, imageUrl: '../../BusinessHours.svg' },
  };
  return (
    <>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full h-full flex flex-col gap-5 z-10 relative">

          {/* header */}
          <div className='z-20 sticky'>
            {/* Top SVG (fixed to the bottom edge, with a gap from other containers) */}
            <Image
              className='absolute right-0 left-0 scale-150 translate-y-[-5%] md:translate-y-[-20%] transition-transform duration-300'
              fill
              src={'../../ModalMobileTop.svg'}
            />

            {/* Step SVG and Header Text Container */}
            <div className=" sticky left-0 right-0 top-2 flex flex-col items-center justify-center">
              {/* Step SVG (new SVG) */}
              <img
                src={steps[activeStep]?.imageUrl}
                alt={steps[activeStep]?.label}
                className="w-[40%] h-auto mb-4 md:w-[35%] lg:w-[30%] transition-all duration-300"
              />
              {/* Header Text */}
              <h1 className="text-xl font-semibold text-[#707FDD] text-center px-4">
                {steps[activeStep]?.label}
                {/* {steps.find((step) => step.id === activeStep)?.label || 'Default Header'} */}
              </h1>
            </div>
          </div>

          {/* content */}
          <div className=" bg-white top-10 w-full h-full flex relative overflow-hidden">
            <div className="absolute -left-[8%] top-0 bottom-0 flex items-center justify-center w-[6rem]">
              <img src="../../ModalMobileLeft.svg" alt="Left SVG" className="h-[86%] w-full" />
            </div>

            <div className="relative flex-1 mx-auto max-w-[60%] flex items-start justify-center overflow-scroll h-[90%] z-10">

              {steps[activeStep]?.component}
            </div>

            <div className="absolute -right-[8%] top-0 bottom-0 flex items-center justify-center w-[6rem]">
              <img src="../../ModalMobileRight.svg" alt="Right SVG" className="h-[86%] w-full scale-x-[-1] transform scale-y-[-1]" />
            </div>
          </div>

        </div>
      </div>
    </>

  )
}  