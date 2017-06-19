import React from 'react';
import {
  Route,
} from 'react-router';
import App from './App';
import Contact from './Contact';
import About from './About';

const Routes = () => (
  <Route path="/" component={App} >
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Route>
    );

export default Routes;
