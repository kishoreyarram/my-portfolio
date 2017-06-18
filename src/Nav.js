import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div id="home">
    <h1>Nav Bar</h1>
    <Link to="/contact">Click to go to Contact</Link>
  </div>
);

export default Nav;
