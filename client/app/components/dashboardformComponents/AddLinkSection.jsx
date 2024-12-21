export const AddLinkSection = ({ title, items, setItems, placeholder }) => {
  const handleAddItem = () => {
    setItems([...items, ""]); 
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index); 
    if (updatedItems.length === 0) {
      setItems([""]); 
    } else {
      setItems(updatedItems);
    }
  };

  const handleUpdateItem = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value; 
    setItems(updatedItems);
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
            <input
              type="text"
              value={item}
              onChange={(e) => handleUpdateItem(index, e.target.value)}
              placeholder={placeholder}
              className="flex-1 p-3 text-sm border text-[#787F89] bg-[#707FDD] bg-opacity-10 rounded-md"
              style={{
                marginRight: "8px",
              }}
            />

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
