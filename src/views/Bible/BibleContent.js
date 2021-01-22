import React from 'react';
import { connect } from 'react-redux';

export const BibleContent = ({ currentText }) =>
  <div className="bible-content" className="bible-content">
    {currentText}
  </div>;

const mapStateToProps = state => ({
  currentText: state.bible.currentText || '',
});

export default connect(mapStateToProps)(BibleContent);