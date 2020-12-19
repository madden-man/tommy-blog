import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import classnames from 'classnames';

import ScrollToTop from './ScrollToTop';

import Home from '../../pages/Home';
import Memories from '../../pages/Memories/Memories';
import TheologyMap from '../../pages/TheologyMap/TheologyMap';
import PoetryPage from '../../pages/Poetry/Poetry';

import './Main.css';

const Main = () =>
  <main className={classnames('main', {
    'main--air': window.location.pathname.includes('/air'),
    'main--water': window.location.pathname.includes('/water'),
    'main--earth': window.location.pathname.includes('/earth'),
    'main--fire': window.location.pathname.includes('/fire'),
  })}>
    <ScrollToTop />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/air' component={TheologyMap} />
      <Route exact path='/fire' component={PoetryPage} />
      <Route path='/fire/:id' component={PoetryPage} />
      <Route exact path='/stories' component={Memories} />
    </Switch>
  </main>;

export default withRouter(Main);
