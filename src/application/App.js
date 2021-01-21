import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

import './App.css';
import '../bootstrap/css/bootstrap.css';

const App = () =>
  <div style={{position: 'relative'}}>
    <Header />
    <Main />
  </div>;

export default App;
