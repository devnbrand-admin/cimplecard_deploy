import React from 'react';
import { FormInput } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';

const contactDetailsStructure = cardForm[2];

const ContactDetailsStep = ({ formData, setFormData, handleInputChange, setErrors, errors }) => {
    const renderImage = (section) => (
        <div
            key={section.src}
            className={section.className}
            style={{ backgroundImage: `url('${section.src}')` }}
        ></div>
    );

    const renderField = (field) => {
        // Extract the base name and index if the field name is array-like (e.g., "phones[3]")
        const [baseName, index] = /\[.*\]/.test(field.name)
            ? field.name.split(/[\[\]]/).filter(Boolean)?.map((item, i) => (i === 1 ? parseInt(item, 10) : item))
            : [field.name, null];

        const fieldValue = formData[baseName] || (index !== null ? [] : '');

        return (
            <div
                key={field.name}
                className={`relative flex-1 after:content-[attr(after)]  after:text-red-500`}
            >
                {index !== null ? (
                    // Render inputs for array-like fields (e.g., "phones[0]", "phones[1]")
                    <div className="flex gap-2 flex-col">
                        <div className="flex gap-2 relative">
                            {[...Array(index)]?.map((_, idx) => {
                                // Get the error message for the current index
                                const errorMessage = errors[`${baseName}[${idx}]`];

                                return (
                                    <div key={idx} className="flex-1">
                                        <FormInput
                                            type={field.type}
                                            placeholder={`${field.placeholder} ${idx + 1}`}
                                            name={`${baseName}${idx ? `[${idx}]` : ''}`} // Ensure name remains stable
                                            value={formData[baseName] && formData[baseName][idx] !== undefined ? formData[baseName][idx] : ''} // Default to '' if undefined
                                            required={field.required}
                                            onChange={(e) => {
                                                const value = e.target.value; // Get the updated value
                                                setFormData((prevData) => {
                                                    const updatedArray = [...(prevData[baseName] || [])]; // Make a shallow copy of the array
                                                    updatedArray[idx] = value; // Update the value at the specific index
                                                    return {
                                                        ...prevData,
                                                        [baseName]: updatedArray, // Update the formData with the modified array
                                                    };
                                                });
                                            }}
                                            onBlur={() => {
                                                // Validation: if required and empty, set error
                                                if (field.required && !formData[baseName]?.[idx]) {
                                                    idx === 0 && setErrors((prevErrors) => ({
                                                        ...prevErrors,
                                                        [`${baseName}[${idx}]`]: `${field.placeholder} is required.`,
                                                    }));
                                                }
                                            }}
                                            className={`flex-1 !border-none !outline-none ${field.className || ''}`}
                                        />
                                        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                                    </div>
                                );
                            })}
                        </div>
                        {errors[baseName] && <div className="text-red-500">{errors[baseName]}</div>}
                    </div>
                ) : (
                    // Render normal inputs
                    <div>
                        <FormInput
                            type={field.type}
                            placeholder={field.placeholder}
                            name={baseName}
                            value={fieldValue}
                            required={field.required}
                            onChange={(e) => handleInputChange(e)}
                            onBlur={() => {
                                // Validation for non-array fields
                                if (field.required && !fieldValue) {
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        [baseName]: `${field.placeholder} is required.`,
                                    }));
                                } else {
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        [baseName]: '',
                                    }));
                                }
                            }}
                            className={`flex-1 !border-none !outline-none ${field.className || ''}`}
                        />
                        {errors[baseName] && <div className="text-red-500">{errors[baseName]}</div>}
                    </div>
                )}
            </div>
        );
    };




    const renderFormSection = (section) => (
        <div className="space-y-4" key={section.title}>
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
    );

    return (
        <div className="space-y-6">
            {contactDetailsStructure.sections?.map((section) => {
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

export default ContactDetailsStep;
