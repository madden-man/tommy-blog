import React from 'react';
import { array, node } from 'prop-types';
import { Link } from 'react-router-dom';

import './TwoColumn.css';

export const TwoColumn = ({ links, children }) =>
  <div className="two-column">
    <div className="two-column__left">
      {links.map(({ text, url, color }) =>
        <Link to={url} style={{backgroundColor: color}} key={url}>
          {text}
        </Link>
      )}
    </div>
    <div className="two-column__right">
      {children}
    </div>
  </div>;

TwoColumn.propTypes = {
  links: array,
  children: node,
};

export default TwoColumn;
