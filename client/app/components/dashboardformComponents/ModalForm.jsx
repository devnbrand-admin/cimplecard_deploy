"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStepData } from "../../../store/cardSlice";
import { createCard } from "../../utils/cardCreationApi";
import { AddLinkSection } from "./AddLinkSection";
import Sidebar from "./Sidebar";
import { MdClose } from "react-icons/md";

import {
  BsTriangle,
  BsPerson,
  BsTelephone,
  BsLinkedin,
  BsPersonVideo,
  BsClockHistory,
  BsCartCheckFill,
  BsChat,
  BsUpload,
  BsEnvelopeAt,
  BsImages,
  BsBuilding,
} from "react-icons/bs";
import { TestimonialsSection } from "./TestimonialSection";
import axios from "../api_resources/axios";
import {
  activeStep1Val,
  validateImagesStep9,
  validateLinksStep8,
  validateStep10,
  validateStep3,
  validateStep4,
  validateStep5,
  validateStep6,
  validateTestimonialsStep7,
} from "./cardFormValidation/cardValidation";
import { uploadImages } from "./utils/imageUpload";

export default function ModalForm({ setIsModalOpen, cardId }) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [isCardCreate, setIsCardCreate] = useState(false);
  // const [testimonials, setTestimonials] = useState([
  //   {
  //     name: "",
  //     designation: "",
  //     description: "",
  //     imageUrl: "",
  //   },
  // ]);
  // const [instagramPost, setInstagramPost] = useState([""]);
  // const [instagramReels, setInstagramReels] = useState([""]);
  // const [youtubeVideo, setYoutubeVideo] = useState([""]);
  // const [images, setImages] = useState([]);
  // const [productData, setProductData] = useState([
  //   {
  //     name: "",
  //     imageUrl: "",
  //     serviceUrl: "",
  //     description: "",
  //   },
  // ]);

  // const [formData, setFormData] = useState({
  //   // Personal information
  //   firstName: "",
  //   middleName: "",
  //   lastName: "",
  //   jobTitle: "",
  //   companyName: "",
  //   location: "",
  //   profileImageUrl: "",
  //   headerImageUrl: "",
  //   templateType: "",
  //   cardName: "",
  //   qrCodeUrl: "",
  //   aboutUs: "",
  //   comanyAddress: "",
  //   dateOfBirth: "",
  //   bio: "",
  //   gridType: "Product",
  //   languageSpoken: "",
  //   additionalLink: "",
  //   emails: ["", ""],
  //   phoneNumbers: ["", "", ""],
  //   otherEmails: "",
  //   otherPhoneNumber: "",
  //   phoneNumber: "",

  //   // Emergency contact information
  //   emergencyName: "",
  //   emergencyRelationship: "",
  //   emergencyNumber: "",
  //   emergencyEmail: "",

  //   // Social media links
  //   SocialMediaLink: [], // Array of SocialMediaLink model objects
  //   companySocialMediaLink: [], // Array of companySocialMediaLink model objects

  //   // Gallery and media
  //   gallery: [],
  //   instagramPost: [],
  //   instagramReel: [],
  //   youtubeVideoLink: [],

  //   // Testimonials
  //   testimonials: [],
  //   // Services
  //   services: [],

  //   // Business hours
  //   businessHours: [
  //     {
  //       type: "",
  //       from: "",
  //       to: "",
  //     },
  //   ],
  // });
  const [clientErrors, setClientErrors] = useState({
    errors: {
      products: [],
    },
  });

  const [testimonials, setTestimonials] = useState([
    {
      name: "",
      designation: "",
      description: "",
      imageUrl: "",
    },
  ]);

  const [instagramPost, setInstagramPost] = useState([
    // "https://www.instagram.com/p/DDjXrD7OX3o/?img_index=10",
    "",
  ]);

  const [instagramReels, setInstagramReels] = useState([
    // "https://www.instagram.com/reel/DD7hegTgQ_G/",
    "",
  ]);

  const [youtubeVideo, setYoutubeVideo] = useState([
    // "https://www.youtube.com/watch?v=u4smAxDtbGc&feature=youtu.be",
    "",
  ]);

  const [images, setImages] = useState([]);

  const [productData, setProductData] = useState([
    // {
    //   name: "Product",
    //   imageUrl: null ,
    //   serviceUrl: "https://personal-portfolio-eosin-xi.vercel.app/",
    //   description: "desc",
    //   cardId: ""
    // },
    {
      name: "",
      imageUrl: null,
      serviceUrl: "",
      description: "",
      cardId: "",
    },
  ]);

  // const [formData, setFormData] = useState({
  //   // Personal information
  //   firstName: "John",
  //   middleName: "",
  //   lastName: "Doe",
  //   jobTitle: "Software Developer",
  //   companyName: "Tech Innovators",
  //   location: "San Francisco, CA",
  //   profileImageUrl: null,
  //   headerImageUrl: null,
  //   templateType: "Modern",
  //   cardName: "johns-business-card2" + new Date(),
  //   qrCodeUrl: "https://example.com/qrcode.jpg",
  //   aboutUs: "A software developer with a passion for coding.",
  //   companyAddress: "123 Tech Avenue, San Francisco, CA",
  //   dateOfBirth: "1990-05-15",
  //   bio: "Specializing in web and mobile app development.",
  //   gridType: "products",
  //   languageSpoken: "English, Spanish",
  //   additionalLink: "https://example.com/portfolio",
  //   emails: ["john.doe@example.com", "other.email@example.com"],
  //   phoneNumbers: ["1234567890", "0987654321"],
  //   otherEmails: "other.email@example.com",
  //   otherPhoneNumber: "0987654321",
  //   phoneNumber: "1234567890",

  //   // Emergency contact information
  //   emergencyName: "John's Friend",
  //   emergencyRelationship: "Friend",
  //   emergencyNumber: "0987654321",
  //   emergencyEmail: "emergency@example.com",

  //   // Social media links
  //   SocialMediaLink: [
  //     {
  //       // id: 1,
  //       platform: "LinkedIn",
  //       url: "https://linkedin.com/in/johndoe",
  //       // iconUrl: "https://example.com/linkedin-icon.jpg",
  //       cardId: "card1-uuid",
  //     },
  //     {
  //       // id: 2,
  //       cardId: "card2-uuid",

  //       platform: "Twitter",
  //       url: "https://twitter.com/johndoe",
  //       // iconUrl: "https://example.com/twitter-icon.jpg",
  //     },
  //   ],
  //   companySocialMediaLink: [
  //     {
  //       // id: 1,
  //       platform: "LinkedIn",
  //       url: "https://linkedin.com/in/johndoe",
  //       // iconUrl: "https://example.com/linkedin-icon.jpg",
  //       cardId: "card1-uuid",

  //     },
  //     {
  //       // id: 2,
  //       platform: "Twitter",
  //       url: "https://twitter.com/johndoe",
  //       iconUrl: "https://example.com/twitter-icon.jpg",
  //       cardId: "card1-uuid",

  //     },
  //   ],

  //   // Gallery and media
  //   gallery: [],
  //   instagramPost: ["https://instagram.com/johndoe/post1"],
  //   instagramReel: ["https://instagram.com/johndoe/reel1"],
  //   youtubeVideoLink: ["https://youtube.com/watch?v=12345"],

  //   // Testimonials
  //   testimonials: [
  //     {
  //       id: 1,
  //       name: "Alice Johnson",
  //       designation: "CEO",
  //       description: "John is a great developer, helped us with our project!",
  //       imageUrl: "https://example.com/testimonial1.jpg",
  //       cardId: "card1-uuid"

  //     },
  //   ],

  //   // Services
  //   services: [
  //     {
  //       id: 1,
  //       name: "Web Development",
  //       imageUrl: null,
  //       serviceUrl: "https://example.com/webdev",
  //       description: "Full-stack web development services.",
  //       cardId:"asasfcardId"
  //     },
  //   ],

  //   // Business hours
  //   businessHours: [
  //     {
  //       id: 1,
  //       type: "",
  //       from: "",
  //       to: "",
  //       cardId: "card1-uuid"

  //     },
  //   ],
  // });

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
    gridType: "Product",
    languageSpoken: "",
    additionalLink: "",
    emails: ["",""],
    phoneNumbers: [""],
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

  const steps = [
    { id: 1, label: "Choose Template", icon: <BsTriangle /> },
    { id: 2, label: "Profile", icon: <BsPerson /> },
    { id: 3, label: "Contact Details", icon: <BsTelephone /> },
    { id: 4, label: "Social Media Links", icon: <BsLinkedin /> },
    { id: 5, label: "Company Media Links", icon: <BsBuilding /> },
    { id: 6, label: "Product / Services", icon: <BsCartCheckFill /> },
    { id: 7, label: "Testimonials", icon: <BsPersonVideo /> },
    { id: 8, label: "Post Links", icon: <BsUpload /> },
    { id: 9, label: "Gallery", icon: <BsImages /> },
    { id: 10, label: "Business Hours", icon: <BsClockHistory /> },
    { id: 11, label: "Help", icon: <BsChat /> },
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  const handleAdd = () => {};

  const handleTemplateSelection = (template) => {
    setFormData((prev) => ({
      ...prev,
      templateType: template,
    }));
  };

  // const handleProfileUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const imageUrl = reader.result;
  //       setProfileImage(imageUrl);
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         profileImageUrl: imageUrl,
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
      setFormData((prevFormData) => ({
        ...prevFormData,
        profileImageUrl: file,
      }));
    }
  };

  // const handleCoverUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         headerImageUrl: reader.result,
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleCoverUpload = (event) => {
    const file = event.target.files[0];
    // const fileURL = URL.createObjectURL(file);

    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        headerImageUrl: file,
      }));
    }
  };

  // const handleProductUpload = (event, index) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProductData((prevData) =>
  //         prevData.map((item, i) =>
  //           i === index ? { ...item, imageUrl: reader.result } : item
  //         )
  //       );
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleProductUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      setProductData((prevData) =>
        prevData.map((item, i) =>
          i === index ? { ...item, imageUrl: file } : item
        )
      );
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

  // const handleImageUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   const newImages = files.map((file) => URL.createObjectURL(file));
  //   setImages((prev) => [...prev, ...newImages]);
  // };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // useEffect(()=>{
  //   if(Object.entries(clientErrors).length===0 && Object.entries(formData.length)>=0){
  //     setIsCardCreate(true)
  //     console.log("btn-t",clientErrors,formData)
  //   }else{
  //     console.log("btn-f",clientErrors,formData)

  //     setIsCardCreate(false)
  //   }
  // },[clientErrors,formData])

  const handleSave = () => {
    // dispatch(setStepData({ step: `step${activeStep}`, data: formData }));
    console.log(formData, "formdata");
    console.log(activeStep, "activeStep");

    // Move to the next step if conditions are met
    if (activeStep < steps.length) {
      // if (activeStep === 9) {
      //   return;
      // }

      if (activeStep === 2) {
        // Validate form data for step 2
        const { valid, errors } = activeStep1Val(formData);

        if (!valid) {
          setClientErrors({ ...clientErrors, ...errors }); // Set errors
          return; // Exit if validation fails
        } else {
          // If no errors, clear the errors state
          setClientErrors({
            errors: {
              products: [],
            },
          });
        }
      }
      if (activeStep === 3) {
        const { valid, errors } = validateStep3(formData);

        if (!valid) {
          setClientErrors({ ...clientErrors, errors });
          return; // Exit if validation fails
        } else {
          setClientErrors({
            errors: {
              products: [],
            },
          });
        }
      }
      if (activeStep === 4) {
        // Validate form data for step 2
        const { valid, errors } = validateStep4(formData);

        if (!valid) {
          setClientErrors({ ...clientErrors, errors }); // Set errors
          return; // Exit if validation fails
        } else {
          // If no errors, clear the errors state
          setClientErrors({
            errors: {
              products: [],
            },
          });
        }
      }
      if (activeStep === 5) {
        // Validate form data for step 5
        const { valid, errors } = validateStep5(formData);

        if (!valid) {
          setClientErrors({ ...clientErrors, errors }); // Set errors
          return; // Exit if validation fails
        } else {
          // If no errors, clear the errors state
          setClientErrors({
            errors: {
              products: [],
            },
          });
        }
      }
      if (activeStep === 6) {
        // Validate form data for step 6
        const { valid, errors } = validateStep6(formData, productData);

        if (!valid) {
          setClientErrors({ ...clientErrors, errors }); // Set errors
          return; // Exit if validation fails
        } else {
          // If no errors, clear the errors state
          setClientErrors({
            errors: {
              products: [],
            },
          });
        }
      }
      if (activeStep === 7) {
        // Validate form data for step 5
        const { valid, errors } = validateTestimonialsStep7(testimonials);

        if (!valid) {
          setClientErrors({ ...clientErrors, errors }); // Set errors
          return; // Exit if validation fails
        } else {
          // If no errors, clear the errors state
          setClientErrors({
            errors: {
              products: [],
            },
          });
        }
      }
      if (activeStep === 8) {
        // Validate form data for step 8
        const validInstagramPosts = validateLinksStep8(
          instagramPost,
          "instagramPost"
        ).valid;
        const validInstagramReels = validateLinksStep8(
          instagramReels,
          "instagramReel"
        ).valid;
        const validYouTubeVideos = validateLinksStep8(
          youtubeVideo,
          "youtubeVideoLink"
        ).valid;

        if (validInstagramPosts && validInstagramReels && validYouTubeVideos) {
          setClientErrors({
            errors: {
              products: [],
            },
          });
          // Proceed with saving
        } else {
          const instagramValidation = validateLinksStep8(
            instagramPost,
            "instagramPost"
          );
          const reelsValidation = validateLinksStep8(
            instagramReels,
            "instagramReel"
          );
          const youtubeValidation = validateLinksStep8(
            youtubeVideo,
            "youtubeVideoLink"
          );

          // const validInstagramPosts = instagramValidation.valid;
          // const validInstagramReels = reelsValidation.valid;
          // const validYouTubeVideos = youtubeValidation.valid;

          // Access errors
          const instagramErrors = instagramValidation.errors;
          const reelsErrors = reelsValidation.errors;
          const youtubeErrors = youtubeValidation.errors;

          setClientErrors({
            ...clientErrors, // Preserve existing error states
            instagramPost: { errors: instagramErrors },
            instagramReel: { errors: reelsErrors },
            youtubeVideoLink: { errors: youtubeErrors },
          });

          return; // Exit if validation fails
        }
      }
      if (activeStep === 9) {
        const { valid, errors } = validateImagesStep9(images);

        if (valid) {
          setClientErrors({ ...clientErrors, ...errors });
          return; // Exit if validation fails
        } else {
          setClientErrors({
            errors: {
              products: [],
            },
          });
        }
      }
      if (activeStep === 10) {
        // Validate form data for step 2
        const { valid, errors } = validateStep10(formData);
        if (!valid) {
          setClientErrors({ ...clientErrors, errors }); // Set errors
          return; // Exit if validation fails
        } else {
          // If no errors, clear the errors state
          setClientErrors({});
          return;
        }
      }

      // Proceed to the next step
      setActiveStep(activeStep + 1);
    }
  };

  const handleCreate = async (e) => {
    if (activeStep === 10) {
      // Validate form data for step 2
      const { valid, errors } = validateStep10(formData);

      if (!valid) {
        setClientErrors({ ...clientErrors, errors }); // Set errors
        return; // Exit if validation fails
      } else {
        // If no errors, clear the errors state
        setClientErrors({
          errors: {
            products: [],
          },
        });
      }
    }
    const filesToUpload = productData
      .map((product) => product.imageUrl)
      .filter((file) => file instanceof File);

    // Upload images and get URLs
    const uploadedUrls = await uploadImages(filesToUpload);
    // Map uploaded URLs back to productData
    const updatedProductData = productData.map((product, index) => ({
      ...product,
      imageUrl: uploadedUrls[index] || product.imageUrl,
    }));
    console.log(updatedProductData, "updatedProductData");

    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      services: updatedProductData,
      testimonials: testimonials,
      instagramPost: instagramPost,
      instagramReel: instagramReels,
      youtubeVideoLink: youtubeVideo,
      gallery: images,
    }));
    console.log("Form Data:ModalForm", formData);
    try {
      const response = await createCard(formData);
      console.log("Card saved successfully:", response);
      setIsModalOpen(false);
      // dispatch(setCardData(formData)); // Update Redux store
    } catch (error) {
      console.log("Failed to save card:", error);
    }
  };

  // useEffect(()=>{

  //   setFormData({
  //       // Personal information
  //       firstName: "",
  //       middleName: "",
  //       lastName: "",
  //       jobTitle: "",
  //       companyName: "",
  //       location: "",
  //       profileImageUrl: "",
  //       headerImageUrl: "",
  //       templateType: "",
  //       cardName: "",
  //       qrCodeUrl: "",
  //       aboutUs: "",
  //       companyAddress: "",
  //       dateOfBirth: "",
  //       bio: "",
  //       gridType: "",
  //       languageSpoken: "",
  //       additionalLink: "",
  //       emails: [],
  //       phoneNumbers: [],
  //       otherEmails: "",
  //       otherPhoneNumber: "",
  //       phoneNumber: "",

  //       // Emergency contact information
  //       emergencyName: "",
  //       emergencyRelationship: "",
  //       emergencyNumber: "",
  //       emergencyEmail: "",

  //       // Social media links
  //       SocialMediaLink: [],
  //       companySocialMediaLink: [],

  //       // Gallery and media
  //       gallery: [],
  //       instagramPost: [],
  //       instagramReel: [],
  //       youtubeVideoLink: [],

  //       // Testimonials
  //       testimonials: [],

  //       // Services
  //       services: [],

  //       // Business hours
  //       businessHours: [
  //         {
  //           id: 1,
  //           type: "",
  //           from: "",
  //           to: "",
  //           cardId: "",
  //         },
  //       ],
  //     });

  //   if(cardId) getSingleCardData(cardId)
  // },[cardId])

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

  return (
    <div
      className="fixed  inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      suppressHydrationWarning
    >
      <div
        className="bg-white relative rounded-lg w-full max-w-7xl h-[80%] flex"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute z-30 right-[5%] top-[5%]  text-black "
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(false);
          }}
        >
          <MdClose className="text-4xl p-2 text-black" />
        </button>

        <Sidebar
          activeStep={activeStep}
          handleStepClick={handleStepClick}
          steps={steps}
        />

        <div className="w-full px-6 relative overflow-scroll text-sm ">
          <div className="mb-4 sticky top-0">
            <div
              className="text-white text-center text-4xl font-semibold py-6 px-6"
              style={{
                backgroundImage: `url('../../ModalHeader2.png')`,
                backgroundSize: "contain",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                top: 0,
                left: 0,
                width: "100%",
                height: "fit",
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
                    <a
                      href="/cards/medical/bbefccdf-99f1-4c76-a64f-7944faff30dc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white shadow-lg rounded-xl">
                        <img
                          alt="Cover"
                          className="object-cover rounded-xl w-full h-48"
                          src="../../template1cover.png"
                        />
                        <div className="p-4">
                          <h4 className="font-bold text-lg">Medical</h4>
                          <p className="text-gray-500 text-sm italic">
                            “Leave a Lasting Impression – Your Medical Card,
                            Your Professional Identity!"
                          </p>
                        </div>
                      </div>
                    </a>
                    <div className="py-2 px-4 flex space-x-2 mt-2">
                      <button
                        onClick={() => handleTemplateSelection("Medical")}
                        className={`py-2 px-4 rounded-full text-[#707FDD] ${
                          formData.templateType === "Medical"
                            ? "bg-[#707FDD] text-white"
                            : "bg-transparent border-2 border-[#707FDD] text-[#707FDD]"
                        }`}
                      >
                        {formData.templateType === "Medical"
                          ? "Selected"
                          : "Select"}
                      </button>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="w-80 mx-auto">
                    <a
                      href="/cards/astrologer/2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white shadow-lg rounded-xl">
                        <img
                          alt="Cover"
                          className="object-cover rounded-xl w-full h-48"
                          src="../../template2cover.png"
                        />
                        <div className="p-4">
                          <h4 className="font-bold text-lg">Astrologer</h4>
                          <p className="text-gray-500 text-sm italic">
                            “Chart Your Path to Success – Your Astrological
                            Card, Your Cosmic Identity!“
                          </p>
                        </div>
                      </div>
                    </a>
                    <div className="py-2 px-4 flex space-x-2 mt-2">
                      <button
                        onClick={() => handleTemplateSelection("Astrologer")}
                        className={`py-2 px-4 rounded-full text-[#707FDD] ${
                          formData.templateType === "Astrologer"
                            ? "bg-[#707FDD] text-white"
                            : "bg-transparent border-2 border-[#707FDD] text-[#707FDD]"
                        }`}
                      >
                        {formData.templateType === "Astrologer"
                          ? "Selected"
                          : "Select"}
                      </button>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="w-80 mx-auto">
                    <a
                      href="/cards/b2b/3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white shadow-lg rounded-xl">
                        <img
                          alt="Cover"
                          className="object-cover rounded-xl w-full h-48"
                          src="../../template3cover.png"
                        />
                        <div className="p-4">
                          <h4 className="font-bold text-lg">B2B Business</h4>
                          <p className="text-gray-500 italic ">
                            "Build Connections That Matter – Your Business Card,
                            Your Gateway to Partnerships!"
                          </p>
                        </div>
                      </div>
                    </a>
                    <div className="py-2 px-4 flex space-x-2 mt-2">
                      <button
                        onClick={() => handleTemplateSelection("B2B Business")}
                        className={`py-2 px-4 rounded-full text-[#707FDD] ${
                          formData.templateType === "B2B Business"
                            ? "bg-[#707FDD] text-white"
                            : "bg-transparent border-2 border-[#707FDD] text-[#707FDD]"
                        }`}
                      >
                        {formData.templateType === "B2B Business"
                          ? "Selected"
                          : "Select"}
                      </button>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="w-80 mx-auto">
                    <a
                      href="https://example.com/Lawyer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white shadow-lg rounded-xl">
                        <img
                          alt="Cover"
                          className="object-cover rounded-xl w-full h-48"
                          src="../../template4cover.png"
                        />
                        <div className="p-4">
                          <h4 className="font-bold text-lg">Lawyer</h4>
                          <p className="text-gray-500 italic">
                            "Make Your Mark in Justice – Your Legal Card, Your
                            Professional Statement!"
                          </p>
                        </div>
                      </div>
                    </a>
                    <div className="py-2 px-4 flex space-x-2 mt-2">
                      <button
                        onClick={() => handleTemplateSelection("Lawyer")}
                        className={`py-2 px-4 rounded-full text-[#707FDD] ${
                          formData.templateType === "Lawyer"
                            ? "bg-[#707FDD] text-white"
                            : "bg-transparent border-2 border-[#707FDD] text-[#707FDD]"
                        }`}
                      >
                        {formData.templateType === "Lawyer"
                          ? "Selected"
                          : "Select"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="py-6 pb-10 flex justify-end space-x-2">
                  <div
                    className="text-white text-center text-4xl font-semibold py-6 px-6"
                    style={{
                      backgroundImage: `url('../../Underline.svg')`,
                      backgroundSize: "contain",
                      backgroundPosition: "left",
                      backgroundRepeat: "no-repeat",
                      top: 0,
                      left: 0,
                      width: "70%",
                      height: "10px",
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
              <div className="relative flex flex-col gap-[4rem] py-2">
                <div
                  className="w-full"
                  style={{
                    backgroundColor: "#eef0ff",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    height: "15vh",
                    position: "sticky",
                    top: "0",
                    left: "0",
                    right: "0",
                    backgroundImage: formData.headerImageUrl
                      ? `url(${formData.headerImageUrl})`
                      : "none",
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

                <div className="space-y-4  text-sm">
                  {/* Name Fields */}
                  <div className="flex gap-4">
                    <div className="flex-1">
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
                        className={`w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md ${
                          clientErrors.firstName ? "border-red-500" : ""
                        }`}
                      />
                      {clientErrors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="flex-1">
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
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className={`w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md ${
                          clientErrors.lastName ? "border-red-500" : ""
                        }`}
                      />
                      {clientErrors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Name and Job Title */}
                  <div className="flex gap-4 text-sm">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Company's Name"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        className={`w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md ${
                          clientErrors.companyName ? "border-red-500" : ""
                        }`}
                      />
                      {clientErrors.companyName && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors.companyName}
                        </p>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Company's Address"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className={`w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md ${
                          clientErrors.location ? "border-red-500" : ""
                        }`}
                      />
                      {clientErrors.location && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors.location}
                        </p>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Job Role"
                        value={formData.jobTitle}
                        onChange={(e) =>
                          setFormData({ ...formData, jobTitle: e.target.value })
                        }
                        className={`w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md ${
                          clientErrors.jobTitle ? "border-red-500" : ""
                        }`}
                      />
                      {clientErrors.jobTitle && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors.jobTitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* About Us */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Write briefly about yourself"
                        value={formData.aboutUs}
                        onChange={(e) =>
                          setFormData({ ...formData, aboutUs: e.target.value })
                        }
                        className={`w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md ${
                          clientErrors.aboutUs ? "border-red-500" : ""
                        }`}
                      />
                      {clientErrors.aboutUs && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors.aboutUs}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Language Spoken and Date of Birth */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <select
                        className={`w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md ${
                          clientErrors.languageSpoken ? "border-red-500" : ""
                        }`}
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
                      {clientErrors.languageSpoken && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors.languageSpoken}
                        </p>
                      )}
                    </div>
                    <div className="flex-1 ">
                      <input
                        type="text"
                        placeholder="Date of Birth (yyyy-mm-dd)"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dateOfBirth: e.target.value,
                          })
                        }
                        className={`w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md ${
                          clientErrors.dateOfBirth ? "border-red-500" : ""
                        }`}
                      />
                      {clientErrors.dateOfBirth && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors.dateOfBirth}
                        </p>
                      )}
                      <div className="py-6  flex justify-end space-x-2">
                        <div
                          className="text-white text-center text-4xl font-semibold py-6 px-6"
                          style={{
                            backgroundImage: `url('../../Underline.svg')`,
                            backgroundSize: "contain",
                            backgroundPosition: "left",
                            backgroundRepeat: "no-repeat",
                            top: 0,
                            left: 0,
                            width: "70%",
                            height: "10px",
                          }}
                        ></div>
                        <button
                          onClick={handleSave}
                          className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="flex flex-col gap-5">
              <div
                className="py-2"
                style={{
                  backgroundImage: `url('../../ContactDetails.svg')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto",
                  minHeight: "230px",
                }}
              ></div>

              <div className="space-y-4">
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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors.errors?.phoneNumber0 && (
                      <p className="text-red-500 text-sm">
                        {clientErrors.errors.phoneNumber0}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Other Number"
                      value={formData.phoneNumbers[1]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumbers: formData.phoneNumbers.map(
                            (num, index) => (index === 1 ? e.target.value : num)
                          ),
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors.errors?.phoneNumber1 && (
                      <p className="text-red-500 text-sm">
                        {clientErrors.errors.phoneNumber1}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Other Number"
                      value={formData.phoneNumbers2}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumbers: formData.phoneNumbers.map(
                            (num, index) => (index === 2 ? e.target.value : num)
                          ),
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors.errors?.phoneNumber2 && (
                      <p className="text-red-500 text-sm">
                        {clientErrors.errors.phoneNumber2}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Email Address"
                      value={formData.emails[0]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emails: formData.emails.map((email, index) =>
                            index === 0 ? e.target.value : email
                          ),
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors.errors?.email0 && (
                      <p className="text-red-500 text-sm">
                        {clientErrors.errors.email0}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Other Email Address"
                      value={formData.emails[1] || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emails: formData.emails.map((email, index) =>
                            index === 1 ? e.target.value : email
                          ),
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors.errors?.email1 && (
                      <p className="text-red-500 text-sm">
                        {clientErrors.errors.email1}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <h1 className="text-2xl font-semibold text-[#707FDD]">
                    Emergency Contact Details
                  </h1>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.emergencyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emergencyName: e.target.value,
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors.errors?.emergencyName && (
                      <p className="text-red-500 text-sm">
                        {clientErrors.errors.emergencyName}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Relationship"
                      value={formData.emergencyRelationship}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emergencyRelationship: e.target.value,
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors.errors?.emergencyRelationship && (
                      <p className="text-red-500 text-sm">
                        {clientErrors.errors.emergencyRelationship}
                      </p>
                    )}
                  </div>
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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors?.errors?.emergencyNumber && (
                      <p className="text-red-500 text-sm">
                        {clientErrors.errors.emergencyNumber}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Email Address"
                      value={formData.emergencyEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emergencyEmail: e.target.value,
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                    {clientErrors?.errors?.emergencyEmail && (
                      <p className="text-red-500 text-sm">
                        {clientErrors?.errors?.emergencyEmail}
                      </p>
                    )}
                  </div>
                </div>
                <div className="py-6 flex justify-end space-x-2">
                  <div
                    className="text-white text-center text-4xl font-semibold py-6 px-6"
                    style={{
                      backgroundImage: `url('../../Underline.svg')`,
                      backgroundSize: "contain",
                      backgroundPosition: "left",
                      backgroundRepeat: "no-repeat",
                      top: 0,
                      left: 0,
                      width: "70%",
                      height: "10px",
                    }}
                  ></div>
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

          {activeStep === 4 && (
            <div>
              <div
                className="py-2"
                style={{
                  backgroundImage: `url('../../SocialMediaLinks.svg')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto",
                  minHeight: "300px",
                }}
              ></div>

              <div className="space-y-6 mt-4">
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
                      className={`w-full p-3 border ${
                        clientErrors?.errors?.Website ? "border-red-500" : ""
                      } text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md`}
                    />
                    {clientErrors?.errors?.Website && (
                      <p className="text-red-500 text-sm mt-1">
                        {clientErrors?.errors?.Website}
                      </p>
                    )}
                  </div>

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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>

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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* Twitter */}
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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>

                  {/* GitHub */}
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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>

                  {/* Additional Link */}
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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>
                </div>

                <div className="py-6 flex justify-end space-x-2">
                  <div
                    className="text-white text-center text-4xl font-semibold py-6 px-6"
                    style={{
                      backgroundImage: `url('../../Underline.svg')`,
                      backgroundSize: "contain",
                      backgroundPosition: "left",
                      backgroundRepeat: "no-repeat",
                      top: 0,
                      left: 0,
                      width: "70%",
                      height: "10px",
                    }}
                  ></div>
                  {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                  <button
                    onClick={handleSave}
                    className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                  >
                    {" "}
                    Save Changes
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
                  backgroundImage: `url('../../SocialMediaLinks.svg')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto",
                  minHeight: "300px",
                }}
              ></div>

              <div className="space-y-6 mt-4">
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
                      className={`w-full p-3 border ${
                        clientErrors?.errors?.companyWebsite
                          ? "border-red-500"
                          : ""
                      } text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md`}
                    />
                    {clientErrors?.errors?.companyWebsite && (
                      <p className="text-red-500 text-sm mt-1">
                        {clientErrors?.errors?.companyWebsite}
                      </p>
                    )}
                  </div>

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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>

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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* Twitter */}
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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>

                  {/* GitHub */}
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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>

                  {/* Additional Link */}
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
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>
                </div>

                <div className="py-6 flex justify-end space-x-2">
                  <div
                    className="text-white text-center text-4xl font-semibold py-6 px-6"
                    style={{
                      backgroundImage: `url('../../Underline.svg')`,
                      backgroundSize: "contain",
                      backgroundPosition: "left",
                      backgroundRepeat: "no-repeat",
                      top: 0,
                      left: 0,
                      width: "70%",
                      height: "10px",
                    }}
                  ></div>
                  {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                  <button
                    onClick={handleSave}
                    className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                  >
                    {" "}
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
                  backgroundImage: `url('../../Product&Services.svg')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto",
                  minHeight: "230px",
                }}
              ></div>

              <div className="space-y-4 mt-4">
                <div className="flex justify-center gap-4">
                  <h1 className="text-2xl font-semibold text-[#707FDD]">
                    Choose What To Add
                  </h1>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    className={`py-2 px-4 rounded-full border-2 ${
                      formData.gridType === "Product"
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
                    className={`py-2 px-4 rounded-full border-2 ${
                      formData.gridType === "Service"
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
                {clientErrors?.errors?.gridType && (
                  <p className="text-red-500 text-sm mt-2">
                    {clientErrors?.errors?.gridType}
                  </p>
                )}

                <div className="space-y-4 mt-4">
                  {/* Scrollable Container */}
                  <div
                    className="overflow-y-scroll"
                    style={{
                      backgroundColor: "#FFFFFF",
                      width: "100%",
                      maxHeight: "400px", // Set a max height for the scrollable area
                      padding: "20px",
                      borderRadius: "8px",
                    }}
                  >
                    {productData.map((product, index) => (
                      <div
                        key={index}
                        className="relative flex items-center justify-between mb-4"
                        style={{
                          backgroundColor: "#F1F2FC",
                          width: "100%",
                          padding: "20px",
                          borderRadius: "8px",
                        }}
                      >
                        {/* Input Fields */}
                        <div className="flex-1" style={{ maxWidth: "80%" }}>
                          <input
                            type="text"
                            placeholder="Name of the service/product"
                            value={product.name}
                            onChange={(e) =>
                              setProductData(
                                productData.map((item, i) =>
                                  i === index
                                    ? { ...item, name: e.target.value }
                                    : item
                                )
                              )
                            }
                            className={`p-3 border w-full rounded-md ${
                              clientErrors?.errors?.products?.length > 0 &&
                              clientErrors?.errors?.products[index]?.name &&
                              clientErrors?.errors?.products[index]?.name
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          {clientErrors?.errors?.products?.length > 0 &&
                            clientErrors?.errors?.products[index]?.name && (
                              <p className="text-red-500 text-sm">
                                {clientErrors?.errors?.products[index]?.name}
                              </p>
                            )}
                          <input
                            type="text"
                            placeholder="Description of the Product/Service"
                            value={product.description}
                            onChange={(e) =>
                              setProductData(
                                productData.map((item, i) =>
                                  i === index
                                    ? { ...item, description: e.target.value }
                                    : item
                                )
                              )
                            }
                            className={`p-3 border w-full rounded-md ${
                              clientErrors?.errors?.products?.length > 0 &&
                              clientErrors?.errors?.products[index]?.description
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          {clientErrors?.errors?.products?.length > 0 &&
                            clientErrors?.errors?.products[index]
                              ?.description && (
                              <p className="text-red-500 text-sm">
                                {clientErrors?.errors?.products?.length > 0 &&
                                  clientErrors?.errors?.products[index]
                                    ?.description}
                              </p>
                            )}

                          <input
                            type="text"
                            placeholder="External Link of the Product/Service"
                            value={product.serviceUrl}
                            onChange={(e) =>
                              setProductData(
                                productData.map((item, i) =>
                                  i === index
                                    ? { ...item, serviceUrl: e.target.value }
                                    : item
                                )
                              )
                            }
                            className={`p-3 border w-full rounded-md ${
                              clientErrors?.errors?.products?.length > 0 &&
                              clientErrors?.errors?.products[index]?.serviceUrl
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                          />
                          {clientErrors?.errors?.products?.length > 0 &&
                            clientErrors?.errors?.products[index]
                              ?.serviceUrl && (
                              <p className="text-red-500 text-sm">
                                {clientErrors?.errors?.products?.length > 0 &&
                                  clientErrors?.errors?.products[index]
                                    ?.serviceUrl}
                              </p>
                            )}
                        </div>

                        {/* Image Upload */}
                        <div
                          className="ml-8"
                          style={{
                            width: "7rem",
                            height: "6rem",
                            backgroundColor: "#707FDD",
                            borderRadius: "0.5rem",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <label
                            htmlFor={`product-upload-${index}`}
                            className="w-full h-full flex items-center justify-center cursor-pointer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            {productData[index]?.imageUrl ? (
                              <img
                                src={productData[index].imageUrl}
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
                          {clientErrors?.errors?.products?.length > 0 &&
                            clientErrors?.errors?.products[index]?.imageUrl && (
                              <p className="text-red-500 text-sm">
                                {clientErrors?.errors?.products?.length > 0 &&
                                  clientErrors?.errors?.products[index]
                                    .imageUrl}
                              </p>
                            )}
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() =>
                            setProductData(
                              productData.filter((_, i) => i !== index)
                            )
                          }
                          className="  text-red-500 text-4xl"
                          title="Delete"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Button */}
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

                <div className="py-6 flex justify-end space-x-2">
                  <div
                    className="text-white text-center text-4xl font-semibold py-6 px-6"
                    style={{
                      backgroundImage: `url('../../Underline.svg')`,
                      backgroundSize: "contain",
                      backgroundPosition: "left",
                      backgroundRepeat: "no-repeat",
                      top: 0,
                      left: 0,
                      width: "70%",
                      height: "10px",
                    }}
                  ></div>
                  {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> */}
                  <button
                    onClick={handleSave}
                    className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                  >
                    {" "}
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeStep === 7 && (
            <TestimonialsSection
              testimonials={testimonials}
              setTestimonials={setTestimonials}
              setClientErrors={setClientErrors}
              clientErrors={clientErrors}
              handleSave={handleSave}
            />
          )}

          <>
            {/* {activeStep === 6 && (
            <div>
              <div
                className="flex mt-6 items-center justify-center"
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "100%",
                  height: "8rem",
                  overflowY: "scroll",
                  padding: "20px",
                }}
              >
                <div
                  className="flex flex-col gap-2"
                  style={{ width: "100%", maxWidth: "1080px" }}
                >
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                      style={{
                        backgroundColor: "#F1F2FC",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "120px",
                        padding: "20px",
                        borderRadius: "8px",
                      }}
                    >
                      <div className="flex-1" style={{ maxWidth: "80%" }}>
                        <h1
                          className="text-[#787F89] text-sm mb-1"
                          style={{
                            fontSize: "14px",
                            textAlign: "left",
                          }}
                        >
                          Name | Job Role | Industry
                        </h1>
                        <input
                          type="text"
                          placeholder="Testimonial Message"
                          className="p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                          style={{
                            width: "100%",
                            maxWidth: "1080px",
                            display: "block",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mt-4">
                <div className="flex justify-center gap-4">
                  <h1 className="text-2xl font-semibold text-[#707FDD]">
                    Add Testimonial
                  </h1>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.testimonialName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          testimonialName: e.target.value,
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Job Role"
                      value={formData.testimonialRole}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          testimonialRole: e.target.value,
                        })
                      }
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <select
                      className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      value={formData.testimonialIndustry}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          testimonialIndustry: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          testimonialMessage: e.target.value,
                        })
                      }
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
                  <div
                    className="text-white text-center text-4xl font-semibold py-6 px-6"
                    style={{
                      backgroundImage: `url('../../Underline.svg')`,
                      backgroundSize: "contain",
                      backgroundPosition: "left",
                      backgroundRepeat: "no-repeat",
                      top: 0,
                      left: 0,
                      width: "70%",
                      height: "10px",
                    }}
                  ></div>
                  {/* <button className="bg-transparent text-[#707FDD] py-2 px-4 rounded-full border-2 border-[#707FDD]">
                        Preview Card
                      </button> *
                  <button
                    onClick={handleSave}
                    className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                  >
                    {" "}
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )} */}
          </>

          {activeStep === 8 && (
            <div>
              <div className="mt-4">
                <div>
                  {/* Instagram Posts */}
                  <AddLinkSection
                    title="Add Instagram Posts"
                    items={instagramPost}
                    setItems={setInstagramPost}
                    placeholder="Instagram Post Link"
                    setClientErrors={setClientErrors}
                    clientErrors={clientErrors}
                    type="instagramPost"
                  />

                  {/* Instagram Reels */}
                  <AddLinkSection
                    title="Add Instagram Reels"
                    items={instagramReels}
                    setItems={setInstagramReels}
                    placeholder="Instagram Reel Link"
                    setClientErrors={setClientErrors}
                    clientErrors={clientErrors}
                    type="instagramReel"
                  />

                  {/* YouTube Videos */}
                  <AddLinkSection
                    title="Add YouTube Videos"
                    items={youtubeVideo}
                    setItems={setYoutubeVideo}
                    placeholder="YouTube Video Link"
                    setClientErrors={setClientErrors}
                    clientErrors={clientErrors}
                    type="youtubeVideoLink"
                  />

                  {/* Save Button */}
                  <div className="py-6 flex justify-end space-x-2">
                    <div
                      className="text-white text-center text-4xl font-semibold py-6 px-6"
                      style={{
                        backgroundImage: `url('../../Underline.svg')`,
                        backgroundSize: "contain",
                        backgroundPosition: "left",
                        backgroundRepeat: "no-repeat",
                        top: 0,
                        left: 0,
                        width: "70%",
                        height: "10px",
                      }}
                    ></div>
                    <button
                      onClick={handleSave}
                      className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 9 && (
            <div className="relative p-6 w-full flex flex-col items-center">
              <div className="flex gap-4 flex-nowrap justify-start w-full overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-[#707FDD] hover:scrollbar-thumb-[#5C6CCF]">
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
                    className="w-40 h-56 bg-[#707FDD] bg-opacity-70 rounded-lg flex-shrink-0 flex items-center justify-center"
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

              {/* Error Messages */}
              {clientErrors?.images?.length === 1 && (
                <p className="text-red-500 text-xs mt-2">
                  * {clientErrors?.images[0]}
                </p>
              )}
              {clientErrors?.images?.length >= 1 && (
                <p className="text-red-500 text-xs mt-2">
                  * {clientErrors?.images[1]}
                </p>
              )}

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

              <div className="mt-20 py-6 flex justify-end space-x-2 w-full">
                <div
                  className="text-white text-center text-4xl font-semibold py-6 px-6"
                  style={{
                    backgroundImage: `url('../../Underline.svg')`,
                    backgroundSize: "contain",
                    backgroundPosition: "left",
                    backgroundRepeat: "no-repeat",
                    top: 0,
                    left: 0,
                    width: "70%",
                    height: "10px",
                  }}
                ></div>
                <button
                  onClick={handleSave}
                  className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeStep === 10 && (
            <div>
              <h2 className="text-lg font-bold mb-4">Business Hours</h2>
              <p className="text-sm text-[#787F89] mb-6">
                Add or manage your business hours. Right-click on a block to
                delete it.
              </p>
              <div
                className="py-2"
                style={{
                  backgroundImage: `url('../../BusinessHours.svg')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto",
                  minHeight: "200px",
                }}
              ></div>
              <div className="space-y-6">
                {formData.businessHours.map((hour, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 border rounded-md bg-[#F9FAFB] relative"
                    onContextMenu={(e) => {
                      e.preventDefault();
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
                        // onChange={(e) => {
                        //   const updatedBusinessHours = [...formData.businessHours];
                        //   updatedBusinessHours[index].from = e.target.value;
                        //   setFormData({
                        //     ...formData,
                        //     businessHours: updatedBusinessHours,
                        //   });
                        // }}
                        onChange={(e) => {
                          const updatedBusinessHours = [
                            ...formData.businessHours,
                          ]; // Create a shallow copy of the array
                          updatedBusinessHours[index] = {
                            ...updatedBusinessHours[index],
                            from: e.target.value,
                          }; // Create a copy of the object being updated
                          setFormData({
                            ...formData,
                            businessHours: updatedBusinessHours, // Update the businessHours array
                          });
                        }}
                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                      />
                      {clientErrors?.errors?.businessHours?.[index]?.from && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors?.errors?.businessHours[index].from}
                        </p>
                      )}
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
                      {clientErrors?.errors?.businessHours?.[index]?.to && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors?.errors?.businessHours[index].to}
                        </p>
                      )}
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
                      {clientErrors?.errors?.businessHours?.[index]?.type && (
                        <p className="text-red-500 text-xs mt-1">
                          {clientErrors?.errors?.businessHours[index].type}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex justify-end gap-4 pb-10">
                  <button
                    onClick={() => {
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

                    // disabled={!isCardCreate}
                    // className={`py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]
                    //   ${isCardCreate ? "active:transform active:scale-110" : "opacity-50 cursor-not-allowed"}
                    //   hover:${isCardCreate ? "bg-opacity-80" : "opacity-50"}`}
                  >
                    Create Card
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeStep === 11 && (
            <div>
              <div
                className="py-2"
                style={{
                  backgroundImage: `url('../../Help.svg')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto",
                  minHeight: "230px",
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
                  <h1 className="text-l font-semibold text-[#707FDD]">Or</h1>
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
        </div>
      </div>
    </div>
  );
}
