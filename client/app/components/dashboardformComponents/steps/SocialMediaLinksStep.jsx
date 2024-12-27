import React from 'react';
import { FormButton, FormInput } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';

const structure = cardForm[3];

const SocialMediaLinksStep = ({ formData, setFormData, handleInputChange, handleSave, errors }) => {
    const updateSocialMediaLink = (platform, value) => {
        const updatedLinks = formData.SocialMediaLink.filter(link => link.platform !== platform);
        if (value.trim()) {
            updatedLinks.push({ platform, url: value });
        }
        setFormData({ ...formData, SocialMediaLink: updatedLinks });
    };

    const renderImage = (section) => (
        <div
            key={section.src}
            className={section.className}
            style={{ backgroundImage: `url('${section.src}')` }}
        ></div>
    );

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

    return (
        <div className="space-y-6">
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
        </div>
    );
};

export default SocialMediaLinksStep;
