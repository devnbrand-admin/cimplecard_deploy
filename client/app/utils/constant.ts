export const cardForm = [
    {
        title: 'Choose Template',
        icon: '',
        cards: [
            { title: 'Medical', description: 'Medical template description', btn: 'Select', coverImage: '../../template1cover.png' },
            { title: 'Astrologer', description: 'Astrologer template description', btn: 'Select', coverImage: '../../template2cover.png' },
            { title: 'B2B Business', description: 'Business template description', btn: 'Select', coverImage: '../../template3cover.png' },
            { title: 'Lawyer', description: 'Lawyer template description', btn: 'Select', coverImage: '../../template4cover.png' },
        ],
        buttons: ['Save Changes'],
    },
    {
        title: "Profile Step",
        sections: [
            {
                type: "imageUpload",
                title: "Profile Image",
                key: "profileImageUrl",
                name: 'profileImageUrl',
                description: "Upload a profile picture.",
                placeholder: "Upload Profile",
                actionKey: "uploadProfileImage",
                previewType: "backgroundImage"
            },
            {
                type: "formSection",
                title: "Personal Details",
                fields: [
                    { type: "text", name: "firstName", placeholder: "First Name", required: true },
                    { type: "text", name: "middleName", placeholder: "Middle Name" },
                    { type: "text", name: "lastName", placeholder: "Last Name", required: true }
                ]
            },
            {
                type: "formSection",
                title: "Professional Details",
                fields: [
                    { type: "text", name: "companyName", placeholder: "Company's Name", required: true },
                    { type: "text", name: "location", placeholder: "Company's Address", required: true },
                    { type: "text", name: "jobTitle", placeholder: "Job Role", required: true }
                ]
            },
            {
                type: "textarea",
                title: "About You",
                name: "aboutUs",
                placeholder: "Write briefly about yourself",
                rows: 4, required: true
            },
            {
                type: "formSection",
                title: "Additional Details",
                fields: [
                    {
                        type: "select",
                        name: "languageSpoken",
                        placeholder: "Language Spoken",
                        options: [
                            { value: "", label: "Select Language" },
                            { value: "English", label: "English" },
                            { value: "Hindi", label: "Hindi" },
                            { value: "Bengali", label: "Bengali" },
                            { value: "Marathi", label: "Marathi" },
                            { value: "Tamil", label: "Tamil" },
                            { value: "Telugu", label: "Telugu" }
                        ], required: true
                    },
                    { type: "date", name: "dateOfBirth", placeholder: "Date of Birth", required: true }
                ]
            },
        ],
    },
    {
        title: "Contact Details Step",
        sections: [
            {
                type: "image",
                src: "../../ContactDetails.svg",
                className: "py-2 bg-contain bg-center bg-no-repeat h-48 md:h-64"
            },
            {
                type: "formSection",
                title: "",
                fields: [
                    {
                        type: "formSection",
                        className: 'mx-0 md:mx-5',
                        fields: [
                            { type: "tel", name: "phoneNumbers[3]", placeholder: "Phone Number", required: true },
                        ]
                    },
                    {
                        type: "formSection",
                        fields: [
                            { type: "email", name: "emails[3]", placeholder: "Email Address", required: true }
                        ]
                    }
                ]
            },
            {
                type: "formSection",
                title: "Emergency Contact Details",
                titleClassName: "text-2xl font-semibold text-[#707FDD] text-center mt-8 mb-4",
                fields: [
                    {
                        type: "formSection",
                        fields: [
                            { type: "text", name: "emergencyName", placeholder: "Name", className: "flex-[10] basis-[200px]", required: true },
                            { type: "text", name: "emergencyRelationship", placeholder: "Relationship", className: "flex-1 basis-[200px]", required: true },
                        ]
                    },
                    {
                        type: "formSection",
                        fields: [
                            { type: "tel", name: "emergencyNumber", placeholder: "Phone Number", className: "flex-1 basis-[200px]", required: true },
                            { type: "email", name: "emergencyEmail", placeholder: "Email Address", className: "flex-1 basis-[200px]", required: true }
                        ],
                        className: 'mx-0 md:mx-5',
                    }
                ]
            }
        ]
    },
    {
        title: "Social Media Links Step",
        sections: [
            {
                type: "image",
                className: "py-2 bg-contain bg-center bg-no-repeat h-48 md:h-64",
                src: "../../SocialMediaLinks.svg"
            },
            {
                type: "formSection",
                title: "",
                name: "socialMediaLink[]",
                description: "Add your website, portfolio, and social media links.",
                fields: [
                    {
                        type: "formSection",
                        fields: [
                            { type: "url", name: "Website", placeholder: "Website/Portfolio URL",required: true },
                            { type: "url", name: "LinkedIn", placeholder: "LinkedIn (Optional)" },
                            { type: "url", name: "Instagram", placeholder: "Instagram (Optional)" },
                        ]
                    },
                    {
                        type: "formSection",
                        fields: [
                            { type: "url", name: "Twitter", placeholder: "Twitter (Optional)" },
                            { type: "url", name: "GitHub", placeholder: "GitHub (Optional)" },
                            { type: "url", name: "Additional", placeholder: "Additional Link" },
                        ],
                        className: 'mx-0 md:mx-5',
                    },
                ],
            },
        ],
    },
    {
        title: "Company Media Links Step",
        sections: [
            {
                type: "image",
                className: "py-2 bg-contain bg-center bg-no-repeat h-48 md:h-64",
                src: "../../SocialMediaLinks.svg"
            },
            {
                type: "formSection",
                title: "",
                name:'companySocialMediaLink[]',
                description: "Add your website, portfolio, and social media links.",
                fields: [
                    {
                        type: "formSection",
                        fields: [
                            { type: "url", name: "Website", placeholder: "Company Website URL", required: true },
                            { type: "url", name: "LinkedIn", placeholder: "Company LinkedIn (Optional)" },
                            { type: "url", name: "Instagram", placeholder: "Company Instagram (Optional)" },
                        ]
                    },
                    {
                        type: "formSection",
                        fields: [
                            { type: "url", name: "Twitter", placeholder: "Company Twitter (Optional)" },
                            { type: "url", name: "GitHub", placeholder: "Company GitHub (Optional)" },
                            { type: "url", name: "Additional", placeholder: "Additional Company Link" },
                        ],
                        className: 'mx-0 md:mx-5',
                    },
                ],
            },
        ],
    },
    {
        title: "Product & Services Step",
        sections: [
            {
                type: "image",
                src: "../../Product&Services.svg",
                className: "py-2 bg-contain bg-center bg-no-repeat h-48 md:h-64"
            },
            {
                type: "choiceButtons",
                title: "Choose What To Add",
                titleClassName: "text-2xl font-semibold text-[#707FDD] text-center",
                buttons: [
                    { label: "Products", value: "Products" },
                    { label: "Services", value: "Services" }
                ]
            },
            {
                type: "productList",
                className: "space-y-4 mt-4 max-h-96 overflow-y-auto p-4 bg-white rounded-lg shadow"
            },
            {
                type: "addButton",
                label: "Add New",
                className: "flex justify-center mt-4"
            }
        ]
    },
    {
        title: "Testimonials Step",
        sections: [
            {
                type: "image",
                src: "../../Testimonials.svg",
                className: "py-2 bg-contain bg-center bg-no-repeat h-48 md:h-64"
            },
            {
                type: "testimonialList",
                className: "space-y-4 max-h-96 overflow-y-auto p-4 bg-white rounded-lg shadow"
            },
            {
                type: "addTestimonial",
                title: "Add New Testimonial",
                titleClassName: "text-2xl font-semibold text-[#707FDD] text-center",
                fields: [
                    { type: "text", name: "name", placeholder: "Name", },
                    { type: "text", name: "designation", placeholder: "Designation", },
                    { type: "url", name: "imageUrl", placeholder: "Image URL (optional)" },
                    { type: "textarea", name: "description", placeholder: "Testimonial", rows: 4, },
                ],
                buttonText: "Add Testimonial"
            }
        ]
    },
    {
        title: "Post Links Step",
        sections: [
            {
                title: "Add Social Media Posts",
                type: "addLinkSection", // The type of section
                fields: [
                    {
                        title: "Add Instagram Posts",
                        placeholder: "Instagram Post Link",
                        name: "instagramPost",
                        required: true,
                        type: "addLinkSection" // The type should be specified for each field as well
                    },
                    {
                        title: "Add Instagram Reels",
                        placeholder: "Instagram Reel Link",
                        name: "instagramReel",
                        required: true,
                        type: "addLinkSection"
                    },
                    {
                        title: "Add YouTube Videos",
                        placeholder: "YouTube Video Link",
                        name: "youtubeVideoLink",
                        required: true,
                        type: "addLinkSection"
                    }
                ]
            }
        ]
    }
    ,
    {
        title: "Gallery Step",
        sections: [
            {
                type: "imageGallery",
                className: "flex gap-4 flex-wrap justify-start w-full overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-[#707FDD] hover:scrollbar-thumb-[#5C6CCF]"
            },
            {
                type: "addButton",
                label: "Add Images",
                className: "flex justify-center"
            }
        ]
    },
    {
        title: 'Business Hours',
        icon: '',
        fields: [
            { name: 'businesshoursFrom', placeholder: 'From', type: 'time' },
            { name: 'businesshoursTo', placeholder: 'To', type: 'time' },
            { name: 'businessType', placeholder: 'Type', type: 'text' },
        ],
        buttons: ['Save Changes', 'Go Back'],
    },
    {
        title: 'Help',
        icon: '',
        fields: [],
        buttons: ['Save Changes', 'Go Back'],
    },
];

export const initialFormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    location: "",
    profileImageUrl: "",
    headerImageUrl: "",
    templateType: "",
    cardName: "",
    qrCodeUrl: "",
    aboutUs: "",
    companyAddress: "",
    dateOfBirth: "",
    bio: "",
    gridType: "",
    languageSpoken: "",
    additionalLink: "",
    emails: [],
    phoneNumbers: [],
    otherEmails: "",
    otherPhoneNumber: "",
    phoneNumber: "",
    emergencyName: "",
    emergencyRelationship: "",
    emergencyNumber: "",
    emergencyEmail: "",
    SocialMediaLink: [],
    companySocialMediaLink: [],
    gallery: [],
    instagramPost: [],
    instagramReel: [],
    youtubeVideoLink: [],
    testimonials: [],
    services: [],
    businessHours: [],
};
