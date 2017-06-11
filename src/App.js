import React, { Component } from 'react';
import logo from './logo.svg';
import under from './under.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro">
          This is Kishore, constructing a new page.!
        </p>
				<img src={under} className="under-logo" alt="under" />
      </div>
    );
  }
}

export default App;
