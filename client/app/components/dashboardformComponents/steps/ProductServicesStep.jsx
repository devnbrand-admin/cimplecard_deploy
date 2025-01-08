import React from 'react';
import { FormButton, FormInput } from '../ModalFormMobile';
import { BsImages } from "react-icons/bs";
import { cardForm } from '../../../utils/constant';
const productServicesStructure = cardForm[5]
const ProductServicesStep = ({ formData, setFormData }) => {
  const handleProductUpload = async (event, index) => {
    const file = event.target.files[0];
    if (file) {
      try {
        // Call the uploadSingleImage function to upload the file
        const imageUrl = await uploadSingleImage(file, `${formData.gridType} ${index + 1}`);

        // Update the form data with the uploaded image URL
        setFormData(prevData => ({
          ...prevData,
          [formData.gridType.toLowerCase()]: prevData[formData.gridType.toLowerCase()]?.map((item, i) =>
            i === index ? { ...item, imageUrl } : item
          )
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const renderImage = (section) => (
    <div key={section.src} className={section.className} style={{ backgroundImage: `url('${section.src}')` }}></div>
  );

  const renderChoiceButtons = (section) => (
    <div key={section.title} className="space-y-4">
      <h2 className={section.titleClassName}>{section.title}</h2>
      <div className="flex justify-center gap-4">
        {section.buttons?.map((button) => (
          <FormButton
            key={button.value}
            onClick={() => setFormData({ ...formData, gridType: button.value })}
            variant={formData.gridType === button.value ? "primary" : "secondary"}
          >
            {button.label}
          </FormButton>
        ))}
      </div>
    </div>
  );

  const renderProductList = (section) => {
    const items = formData[formData.gridType.toLowerCase()] || [];
    return (
      <>
        {items.length > 0 && (
          <div key="productList" className={section.className}>
            {items?.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                <div className="flex-1 space-y-2">
                  <FormInput
                    type="text"
                    placeholder={`Name of the ${formData.gridType}`}
                    value={item.name}
                    onChange={(e) =>
                      setFormData(prevData => ({
                        ...prevData,
                        [formData.gridType.toLowerCase()]: prevData[formData.gridType.toLowerCase()]?.map((itm, i) =>
                          i === index ? { ...itm, name: e.target.value } : itm
                        )
                      }))
                    }
                  />
                  <FormInput
                    type="text"
                    placeholder={`Description of the ${formData.gridType}`}
                    value={item.description}
                    onChange={(e) =>
                      setFormData(prevData => ({
                        ...prevData,
                        [formData.gridType.toLowerCase()]: prevData[formData.gridType.toLowerCase()]?.map((itm, i) =>
                          i === index ? { ...itm, description: e.target.value } : itm
                        )
                      }))
                    }
                  />
                  <FormInput
                    type="url"
                    placeholder={`External Link of the ${formData.gridType}`}
                    value={item.serviceUrl}
                    onChange={(e) =>
                      setFormData(prevData => ({
                        ...prevData,
                        [formData.gridType.toLowerCase()]: prevData[formData.gridType.toLowerCase()]?.map((itm, i) =>
                          i === index ? { ...itm, serviceUrl: e.target.value } : itm
                        )
                      }))
                    }
                  />
                </div>
                <div className="w-24 h-24 bg-[#707FDD] rounded-lg overflow-hidden flex items-center justify-center">
                  <label htmlFor={`product-upload-${index}`} className="cursor-pointer">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={formData.gridType} className="w-full h-full object-cover" />
                    ) : (
                      <BsImages className="text-white text-3xl" />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleProductUpload(e, index)}
                      className="hidden"
                      id={`product-upload-${index}`}
                    />
                  </label>
                </div>
                <button
                  onClick={() =>
                    setFormData(prevData => ({
                      ...prevData,
                      [formData.gridType.toLowerCase()]: prevData[formData.gridType.toLowerCase()].filter((_, i) => i !== index)
                    }))
                  }
                  className="text-red-500 text-2xl"
                  title="Delete"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  const renderAddButton = (section) => (
    <div key="addButton" className={section.className}>
      <FormButton
        onClick={() =>
          setFormData(prevData => ({
            ...prevData,
            [formData.gridType.toLowerCase()]: [
              ...(prevData[formData.gridType.toLowerCase()] || []),
              { name: "", imageUrl: "", serviceUrl: "", description: "" }
            ]
          }))
        }
        variant="secondary"
      >
        {section.label}
      </FormButton>
    </div>
  );

  return (
    <div className="space-y-6">
      {productServicesStructure.sections?.map((section) => {
        switch (section.type) {
          case "image":
            return renderImage(section);
          case "choiceButtons":
            return renderChoiceButtons(section);
          case "productList":
            return renderProductList(section);
          case "addButton":
            return renderAddButton(section);
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProductServicesStep;