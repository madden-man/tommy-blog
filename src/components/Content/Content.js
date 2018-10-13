import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../../pages/Home';
import './Content.css'

const Content = () => (
    <main className="content">
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </main>
  )

export default Content;