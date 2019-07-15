import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SiteNav from './components/SiteNav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Pallete from './pages/Pallete';
import NoMatch from './pages/NoMatch';
import Contact from './pages/Contact';

function Routes(props) {

  return (
    <Router>
      <SiteNav />
      <Switch>
        <Redirect exact from='/' to='/about/skills' />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/pallete' component={Pallete} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}


/* -- Route Manifest
  - /
    - /about
      - /skills
      - /education
    - /portfolio
*/

export default Routes