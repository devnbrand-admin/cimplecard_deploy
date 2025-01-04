import React from 'react';
import { BsImages } from "react-icons/bs";
import { FormButton } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';
import { uploadImages } from '../utils/imageUpload';

const galleryStructure = cardForm[8];

const GalleryStep = ({ gallery, setFormData, }) => {

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    try {
      // Assuming uploadImages is a function that takes an array of files and returns a promise
      const newImages = await uploadImages(files);

      setFormData(prevGallery => {
        const updatedGallery = [...(prevGallery.gallery || []), ...newImages];

        return {
          ...prevGallery,
          gallery: updatedGallery,
        };
      });
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const renderImageGallery = (section) => (
    <div key="imageGallery" className={section.className}>
      {gallery?.map((image, index) => (
        <div
          key={index}
          className="w-40 h-56 rounded-lg flex-shrink-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {[...Array(Math.max(5 - gallery?.length || 0, 0))].map((_, index) => (
        <div
          key={`empty-${index}`}
          className="w-40 h-56 flex-1 basis-[200px] md:grow-0 !grow-0 bg-[#707FDD] bg-opacity-70 rounded-lg flex-shrink-0 flex items-center justify-center"
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
  );

  const renderAddButton = (section) => (
    <div key="addButton" className={section.className}>
      <label htmlFor="gallery-upload" className="cursor-pointer">
        <FormButton variant="secondary">
          {section.label}
        </FormButton>
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
  );

  return (
    <div className="space-y-6">
      {galleryStructure.sections.map((section) => {
        switch (section.type) {
          case 'imageGallery':
            return renderImageGallery(section);
          case 'addButton':
            return renderAddButton(section);
          default:
            return null;
        }
      })}
    </div>
  );
};

export default GalleryStep;
