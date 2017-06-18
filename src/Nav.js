import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav-bar col-md-2 col-sm-2 col-xs-2">
    <nav className="navbar">
      <ul>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/experience">EXPERIENCE</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/contact">CONTACT ME</Link></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
