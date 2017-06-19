import React from 'react';
// import { Link } from 'react-router';
import pnf from './pnf.jpg';


const Empty = () => (
  <div className="empty">
    {/* <Link to="/">Home</Link> */}
    <img src={pnf} className="pnf-logo" alt="logo" />
  </div>
);

export default Empty;
