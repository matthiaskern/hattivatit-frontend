import React, { Component } from 'react';
import logo from '../assets/world.png';

class Landing extends Component {
  render() {
    return (
      <div>
        <img src={logo} style={{ width: '100%' }} />
        <p>You're not logged in yet. Redirecting... </p>
      </div>
    );
  }
}

export default Landing;
