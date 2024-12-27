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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddTestimonial = (data) => {
        const { name, designation, description, imageUrl } = data;
        if (!(name || designation || description)) {
            alert('Please fill all the fields');
            return;
        }
        const newTestimonial = {
            name,
            designation,
            description,
            imageUrl,
        };

        setFormData((prevFormData) => {
            const updatedTestimonials = [...(prevFormData.testimonials || []), newTestimonial];
            return {
                ...prevFormData,
                testimonials: updatedTestimonials,
            };
        });
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

    const handleSubmit = () => {
        handleAddTestimonial(newTestimonial);
        setNewTestimonial({ name: '', designation: '', description: '', imageUrl: '' });
    };

    const renderImage = (section) => (
        <div
            key={section.src}
            className={section.className}
            style={{ backgroundImage: `url('${section.src}')` }}
        ></div>
    );

    const renderTestimonialList = (section) =>
        testimonials?.length > 0 && (
            <div key="testimonialList" className={section.className}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg space-y-2">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.designation}</p>
                        <p>{testimonial.description}</p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => handleDeleteTestimonial(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );

    const renderAddTestimonial = (section) => (
        <div key="addTestimonial" className="space-y-4 mt-8">
            <h2 className={section.titleClassName}>{section.title}</h2>
            {section.fields.map((field) =>
                field.type === 'textarea' ? (
                    <div
                        key={field.name}
                        className={`relative after:content-[attr(after)] after:ms-1 after:text-red-500`}
                        after={errors[field.name]} // Display errors dynamically
                    >
                        <textarea
                            placeholder={field.placeholder}
                            name={field.name}
                            value={newTestimonial[field.name]}
                            onChange={handleChange}
                            className="w-full p-3 border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
                            rows={field.rows}
                        />
                    </div>
                ) : (
                    <div
                        key={field.name}
                        className={`relative after:content-[attr(after)] after:ms-1 after:text-red-500`}
                        after={errors[field.name]} // Display errors dynamically
                    >
                        <FormInput
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            value={newTestimonial[field.name]}
                            onChange={handleChange}
                        />
                    </div>
                )
            )}
            <div className="flex justify-center">
                <FormButton onClick={handleSubmit} variant="primary">
                    {section.buttonText}
                </FormButton>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {testimonialsStructure.sections.map((section) => {
                switch (section.type) {
                    case 'image':
                        return renderImage(section);
                    case 'testimonialList':
                        return renderTestimonialList(section);
                    case 'addTestimonial':
                        return renderAddTestimonial(section);
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default TestimonialsStep;
