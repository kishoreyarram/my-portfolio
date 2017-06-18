import React from 'react';
import {
  Route,
} from 'react-router-dom';
import App from './App';
import Contact from './Contact';

const Routes = () => (
  <Route component={App} >
    <Route path="/contact" component={Contact} />
  </Route>
    );

export default Routes;
