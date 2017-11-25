import React, { Component } from 'react';
import logo from '../assets/world.png';

class Landing extends Component {
  render() {
    return (
      <div>
        <img src={logo} style={{ width: '100%' }} />
        {this.props.instaToken ? (
          <p>
            <button onClick={this.props.fetchInitial} className="BookNow">
              Offers
            </button>
          </p>
        ) : (
          <p>You're not logged in yet. Redirecting... </p>
        )}
      </div>
    );
  }
}

export default Landing;
