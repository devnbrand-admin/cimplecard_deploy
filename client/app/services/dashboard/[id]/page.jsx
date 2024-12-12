'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';


const ModalForm = dynamic(() => import('../../../components/dashboardformComponents/ModalForm'));
const ModalFormMobile = dynamic(() => import('../../../components/dashboardformComponents/ModalFormMobile'));

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Provider store={store}>
      <div className="w-full h-screen flex justify-center items-center">
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Create Card
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
