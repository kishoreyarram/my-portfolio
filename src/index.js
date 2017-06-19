import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';
import Contact from './Contact';
import About from './About';
import Experience from './Experience';
import SocialMedia from './SocialMedia';
import PageNotFound from './PageNotFound';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/about" component={About} />
      <Route path="/experience" component={Experience} />
      <Route path="/social" component={SocialMedia} />
      <Route path="/contact" component={Contact} />
      <Route path="/*" component={PageNotFound} />
    </Route>
  </Router>,
document.getElementById('root'),
);
registerServiceWorker();
