'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard } from '../../utils/cardCreationApi';
import "../../style/cardCreation.css"
import { BsTriangle, BsPerson, BsTelephone, BsLinkedin, BsPersonVideo, BsClockHistory, BsCartCheckFill, BsChat, BsUpload, BsEnvelopeAt, BsImages } from "react-icons/bs";
import Image from 'next/image';
import { TestimonialsSection } from './TestimonialSection';
import { AddLinkSection } from './AddLinkSection';

export default function ModalForm({ setIsModalOpen, cardId }) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const [testimonials, setTestimonials] = useState([
    {
      name: "Alice Johnson",
      designation: "CEO",
      description: "John is a great developer, helped us with our project!",
      imageUrl: "https://example.com/testimonial1.jpg",
    },
  ]);

  const [instagramPost, setInstagramPost] = useState([
    "https://instagram.com/johndoe/post1",
  ]);

  const [instagramReels, setInstagramReels] = useState([
    "https://instagram.com/johndoe/reel1",
  ]);

  const [youtubeVideo, setYoutubeVideo] = useState([
    "https://youtube.com/watch?v=12345",
  ]);

  const [images, setImages] = useState([
    "https://example.com/photo1.jpg",
    "https://example.com/photo2.jpg",
  ]);

  const [productData, setProductData] = useState([
    {
      name: "Web Development",
      imageUrl: "https://example.com/service1.jpg",
      serviceUrl: "https://example.com/webdev",
      description: "Full-stack web development services.",
      cardId: "sadfasdf"
    },
  ]);

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
    products: [],
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

  const handleProductUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductData((prevData) =>
          prevData.map((item, i) =>
            i === index ? { ...item, imageUrl: reader.result } : item
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTestimonial = () => {
    const { name, designation, description, imageUrl } = formData;

    console.log("Testimonial Data:", name, designation, description, imageUrl);

    const newTestimonial = {
      name,
      designation,
      description,
      imageUrl,
    };

    setTestimonials([...testimonials, newTestimonial]);

    setFormData({
      ...formData,
      testimonials: testimonials,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleSave = () => {
    // Save current step data to Redux
    dispatch(setStepData({ step: `step${activeStep}`, data: formData }));

    // Move to the next step
    if (activeStep < Object.keys(steps)?.length) {
      if (activeStep === Object.keys(steps)?.length) {
        return;
      }
      setActiveStep(activeStep + 1);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      services: productData,
      testimonials: testimonials,
      instagramPost: instagramPost,
      instagramReel: instagramReels,
      youtubeVideoLink: youtubeVideo,
      gallery: images,
    }));
    // console.log("Form Data:", formData);
    try {
      const response = await createCard(formData);
      // console.log("Card saved successfully:", response);
      dispatch(setCardData(formData)); // Update Redux store
    } catch (error) {
      console.error("Failed to save card:", error);
    }
  };

  useEffect(() => {
    setFormData({
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


    if (cardId) getSingleCardData(cardId)
  }, [cardId])


  // Function to map backend data to the required format
  const transformCardData = (data) => {
    return {
      // Personal information
      firstName: data.title?.split(" ")[0] || "",
      middleName: "",
      lastName: data.title?.split(" ")[1] || "",
      jobTitle: data.jobTitle || "",
      companyName: data.companyName || "",
      location: data.location || "N/A",
      profileImageUrl: data.profileImageUrl || "",
      headerImageUrl: data.headerImageUrl || "",
      templateType: data.templateType || "",
      cardName: data.cardName || `business-card-${new Date().getTime()}`,
      qrCodeUrl: data.qrCodeUrl || "",
      aboutUs: data.aboutUs || "",
      companyAddress: data.companyAddress || "",
      dateOfBirth: data.dateOfBirth || "",
      bio: data.bio || "",
      gridType: data.gridType || "",
      languageSpoken: data.languageSpoken || "",
      additionalLink: data.additionalLink || "",
      emails: data.emails || [],
      phoneNumbers: data.phoneNumbers || [],
      otherEmails: data.otherEmails || "",
      otherPhoneNumber: data.otherPhoneNumber || "",
      phoneNumber: data.phoneNumber || "",

      // Emergency contact information
      emergencyName: data.emergencyName || "",
      emergencyRelationship: data.emergencyRelationship || "",
      emergencyNumber: data.emergencyNumber || "",
      emergencyEmail: data.emergencyEmail || "",

      // Social media links
      SocialMediaLink: [
        ...(data.linkedinLink
          ? [
            {
              id: 1,
              platform: "LinkedIn",
              url: data.linkedinLink,
              iconUrl: "",
              cardId: data.id,
            },
          ]
          : []),
        ...(data.twitterLink
          ? [
            {
              id: 2,
              platform: "Twitter",
              url: data.twitterLink,
              iconUrl: "",
              cardId: data.id,
            },
          ]
          : []),
      ],
      companySocialMediaLink: [],

      // Gallery and media
      gallery: data.gallery || [],
      instagramPost: data.instagramPost || [],
      instagramReel: data.instagramReel || [],
      youtubeVideoLink: data.youtubeVideoLink || [],

      // Testimonials
      testimonials: data.testimonials || [],

      // Services
      services: data.services || [],

      // Business hours
      businessHours: data.businessHours || [],
    };
  };

  // Fetch and process single card data
  const getSingleCardData = async (cardId) => {
    try {
      if (!cardId) {
        console.error("Card ID is required.");
        return;
      }
      console.log(cardId, "cardId");

      const response = await axios.get(`/api/card/get/${cardId}`);
      const backendData = response.data;

      console.log(backendData, "singleData");

      // Transform backend data to required format
      const transformedData = transformCardData(backendData);
      console.log(transformedData, "Transformed Data");
    } catch (error) {
      console.error("Error fetching single card data:", error);
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
        <div className="w-full relative my-2 space-y-2 flex flex-col justify-around h-full">
          <div className='my-2 space-y-2 '>
            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firstName: e.target.value,
                    })
                  }
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      middleName: e.target.value,
                    })
                  }
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastName: e.target.value,
                    })
                  }
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
              </div>
            </div>

            {/* <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Other Name"
                  className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
              </div>
            </div> */}


            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      companyName: e.target.value,
                    })
                  }
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Company Address"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Job Role"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, jobTitle: e.target.value })
                  }
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateOfBirth: e.target.value,
                    })
                  }
                  className="w-full flex-1 p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 flex gap-2">
                <textarea
                  cols={10}
                  rows={5}
                  type="text"
                  placeholder="Write a brief about yourself."
                  value={formData.aboutUs}
                  onChange={(e) =>
                    setFormData({ ...formData, aboutUs: e.target.value })
                  }
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
                value={formData.phoneNumbers[0]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phoneNumbers: [
                      e.target.value,
                      ...formData.phoneNumbers.slice(1),
                    ],
                  })
                }
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Email"
                value={formData.emails[0]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emails: formData.emails.map((email, index) =>
                      index === 0 ? e.target.value : email
                    ),
                  })
                }
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
                value={formData.emergencyNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emergencyNumber: e.target.value,
                  })
                }
                className="w-full p-3 border-2 border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Email"
                value={formData.emergencyEmail}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emergencyEmail: e.target.value,
                  })
                }
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
                value={
                  formData.SocialMediaLink.find(
                    (link) => link.platform === "Website"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks = formData.SocialMediaLink.filter(
                    (link) => link.platform !== "Website"
                  );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "Website",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    SocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="LinkedIn (Optional)"
                value={
                  formData.SocialMediaLink.find(
                    (link) => link.platform === "LinkedIn"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks = formData.SocialMediaLink.filter(
                    (link) => link.platform !== "LinkedIn"
                  );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "LinkedIn",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    SocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Instagram (Optional)"
                value={
                  formData.SocialMediaLink.find(
                    (link) => link.platform === "Instagram"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks = formData.SocialMediaLink.filter(
                    (link) => link.platform !== "Instagram"
                  );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "Instagram",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    SocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Twitter (Optional)"
                value={
                  formData.SocialMediaLink.find(
                    (link) => link.platform === "Twitter"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks = formData.SocialMediaLink.filter(
                    (link) => link.platform !== "Twitter"
                  );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "Twitter",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    SocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="GitHub (Optional)"
                value={
                  formData.SocialMediaLink.find(
                    (link) => link.platform === "GitHub"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks = formData.SocialMediaLink.filter(
                    (link) => link.platform !== "GitHub"
                  );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "GitHub",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    SocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Additional Link"
                value={
                  formData.SocialMediaLink.find(
                    (link) => link.platform === "Additional"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks = formData.SocialMediaLink.filter(
                    (link) => link.platform !== "Additional"
                  );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "Additional",
                      url: e.target.value,
                      iconUrl: "/link_icon.png",
                    });
                  }
                  setFormData({
                    ...formData,
                    SocialMediaLink: updatedLinks,
                  });
                }}
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
      id: 5, label: 'Company Media Links', icon: <BsLinkedin />, component: <>
        <div className="w-full space-y-6 ">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Website/Portfolio URL"
                value={
                  formData.companySocialMediaLink.find(
                    (link) => link.platform === "Website"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks =
                    formData.companySocialMediaLink.filter(
                      (link) => link.platform !== "Website"
                    );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "Website",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    companySocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="LinkedIn (Optional)"
                value={
                  formData.companySocialMediaLink.find(
                    (link) => link.platform === "LinkedIn"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks =
                    formData.companySocialMediaLink.filter(
                      (link) => link.platform !== "LinkedIn"
                    );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "LinkedIn",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    companySocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Instagram (Optional)"
                value={
                  formData.companySocialMediaLink.find(
                    (link) => link.platform === "Instagram"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks =
                    formData.companySocialMediaLink.filter(
                      (link) => link.platform !== "Instagram"
                    );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "Instagram",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    companySocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Twitter (Optional)"
                value={
                  formData.companySocialMediaLink.find(
                    (link) => link.platform === "Twitter"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks =
                    formData.companySocialMediaLink.filter(
                      (link) => link.platform !== "Twitter"
                    );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "Twitter",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    companySocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="GitHub (Optional)"
                value={
                  formData.companySocialMediaLink.find(
                    (link) => link.platform === "GitHub"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks =
                    formData.companySocialMediaLink.filter(
                      (link) => link.platform !== "GitHub"
                    );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "GitHub",
                      url: e.target.value,
                    });
                  }
                  setFormData({
                    ...formData,
                    companySocialMediaLink: updatedLinks,
                  });
                }}
                className="w-full p-3 border border-[#7987DF] text-sm text-[#A8AED2] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Additional Link"
                value={
                  formData.companySocialMediaLink.find(
                    (link) => link.platform === "Additional"
                  )?.url || ""
                }
                onChange={(e) => {
                  const updatedLinks =
                    formData.companySocialMediaLink.filter(
                      (link) => link.platform !== "Additional"
                    );
                  if (e.target.value.trim()) {
                    updatedLinks.push({
                      platform: "Additional",
                      url: e.target.value,
                      iconUrl: "/link_icon.png",
                    });
                  }
                  setFormData({
                    ...formData,
                    companySocialMediaLink: updatedLinks,
                  });
                }}
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
    6: {
      id: 6, label: 'Product / Services', icon: <BsCartCheckFill />, component: <>
        <div className="w-full space-y-6  ">
          <div className="flex justify-center gap-4">
            <h1 className='font-semibold text-[#707FDD]'>Choose What To Add</h1>
          </div>
                <div className="flex justify-center gap-4">
                  <button
                    className={`py-2 px-4 rounded-full border-2 ${formData.gridType === "Product"
                        ? "bg-[#707FDD] text-white border-[#707FDD]"
                        : "bg-transparent text-[#707FDD] border-[#707FDD]"
                      }`}
                    onClick={() =>
                      setFormData({ ...formData, gridType: "Product" })
                    }
                  >
                    Product
                  </button>

                  {/* Service Button */}
                  <button
                    className={`py-2 px-4 rounded-full border-2 ${formData.gridType === "Service"
                        ? "bg-[#707FDD] text-white border-[#707FDD]"
                        : "bg-transparent text-[#707FDD] border-[#707FDD]"
                      }`}
                    onClick={() =>
                      setFormData({ ...formData, gridType: "Service" })
                    }
                  >
                    Service
                  </button>
                </div>

                <div
                  className="flex items-center justify-start"
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    height: "16rem",
                    overflowY: "scroll",
                  }}
                >
                  <div
                    className="flex flex-col gap-2 self-start"
                    style={{ width: "100%", maxWidth: "400px" }}
                  >
                    {productData.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                        style={{
                          backgroundColor: "#F1F2FC",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                      >
                        {/* Input Fields */}
                        <div className="flex-1" style={{ maxWidth: "80%", paddingBottom: "6px" }}>
                          <h1
                            className="text-[#787F89] text-sm mb-1"
                            style={{
                              fontSize: "10px",
                              textAlign: "left",
                            }}
                          >
                            Name of the Product/Service
                          </h1>
                          <div className="flex flex-col gap-2">
                            {/* Name Input */}
                            <input
                              type="text"
                              placeholder="Name of service/product"
                              value={product.name || ""}
                              onChange={(e) =>
                                setProductData(
                                  productData.map((item, i) =>
                                    i === index
                                      ? { ...item, name: e.target.value }
                                      : item
                                  )
                                )
                              }
                              className="p-1 text-sm border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                              style={{
                                width: "100%",
                                maxWidth: "320px",
                                display: "block",
                                fontSize: "10px",
                                textAlign: "left",
                              }}
                            />

                            {/* Description Input */}
                            <input
                              type="text"
                              placeholder="Description of service/product"
                              value={product.description || ""}
                              onChange={(e) =>
                                setProductData(
                                  productData.map((item, i) =>
                                    i === index
                                      ? { ...item, description: e.target.value }
                                      : item
                                  )
                                )
                              }
                              className="p-1 text-sm border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                              style={{
                                width: "100%",
                                maxWidth: "320px",
                                display: "block",
                                fontSize: "10px",
                                textAlign: "left",
                              }}
                            />

                            {/* External Links Input */}
                            <input
                              type="text"
                              placeholder="External Links of service/product"
                              value={product.serviceUrl || ""}
                              onChange={(e) =>
                                setProductData(
                                  productData.map((item, i) =>
                                    i === index
                                      ? { ...item, serviceUrl: e.target.value }
                                      : item
                                  )
                                )
                              }
                              className="p-1 text-sm border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                              style={{
                                width: "100%",
                                maxWidth: "320px",
                                display: "block",
                                fontSize: "10px",
                                textAlign: "left",
                              }}
                            />
                          </div>
                        </div>

                        {/* Image Upload Section */}
                        <div
                          className="ml-8"
                          style={{
                            width: "4rem",
                            height: "4rem",
                            backgroundColor: "#707FDD",
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <label
                            htmlFor={`product-upload-${index}`}
                            className="w-full h-full flex items-center justify-center cursor-pointer"
                          >
                            {product.imageUrl ? (
                              <img
                                src={product.imageUrl}
                                alt="Uploaded"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <BsImages className="text-white text-2xl" />
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleProductUpload(e, index)}
                              className="hidden"
                              id={`product-upload-${index}`}
                            />
                          </label>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() =>
                            setProductData(productData.filter((_, i) => i !== index))
                          }
                          className="text-red-500 text-4xl"
                          title="Delete"
                        >
                          &times;
                        </button>
                      </div>
                    ))}

                    {/* Add New Button */}
                    <div className="flex justify-center mt-4">
                      <button
                        onClick={() =>
                          setProductData([
                            ...productData,
                            {
                              name: "",
                              imageUrl: "",
                              serviceUrl: "",
                              description: "",
                            },
                          ])
                        }
                        className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]"
                      >
                        Add New
                      </button>
                    </div>
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
    7: {
      id: 7, label: 'Testimonials', icon: <BsPersonVideo />, component: <>
        <div className="w-full space-y-6">

          <TestimonialsSection
            testimonials={testimonials}
            setTestimonials={setTestimonials}
          />
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
      imageUrl: '../../Testimonials.svg'
    },
    8: {
      id: 8, label: 'Post Links', icon: <BsUpload />, component: <>
        <div className="w-full space-y-6">

          <div>
            <div className="mt-4">
              <div>
                {/* Instagram Posts */}
                <AddLinkSection
                  title="Add Instagram Posts"
                  items={instagramPost}
                  setItems={setInstagramPost}
                  placeholder="Instagram Post Link"
                />

                {/* Instagram Reels */}
                <AddLinkSection
                  title="Add Instagram Reels"
                  items={instagramReels}
                  setItems={setInstagramReels}
                  placeholder="Instagram Reel Link"
                />

                {/* YouTube Videos */}
                <AddLinkSection
                  title="Add YouTube Videos"
                  items={youtubeVideo}
                  setItems={setYoutubeVideo}
                  placeholder="YouTube Video Link"
                />


              </div>
            </div>
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
    9: {
      id: 9, label: 'Gallery', icon: <BsImages />, component: <>
        <div className="w-full space-y-6">
          <div className="flex gap-4 flex-col flex-nowrap justify-start w-full overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-[#707FDD] hover:scrollbar-thumb-[#5C6CCF]">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-40 h-56 rounded-lg flex-shrink-0"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}

            {[...Array(Math.max(5 - images.length, 0))].map((_, index) => (
              <div
                key={`empty-${index}`}
                className="w-full h-56 bg-[#707FDD] bg-opacity-70 rounded-lg flex-shrink-0 flex items-center justify-center"
              >
                <label
                  htmlFor={`image-upload-${index}`}
                  className="cursor-pointer w-full h-full flex items-center justify-center"
                >
                  <BsImages className="text-white text-2xl" />
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    id={`image-upload-${index}`}
                    className="hidden"
                  />
                </label>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <label
              htmlFor="gallery-upload"
              className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]"
            >
              Add Images
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                id="gallery-upload"
                className="hidden"
              />
            </label>
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
      </>, imageUrl: '../../BusinessHours.svg'
    },
    10: {
      id: 10, label: 'Business Hours', icon: <BsClockHistory />, component: <>
        <>
          <div className="space-y-6">
            {formData.businessHours.map((hour, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-4 border rounded-md bg-[#F9FAFB] relative"
                onContextMenu={(e) => {
                  e.preventDefault(); // Prevent the default context menu from opening
                  const updatedBusinessHours =
                    formData.businessHours.filter((_, i) => i !== index);
                  setFormData({
                    ...formData,
                    businessHours: updatedBusinessHours,
                  });
                }}
                title="Right-click to remove this block"
              >
                <div className="flex-1">
                  <label className="block text-sm text-[#787F89] mb-1">
                    From
                  </label>
                  <input
                    type="time"
                    value={hour.from}
                    onChange={(e) => {
                      const updatedBusinessHours = [
                        ...formData.businessHours,
                      ];
                      updatedBusinessHours[index].from = e.target.value;
                      setFormData({
                        ...formData,
                        businessHours: updatedBusinessHours,
                      });
                    }}
                    className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-[#787F89] mb-1">
                    To
                  </label>
                  <input
                    type="time"
                    value={hour.to}
                    onChange={(e) => {
                      const updatedBusinessHours = [
                        ...formData.businessHours,
                      ];
                      updatedBusinessHours[index].to = e.target.value;
                      setFormData({
                        ...formData,
                        businessHours: updatedBusinessHours,
                      });
                    }}
                    className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-[#787F89] mb-1">
                    Type
                  </label>
                  <input
                    type="text"
                    placeholder="Type"
                    value={hour.type}
                    onChange={(e) => {
                      const updatedBusinessHours = [
                        ...formData.businessHours,
                      ];
                      updatedBusinessHours[index].type = e.target.value;
                      setFormData({
                        ...formData,
                        businessHours: updatedBusinessHours,
                      });
                    }}
                    className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-end gap-4 pb-10">
              <button
                onClick={() => {
                  // Add a new business hour block
                  const updatedBusinessHours = [
                    ...formData.businessHours,
                    { from: "", to: "", type: "" },
                  ];
                  setFormData({
                    ...formData,
                    businessHours: updatedBusinessHours,
                  });
                }}
                className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90"
              >
                Add Timings
              </button>
              <button
                onClick={handleSave}
                className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90"
              >
                Save Timings
              </button>
            </div>

            <div className="py-6 flex justify-end space-x-2">
              <button
                onClick={handleCreate}
                className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
              >
                Create Card
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
        </>
      </>, imageUrl: '../../BusinessHours.svg'
    },
    11: {
      id: 11, label: 'Help', icon: <BsChat />, component: <>
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
      </>, imageUrl: '../../BusinessHours.svg'
    },
  };
  return (
    <>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full h-full flex flex-col gap-5 z-10 relative">

          <div className="z-20 sticky">
            <Image
                className={`absolute right-0 left-0 scale-150 ${steps[activeStep].label === 'Profile' ? 'translate-y-[-25%]' : 'translate-y-[-5%]'
                } md:translate-y-[-20%] transition-transform duration-300`}
              fill
              src={'../../ModalMobileTop.svg'}
            />

            <div className="sticky left-0 right-0 top-2 flex flex-col items-center justify-center">
              {steps[activeStep].label === 'Profile' ? (
                <div
                  className="w-40 h-40 relative top-[5rem] bg-white border-2 rounded-md border-transparent bg-gradient-to-b from-[#707FDD] via-[#FFFFFF] to-[#707FDD] bg-clip-border"
                >
                  <div className="w-full h-full flex justify-center items-center bg-white rounded-md">
                    <label
                      htmlFor="profile-upload"
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        borderRadius: '50%',
                        backgroundImage: profileImage ? `url(${profileImage})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {!profileImage && (
                        <img
                          src="../../ProfileAvatarMobile.svg"
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

                  <div
                    className="absolute -right-[50px] w-10 h-10 top-1/3 bg-white rounded-full flex justify-center items-center"
                  >
                    <label
                      htmlFor="profile-upload"
                      className="w-[80%] h-[80%] flex items-center justify-center"
                      style={{
                        borderRadius: '50%',
                        backgroundImage: profileImage ? `url(${profileImage})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {!profileImage && (
                        <img
                          src="../../BannerUpload.svg"
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
              ) : (
                <img
                  src={steps[activeStep]?.imageUrl}
                  alt={steps[activeStep]?.label}
                  className="w-[40%] h-auto mb-4 md:w-[35%] lg:w-[30%] transition-all duration-300"
                />
              )}

              <h1
                className={`text-xl font-semibold text-[#707FDD] ${activeStep === 2 ? 'relative -top-[7rem]' : ''
                  } text-center px-4`}
              >
                {steps[activeStep]?.label}
              </h1>
            </div>
          </div>


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