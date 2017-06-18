import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import Nav from './Nav';
import Contact from './Contact';
// import Second from './Second';
// import Third from './Third';
// import Fourth from './Fourth';

const Routes = () => (
  <Router>
    <div className="nav-bar col-md-2">
      <Route>
        <div>
          <Route exact path="/" component={Nav} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
          <Route path="/fourth" component={Fourth} /> */}
        </div>
      </Route>
    </div>
  </Router>
    );

export default Routes;
