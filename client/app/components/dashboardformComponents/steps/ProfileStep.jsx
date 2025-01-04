import React, { useEffect, useState } from 'react';
import { FormInput } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';

const structure = cardForm[1];

const ProfileStep = ({ formData, setFormData, handleImageUpload, handleInputChange, errors }) => {

  const renderImageUpload = (section) => (
    <div key={section.key} className="relative mb-[5rem]">
      <div
        className="w-full h-32 bg-cover bg-center"
        style={{
          backgroundImage: formData[section.key] ? `url(${formData[section.key]})` : 'none',
          backgroundColor: '#eef0ff',
        }}
      >
        <label
          htmlFor={`${section.key}-upload`}
          className="absolute bottom-2 right-2 cursor-pointer"
        >
          <img
            src={`../../${section.key === 'headerImageUrl' ? 'BannerUpload' : 'ProfileAvatar'}.svg`}
            alt={section.placeholder}
            className="w-10 h-10"
          />
          <input
            type="file"
            accept="image/*"
            name='profileImageUrl'
            onChange={handleImageUpload}
            className="hidden"
            id={`${section.key}-upload`}
          />
        </label>
      </div>
      {section.key === 'profileImageUrl' && (
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
          <label
            htmlFor="profile-upload"
            className="w-24 h-24 rounded-full bg-[#707FDD] bg-opacity-10 flex items-center justify-center overflow-hidden cursor-pointer"
            style={{
              backgroundImage: formData.headerImageUrl
                ? `url(${formData.headerImageUrl})`
                : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {!formData.headerImageUrl && (
              <img src="../../ProfileAvatar.svg" alt="Upload Icon" className="w-16 h-16" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="profile-upload"
              name='headerImageUrl'
            />
          </label>
        </div>
      )}
    </div>
  );

  const renderFormSection = (section) => (
    <div key={section.title} className="flex flex-wrap gap-4 ">
      {section.fields.map((field) => {
        if (field.type === 'select') return null; // Skip select here
        if (field.type === 'date') return null; // Skip date here
        return (
          <div after={errors[field.name]} className="flex-1 after:ms-1 relative after:content-[attr(after)] after:text-red-500" key={field.name}>
            <FormInput
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              className="flex-1"
            />
          </div>
        );
      })}
    </div>
  );

  const renderTextarea = (section) => (
    <div after={errors[section.name]} className={`relative after:content-[attr(after)] after:ms-1 after:text-red-500`}>
      <textarea
        key={section.name}
        placeholder={section.placeholder}
        name={section.name}
        value={formData[section.name]}
        onChange={handleInputChange}
        className={`w-full p-3 border  text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md`}
        rows={section.rows}
      />
    </div>
  );

  const renderAdditionalDetails = (section) => (
    <div key={section.title + section.type} className="flex flex-wrap gap-4">
      {section.fields.map((field) => {
        switch (field.type) {
          case 'select':
            return (
              <div
                after={errors[field.name]}
                className={`flex-1 after:ms-1 relative after:-bottom-[15px] after:left-0 after:content-[attr(after)] after:text-red-500`}
              >

                <select
                  key={field.name}
                  className="flex-1 w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md relative after:content-[attr(after)] after:text-red-500"
                  value={formData[field.name]}
                  name={field.name}
                  onChange={handleInputChange}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          case 'date':
            return (
              <div
                after={errors[field.name]}
                className={` flex-1 after:left-0 relative after:ms-1 after:-bottom-[20px] after:content-[attr(after)] after:text-red-500`}

              >
                <FormInput
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="flex-1"
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );

  return (
    <div className="space-y-4">
      {structure.sections.map((section) => {
        switch (section.type) {
          case 'imageUpload':
            return renderImageUpload(section);
          case 'formSection':
            return section.title === "Additional Details"
              ? renderAdditionalDetails(section)
              : renderFormSection(section);
          case 'textarea':
            return renderTextarea(section);
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProfileStep;
