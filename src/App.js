import React from 'react';
import Typist from 'react-typist';
// import logo from './logo.svg';
import under from './under.png';
import './App.css';
// import NavBar from './NavBar';
import Layout from './Layout';

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
};

const App = () => (
  <div className="App">
    <div className="App-header">
      {/* <img src={under} className="App-logo" alt="logo" /> */}
      <div className="kishore-logo-div col-md-3">
        <h1 className="kishore-logo">K</h1>
      </div>
      <Typist
        className="text-animate"
        startDelay="5"
        avgTypingDelay="70"
        cursor={cursor}
      > This is kishore.!</Typist>
    </div>
    <p className="App-intro">
      <Layout />
      {/* This is <b>Kishore</b>, constructing a new page.! */}
      <img src={under} className="under-logo" alt="logo" />
      {/* {children} */}
    </p>
  </div>
);

export default App;
