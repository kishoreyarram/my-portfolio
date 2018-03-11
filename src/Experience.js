import React, { Component } from 'react';
import { Link } from 'react-router';

import paypal from './paypal.png';
import apple from './apple.png';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPaypalExperience: false,
      showAppleExperience: false,
    };
    this.onShowExperience = this.onShowExperience.bind(this);
  }

  onShowExperience(type) {
    this.setState({
      showPaypalExperience: type === 'paypal' ? !this.state.showPaypalExperience : false,
      showAppleExperience: type === 'apple' ? !this.state.showAppleExperience : false,
    });
  }

  render() {
    return (
      <div className="experience-page">
        <Link to="/"><span className="glyphicon glyphicon-arrow-left" /> Back To Home</Link>
        <div>
          <img src={paypal} className="paypal-logo" alt="logo" onClick={() => this.onShowExperience('paypal')} />
          <img src={apple} className="apple-logo" alt="logo" onClick={() => this.onShowExperience('apple')} />
        </div>
        {!this.state.showPaypalExperience && !this.state.showAppleExperience ?
          <p className="experience-show-message">Click on the logo to see detailed experience</p> : ''}
        <div className="experience-information">
          {this.state.showPaypalExperience ?
            <div className="paypal-experience">
              <ul>
                <li>Developed an online application that helps <b>PayPal</b> customer service representative to identify and solve the issues of customer.</li>
                <li>Involved in the design disccusions with product owners</li>
                <li>Extensively involved in building front end screens using React.JS, JSX, Redux.JS, LESS, Node.JS.</li>
                <li>Created reusable React components that is used throughout the application development to reduce excess code.</li>
                <li>Developed application on JSX preprocessor that adds XML syntax to JavaScript</li>
                <li>Maintained actions and states of the components with Redux pattern.</li>
                <li>Worked on Node.js to make a AJAX calls from the services.</li>
                <li>Vastly involved in using LESS for styling the components in the Front-end.</li>
                <li>Used Grunt CLI to build the application along with the frontend assets and resources.</li>
                <li>Responsible to write the unit testing for all the React components created and the Node services.</li>
                <li>Used Webstrom to debug the JavaScript.</li>
                <li>Used Source Tree for committing and pushing changes to VCS repository.</li>
              </ul>
            </div> : ''}
          {this.state.showAppleExperience ?
            <div className="apple-experience">
              <ul>
                <li>Responsible for building the Application Styles for <b>Apple</b> ADE application.</li>
                <li>Vastly involved in converting the wireframes to templates using HTML5 and CSS3; Wrote advanced HTML5 & CSS3 with Accessibility and Aria support; Wrote media-queries for various breakpoints, there by implementing Responsive Web Design principles within the application.</li>
                <li>Involved in writing SOY and FTL template files using SOY/FTL template engines.</li>
                <li>Used jQuery within application along with third party community modules such as FlexSlider for carousel implementations and various other plugins.</li>
                <li>Used Cargo CLI to build the application along with the frontend assets and resources.</li>
                <li>Responsible for migrating legacy HTML/CSS code to latest HTML5/CSS3 keeping the markup semantic.</li>
                <li>Responsible to develop a few internal jQuery plugins used throughout the site.</li>
                <li>Involved in direct discussion with the BA and the Design team to get the required look and feel of the application.</li>
              </ul>
            </div> : ''}
        </div>
      </div>
    );
  }
}

export default Experience;
