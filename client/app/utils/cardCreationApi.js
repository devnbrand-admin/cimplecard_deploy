import axios from 'axios';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/card/create`;

export const createCard = async (formData) => {
  try {
    const requestData = {
      title: `${formData.firstName} ${formData.lastName}'s Business Card`,
      phoneNumbers: [formData.phoneNumber],  
      emails: [formData.email],  
    };

    
    const response = await axios.post(API_BASE_URL, requestData);
    return response.data;
  } catch (error) {
    console.error('Error creating card:', error);
    throw error;
  }
};
