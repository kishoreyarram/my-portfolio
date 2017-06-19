import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNavBar: false,
    };
    this.renderNav = this.renderNav.bind(this);
    this.onNavshow = this.onNavshow.bind(this);
  }

  onNavshow() {
    const { showNavBar } = this.state;
    this.setState({
      showNavBar: !showNavBar,
    });
  }

  renderNav() {
    if (this.state.showNavBar) {
      return (
        <nav className="navbar">
          <ul className="nav nav-pills nav-stacked">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/social">Social Media</Link></li>
            <li><Link to="/contact">Contact me</Link></li>
          </ul>
        </nav>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="nav-bar col-md-2 col-sm-2 col-xs-12">
        <button onClick={this.onNavshow} className="menu-button"><span className={this.state.showNavBar ? 'glyphicon glyphicon-remove menu-remove' : 'glyphicon glyphicon-menu-hamburger menu-add'} /></button>
        {this.renderNav()}
      </div>
    );
  }
}

export default Nav;
