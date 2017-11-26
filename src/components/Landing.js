import React, { Component } from 'react';
import worldSrc from '../assets/world.png';
import logoSrc from '../assets/finnair.png';


class Landing extends Component {
  state = {
    isFetching: false
  };

  render() {
    return (
      <div className="container">
        <img src={worldSrc} className="img-responsive" />
        {this.props.instaToken ? (
          <div>
            <p>
              <button
                onClick={() => {
                  this.setState({ isFetching: true });
                  this.props.fetchLikes();
                }}
                className={`BookNow $${this.state.isFetching ? 'pressed' : ''}`}
              >
                Offers
              </button>
            </p>
            <p>
              {this.state.isFetching && 'Aggregating personalized offers...'}
            </p>
          </div>
        ) : (
          <p>
            <button onClick={this.props.fetchInitial} className="BookNow">
              Authenticate
            </button>
          </p>
        )}
        <footer className="footer-bottom">
          <img src={logoSrc} className="img-responsive"/>
        </footer>
      </div>
    );
  }
}

export default Landing;
