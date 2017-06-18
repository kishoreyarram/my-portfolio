import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

import under from './under.png';
import './App.css';
import Nav from './Nav';

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
};

function App({ children }) {
  return (
    <div className="App">
      <div className="App-header">
        <div className="kishore-logo-div col-md-3 col-sm-3 col-xs-3">
          <h1 className="kishore-logo">K</h1>
        </div>
        <Typist
          className="text-animate"
          cursor={cursor}
        > Hello there, <br />
Im Kishore yarram, front-end developer.<br />
Working with React, Webpack, Node and other stuff.</Typist>
      </div>
      <p className="App-intro">
        <Nav />
        <img src={under} className="under-logo" alt="logo" />
        {children}
      </p>
      <footer className="footer">
        <p>Project is under Open Source <a href="">MIT License</a></p>
        <p>Built with &hearts; &#8226; 2017 &copy; <a href="http://kishoreyarram.github.io/my-react/">Kishore Yarram</a></p>
      </footer>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.any,
};

export default App;
