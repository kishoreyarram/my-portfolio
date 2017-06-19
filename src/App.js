import React from 'react';

import './App.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

export default React.createClass({
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <Nav />
          <div className="container-123 col-md-10 col-sm-10 col-xs-12 pull-right">
            {this.props.children ||
            <p className="quote-home">
              <q><b>Any Fool can write code that a computer can understand. Good Programmers write code that humans can understand.</b></q>
            </p>}
          </div>
        </div>
        <Footer />
      </div>
    );
  },
});
