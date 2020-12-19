import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header';
import Main from '../components/Main';

import './App.css';
import '../bootstrap/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{position: 'relative'}}>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
