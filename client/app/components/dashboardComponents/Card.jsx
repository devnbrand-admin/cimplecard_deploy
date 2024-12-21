"use client";

import { useEffect, useState } from "react"; // For managing modal state
import { useParams, useRouter } from "next/navigation"; // For handling dynamic params
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import { store } from "../../../store/store";
import { useMediaQuery } from "react-responsive";

const ModalForm = dynamic(() =>
  import("../../components/dashboardformComponents/ModalForm")
);
const ModalFormMobile = dynamic(() =>
  import("../../components/dashboardformComponents/ModalFormMobile")
);

const Card = ({ card }) => {
  const { id } = useParams(); // Dynamically access the `id` parameter from the route
  const router = useRouter(); // For navigation in Next.js

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [isMobile, setIsMobile] = useState(false);
  const [editId,setEditId] = useState(null)

  // console.log(card,"Card")
  const isMobileSize = useMediaQuery({ maxWidth: 768 });

  function timeAgo(updatedTime) {
    const currentTime = new Date().getTime();
    const updatedDate = new Date(updatedTime).getTime();
    const diffInMs = currentTime - updatedDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  }

  useEffect(()=>{
    console.log(editId,"editId")
  },[editId])

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

    useEffect(() => {
      setEditId(null)
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="w-80 flex-col relative m-3 rounded-xl bg-white">
      <div
        className="w-56 h-36 absolute rounded-xl"
        style={{
          overflow: "hidden",
          left: "50%",
          transform: "translate(-50%, -25%)",
        }}
      >
        <div
          className="relative w-56 h-full group"
          onClick={() => window.open(card.uniqueUrl, "_blank")}
        >
          <iframe
            src={card.uniqueUrl}
            title="Scaled Iframe"
            style={{
              width: `${window.innerWidth <= 768 ? "300vw" : "80vw"}`, // Makes the iframe as wide as the viewport
              height: "100vh", // Makes the iframe as tall as the viewport
              transform: "scale(0.20)", // Scales down to fit the 250px box
              transformOrigin: "0 0", // Ensures scaling starts from the top-left corner
              top: 0,
              left: 0,
              pointerEvents: "none", // Prevents interaction inside the iframe
            }}
          ></iframe>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition">
            Visit
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="h-28"></div>
      <div className="w-full h-max p-3 bg-white rounded-xl">
        <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-purple-400">
          {card.templateType}
        </span>
        <div className="flex m-1">
          <span className="text-sm" style={{ color: "#AB6BD4" }}>
            {card.bio}
          </span>
          <img
            src="/Assets/Star.png"
            alt="Star Icon"
            className="w-3.5 h-3.5 mr-4"
          />
          <img
            src="/Assets/Ellipsis.png"
            alt="options Icon"
            className="w-5 h-5 mr-4"
          />
        </div>
        <div
          className="text-sm my-2 flex items-center"
          style={{ color: "#AB6BD4" }}
        >
          <svg
            className="w-2.5 h-2.5 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
          </svg>{" "}
          <span>{timeAgo(card.updatedAt)}</span>
        </div>
        <div className="flex content-center justify-center mt-auto">
          <img
            src="/Assets/Comments.png"
            alt="Message Icon"
            className="w-5 h-5 mr-4"
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/profile/${card.id}`)} // Navigate to profile
          />
          <button
            style={{
              backgroundColor: "#AB6BD4",
            }}
            className="flex items-center justify-center px-3 text-white rounded-full focus:outline-none"
            onClick={()=>{

              openModal();
              setEditId(card?.id)
            }
            
            } // Open modal on click
          >
            <img
              src="/Assets/Edit.png"
              alt="Edit Icon"
              className="w-5 h-5 mr-4"
            />
            <span>Edit this File</span> 
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white flex flex-col p-6 rounded-lg w-3/4 h-fit">
            <h2 className="text-xl font-bold mb-4">Edit Card File </h2>
            <div className="w-3/4 h-fit"><Provider store={store}>
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded shadow-md" >
                  {isMobileSize ? <ModalFormMobile cardId={editId ? editId :null}/> : <ModalForm cardId={editId ? editId :null}/>}
                </div>
              </div>
            </Provider> </div>
            <div className="flex justify-end">
              <button onClick={closeModal} className="text-sm text-red-500">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
