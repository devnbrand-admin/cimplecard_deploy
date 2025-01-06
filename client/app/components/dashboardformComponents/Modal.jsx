'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStepData } from '../../../store/cardSlice';
import { createCard, createCardOptimized } from '../../utils/cardCreationApi';
import "../../style/cardCreation.css";
import { validateFormData } from '../../utils/validation';
import Sidebar from './Sidebar';
import { FormButton } from './ModalFormMobile';
import { uploadSingleImage } from './utils/imageUpload';
import {
    BsTriangle, BsPerson, BsTelephone, BsLinkedin, BsPersonVideo,
    BsClockHistory, BsCartCheckFill, BsChat, BsUpload, BsImages, BsBuilding
} from "react-icons/bs";

// Steps Import
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
import { cardForm, initialFormData } from '../../utils/constant';
import { MdClose } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

export default function ResponsiveModalForm({ setIsModalOpen, cardId }) {
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(1);
    const [errors, setErrors] = useState({});
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const [formData, setFormData] = useState(initialFormData);

    // Steps Configuration
    const steps = [
        { id: 1, label: "Choose Template", icon: <BsTriangle />, component: ChooseTemplateStep },
        { id: 2, label: "Profile", icon: <BsPerson />, component: ProfileStep },
        { id: 3, label: "Contact Details", icon: <BsTelephone />, component: ContactDetailsStep },
        { id: 4, label: "Social Media Links", icon: <BsLinkedin />, component: SocialMediaLinksStep },
        { id: 5, label: "Company Media Links", icon: <BsBuilding />, component: CompanyMediaLinksStep },
        { id: 6, label: "Product / Services", icon: <BsCartCheckFill />, component: ProductServicesStep },
        { id: 7, label: "Testimonials", icon: <BsPersonVideo />, component: TestimonialsStep },
        { id: 8, label: "Post Links", icon: <BsUpload />, component: PostLinksStep },
        { id: 9, label: "Gallery", icon: <BsImages />, component: GalleryStep },
        { id: 10, label: "Business Hours", icon: <BsClockHistory />, component: BusinessHoursStep },
        { id: 11, label: "Help", icon: <BsChat />, component: HelpStep },
    ];

    const ActiveStepComponent = steps[activeStep - 1]?.component;

    // Handlers
    const handleTemplateSelection = (template) =>
        setFormData((prev) => ({ ...prev, templateType: template }));

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (event) => {
        const { name, files } = event.target;
        const file = files[0];
        if (!file) return;

        try {
            const url = await uploadSingleImage(file, name);
            setFormData((prev) => ({ ...prev, [name]: url }));
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSave = async () => {
        dispatch(setStepData({ step: `step${activeStep}`, data: formData }));
        if (!validateFormData(cardForm[activeStep - 1], setErrors, formData)) return;

        if (activeStep === 10) return handleCreate();
        setActiveStep((prev) => Math.min(prev + 1, steps.length));
    };

    const handleBack = () =>
        setActiveStep((prev) => Math.max(prev - 1, 1));

    const handleCreate = async () => {
        try {
            console.log("formData:", formData);
            await createCardOptimized(formData);
            dispatch(setCardData(formData));
        } catch (error) {
            console.error("Failed to create card:", error);
        }
    };

    useEffect(() => {
        if (cardId) fetchCardData(cardId);
    }, [cardId]);

    const fetchCardData = async (id) => {
        try {
            const { data } = await axios.get(`/api/card/get/${id}`);
            const transformedData = transformCardData(data);
            setFormData(transformedData);
        } catch (error) {
            console.error("Error fetching card data:", error);
        }
    };

    return (
        <div className="fixed inset-0 shadow-sm bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4 md:p-0">
            <div className="bg-white relative rounded-lg w-full max-w-7xl h-[90vh] md:h-[80vh] flex flex-col md:flex-row overflow-hidden">
                {isMobile && <MobileHeader activeStep={activeStep} steps={steps} />}
                <button
                    className="absolute z-30 right-4 top-4 text-black"
                    onClick={() => setIsModalOpen(false)}
                >
                    <MdClose className="text-4xl p-2" />
                </button>
                <div className="hidden md:flex md:w-1/4 bg-white">
                    <Sidebar
                        activeStep={activeStep}
                        handleStepClick={setActiveStep}
                        steps={steps}
                    />
                </div>
                <div className="w-full px-4 md:px-6 relative overflow-y-auto">
                    {!isMobile && <StepHeader activeStep={activeStep} steps={steps} />}
                    {ActiveStepComponent && (
                        <ActiveStepComponent
                            formData={formData}
                            setFormData={setFormData}
                            setErrors={setErrors}
                            gallery={formData?.gallery}
                            handleSave={handleSave}
                            testimonials={formData?.testimonials}
                            handleTemplateSelection={handleTemplateSelection}
                            handleImageUpload={handleImageUpload}
                            handleInputChange={handleInputChange}
                            errors={errors}
                        />
                    )}
                    <div className="py-6 gap-2 flex justify-end">
                        {activeStep > 1 && (
                            <button
                                onClick={handleBack}
                                className="text-primary font-semibold py-2 px-3 border rounded-lg"
                            >
                                Back
                            </button>
                        )}
                        <FormButton onClick={handleSave} variant="primary">
                            {activeStep === 10 ? "Create" : "Save Changes"}
                        </FormButton>
                    </div>
                </div>
            </div>
        </div>
    );
}


const MobileHeader = ({ activeStep, steps }) => (
    <div className="bg-gradient-to-r right-0 left-0 top-0 sticky from-[#707FDD] to-[#1E2F98] p-4 text-white">
        <h2 className="text-xl font-semibold">{steps.find(step => step.id === activeStep)?.label}</h2>
    </div>
);

const StepHeader = ({ activeStep, steps }) => (
    <div
        className="text-[white] z-10 text-center text-2xl md:text-4xl sticky top-0 font-semibold py-4 md:py-6 px-4 md:px-6"
        style={{
            backgroundImage: "url('/ModalHeader2.png')", 
            backgroundSize: "contain",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
        }}
    >
        {steps.find(step => step.id === activeStep)?.label}
    </div>
);