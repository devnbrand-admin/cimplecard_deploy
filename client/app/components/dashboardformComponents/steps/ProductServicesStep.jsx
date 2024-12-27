import React from 'react';
import { FormButton, FormInput } from '../ModalFormMobile';
import { BsImages } from "react-icons/bs";
import { cardForm } from '../../../utils/constant';
const productServicesStructure = cardForm[5]
const ProductServicesStep = ({ formData, setFormData, handleSave }) => {
  const handleProductUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevData => ({
          ...prevData,
          products: prevData.products.map((item, i) =>
            i === index ? { ...item, imageUrl: reader.result } : item
          )
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  // console.log(formData?.products)
  const renderImage = (section) => (
    <div key={section.src} className={section.className} style={{ backgroundImage: `url('${section.src}')` }}></div>
  );

  const renderChoiceButtons = (section) => (
    <div key={section.title} className="space-y-4">
      <h2 className={section.titleClassName}>{section.title}</h2>
      <div className="flex justify-center gap-4">
        {section.buttons.map((button) => (
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

  const renderProductList = (section) => (
    <>
      {formData?.products?.length > 0 && <div key="productList" className={section.className}>
        {formData.products?.map((product, index) => (
          <div key={index} className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
            <div className="flex-1 space-y-2">
              <FormInput
                type="text"
                placeholder="Name of the service/product"
                value={product.name}
                onChange={(e) => setFormData(prevData => ({
                  ...prevData,
                  products: prevData.products.map((item, i) => i === index ? { ...item, name: e.target.value } : item)
                }))}
              />
              <FormInput
                type="text"
                placeholder="Description of the Product/Service"
                value={product.description}
                onChange={(e) => setFormData(prevData => ({
                  ...prevData,
                  products: prevData.products.map((item, i) => i === index ? { ...item, description: e.target.value } : item)
                }))}
              />
              <FormInput
                type="url"
                placeholder="External Link of the Product/Service"
                value={product.serviceUrl}
                onChange={(e) => setFormData(prevData => ({
                  ...prevData,
                  products: prevData.products.map((item, i) => i === index ? { ...item, serviceUrl: e.target.value } : item)
                }))}
              />
            </div>
            <div className="w-24 h-24 bg-[#707FDD] rounded-lg overflow-hidden flex items-center justify-center">
              <label htmlFor={`product-upload-${index}`} className="cursor-pointer">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt="Product" className="w-full h-full object-cover" />
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
              onClick={() => setFormData(prevData => ({
                ...prevData,
                products: prevData.products.filter((_, i) => i !== index)
              }))}
              className="text-red-500 text-2xl"
              title="Delete"
            >
              &times;
            </button>
          </div>
        ))}
      </div>}
    </>
  );

  const renderAddButton = (section) => (
    <div key="addButton" className={section.className}>
      <FormButton
        onClick={() => setFormData(prevData => ({
          ...prevData,
          products: [...(prevData.products || []), { name: "", imageUrl: "", serviceUrl: "", description: "" }]
        }))}
        variant="secondary"
      >
        {section.label}
      </FormButton>
    </div>
  );

  return (
    <div className="space-y-6">
      {productServicesStructure.sections.map((section) => {
        switch (section.type) {
          case 'image':
            return renderImage(section);
          case 'choiceButtons':
            return renderChoiceButtons(section);
          case 'productList':
            return renderProductList(section);
          case 'addButton':
            return renderAddButton(section);
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProductServicesStep;