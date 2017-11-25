import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BannerContainer from './components/BannerContainer';
import { INIT } from './actions';
import { connect } from 'react-redux';
import Slider from 'react-slick';

class App extends Component {
  componentWillMount() {
    this.props.fetchInitial();
  }
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Finnair Personalized Flight Search
        </header>
        <main>
          {this.props.instaToken ? (
            <Slider className="App" {...this.settings}>
              <div>
                <BannerContainer />
                {this.props.data && (
                  <ul>
                    {this.props.data.map(({ location, id }) => (
                      <li key={id}>{location.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Slider>
          ) : (
            <div>You're not logged in yet. Redirecting...</div>
          )}
        </main>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    fetchInitial() {
      dispatch({ type: INIT });
    }
  })
)(App);
