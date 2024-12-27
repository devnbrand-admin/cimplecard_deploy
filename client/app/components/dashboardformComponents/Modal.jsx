'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard } from '../../utils/cardCreationApi';
import "../../style/cardCreation.css"
import { BsTriangle, BsPerson, BsTelephone, BsLinkedin, BsPersonVideo, BsClockHistory, BsCartCheckFill, BsChat, BsUpload, BsEnvelopeAt, BsImages, BsBuilding } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import Sidebar from './Sidebar';
import ChooseTemplateStep from './steps/ChooseTemplateStep';
import ProfileStep from './steps/ProfileStep';
import ContactDetailsStep from './steps/ContactDetailsStep';
import SocialMediaLinksStep from './steps/SocialMediaLinksStep';
import CompanyMediaLinksStep from './steps/CompanyMediaLinksStep';
import ProductServicesStep from './steps/ProductServicesStep';
import TestimonialsStep from './steps/TestimonialsStep';
import PostLinksStep from './steps/PostLinksStep';
import GalleryStep from './steps/GalleryStep';
import BusinessHoursStep from './steps/BusinessHour';
import HelpStep from './steps/HelpStep';
import { FormButton } from './ModalFormMobile';
import { validateFormData } from '../../utils/validation';
import { cardForm } from '../../utils/constant';

export default function ResponsiveModalForm({ setIsModalOpen, cardId }) {
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const [testimonials, setTestimonials] = useState();

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
        // "https://example.com/photo1.jpg",
        // "https://example.com/photo2.jpg",
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
        // card:[],

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

    const handleAdd = () => { };
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
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    headerImageUrl: reader.result,
                }));
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



    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prev) => [...prev, ...newImages]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(formData)
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Save current step data to Redux
        dispatch(setStepData({ step: `step${activeStep}`, data: formData }));
        const valid = validateFormData(cardForm[activeStep-1], setErrors, formData)
        if (!valid) return
        
        // Move to the next step
        if (activeStep < steps.length) {
            if (activeStep === 9) {
                return;
            }
            setActiveStep(activeStep + 1);
        }
    };
    const handleBack = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1);
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

    return (
        <div className="fixed inset-0 shadow-sm bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4 md:p-0">
            <div className="bg-white relative rounded-lg w-full max-w-7xl h-[90vh] md:h-[80vh] flex flex-col md:flex-row overflow-hidden">
                <button
                    className="absolute z-30 right-4 top-4 text-black"
                    onClick={() => setIsModalOpen(false)}
                >
                    <MdClose className="text-4xl p-2" />
                </button>

                <div className="md:hidden">
                    <MobileHeader activeStep={activeStep} steps={steps} />
                </div>

                <div className="hidden md:flex md:w-1/4 bg-white relative rounded-lg w-full">
                    <Sidebar
                        activeStep={activeStep}
                        handleStepClick={handleStepClick}
                        steps={steps}
                    />
                </div>

                <div className="w-full  md:w-3/4  px-4 md:px-6 overflow-y-auto">
                    <div className="mb-4 hidden md:block sticky top-0 z-10 bg-white">
                        <StepHeader activeStep={activeStep} steps={steps} />
                    </div>

                    {activeStep === 1 && (
                        <ChooseTemplateStep
                            formData={formData}
                            handleTemplateSelection={handleTemplateSelection}
                            handleSave={handleSave}
                        />
                    )}
                    {activeStep === 2 && (
                        <ProfileStep
                            formData={formData}
                            setFormData={setFormData}
                            handleProfileUpload={handleProfileUpload}
                            handleInputChange={handleInputChange}
                            handleSave={handleSave}
                            errors={errors}
                        />
                    )}
                    {activeStep === 3 && (
                        <ContactDetailsStep
                            formData={formData}
                            setFormData={setFormData}
                            handleInputChange={handleInputChange}
                            handleSave={handleSave}
                            errors={errors}
                        />
                    )}
                    {activeStep === 4 && (
                        <SocialMediaLinksStep
                            formData={formData}
                            setFormData={setFormData}
                            handleSave={handleSave}
                            errors={errors}
                        />
                    )}
                    {activeStep === 5 && (
                        <CompanyMediaLinksStep
                            formData={formData}
                            setFormData={setFormData}
                            handleSave={handleSave}
                            errors={errors}
                        />
                    )}
                    {activeStep === 6 && (
                        <ProductServicesStep
                            formData={formData}
                            setFormData={setFormData}
                            productData={productData}
                            setProductData={setProductData}
                            handleSave={handleSave}
                            errors={errors}
                        />
                    )}
                    {activeStep === 7 && (
                        <TestimonialsStep
                            testimonials={formData?.testimonials}
                            handleSave={handleSave}
                            setFormData={setFormData}
                            errors={errors}
                        />
                    )}
                    {activeStep === 8 && (
                        <PostLinksStep
                            instagramPost={instagramPost}
                            setInstagramPost={setInstagramPost}
                            instagramReels={instagramReels}
                            handleSave={handleSave}
                            setInstagramReels={setInstagramReels}
                            youtubeVideo={youtubeVideo}
                            setYoutubeVideo={setYoutubeVideo}
                            errors={errors}
                        />
                    )}
                    {activeStep === 9 && (
                        <GalleryStep
                            images={images}
                            setImages={setImages}
                            handleSave={handleSave}
                            errors={errors}
                        />
                    )}
                    {activeStep === 10 && (
                        <BusinessHoursStep
                            formData={formData}
                            setFormData={setFormData}
                            handleSave={handleSave}
                            handleCreate={handleCreate}
                            errors={errors}
                        />
                    )}
                    {activeStep === 11 && (
                        <HelpStep />
                    )}

                    {/* Common save button with underline */}
                    {activeStep !== 0 && (
                        <div className="py-6 flex justify-end space-x-2">
                            <div
                                className="text-white hidden md:flex text-center text-4xl font-semibold py-6 px-6"
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
                            {/* Back button visible on small screens */}
                            {activeStep > 1 && <div className="block lg:hidden ">
                                <button
                                    onClick={handleBack}
                                    className="text-primary transform transition-transform duration-200 ease-out active:transform active:scale-110 font-semibold py-2 px-3 border rounded-lg"
                                >
                                    Back
                                </button>
                            </div>}
                            <FormButton onClick={handleSave} variant="primary">
                                Save Changes
                            </FormButton>
                        </div>
                    )}


                </div>
            </div>
        </div >
    );
}

const MobileHeader = ({ activeStep, steps }) => (
    <div className="bg-gradient-to-r from-[#707FDD] to-[#1E2F98] p-4 text-white">
        <h2 className="text-xl font-semibold">{steps.find(step => step.id === activeStep)?.label}</h2>
    </div>
);

const StepHeader = ({ activeStep, steps }) => (
    <div
        className="text-[white] text-center text-2xl md:text-4xl font-semibold py-4 md:py-6 px-4 md:px-6"
        style={{
            backgroundImage: `url('../../ModalHeader2.png')`,
            backgroundSize: "contain",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",

        }}
    >
        {steps.find(step => step.id === activeStep)?.label}
    </div>
);

