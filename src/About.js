import React from 'react';
import { Link } from 'react-router';

const About = () => (
  <div className="about">
    <Link to="/"><span className="glyphicon glyphicon-arrow-left" /> Back To Home</Link>
    <h1>This is kishore!</h1>
  </div>
);

export default About;
