import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SiteNav from './components/SiteNav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NoMatch from './pages/NoMatch';

function Routes(props) {

  return (
    <Router>
      <SiteNav />
      <Switch>
        <Redirect exact from='/' to='/about' />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default Routes