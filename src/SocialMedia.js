import React from 'react';
import { Link } from 'react-router';

const SocialMedia = () => (
  <div className="constact">
    <Link to="/"><span className="glyphicon glyphicon-arrow-left" /> Back To Home</Link>
    <h4>Connnect me on:</h4>
    <a className="facebook-button" href="https://www.facebook.com/yarrakishore" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-facebook-official face-book" aria-hidden="true" /> Kishore Yarram </a>
  </div>
);

export default SocialMedia;
