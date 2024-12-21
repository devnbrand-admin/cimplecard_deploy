'use client';
import React, { useState,useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard } from '../../utils/cardCreationApi';
import Sidebar from './Sidebar';
import {BsTriangle, BsPerson, BsTelephone, BsLinkedin, BsPersonVideo, BsClockHistory, BsCartCheckFill, BsChat, BsUpload, BsEnvelopeAt, BsImages} from "react-icons/bs";
import axios from '../../components/api_resources/axios';

const cards = [
  {
    id: 1,
    title: "John Doe",
    bio: "A free, open content online encyclopedia created through the collaborative efforts",
    phoneNumbers: ["+1234567890", "+0987654321"],
    emails: ["john.doe@example.com", "contact@johndoe.dev"],
    addresses: [
      "123 Main Street, Springfield",
      "456 Elm Street, Shelbyville",
    ],
    jobTitle: "Senior Developer",
    companyName: "Tech Innovators Inc.",
    dateOfBirth: "1990-05-15T00:00:00.000Z",
    personalSocialMediaLinks: {
      create: [
        {
          url: "https://linkedin.com/in/johndoe",
          iconUrl: "https://example.com/icons/linkedin.png",
          platform: "LINKEDIN",
        },
        {
          url: "https://twitter.com/johndoe",
          iconUrl: "https://example.com/icons/twitter.png",
          platform: "TWITTER",
        },
      ],
    },
    companySocialMediaLink: "https://facebook.com/techinnovators",
    profileImageUrl: "https://example.com/images/johndoe.jpg",
    templateType: "professional",
    uniqueUrl: "https://www.wikipedia.org/",
    qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
    aboutUs:
      "We deliver top-notch software solutions tailored to your needs.",
    instagramVideoLink: "https://instagram.com/reel/xyz123",
    youtubeVideoLink: "https://youtube.com/watch?v=abc123",
    createdAt: "2024-12-06T14:41:55.517Z",
    updatedAt: "2024-12-06T14:41:55.517Z",
    userId: 1,
  },
  {
    id: 2,
    title: "John Doe",
    bio: "Software Engineer with a passion for solving complex problems.",
    phoneNumbers: ["+1234567890", "+0987654321"],
    emails: ["john.doe@example.com", "contact@johndoe.dev"],
    addresses: [
      "123 Main Street, Springfield",
      "456 Elm Street, Shelbyville",
    ],
    jobTitle: "Senior Developer",
    companyName: "Tech Innovators Inc.",
    dateOfBirth: "1990-05-15T00:00:00.000Z",
    personalSocialMediaLinks: {
      create: [
        {
          url: "https://linkedin.com/in/johndoe",
          iconUrl: "https://example.com/icons/linkedin.png",
          platform: "LINKEDIN",
        },
        {
          url: "https://twitter.com/johndoe",
          iconUrl: "https://example.com/icons/twitter.png",
          platform: "TWITTER",
        },
      ],
    },
    companySocialMediaLink: "https://facebook.com/techinnovators",
    profileImageUrl: "https://example.com/images/johndoe.jpg",
    templateType: "professional",
    uniqueUrl: "https://munirsiddiqui.vercel.app/",
    qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
    aboutUs:
      "We deliver top-notch software solutions tailored to your needs.",
    instagramVideoLink: "https://instagram.com/reel/xyz123",
    youtubeVideoLink: "https://youtube.com/watch?v=abc123",
    createdAt: "2024-12-06T15:41:18.950Z",
    updatedAt: "2024-12-06T15:41:18.950Z",
    userId: 1,
  },
  {
    id: 3,
    title: "John Doe",
    bio: "A free, open content online encyclopedia created through the collaborative efforts",
    phoneNumbers: ["+1234567890", "+0987654321"],
    emails: ["john.doe@example.com", "contact@johndoe.dev"],
    addresses: [
      "123 Main Street, Springfield",
      "456 Elm Street, Shelbyville",
    ],
    jobTitle: "Senior Developer",
    companyName: "Tech Innovators Inc.",
    dateOfBirth: "1990-05-15T00:00:00.000Z",
    personalSocialMediaLinks: {
      create: [
        {
          url: "https://linkedin.com/in/johndoe",
          iconUrl: "https://example.com/icons/linkedin.png",
          platform: "LINKEDIN",
        },
        {
          url: "https://twitter.com/johndoe",
          iconUrl: "https://example.com/icons/twitter.png",
          platform: "TWITTER",
        },
      ],
    },
    companySocialMediaLink: "https://facebook.com/techinnovators",
    profileImageUrl: "https://example.com/images/johndoe.jpg",
    templateType: "professional",
    uniqueUrl: "https://www.wikipedia.org/",
    qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
    aboutUs:
      "We deliver top-notch software solutions tailored to your needs.",
    instagramVideoLink: "https://instagram.com/reel/xyz123",
    youtubeVideoLink: "https://youtube.com/watch?v=abc123",
    createdAt: "2024-12-06T14:41:55.517Z",
    updatedAt: "2024-12-06T14:41:55.517Z",
    userId: 1,
  },
  {
    id: 4,
    title: "John Doe",
    bio: "Software Engineer with a passion for solving complex problems.",
    phoneNumbers: ["+1234567890", "+0987654321"],
    emails: ["john.doe@example.com", "contact@johndoe.dev"],
    addresses: [
      "123 Main Street, Springfield",
      "456 Elm Street, Shelbyville",
    ],
    jobTitle: "Senior Developer",
    companyName: "Tech Innovators Inc.",
    dateOfBirth: "1990-05-15T00:00:00.000Z",
    personalSocialMediaLinks: {
      create: [
        {
          url: "https://linkedin.com/in/johndoe",
          iconUrl: "https://example.com/icons/linkedin.png",
          platform: "LINKEDIN",
        },
        {
          url: "https://twitter.com/johndoe",
          iconUrl: "https://example.com/icons/twitter.png",
          platform: "TWITTER",
        },
      ],
    },
    companySocialMediaLink: "https://facebook.com/techinnovators",
    profileImageUrl: "https://example.com/images/johndoe.jpg",
    templateType: "professional",
    uniqueUrl: "https://munirsiddiqui.vercel.app/",
    qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
    aboutUs:
      "We deliver top-notch software solutions tailored to your needs.",
    instagramVideoLink: "https://instagram.com/reel/xyz123",
    youtubeVideoLink: "https://youtube.com/watch?v=abc123",
    createdAt: "2024-12-06T15:41:18.950Z",
    updatedAt: "2024-12-06T15:41:18.950Z",
    userId: 1,
  },
  {
    id: 5,
    title: "John Doe",
    bio: "A free, open content online encyclopedia created through the collaborative efforts",
    phoneNumbers: ["+1234567890", "+0987654321"],
    emails: ["john.doe@example.com", "contact@johndoe.dev"],
    addresses: [
      "123 Main Street, Springfield",
      "456 Elm Street, Shelbyville",
    ],
    jobTitle: "Senior Developer",
    companyName: "Tech Innovators Inc.",
    dateOfBirth: "1990-05-15T00:00:00.000Z",
    personalSocialMediaLinks: {
      create: [
        {
          url: "https://linkedin.com/in/johndoe",
          iconUrl: "https://example.com/icons/linkedin.png",
          platform: "LINKEDIN",
        },
        {
          url: "https://twitter.com/johndoe",
          iconUrl: "https://example.com/icons/twitter.png",
          platform: "TWITTER",
        },
      ],
    },
    companySocialMediaLink: "https://facebook.com/techinnovators",
    profileImageUrl: "https://example.com/images/johndoe.jpg",
    templateType: "professional",
    uniqueUrl: "https://www.wikipedia.org/",
    qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
    aboutUs:
      "We deliver top-notch software solutions tailored to your needs.",
    instagramVideoLink: "https://instagram.com/reel/xyz123",
    youtubeVideoLink: "https://youtube.com/watch?v=abc123",
    createdAt: "2024-12-06T14:41:55.517Z",
    updatedAt: "2024-12-06T14:41:55.517Z",
    userId: 1,
  },
  {
    id: 6,
    title: "John Doe",
    bio: "Software Engineer with a passion for solving complex problems.",
    phoneNumbers: ["+1234567890", "+0987654321"],
    emails: ["john.doe@example.com", "contact@johndoe.dev"],
    addresses: [
      "123 Main Street, Springfield",
      "456 Elm Street, Shelbyville",
    ],
    jobTitle: "Senior Developer",
    companyName: "Tech Innovators Inc.",
    dateOfBirth: "1990-05-15T00:00:00.000Z",
    personalSocialMediaLinks: {
      create: [
        {
          url: "https://linkedin.com/in/johndoe",
          iconUrl: "https://example.com/icons/linkedin.png",
          platform: "LINKEDIN",
        },
        {
          url: "https://twitter.com/johndoe",
          iconUrl: "https://example.com/icons/twitter.png",
          platform: "TWITTER",
        },
      ],
    },
    companySocialMediaLink: "https://facebook.com/techinnovators",
    profileImageUrl: "https://example.com/images/johndoe.jpg",
    templateType: "professional",
    uniqueUrl: "https://munirsiddiqui.vercel.app/",
    qrCodeUrl: "https://example.com/qrcodes/johndoe.png",
    aboutUs:
      "We deliver top-notch software solutions tailored to your needs.",
    instagramVideoLink: "https://instagram.com/reel/xyz123",
    youtubeVideoLink: "https://youtube.com/watch?v=abc123",
    createdAt: "2024-12-06T15:41:18.950Z",
    updatedAt: "2024-12-06T15:41:18.950Z",
    userId: 1,
  }
]

export default function ModalForm({cardId}) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [serverError,setServerError] = useState(null)

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

  const handleUpdate = async(cardId)=>{
    try {
      const response = await axios.put(`/api/card/update/${cardId}`,formData)
      console.log(response,"updateResponse")
    } catch (error) {
      console.log(error,"error")
      setServerError(error)
      
    }
  }

  const getCardDetails = async(cardId)=>{
    try {
      console.log("calling api")
      const response = await cards.filter(card=>cardId===card?.id)
      // const response = await axios.get(`/api/card/get/${cardId}`)
      console.log(response,"response")
      if(response.length>=0){

      

      setFormData({
        templateType: response[0]?.templateType,
        firstName: response[0]?.title?.split(' ')[0],
        middleName: '',
        lastName: response[0]?.title?.split(' ')[1],
        companyName: response[0]?.companyName,
        companyAddress: response[0]?.addresses[0],
        jobTitle: response[0]?.jobTitle,
        bio: response[0]?.bio,
        languageSpoken: '',
        dateOfBirth: response[0]?.dateOfBirth,
        phoneNumber: '',
        phoneNumbers: '',
        otherPhoneNumber: '',
        emails: response[0]?.emails[0],
        otherEmails: '',
        emergencyName: '',
        emergencyRelationship: '',
        emergencyNumber: "",
        emergencyEmail: '',
        uniqueUrl: '',
        companySocialMediaLink: response[0]?.companySocialMediaLink
,
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
        qrCodeUrl: response[0]?.qrCodeUrl,
        aboutUs: response[0]?.aboutUs,
        instagramVideoLink: response[0]?.instagramVideoLink,
        youtubeVideoLink: '',
      })
    }
    } catch (error) {
      console.log(error,"error")
      setServerError(error)
      
    }

  }

  useEffect(()=>{
    if(cardId){
      getCardDetails(cardId)

    }
  },[cardId])
  useEffect(()=>{
    if(cardId){
      console.log(formData,"f")


    }
  },[formData])

  

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-7xl h-[80%] flex">
        <Sidebar activeStep={activeStep} handleStepClick={handleStepClick} steps={steps} />

        <div className="w-full px-6 overflow-scroll text-sm ">
            <div className="mb-4 relative">
              <div
                  className="text-white text-center text-4xl font-semibold py-6 px-6"
                  style={{
                      backgroundImage: `url('../../ModalHeader2.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'top',
                      backgroundRepeat: 'no-repeat',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: 'fit',
                  }}
              >
                  {steps.find((step) => step.id === activeStep)?.label}
              </div>
            </div>


            {activeStep === 1 && (
              <div>
                <div className="space-y-4 mt-4 h-full">
                  <div className="grid grid-cols-2 gap-2 mt-10 ">
                    
                    {/* Card 1 */}
                    <div className="w-full sm:w-80 mx-auto aspect-w-1 aspect-h-1">
                      <a href="/cards/medical_card/1" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white shadow-lg rounded-xl">
                          <img
                            alt="Cover"
                            className="object-cover rounded-xl w-full h-48"
                            src="../../template1cover.png"
                          />
                          <div className="p-4">
                            <h4 className="font-bold text-lg">Medical </h4>
                            <p className="text-gray-500 text-sm italic">“Leave a Lasting Impression – Your Medical Card, Your Professional Identity!"</p>
                          </div>
                        </div>
                      </a>
                      <div className="py-2 px-4 flex space-x-2 mt-2">
                        <button
                          onClick={() => handleTemplateSelection('Medical')}
                          className={`py-2 px-4 rounded-full text-[#707FDD] ${formData.templateType === 'Medical' ? 'bg-[#707FDD] text-white' : 'bg-transparent border-2 border-[#707FDD] text-[#707FDD]'}`}
                        >
                          {formData.templateType === 'Medical' ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-80 mx-auto">
                      <a href="/cards/astrologer/2" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white shadow-lg rounded-xl">
                          <img
                            alt="Cover"
                            className="object-cover rounded-xl w-full h-48"
                            src="../../template2cover.png"
                          />
                          <div className="p-4">
                            <h4 className="font-bold text-lg">Astrologer</h4>
                            <p className="text-gray-500 text-sm italic">“Chart Your Path to Success – Your Astrological Card, Your Cosmic Identity!“</p>
                          </div>
                        </div>
                      </a>
                      <div className="py-2 px-4 flex space-x-2 mt-2">
                        <button
                          onClick={() => handleTemplateSelection('Astrologer')}
                          className={`py-2 px-4 rounded-full text-[#707FDD] ${formData.templateType === 'Astrologer' ? 'bg-[#707FDD] text-white' : 'bg-transparent border-2 border-[#707FDD] text-[#707FDD]'}`}
                        >
                          {formData.templateType === 'Astrologer' ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-80 mx-auto">
                      <a href="/cards/b2b/3" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white shadow-lg rounded-xl">
                          <img
                            alt="Cover"
                            className="object-cover rounded-xl w-full h-48"
                            src="../../template3cover.png"
                          />
                          <div className="p-4">
                            <h4 className="font-bold text-lg">B2B Business</h4>
                            <p className="text-gray-500 italic ">"Build Connections That Matter – Your Business Card, Your Gateway to Partnerships!"</p>
                          </div>
                        </div>
                      </a>
                      <div className="py-2 px-4 flex space-x-2 mt-2">
                        <button
                          onClick={() => handleTemplateSelection('B2B Business')}
                          className={`py-2 px-4 rounded-full text-[#707FDD] ${formData.templateType === 'B2B Business' ? 'bg-[#707FDD] text-white' : 'bg-transparent border-2 border-[#707FDD] text-[#707FDD]'}`}
                        >
                          {formData.templateType === 'B2B Business' ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="w-80 mx-auto">
                      <a href="https://example.com/Lawyer" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white shadow-lg rounded-xl">
                          <img
                            alt="Cover"
                            className="object-cover rounded-xl w-full h-48"
                            src="../../template4cover.png"
                          />
                          <div className="p-4">
                            <h4 className="font-bold text-lg">Lawyer</h4>
                            <p className="text-gray-500 italic">"Make Your Mark in Justice – Your Legal Card, Your Professional Statement!"</p>
                          </div>
                        </div>
                      </a>
                      <div className="py-2 px-4 flex space-x-2 mt-2">
                        <button
                          onClick={() => handleTemplateSelection('Lawyer')}
                          className={`py-2 px-4 rounded-full text-[#707FDD] ${formData.templateType === 'Lawyer' ? 'bg-[#707FDD] text-white' : 'bg-transparent border-2 border-[#707FDD] text-[#707FDD]'}`}
                        >
                          {formData.templateType === 'Lawyer' ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="py-6 pb-10 flex justify-end space-x-2">
                    <div
                      className="text-white text-center text-4xl font-semibold py-6 px-6"
                      style={{
                        backgroundImage: `url('../../Underline.svg')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'left',
                        backgroundRepeat: 'no-repeat',
                        top: 0,
                        left: 0,
                        width: '70%',
                        height: '10px',
                      }}
                    />
                    <button
                      onClick={handleSave}
                      className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div>
                <div className="relative py-2">
                  <div
                    className="w-full"
                    style={{
                      backgroundColor: "#eef0ff",
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      height: "15vh",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      backgroundImage: coverImage ? `url(${coverImage})` : "none",
                    }}
                  >
                    <button
                      style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        marginRight: "4rem",
                        transform: "translate(0%, 50%)",
                        width: "5rem",
                        height: "5vh",
                        background: "none",
                        border: "none",
                        padding: "0",
                        cursor: "pointer",
                      }}
                      aria-label="Upload Cover"
                    >
                      <label
                        htmlFor="cover-upload"
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          cursor: "pointer",
                          display: "inline-flex",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <img
                          src="../../BannerUpload.svg"
                          alt="Upload Cover Icon"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleCoverUpload}
                          className="hidden"
                          id="cover-upload"
                        />
                      </label>
                    </button>
                    <div
                      className="mt-10 rounded-full bg-[#707FDD] bg-opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-visible cursor-pointer"
                      style={{ zIndex: 60 }}
                    >
                      <label
                        htmlFor="profile-upload"
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          width: "128px",
                          height: "128px",
                          borderRadius: "50%",
                          // overflow: "hidden",
                          backgroundImage: profileImage
                            ? `url(${profileImage})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {!profileImage && (
                          <img
                            src="../../ProfileAvatar.svg"
                            alt="Upload Icon"
                            className="w-32 h-32"
                          />
                        )}
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

                  <div className="space-y-4 mt-48    text-sm">
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

                    <div className="flex gap-4 text-sm">
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
                          value={formData.companyAddress}
                          onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Job Role"
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Write briefly about yourself"
                          value={formData.bio}
                          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <select
                          className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                          value={formData.languageSpoken}
                          onChange={(e) => setFormData({ ...formData, languageSpoken: e.target.value })}
                        >
                          <option value="" disabled>
                            Language Spoken
                          </option>
                          <option value="English">English</option>
                          <option value="Hindi">Hindi</option>
                          <option value="Bengali">Bengali</option>
                          <option value="Marathi">Marathi</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Date of Birth (yyyy-mm-dd)"
                          value={formData.dateOfBirth}
                          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
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
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
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
                        value={formData.phoneNumbers}
                        onChange={(e) => setFormData({ ...formData, phoneNumbers: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Other Number"
                        value={formData.otherPhoneNumber}
                        onChange={(e) => setFormData({ ...formData, otherPhoneNumber: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email Address"
                        value={formData.emails}
                        onChange={(e) => setFormData({ ...formData, emails: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Other Email Address"
                        value={formData.otherEmails}
                        onChange={(e) => setFormData({ ...formData, otherEmails: e.target.value })}
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
                        value={formData.emergencyName}
                        onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Relationship"
                        value={formData.emergencyRelationship}
                        onChange={(e) => setFormData({ ...formData, emergencyRelationship: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={formData.emergencyNumber}
                        onChange={(e) => setFormData({ ...formData, emergencyNumber: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Email Address"
                        value={formData.emergencyEmail}
                        onChange={(e) => setFormData({ ...formData, emergencyEmail: e.target.value })}
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
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">                        Save Changes
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
                        value={formData.uniqueUrl}
                        onChange={(e) => setFormData({ ...formData, uniqueUrl: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="LinkedIn (Optional)"
                        value={formData.companySocialMediaLink}
                        onChange={(e) => setFormData({ ...formData, companySocialMediaLink: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Instagram (Optional)"
                        value={formData.instagramLink}
                        onChange={(e) => setFormData({ ...formData, instagramLink: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Twitter (Optional)"
                        // value={formData.personalSocialMediaLinks}
                        // onChange={(e) => setFormData({ ...formData, personalSocialMediaLinks: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="GitHub (Optional)"
                        value={formData.githubLink}
                        onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Additional Link"
                        value={formData.additionalLink}
                        onChange={(e) => setFormData({ ...formData, additionalLink: e.target.value })}
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
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">                        Save Changes
                      </button>
                    </div>
                </div>
              </div>
            )}
            

            {activeStep === 5 && (
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
                              value={formData.productDesc}
                              onChange={(e) => setFormData({ ...formData, productDesc: e.target.value })}
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
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">                        Save Changes
                      </button>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 6 && (
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
                        value={formData.testimonialName}
                        onChange={(e) => setFormData({ ...formData, testimonialName: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Job Role"
                        value={formData.testimonialRole}
                        onChange={(e) => setFormData({ ...formData, testimonialRole: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <select
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
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
                      <button 
                        onClick={handleSave}
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">                        Save Changes
                      </button>
                    </div>
                </div>
              </div>
            )}

            {activeStep === 7 && (
              <div>
                <div className="space-y-4 mt-4">
                  
                  <div className="flex justify-center gap-4">
                    <h1 className='text-2xl font-semibold text-[#707FDD]'>Add Public Instagram Link</h1>
                  </div>
                  <div
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
                    <div className="flex gap-4 w-full">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Instagram Link"
                          value={formData.instagramVideoLink}
                          onChange={(e) => setFormData({ ...formData, instagramVideoLink: e.target.value })}
                          className="w-[80%] p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md mx-auto block"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                  <button className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                    Add Instagram
                  </button>
                  </div>
                </div>


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
                            Youtube Video Title
                          </h1>
                          <input
                            type="text"
                            placeholder="YouTube Video Link"
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
                    <h1 className='text-2xl font-semibold text-[#707FDD]'>Add YouTube Videos</h1>
                  </div>
                  <div
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
                    <div className="flex gap-4 w-full">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="YouTube Video Link"
                          value={formData.youtubeVideoLink}
                          onChange={(e) => setFormData({ ...formData, youtubeVideoLink: e.target.value })}
                          className="w-[80%] p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md mx-auto block"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                  <button className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]">
                    Add YouTube Video
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
                        onClick={handleSave}
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">                        Save Changes
                      </button>
                    </div>
                </div>
              </div>
            )}

            {activeStep === 8 && (
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
                        value={formData.businesshoursFrom}
                        onChange={(e) => setFormData({ ...formData, businesshoursFrom: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-[#787F89] mb-1">To</label>
                      <input
                        type="time"
                        value={formData.businesshoursTo}
                        onChange={(e) => setFormData({ ...formData, businesshoursTo: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-opacity-0 text-[#787F89] mb-1">Type</label>
                      <input
                        type="text"
                        placeholder="Type"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-4 pb-10">
                  <button 
                    onClick={handleSave}
                    className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">                    Save Timings
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
                        onClick={cardId ? handleUpdate : handleCreate}
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110">  
                        {cardId ? `Update Card` : `Create Card`}
                      </button>
                    </div>
                </div>
              </div>
            )}

            {activeStep === 9 && (
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
