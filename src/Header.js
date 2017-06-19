import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router';

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
};

const Header = () => (
  <div className="App-header">
    <div className="kishore-logo-div col-md-3 col-sm-3 col-xs-3">
      {/* <h1 className="kishore-logo">K</h1> */}
      <Link to="/" className=""><h1 className="kishore-logo">K</h1></Link>
    </div>
    <Typist
      className="text-animate "
      cursor={cursor}
    > Hello there, <br />Im Kishore yarram, front-end developer.<br /> Working with React, Webpack, Node and other stuff.</Typist>
    <a className="Git-button pull-right" href="https://www.facebook.com/yarrakishore" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true" />Git Hub</a>
  </div>
);

export default Header;
