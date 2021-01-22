import React from 'react';
import { connect } from 'react-redux';

export const BibleContent = ({ currentText }) =>
  <div className="bible-content" className="bible-content">
    {currentText}..lol
  </div>;

const mapStateToProps = state => ({
  currentText: state.bibleReducer.currentText || '',
});

export default connect(mapStateToProps)(BibleContent);