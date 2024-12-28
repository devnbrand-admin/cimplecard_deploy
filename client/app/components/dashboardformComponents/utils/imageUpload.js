import axios from "../../api_resources/axios";

/**
 * Uploads a single image file and returns its URL.
 */
export const uploadSingleImage = async (imageFile,name) => {
    
    console.log(imageFile,imageFile?.type,"imageType")
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
  
    if (!validImageTypes.includes(imageFile.type)) {
      throw new Error("Invalid file type. Please upload a valid image (JPEG, PNG, GIF).");
    }
  
    if (imageFile.size > maxSizeInBytes) {
      throw new Error("File size exceeds the limit of 5MB.");
    }

  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axios.post("/api/user/uploadimage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data.profileImageUrl,name)
    return response.data.profileImageUrl
  } catch (error) {
    console.error(`Failed to upload image`, error);
    throw new Error(`Failed to upload image`);
  }
};

/**
 * Uploads an array of image files concurrently.
 */
export const uploadImages = async (imageFiles) => {
  try {
    // Use Promise.all to upload all images concurrently
    const uploadPromises = imageFiles.map((file) => uploadSingleImage(file));
    const imageUrls = await Promise.all(uploadPromises);
    console.log(imageUrls,"gallery")
    return imageUrls;
  } catch (error) {
    console.error("One or more image uploads failed:", error);
    throw new Error("Failed to upload images. Please try again.");
  }
};

