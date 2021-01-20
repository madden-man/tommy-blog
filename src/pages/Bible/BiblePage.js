import React, { useEffect, useState } from 'react';
import BibleSidebar from './BibleSidebar';
import BibleContent from './BibleContent';
import BibleModal from './components/BibleModal';

import './bible.css';
import BibleApi from './state/service';

export const BiblePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const someText = BibleApi.fetch('John', '11');

    console.log(someText);
  }, []);

  return (
    <div className="bible-container" onKeyDown={(e) => {
      if (e.keyCode === 74 || e.keyCode === 220) {
        setModalOpen(true);
      } else if (e.keyCode === 27) {
        setModalOpen(false);
      }
    }}
    tabIndex="0">
      <BibleSidebar />
      <BibleContent />
      <BibleModal isOpen={isModalOpen} />
    </div>
  );
};

export default BiblePage;