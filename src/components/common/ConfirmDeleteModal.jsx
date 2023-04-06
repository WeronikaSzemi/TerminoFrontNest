import React from "react";
import '../style.css';
import ReactDOM from "react-dom";

export const ConfirmDeleteModal = ({showModal, children, onConfirm, onClose}) => {
  if (!showModal) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal-div text-center theme-bg-light">
        <div className="mb-4 fs-5">
          {children}
        </div>
        <button className="btn theme-btn-darkaccent mx-2 mt-2 px-3"
                onClick={onConfirm}>Usuń
        </button>
        <button className="btn theme-btn-mainbrand mx-2 mt-2 px-3"
                onClick={onClose}>Anuluj
        </button>
      </div>
    </>,
    document.getElementById('portal'),
  )
}