import axios from 'axios';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/card/create`;

export const createCard = async (formData) => {
  try {
    const requestData = {
      title: `${formData.firstName} ${formData.middleName} ${formData.lastName}'s Card`,  
      companyName: [formData.companyName],
      companyAddress: [formData.companyAddress],
      jobTitle: [formData.jobTitle],
      bio: [formData.bio],
      languageSpoken: [formData.languageSpoken],
      dateOfBirth: [formData.dateOfBirth],
      phoneNumber: [formData.phoneNumber],
      phoneNumbers: [formData.phoneNumbers],
      otherPhoneNumber: [formData.otherPhoneNumber],
      emails: [formData.emails],
      otherEmails: [formData.otherEmails],
      emergencyName: [formData.emergencyName],
      emergencyRelationship: [formData.emergencyRelationship],
      emergencyNumber: [formData.emergencyNumber],
      emergencyEmail: [formData.emergencyEmail],
      uniqueUrl: [formData.uniqueUrl],
      companySocialMediaLink: [formData.companySocialMediaLink],
      instagramLink: [formData.instagramLink],
      personalSocialMediaLinks: [formData.personalSocialMediaLinks],
      githubLink: [formData.githubLink],
      additionalLink: [formData.additionalLink],
      productDesc: [formData.productDesc],
      testimonialName: [formData.testimonialName],
      testimonialRole: [formData.testimonialRole],
      testimonialIndustry: [formData.testimonialIndustry],
      testimonialMessage: [formData.testimonialMessage],
      businesshoursFrom: [formData.businesshoursFrom],
      businesshoursTo: [formData.businesshoursTo],
      businessType: [formData.businessType] 
    };

    const response = await axios.post(API_BASE_URL, requestData);
    return response.data;
  } catch (error) {
    console.error('Error creating card:', error);
    throw error;
  }
};
