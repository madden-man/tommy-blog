import React, { useEffect, useState } from 'react';
import BibleSidebar from './BibleSidebar';
import BibleContent from './BibleContent';
import BibleModal from './components/BibleModal';

import { connect } from 'react-redux';
import { passageRequested as passageRequestedDispatcher } from './state/actions';

import './bible.css';
import namespace from './state/namespace';
import { BOOKS } from './constants';

export const BiblePage = ({ currentSignature, passageRequested }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onKeyPressed = (e) => {
    if (e.keyCode === 74 || e.keyCode === 220) {
      setModalOpen(true);
    } else if (e.keyCode === 27) {
      setModalOpen(false);
    } else if (e.keyCode === 39) {
      const currChapter = parseInt(currentSignature.substring(currentSignature.indexOf(' ') + 1));
      const currBook = currentSignature.substring(0, currentSignature.indexOf(' '));

      const currBookInfo = BOOKS.map((book, index) => book.name === currBook && ({ ...book, index }))[0];
      let newPassage;
      if (currChapter === currBookInfo.numChapters) {
        newPassage = BOOKS[currBookInfo.index + 1].name + ' 1';
      } else {
        newPassage = currBook + ' ' + (currChapter + 1);
      }

      passageRequested(newPassage);
    } else if (e.keyCode === 37) {
      /* left arrow */
      const currChapter = parseInt(currentSignature.substring(currentSignature.indexOf(' ') + 1));
      const currBook = currentSignature.substring(0, currentSignature.indexOf(' '));

      const currBookInfo = BOOKS.map((book, index) => book.name === currBook && ({ ...book, index }))[0];
      let newPassage;
      if (currChapter === 1) {
        newPassage = BOOKS[currBookInfo.index - 1].name + ' ' + BOOKS[currBookInfo.index - 1].numChapters;
      } else {
        newPassage = currBook + ' ' + (currChapter - 1);
      }

      passageRequested(newPassage);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed);

    return () => {
      window.removeEventListener('keydown', onKeyPressed);
    }
  }, [currentSignature]);

  return (
    <div className="bible-container">
      <BibleSidebar />
      <BibleContent />
      <BibleModal
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        passageRequested={passageRequested}
      />
    </div>
  );
};

const mapStateToProps = state => state[namespace];

const mapDispatchToProps = dispatch => ({
  passageRequested: (sig) => dispatch(passageRequestedDispatcher(sig)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BiblePage);