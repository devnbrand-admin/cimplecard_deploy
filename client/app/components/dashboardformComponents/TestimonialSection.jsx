export const TestimonialsSection = ({ testimonials, setTestimonials,setClientErrors,clientErrors,handleSave }) => {

  const handleAddTestimonial = () => {
    setTestimonials([
      ...testimonials,
      {
        name: "",
        designation: "",
        description: "",
        imageUrl: "",
      },
    ]);
  };

  const handleDeleteTestimonial = (index) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const updatedTestimonials = testimonials.map((testimonial, i) =>
      i === index ? { ...testimonial, [field]: value } : testimonial
    );
    setTestimonials(updatedTestimonials);
  };

  return (
    <div>
    <div className="space-y-4 mt-4">
      <div className="flex justify-center gap-4">
        <h1 className="text-2xl font-semibold text-[#707FDD]">
          Add Testimonial
        </h1>
      </div>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="space-y-4 relative">
          <button
            onClick={() => handleDeleteTestimonial(index)}
            className="absolute top-0 right-0 text-red-500 text-3xl font-bold"
            style={{ transform: "translate(50%, -50%)" }}
          >
            &times;
          </button>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Name"
                value={testimonial.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
              {clientErrors?.errors?.[index]?.name && (
                <p className="text-red-500 text-sm">
                  {clientErrors.errors[index].name}
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Job Role"
                value={testimonial.designation}
                onChange={(e) =>
                  handleInputChange(index, "designation", e.target.value)
                }
                className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
              {clientErrors?.errors?.[index]?.designation && (
                <p className="text-red-500 text-sm">
                  {clientErrors.errors[index].designation}
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Client Image URL"
                value={testimonial.imageUrl}
                onChange={(e) =>
                  handleInputChange(index, "imageUrl", e.target.value)
                }
                className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
              {clientErrors?.errors?.[index]?.imageUrl && (
                <p className="text-red-500 text-sm">
                  {clientErrors.errors[index].imageUrl}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <textarea
                placeholder="Testimonial Message"
                value={testimonial.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                className="w-full h-[120px] p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
              />
              {clientErrors?.errors?.[index]?.description && (
                <p className="text-red-500 text-sm">
                  {clientErrors.errors[index].description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleAddTestimonial}
          className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98]"
        >
          Add Testimonial
        </button>
      </div>
      <div className="py-6 flex justify-end space-x-2">
                  <div
                    className="text-white text-center text-4xl font-semibold py-6 px-6"
                    style={{
                      backgroundImage: `url('../../Underline.svg')`,
                      backgroundSize: "contain",
                      backgroundPosition: "left",
                      backgroundRepeat: "no-repeat",
                      top: 0,
                      left: 0,
                      width: "70%",
                      height: "10px",
                    }}
                  ></div>
                  <button
                    onClick={handleSave}
                    className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] transform transition-transform duration-200 ease-out active:scale-90 active:transform active:scale-110"
                  >
                    Save Changes
                  </button>
                </div>
    </div>
  </div>
  );
};
