export const activeStep1Val = (formData) => {
    const errors = {};
  
    // Validate personal information
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required.";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required.";
    }
    if (!formData.jobTitle.trim()) {
      errors.jobTitle = "Job Title is required.";
    }
    if (!formData.companyName.trim()) {
      errors.companyName = "Company Name is required.";
    }
    if (!formData.location.trim()) {
      errors.location = "Company address is required.";
    }
    if (!formData.aboutUs.trim()) {
      errors.aboutUs = "About Us section is required.";
    }
    if (!formData.languageSpoken.trim()) {
      errors.languageSpoken = "Language Spoken is required.";
    }
    if (!formData.dateOfBirth.trim()) {
      errors.dateOfBirth = "Date of Birth is required.";
    }
  
    // Validate emails and phone numbers
    // if (!formData.emails || formData.emails.length === 0) {
    //   errors.emails = "At least one email is required.";
    // }
    // if (!formData.phoneNumbers || formData.phoneNumbers.length === 0) {
    //   errors.phoneNumbers = "At least one phone number is required.";
    // }
  
    // Optional: Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (formData.dateOfBirth && !dateRegex.test(formData.dateOfBirth)) {
      errors.dateOfBirth = "Date of Birth must be in yyyy-mm-dd format.";
    }
  
    return {
      valid: Object.keys(errors).length === 0,
      errors,
    };
  
  }
  
  export const validateStep3 = (formData) => {
    const errors = {};
  
    // Validate phone numbers
    formData.phoneNumbers.forEach((number, index) => {
      if (!number) {
        errors[`phoneNumber${index}`] = "Phone number is required.";
      } else if (!/^\d{10}$/.test(number)) {
        errors[`phoneNumber${index}`] = "Phone number must be 10 digits.";
      }
    });
  
    // Validate email addresses
    formData.emails.forEach((email, index) => {
      if (!email) {
        errors[`email${index}`] = "email number is required.";
  
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors[`email${index}`] = "Invalid email address.";
      }
    });
  
    // Emergency contact validations
    if (!formData.emergencyName) {
      errors.emergencyName = "Emergency contact name is required.";
    }
  
    if (!formData.emergencyRelationship) {
      errors.emergencyRelationship = "Relationship is required.";
    }
  
    if (!formData.emergencyNumber) {
      errors.emergencyNumber = "Emergency contact phone number is required.";
    } else if (!/^\d{10}$/.test(formData.emergencyNumber)) {
      errors.emergencyNumber = "Emergency phone number must be 10 digits.";
    }
  
    if (formData.emergencyEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emergencyEmail)) {
      errors.emergencyEmail = "Invalid emergency email address.";
    }
  
    console.log(errors, "step3")
  
    return {
      valid: Object.keys(errors).length === 0,
      errors,
    };
  };
  
  export const validateStep4 = (formData) => {
    const errors = {}
    if (
      !formData.SocialMediaLink.find((link) => link.platform === "Website")?.url
    ) {
      errors.Website = "Website URL is required.";
    }
  
  
  
    // if (
    //   formData.SocialMediaLink.find((link) => link.platform === "LinkedIn")?.url &&
    //   !formData.SocialMediaLink.find((link) => link.platform === "LinkedIn").url
    //     .startsWith("https://")
    // ) {
    //   errors.LinkedIn = "LinkedIn URL must start with 'https://'.";
    // }
  
    return {
      valid: Object.keys(errors).length === 0,
      errors,
    };
  
  }
  
  export const validateStep5 = (formData) => {
    const errors = {}
    if (
      !formData.companySocialMediaLink.find((link) => link.platform === "Website")?.url
    ) {
      errors.companyWebsite = "Company Website URL is required.";
    }
  
  
    // if (
    //   formData.SocialMediaLink.find((link) => link.platform === "LinkedIn")?.url &&
    //   !formData.SocialMediaLink.find((link) => link.platform === "LinkedIn").url
    //     .startsWith("https://")
    // ) {
    //   errors.LinkedIn = "LinkedIn URL must start with 'https://'.";
    // }
  
    return {
      valid: Object.keys(errors).length === 0,
      errors,
    };
  
  }
  
  export const validateStep6 = (formData, productData) => {
    const errors = { gridType: "", products: [] };
  
    // Validate gridType
    if (!formData.gridType) {
      errors.gridType = "Please select Product or Service.";
    }
  
    // Validate product data
    productData.forEach((product, index) => {
      const productErrors = {};
  
      if (!product.name.trim()) {
        productErrors.name = "Name is required.";
      }
      if (!product.description.trim()) {
        productErrors.description = "Description is required.";
      }
      if (!product.serviceUrl.trim()) {
        productErrors.serviceUrl = "Service URL is required.";
      } else if (!/^https?:\/\//.test(product.serviceUrl.trim())) {
        productErrors.serviceUrl = "Invalid URL. Must start with http:// or https://.";
      }
      // if (!product.imageUrl.trim()) {
      //   productErrors.imageUrl = "Image is required.";
      // }
  
      errors.products[index] = productErrors;
    });
  
    return {
      valid: !errors.gridType && errors.products.every((err) => Object.keys(err).length === 0),
      errors,
    };
  };
  
  export const validateTestimonialsStep7 = (testimonials) => {
    const errors = testimonials.map((testimonial) => {
      const testimonialErrors = {};
      if (!testimonial.name.trim()) {
        testimonialErrors.name = "Name is required.";
      }
      if (!testimonial.designation.trim()) {
        testimonialErrors.designation = "Designation is required.";
      }
      if (!testimonial.description.trim()) {
        testimonialErrors.description = "Description is required.";
      }
      if (!testimonial.imageUrl.trim()) {
        testimonialErrors.imageUrl = "Image URL is required.";
      } else if (!/^https?:\/\//.test(testimonial.imageUrl.trim())) {
        testimonialErrors.imageUrl = "Invalid URL. Must start with http:// or https://.";
      }
      return testimonialErrors;
    });
  
    const hasErrors = errors.some((err) => Object.keys(err).length > 0);
    return { 
      valid: !hasErrors, 
      errors
     };
  };
  
  export const validateLinksStep8 = (items, type) => {
    const errors = items.map((item) => {
      const trimmedItem = item.trim();
      if (!trimmedItem) {
        return "This field is required.";
      }
  
      const urlPattern = /^https?:\/\/.+$/; // Generic URL validation
      if (!urlPattern.test(trimmedItem)) {
        return "Invalid URL. Must start with http:// or https://.";
      }
  
      // Type-specific validation
      switch (type) {
        case "instagramPost":
        case "instagramReel":
          if (!trimmedItem.includes("instagram.com")) {
            return `Invalid Instagram URL for ${type}.`;
          }
          break;
  
        case "youtubeVideoLink":
          if (!trimmedItem.includes("youtube.com") && !trimmedItem.includes("youtube")) {
            return "Invalid YouTube URL.";
          }
          break;
  
        default:
          break;
      }
  
      return null; 
    });
  
    const hasErrors = errors.some((error) => error !== null);
    return { valid: !hasErrors, errors };
  };
  
  export const validateImagesStep9 = (images) => {
    const errors = {images:[]};
  
    // Check for image validation
    if (!images[0]) {
       errors.images[0] = "Image is required.";
    }
    if (!images[1]) {
      errors.images[1] = "Image is required.";
    }
  
    // Return valid status and errors
    return {
      valid: !Object.keys(errors).length === 0,
      errors,
    };
  };
  
  export const validateStep10 = (formData) => {
    const errors = { businessHours: [] };
  
    formData.businessHours.forEach((hour, index) => {
      const hourErrors = {};
  
      // Validate 'from' field
      if (!hour.from) {
        hourErrors.from = "From time is required.";
      }
  
      // Validate 'to' field
      if (!hour.to) {
        hourErrors.to = "To time is required.";
      } else if (hour.from && hour.to && hour.from >= hour.to) {
        hourErrors.to = "To time must be after the From time.";
      }
  
      // Validate 'type' field
      if (!hour.type) {
        hourErrors.type = "Type is required.";
      }
  
      if (Object.keys(hourErrors).length > 0) {
        errors.businessHours[index] = hourErrors;
      }
    });
  
    return {
      valid:!Object.keys(errors.businessHours).length > 0,
      errors}
  };
  
  
  
  
  
  
  
  
  
  
  
  