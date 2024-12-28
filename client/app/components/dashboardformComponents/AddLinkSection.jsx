// export const AddLinkSection = ({ title, items, setItems, placeholder,setClientErrors,clientErrors }) => {

import { validateLinksStep8 } from "./cardFormValidation/cardValidation";

//   const handleAddItem = () => {
//     setItems([...items, ""]); 
//   };

//   const handleDeleteItem = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index); 
//     if (updatedItems.length === 0) {
//       setItems([""]); 
//     } else {
//       setItems(updatedItems);
//     }
//   };

//   const handleUpdateItem = (index, value) => {
//     const updatedItems = [...items];
//     updatedItems[index] = value; 
//     setItems(updatedItems);
//   };

//   return (
//     <div className="space-y-4 mt-4">
//       {/* Title */}
//       <div className="flex justify-center gap-4">
//         <h1 className="text-2xl font-semibold text-[#707FDD]">{title}</h1>
//       </div>

//       {/* Scrollable Container */}
//       <div
//         className="flex flex-col gap-4 mt-4 overflow-y-auto"
//         style={{
//           maxHeight: "300px", // Limit height of the container
//           padding: "10px",
//           backgroundColor: "#F9FAFB",
//           borderRadius: "8px",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between p-4"
//             style={{
//               backgroundColor: "#F1F2FC",
//               borderRadius: "8px",
//             }}
//           >
//             {/* Input */}
//             <input
//               type="text"
//               value={item}
//               onChange={(e) => handleUpdateItem(index, e.target.value)}
//               placeholder={placeholder}
//               className="flex-1 p-3 text-sm border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
//               style={{
//                 marginRight: "8px",
//               }}
//             />

//             {/* Delete Button */}
//             <button
//               onClick={() => handleDeleteItem(index)}
//               className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm"
//             >
//               ✕
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Add Button */}
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handleAddItem}
//           className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] shadow-md hover:shadow-lg transform transition-transform duration-200 ease-out active:scale-95"
//         >
//           Add {title}
//         </button>
//       </div>
//     </div>
//   );
// };

export const AddLinkSection = ({
  title,
  items,
  setItems,
  placeholder,
  setClientErrors,
  clientErrors,
  type, // Type-specific validation
}) => {
  const handleAddItem = () => {
    setItems([...items, ""]);
    setClientErrors((prevErrors) => ({
      ...prevErrors,
      [type]: {
        errors: [...(prevErrors?.[type]?.errors || []), null], // Add a new error slot
      },
    }));
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    const updatedErrors =
      clientErrors?.[type]?.errors.filter((_, i) => i !== index) || [];

    setItems(updatedItems);
    setClientErrors((prevErrors) => ({
      ...prevErrors,
      [type]: { errors: updatedErrors },
    }));
  };

  const handleUpdateItem = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);

    // Validate the updated item
    const { errors } = validateLinksStep8(updatedItems, type);
    setClientErrors((prevErrors) => ({
      ...prevErrors,
      [type]: { errors },
    }));
  };

  const validateOnSave = () => {
    const { valid, errors } = validateLinks(items, type);
    setClientErrors((prevErrors) => ({
      ...prevErrors,
      [type]: { errors },
    }));
    return valid;
  };

  return (
    <div className="space-y-4 mt-4">
      {/* Title */}
      <div className="flex justify-center gap-4">
        <h1 className="text-2xl font-semibold text-[#707FDD]">{title}</h1>
      </div>

      {/* Scrollable Container */}
      <div
        className="flex flex-col gap-4 mt-4 overflow-y-auto"
        style={{
          maxHeight: "300px", // Limit height of the container
          padding: "10px",
          backgroundColor: "#F9FAFB",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4"
            style={{
              backgroundColor: "#F1F2FC",
              borderRadius: "8px",
            }}
          >
            {/* Input */}
            <div className="flex-1 w-full">
              <input
                type="text"
                value={item}
                onChange={(e) => handleUpdateItem(index, e.target.value)}
                placeholder={placeholder}
                className={`flex-1 p-3 text-sm border rounded-md w-2/3 ${
                  clientErrors?.[type]?.errors?.[index]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                style={{
                  marginRight: "8px",
                }}
              />
              {clientErrors?.[type]?.errors?.[index] && (
                <p className="text-red-500 text-sm">
                  {clientErrors[type].errors[index]}
                </p>
              )}
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDeleteItem(index)}
              className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleAddItem}
          className="py-2 px-4 rounded-full text-white bg-gradient-to-r from-[#707FDD] to-[#1E2F98] shadow-md hover:shadow-lg transform transition-transform duration-200 ease-out active:scale-95"
        >
          Add {title}
        </button>
      </div>
    </div>
  );
};
