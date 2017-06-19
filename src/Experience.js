import React from 'react';
import { Link } from 'react-router';

import under from './under.png';

const Contact = () => (
  <div className="constact">
    <Link to="/"><span className="glyphicon glyphicon-arrow-left" /> Back To Home</Link>
    <img src={under} className="under-logo" alt="logo" />
  </div>
);

export default Contact;
