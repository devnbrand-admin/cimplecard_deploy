import React, { useState } from 'react';
import { cardForm } from '../../../utils/constant';
import { FormInput } from '../ModalFormMobile';

const postLinksStructure = cardForm[7];

const PostLinksStep = ({ setFormData, formData, errors }) => {

    // Function to handle link addition for specific keys in `formData`
    const handleAddLink = (key, newLink) => {
        setFormData((prev) => ({
            ...prev,
            [key]: [...(prev[key] || []), newLink], // Append new link to the existing array
        }));
    };

    // Function to handle link removal for specific keys in `formData`
    const handleRemoveLink = (key, indexToRemove) => {
        setFormData((prev) => ({
            ...prev,
            [key]: prev[key]?.filter((_, index) => index !== indexToRemove) || [], // Remove link at the specified index
        }));
    };

    const renderAddLinkSection = (field) => {
        const key = field.name;  // Directly use the field name as the key in formData
        const items = formData[key] || []; // Default to an empty array if key is not present

        return (
            <AddLinkSection
                key={field.name}  // Use field name as unique key
                title={field.title}
                items={items}
                onAdd={(newLink) => handleAddLink(key, newLink)}
                onRemove={(indexToRemove) => handleRemoveLink(key, indexToRemove)}
                placeholder={field.placeholder}
                error={errors?.[key]} // Pass error for the specific field
            />
        );
    };

    return (
        <div className="space-y-6">
            {postLinksStructure.sections?.map((section, index) => {
                // Render each section correctly with the fields
                return section.fields?.map((field) => renderAddLinkSection(field));
            })}
        </div>
    );
};

export default PostLinksStep;

const AddLinkSection = ({ title, items, onAdd, onRemove, placeholder, error }) => {
    const [newLink, setNewLink] = useState('');

    const handleAddClick = () => {
        if (newLink.trim() !== '') {
            onAdd(newLink);
            setNewLink(''); // Clear the input field after adding the link
        }
    };

    const handleRemoveClick = (index) => {
        onRemove(index);
    };

    return (
        <div className="add-link-section">
            <h3 className="text-lg font-semibold text-blue-600">{title}</h3>

            {/* Display the list of existing links */}
            <div className="mt-4 space-y-2">
                {items.length > 0 ? (
                    items?.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b py-2">
                            <FormInput disabled value={item} />
                            <button
                                onClick={() => handleRemoveClick(index)}
                                className="text-red-500 font-bold text-xl"
                                style={{ transform: 'translate(50%, -50%)' }}
                            >
                                &times;
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No links added yet.</p>
                )}
            </div>

            {/* Input and button to add a new link */}
            <div className="mt-4 flex items-center gap-2">
                <FormInput
                    type="text"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    placeholder={placeholder}
                    className={`border px-4 py-2 rounded-md w-4/5 ${error ? 'border-red-500' : ''}`}
                />
                <button
                    onClick={handleAddClick}
                    disabled={!newLink.trim()}  // Disable the button if the input is empty
                    className={`bg-gradient-to-r from-[#707FDD] to-[#1E2F98] text-white px-4 py-2 rounded-md w-1/5 ${!newLink.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Add
                </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};
