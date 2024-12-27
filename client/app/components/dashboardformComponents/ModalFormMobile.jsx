'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard } from '../../utils/cardCreationApi';
import "../../style/cardCreation.css"
import { BsTriangle, BsPerson, BsTelephone, BsLinkedin, BsPersonVideo, BsClockHistory, BsCartCheckFill, BsChat, BsUpload, BsEnvelopeAt, BsImages } from "react-icons/bs";
import Image from 'next/image';
import { TestimonialsSection } from './TestimonialSection';

export default function ModalForm() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const [formData, setFormData] = useState({
    // Personal information
    firstName: "",
    middleName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    location: "",
    profileImageUrl: "",
    headerImageUrl: "",
    templateType: "",
    cardName: "",
    qrCodeUrl: "",
    aboutUs: "",
    companyAddress: "",
    dateOfBirth: "",
    bio: "",
    gridType: "",
    languageSpoken: "",
    additionalLink: "",
    emails: [],
    phoneNumbers: [],
    otherEmails: "",
    otherPhoneNumber: "",
    phoneNumber: "",

    // Emergency contact information
    emergencyName: "",
    emergencyRelationship: "",
    emergencyNumber: "",
    emergencyEmail: "",

    // Social media links
    SocialMediaLink: [],
    companySocialMediaLink: [],

    // Gallery and media
    gallery: [],
    instagramPost: [],
    instagramReel: [],
    youtubeVideoLink: [],

    // Testimonials
    testimonials: [],

    // Services
    services: [],

    // Business hours
    businessHours: [
      {
        id: 1,
        type: "",
        from: "",
        to: "",
        cardId: "",
      },
    ],
  });

  const [testimonials, setTestimonials] = useState([
    {
      name: "Alice Johnson",
      designation: "CEO",
      description: "John is a great developer, helped us with our project!",
      imageUrl: "https://example.com/testimonial1.jpg",
    },
  ]);

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

  const handleFileUpload = (event, setter) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpload = (event) => handleFileUpload(event, setProfileImage);
  const handleCoverUpload = (event) => handleFileUpload(event, setCoverImage);
  const handleProductUpload = (event) => handleFileUpload(event, setProfileImage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(setStepData({ step: `step${activeStep}`, data: formData }));
    if (activeStep < Object.keys(steps).length && activeStep !== 9) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await createCard(formData);
      console.log('Card saved successfully:', response);
      dispatch(setCardData(formData));
    } catch (error) {
      console.error('Failed to save card:', error);
    }
  };

  const renderTemplateCard = (template, index) => (
    <div key={index} className="w-full sm:w-80 mx-auto aspect-w-1 aspect-h-1">
      <a href={`https://example.com/${template.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
        <div className="bg-white shadow-lg rounded-xl">
          <img
            alt="Cover"
            className="object-cover rounded-xl w-full h-32"
            src={`../../template${index + 1}cover.png`}
          />
          <div className="p-4">
            <h4 className="font-semibold text-md">{template}</h4>
            <p className="text-gray-500 text-xs italic">{`"${template} description"`}</p>
          </div>
        </div>
      </a>
      <div className="py-2 px-4 flex space-x-2 mt-2">
        <FormButton
          onClick={() => handleTemplateSelection(template)}
          variant={formData.templateType === template ? 'primary' : 'secondary'}
        >
          {formData.templateType === template ? 'Selected' : 'Select'}
        </FormButton>
      </div>
    </div>
  );

  const steps = {
    1: {
      id: 1,
      label: 'Choose Template',
      icon: <BsTriangle />,
      component: (
        <div className="w-full my-2 space-y-6">
          <div className="grid grid-cols-1 gap-2 mt-4">
            {['Medical', 'Astrologer', 'B2B Business', 'Lawyer'].map((template, index) =>
              renderTemplateCard(template, index)
            )}
          </div>
          <StepNavigation handleSave={handleSave} handleGoBack={handleGoBack} showBackButton={false} />
        </div>
      ),
      imageUrl: '../../CimpleCardLogo.svg'
    },
    2: {
      id: 2,
      label: 'Profile',
      icon: <BsPerson />,
      component: (
        <div className="w-full my-2 space-y-2 flex flex-col justify-around h-full">
          <div className='my-2 space-y-2'>
            <div className="flex gap-2">
              <FormInput
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <FormInput
                type="text"
                placeholder="Middle Name"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
              />
            </div>
            <FormInput
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <div className="flex gap-2">
              <FormInput
                type="text"
                placeholder="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
              <FormInput
                type="text"
                placeholder="Company Address"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-2">
              <FormInput
                type="text"
                placeholder="Job Role"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
              />
              <FormInput
                type="date"
                placeholder="Date of Birth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              placeholder="Write a brief about yourself."
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              rows={5}
            />
            <select
              className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
              value={formData.languageSpoken}
              name="languageSpoken"
              onChange={handleInputChange}
            >
              <option value="" disabled>Language Spoken</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
              <option value="Marathi">Marathi</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>
          <StepNavigation handleSave={handleSave} handleGoBack={handleGoBack} showBackButton={true} />
        </div>
      ),
      imageUrl: '../../ContactDetails.svg'
    },
    3: {
      id: 3,
      label: 'Contact Details',
      icon: <BsTelephone />,
      component: (
        <div className="w-full space-y-6">
          <FormInput
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            placeholder="Other Phone Number"
            name="otherphoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <FormInput
            type="email"
            placeholder="Email"
            name="emails"
            value={formData.emails}
            onChange={handleInputChange}
          />
          <FormInput
            type="email"
            placeholder="Other Email"
            name="other emails"
            value={formData.emails}
            onChange={handleInputChange}
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-l font-semibold text-[#707FDD]">Emergency Contact</h1>
            <h2 className="text-xs font-semithin text-[#707FDD] text-center px-4">
              Add your contact information and Emergency Contact
            </h2>
          </div>
          <FormInput
            type="text"
            placeholder="Name"
            name="emergencyname"
            value={formData.emergencyName}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            placeholder="Relation"
            name="emergencyRelationship"
            value={formData.emergencyRelationship}
            onChange={handleInputChange}
          />
          <FormInput
            type="text"
            placeholder="Emergency Phone Number"
            name="emergencyNumber"
            value={formData.emergencyNumber}
            onChange={handleInputChange}
          />
          <FormInput
            type="email"
            placeholder="Emergency Email"
            name="emergencyEmail"
            value={formData.emergencyEmail}
            onChange={handleInputChange}
          />
          <StepNavigation handleSave={handleSave} handleGoBack={handleGoBack} showBackButton={true} />
        </div>
      ),
      imageUrl: '../../ContactDetails.svg'
    },
    4: {
      id: 4,
      label: 'Social Media Links',
      icon: <BsLinkedin />,
      component: (
        <div className="w-full space-y-6">
          <FormInput
            type="url"
            placeholder="Website/Portfolio URL"
            name="uniqueUrl"
            value={formData.uniqueUrl}
            onChange={handleInputChange}
          />
          <FormInput
            type="url"
            placeholder="LinkedIn (Optional)"
            name="companySocialMediaLink"
            value={formData.companySocialMediaLink}
            onChange={handleInputChange}
          />
          <FormInput
            type="url"
            placeholder="Instagram (Optional)"
            name="instagramLink"
            value={formData.instagramLink}
            onChange={handleInputChange}
          />
          <FormInput
            type="url"
            placeholder="Twitter (Optional)"
            name="twitterLink"
            value={formData.twitterLink}
            onChange={handleInputChange}
          />
          <FormInput
            type="url"
            placeholder="GitHub (Optional)"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleInputChange}
          />
          <FormInput
            type="url"
            placeholder="Additional Link"
            name="additionalLink"
            value={formData.additionalLink}
            onChange={handleInputChange}
          />
          <StepNavigation handleSave={handleSave} handleGoBack={handleGoBack} showBackButton={true} />
        </div>
      ),
      imageUrl: '../../SocialMediaLinks.svg'
    },
    5: {
      id: 5,
      label: 'Product / Services',
      icon: <BsCartCheckFill />,
      component: (
        <div className="w-full space-y-6">
          <div className="flex justify-center gap-4">
            <h1 className='font-semibold text-[#707FDD]'>Choose What To Add</h1>
          </div>
          <div className="flex justify-center gap-2">
            <FormButton onClick={() => { }} variant="secondary">
              Product
            </FormButton>
            <FormButton onClick={() => { }} variant="secondary">
              Service
            </FormButton>
          </div>
          <div
            className="flex items-center justify-center"
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: '16rem',
              overflowY: 'scroll',
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
                    <FormInput
                      type="text"
                      placeholder="Description"
                      name={`productDesc${index}`}
                      value={formData[`productDesc${index}`] || ''}
                      onChange={handleInputChange}
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
          <StepNavigation handleSave={handleSave} handleGoBack={handleGoBack} showBackButton={true} />
        </div>
      ),
      imageUrl: '../../Product&Services.svg'
    },
    6: {
      id: 6,
      label: 'Testimonials',
      icon: <BsPersonVideo />,
      component: (
        <div className="w-full space-y-6">

          <TestimonialsSection
            testimonials={testimonials}
            setTestimonials={setTestimonials}
          />
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
      ),
      imageUrl: '../../Testimonials.svg'
    },
    7: {
      id: 7,
      label: 'Post Links',
      icon: <BsUpload />,
      component: (
        <>
          <div className="w-full space-y-6">
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
        </>
      ),
      imageUrl: '../../BusinessHours.svg'
    },
    8: {
      id: 8, label: 'Gallery', icon: <BsImages />, component: <>
        <div className="w-full space-y-6">
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
      </>, imageUrl: '../../BusinessHours.svg'
    },
    9: {
      id: 9, label: 'Business Hours', icon: <BsClockHistory />, component: <>
        <div className="w-full space-y-6">
          <div className="flex flex-col justify-center items-center gap-1">
            <h2 className="text-sm font-semibold text-[#707FDD] text-center px-4">
              Add your Working Hours during Weekdays
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-[#787F89] mb-1">From</label>
              <FormInput
                type="time"
                placeholder="From"
                name="businesshoursFrom"
                value={formData.businesshoursFrom}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-[#787F89] mb-1">To</label>
              <FormInput
                type="time"
                placeholder="To"
                name="businesshoursTo"
                value={formData.businesshoursTo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <FormInput
                type="text"
                placeholder="Type"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 pt-4 pb-10">
            <FormButton onClick={() => {
              // Add a new business hour block
              const updatedBusinessHours = [
                ...formData.businessHours,
                { from: "", to: "", type: "" },
              ];
              // console.log('hshshshsh')
              setFormData({
                ...formData,
                businessHours: updatedBusinessHours,
              });
            }} variant="primary" className="rounded-full text-xs">
              Add Timings
            </FormButton>
            <FormButton onClick={handleSave} variant="primary" className="rounded-full text-xs">
              Save Timings
            </FormButton>
          </div>
          <StepNavigation handleSave={handleSave} handleGoBack={handleGoBack} showBackButton={true} />
        </div>
      </>, imageUrl: '../../BusinessHours.svg'
    },
    10: {
      id: 10, label: 'Help', icon: <BsChat />, component: <>
        <div className="w-full space-y-6">
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
      </>, imageUrl: '../../BusinessHours.svg'
    },
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full h-full flex flex-col gap-5 z-10 relative">
        <div className='z-20 sticky'>
          <Image
            className='absolute right-0 left-0 scale-150 translate-y-[-5%] md:translate-y-[-20%] transition-transform duration-300'
            fill
            src={'../../ModalMobileTop.svg'}
          />
          <div className="sticky left-0 right-0 top-2 flex flex-col items-center justify-center">
            <img
              src={steps[activeStep]?.imageUrl}
              alt={steps[activeStep]?.label}
              className="w-[40%] h-auto mb-4 md:w-[35%] lg:w-[30%] transition-all duration-300"
            />
            <h1 className="text-xl font-semibold text-[#707FDD] text-center px-4">
              {steps[activeStep]?.label}
            </h1>
          </div>
        </div>
        <div className="bg-white top-10 w-full h-full flex relative overflow-hidden">
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
  );
}




export const StepNavigation = ({ handleGoBack, handleSave, showBackButton }) => (
  <div className="py-6 flex justify-between space-x-2">
    {showBackButton && (
      <FormButton onClick={handleGoBack} variant="secondary">
        Go Back
      </FormButton>
    )}
    <FormButton onClick={handleSave} variant="primary">
      Save
    </FormButton>
  </div>
);


export const FormInput = ({ type, placeholder, value, onChange, className, ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    {...props}
    onChange={onChange}
    className={`w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md ${className}`}
  />
);
export const FormButton = ({ onClick, children, variant }) => {
  const baseClasses = "py-2 px-4 rounded-md transform transition-transform duration-200 ease-out active:transform active:scale-110";
  const variantClasses = variant === 'primary'
    ? "text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]"
    : "bg-transparent text-[#707FDD] border-2 border-[#707FDD]";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};



