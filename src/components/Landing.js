import React, { Component } from 'react';
import logo from '../assets/world.png';

class Landing extends Component {
  render() {
  console.log(this.props)
    return (
      <div>
        <img src={logo} style={{ width: '100%' }} />
        {this.props.instaToken ? (
          <p>
            <button onClick={this.props.fetchLikes} className="BookNow">
              Offers
            </button>
          </p>
        ) : (
          <p>
            <button onClick={this.props.fetchInitial} className="BookNow">
              Authenticate
            </button>
          </p>
        )}
      </div>
    );
  }
}

export default Landing;
