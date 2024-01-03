import React, { useEffect } from 'react';
import './Modal.css';


 export const Modal = ( {   isOpen,imageURL,onClose }) => {

 const handleKeyDown = e => {
   if (e.key === 'Escape') {
    onClose();
   }
 };

 const handleOverlayClick = e => {
  if (e.target === e.currentTarget) {
    onClose();
  }
   };
   
   useEffect(() => {
     window.addEventListener('keydown', handleKeyDown);

     return () => {
       window.removeEventListener('keydown', handleKeyDown);
     };
   }, []);
  return (
      isOpen && (
        <div className="Overlay" onClick={handleOverlayClick}>
          <div className="Modal">
            <img src={imageURL} alt="Large" />
            <button type="button" className="close-button" onClick={onClose}>
              x
            </button>
          </div>
        </div>
      )
    );
}