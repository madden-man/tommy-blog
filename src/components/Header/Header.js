import React, { useState } from 'react';
import NavItem from '../NavItem';
import './Header.css'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={isExpanded ? "header-holder expanded dark" : "header-holder not-expanded dark"}>
        <div
          className="header"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <NavItem text="Home" img="tommy_real.jpg" path="/" color="darkgreen" border={true} />
          <div style={{ display: 'inline-flex', justifyContent: 'flex-end', width: '100%' }}>
            <NavItem text="Theology" img="air-symbol.jpg" color="#286977" path="/air"/>
            <NavItem text="Stories" img="water-symbol.jpg" color="#24435c" path="/water"/>
            <NavItem text="Poetry" img="fire-symbol.jpg" color="#671414" path="/fire"/>
            <NavItem text="Projects" img="earth-symbol.jpg" color="#00380a" path="/earth"/>
            <NavItem text="Memories" img="stories.png" path="/stories" color="darkgreen" border={true} />
            <NavItem text="Options" img="settings-24px.svg" path="/options" color="darkgreen" border={true} />
          </div>
        </div>
    </div>
  );
};

export default Header;
