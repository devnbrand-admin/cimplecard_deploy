import React from 'react';
import { FormButton, FormInput } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';

const structure = cardForm[3];

const SocialMediaLinksStep = ({ formData, setFormData, handleSave, errors }) => {

    // This function handles changes to input fields and updates the form data
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "SocialMediaLink") {
            // If the field is SocialMediaLink, update the respective platform's URL
            setFormData((prevFormData) => {
                const updatedLinks = prevFormData.SocialMediaLink.map((link) =>
                    link.platform === e.target.dataset.platform ? { ...link, url: value } : link
                );
                return { ...prevFormData, SocialMediaLink: updatedLinks };
            });
        } else {
            // Otherwise, just update the formData for normal input fields
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    // Function to render image sections
    const renderImage = (section) => (
        <div
            key={section.src}
            className={section.className}
            style={{ backgroundImage: `url('${section.src}')` }}
        ></div>
    );

    // Function to render individual input fields
    const renderField = (field) => (
        <div
            key={field.name}
            className={`relative flex-1 after:content-[attr(after)] after:ms-1 after:text-red-500`}
            after={errors[field.name]} // Dynamically display error messages
        >
            <FormInput
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(e)}
                className={`flex-1 !border-none !outline-none ${field.className || ''}`}
            />
        </div>
    );

    // Function to render form sections with multiple fields
    const renderFormSection = (section) => (
        <div key={section.title || Math.random()} className="space-y-4">
            {section.title && <h2 className={section.titleClassName || ''}>{section.title}</h2>}
            {section.fields.map((field, index) =>
                field.type === 'formSection' ? (
                    <div key={index} className={`${field?.className} flex flex-wrap gap-4`}>
                        {field.fields.map((nestedField) => renderField(nestedField))}
                    </div>
                ) : (
                    renderField(field)
                )
            )}
        </div>
    );

    // Function to render social media link fields
    const renderSocialMediaLinks = () => {
        return formData.SocialMediaLink.map((link, index) => (
            <div key={index} className="flex gap-4 mb-4">
                <input
                    type="text"
                    placeholder={`Enter ${link.platform} URL`}
                    name="SocialMediaLink"
                    data-platform={link.platform}
                    value={link.url || ''}
                    onChange={handleInputChange}
                    className="flex-1 p-3 border rounded-md"
                />
            </div>
        ));
    };

    return (
        <div className="space-y-6">
            {/* Render Sections */}
            {structure.sections.map((section) => {
                switch (section.type) {
                    case 'image':
                        return renderImage(section);
                    case 'formSection':
                        return renderFormSection(section);
                    default:
                        return null;
                }
            })}

            {/* Render Social Media Links Fields */}
            {renderSocialMediaLinks()}
        </div>
    );
};

export default SocialMediaLinksStep;
