"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";

const ModalForm = dynamic(() =>
  import("../../../components/dashboardformComponents/ModalForm")
);
const ModalFormMobile = dynamic(() =>
  import("../../../components/dashboardformComponents/ModalFormMobile")
);

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Provider store={store}>
      <div className="w-full h-screen flex justify-center items-center">
        <button >
          <div
            onClick={handleOpenModal}
            className="relative group justify-items-center content-center w-80 flex-col relative m-3 rounded-xl bg-white"
          >
            <img
              src="/Assets/add a new project.png"
              alt="Icon 3"
              className="w-20 h-20 mb-3"
            />
            <h2 style={{ fontSize: 20, color: "#AB6BD4" }}>Add New Card </h2>
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center rounded-xl justify-center text-xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md">
              {isMobile ? <ModalFormMobile /> : <ModalForm />}
            </div>
          </div>
        )}
      </div>
    </Provider>
  );
}
