import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

export const ScrollToTop = ({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div />;
}

export default withRouter(ScrollToTop);
