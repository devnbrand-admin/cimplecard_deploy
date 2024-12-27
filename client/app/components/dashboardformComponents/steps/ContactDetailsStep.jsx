import React from 'react';
import { FormButton, FormInput } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';

const contactDetailsStructure = cardForm[2];

const ContactDetailsStep = ({ formData, setFormData, handleInputChange, handleSave, errors }) => {
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
            after={errors[field.name]} // dynamically show error message
        >
            <FormInput
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={
                    // field.name.includes('[')
                    //     ? formData[field.name.split('[')[0]][parseInt(field.name.split('[')[1])] || ''
                    //     : formData[field.name]
                    formData[field.name]
                }
                onChange={(e) => {
                    //   if (field.name.includes('[')) {
                    //     const [arrayName, indexStr] = field.name.split('[');
                    //     const index = parseInt(indexStr);
                    //     setFormData({
                    //       ...formData,
                    //       [arrayName]: [
                    //         ...formData[arrayName].slice(0, index),
                    //         e.target.value,
                    //         ...formData[arrayName].slice(index + 1),
                    //       ],
                    //     });
                    //   } else {
                    handleInputChange(e);
                    //   }
                }}
                className={`flex-1 !border-none !outline-none ${field.className || ''}`}
            />
        </div>
    );

    const renderFormSection = (section) => (
        <div className="space-y-4">
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
            {contactDetailsStructure.sections.map((section) => {
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
