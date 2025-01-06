import React from 'react';
import { FormButton, FormInput } from '../ModalFormMobile';
import { cardForm } from '../../../utils/constant';

const testimonialsStructure = cardForm[6];

const TestimonialsStep = ({ testimonials, setFormData, errors }) => {
    const [newTestimonial, setNewTestimonial] = React.useState({
        name: '',
        designation: '',
        description: '',
        imageUrl: '',
    });

    // Handler to update testimonial fields on change
    const handleChangeTestimonial = (e, index) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            const updatedTestimonials = [...(prevFormData.testimonials || [])];
            updatedTestimonials[index] = {
                ...updatedTestimonials[index],
                [name]: value,
            };
            return {
                ...prevFormData,
                testimonials: updatedTestimonials,
            };
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddTestimonial = () => {
        setFormData((prevFormData) => {
            const updatedTestimonials = [...(prevFormData.testimonials || []), newTestimonial];
            return {
                ...prevFormData,
                testimonials: updatedTestimonials,
            };
        });
        setNewTestimonial({ name: '', designation: '', description: '', imageUrl: '' });
    };

    const handleDeleteTestimonial = (index) => {
        setFormData((prevFormData) => {
            const updatedTestimonials = prevFormData.testimonials.filter((_, i) => i !== index);
            return {
                ...prevFormData,
                testimonials: updatedTestimonials,
            };
        });
    };

    const renderAddTestimonialForm = (section) => (
        <div key="addTestimonial" className="space-y-4">
            <h2 className={section.titleClassName}>{section.title}</h2>
            <div className="flex flex-wrap gap-4">
                {section.fields?.map((field) =>
                    ['name', 'designation', 'imageUrl'].includes(field.name) ? (
                        <div key={field.name} className="flex-1">
                            <FormInput
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={newTestimonial[field.name]}
                                onChange={handleChange}
                                className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                            />
                            {errors?.[field.name] && (
                                <p className="text-red-500 text-sm">{errors[field.name]}</p>
                            )}
                        </div>
                    ) : null
                )}
            </div>
            <div>
                {section.fields?.map((field) =>
                    field.name === 'description' ? (
                        <div key={field.name}>
                            <textarea
                                placeholder={field.placeholder}
                                name={field.name}
                                rows={field.rows || 3}
                                value={newTestimonial[field.name]}
                                onChange={handleChange}
                                className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                            />
                            {errors?.[field.name] && (
                                <p className="text-red-500 text-sm">{errors[field.name]}</p>
                            )}
                        </div>
                    ) : null
                )}
            </div>
            <div className="flex justify-center">
                <FormButton onClick={handleAddTestimonial} variant="primary">
                    {section.buttonText}
                </FormButton>
            </div>
        </div>
    );

    const renderTestimonialList = (section) => (
        testimonials?.length > 0 && (
            <div key="testimonialList" className={section.className}>
                {testimonials?.map((testimonial, index) => (
                    <div key={index} className="relative p-4 bg-gray-100 rounded-lg space-y-4">
                        {/* Delete Button */}
                        <button
                            onClick={() => handleDeleteTestimonial(index)}
                            className="absolute top-0 right-0 text-red-500 text-3xl font-bold"
                            style={{ transform: 'translate(50%, -50%)' }}
                        >
                            &times;
                        </button>

                        {/* Testimonial Fields for Editing */}
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                {/* Name Field */}
                                <div className="flex-1">
                                    <FormInput
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={testimonial.name}
                                        onChange={(e) => handleChangeTestimonial(e, index)}
                                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                                    />
                                </div>

                                {/* Designation Field */}
                                <div className="flex-1">
                                    <FormInput
                                        type="text"
                                        placeholder="Designation"
                                        name="designation"
                                        value={testimonial.designation}
                                        onChange={(e) => handleChangeTestimonial(e, index)}
                                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                                    />
                                </div>

                                {/* Image URL Field */}
                                <div>
                                    <FormInput
                                        type="text"
                                        placeholder="Image URL"
                                        name="imageUrl"
                                        value={testimonial.imageUrl}
                                        onChange={(e) => handleChangeTestimonial(e, index)}
                                        className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Description Field */}
                            <div>
                                <textarea
                                    placeholder="Description"
                                    name="description"
                                    rows={3}
                                    value={testimonial.description}
                                    onChange={(e) => handleChangeTestimonial(e, index)}
                                    className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                                />
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        )
    );




    return (
        <div className="space-y-6 mx-2 md:mx-0">
            {testimonialsStructure.sections?.map((section) => {
                if (section.type === "addTestimonial") {
                    return renderAddTestimonialForm(section);
                }
                if (section.type === "testimonialList") {
                    return renderTestimonialList(section);
                }
                if (section.type === "image") {
                    return (
                        <div
                            key={section.src}
                            className={section.className}
                            style={{ backgroundImage: `url('${section.src}')` }}
                        ></div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default TestimonialsStep;