import React, { useState } from 'react';

export const BibleModal = ({ isOpen }) => {
  const [bookName, setBookName] = useState('');
  
  if (!isOpen) return null;
  
  return (
    <div className="bible-modal__overlay">
      <div className="bible-modal">
        <h2>Jump to..</h2>
        <span>Book <input value={bookName} onChange={(e) => setBookName(e.target.value)} /></span>
      </div>
    </div>
  )
};

BibleModal.defaultProps = {
  isOpen: false,
};

export default BibleModal;
