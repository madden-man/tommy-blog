import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Sidebar />
          <Content />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
