// src/components/Home.js
import { useState } from 'react';
import SideBar from '../components/SideBar';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen dark:bg-slate-800 bg-slate-300">
    <SideBar />
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center">
        <button
          className="bg-amber-600 text-slate-100 font-semibold px-8 py-4 rounded-lg hover:bg-amber-500"
          onClick={handleModalOpen}
        >
          Conectar a uma Mesa ou Mestrar uma
        </button>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Modal de Conexão</h2>
            <button
              className="bg-amber-600 text-slate-100 font-semibold px-4 py-2 rounded-lg hover:bg-amber-500"
              onClick={handleModalClose}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};