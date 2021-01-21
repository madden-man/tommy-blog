import React, { useEffect, useState } from 'react';
import BibleSidebar from './BibleSidebar';
import BibleContent from './BibleContent';
import BibleModal from './components/BibleModal';

import './bible.css';

export const BiblePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onKeyPressed = (e) => {
    if (e.keyCode === 74 || e.keyCode === 220) {
      setModalOpen(true);
    } else if (e.keyCode === 27) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed);

    return () => {
      window.removeEventListener('keydown', onKeyPressed);
    }
  }, []);

  return (
    <div className="bible-container">
      <BibleSidebar />
      <BibleContent />
      <BibleModal isOpen={isModalOpen} />
    </div>
  );
};

export default BiblePage;