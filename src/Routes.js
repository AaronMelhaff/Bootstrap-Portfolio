import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SiteNav from './components/SiteNav';
import NoMatch from './pages/NoMatch';

function Routes(props) {

  return (
    <Router>
      <SiteNav />
      <Switch>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default Routes