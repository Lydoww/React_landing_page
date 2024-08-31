// Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, cityName, onConfirm, onModify }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#161821] p-12 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-center text-medium text-white mb-6">
          Confirmation de votre ville, pour la récupération de votre véhicule :
        </h2>
        <div className="m-10 flex justify-center">
          <input
            type="text"
            value={cityName}
            readOnly
            className="p-3 pl-7 border-2 border-white bg-transparent text-white rounded-full text-left w-[200px]"
          />
        </div>
        <div className="flex justify-center gap-10">
          <button
            onClick={onModify}
            className="px-10 py-3 bg-gray-400 text-black border-2 border-white font-semibold rounded-2xl text-lg transition-all duration-300 hover:bg-gray-500"
          >
            MODIFIER
          </button>
          <button
            onClick={onConfirm}
            className="px-10 py-3 bg-red-600 text-white font-semibold rounded-2xl text-lg transition-all duration-300 hover:bg-red-700"
          >
            CONTINUER
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
