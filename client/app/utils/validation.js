const generateValidationRules = (structure) => {
  const rules = {};

  // Regex for email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regex for URL validation (http:// or https://)
  const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/;

  // Recursive function to extract rules from a section
  const extractRules = (section) => {
    if (!section) return;

    // Handle a section with fields
    if (section.fields && Array.isArray(section.fields)) {
      section.fields.forEach((field) => {
        // Initialize the rule object for the field
        const rule = {};

        // If the field has a required property, add to rules
        if (field.required) {
          rule.required = true;
        }

        // If the field is of type 'tel', add validation for phone numbers
        if (field.type === 'tel') {
          rule.pattern = /^[0-9]{10,15}$/; // Example: Allow 10 to 15 digits only
          rule.message = 'Please enter a valid phone number.';
        }

        // If the field is of type 'email', add validation for email format
        if (field.type === 'email') {
          rule.pattern = emailPattern; // Regex pattern for email validation
          rule.message = 'Please enter a valid email address.';
        }

        // If the field is of type 'url', add validation for URL format
        if (field.type === 'url') {
          rule.pattern = urlPattern; // Regex pattern for URL validation
          rule.message = 'Please enter a valid URL starting with http:// or https://';
        }

        // If min or max is specified, add them to the rule
        if (field.min !== undefined) {
          rule.min = field.min;
        }
        if (field.max !== undefined) {
          rule.max = field.max;
        }

        // Add the rule to the rules object if any validation exists
        if (Object.keys(rule).length > 0) {
          const fieldName = field.name?.replace(/\[\d+\]/g, ''); // Set all indices to 0 for validation
          rules[fieldName] = rule;
        }

        // Recursively process nested fields
        if (field.fields) {
          extractRules(field);
        }
      });
    }

    // Handle other section types like textarea or select
    if (section.type === 'textarea' && section.required) {
      rules[section.name] = { required: true };
    }
    if (section.type === 'select' && section.required) {
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

  Object.keys(rules).forEach((field) => {
    let value = formData[field];
    const rule = rules[field];

    // Trim the value before checking
    if (value && typeof value === 'string') {
      value = value.trim();
    }

    // If the value is an array, check the first element (value[0])
    if (Array.isArray(value) && value.length > 0) {
      value = value[0]?.trim();  // Handle the first element of the array
    }

    // Check if field is required and empty
    if (rule.required) {
      if (Array.isArray(value)) {
        // Check if the array is empty or contains only empty values
        const isArrayEmpty = value.length === 0 || value.every(item => !item || item.trim() === "");
        if (isArrayEmpty) {
          validationErrors[field] = `${formatString(field)} is required.`;
        }
      } else {
        // For non-array values (strings, numbers, etc.)
        if (!value || value.trim() === "") {
          validationErrors[field] = `${formatString(field)} is required.`;
        }
      }
    }

    // Check if field has a min value and validate it
    if (rule.min !== undefined && value && value.length < rule.min) {
      validationErrors[field] = `${formatString(field)} must be at least ${rule.min} characters long.`;
    }

    // Check if field has a max value and validate it
    if (rule.max !== undefined && value && value.length > rule.max) {
      validationErrors[field] = `${formatString(field)} must not exceed ${rule.max} characters.`;
    }

    // Check if field has a pattern (e.g., for phone numbers or email)
    if (rule.pattern && value && !rule.pattern.test(value)) {
      // For email specific validation
      if (field === 'email') {
        validationErrors[field] = rule.message || `${formatString(field)} is not valid.`;
      } else {
        validationErrors[field] = rule.message || `${formatString(field)} is not valid.`;
      }
    }
  });

  setErrors(validationErrors);

  // Return true if no errors, false if there are errors
  return Object.keys(validationErrors).length === 0;
};