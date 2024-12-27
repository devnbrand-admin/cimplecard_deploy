import React from 'react';
import { FormButton } from '../ModalFormMobile';

const ChooseTemplateStep = ({ formData, handleTemplateSelection, handleSave }) => {
  const templates = ['Medical', 'Astrologer', 'B2B Business', 'Lawyer'];

  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <div key={index} className="w-full mx-auto">
            <a href={`https://example.com/${template.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
              <div className="bg-white shadow-lg rounded-xl">
                <img
                  alt="Cover"
                  className="object-cover rounded-xl w-full h-32 sm:h-48"
                  src={`../../template${index + 1}cover.png`}
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg">{template}</h4>
                  <p className="text-gray-500 text-sm italic">
                    "{template} description"
                  </p>
                </div>
              </div>
            </a>
            <div className="py-2 px-4 flex space-x-2 mt-2">
              <FormButton
                onClick={() => handleTemplateSelection(template)}
                variant={formData.templateType === template ? 'primary' : 'secondary'}
              >
                {formData.templateType === template ? 'Selected' : 'Select'}
              </FormButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseTemplateStep;

