import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavItem.css';

const NavItem = ({ path, img, border, text, color }) => {
  const [isActive, setIsActive] = useState(false);

  const activeStyle = {
    backgroundColor: color,
    color: 'white',
  };

  const borderStyle = {
    border: '2px ridge ' + color,
  };

  return (
    <Link
      to={path}
      style={isActive ? activeStyle : {}}
      className="nav-item"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img src={require(`../../img/${img}`)} style={border ? borderStyle : {}} className="nav-logo" alt={text} />
      <span>{text}</span>
    </Link>
  );
};

export default NavItem;
