import React from 'react';
import { Link } from 'react-router';

const Contact = () => (
  <div className="constact">
    <Link to="/"><span className="glyphicon glyphicon-arrow-left" /> Back To Home</Link>
    <h1>My Contact</h1>
  </div>
);

export default Contact;
