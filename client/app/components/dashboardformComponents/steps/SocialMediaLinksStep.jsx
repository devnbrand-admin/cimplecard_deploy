import React from 'react';
import { FormInput } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';

const structure = cardForm[3];  

const SocialMediaLinksStep = ({ formData, setFormData, handleSave, errors }) => {

    let feildsName = structure?.sections?.find(obj => obj.name)?.name?.replace('[]','') || null
    // Function to update the SocialMediaLink array
    const updateSocialMediaLink = (platform, value) => {
        setFormData((prevFormData) => {
            const updatedLinks = prevFormData[feildsName]?.map((link) =>
                link.platform === platform ? { ...link, url: value } : link
            );

            // Add a new entry if the platform does not exist
            if (!updatedLinks.some((link) => link.platform === platform)) {
                updatedLinks.push({ platform, url: value });
            }

            return { ...prevFormData, [feildsName]: updatedLinks.filter((link) => link.url.trim()) };
        });
    };

    // Ensure the SocialMediaLink array is initialized if it's not present
    React.useEffect(() => {
        if (!formData[feildsName] || formData[feildsName]?.length === 0) {
            const initialLinks = [
                { platform: "Website", url: "" },
                { platform: "LinkedIn", url: "" },
                { platform: "Instagram", url: "" },
                { platform: "Twitter", url: "" },
                { platform: "GitHub", url: "" },
                { platform: "Additional", url: "" },
            ];
            setFormData((prevFormData) => ({ ...prevFormData, [feildsName]: initialLinks }));
        }
    }, [formData, setFormData]);

    // Function to get error message for a specific platform
    const getErrorMessage = (platform) => {
        if (!errors) return '';

        // Look for error using the platform name directly
        console.log(feildsName)
        return errors[`${feildsName}.${platform}`] || '';
    };

    // Render image section
    const renderImage = (section) => (
        <div
            key={section.src}
            className={section.className}
            style={{ backgroundImage: `url('${section.src}')` }}
        ></div>
    );

    // Render individual fields for each platform
    const renderField = (field) => {
        const socialMediaItem = formData[feildsName]?.find(
            (link) => link.platform === field.name
        );

        const errorMessage = getErrorMessage(field.name);

        return (
            <div key={field.name} className="flex-1">
                <div className="relative">
                    <FormInput
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.name}
                        value={socialMediaItem?.url || ''}
                        onChange={(e) => updateSocialMediaLink(field.name, e.target.value)}
                        className={`flex-1 !border-none !outline-none ${errorMessage ? 'border-red-500' : ''} ${field.className || ''}`}
                    />
                    {errorMessage && (
                        <p className="text-red-500 text-sm mt-1 left-0">
                            {errorMessage}
                        </p>
                    )}
                </div>
            </div>
        );
    };

    // Render form sections with nested fields
    const renderFormSection = (section) => {
        return (
            <div key={section.title || Math.random()} className="space-y-4">
                {section.title && <h2 className={section.titleClassName || ''}>{section.title}</h2>}
                {section.fields?.map((field, index) =>
                    field.type === 'formSection' ? (
                        <div key={index} className={`${field?.className} flex flex-wrap gap-4`}>
                            {field.fields?.map((nestedField) => renderField(nestedField))}
                        </div>
                    ) : (
                        renderField(field)
                    )
                )}
            </div>
        )
    };

    return (
        <div className="space-y-6">
            {structure.sections?.map((section) => {
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