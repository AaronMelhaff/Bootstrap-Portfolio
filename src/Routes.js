import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SiteNav from './components/SiteNav';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

function Routes(props) {

  return (
    <Router>
      <SiteNav />
      <Switch>
        <Route exact path='/' component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default Routes