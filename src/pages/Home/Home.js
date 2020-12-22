import React from 'react';

import headshot from '../../assets/headshot.jpeg';

import './home.css';

const Home = () =>
  <div className="page">
    <div className="home">
      <h2>Welcome to</h2>
      <h1>TommyTheMadden.com!</h1>
      <a href="/personal/Resume_Thomas_Madden.pdf">
        <img src={headshot} className="home__profile-pic" alt="" />
      </a>
      <span className="home__headline">
        Team Lead / Front End Engineer at Aetna Digital, Inc.
      </span>
      <hr />
    </div>
  </div>;

export default Home;