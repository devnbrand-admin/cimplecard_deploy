import axios from '../components/api_resources/axios';
import uploadImage, { uploadImages, uploadSingleImage } from '../components/dashboardformComponents/utils/imageUpload';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/card/create`;


export const loginUser = async () => {
  try {
    const email = "";
    const password = "";

    const response = await axios.post(
      `/api/user/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    const token = response.data.user.token;


    document.cookie = `authToken=${token}; path=/; Secure`;

    return token;
  } catch (error) {
    console.error('Error during login:', error.message || error.response?.data || error);
    throw error;
  }
};





export const createCard = async (formData) => {

  try {
    const tokenString = sessionStorage.getItem("userToken");
    const tokenObject = JSON.parse(tokenString);
    const jwtToken = tokenObject.value;
    console.log('services:', formData.services)

    const requestData = {
      headerImageUrl:await uploadSingleImage(formData.headerImageUrl),
      title: `${formData.firstName} ${formData.middleName && formData.middleName} ${formData.lastName && formData.lastName}`,
      companyName: formData.companyName,
      companyAddress: formData.companyAddress,
      jobTitle: formData.jobTitle,
      bio: formData.bio,
      languageSpoken: formData.languageSpoken,
      dateOfBirth: formData.dateOfBirth,
      phoneNumber: formData.phoneNumber,
      phoneNumbers: formData.phoneNumbers,
      otherPhoneNumber: formData.otherPhoneNumber,
      emails: formData.emails,
      otherEmails: formData.otherEmails,
      emergencyName: formData.emergencyName,
      emergencyRelationship: formData.emergencyRelationship,
      emergencyNumber: formData.emergencyNumber,
      emergencyEmail: formData.emergencyEmail,
      cardName:  formData.templateType + Date.now(),
      companySocialMediaLink: formData.companySocialMediaLink,
      instagramPost: formData?.instagramPost && formData?.instagramPost,
      profileImageUrl:await uploadSingleImage(formData.profileImageUrl && formData.profileImageUrl,"profileUrl"),
      githubLink: formData?.githubLink && formData?.githubLink,
      additionalLink: formData.additionalLink,
      productDesc: formData.productDesc,
      testimonials: formData.testimonials,
      businessHours: formData.businessHours,
      templateType: formData.templateType,
      qrCodeUrl: formData?.qrCodeUrl,
      aboutUs: formData.aboutUs,
      instagramReel : formData?.instagramReel && formData?.instagramReel,
      youtubeVideoLink : formData?.youtubeVideoLink && formData.youtubeVideoLink,
      services: formData.services,
      socialMediaLink: formData.SocialMediaLink,
      gallery:await uploadImages(formData?.gallery),
      gridType:formData?.gridType
    };

    console.log(requestData, "res-data")



    const response = await axios.post("/api/card/create", requestData, {
      headers: {
        Authorization: `${jwtToken}`,
      },
    });

    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error creating card:', error.message || error.response?.data || error);
    throw error;
  }
};


const getTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === 'authToken') {
      return value;
    }
  }
  return null;
};





























// import axios from 'axios';

// const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/card/create`;

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJkYXNkaXBheWFuMDMyMEBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTczMzk4ODg0MCwiZXhwIjoxNzMzOTkyNDQwfQ.YhKPpxViXv3Obl6QNbpI1z_zyYYYyqtpqGijG1quBaU";

// export const createCard = async (formData) => {
//   try {
//     const requestData = {
//       title: `${formData.firstName} ${formData.middleName} ${formData.lastName}'s Card`,
//       companyName: [formData.companyName],
//       companyAddress: [formData.companyAddress],
//       jobTitle: [formData.jobTitle],
//       bio: [formData.bio],
//       languageSpoken: [formData.languageSpoken],
//       dateOfBirth: [formData.dateOfBirth],
//       phoneNumber: [formData.phoneNumber],
//       phoneNumbers: [formData.phoneNumbers],
//       otherPhoneNumber: [formData.otherPhoneNumber],
//       emails: [formData.emails],
//       otherEmails: [formData.otherEmails],
//       emergencyName: [formData.emergencyName],
//       emergencyRelationship: [formData.emergencyRelationship],
//       emergencyNumber: [formData.emergencyNumber],
//       emergencyEmail: [formData.emergencyEmail],
//       uniqueUrl: [formData.uniqueUrl],
//       companySocialMediaLink: [formData.companySocialMediaLink],
//       instagramLink: [formData.instagramLink],
//       personalSocialMediaLinks: [formData.personalSocialMediaLinks],
//       githubLink: [formData.githubLink],
//       additionalLink: [formData.additionalLink],
//       productDesc: [formData.productDesc],
//       testimonialName: [formData.testimonialName],
//       testimonialRole: [formData.testimonialRole],
//       testimonialIndustry: [formData.testimonialIndustry],
//       testimonialMessage: [formData.testimonialMessage],
//       businesshoursFrom: [formData.businesshoursFrom],
//       businesshoursTo: [formData.businesshoursTo],
//       businessType: [formData.businessType]
//     };

//     const response = await axios.post(API_BASE_URL, requestData, {
//       headers: {
//         Authorization: `${token}`,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating card:', error);
//     throw error;
//   }
// };
