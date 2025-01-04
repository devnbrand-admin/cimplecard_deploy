import React from 'react';
import { FormButton, FormInput } from '../ModalFormMobile';

const BusinessHoursStep = ({ formData, setFormData, }) => {

    // Function to add a new business hour entry
    const addBusinessHour = () => {
        setFormData({
            ...formData,
            businessHours: [
                ...formData.businessHours,
                { from: "", to: "", type: "" }, // Empty default business hour
            ],
        });
    };

    // Function to update a specific field in a business hour entry
    const updateBusinessHour = (index, field, value) => {
        const updatedBusinessHours = formData.businessHours.map((hour, i) =>
            i === index ? { ...hour, [field]: value } : hour
        );
        setFormData({ ...formData, businessHours: updatedBusinessHours });
    };

    // Function to remove a business hour entry
    const removeBusinessHour = (index) => {
        const updatedBusinessHours = formData.businessHours.filter((_, i) => i !== index);
        setFormData({ ...formData, businessHours: updatedBusinessHours });
    };

    return (
        <div className="space-y-6">
            <div
                className="py-2 bg-contain bg-center bg-no-repeat h-48 md:h-64"
                style={{ backgroundImage: `url('../../BusinessHours.svg')` }}
            ></div>

            <h2 className="text-lg font-bold mb-4">Business Hours</h2>
            <p className="text-sm text-[#787F89] mb-6">
                Add or manage your business hours. Click on a block to delete it.
            </p>

            {/* Render each business hour entry */}
            {formData.businessHours?.map((hour, index) => (
                <div
                    key={index}
                    className="flex gap-4 p-4 border rounded-md bg-[#F9FAFB] relative cursor-pointer"
                //   onClick={() => removeBusinessHour(index)} // Allow removal on click
                >
                    <FormInput
                        type="time"
                        value={hour.from}
                        onChange={(e) => updateBusinessHour(index, 'from', e.target.value)}
                        className="flex-1"
                    />
                    <FormInput
                        type="time"
                        value={hour.to}
                        onChange={(e) => updateBusinessHour(index, 'to', e.target.value)}
                        className="flex-1"
                    />
                    <FormInput
                        type="text"
                        placeholder="Type"
                        value={hour.type}
                        onChange={(e) => updateBusinessHour(index, 'type', e.target.value)}
                        className="flex-1"
                    />
                </div>
            ))}

            <div className="flex justify-end gap-4 pb-10">
                {/* Button to add a new business hour */}
                <FormButton onClick={addBusinessHour} variant="secondary">
                    Add Timings
                </FormButton>
            </div>
        </div>
    );
};

export default BusinessHoursStep;
