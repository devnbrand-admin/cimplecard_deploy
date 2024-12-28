export const TestimonialsSection = ({ testimonials, setTestimonials }) => {
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
              style={{ transform: "translate(0%, -60%)" }}
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
      </div>
    </div>
  );
};
