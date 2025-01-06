const generateValidationRules = (structure) => {
  const rules = {};

  // Regex for email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regex for URL validation (http:// or https://)
  const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/;

  // Recursive function to extract rules from a section
  const extractRules = (section) => {
    if (!section) return;

    // Handle array fields (sections ending with [])
    if (section.name?.endsWith('[]')) {
      const baseFieldName = section.name.slice(0, -2); // Remove [] from name
      
      // Create validation rules for each field in the array
      section.fields?.forEach(formSection => {
        if (formSection.fields && Array.isArray(formSection.fields)) {
          formSection.fields.forEach(field => {
            const fieldName = `${baseFieldName}.${field.name}`;
            const rule = {};

            // Add required validation if specified
            if (field.required) {
              rule.required = true;
            }

            // Add URL validation for all fields in array as they're links
            if (field.type === 'url') {
              rule.pattern = urlPattern;
              rule.message = `Please enter a valid URL for ${field.name}`;
            }

            // If min or max is specified
            if (field.min !== undefined) {
              rule.min = field.min;
            }
            if (field.max !== undefined) {
              rule.max = field.max;
            }

            // Only add rule if it has validations
            if (Object.keys(rule).length > 0) {
              rules[fieldName] = rule;
            }
          });
        }
      });
    }

    // Handle regular fields (non-array sections)
    else if (section.fields && Array.isArray(section.fields)) {
      section.fields.forEach((field) => {
        // Skip if field is part of an array section
        if (field.name?.endsWith('[]')) {
          extractRules(field);
          return;
        }

        // Initialize the rule object for the field
        const rule = {};

        // If the field has a required property
        if (field.required) {
          rule.required = true;
        }

        // Field type specific validations
        switch (field.type) {
          case 'tel':
            rule.pattern = /^[0-9]{10,15}$/;
            rule.message = 'Please enter a valid phone number.';
            break;
          case 'email':
            rule.pattern = emailPattern;
            rule.message = 'Please enter a valid email address.';
            break;
          case 'url':
            rule.pattern = urlPattern;
            rule.message = 'Please enter a valid URL starting with http:// or https://';
            break;
        }

        // Add min/max validations if specified
        if (field.min !== undefined) {
          rule.min = field.min;
        }
        if (field.max !== undefined) {
          rule.max = field.max;
        }

        // Add the rule to rules object if any validation exists
        if (Object.keys(rule).length > 0) {
          const fieldName = field.name?.replace(/\[\d+\]/g, '');
          rules[fieldName] = rule;
        }

        // Process nested fields
        if (field.fields) {
          extractRules(field);
        }
      });
    }

    // Handle textarea and select types
    if ((section.type === 'textarea' || section.type === 'select') && section.required) {
      rules[section.name] = { required: true };
    }
  };

  // Process each section in the structure
  structure.sections?.forEach((section) => {
    extractRules(section);
  });

  console.log('Generated Rules:', rules);
  return rules;
};




function formatString(input) {
  // Replace camel case with spaces
  const spacedString = input.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Handle array notation like 'phone[0]' to 'phone 1'
  const cleanedString = spacedString.replace(/\[(\d+)\]/g, (match, number) => ` ${parseInt(number) + 1}`);

  // Split the string into words
  const words = cleanedString.split(' ');

  // Capitalize the first word and make the rest lowercase
  const formattedWords = words.map((word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  });

  // Join the words back into a single string
  return formattedWords.join(' ');
}

export const validateFormData = (structure, setErrors, formData) => {
  const rules = generateValidationRules(structure);
  const validationErrors = {};

  const validateValue = (value, rule, fieldName) => {
    // Handle empty or undefined values
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      if (rule.required) {
        return `${formatString(fieldName)} is required.`;
      }
      return null;
    }

    // Handle min length validation
    if (rule.min !== undefined && value.length < rule.min) {
      return `${formatString(fieldName)} must be at least ${rule.min} characters long.`;
    }

    // Handle max length validation
    if (rule.max !== undefined && value.length > rule.max) {
      return `${formatString(fieldName)} must not exceed ${rule.max} characters.`;
    }

    // Handle pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message || `${formatString(fieldName)} is not valid.`;
    }

    return null;
  };

  // First, handle array fields specifically
  Object.keys(rules).forEach((field) => {
    if (field.includes('.')) {
      const [arrayName, fieldName] = field.split('.');
      const rule = rules[field];
      const arrayData = formData[arrayName];

      if (Array.isArray(arrayData)) {
        // Get the matching item from the array
        const item = arrayData.find(item => item.platform === fieldName);
        
        if (rule.required) {
          // For required fields
          if (!item || !item.url || item.url.trim() === '') {
            // Find the correct index for the error message
            const index = arrayData.findIndex(i => i.platform === fieldName);
            validationErrors[`${arrayName}.${fieldName}`] = `${fieldName} is required.`;
          } else if (item.url) {
            // Validate URL format if value exists
            const error = validateValue(item.url.trim(), rule, fieldName);
            if (error) {
              validationErrors[`${arrayName}.${fieldName}`] = error;
            }
          }
        } else if (item?.url) {
          // For optional fields, only validate if they have a value
          const error = validateValue(item.url.trim(), rule, fieldName);
          if (error) {
            validationErrors[`${arrayName}.${fieldName}`] = error;
          }
        }
      }
    } else {
      // Handle non-array fields
      let value = formData[field];
      const rule = rules[field];

      if (typeof value === 'string') {
        value = value.trim();
      }

      const error = validateValue(value, rule, field);
      if (error) {
        validationErrors[field] = error;
      }
    }
  });

  setErrors(validationErrors);
  console.log('Validation Errors:', validationErrors)
  return Object.keys(validationErrors).length === 0;
};